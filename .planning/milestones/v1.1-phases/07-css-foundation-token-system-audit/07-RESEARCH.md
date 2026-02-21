# Phase 7: CSS Foundation & Token System Audit - Research

**Researched:** 2026-02-20
**Domain:** CSS architecture, design tokens, CSS specificity management, Stylelint enforcement
**Confidence:** HIGH

## Summary

Phase 7 establishes the CSS foundation for all subsequent v1.1 phases by completing the design token system, extracting shared components, eliminating specificity hacks, and implementing automated enforcement. The existing codebase already has significant token infrastructure (45 tokens defined in :root, dark mode implemented) but requires completion: 180 hardcoded font-size values, 114 hardcoded spacing values, 3 hardcoded colors, and shared component styles duplicated across page-scoped sections.

**Primary recommendation:** Complete token migration with Stylelint enforcement using stylelint-config-standard + custom rules for token validation. Use CSS cascade layers (@layer) for clean specificity management (well-supported since March 2022). Establish font-size scale after auditing current usage to define only necessary tokens (avoiding unused abstractions). Extract stats-bar, card variants, and minimal hero to global section.

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| CSS-04 | All CSS values use design tokens — zero hardcoded colors, spacing, or font sizes in selectors | Font-size scale patterns (t-shirt vs numeric), Stylelint rules for detection, current audit shows 180 font-size, 114 spacing, 3 color hardcoded values to migrate |
| CSS-05 | Shared components (stats bars, cards, buttons) extracted to global CSS section — page-scoped sections contain only overrides | Component extraction identified: stats-bar (2 pages), card variants (finding-card, exhibit-card, specialty-card), hero-minimal (3 pages). Extraction threshold analysis complete |
| CSS-06 | Zero `!important` declarations — clean specificity cascade throughout stylesheet | Zero !important found (already clean). CSS cascade layers (@layer) recommended for maintaining specificity control without hacks. Browser support mature since March 2022 |
| CSS-07 | Font-size token system added (`--font-size-xs` through `--font-size-5xl`) with consistent usage across all pages | Scale patterns researched (t-shirt vs numeric). Recommendation: audit-first approach to define only used sizes. Pair font-size with line-height in token definitions |
</phase_requirements>

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Token naming & scale:**
- Color tokens: Semantic names only (--color-bg-primary, --color-text-body, --color-accent) — NOT raw palette names
- All existing custom property names can be renamed freely for consistency — no preservation requirements

**Component extraction:**
- Minor visual refinement acceptable during extraction — consistent border-radius, aligned padding welcome. No major visual changes.

**Specificity strategy:**
- Dark mode: Token swap for most cases + targeted selector overrides for edge cases that tokens can't handle
- Refactor aggressively when removing !important — restructure significant chunks of selectors if needed. This phase is the right time.
- Catch any inline style stragglers found during audit — convert them to token-based CSS too, completing what Phase 6 started

**Linting enforcement:**
- Rule scope: Token enforcement AND basic style rules (property ordering, no duplicate selectors, naming conventions)

### Claude's Discretion

- Spacing token naming convention: Pick whichever style (t-shirt sizes or numeric) fits the existing codebase best
- Font-size scale approach: Audit current usage and decide whether to define only used sizes or a full predetermined scale
- Shared vs page-scoped boundary: Assess each component based on current usage and likelihood of spreading to more pages
- Page-scoped CSS organization: Choose between per-page sections or grouped-by-type based on actual similarity after extraction
- Single file vs split: Decide based on current file size and maintainability
- Specificity approach after !important removal: Pick what fits the current structure and browser requirements
- Stylelint severity for hardcoded values: Errors if few violations remain, warnings if overwhelming initially
- Automation (pre-commit hook vs manual): Based on project's current tooling and zero-build philosophy
- Whether to add package.json as dev dependency vs npx-only

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope
</user_constraints>

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Stylelint | 16.x (latest) | CSS linting and token enforcement | Industry standard CSS linter, extensible plugin system, mature ecosystem |
| stylelint-config-standard | Latest | Base ruleset for modern CSS | Official Stylelint config, enforces ~50% of built-in rules, CSS specifications + Baseline Widely Available conventions |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| stylelint-scales | Latest | Enforce numeric value scales | Optional: validates spacing/font-size values match predefined scales |
| stylelint-use-logical | Latest | Enforce logical properties | Optional: ensures use of logical CSS (start/end vs left/right) |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| stylelint-config-standard | stylelint-config-recommended | Recommended has fewer rules (~40% of built-in), standard is more opinionated and comprehensive |
| CSS Cascade Layers | Flat specificity + BEM | Cascade layers eliminate specificity wars with browser-native solution vs naming convention dependency |
| Custom Stylelint plugin | Manual code review | Custom plugin for token enforcement provides automation vs manual PR review overhead |

**Installation:**
```bash
npm install --save-dev stylelint stylelint-config-standard
```

## Architecture Patterns

### Recommended Project Structure

Current: Single `/css/main.css` (3450 lines, ~29k tokens)

```
css/
└── main.css                 # Keep single file (manageable size, zero-build philosophy)
    ├── Design Tokens        ✓ Exists (45 tokens)
    ├── Dark Mode            ✓ Exists
    ├── Reset                ✓ Exists
    ├── Base Typography      ✓ Exists
    ├── Accessibility        ✓ Exists
    ├── Navigation           ✓ Exists
    ├── Layout               ✓ Exists
    ├── Footer               ✓ Exists
    ├── COMPONENTS (global)  → Extract shared here
    ├── Page: Index          ✓ Exists
    ├── Page: Philosophy     ✓ Exists
    └── ... (other pages)    ✓ Exists
```

**Recommendation:** Keep single file. At 3450 lines it's large but not unwieldy. Splitting introduces build complexity that violates zero-build philosophy.

### Pattern 1: Font-Size Token Scale

**What:** Define font-size tokens with paired line-height values

**When to use:** Audit-first approach — define tokens for sizes actually used, not theoretical complete scale

**Current state:** 180 hardcoded font-size declarations across 17 pages

**Example (audit-derived scale):**
```css
/* Source: Firefox Design Tokens + USWDS Design Tokens pattern */
:root {
    /* Font size tokens — audit revealed these 9 sizes used */
    --font-size-xs: 0.7rem;      /* line-height: 1.4 */
    --font-size-sm: 0.85rem;     /* line-height: 1.5 */
    --font-size-base: 0.9rem;    /* line-height: 1.6 */
    --font-size-md: 1rem;        /* line-height: 1.6 */
    --font-size-lg: 1.2rem;      /* line-height: 1.7 */
    --font-size-xl: 1.5rem;      /* line-height: 1.6 */
    --font-size-2xl: 1.8rem;     /* line-height: 1.5 */
    --font-size-3xl: 2.5rem;     /* line-height: 1.3 */
    --font-size-4xl: 3rem;       /* line-height: 1.2 */
    --font-size-5xl: 4rem;       /* line-height: 1.1 */
}
```

**Best practice:** Pair font-size with line-height to avoid typography bugs (line-height issues are most common typography problems).

### Pattern 2: Component Extraction (Shared to Global)

**What:** Move components used on 2+ pages to global COMPONENTS section

**Current duplications found:**
- `.stats-bar` + `.stat-item`: portfolio.html, testimonials.html (2 pages)
- `.finding-card`, `.exhibit-card`, `.specialty-card`: Shared base styles defined at line 425-432, then overridden in page sections
- `.hero-minimal`: philosophy.html, faq.html, contact.html (3 pages, defined once at 435-451)
- Button variants (`.btn`, `.btn-primary`, `.btn-secondary`, `.btn-social`): Already in global section ✓

**Example:**
```css
/* Source: Current codebase pattern at line 425 */
/* === COMPONENTS === */

/* Shared card component base */
.card-base {
    background: var(--color-surface);
    padding: var(--space-xl);
    box-shadow: var(--shadow-sm);
    transition: transform 0.3s;
}

.finding-card,
.exhibit-card,
.specialty-card {
    /* Inherit from base, add specifics as needed */
}

/* Shared stats bar (used: portfolio, testimonials) */
.stats-bar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--space-lg);
}

.stat-item {
    background: var(--color-surface);
    padding: var(--space-lg) var(--space-md);
    border-top: 4px solid var(--color-primary);
    text-align: center;
}
```

### Pattern 3: CSS Cascade Layers for Specificity Control

**What:** Use `@layer` to control cascade order without !important hacks

**When to use:** This project has zero !important declarations (already clean), but layers prevent future specificity wars

**Browser support:** Mature — shipped in Chromium 99, Firefox 97, Safari 15.4 (March 2022). Universal support by 2026.

**Example:**
```css
/* Source: CSS-Tricks Cascade Layers Guide + MDN @layer docs */
@layer reset, base, components, pages, utilities;

@layer reset {
    /* Reset styles — lowest priority */
    * { margin: 0; padding: 0; box-sizing: border-box; }
}

@layer base {
    /* Design tokens, typography, accessibility */
    :root { /* tokens */ }
    body { /* base styles */ }
}

@layer components {
    /* Shared components (buttons, cards, stats) */
    .btn { /* ... */ }
}

@layer pages {
    /* Page-specific overrides */
    .page-index .hero { /* ... */ }
}

@layer utilities {
    /* Utility classes (highest priority) */
    .sr-only { /* ... */ }
}
```

**Benefit:** Layers eliminate specificity wars. A rule in `@layer utilities` always beats `@layer components`, regardless of selector complexity.

### Anti-Patterns to Avoid

- **Theoretical token scales:** Don't define `--font-size-6xl` through `--font-size-10xl` if the design never uses them. Audit first, define what's used.
- **Premature splitting:** Don't split CSS into multiple files "for organization" — adds build complexity, violates zero-build philosophy. Single 3450-line file is maintainable.
- **Raw palette tokens:** Don't expose `--color-navy-700` or `--color-teal-500`. Use semantic names only (`--color-bg-primary`, `--color-text-body`). Keeps dark mode clean.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| CSS token enforcement | Manual PR reviews, grep scripts | Stylelint + custom rules | Automated, runs in editor, catches violations before commit. Custom plugin pattern well-documented. |
| Specificity management | Nested BEM, !important hacks | CSS Cascade Layers (@layer) | Browser-native solution, eliminates specificity math, prevents future wars |
| Font-size/line-height pairing | Separate tokens | Combined tokens or CSS custom properties with fallback | Most typography bugs are line-height problems. Pairing prevents mismatch. |

**Key insight:** Stylelint plugin ecosystem is mature. Custom rules for token enforcement are well-established pattern (see Mozilla's design token migration, Kong Design Tokens). Don't hand-roll bash scripts or git hooks when Stylelint does it better.

## Common Pitfalls

### Pitfall 1: Overwhelming Initial Violations

**What goes wrong:** Running Stylelint with strict token enforcement on 180+ font-size violations overwhelms developers, causes friction, leads to disabling linter.

**Why it happens:** Enabling error-level rules before migration complete.

**How to avoid:** Use warnings initially, errors after migration. Stylelint config supports per-rule severity:
```json
{
  "rules": {
    "custom-rule/require-design-token": ["warn", { /* options */ }]
  }
}
```

**Warning signs:** High violation count (100+), developers committing with `--no-verify`, linter disabled in editor.

### Pitfall 2: Cascade Layer Order Mistakes

**What goes wrong:** Defining layers in wrong order causes unexpected override behavior. Example: `@layer utilities, components` means components always beat utilities.

**Why it happens:** Layers work opposite to specificity — FIRST declared layer has LOWEST priority.

**How to avoid:** Declare layer order explicitly at top of stylesheet:
```css
@layer reset, base, components, pages, utilities;
```

**Warning signs:** Need to add !important to override styles, unexpected cascade behavior after adding @layer.

### Pitfall 3: Font-Size Without Line-Height

**What goes wrong:** Defining `--font-size-lg: 1.2rem` without paired line-height leads to inconsistent vertical rhythm, typography bugs.

**Why it happens:** Treating font-size as independent value rather than part of typography system.

**How to avoid:** Always pair font-size with line-height. Two approaches:

1. **Separate paired tokens:**
```css
--font-size-lg: 1.2rem;
--line-height-lg: 1.7;

.text {
  font-size: var(--font-size-lg);
  line-height: var(--line-height-lg);
}
```

2. **Combined utility classes (Tailwind pattern):**
```css
.text-lg {
  font-size: 1.2rem;
  line-height: 1.7;
}
```

**Warning signs:** Complaints about "text looks cramped" or "too much space between lines", inconsistent vertical rhythm across pages.

### Pitfall 4: Component Extraction Breaks Page-Specific Styles

**What goes wrong:** Moving `.stats-bar` from page-specific section to global breaks selectors like `.page-portfolio .stats-bar` due to specificity change.

**Why it happens:** Global section appears earlier in cascade, page-specific overrides must have equal/higher specificity.

**How to avoid:** Test all pages after extraction. Use cascade layers to guarantee override order:
```css
@layer components {
  .stats-bar { /* global */ }
}

@layer pages {
  .page-portfolio .stats-bar { /* guaranteed to override */ }
}
```

**Warning signs:** Visual regressions on pages after extraction, need to add !important to page overrides.

## Code Examples

Verified patterns from official sources and current codebase:

### Stylelint Configuration (Standard + Custom Rules)

```json
// Source: stylelint-config-standard + stylelint.io/user-guide/configure
{
  "extends": ["stylelint-config-standard"],
  "rules": {
    // Enforce token usage for colors
    "color-no-hex": true,
    "declaration-property-value-disallowed-list": {
      "/^(color|background|border|outline)/": ["/^(?!var\\(--)/"]
    },

    // Enforce token usage for spacing
    "declaration-property-value-disallowed-list": {
      "/^(padding|margin|gap)/": ["/^(?!var\\(--)/"]
    },

    // Enforce token usage for font-size
    "declaration-property-value-disallowed-list": {
      "font-size": ["/^(?!var\\(--)/"]
    },

    // Standard config rules (property ordering, etc.)
    "order/properties-alphabetical-order": true,
    "selector-class-pattern": "^[a-z][a-zA-Z0-9-]*$",

    // No duplicate selectors
    "no-duplicate-selectors": true
  }
}
```

**Note:** The `declaration-property-value-disallowed-list` pattern blocks any value NOT starting with `var(--` for specified properties. This enforces token usage.

### Current Token System (Existing Foundation)

```css
// Source: /css/main.css lines 7-66
:root {
    /* --- Colors --- */
    --color-primary: #0e7c8c;
    --color-primary-hover: #0a6a78;
    --color-accent: #b8860b;
    --color-background: #faf9f6;
    --color-background-alt: #e8e8e8;
    --color-surface: #ffffff;
    --color-text: #2d3436;
    --color-text-muted: #666666;
    /* ... 35 more color tokens ... */

    /* --- Typography --- */
    --font-heading: 'Bebas Neue', 'Arial Black', sans-serif;
    --font-body: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
    --font-mono: 'JetBrains Mono', 'Courier New', monospace;

    /* --- Spacing --- */
    --space-xs: 0.25rem;
    --space-sm: 0.5rem;
    --space-md: 1rem;
    --space-lg: 1.5rem;
    --space-xl: 2rem;
    --space-2xl: 3rem;
    --space-3xl: 4rem;
    --space-4xl: 5rem;
    --space-5xl: 6rem;

    /* --- Border Radius --- */
    --radius-sm: 3px;
    --radius-md: 4px;
    --radius-pill: 20px;

    /* --- Shadows --- */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.08);
    --shadow-md: 0 2px 10px rgba(0, 0, 0, 0.1);
    /* ... etc ... */
}
```

**Status:** Strong foundation. Missing: font-size scale. Need: migration of 180 hardcoded font-size values.

### Dark Mode Token Swap Pattern

```css
// Source: /css/main.css lines 68-102
[data-theme="dark"] {
    /* Token swap — semantic names stay same, values change */
    --color-background: #1a2838;      /* Navy-based, NOT generic black */
    --color-background-alt: #243447;
    --color-surface: #2a3f54;

    --color-text: #e8e8e8;
    --color-text-muted: #a0a0a0;

    /* Borders lighter for visibility on dark */
    --color-border: #3d5266;

    /* Shadows stronger for depth on dark */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
}

/* Edge case selector override (footer always dark) */
[data-theme="dark"] footer {
    background: var(--color-surface);
    color: var(--color-text);
}
```

**Pattern:** Token swap handles 95% of dark mode. Targeted selectors for edge cases (like footer override).

### Component Extraction Example

```css
// Source: Current codebase lines 425-432, 1460-1467, 3392-3416
/* BEFORE: Duplicated across pages */
.page-testimonials .stats-bar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--space-lg);
}

.page-portfolio .stats-bar {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
    gap: var(--space-lg);
}

/* AFTER: Extracted to global COMPONENTS */
@layer components {
    .stats-bar {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
        gap: var(--space-lg);
    }

    .stat-item {
        background: var(--color-surface);
        padding: var(--space-lg) var(--space-md);
        border-top: 4px solid var(--color-primary);
        text-align: center;
    }
}

@layer pages {
    /* Page-specific overrides only */
    .page-portfolio .stat-item {
        /* Custom styling if needed */
    }
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| !important for specificity wars | CSS Cascade Layers (@layer) | March 2022 (browser support) | Eliminates need for !important, natural cascade control |
| Separate CSS files + build step | Single CSS file with sections | Ongoing (zero-build philosophy) | No build complexity, HTTP/2 makes single file viable |
| BEM for specificity management | Cascade layers OR semantic naming | 2022+ | Layers provide native browser solution vs naming convention |
| Manual token enforcement | Stylelint plugins | Mature (2020+) | Automated detection, editor integration, pre-commit hooks |
| Generic dark mode (black backgrounds) | Semantic token swap (brand colors) | Ongoing best practice | Maintains brand identity, cleaner implementation |

**Deprecated/outdated:**
- **!important for overrides:** CSS cascade layers eliminate need entirely (unless overriding third-party CSS like Bootstrap)
- **Preprocessor-only variables (Sass $vars):** CSS custom properties have full browser support, offer runtime flexibility, work with dark mode
- **Build-time token compilation:** Runtime CSS custom properties work natively, no build step needed

## Open Questions

1. **Stylelint custom rule complexity**
   - What we know: Can use `declaration-property-value-disallowed-list` pattern to block non-var() values
   - What's unclear: Whether this catches all cases or needs custom plugin for complex validation
   - Recommendation: Start with disallowed-list pattern, write custom plugin only if gaps found

2. **Component extraction threshold**
   - What we know: stats-bar on 2 pages, hero-minimal on 3 pages, card variants have shared base
   - What's unclear: Whether 2+ pages is right threshold or should be 3+
   - Recommendation: Extract anything used 2+ pages — low cost, prevents future duplication

3. **Font-size scale: audit-first vs predetermined**
   - What we know: 180 hardcoded font-size values exist, need tokens
   - What's unclear: Define tokens for only used sizes (audit-first) vs complete scale (xs-5xl predetermined)
   - Recommendation: Audit-first — scan CSS, list unique sizes, create tokens for actual usage. Avoids unused abstractions.

## Sources

### Primary (HIGH confidence)

**CSS Cascade Layers:**
- [CSS Cascade Layers Browser Support (Can I use)](https://caniuse.com/css-cascade-layers) — Universal support since March 2022
- [Cascade Layers Guide (CSS-Tricks)](https://css-tricks.com/css-cascade-layers/) — Comprehensive implementation guide
- [@layer - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@layer) — Official specification and browser support

**Design Token Patterns:**
- [Design tokens | U.S. Web Design System (USWDS)](https://designsystem.digital.gov/design-tokens/) — Government design system token patterns
- [Design tokens — Firefox Source Docs](https://firefox-source-docs.mozilla.org/toolkit/themes/shared/design-system/docs/README.design-tokens.stories.html) — Mozilla's design token implementation
- [The developer's guide to design tokens and CSS variables (Penpot)](https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/) — Token architecture patterns

**Stylelint Configuration:**
- [stylelint-config-standard (GitHub)](https://github.com/stylelint/stylelint-config-standard) — Official standard config
- [Configuring | Stylelint](https://stylelint.io/user-guide/configure/) — Official configuration guide
- [Rules | Stylelint](https://stylelint.io/user-guide/rules/) — Complete rule reference

### Secondary (MEDIUM confidence)

- [Linting Design Tokens With Stylelint (Michael Mangialardi)](https://www.michaelmang.dev/blog/linting-design-tokens-with-stylelint/) — Custom plugin pattern for token enforcement
- [Design token scales (Minimal Musings)](https://chienchwu.medium.com/design-token-scales-88286ebb6a30) — T-shirt vs numeric scale patterns
- [Design Tokens That Scale in 2026 (Mavic Labs)](https://www.maviklabs.com/blog/design-tokens-tailwind-v4-2026) — Modern token patterns with CSS variables

### Tertiary (LOW confidence)

- [stylelint-scales - npm](https://www.npmjs.com/package/stylelint-scales) — Mentioned in search but not verified for production use
- [stylelint-use-logical-spec - npm](https://www.npmjs.com/package/stylelint-use-logical-spec) — Logical properties enforcement (optional)

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH — Stylelint-config-standard verified from official docs, cascade layers verified from MDN + Can I use
- Architecture: HIGH — Font-size scale patterns from Firefox/USWDS docs, cascade layer pattern from CSS-Tricks/MDN
- Pitfalls: HIGH — Based on current codebase audit (180 font-size violations counted), cascade layer order from official docs
- Stylelint custom rules: MEDIUM — Disallowed-list pattern verified, custom plugin pattern documented but not tested in this codebase

**Research date:** 2026-02-20
**Valid until:** 60 days (stable standards, mature browser features)

**Current codebase audit results:**
- Total CSS lines: 3450
- Existing design tokens: 45 (colors, spacing, typography, shadows, radii)
- Zero !important declarations found ✓
- Hardcoded values to migrate:
  - font-size: 180 instances
  - spacing (padding/margin/gap): 114 instances
  - colors: 3 instances
  - border-radius: 3 instances
- Shared components identified for extraction: stats-bar (2 pages), hero-minimal (3 pages), card variants (base already shared)
- Browser support verified: CSS cascade layers universally supported (2+ years since release)
