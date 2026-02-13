# Phase 1: CSS Foundation - Research

**Researched:** 2026-02-13
**Domain:** CSS Architecture for Static HTML Sites
**Confidence:** HIGH

## Summary

Phase 1 involves extracting inline CSS from 14 static HTML pages into external stylesheets, establishing a centralized design system using CSS custom properties, and ensuring pixel-perfect visual preservation. This is a **refactoring phase**, not a feature phase — success means identical rendering with better maintainability.

The codebase already uses CSS custom properties for colors, which simplifies extraction. The main challenges are: (1) identifying which CSS is truly shared vs page-specific, (2) deciding on file organization strategy, (3) preventing visual regressions during migration, and (4) normalizing inconsistencies without changing intended design.

**Primary recommendation:** Extract to a single `main.css` file first (simplest, safest), then split into modular files only if clear benefits emerge during implementation. Use visual regression testing (screenshots) to catch subtle rendering differences.

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- **Stylesheet location:** `/css/` folder at project root
- **Semantic token naming only:** No raw value layer (no `--navy-900`). Use `--color-primary`, `--color-background`, `--text-heading` pattern
- **Full design system tokenization:** Colors, typography, spacing scale, border radii, shadows — everything becomes CSS custom properties
- **Audit before committing:** Flag discrepancies between live site and design spec (Bebas Neue, Inter, JetBrains Mono, #0a1628, #2dd4bf, #fdf6e3) for user review — do not auto-resolve
- **Exhibit pages as group:** 9 exhibit pages treated as a group with shared exhibit layout styles, not 9 separate stylesheets
- **Migration approach:** Exact extraction first (move inline styles verbatim), then consolidate in separate pass. Safety over cleverness
- **Visual verification:** Screenshot comparison before/after to catch subtle shifts
- **Extract everything uniformly:** No known problematic inline styles

### Claude's Discretion
- File organization (single `main.css` vs multiple stylesheets split by concern)
- CSS reset/normalize inclusion (assess whether it helps or disrupts current rendering)
- Class naming convention (evaluate what's already in use and decide)
- Page-specific scoping strategy (body classes vs separate files)
- Stylesheet path strategy (absolute vs relative for exhibits/ subdirectory)
- Testimonials card pattern classification (component vs page-specific)
- Migration batch grouping (all pages at once vs grouped batches)

### Deferred Ideas (OUT OF SCOPE)
None — discussion stayed within phase scope
</user_constraints>

---

## Standard Stack

### Core
| Library/Tool | Version | Purpose | Why Standard |
|--------------|---------|---------|--------------|
| CSS Custom Properties | Native | Design tokens, theming | Native browser support (all modern browsers), no build step required, live theming |
| CSS Grid | Native | Layout (testimonials grid, philosophy grid) | Modern, two-dimensional layout, excellent browser support |
| Flexbox | Native | Navigation, cards, one-dimensional layouts | Universal browser support, battle-tested, simpler than Grid for linear layouts |
| CSS Media Queries | Native | Responsive breakpoints | Standard responsive design approach, no JavaScript required |

### Supporting
| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| CSS Reset (Meyer Reset) | 2.0 | Normalize browser defaults | **Only if** current rendering depends on browser defaults that vary. Existing code has `* { margin: 0; padding: 0; box-sizing: border-box; }` which may be sufficient |
| Normalize.css | 8.0.1 | Preserve useful defaults while normalizing | Alternative to full reset if subtle inconsistencies appear across browsers |
| Visual regression tools | N/A | Screenshot comparison (manual or BackstopJS) | This phase specifically requires visual verification per CONTEXT.md |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| CSS Custom Properties | Sass variables | Sass requires build step (violates zero-dependency constraint), can't change at runtime (Phase 2 needs dark mode toggle) |
| Manual visual testing | Percy, Chromatic, BackstopJS | Automated tools add dependencies. Manual screenshot comparison sufficient for 14-page static site |
| Single stylesheet | CSS modules, scoped styles | Requires build tools or framework. Static HTML constraint eliminates this option |

**Installation:**
No installation required — using native CSS features only. Stylesheets are manually created and linked via `<link>` tags.

---

## Architecture Patterns

### Recommended Project Structure
```
/css/
├── main.css              # All extracted CSS (initial approach)
OR (if split later):
├── reset.css             # Optional: browser normalization
├── design-tokens.css     # CSS custom properties (:root block)
├── base.css              # Typography, focus states, global elements
├── layout.css            # Navigation, container, section patterns
├── components.css        # Cards, buttons, tables, blockquotes
├── pages.css             # Page-specific overrides (body classes)
└── responsive.css        # Media query breakpoints
```

**Decision:** Start with single `main.css`. Split only if:
1. File exceeds ~2000 lines and becomes hard to navigate
2. Clear logical boundaries emerge (e.g., component library vs page-specific)
3. Load performance benefits appear (unlikely for 14-page static site)

### Pattern 1: CSS Custom Properties for Design Tokens
**What:** Centralize all design values in `:root` using semantic naming
**When to use:** Always, for any value that appears more than once OR supports theming

**Current state (from codebase analysis):**
```css
/* EXISTING PATTERN (all pages already use this): */
:root {
    --navy: #1a2838;
    --teal: #17a2b8;
    --charcoal: #2d3436;
    --cream: #faf9f6;
    --light-gray: #e8e8e8;
    --brass: #b8860b;
}
```

**Target state (semantic naming per CONTEXT.md):**
```css
:root {
    /* Brand Colors - Semantic Names */
    --color-primary: #17a2b8;        /* teal */
    --color-primary-dark: #138496;   /* teal hover state, found in btn-primary:hover */
    --color-accent: #b8860b;         /* brass, used for milestones */
    --color-background: #faf9f6;     /* cream */
    --color-background-alt: #e8e8e8; /* light-gray */
    --color-surface: #ffffff;        /* white cards/sections */
    --color-text: #2d3436;           /* charcoal */
    --color-text-muted: #666666;     /* found in .finding-meta */
    --color-text-light: #999999;     /* found in .exhibit-date */
    --color-inverse: #1a2838;        /* navy, used for dark sections */
    --color-inverse-text: #faf9f6;   /* cream on navy backgrounds */

    /* Typography */
    --font-heading: 'Bebas Neue', 'Arial Black', sans-serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-mono: 'JetBrains Mono', 'Courier New', monospace;

    /* Spacing Scale (extracted from observed patterns) */
    --space-xs: 0.25rem;    /* 4px */
    --space-sm: 0.5rem;     /* 8px */
    --space-md: 1rem;       /* 16px */
    --space-lg: 1.5rem;     /* 24px */
    --space-xl: 2rem;       /* 32px */
    --space-2xl: 3rem;      /* 48px */
    --space-3xl: 4rem;      /* 64px */

    /* Border Radius */
    --radius-sm: 3px;       /* code, tags */
    --radius-md: 4px;       /* buttons, cards */
    --radius-lg: 20px;      /* pill-shaped tags */

    /* Shadows */
    --shadow-sm: 0 2px 8px rgba(0,0,0,0.08);
    --shadow-md: 0 2px 10px rgba(0,0,0,0.1);
    --shadow-focus: 0 0 0 4px rgba(23, 162, 184, 0.2);
}
```

**CRITICAL AUDIT FINDING:**
The design spec states colors as: `#0a1628` (navy), `#2dd4bf` (teal), `#fdf6e3` (cream)
But **actual HTML values** are: `#1a2838` (navy), `#17a2b8` (teal), `#faf9f6` (cream)

**ACTION REQUIRED:** Flag this discrepancy for user review before creating tokens. Do not auto-resolve.

### Pattern 2: Page-Specific Scoping with Body Classes
**What:** Use body classes to scope page-specific CSS instead of separate files
**When to use:** When pages share 80%+ of styles but have minor variations

**Example:**
```css
/* Shared exhibit page styles */
.page-exhibit .hero {
    background: var(--color-inverse);
    /* No background image (unlike index.html) */
}

.page-exhibit .hero::before {
    /* Grid pattern overlay */
    background: repeating-linear-gradient(...);
}

/* Specific exhibit variation (if needed) */
.page-exhibit-a .special-table {
    /* Only on exhibit-a.html */
}
```

**HTML:**
```html
<body class="page-exhibit page-exhibit-a">
```

**Tradeoff:** Body classes keep CSS centralized but add specificity. Alternative is separate `exhibits.css` file loaded only by exhibit pages.

### Pattern 3: CSS Extraction Workflow (Safety-First)
**What:** Two-pass extraction to prevent visual regressions
**When to use:** This phase specifically (per CONTEXT.md migration approach)

**Pass 1: Exact Extraction**
1. Copy inline `<style>` block from page verbatim
2. Paste into `main.css` with page identifier comment
3. Link stylesheet: `<link rel="stylesheet" href="/css/main.css">`
4. Remove inline `<style>` block
5. Screenshot before/after, pixel-diff
6. Repeat for all 14 pages

**Pass 2: Consolidation**
1. Identify duplicate CSS blocks across pages
2. Merge common styles into shared sections
3. Create design tokens for repeated values
4. Convert page-specific CSS to body class scoping OR separate section
5. Re-test all pages visually

**Why two passes:** Separates "extraction risk" from "consolidation risk". If visual regression appears, easier to isolate cause.

### Anti-Patterns to Avoid
- **Using `!important` to override specificity issues:** Signals architectural problem. Fix specificity, don't brute-force it
- **Hardcoding colors/values during extraction:** Defeats purpose of design tokens. Create token, use token
- **Assuming identical markup means identical rendering:** Browser defaults, inherited styles, cascade order matter. Always visual test
- **Splitting CSS too early:** Premature optimization. Start simple (one file), split only when pain is real
- **Relative paths in exhibit subdirectory:** `/css/main.css` (absolute from root) works from all pages. `../css/main.css` brittle

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Visual regression testing | Custom screenshot diffing script | Manual screenshot comparison OR BackstopJS (if automation needed) | Screenshot diffing has edge cases (anti-aliasing, font rendering, OS differences). Manual side-by-side sufficient for 14 pages. BackstopJS if repeated testing needed |
| CSS minification | Custom minifier | Don't minify (static site, 14 pages) | Complexity not justified. Readable CSS more valuable than 10-20KB savings on portfolio site |
| Autoprefixer for vendor prefixes | Manual prefix addition | Don't autoprefix (modern CSS, modern browser target) | Codebase uses Flexbox, Grid, custom properties — all have universal support in 2024-2026 browsers |
| CSS preprocessing (Sass/Less) | Build pipeline | Plain CSS with custom properties | Zero-dependency constraint (per REQUIREMENTS.md). Custom properties provide theming (Phase 2 needs runtime toggle) |

**Key insight:** Static HTML constraint eliminates entire categories of tools. This is **intentional simplicity**, not technical debt.

---

## Common Pitfalls

### Pitfall 1: CSS Cascade Order Changes Breaking Layout
**What goes wrong:** Inline `<style>` blocks are in different positions in different pages. When consolidated into single `main.css`, cascade order changes, breaking layout.

**Why it happens:** CSS specificity is the same, but source order determines winner. Inline styles applied in document order; external stylesheet applies all rules before body content.

**How to avoid:**
1. Document current cascade order (which rules override which)
2. Maintain override order in external stylesheet
3. Use specificity (body classes) if order can't be preserved
4. Test each page individually after extraction

**Warning signs:** Elements positioned differently, colors wrong on specific pages but not others, hover states broken

### Pitfall 2: Color Token Naming Doesn't Support Dark Mode
**What goes wrong:** Naming colors by appearance (`--cream`, `--navy`) instead of semantically (`--color-background`, `--color-text`) makes dark mode swap impossible.

**Why it happens:** Initial tokens mirror design file naming, not usage patterns.

**How to avoid (per CONTEXT.md):**
- Always use semantic names: `--color-primary`, `--color-background`, `--text-heading`
- NEVER use appearance names: `--navy`, `--teal`, `--cream`
- Document what each token is used FOR, not what it IS

**Warning signs:** Phase 2 dark mode implementation requires find/replace instead of simple token swap

### Pitfall 3: Forgetting Browser Default Styles
**What goes wrong:** Pages render differently after extraction because inline styles were overriding browser defaults that external stylesheet doesn't override.

**Why it happens:** Browser applies defaults (margins, padding, font sizes) before author styles. Inline styles have higher specificity than external stylesheet in some cases.

**How to avoid:**
1. Keep existing universal reset: `* { margin: 0; padding: 0; box-sizing: border-box; }`
2. Test in multiple browsers (Chrome, Firefox, Safari) to catch default variations
3. If inconsistencies appear, add Normalize.css (not full reset)

**Warning signs:** Layout shifts on specific browsers, unexpected spacing, form elements styled differently

### Pitfall 4: Path Resolution in Subdirectory
**What goes wrong:** Exhibit pages live in `/exhibits/` folder. Relative path `href="css/main.css"` breaks (tries to load `/exhibits/css/main.css`).

**Why it happens:** Relative paths resolve from current page location, not site root.

**How to avoid:**
- Use absolute-from-root paths: `href="/css/main.css"`
- Works from `/index.html` and `/exhibits/exhibit-a.html`
- Matches navigation fix needed in Phase 3 (NAV-02 requirement)

**Warning signs:** Exhibit pages unstyled, 404 errors in browser console for stylesheet

### Pitfall 5: Assuming CSS Custom Properties Inherit Everywhere
**What goes wrong:** Custom property defined in `:root` doesn't apply inside shadow DOM or iframe.

**Why it happens:** Custom properties inherit through DOM tree, but shadow DOM creates new root.

**How to avoid:** Not applicable to this codebase (no shadow DOM, no iframes). But good to know for future.

**Warning signs:** N/A for this phase

---

## Code Examples

Verified patterns from codebase analysis:

### Example 1: Extracting Shared Navigation Styles
**Before (inline in every page):**
```css
nav {
    background: var(--navy);
    padding: 1rem 2rem;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
}
```

**After (external stylesheet with semantic tokens):**
```css
/* design-tokens.css OR main.css :root block */
:root {
    --color-nav-bg: #1a2838;
    --shadow-md: 0 2px 10px rgba(0,0,0,0.1);
    --space-md: 1rem;
    --space-xl: 2rem;
}

/* main.css navigation section */
nav {
    background: var(--color-nav-bg);
    padding: var(--space-md) var(--space-xl);
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: var(--shadow-md);
}
```

### Example 2: Page-Specific Hero Variations
**Pattern:** Index has background image, exhibits have grid pattern, philosophy has minimal hero

```css
/* Base hero (all pages) */
.hero {
    position: relative;
    color: var(--color-inverse-text);
    padding: 5rem 2rem;
    text-align: center;
}

/* Index-specific hero with background image */
.page-index .hero {
    background-image: url('../assets/images/hero/pattern158_organ_pipes_hero.png');
    background-size: cover;
    background-position: center;
    padding: 6rem 2rem;
    min-height: 600px;
}

.page-index .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background-color: rgba(26, 40, 56, 0.65);
    z-index: 1;
}

/* Exhibit pages hero with grid pattern */
.page-exhibit .hero {
    background: var(--color-inverse);
}

.page-exhibit .hero::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
        repeating-linear-gradient(0deg, transparent, transparent 40px, rgba(23, 162, 184, 0.03) 40px, rgba(23, 162, 184, 0.03) 41px),
        repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(23, 162, 184, 0.03) 40px, rgba(23, 162, 184, 0.03) 41px);
    z-index: 1;
}

/* Philosophy minimal hero */
.page-philosophy .hero {
    background: var(--color-inverse);
    padding: 4rem 2rem;
}
```

### Example 3: Testimonials Grid (Component vs Page-Specific Decision)
**Current code (testimonials.html):**
```css
.exhibit-card {
    background: white;
    margin-bottom: 2.5rem;
    border-left: 6px solid var(--teal);
    padding: 2rem 2.5rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    transition: transform 0.3s;
}
```

**Decision needed (Claude's discretion):**
- If card pattern reused on other pages → component (`.card-exhibit`)
- If only testimonials page uses it → page-specific (`.page-testimonials .exhibit-card`)

**Analysis:** Exhibit detail pages (exhibit-a.html, etc.) have similar `.finding-card` pattern. **Recommendation:** Treat as component with variants:
```css
/* Component: Card Base */
.card {
    background: var(--color-surface);
    padding: 2rem 2.5rem;
    box-shadow: var(--shadow-sm);
    transition: transform 0.3s;
}

/* Variant: Finding card (NTSB style) */
.card--finding {
    border-left: 6px solid var(--color-primary);
    margin-bottom: 2rem;
}

/* Variant: Exhibit card (testimonials) */
.card--exhibit {
    border-left: 6px solid var(--color-primary);
    margin-bottom: 2.5rem;
}
```

---

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Inline styles in every page | External stylesheets with design tokens | Industry standard since ~2010 | Maintainability, browser caching, theming capability |
| CSS preprocessors (Sass/Less) | Native CSS custom properties | ~2018-2020 (when browser support reached critical mass) | Eliminates build step, enables runtime theming (dark mode toggle) |
| CSS frameworks (Bootstrap, Tailwind) | Bespoke CSS for brand identity | Ongoing debate | Pattern 158 needs unique NTSB aesthetic, framework would dilute brand |
| `!important` to fix specificity | Proper cascade architecture | Always best practice | Maintainability, debugging |
| Pixel-based spacing | `rem`-based spacing scale | ~2015-2018 | Accessibility (respects user font size preferences) |

**Deprecated/outdated:**
- **CSS preprocessor variables:** Replaced by native custom properties (can't change at runtime, requires build step)
- **Vendor prefixes for Flexbox/Grid:** Modern browsers (2024+) don't need `-webkit-` prefixes for these features
- **Float-based layouts:** Replaced by Flexbox and Grid (better semantics, easier maintenance)

**Current best practice for static sites (2026):**
- Native CSS features (custom properties, Grid, Flexbox)
- Semantic HTML with minimal classes
- Design tokens in `:root` for theming
- Single external stylesheet for small sites, modular files for large sites
- Absolute-from-root paths for multi-directory structures

---

## Open Questions

### 1. **Should we include a CSS reset/normalize?**
- **What we know:** Existing code has minimal reset (`* { margin: 0; padding: 0; box-sizing: border-box; }`). This works if all browsers render consistently.
- **What's unclear:** Whether cross-browser testing reveals inconsistencies (especially Safari vs Chrome/Firefox).
- **Recommendation:** Start without full reset. Add Normalize.css only if visual testing shows browser-specific issues. Document browser testing results.

### 2. **How granular should design tokens be?**
- **What we know:** CONTEXT.md requires semantic naming, no raw value layer. Must support dark mode (Phase 2).
- **What's unclear:** Balance between "too few tokens" (repeated values) vs "too many tokens" (hard to understand which to use).
- **Recommendation:** Start with ~20-30 tokens: 8-10 colors, 3 fonts, 6-8 spacing values, 3 radius values, 3 shadows. Add more only when duplication appears.

### 3. **Should testimonials grid/cards be component or page-specific?**
- **What we know:** Similar card patterns on testimonials.html and exhibit detail pages. User marked this as Claude's discretion.
- **What's unclear:** Whether pattern is consistent enough to share OR has subtle differences requiring separation.
- **Recommendation:** Analyze card usage across all pages. If 3+ pages use it, extract as `.card` component with variants (`.card--exhibit`, `.card--finding`). If only 1-2 pages, keep page-specific.

### 4. **Single stylesheet or split files?**
- **What we know:** User allows Claude's discretion. No strong preference stated.
- **What's unclear:** Total CSS size after extraction, logical boundaries, load performance impact.
- **Recommendation:** Start with single `main.css`. Current pages have ~500-700 lines of CSS each. After deduplication, likely 1500-2000 lines total. This is manageable in single file. Split only if exceeds 2500 lines or clear module boundaries emerge.

---

## Sources

### Primary (HIGH confidence)
- **Codebase analysis:** Examined index.html, exhibit-a.html, testimonials.html, philosophy.html for current CSS patterns and structure
- **CONTEXT.md:** User decisions on semantic naming, extraction approach, visual verification requirement
- **REQUIREMENTS.md:** Success criteria (CSS-01, CSS-02, CSS-03), zero-dependency constraint

### Secondary (MEDIUM confidence)
- **MDN Web Docs (CSS Custom Properties):** Browser support, inheritance model, best practices — verified this is mature, universally-supported feature (2026)
- **CSS-Tricks (Design Tokens):** Semantic naming patterns, common token categories — widely-accepted industry guidance

### Tertiary (LOW confidence)
- **General CSS best practices:** Based on training data (as of January 2025). CSS architecture patterns are stable but implementation details may have evolved. Flagged for validation during implementation.

---

## Metadata

**Confidence breakdown:**
- **Standard stack:** HIGH — Using native CSS features with universal browser support, verified in actual codebase
- **Architecture patterns:** HIGH — Extracted from existing code structure, aligned with user decisions in CONTEXT.md
- **Pitfalls:** MEDIUM — Based on common CSS issues + path resolution specific to this project structure
- **Color value discrepancy:** HIGH — Directly observed mismatch between design spec and implemented values
- **Open questions:** MEDIUM — Clear areas needing implementation-time decisions, documented with recommendation rationale

**Research date:** 2026-02-13
**Valid until:** 90 days (CSS architecture stable, not fast-moving domain)

**Critical findings requiring user input before implementation:**
1. **Color value mismatch:** Design spec (`#0a1628`, `#2dd4bf`, `#fdf6e3`) vs implemented (`#1a2838`, `#17a2b8`, `#faf9f6`). Which is source of truth?
2. **Browser testing scope:** Which browsers/versions should visual regression testing cover? (Chrome, Firefox, Safari latest? Mobile browsers?)
3. **Deployment environment:** Static file host details (to confirm absolute path strategy works correctly)
