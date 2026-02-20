# Stack Research: Quality Audit & Polish Tools

**Domain:** Quality audit and polish for static HTML portfolio site
**Researched:** 2026-02-20
**Confidence:** HIGH

## Executive Summary

For a comprehensive quality audit of a 17-page static HTML/CSS portfolio site with existing Playwright tests, the recommended stack adds **dev-only audit tools** that integrate with the zero-dependency constraint. All tools are command-line based, run locally or in CI, and require no changes to the production site code.

**Key principle:** Site remains pure HTML/CSS/minimal JS. Tools are development dependencies only.

## Recommended Stack

### Core Audit Tools

| Tool | Version | Purpose | Why Recommended |
|------|---------|---------|-----------------|
| **@axe-core/playwright** | Latest | Accessibility testing integrated with existing Playwright suite | Industry-standard axe engine, already using Playwright, supports WCAG 2.1 A/AA/AAA testing with granular rule control. [Playwright official docs](https://playwright.dev/docs/accessibility-testing) recommend this integration. |
| **Lighthouse CI** | Latest | Automated performance, accessibility, SEO, and best practices audits | Google's official tool for comprehensive quality metrics. Runs headless, generates reports, tracks metrics over time. Designed for CI/CD with static site support via `staticDistDir`. [Source](https://github.com/GoogleChrome/lighthouse-ci) |
| **Stylelint** | Latest | CSS linting for quality, consistency, and maintainability | Over 100 built-in rules for detecting errors, enforcing conventions, managing specificity. Standard in 2026 for CSS quality. [Source](https://stylelint.io/) |
| **HTMLHint** | Latest | HTML static analysis for markup quality and best practices | Fast, configurable HTML validation with rule customization. Catches structural issues Playwright tests might miss. [Source](https://github.com/htmlhint/HTMLHint) |

### Supplementary Audit Tools

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| **pa11y** | 9.x (requires Node 20+) | Command-line accessibility testing for one-off page audits | Quick spot-checks during development. Complements @axe-core/playwright for manual investigation. Supports WCAG 2.0, 2.1, Section 508. [Source](https://github.com/pa11y/pa11y) |
| **Nu HTML Checker (vnu)** | Latest | W3C-standard HTML validation | Official W3C validator for catching spec violations. Use for final validation before release. [Source](https://github.com/validator/validator) |
| **broken-link-checker** | Latest | Detects broken internal/external links, missing images, bad anchors | Essential for 17-page site with cross-references. Catches navigation issues. [Source](https://github.com/stevenvachon/broken-link-checker) |

### Visual Quality Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| **Playwright Screenshots** | Visual regression baseline | Built into Playwright via `toHaveScreenshot()`. Start here before considering external services. FREE and covers 80% of use cases. [Source](https://bug0.com/knowledge-base/playwright-visual-regression-testing) |
| **Chrome DevTools Coverage** | Identify unused CSS selectors | Browser built-in. Manual but accurate. Run against all 17 pages to find dead CSS. [Source](https://developer.chrome.com/docs/devtools/coverage) |
| **Specificity Graph** | CSS specificity visualization | Manual analysis tool for evaluating CSS architecture health. Based on Harry Roberts' ITCSS methodology. [Source](https://github.com/pocketjoso/specificity-graph) |

### Color & Contrast Analysis

| Tool | Purpose | Notes |
|------|---------|-------|
| **axe/Lighthouse contrast checks** | Automated WCAG contrast validation | Covered by axe-core and Lighthouse. No separate tool needed. |
| **WebAIM Contrast Checker** | Manual spot-checking for design refinements | Web-based. Use for exploring palette adjustments. [Source](https://webaim.org/resources/contrastchecker/) |

## Installation

```bash
# Core audit tools (add to existing package.json)
npm install -D @axe-core/playwright stylelint stylelint-config-standard htmlhint @lhci/cli

# Supplementary tools
npm install -D pa11y broken-link-checker

# For HTML validation (Java required)
# Download vnu.jar from https://github.com/validator/validator/releases
# Run with: java -jar vnu.jar *.html
```

## Recommended Configuration

### @axe-core/playwright Integration

Add to existing Playwright test suite:

```javascript
// tests/accessibility.spec.js
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility audits', () => {
  test('Home page should not have violations', async ({ page }) => {
    await page.goto('/');

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa'])
      .analyze();

    expect(accessibilityScanResults.violations).toEqual([]);
  });
});
```

### Stylelint Configuration

Create `stylelint.config.js`:

```javascript
export default {
  extends: ['stylelint-config-standard'],
  rules: {
    // Enforce design token usage
    'color-no-hex': true, // Force CSS custom properties
    'selector-max-specificity': '0,4,0', // Prevent specificity wars
    'max-nesting-depth': 3,
    'no-duplicate-selectors': true,

    // Customizations for your static site
    'no-descending-specificity': null, // May conflict with page-specific overrides
  },
};
```

### Lighthouse CI Configuration

Create `lighthouserc.json`:

```json
{
  "ci": {
    "collect": {
      "staticDistDir": ".",
      "numberOfRuns": 3,
      "url": [
        "index.html",
        "philosophy.html",
        "faq.html",
        "contact.html",
        "testimonials.html"
      ]
    },
    "assert": {
      "assertions": {
        "categories:accessibility": ["error", {"minScore": 0.95}],
        "categories:best-practices": ["error", {"minScore": 0.90}],
        "categories:seo": ["error", {"minScore": 0.95}],
        "categories:performance": ["warn", {"minScore": 0.85}]
      }
    }
  }
}
```

### HTMLHint Configuration

Create `.htmlhintrc`:

```json
{
  "tagname-lowercase": true,
  "attr-lowercase": true,
  "attr-value-double-quotes": true,
  "doctype-first": true,
  "tag-pair": true,
  "spec-char-escape": true,
  "id-unique": true,
  "src-not-empty": true,
  "attr-no-duplication": true,
  "title-require": true,
  "alt-require": true,
  "space-tab-mixed-disabled": "space",
  "inline-style-disabled": true
}
```

## NPM Scripts for Audit Workflow

Add to `package.json`:

```json
{
  "scripts": {
    "audit:a11y": "pa11y-ci --sitemap ./sitemap.xml",
    "audit:css": "stylelint 'css/**/*.css'",
    "audit:html": "htmlhint '**/*.html'",
    "audit:links": "blc http://localhost:8000 -ro",
    "audit:lighthouse": "lhci autorun",
    "audit:all": "npm run audit:html && npm run audit:css && npm run audit:a11y && npm run audit:lighthouse",
    "test:visual": "playwright test --grep visual"
  }
}
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| @axe-core/playwright | Standalone axe DevTools | Never for automation. DevTools is manual browser testing only. |
| Playwright screenshots | Percy / Argos CI | When team size >5 and budget allows. Percy offers smarter diffing and cross-browser rendering but costs $$. [Source](https://bug0.com/knowledge-base/percy-visual-regression-testing) |
| Lighthouse CI | Web Vitals library | If you only need performance metrics in production (requires adding JS to site — breaks zero-dependency constraint). |
| Chrome DevTools Coverage | PurgeCSS | PurgeCSS aggressively removes CSS but requires build pipeline and may break dynamic styles. DevTools is manual but accurate. |
| broken-link-checker | hyperlink (Rust) | hyperlink is 700 pages in 220ms but requires Rust toolchain. broken-link-checker is slower but pure Node.js. [Source](https://github.com/untitaker/hyperlink) |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| **Google Analytics / Tag Manager** | Violates zero-dependency constraint. Requires cookie consent. Privacy concerns. Performance impact. | Cookieless analytics (future milestone TECH-04) or no analytics. |
| **Build tools (Webpack, Vite, Parcel)** | Violates project constraint. Site is intentionally pure HTML/CSS. | Keep as-is. Tools are dev-only audits, not build steps. |
| **CSS-in-JS libraries** | Not applicable to static HTML. Would require React/Vue. | Continue using CSS custom properties. |
| **Automated CSS removal (PurgeCSS)** | Requires build pipeline. Risk of removing dynamic classes (dark mode, menu state). | Manual review using Chrome DevTools Coverage. |
| **Jest for testing** | Playwright already provides test framework. Adding Jest creates redundancy. | Extend Playwright tests. |
| **WAVE browser extension** | Manual tool, not automatable. Good for spot-checks but not CI. | Use @axe-core/playwright for automation. WAVE for occasional manual validation. |

## Stack Patterns by Use Case

**Daily development workflow:**
1. Run `npm run audit:html` and `npm run audit:css` before each commit
2. Fix linting errors (these are objective quality issues)
3. Run Playwright tests including new a11y tests

**Pre-release quality gate:**
1. Run full `npm run audit:all`
2. Generate Lighthouse reports for all 17 pages
3. Review visual regression screenshots
4. Run Nu HTML Checker for W3C validation
5. Check broken links with broken-link-checker
6. Manual review: specificity graph, DevTools coverage

**Investigating specific issues:**
- **"Is this accessible?"** → pa11y [page-url]
- **"Is this HTML valid?"** → java -jar vnu.jar [file.html]
- **"Does this link work?"** → blc [url] -ro
- **"Is this color WCAG compliant?"** → WebAIM Contrast Checker

**CI/CD integration (future):**
- Lighthouse CI runs on every PR
- Playwright tests (including a11y) required to pass
- Link checker prevents broken navigation
- Stylelint/HTMLHint enforce code quality

## Version Compatibility

All tools work with:
- Node.js 20, 22, or 24 (pa11y requirement drives this)
- Playwright 1.58.2 (current)
- Modern browsers (Chrome/Chromium, Firefox, WebKit via Playwright)

No compatibility issues between tools — all are independent CLI utilities.

## Integration with Existing Stack

**Existing:** Static HTML, CSS with 62 design tokens, minimal vanilla JS, Playwright tests

**New tools integrate as:**
- **@axe-core/playwright** → New test files in existing Playwright suite
- **Lighthouse CI** → Standalone audit, no code changes
- **Stylelint** → Lints existing `css/main.css`
- **HTMLHint** → Validates existing 17 HTML files
- **pa11y** → CLI spot-checks, no integration needed
- **broken-link-checker** → Scans deployed site, no code changes

**Critical:** Zero changes to production HTML/CSS/JS. All tools are dev dependencies.

## Confidence Assessment

| Tool Category | Confidence | Rationale |
|---------------|------------|-----------|
| Accessibility | **HIGH** | axe-core is industry standard. Playwright official docs recommend @axe-core/playwright. pa11y actively maintained (v9 released 2026). |
| Performance | **HIGH** | Lighthouse is Google's official tool, widely adopted. Lighthouse CI designed for static sites. |
| CSS Quality | **HIGH** | Stylelint is the standard CSS linter in 2026. Over 100 rules, active development. |
| HTML Validation | **HIGH** | Nu HTML Checker is official W3C validator. HTMLHint is established and actively maintained. |
| Visual Regression | **HIGH** | Playwright built-in screenshots recommended as starting point by multiple sources. Percy/Argos are premium alternatives. |
| Link Checking | **MEDIUM** | Multiple tools available. broken-link-checker is mature but slower than Rust alternatives (hyperlink). |
| Dead CSS Detection | **MEDIUM** | Chrome DevTools Coverage is manual but accurate. No perfect automated solution without build pipeline. |

## Sources

**Accessibility Testing:**
- [Playwright Accessibility Testing Docs](https://playwright.dev/docs/accessibility-testing)
- [axe-playwright on npm](https://www.npmjs.com/package/axe-playwright)
- [pa11y GitHub](https://github.com/pa11y/pa11y)
- [Pa11y and Pa11y-CI Review](https://tech.ryanrobinson.ca/2026/pa11y-ci/)

**Performance & Auditing:**
- [Lighthouse CI GitHub](https://github.com/GoogleChrome/lighthouse-ci)
- [Lighthouse CI Getting Started](https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/getting-started.md)
- [Performance monitoring with Lighthouse CI](https://web.dev/articles/lighthouse-ci)

**CSS Quality:**
- [Stylelint Official Docs](https://stylelint.io/)
- [Level up your CSS linting using Stylelint](https://blog.logrocket.com/using-stylelint-improve-lint-css-scss-sass/)
- [Specificity Graph by Harry Roberts](https://csswizardry.com/2014/10/the-specificity-graph/)
- [Chrome DevTools Coverage](https://developer.chrome.com/docs/devtools/coverage)

**HTML Validation:**
- [HTMLHint GitHub](https://github.com/htmlhint/HTMLHint)
- [Nu HTML Checker GitHub](https://github.com/validator/validator)
- [W3C Markup Validation Service](https://validator.w3.org/)

**Visual Regression:**
- [Playwright Visual Regression Testing Guide](https://bug0.com/knowledge-base/playwright-visual-regression-testing)
- [Argos Visual Testing](https://argos-ci.com)
- [Percy Visual Testing Review](https://bug0.com/knowledge-base/percy-visual-regression-testing)

**Link Checking:**
- [broken-link-checker GitHub](https://github.com/stevenvachon/broken-link-checker)
- [hyperlink GitHub](https://github.com/untitaker/hyperlink)
- [Top 10 Broken Link Checker Tools (2026)](https://www.softwaretestinghelp.com/broken-link-checker/)

**Portfolio Best Practices:**
- [Portfolio Website Best Practices 2026](https://emergent.sh/learn/best-portfolio-website-builders)
- [19 Best Portfolio Design Trends (2026)](https://colorlib.com/wp/portfolio-design-trends/)

---
*Stack research for: Pattern158.Solutions quality audit and polish*
*Researched: 2026-02-20*
*Researcher: GSD Project Research Agent*
