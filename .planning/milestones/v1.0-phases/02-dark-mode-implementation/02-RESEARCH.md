# Phase 2: Dark Mode Implementation - Research

**Researched:** 2026-02-13
**Domain:** Dark mode theming for static HTML sites
**Confidence:** HIGH

## Summary

Dark mode implementation for static HTML sites requires three critical components working together: (1) CSS custom property overrides scoped to a theme selector, (2) system preference detection via `prefers-color-scheme` media query, and (3) localStorage persistence with an inline blocking script in `<head>` to prevent flash of unstyled content (FOUC).

The Pattern 158 site is exceptionally well-positioned for dark mode implementation. Phase 1 established 44 semantic design tokens in a `:root` block with zero hardcoded colors outside token definitions. This means dark mode can be implemented entirely through CSS custom property reassignment scoped to `[data-theme="dark"]` or a `.dark-mode` class on the document root.

**Primary recommendation:** Use `[data-theme="dark"]` attribute on `<html>` element with inline blocking script in `<head>` before any content loads. Override color tokens only (19 color properties), leave spacing/typography/shadows unchanged. Brand-aligned dark palette must maintain NTSB aesthetic using navy (#1a2838) as primary dark background, not generic black.

## Standard Stack

### Core

No external libraries required. Vanilla web platform APIs are sufficient and preferred for this static site.

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| CSS Custom Properties | Native | Theme variable overrides | Browser native, no dependencies, optimal performance |
| localStorage API | Native | Theme preference persistence | Universally supported, synchronous access prevents FOUC |
| matchMedia API | Native | System preference detection | W3C standard for `prefers-color-scheme` detection |

### Supporting

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| `color-scheme` meta tag | HTML5 | Instant user-agent theme hint | Always include for faster initial render |
| `prefers-color-scheme` media query | CSS Level 5 | System preference detection | Required for automatic dark mode |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Inline blocking script | Framework-based solution (React, etc.) | Frameworks add 50KB+ overhead for a feature achievable in <2KB vanilla JS. Violates project constraint "no framework" |
| `[data-theme]` attribute | `.dark-mode` class | Class-based is equally valid. Data attribute is semantically clearer (attribute = configuration state, class = styling hook). Both work identically in CSS selectors |
| localStorage | Cookie-based persistence | Cookies require server involvement, add HTTP overhead. localStorage is client-side only, simpler for static sites |

**Installation:**
```bash
# No dependencies to install - pure web platform APIs
```

## Architecture Patterns

### Recommended File Structure

No new files needed. All dark mode implementation lives in existing files:

```
/
├── css/
│   └── main.css                    # Add [data-theme="dark"] block after :root
├── *.html                          # Add <script> in <head> before <link> tags
└── (optional) js/
    └── theme-toggle.js             # Toggle button logic (if separating from inline)
```

### Pattern 1: Inline Blocking Script (CRITICAL for FOUC Prevention)

**What:** Self-executing JavaScript function in `<head>` that runs BEFORE any CSS or content loads. Synchronously reads localStorage and applies theme class/attribute to prevent visual flash.

**When to use:** ALWAYS for dark mode with localStorage persistence. This is the only reliable way to prevent FOUC in static sites.

**Location:** Must be in `<head>` BEFORE `<link rel="stylesheet">` tags.

**Example:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="color-scheme" content="dark light">

    <!-- CRITICAL: Theme script BEFORE stylesheets -->
    <script>
    (function() {
        var storageKey = 'theme';
        var prefersDarkQuery = '(prefers-color-scheme: dark)';
        var mql = window.matchMedia(prefersDarkQuery);
        var supportsColorSchemeQuery = mql.media === prefersDarkQuery;
        var localStorageTheme = null;

        try {
            localStorageTheme = localStorage.getItem(storageKey);
        } catch (err) {
            // localStorage blocked or unavailable
        }

        var localStorageExists = localStorageTheme !== null;

        if (localStorageExists) {
            // User has explicit preference
            if (localStorageTheme === 'dark') {
                document.documentElement.setAttribute('data-theme', 'dark');
            }
        } else if (supportsColorSchemeQuery && mql.matches) {
            // System prefers dark mode
            document.documentElement.setAttribute('data-theme', 'dark');
        }
        // Default: light mode (no attribute needed if :root defines light defaults)
    })();
    </script>

    <!-- Stylesheets load AFTER theme is set -->
    <link rel="stylesheet" href="/css/main.css">
</head>
```

**Source:** Adapted from https://github.com/donavon/use-dark-mode noflash.js pattern

### Pattern 2: CSS Custom Property Override Block

**What:** All dark mode color adjustments live in a single scoped block that overrides `:root` tokens.

**When to use:** ALWAYS for theme implementation with design tokens.

**Example:**
```css
/* Light mode (default) */
:root {
    --color-primary: #17a2b8;
    --color-background: #faf9f6;
    --color-text: #2d3436;
    /* ... other tokens ... */
}

/* Dark mode overrides */
[data-theme="dark"] {
    --color-primary: #17a2b8;              /* Teal stays same (good contrast on dark) */
    --color-background: #1a2838;           /* Navy background (NTSB brand) */
    --color-background-alt: #243447;       /* Lighter navy for contrast */
    --color-surface: #2a3f54;              /* Card surfaces */
    --color-text: #e8e8e8;                 /* Light text on dark bg */
    --color-text-muted: #a0a0a0;           /* Muted text */
    --color-inverse: #faf9f6;              /* Inverse becomes light */
    --color-inverse-text: #1a2838;         /* Inverse text becomes dark */
    --color-border: #3d5266;               /* Subtle borders */
    /* ... 19 color tokens total ... */
}
```

**Key insight:** Only override COLOR tokens. Spacing, typography, shadows, and radius remain unchanged across themes.

### Pattern 3: Theme Toggle Button

**What:** Accessible button that toggles `data-theme` attribute and saves to localStorage.

**When to use:** REQUIRED per DARK-03 (user toggle with persistence).

**Example:**
```html
<!-- In navigation -->
<button
    id="theme-toggle"
    aria-label="Toggle dark mode"
    aria-pressed="false"
    class="theme-toggle">
    <svg aria-hidden="true" class="icon-sun"><!-- sun icon --></svg>
    <svg aria-hidden="true" class="icon-moon"><!-- moon icon --></svg>
    <span class="sr-only">Toggle dark mode</span>
</button>

<script>
document.getElementById('theme-toggle').addEventListener('click', function() {
    var html = document.documentElement;
    var currentTheme = html.getAttribute('data-theme');
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    // Update DOM
    if (newTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
    } else {
        html.removeAttribute('data-theme');
    }

    // Persist to localStorage
    localStorage.setItem('theme', newTheme);

    // Update ARIA state
    this.setAttribute('aria-pressed', newTheme === 'dark');
});
</script>
```

**Source:** WCAG 2.1 guidance requires non-color indicators (icons) for accessible toggles - https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html

### Pattern 4: System Preference Detection

**What:** Listen for OS-level theme changes and update theme dynamically (optional enhancement).

**When to use:** Nice-to-have after core toggle works. Not required by success criteria but improves UX.

**Example:**
```javascript
// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    // Only update if user hasn't set explicit preference
    if (localStorage.getItem('theme') === null) {
        var newTheme = e.matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme === 'dark' ? 'dark' : null);
    }
});
```

### Anti-Patterns to Avoid

- **Loading separate dark.css and light.css files:** Wastes bandwidth, complicates caching, requires flash prevention for both. Use single CSS file with scoped overrides instead.

- **Applying theme class to `<body>` instead of `<html>`:** Creates specificity issues. `:root` pseudo-class refers to `<html>`, so theme selectors should too for symmetry.

- **Toggling theme AFTER DOMContentLoaded:** Too late - content already painted. Must run inline in `<head>` synchronously.

- **Hard-coding dark colors instead of calculating from brand palette:** Creates visual disconnect. Dark navy (#1a2838) preserves NTSB aesthetic better than generic black (#000000).

- **Inverting ALL colors mathematically:** Breaks brand identity. Teal primary (#17a2b8) should stay teal in dark mode, not become orange. Only backgrounds and text should invert.

- **Icon-only toggle without text or ARIA labels:** Violates WCAG 2.1 Use of Color criterion. Must have non-visual indicators (text label or aria-label).

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Contrast ratio calculation | Custom color lightness algorithm | Browser DevTools Contrast Checker or online tools like WebAIM | WCAG math is complex (relative luminance calculation). Use verified tools, not custom implementations |
| Theme transition animations | CSS transitions on ALL properties | Scoped transitions on specific properties only | Transitioning thousands of inherited color properties causes jank. Transition toggle button state only |
| Feature detection for `prefers-color-scheme` | User-agent string parsing | `window.matchMedia('(prefers-color-scheme: dark)').media !== 'not all'` | UA sniffing is fragile. matchMedia API is the standard detection method |
| Theme persistence | Custom cookie implementation | localStorage API | Cookies involve server, add HTTP overhead, require expiry logic. localStorage is simpler for client-side state |

**Key insight:** Dark mode is deceptively simple. The hard parts are FOUC prevention (requires exact script placement), accessibility (requires proper ARIA), and brand-aligned colors (requires design judgment, not algorithms). Use proven patterns, not custom solutions.

## Common Pitfalls

### Pitfall 1: Flash of Unstyled Content (FOUC)

**What goes wrong:** User visits site with dark mode preference saved. Page loads in light mode for 100-500ms, then flashes to dark mode after JavaScript executes.

**Why it happens:** JavaScript execution happens AFTER HTML parsing and CSS application. By the time `DOMContentLoaded` fires, content is already painted in default (light) theme.

**How to avoid:**
1. Place inline `<script>` in `<head>` BEFORE `<link rel="stylesheet">` tags
2. Script must be self-executing (IIFE), not waiting for DOM events
3. Script must apply theme attribute synchronously (no async/await, no fetch calls)
4. Include `<meta name="color-scheme" content="dark light">` for instant UA chrome updates

**Warning signs:**
- Toggle button works but page flashes on reload
- Dark mode applies but only after visible delay
- Browser DevTools Network tab shows CSS loading before theme script runs

### Pitfall 2: Insufficient Contrast in Dark Mode

**What goes wrong:** Colors that passed WCAG AA contrast in light mode fail in dark mode. Text becomes unreadable.

**Why it happens:** Contrast requirements are identical for both themes (4.5:1 for normal text, 3:1 for large text). Designers sometimes assume "light text on dark background" automatically passes without testing.

**How to avoid:**
1. Test every color combination with contrast checker (Chrome DevTools, WebAIM)
2. Don't just invert colors - some hues need brightness adjustments
3. Light text should be #e8e8e8 or lighter (not #999999) on dark backgrounds
4. Muted colors need MORE brightness in dark mode than they have darkness in light mode

**Warning signs:**
- Gray text looks fine to you but fails automated contrast checks
- Users complain text is hard to read in dark mode
- Chrome DevTools shows contrast ratio below 4.5:1 on hover

**Source:** WCAG 2.1 Success Criterion 1.4.3 - https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html

### Pitfall 3: Forgetting Shadow Adjustments

**What goes wrong:** Box shadows defined for light mode (black shadows with low opacity) become invisible on dark backgrounds. Buttons and cards lose depth.

**Why it happens:** `box-shadow: 0 2px 8px rgba(0,0,0,0.1)` is a dark shadow. On a dark background (#1a2838), dark shadow vanishes.

**How to avoid:**
1. Shadows in dark mode should use LIGHT colors: `rgba(255,255,255,0.1)`
2. Or increase opacity of dark shadows: `rgba(0,0,0,0.5)` for stronger contrast
3. Or rely on border contrast instead of shadows for depth
4. Update `--shadow-*` tokens in `[data-theme="dark"]` block

**Warning signs:**
- Buttons look flat in dark mode
- Cards blend into background
- Depth hierarchy disappears

### Pitfall 4: Theme State Synchronization Across Tabs

**What goes wrong:** User toggles dark mode in Tab A. Tab B stays in light mode until manual refresh.

**Why it happens:** localStorage changes don't automatically trigger updates in other browsing contexts. Each tab has independent JavaScript state.

**How to avoid:**
1. Listen for `storage` event: `window.addEventListener('storage', function(e) { if (e.key === 'theme') updateTheme(); })`
2. Storage event only fires in OTHER tabs, not the one that made the change
3. Update theme when storage event detected

**Warning signs:**
- Toggle works but only in current tab
- Users report inconsistent theme across tabs
- Refresh required to see theme change in background tabs

### Pitfall 5: Missing ARIA States on Toggle Button

**What goes wrong:** Screen reader users can't tell if dark mode is active or inactive. Toggle button announces same label regardless of state.

**Why it happens:** Visual icon changes (moon → sun) are not exposed to assistive technology without ARIA attributes.

**How to avoid:**
1. Add `aria-pressed="true"` when dark mode active, `"false"` when inactive
2. Add `aria-label="Toggle dark mode"` or visible text label
3. Update `aria-pressed` state when theme changes
4. Don't rely on icon alone - include visually hidden text if needed

**Warning signs:**
- Automated accessibility checkers flag toggle button
- Screen reader announces same thing regardless of theme
- Button has no role or state information

**Source:** WCAG 2.1 Success Criterion 1.3.1 Info and Relationships requires programmatic state - https://www.w3.org/WAI/WCAG21/Understanding/info-and-relationships.html

## Code Examples

Verified patterns from official sources:

### Complete Inline Blocking Script (Production-Ready)

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Instant UA chrome hint -->
    <meta name="color-scheme" content="dark light">

    <!-- FOUC Prevention: MUST run before CSS loads -->
    <script>
    (function() {
        // Configuration
        var STORAGE_KEY = 'theme';
        var THEME_ATTR = 'data-theme';

        // Detect system preference support
        var prefersDarkQuery = '(prefers-color-scheme: dark)';
        var mql = window.matchMedia(prefersDarkQuery);
        var supportsColorScheme = mql.media === prefersDarkQuery;

        // Read saved preference
        var savedTheme = null;
        try {
            savedTheme = localStorage.getItem(STORAGE_KEY);
        } catch (err) {
            // localStorage unavailable (private browsing, etc.)
        }

        // Priority: localStorage > system preference > default (light)
        if (savedTheme === 'dark') {
            document.documentElement.setAttribute(THEME_ATTR, 'dark');
        } else if (savedTheme === null && supportsColorScheme && mql.matches) {
            // No saved preference, but system prefers dark
            document.documentElement.setAttribute(THEME_ATTR, 'dark');
        }
        // else: default to light (no attribute needed)
    })();
    </script>

    <!-- Stylesheets load AFTER theme is determined -->
    <link rel="stylesheet" href="/css/main.css">

    <title>Your Site</title>
</head>
```

**Source:** Adapted from https://github.com/donavon/use-dark-mode/blob/develop/noflash.js.txt

### Dark Mode CSS Token Overrides

```css
/* === DESIGN TOKENS === */
:root {
    /* Light mode (default) */
    --color-primary: #17a2b8;
    --color-primary-hover: #138496;
    --color-accent: #b8860b;
    --color-background: #faf9f6;
    --color-background-alt: #e8e8e8;
    --color-surface: #ffffff;
    --color-text: #2d3436;
    --color-text-muted: #666666;
    --color-text-light: #999999;
    --color-inverse: #1a2838;
    --color-inverse-text: #faf9f6;
    --color-border: #dddddd;
    /* ... other tokens ... */
}

/* === DARK MODE OVERRIDES === */
[data-theme="dark"] {
    /* Backgrounds: navy-based palette (NTSB brand) */
    --color-background: #1a2838;           /* Primary dark background */
    --color-background-alt: #243447;       /* Slightly lighter for contrast */
    --color-surface: #2a3f54;              /* Cards, panels */

    /* Text: high contrast on dark backgrounds */
    --color-text: #e8e8e8;                 /* Primary text */
    --color-text-muted: #a0a0a0;           /* Secondary text */
    --color-text-light: #888888;           /* Tertiary text */
    --color-text-medium: #b0b0b0;          /* Medium emphasis */

    /* Inverse: swap light/dark roles */
    --color-inverse: #faf9f6;              /* Light becomes inverse */
    --color-inverse-text: #1a2838;         /* Dark text on light inverse */
    --color-inverse-text-muted: rgba(26, 40, 56, 0.8);

    /* Borders: lighter for visibility on dark */
    --color-border: #3d5266;
    --color-border-primary: rgba(23, 162, 184, 0.4);  /* Slightly more opaque */

    /* Interactive states */
    --color-hover-background: #324456;

    /* Shadows: lighter for depth on dark backgrounds */
    --shadow-sm: 0 2px 8px rgba(0, 0, 0, 0.4);
    --shadow-md: 0 2px 10px rgba(0, 0, 0, 0.5);
    --shadow-hover: 0 4px 8px rgba(0, 0, 0, 0.6);

    /* Overlays: adjust opacity for dark backgrounds */
    --overlay-hero: rgba(26, 40, 56, 0.75);
    --overlay-grid-line: rgba(23, 162, 184, 0.08);
    --overlay-hover-row: rgba(23, 162, 184, 0.1);

    /* Primary color: teal stays mostly same (good contrast) */
    /* --color-primary: #17a2b8; */  /* No change needed */
    /* --color-accent: #b8860b; */   /* Gold stays same */
}
```

**Note:** Only 19 color tokens need overrides. Typography, spacing, radius tokens remain unchanged.

### Accessible Theme Toggle Button (Production-Ready)

```html
<!-- In navigation <ul> -->
<li>
    <button
        id="theme-toggle"
        class="theme-toggle"
        aria-label="Toggle between light and dark mode"
        aria-pressed="false"
        type="button">
        <svg aria-hidden="true" class="icon icon-sun" width="20" height="20" viewBox="0 0 20 20">
            <circle cx="10" cy="10" r="3" fill="currentColor"/>
            <line x1="10" y1="1" x2="10" y2="4" stroke="currentColor" stroke-width="2"/>
            <line x1="10" y1="16" x2="10" y2="19" stroke="currentColor" stroke-width="2"/>
            <!-- ... more sun rays ... -->
        </svg>
        <svg aria-hidden="true" class="icon icon-moon" width="20" height="20" viewBox="0 0 20 20">
            <path d="M17 12a8 8 0 11-9-9 6 6 0 009 9z" fill="currentColor"/>
        </svg>
        <span class="sr-only">Dark mode</span>
    </button>
</li>

<script>
(function() {
    var STORAGE_KEY = 'theme';
    var toggle = document.getElementById('theme-toggle');

    // Set initial ARIA state based on current theme
    var currentTheme = document.documentElement.getAttribute('data-theme');
    toggle.setAttribute('aria-pressed', currentTheme === 'dark' ? 'true' : 'false');

    // Toggle handler
    toggle.addEventListener('click', function() {
        var html = document.documentElement;
        var isDark = html.getAttribute('data-theme') === 'dark';
        var newTheme = isDark ? 'light' : 'dark';

        // Update DOM
        if (newTheme === 'dark') {
            html.setAttribute('data-theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
        }

        // Update ARIA state
        toggle.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');

        // Persist preference
        try {
            localStorage.setItem(STORAGE_KEY, newTheme);
        } catch (err) {
            // localStorage unavailable
        }
    });

    // Sync across tabs (optional enhancement)
    window.addEventListener('storage', function(e) {
        if (e.key === STORAGE_KEY) {
            var newTheme = e.newValue;
            var html = document.documentElement;

            if (newTheme === 'dark') {
                html.setAttribute('data-theme', 'dark');
                toggle.setAttribute('aria-pressed', 'true');
            } else {
                html.removeAttribute('data-theme');
                toggle.setAttribute('aria-pressed', 'false');
            }
        }
    });
})();
</script>
```

**CSS for toggle button:**
```css
.theme-toggle {
    background: none;
    border: none;
    color: var(--color-inverse-text);
    cursor: pointer;
    padding: var(--space-sm);
    display: flex;
    align-items: center;
    gap: var(--space-xs);
}

.theme-toggle .icon {
    transition: opacity 0.2s;
}

/* Show sun in dark mode, moon in light mode */
[data-theme="dark"] .theme-toggle .icon-sun {
    opacity: 1;
}
[data-theme="dark"] .theme-toggle .icon-moon {
    opacity: 0;
}

:root .theme-toggle .icon-sun {
    opacity: 0;
}
:root .theme-toggle .icon-moon {
    opacity: 1;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border-width: 0;
}
```

### System Preference Change Listener (Optional Enhancement)

```javascript
// Listen for OS-level theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e) {
    // Only auto-update if user hasn't set explicit preference
    var savedTheme = localStorage.getItem('theme');
    if (savedTheme === null) {
        var newTheme = e.matches ? 'dark' : 'light';
        var html = document.documentElement;

        if (newTheme === 'dark') {
            html.setAttribute('data-theme', 'dark');
        } else {
            html.removeAttribute('data-theme');
        }

        // Update toggle button ARIA state if it exists
        var toggle = document.getElementById('theme-toggle');
        if (toggle) {
            toggle.setAttribute('aria-pressed', newTheme === 'dark' ? 'true' : 'false');
        }
    }
});
```

**Source:** MDN Web Docs - https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Separate light.css and dark.css files | Single CSS file with scoped `[data-theme]` overrides | ~2019-2020 with CSS custom properties widespread adoption | Reduces HTTP requests, simplifies caching, enables instant theme switching without re-downloading CSS |
| JavaScript class toggle on DOMContentLoaded | Inline blocking script in `<head>` before CSS | ~2020 as FOUC became unacceptable UX | Eliminates flash of wrong theme, improves perceived performance |
| Manual color inversion | System preference detection via `prefers-color-scheme` | 2020 (widespread browser support) | Respects user OS settings, improves accessibility |
| Cookies for theme persistence | localStorage API | ~2018-2020 | Simpler implementation for static sites, no server involvement, no HTTP overhead |
| Generic black backgrounds (#000) | Brand-aligned dark palettes | Ongoing best practice | Maintains brand identity, reduces eye strain (pure black causes halation on OLED), better aesthetics |

**Deprecated/outdated:**
- **`<link media="(prefers-color-scheme: dark)">`**: Still works but requires duplicate CSS files. Superseded by CSS custom properties + single stylesheet approach.
- **Toggle class on `<body>` instead of `<html>`**: Still functional but creates specificity issues with `:root` selectors. Modern pattern uses `<html>` or `document.documentElement`.
- **Hard-coded theme colors without system preference detection**: Pre-2020 approach. Modern implementations MUST support `prefers-color-scheme` per DARK-02 requirement.

## Open Questions

1. **Should exhibit images (screenshots, diagrams) be inverted in dark mode?**
   - What we know: Some sites use `filter: invert()` on images in dark mode
   - What's unclear: Pattern 158 exhibits are NTSB-styled findings with specific screenshots. Inverting may reduce authenticity.
   - Recommendation: Leave images unchanged. Screenshots should appear as originally captured (authentic documentation). If specific images have white backgrounds that clash, handle individually with CSS borders for framing, not global inversion.

2. **Should logo change between light and dark modes?**
   - What we know: Current logo is `pattern158_logo_3pipes_detailed.png`, appears in dark navigation
   - What's unclear: Whether logo has transparent background or baked-in background color
   - Recommendation: Test logo in dark theme. If legibility issues, consider: (a) CSS filter adjustments, (b) swap to dark-optimized logo variant, or (c) add subtle background to logo container. Verify with user during implementation.

3. **Should hero section background images adjust for dark mode?**
   - What we know: Light mode likely has hero images with overlays (--overlay-hero: rgba(26, 40, 56, 0.65))
   - What's unclear: Whether hero images exist, and if so, whether overlay adjustment is sufficient
   - Recommendation: If hero images exist, increase overlay opacity in dark mode (e.g., rgba(26, 40, 56, 0.80)) to maintain text contrast. No image swapping needed.

## Sources

### Primary (HIGH confidence)

- **MDN Web Docs - prefers-color-scheme**: https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme
  Browser support, syntax, implementation patterns for system preference detection

- **Web.dev - prefers-color-scheme**: https://web.dev/prefers-color-scheme/
  Best practices for FOUC prevention, localStorage patterns, loading strategies

- **Web.dev - color-scheme Property**: https://web.dev/articles/color-scheme
  Technical explanation of color-scheme CSS property and meta tag interplay with prefers-color-scheme

- **GitHub - donavon/use-dark-mode**: https://github.com/donavon/use-dark-mode (noflash.js.txt)
  Production-proven inline blocking script pattern for FOUC prevention

- **WCAG 2.1 - Contrast Minimum**: https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
  Required contrast ratios: 4.5:1 normal text, 3:1 large text

- **WCAG 2.1 - Use of Color**: https://www.w3.org/WAI/WCAG21/Understanding/use-of-color.html
  Guidance requiring non-color indicators (icons, text) for theme toggles

### Secondary (MEDIUM confidence)

- **CSS-Tricks - Complete Guide to Dark Mode**: https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/
  localStorage patterns, JavaScript toggle implementation (verified with MDN APIs)

### Tertiary (LOW confidence)

None - all findings verified against authoritative sources (MDN, W3C, Web.dev).

## Metadata

**Confidence breakdown:**
- **Standard stack: HIGH** - All APIs are W3C standards with universal browser support (localStorage, matchMedia, CSS custom properties). No dependencies or library choices involved.
- **Architecture patterns: HIGH** - Inline blocking script pattern verified from production library (donavon/use-dark-mode). CSS token override pattern is standard for design systems.
- **Pitfalls: HIGH** - FOUC, contrast, shadow issues documented in authoritative sources (Web.dev, MDN) and verified with WCAG 2.1 specifications.
- **Color accessibility: HIGH** - Contrast requirements directly from WCAG 2.1 specification, not interpreted from secondary sources.
- **Brand-aligned palette recommendations: MEDIUM** - Based on existing Phase 1 design tokens (#1a2838 navy, #17a2b8 teal) but specific dark mode color values need user validation during implementation.

**Research date:** 2026-02-13
**Valid until:** 60 days (stable web platform APIs, slow-changing standards)

**Assumptions requiring validation:**
1. Navigation structure has space for toggle button (verified structure exists, specific placement TBD)
2. Logo works on dark backgrounds (visual check needed during implementation)
3. Hero images exist and need overlay adjustments (confirm during implementation)
4. No server-side rendering or build process conflicts with inline script (static HTML confirmed)

**Not researched (out of scope for Phase 2):**
- Animated theme transitions (deferred - causes performance issues, not required)
- Per-page theme preferences (deferred - adds complexity, not required)
- Print stylesheet dark mode handling (deferred - separate concern)
