# Pattern 158 Solutions Website

## What This Is

The personal brand website for Dan Novak (pattern158.solutions) -- a static HTML portfolio site presenting 28 years of systems architecture and eLearning engineering through an NTSB investigation report aesthetic. The site features a comprehensive design token system (font-size, spacing, color, cascade layers) with Stylelint enforcement, dark mode, responsive mobile navigation, full SEO coverage, and WCAG AA accessibility compliance (37/37 contrast tests passing) across 17 pages.

## Core Value

The site must accurately and compellingly present Dan's professional identity and body of work to hiring managers, fellow engineers, and potential clients -- with every claim traceable to primary sources.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ **HOME-01**: Landing page with hero, specialty cards, featured projects, philosophy section -- v2.0
- ✓ **PHIL-01**: Philosophy page with six brand elements (Provider of Clarity, Cheat Fair, Build the Tool, Seek Knowledge, Time Machine, TASBot) -- v2.2
- ✓ **FAQ-01**: FAQ page with 15 questions in 4 categories using native `<details>` accordion -- v2.2
- ✓ **CONT-01**: Contact page with email, LinkedIn, GitHub, response guidance, testimonial -- v2.2
- ✓ **NAV-01**: Consistent cross-page navigation with semantic HTML -- v2.2
- ✓ **A11Y-01**: WCAG 2.1 AA compliance (contrast, focus indicators, skip link, semantic elements) -- v2.1
- ✓ **BRAND-01**: Brand assets deployed (hero image, logo with 1:5:8 ratio, favicon) -- v2.0
- ✓ **BRAND-02**: Design system (Navy/Teal/Cream palette, Bebas Neue/Inter/JetBrains Mono typography) -- v2.0
- ✓ **FIELD-01**: Testimonials page ("Field Reports") with 9 exhibit case study pages integrated into site navigation -- v1.0
- ✓ **FIELD-02**: Field Reports nav link present in all page navigations -- v1.0
- ✓ **POLISH-01**: Consistent navigation across ALL 17 pages including testimonials and exhibits -- v1.0
- ✓ **POLISH-02**: All pages use same nav structure (Home, Philosophy, FAQ, Contact, Field Reports) -- v1.0
- ✓ **TECH-01**: Dark mode with CSS custom properties, brand-aligned palette, toggle, persistence, FOUC prevention -- v1.0
- ✓ **TECH-02**: SEO metadata (Open Graph, JSON-LD structured data, meta descriptions) across all 17 pages -- v1.0
- ✓ **TECH-03**: Performance optimization (hero compression, WCAG color contrast, CLS elimination, font-display swap) -- v1.0
- ✓ **TECH-05**: Mobile hamburger menu with keyboard accessibility and 48px touch targets -- v1.0
- ✓ **CSS-01**: All inline `<style>` blocks extracted to shared external stylesheet -- v1.0
- ✓ **CSS-02**: All hardcoded color values replaced with CSS custom properties (including inline styles) -- v1.0
- ✓ **CSS-03**: Page structure normalized across all HTML files -- v1.0
- ✓ **NAV-02**: All navigation paths use absolute-from-root URLs -- v1.0
- ✓ **NAV-03**: Mobile hamburger menu with accessible ARIA attributes -- v1.0
- ✓ **NAV-04**: Hamburger menu has 48x48px touch targets and keyboard support -- v1.0
- ✓ **DARK-01**: Dark theme using CSS custom properties with brand-aligned palette -- v1.0
- ✓ **DARK-02**: System preference detection via prefers-color-scheme -- v1.0
- ✓ **DARK-03**: User toggle with localStorage persistence -- v1.0
- ✓ **DARK-04**: No flash of unstyled content (inline theme detection in `<head>`) -- v1.0
- ✓ **SEO-01**: Unique meta description for each page -- v1.0
- ✓ **SEO-02**: Open Graph tags on all pages -- v1.0
- ✓ **SEO-03**: JSON-LD structured data (Person + WebSite schema) -- v1.0
- ✓ **SEO-04**: sitemap.xml listing all 17 pages -- v1.0
- ✓ **PERF-01**: Hero image compressed (148KB to 118KB) -- v1.0
- ✓ **PERF-02**: No non-critical images require lazy loading (N/A by architecture) -- v1.0
- ✓ **PERF-03**: Font loading optimized (font-display: swap) -- v1.0
- ✓ **CSS-04**: All CSS values use design tokens — zero hardcoded colors, spacing, or font sizes -- v1.1
- ✓ **CSS-05**: Shared components extracted to global CSS section — page-scoped sections contain only overrides -- v1.1
- ✓ **CSS-06**: Zero `!important` declarations — clean specificity cascade throughout -- v1.1
- ✓ **CSS-07**: Font-size token system (xs through 5xl) with consistent usage across all pages -- v1.1
- ✓ **CONTENT-01**: Content inventory completed — all sections across 17 pages cataloged -- v1.1
- ✓ **CONTENT-02**: Redundant content eliminated — ROT audit with canonical locations -- v1.1
- ✓ **CONTENT-03**: Zero typos or grammatical errors across all 17 pages -- v1.1
- ✓ **CONTENT-04**: Information architecture optimized — clear user journeys for hiring managers, engineers, clients -- v1.1
- ✓ **LAYOUT-01**: Consistent spacing using design tokens across all 17 pages -- v1.1
- ✓ **LAYOUT-02**: Mobile layout verified at 320px/768px viewports -- v1.1
- ✓ **LAYOUT-03**: Component alignment consistent across all pages -- v1.1
- ✓ **LAYOUT-04**: Generous whitespace with intentional visual rhythm -- v1.1
- ✓ **TYPO-01**: Typography hierarchy clear and consistent across all pages -- v1.1
- ✓ **TYPO-02**: Heading hierarchy correct — no skipped levels on any page -- v1.1
- ✓ **TYPO-03**: Responsive typography scales appropriately for mobile viewports -- v1.1
- ✓ **COLOR-01**: All text meets WCAG AA contrast ratios in both light and dark modes -- v1.1
- ✓ **COLOR-02**: Dark mode visually consistent with brand (navy-based) across all 17 pages -- v1.1
- ✓ **COLOR-03**: Link colors distinct from body text and consistent in both themes -- v1.1

### Active

<!-- Current milestone: v1.2 — Rustici-Targeted Content + Exhibit/Nav/QA -->

- [x] **CONTENT-05**: SCORM Debugger exhibit (exhibit-m) — TASBot for eLearning, Rustici gap callout
- [x] **CONTENT-06**: CSBB Dispatch exhibit (exhibit-e) — "Built 2011, 5 years before Rustici Content Controller"
- [x] **CONTENT-07**: BP Learning Platform exhibit (exhibit-n) — Rustici Content Controller integration experience
- [x] **CONTENT-08**: Three positioning narratives surfaced on portfolio page (Three Lenses section)
- [x] **CONTENT-09**: GM Investigation exhibit strengthened — Swiss cheese model, three-angle methodology, SuccessFactors
- [x] **CONTENT-10**: Homepage Five Core Influences section with application context
- [x] **CONTENT-11**: Cross-references updated — philosophy, homepage, sitemap for new exhibits
- [x] **CONTENT-12**: Framing correction verified — no "budget substitute" language in codebase
- [ ] **EXHIBIT-01**: All exhibits follow Challenge → Approach → Solution → Results structure
- [ ] **EXHIBIT-02**: Quantifiable results/metrics highlighted in summaries
- [ ] **EXHIBIT-03**: Impact-first headlines — outcomes visible within 30-second scan
- [ ] **EXHIBIT-04**: Visual consistency across all exhibit pages
- [ ] **NAV-05**: Navigation structure 100% identical across all pages
- [ ] **NAV-06**: Footer optimized — contact visibility, social links, trust elements
- [ ] **NAV-07**: Zero broken internal links across all pages
- [ ] **A11Y-02**: Full WCAG AA re-verification passes after all changes
- [ ] **A11Y-03**: Automated accessibility test suite passes
- [ ] **A11Y-04**: Cross-browser rendering verified
- [ ] **A11Y-05**: All pages verified in light/dark modes on desktop and mobile
- [ ] **A11Y-06**: Semantic HTML verified

### Out of Scope

<!-- Explicit boundaries. -->

- Blog platform -- major feature, separate project if ever
- Resume hosting/download -- resumes are tailored per application, managed elsewhere
- Backend/CMS -- static site, no server-side processing
- Cover letter or LinkedIn management -- external platforms
- Content creation (new case studies, new testimonials) -- content sourced from existing archives
- JavaScript frameworks (React, Vue, etc.) -- violates static HTML constraint
- Build tools (Webpack, Vite, etc.) -- site intentionally has zero build dependencies
- Google Analytics -- privacy concerns, performance impact, requires cookie consent
- Parallax scrolling / animations -- conflicts with NTSB investigation aesthetic
- Cookie consent banner -- eliminated by choosing cookieless analytics
- Analytics integration (TECH-04) -- deferred past v1.2, not needed for Rustici opportunity

## Context

Shipped v1.1 with ~11,535 LOC (7,850 HTML + 3,685 CSS) across 17 pages. v1.2 Phase 12 added 3 new exhibit pages (SCORM Debugger, CSBB Dispatch, BP Learning Platform), Three Lenses positioning section, Five Core Influences on homepage, and GM exhibit enhancements — now 22 HTML pages total. Tech stack: static HTML, single CSS file with cascade layers, 80+ design tokens (colors, fonts, spacing, shadows, font-sizes), Stylelint enforcement, minimal vanilla JS (theme toggle, hamburger menu). No build tools, no frameworks, no runtime dependencies.

v1.0 established the foundation (2026-02-10 to 2026-02-19). v1.1 audited and polished CSS architecture, content quality, layout spacing, typography hierarchy, and color accessibility (2026-02-20 to 2026-02-21). All NTSB investigation structure applied to exhibits. WCAG AA verified with 37/37 contrast tests.

This website was originally developed as part of a broader "Career Documentation Refactoring" GSD project in an Obsidian vault. The website-specific work was factored out to this standalone repository. This repo is now the source of truth.

**Current site pages (17 HTML files):**
- index.html -- Home/landing with hero, projects as "Findings," philosophy preview
- philosophy.html -- Six brand elements, methodology, origin story, influences
- faq.html -- 15 questions, native accordion, 4 categories
- contact.html -- Email, LinkedIn, GitHub, guidance, testimonial
- testimonials.html -- "Field Reports" with 9 exhibit summaries, metrics
- exhibits/exhibit-a.html through exhibit-l.html -- 12 detailed case study pages

**Brand identity:**
- Name: Pattern 158 (Myst fireplace puzzle reference -- 1:5:8 ratio)
- Tagline: "I cheat, but I cheat fair." (The Three Stooges, "Tassels in the Air," 1938)
- Aesthetic: NTSB investigation reports, industrial/technical
- Six elements: Provider of Clarity, Cheat Fair, Build the Tool, Seek Knowledge, Time Machine, TASBot

## Constraints

- **Static HTML only**: No build tools, no frameworks, no JavaScript dependencies. Pure HTML/CSS with minimal vanilla JS where needed.
- **Accessibility**: WCAG 2.1 AA minimum. All changes must maintain or improve compliance.
- **Brand consistency**: All content must align with established brand voice and design system.
- **Factual accuracy**: Every claim on the site must be traceable to primary sources (emails, project files). No embellishment.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Factor website out of vault GSD project | Vault project scope too broad; website needs its own development lifecycle | ✓ Good |
| This repo is source of truth | Vault managed content authoring; now that site is live, HTML is the canonical form | ✓ Good |
| Static HTML, no framework | Simplicity, zero dependencies, fast load times, easy to deploy | ✓ Good |
| NTSB investigation aesthetic | Unique, memorable, aligns with forensic engineering brand | ✓ Good |
| Testimonials as "Field Reports" with exhibit pages | Gives weight to testimonials, matches investigation aesthetic | ✓ Good |
| Color source of truth: implemented values | Keep #1a2838, #17a2b8, #faf9f6 not design spec values | ✓ Good |
| Semantic token naming (--color-primary not --navy) | Enables theme flexibility without renaming tokens | ✓ Good |
| Brand-aligned dark mode (navy not generic black) | Preserves NTSB aesthetic in both themes | ✓ Good |
| localStorage for theme persistence (not cookies) | Simpler, no server needed, immediate access in blocking script | ✓ Good |
| Absolute-from-root nav paths (/page.html) | Avoids relative path fragility in exhibits/ subdirectory | ✓ Good |
| Automated Playwright testing over manual verification | Reproducible, 27/27 tests passed, faster iteration | ✓ Good |
| --color-primary #17a2b8 to #0e7c8c | WCAG 4.5:1 compliance while preserving teal brand identity | ✓ Good |
| JPEG Q72 for hero (not Q85) | Q85 gave <1% reduction, Q72 gives 20% at acceptable quality | ✓ Good |
| --color-inverse-text-muted for dark backgrounds | --color-text-muted fails WCAG on dark footer/nav/hero contexts | ✓ Good |

| UX over brand when conflicting | Best practices should win over aesthetic when they improve usability | ✓ Good |
| Font-size token scale (xs-5xl) | Consolidated 24 hardcoded values into 10 semantic tokens | ✓ Good |
| Cascade layer ordering (reset → base → components → pages → utilities) | Clean specificity control without !important | ✓ Good |
| Stats-bar component extraction | Eliminated 85% duplication between testimonials and portfolio | ✓ Good |
| Stylelint token enforcement | Automated prevention of hardcoded CSS values in future development | ✓ Good |
| Portfolio reordered by exhibit strength | Hiring manager 30-second scan requires strongest exhibits first, not chronological | ✓ Good |
| NTSB investigation structure for all exhibits | Consistent Challenge → Approach → Solution → Results across all case studies | ✓ Good |
| Token-level responsive typography | Redefine token values at breakpoints instead of per-selector overrides | ✓ Good |
| WCAG AA contrast fixes (14 failures resolved) | Light mode text-light darkened, dark mode teal lightened, gold accent split per theme | ✓ Good |
| Base link underline with cascade layer override | WCAG 1.4.1 compliance: body links underlined, nav/button links clean via layer cascade | ✓ Good |

---
*Last updated: 2026-02-21 after v1.2 Phase 12 (Rustici-targeted content)*
