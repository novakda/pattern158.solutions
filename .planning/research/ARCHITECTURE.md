# Architecture Research

**Domain:** Static Multi-Page Portfolio Website
**Researched:** 2026-02-13
**Confidence:** MEDIUM-HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                    Presentation Layer                        │
├─────────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐    │
│  │ index.   │  │ contact. │  │ exhibits/│  │ (11 more │    │
│  │ html     │  │ html     │  │ *.html   │  │ pages)   │    │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘    │
│       │ (inline)    │ (inline)    │ (inline)    │           │
├───────┴─────────────┴─────────────┴─────────────┴──────────┤
│                      Style Layer                             │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐    │
│  │   CSS Custom Properties (:root variables)           │    │
│  │   Duplicated <style> blocks in each HTML file       │    │
│  └─────────────────────────────────────────────────────┘    │
├─────────────────────────────────────────────────────────────┤
│                      Asset Layer                             │
│  ┌───────────┐  ┌────────────┐  ┌────────────┐             │
│  │  Images   │  │ Google     │  │  Favicons  │             │
│  │  (3 PNG)  │  │ Fonts CDN  │  │            │             │
│  └───────────┘  └────────────┘  └────────────┘             │
└─────────────────────────────────────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Current Implementation |
|-----------|----------------|------------------------|
| HTML Pages | Structure, content, embedded styles | 14 standalone .html files with duplicated nav/footer markup |
| CSS Custom Properties | Design system (colors, fonts, spacing) | Defined in :root{} within each page's <style> block |
| Navigation | Site-wide navigation menu | HTML <nav> markup duplicated in each file (with minor inconsistencies) |
| Footer | Contact info, copyright | HTML <footer> markup duplicated in each file |
| Assets | Static resources (images, fonts) | 3 local images + Google Fonts from CDN |
| Dark Mode | Theme switching | NOT IMPLEMENTED (to be added) |
| SEO Meta | Search optimization | Basic meta tags present, room for enhancement |

## Recommended Project Structure

Current state:
```
pattern158.solutions/
├── assets/
│   └── images/
│       ├── hero/           # Hero background image
│       ├── icons/          # Favicon
│       └── logos/          # Logo image
├── exhibits/               # 9 project showcase pages
│   ├── exhibit-a.html
│   ├── exhibit-b.html
│   └── ...
├── index.html              # Homepage
├── contact.html            # Contact page
├── faq.html                # FAQ page
├── philosophy.html         # Philosophy page
└── testimonials.html       # Testimonials page
```

Recommended structure for milestone (adding shared components):
```
pattern158.solutions/
├── assets/
│   ├── css/                # NEW: Extracted shared styles
│   │   ├── base.css        # Reset, custom properties, typography
│   │   ├── components.css  # Nav, footer, buttons, cards
│   │   ├── layout.css      # Grid, containers, spacing
│   │   └── dark-mode.css   # Dark theme overrides
│   ├── js/                 # NEW: Minimal vanilla JS
│   │   ├── nav.js          # Shared nav injection (if JS approach)
│   │   ├── footer.js       # Shared footer injection (if JS approach)
│   │   └── dark-mode.js    # Theme toggle logic
│   └── images/             # Existing images (unchanged)
├── includes/               # ALTERNATIVE: HTML fragments (if using SSI or build)
│   ├── nav.html
│   └── footer.html
├── exhibits/
│   └── *.html              # Updated to reference external CSS
├── index.html              # Updated to reference external CSS
├── contact.html
├── faq.html
├── philosophy.html
└── testimonials.html
```

### Structure Rationale

**Why external CSS over inline:**
- Single source of truth for design system (no drift between pages)
- Easier maintenance (one file to update vs 14)
- Browser caching (styles downloaded once, reused across pages)
- Separation of concerns (content vs presentation)
- Dark mode easier to implement (single override file)

**Why minimal JS approach:**
- Maintains "no framework" constraint
- Progressive enhancement (works without JS, better with it)
- Small payload (< 5KB total for all scripts)
- No build step required

**Why NOT a build tool (per project constraints):**
- Adds complexity
- Requires Node.js/npm
- Build step friction
- Project explicitly uses pure HTML/CSS

## Architectural Patterns

### Pattern 1: CSS Custom Properties for Design System

**What:** Centralized color/font/spacing tokens in :root that propagate to all components

**When to use:** Every static site with consistent branding (already partially implemented)

**Trade-offs:**
- PRO: Change once, updates everywhere
- PRO: Dark mode via property overrides
- PRO: No build tooling needed
- CON: IE11 doesn't support (not relevant in 2026)

**Example:**
```css
/* base.css */
:root {
    /* Light mode (default) */
    --navy: #1a2838;
    --teal: #17a2b8;
    --charcoal: #2d3436;
    --cream: #faf9f6;
    --light-gray: #e8e8e8;
    --brass: #b8860b;

    /* Semantic tokens */
    --bg-primary: var(--cream);
    --bg-secondary: var(--navy);
    --text-primary: var(--charcoal);
    --text-inverse: var(--cream);
    --accent: var(--teal);
}

/* Dark mode override */
[data-theme="dark"] {
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --text-primary: #c9d1d9;
    --text-inverse: #0d1117;
    --cream: #0d1117;
    --charcoal: #c9d1d9;
}

body {
    background: var(--bg-primary);
    color: var(--text-primary);
}
```

### Pattern 2: Shared Navigation via JavaScript Injection

**What:** Single nav HTML string loaded via vanilla JS into placeholder on each page

**When to use:** Static sites without SSI/build tools that need consistent nav

**Trade-offs:**
- PRO: Single source of truth (update once)
- PRO: No build step
- PRO: Works with plain file serving
- CON: Flash of no-nav if JS blocked (mitigate with critical CSS)
- CON: Not indexable by crawlers (nav links won't be seen in HTML)

**Example:**
```javascript
// assets/js/nav.js
const navHTML = `
<nav>
    <div class="container">
        <a href="/index.html" class="logo-link">
            <img src="/assets/images/logos/pattern158_logo_3pipes_detailed.png"
                 alt="Pattern 158" class="logo-img" height="48">
        </a>
        <ul>
            <li><a href="/index.html#work">Work</a></li>
            <li><a href="/index.html#about">About</a></li>
            <li><a href="/philosophy.html">Philosophy</a></li>
            <li><a href="/faq.html">FAQ</a></li>
            <li><a href="/contact.html">Contact</a></li>
            <li><a href="/testimonials.html">Field Reports</a></li>
        </ul>
    </div>
</nav>`;

document.addEventListener('DOMContentLoaded', () => {
    const placeholder = document.getElementById('nav-placeholder');
    if (placeholder) {
        placeholder.outerHTML = navHTML;
    }
});
```

```html
<!-- Each page includes: -->
<div id="nav-placeholder"></div>
<script src="/assets/js/nav.js"></script>
```

### Pattern 3: Server-Side Includes (SSI) Alternative

**What:** Use Apache/nginx directives to include shared HTML fragments

**When to use:** If hosting supports SSI (Apache with mod_include, nginx)

**Trade-offs:**
- PRO: No JavaScript needed
- PRO: SEO-friendly (crawlers see full HTML)
- PRO: No flash of missing content
- PRO: Works with JS disabled
- CON: Requires server configuration
- CON: Doesn't work with file:// protocol (local development)

**Example:**
```html
<!-- includes/nav.html -->
<nav>
    <div class="container">
        <!-- nav content -->
    </div>
</nav>

<!-- Each page includes: -->
<!--#include virtual="/includes/nav.html" -->
```

```apache
# .htaccess (Apache)
Options +Includes
AddOutputFilter INCLUDES .html
```

### Pattern 4: Template Literal Build Script

**What:** Minimal Node.js script that injects shared components into HTML files (pre-deployment)

**When to use:** Want shared components without runtime dependencies, acceptable to run script before deploying

**Trade-offs:**
- PRO: No runtime JS
- PRO: SEO-friendly
- PRO: Fast page loads
- CON: Requires Node.js (violates "no build tools" if interpreted strictly)
- CON: Must run script after editing nav/footer

**Example:**
```javascript
// build.js (optional, run manually)
const fs = require('fs');
const glob = require('glob');

const nav = fs.readFileSync('includes/nav.html', 'utf8');
const footer = fs.readFileSync('includes/footer.html', 'utf8');

glob.sync('**/*.html', { ignore: 'includes/**' }).forEach(file => {
    let html = fs.readFileSync(file, 'utf8');
    html = html.replace('{{NAV}}', nav);
    html = html.replace('{{FOOTER}}', footer);
    fs.writeFileSync(file, html);
});
```

### Pattern 5: Dark Mode with localStorage Persistence

**What:** CSS custom property override triggered by data attribute, preference saved to localStorage

**When to use:** Every modern website (accessibility + user preference)

**Trade-offs:**
- PRO: Simple implementation
- PRO: Respects user preference
- PRO: No external dependencies
- CON: Requires small amount of JS
- CON: Flash of wrong theme (mitigate with inline script in <head>)

**Example:**
```javascript
// assets/js/dark-mode.js
const STORAGE_KEY = 'theme';
const DARK_THEME = 'dark';
const LIGHT_THEME = 'light';

function getPreferredTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? DARK_THEME
        : LIGHT_THEME;
}

function setTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
}

function toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme') || LIGHT_THEME;
    setTheme(current === DARK_THEME ? LIGHT_THEME : DARK_THEME);
}

// Initialize on load
setTheme(getPreferredTheme());
```

```html
<!-- Inline in <head> to prevent flash -->
<script>
(function() {
    const theme = localStorage.getItem('theme') ||
        (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
})();
</script>

<!-- Toggle button in nav -->
<button onclick="toggleTheme()" aria-label="Toggle dark mode">
    🌙
</button>
```

## Data Flow

### Navigation Path Resolution Flow

```
User clicks nav link
    ↓
Browser resolves relative path
    ↓
┌─ Root level page? → href="/page.html"
└─ Nested page? → href="../page.html"
    ↓
Server serves HTML file
    ↓
Browser parses HTML, discovers linked CSS
    ↓
CSS downloaded (or cache hit)
    ↓
Page rendered
```

**Current inconsistency:**
- Root pages reference: `href="contact.html"`
- Exhibit pages reference: `href="../contact.html"` AND `href="../index.html#philosophy"` (inconsistent - some link to separate pages, some to anchors)

**Recommended fix:** Use absolute paths from root: `href="/contact.html"` works from any page depth

### Dark Mode Toggle Flow

```
Page loads
    ↓
Inline <head> script checks localStorage
    ↓
Sets data-theme attribute BEFORE first paint
    ↓
CSS applies theme-specific custom properties
    ↓
Page renders in correct theme (no flash)

User clicks theme toggle
    ↓
toggleTheme() function runs
    ↓
Updates data-theme attribute
    ↓
Saves preference to localStorage
    ↓
CSS transitions apply (optional smooth theme switch)
```

### Asset Loading Flow

```
HTML parsed
    ↓
<link rel="stylesheet"> discovered
    ↓
Browser downloads CSS (blocking render)
    ↓
CSS references fonts (Google Fonts)
    ↓
Browser downloads fonts (non-blocking)
    ↓
Images discovered in HTML/CSS
    ↓
Browser downloads images (non-blocking)
    ↓
Page fully rendered
```

**Performance optimization points:**
1. Preconnect to Google Fonts (already done: `<link rel="preconnect">`)
2. Inline critical CSS (nav, hero) in <head>
3. Defer non-critical CSS with media="print" onload trick
4. Add width/height to images (prevents layout shift)
5. Use `loading="lazy"` for below-fold images

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 1-20 pages | Current approach is fine; duplication manageable with find/replace |
| 20-50 pages | Extract CSS to external files; consider minimal build script or SSI for nav/footer |
| 50+ pages | Requires build tool (templating engine) OR move to SSG (Eleventy, Hugo) |

### Scaling Priorities

**At 14 pages (current):**
- **Bottleneck:** Nav/footer inconsistency from manual duplication
- **Fix:** Extract shared components (CSS first, then HTML fragments)

**At 50+ pages:**
- **Bottleneck:** Manual updates to navigation when adding pages
- **Fix:** Either accept build step or migrate to SSG framework

**Pattern 158 Solutions specific:**
- Unlikely to exceed 30 pages (portfolio showcases finite past work)
- Maintenance cost of duplication is tolerable if updated infrequently
- **Recommendation:** Extract CSS, keep HTML duplication with vigilant consistency checks

## Anti-Patterns

### Anti-Pattern 1: Framework for Static Content

**What people do:** Reach for React/Vue/Next.js for a portfolio site

**Why it's wrong:**
- Massive JS bundles (100KB+) for content that doesn't change
- Requires build step, Node.js, complex tooling
- Slower initial page load (JS parse/execute time)
- SEO requires SSR/SSG (adds complexity)
- Overkill for 14 static pages

**Do this instead:**
- Pure HTML/CSS for content
- Minimal vanilla JS only for interactivity (dark mode, maybe nav)
- Pre-render everything (sites like Pattern 158 have zero dynamic content)

### Anti-Pattern 2: CSS Framework Dependency

**What people do:** Import Bootstrap/Tailwind for a custom-designed site

**Why it's wrong:**
- Download entire framework (50-100KB) to use 10% of features
- Fights custom design (spend time overriding defaults)
- Generic look unless heavily customized
- Unnecessary dependency

**Do this instead:**
- Custom CSS with design system (CSS custom properties)
- Utility classes only where beneficial (you define them)
- Pattern 158 already has custom design - adding framework would bloat it

### Anti-Pattern 3: Duplicating CSS Custom Properties Per Page

**What people do:** Define :root{} in each page's inline <style> (current state)

**Why it's wrong:**
- Design drift (one page's --teal might differ from another)
- Hard to update (change color = edit 14 files)
- No browser caching benefit
- Violates DRY principle

**Do this instead:**
- Extract CSS custom properties to shared base.css
- Link from <head>: `<link rel="stylesheet" href="/assets/css/base.css">`
- Browser caches once, applies to all pages

### Anti-Pattern 4: Blocking JavaScript in <head>

**What people do:** Load dark-mode.js or nav.js with `<script src="..."></script>` in <head>

**Why it's wrong:**
- Blocks HTML parsing until JS downloads/executes
- Delays first paint
- Poor performance on slow connections

**Do this instead:**
- Inline critical theme script (10 lines, prevents flash)
- Load non-critical JS with `defer`: `<script src="nav.js" defer></script>`
- Or load at end of <body> (after content)

### Anti-Pattern 5: Neglecting Semantic HTML for SEO

**What people do:** Use `<div>` for everything, skip meta tags, ignore headings hierarchy

**Why it's wrong:**
- Search engines can't understand page structure
- Accessibility suffers (screen readers rely on semantics)
- Missed opportunity for rich search results

**Do this instead:**
- Use `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>`
- Proper heading hierarchy (one <h1>, logical <h2>/<h3> nesting)
- Rich meta tags (Open Graph, Twitter Cards, Schema.org)
- Descriptive alt text on images

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Google Fonts | CDN link in <head> | Already implemented; preconnect speeds up load |
| Analytics (optional) | Async script tag at end of <body> | Not currently present; consider privacy-focused options |
| Contact form (future) | Static form → Formspree/Netlify Forms | HTML form submits to third-party service (no backend needed) |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| HTML ↔ CSS | `<link>` tag + class/ID selectors | Move to external CSS files for caching |
| HTML ↔ JS | Script tags + DOM API | Minimal JS (dark mode, optional nav injection) |
| Page ↔ Page | Hyperlinks (`<a href>`) | Use absolute paths from root for consistency |
| CSS ↔ CSS | @import (avoid) OR multiple <link> tags | Prefer multiple <link> tags (parallel downloads) |

## Component Communication Patterns

### Static Approach (Recommended for Pattern 158)

```
base.css ─────┬──────> All pages (design tokens)
              │
components.css├──────> All pages (nav, footer, buttons)
              │
layout.css────┴──────> All pages (grid, spacing)

dark-mode.css ───────> Loaded via JS toggle OR always present with [data-theme="dark"] selector

nav.html ─────────┬──> Duplicated in each page (manual consistency)
                  │     OR injected via nav.js (runtime)
footer.html ──────┘     OR SSI (server-side)
```

### Dynamic Approach (If adding interactivity)

```
User interacts with page
    ↓
Event listener (dark-mode.js, nav.js)
    ↓
Updates DOM (setAttribute, innerHTML)
    ↓
CSS reacts to attribute change
    ↓
Visual update (theme switches, nav highlights)
```

## Recommended Build Order

**Phase 1: Extract CSS (foundation)**
1. Create `assets/css/base.css` with custom properties
2. Create `assets/css/components.css` with nav/footer/button styles
3. Create `assets/css/layout.css` with grid/container/spacing
4. Update all 14 HTML files to link external CSS
5. Test: Verify visual parity with before state

**Phase 2: Normalize Navigation (consistency)**
1. Document desired nav structure (which links, which order)
2. Fix path inconsistencies (use absolute paths)
3. Update all 14 HTML files with identical nav markup
4. Test: Verify all links work from all pages

**Phase 3: Implement Dark Mode (enhancement)**
1. Create `assets/css/dark-mode.css` with theme overrides
2. Create `assets/js/dark-mode.js` with toggle logic
3. Add inline theme-init script to <head> template
4. Add toggle button to navigation
5. Test: Theme persists across page loads, no flash

**Phase 4: SEO Optimization (discoverability)**
1. Add comprehensive meta tags to each page (title, description, OG tags)
2. Verify semantic HTML (nav, main, article, footer)
3. Add Schema.org structured data (Person, WebSite, Article)
4. Create sitemap.xml
5. Test: Validate with Google Rich Results Test

**Phase 5: Performance Optimization (speed)**
1. Add width/height attributes to images
2. Add `loading="lazy"` to below-fold images
3. Consider self-hosting Google Fonts (optional)
4. Minify CSS (optional, manual or online tool)
5. Test: Lighthouse score, aim for 90+ performance

**Dependency notes:**
- Phase 2 (nav) and Phase 3 (dark mode) both need Phase 1 (CSS extraction) first
- Phase 4 (SEO) is independent, can be done any time
- Phase 5 (performance) should come after Phase 1-3 (optimize the final structure)

## Sources

**Architecture patterns:**
- Based on established static site development practices (2015-2026 evolution)
- CSS Custom Properties: W3C CSS Variables Module Level 1 (2015, widely adopted by 2018)
- Dark mode pattern: Popularized by Apple (iOS 13, 2019), now web standard
- SSI: Apache mod_include (1990s, still relevant for simple static sites)

**Current implementation analysis:**
- Direct inspection of Pattern 158 Solutions codebase (index.html, exhibits/*.html)
- 14 HTML pages with inline CSS identified
- Navigation inconsistencies observed (root pages vs exhibit pages)

**Confidence level:**
- HIGH: CSS extraction, dark mode implementation, SSI patterns (established techniques)
- MEDIUM: Build order dependencies (project-specific, may need adjustment)
- MEDIUM: Scaling thresholds (based on experience, not hard rules)

**Note on research limitations:**
- User's web search quota exhausted; MCP Docker Toolkit search tools not accessible in current environment
- Recommendations based on training data (verified practices as of Jan 2025) + direct codebase analysis
- No external documentation consulted for this specific research (self-contained architectural analysis)

---
*Architecture research for: Pattern 158 Solutions - Static Portfolio Website*
*Researched: 2026-02-13*
