# Architecture Research

**Domain:** Static HTML portfolio site quality improvements
**Researched:** 2026-02-20
**Confidence:** HIGH

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                      17 HTML FILES                               │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌────────────────┐     │
│  │ index   │  │ philoso │  │   faq   │  │  testimonials  │ ... │
│  │ (506L)  │  │ phy     │  │ (429L)  │  │    (702L)      │     │
│  │         │  │ (408L)  │  │         │  │                │     │
│  └────┬────┘  └────┬────┘  └────┬────┘  └────────┬───────┘     │
│       │ class="page-index"      │                 │             │
│       │            │             │                 │             │
├───────┴────────────┴─────────────┴─────────────────┴─────────────┤
│                SINGLE CSS FILE (3,450 LINES)                      │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ DESIGN TOKENS (:root + [data-theme="dark"])             │   │
│  │ 64 CSS custom properties                                 │   │
│  │ - 20 colors    - 3 fonts     - 9 spacing                │   │
│  │ - 3 radii      - 6 shadows   - 5 overlays               │   │
│  └──────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ GLOBAL STYLES (Reset, Base, Nav, Footer, Accessibility)│   │
│  │ Shared by all 17 pages                                   │   │
│  └──────────────────────────────────────────────────────────┘   │
├─────────────────────────────────────────────────────────────────┤
│  ┌────────┐  ┌──────────┐  ┌────────┐  ┌──────────────┐       │
│  │ .page- │  │ .page-   │  │ .page- │  │ .page-       │ ...   │
│  │ index  │  │ philosop │  │ faq    │  │ testimonials │       │
│  │        │  │ hy       │  │        │  │              │       │
│  │ styles │  │ styles   │  │ styles │  │ styles       │       │
│  └────────┘  └──────────┘  └────────┘  └──────────────┘       │
├─────────────────────────────────────────────────────────────────┤
│  ┌──────────────────────────────────────────────────────────┐   │
│  │ RESPONSIVE (@media max-width: 768px)                     │   │
│  │ Mobile overrides for all pages                           │   │
│  └──────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘

DATA FLOW (No Build Step):
  HTML Files → Link to /css/main.css → Browser renders
                      ↓
           64 CSS custom properties
                      ↓
           Inline <script> applies data-theme
                      ↓
           Page-scoped styles via .page-{name} classes
```

### Current Component Boundaries

| Component | Responsibility | Implementation |
|-----------|----------------|----------------|
| Design Tokens | Single source of truth for colors, spacing, typography, shadows | 64 CSS custom properties in `:root` + dark mode overrides |
| Page Class Scoping | Isolate styles to specific pages in single stylesheet | `.page-index`, `.page-philosophy`, etc. on `<body>` |
| Shared Navigation | Consistent header with hamburger menu (mobile), theme toggle | Duplicated HTML in all 17 pages, styled in global CSS |
| Shared Footer | Contact info, copyright | Duplicated HTML in all 17 pages, styled in global CSS |
| Dark Mode | Theme switching with persistence | localStorage + inline `<script>` + CSS custom property overrides |
| Skip Link | Keyboard accessibility | Global component, shared pattern |

## Current Project Structure

```
pattern158.solutions/
├── index.html                # Home (506 lines)
├── philosophy.html           # Brand elements (408 lines)
├── faq.html                  # 15 Q&A with accordion (429 lines)
├── contact.html              # Contact methods + guidance (394 lines)
├── testimonials.html         # Field reports overview (702 lines)
├── technologies.html         # Tech expertise (671 lines)
├── portfolio.html            # Portfolio directory (799 lines)
├── exhibits/                 # 12 case study pages
│   ├── exhibit-a.html        # Electric Boat
│   ├── exhibit-b.html        # HealthEquity
│   └── ...
├── css/
│   └── main.css              # Single stylesheet (3,450 lines)
│       ├── Lines 1-66:       Design tokens (:root)
│       ├── Lines 69-102:     Dark mode token overrides
│       ├── Lines 110-340:    Global (Reset, Base Typography, Accessibility, Nav)
│       ├── Lines 341-450:    Layout, Footer, Components
│       ├── Lines 453-870:    .page-index styles
│       ├── Lines 871-1035:   .page-philosophy styles
│       ├── Lines 1036-1164:  .page-faq styles
│       ├── Lines 1166-1363:  .page-contact styles
│       ├── Lines 1365-1770:  .page-testimonials styles
│       ├── Lines 1772-2530:  .page-exhibit styles
│       ├── Lines 2594-2707:  .page-technologies styles
│       ├── Lines 2709-3189:  Responsive (@media)
│       └── Lines 3190-3450:  .page-portfolio styles
└── assets/
    └── images/               # Hero, logo, icons
```

### Structure Rationale

- **Single CSS file:** No build step constraint means no CSS bundler. All styles in one file loaded by all pages. Page-scoped classes (`.page-index`, `.page-faq`) prevent style conflicts.
- **HTML duplication:** Navigation, footer, theme toggle script duplicated across all 17 HTML files. Changes require updating all files (automated with tests).
- **Page class scoping:** Each `<body>` has `class="page-{name}"` allowing single stylesheet to contain isolated page-specific styles without conflicts.
- **Absolute-from-root paths:** All nav links use `/page.html` not `../page.html` to avoid path fragility in subdirectories like `exhibits/`.
- **Design tokens first:** 64 CSS custom properties at top of file. All subsequent styles reference tokens, not hardcoded values.

## Architectural Patterns for Quality Improvements

### Pattern 1: Page-Scoped CSS in Single Stylesheet

**What:** Prefix all page-specific selectors with `.page-{name}` class to isolate styles while maintaining single CSS file.

**When to use:** When you cannot use build tools to split CSS files but need page-specific styles without conflicts.

**Trade-offs:**
- **Pros:** Zero tooling, simple mental model, no CSS file management
- **Cons:** All styles loaded on all pages (entire 3,450-line file), requires discipline to scope correctly

**Example:**
```css
/* Global component - applies to all pages */
.hero {
    padding: var(--space-4xl) 0;
}

/* Page-specific override */
.page-index .hero {
    background-image: url('../assets/images/hero.jpg');
    min-height: 600px;
}

.page-testimonials .hero {
    background: var(--color-inverse);
    min-height: 300px;
}
```

**Current usage:** 100% of page-specific styles use this pattern. CSS sections organized by page (index, philosophy, faq, contact, testimonials, exhibits, technologies, portfolio).

### Pattern 2: Design Token Layering (Semantic Naming)

**What:** Three-tier token system: primitive values → semantic tokens → component usage. Tokens use purpose-driven names (`--color-text-muted`) not value-based names (`--gray-500`).

**When to use:** Always, for any design system that needs theme flexibility.

**Trade-offs:**
- **Pros:** Dark mode is token swapping, not rewriting styles. Semantic names survive design changes.
- **Cons:** Requires discipline. Easy to bypass with hardcoded values.

**Example:**
```css
/* :root - Light mode (primitive → semantic) */
:root {
    --color-primary: #0e7c8c;           /* Teal */
    --color-text-muted: #666666;        /* Gray */
    --color-background: #faf9f6;        /* Cream */
}

/* [data-theme="dark"] - Dark mode overrides */
[data-theme="dark"] {
    --color-text-muted: #a0a0a0;        /* Lighter gray */
    --color-background: #1a2838;        /* Navy */
    /* --color-primary stays the same */
}

/* Component uses semantic token (no awareness of light/dark) */
.card-subtitle {
    color: var(--color-text-muted);     /* Automatically adapts */
}
```

**Current coverage:** 64 design tokens. All colors, spacing, typography, shadows, borders tokenized. Dark mode overrides 18 of 20 color tokens.

### Pattern 3: Specificity Management via Scoping Order

**What:** CSS cascade managed through selector scoping strategy, not specificity wars. Order: Reset → Base → Global Components → Page-Scoped → Responsive.

**When to use:** Single-file stylesheets where you cannot use modern CSS `@layer` (not supported in older browsers if WCAG AA is required).

**Trade-offs:**
- **Pros:** Predictable cascade, avoids `!important`, easier to debug
- **Cons:** Requires discipline, large file requires good commenting, responsive styles at end can be far from related desktop styles

**Current implementation:**
```css
/* Lines 110-116: RESET (lowest specificity) */
* { margin: 0; padding: 0; box-sizing: border-box; }

/* Lines 117-137: BASE TYPOGRAPHY */
body { font-family: var(--font-body); }
h1, h2, h3 { font-family: var(--font-heading); }

/* Lines 179-340: GLOBAL COMPONENTS */
nav { background: var(--color-inverse); }
footer { background: var(--color-inverse); }

/* Lines 453+: PAGE-SCOPED (higher specificity via scoping) */
.page-index .hero { ... }
.page-faq details summary { ... }

/* Lines 2709+: RESPONSIVE (highest specificity via media query + scoping) */
@media (max-width: 768px) {
    .page-index .hero { ... }
}
```

**Why this works:** Specificity increases naturally through file. Page-scoped selectors (`.page-index .hero`) beat global selectors (`.hero`). Responsive beats both due to source order.

### Pattern 4: Content Deduplication Through Component Extraction

**What:** When multiple pages share similar content patterns, extract to reusable CSS classes rather than duplicating HTML structure.

**When to use:** When content redundancy audit reveals repeated patterns (testimonials, project cards, stats bars).

**Trade-offs:**
- **Pros:** DRY principle, easier to maintain consistency, smaller HTML files
- **Cons:** Requires abstraction thinking, can over-abstract and create unused classes

**Example of current duplication to refactor:**
```html
<!-- testimonials.html has stats bar -->
<div class="stats-bar">
    <div class="stat-item">
        <div class="stat-number">12</div>
        <div class="stat-label">Case Studies</div>
    </div>
</div>

<!-- portfolio.html has nearly identical structure -->
<div class="portfolio-stats">
    <div class="stats-bar">
        <div class="stat-item">
            <div class="stat-number">28+</div>
            <div class="stat-label">Years Experience</div>
        </div>
    </div>
</div>
```

**Refactor approach:** Create shared `.stats-bar`, `.stat-item`, `.stat-number`, `.stat-label` in global components section. Remove page-scoped duplicates.

### Pattern 5: Dark Mode Token Coverage Audit

**What:** Ensure all visual properties that change between light/dark modes use CSS custom properties, not hardcoded values.

**When to use:** During quality audits when adding new UI elements, when dark mode reveals contrast issues.

**Trade-offs:**
- **Pros:** Complete theme consistency, easier to adjust dark mode later
- **Cons:** Requires vigilance, easy to miss inline styles or new components

**Current gaps to audit:**
- Are all text colors using `--color-text`, `--color-text-muted`, etc?
- Are all backgrounds using `--color-background`, `--color-surface`?
- Are all borders using `--color-border`, `--color-border-primary`?
- Do new polish elements (if any) introduce hardcoded colors?

**Example of proper coverage:**
```css
/* BAD - hardcoded color breaks dark mode */
.new-callout-box {
    background: #f0f0f0;    /* Won't adapt to dark mode */
    color: #333;
}

/* GOOD - uses tokens */
.new-callout-box {
    background: var(--color-background-alt);
    color: var(--color-text);
    border: 1px solid var(--color-border);
}
```

## Data Flow for Quality Improvements

### Content Audit Flow

```
1. INVENTORY
   ↓
   Catalog all 17 pages → Identify content sections → Map to information architecture

2. REDUNDANCY DETECTION
   ↓
   Find duplicate content → Find near-duplicate patterns → Find inconsistent messaging

3. CONTENT QUALITY SCORING
   ↓
   Assess clarity → Assess compelling presentation → Assess factual accuracy

4. RESTRUCTURING RECOMMENDATIONS
   ↓
   Consolidate duplicates → Reorganize IA → Rewrite poor content → Create new content (if gaps)
```

### CSS Architecture Quality Audit Flow

```
1. TOKEN COVERAGE AUDIT
   ↓
   Find hardcoded values → Check dark mode coverage → Verify semantic naming

2. SPECIFICITY AUDIT
   ↓
   Find `!important` usage → Find overly-specific selectors → Check cascade order

3. COMPONENT DUPLICATION AUDIT
   ↓
   Find repeated CSS patterns → Extract to shared classes → Remove page-scoped duplicates

4. RESPONSIVE AUDIT
   ↓
   Test mobile spacing → Check touch targets → Verify hamburger menu → Test dark mode mobile
```

### Page Structure Quality Audit Flow

```
1. HTML STRUCTURE AUDIT
   ↓
   Check semantic HTML → Verify heading hierarchy → Validate ARIA attributes

2. ACCESSIBILITY AUDIT
   ↓
   Contrast ratios → Focus indicators → Skip links → Keyboard navigation

3. VISUAL CONSISTENCY AUDIT
   ↓
   Spacing consistency → Typography hierarchy → Color usage → Component alignment

4. INFORMATION ARCHITECTURE AUDIT
   ↓
   User journey clarity → Navigation effectiveness → Content organization → CTA placement
```

## Integration Points for Quality Improvements

### 1. New CSS Patterns → Existing Design Tokens

**Integration:** All new styles MUST use existing 64 design tokens. If new token needed, add to `:root` section AND `[data-theme="dark"]` override section.

**Process:**
1. Identify visual need (e.g., new callout box)
2. Check existing tokens (`--color-background-alt`, `--shadow-sm`, `--space-lg`)
3. Use tokens in new CSS
4. If no suitable token exists, propose new semantic token
5. Add to both `:root` and `[data-theme="dark"]` sections

**Example:**
```css
/* Need to add new warning color */
:root {
    --color-warning: #b8860b;      /* Existing --color-accent */
    --color-warning-bg: #fff9e6;   /* NEW token */
}

[data-theme="dark"] {
    --color-warning-bg: #3a3520;   /* NEW token dark mode override */
}

/* Usage in component */
.warning-box {
    background: var(--color-warning-bg);
    border-left: 4px solid var(--color-warning);
    padding: var(--space-md);
}
```

### 2. Content Reorganization → Existing Page Structure

**Integration:** Content moves between pages must preserve:
- Existing URLs (for SEO, bookmarks)
- Navigation structure (Home, Philosophy, FAQ, Contact, Technologies, Portfolio, Field Reports)
- Page class scoping (`.page-{name}`)
- Semantic HTML patterns

**Safe restructuring patterns:**
- **Section reordering within page:** Low risk, update CSS if layout-dependent
- **Content consolidation:** Move section from Page A to Page B, remove from A, add to B's HTML
- **Content splitting:** Extract section from Page A to new section in Page B
- **URL preservation:** If page removed, add redirect meta tag or warning

**Example consolidation:**
```
CURRENT:
- philosophy.html has "Methodology" section
- faq.html has "How do you approach problems?" question with methodology answer

REFACTOR:
- Keep detailed methodology on philosophy.html
- Reduce FAQ answer to summary + link to philosophy.html#methodology
- Add id="methodology" to philosophy.html section for deep linking
```

### 3. CSS Changes → All 17 HTML Pages

**Integration:** CSS changes in shared components (nav, footer, buttons, cards) affect all pages. Must test across:
- All 7 main pages (index, philosophy, faq, contact, testimonials, technologies, portfolio)
- All 12 exhibit pages
- Light and dark modes
- Desktop and mobile

**Testing strategy:**
1. Change CSS in main.css
2. Identify affected component class (e.g., `.nav-menu`, `.hero`, `.btn`)
3. Use Grep to find pages using that class: `grep -r "class=\"nav-menu\"" *.html exhibits/*.html`
4. Test each page in browser (light/dark, desktop/mobile)
5. Run automated Playwright tests (27 tests covering nav, dark mode, accessibility)

**High-risk changes:**
- Navigation styles (affects all 17 pages)
- Footer styles (affects all 17 pages)
- Design token changes (affects entire site)
- Responsive breakpoint changes (affects all pages on mobile)

**Low-risk changes:**
- Page-scoped styles (`.page-index .hero` only affects index.html)
- New utility classes (only affects pages that adopt them)

### 4. Mobile Responsive → Existing Desktop Layouts

**Integration:** All responsive changes in `@media (max-width: 768px)` section (lines 2709-3189) must preserve:
- Touch target sizes (48x48px minimum)
- Hamburger menu functionality
- Content hierarchy
- Readability (font sizes, line height, contrast)

**Current responsive patterns:**
```css
@media (max-width: 768px) {
    /* Pattern 1: Tighter spacing to recover horizontal space */
    .container { padding: 0 0.75rem; }           /* Desktop: var(--space-xl) = 2rem */
    section { padding: var(--space-2xl) 0.75rem; }

    /* Pattern 2: Stack layouts that were side-by-side */
    .specialty-grid { grid-template-columns: 1fr; }  /* Desktop: 1fr 1fr 1fr */

    /* Pattern 3: Reduce hero heights (less vertical dead space) */
    .page-index .hero { min-height: 480px; }     /* Desktop: 600px */

    /* Pattern 4: Show hamburger menu */
    .hamburger { display: block; }               /* Desktop: display: none */
    .nav-menu { transform: translate3d(100%, 0, 0); }  /* Off-screen by default */
}
```

**Adding new responsive behavior:**
1. Desktop-first design: Write desktop styles in page-scoped section
2. Add mobile overrides in `@media (max-width: 768px)` section at bottom of file
3. Test both breakpoints
4. Ensure touch targets meet 48px minimum
5. Verify dark mode on mobile

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| 1-20 pages | Current architecture sufficient: Single CSS file, page-scoped classes, manual HTML duplication |
| 20-50 pages | Consider: Static site generator (11ty, Hugo) to template nav/footer, CSS extraction by page for performance, component library documentation |
| 50+ pages | Require: Build tooling (no longer zero-dependency), CSS-in-JS or scoped styles, automated content audits, search functionality |

### Scaling Priorities

1. **First bottleneck (around 25 pages):** CSS file size (currently 3,450 lines). Users load entire stylesheet on every page.
   - **Fix:** Split CSS by page using build tool OR accept slower initial load, rely on browser caching
   - **Alternative:** Critical CSS inlining (inline above-fold styles, load rest async)

2. **Second bottleneck (around 15-20 pages):** HTML duplication maintenance burden. Nav/footer changes require updating 17+ files.
   - **Fix:** Adopt static site generator (11ty minimal overhead) OR continue manual updates with automated tests
   - **Current mitigation:** Playwright tests catch inconsistencies across pages

3. **Third bottleneck (around 30-40 pages):** Content discoverability. Navigation menu becomes unwieldy.
   - **Fix:** Add site search, categorized navigation, breadcrumbs
   - **Not yet needed:** Site has 7 main pages + 12 exhibits, manageable with current nav

## Anti-Patterns

### Anti-Pattern 1: Adding Page-Specific Tokens

**What people do:** Create tokens like `--color-index-hero-bg`, `--color-faq-sidebar-border` for page-specific uses.

**Why it's wrong:** Defeats purpose of design tokens (consistency, reusability). Balloons token count. Makes dark mode overrides unwieldy.

**Do this instead:** Use existing semantic tokens (`--color-background-alt`, `--color-border`). If truly unique need, use scoped selector with existing token:
```css
/* BAD */
:root { --color-faq-sidebar-border: rgba(14, 124, 140, 0.25); }
.page-faq .sidebar { border: 1px solid var(--color-faq-sidebar-border); }

/* GOOD */
.page-faq .sidebar { border: 1px solid var(--color-border-primary); }
```

### Anti-Pattern 2: Using `!important` to Resolve Specificity

**What people do:** Add `!important` when page-scoped style doesn't override global style.

**Why it's wrong:** Starts specificity arms race. Makes responsive overrides harder. Defeats cascade architecture.

**Do this instead:** Increase specificity through scoping, not `!important`:
```css
/* BAD */
.hero { padding: 100px 0; }
.page-faq .hero { padding: 50px 0 !important; }

/* GOOD */
.hero { padding: 100px 0; }
.page-faq .hero { padding: 50px 0; }  /* Higher specificity naturally wins */
```

### Anti-Pattern 3: Hardcoding Colors/Values Instead of Using Tokens

**What people do:** Add new component with hardcoded hex colors, px spacing, inline values.

**Why it's wrong:** Breaks design system consistency. Dark mode won't work. Future design changes miss these components.

**Do this instead:** Always use tokens, even for one-off components:
```css
/* BAD */
.new-callout {
    background: #f0f0f0;
    padding: 16px;
    border-radius: 4px;
    color: #666;
}

/* GOOD */
.new-callout {
    background: var(--color-background-alt);
    padding: var(--space-md);
    border-radius: var(--radius-md);
    color: var(--color-text-muted);
}
```

### Anti-Pattern 4: Duplicating Component CSS Across Page Sections

**What people do:** Copy/paste similar component styles into multiple page-scoped sections with minor tweaks.

**Why it's wrong:** Maintenance nightmare. Inconsistency grows over time. File bloat.

**Do this instead:** Extract shared component to global section, use page-scoped overrides only for differences:
```css
/* BAD (duplicated in .page-testimonials and .page-portfolio sections) */
.page-testimonials .stats-bar { display: flex; gap: 2rem; }
.page-testimonials .stat-number { font-size: 2.5rem; color: #0e7c8c; }
.page-portfolio .stats-bar { display: flex; gap: 2rem; }
.page-portfolio .stat-number { font-size: 2.5rem; color: #0e7c8c; }

/* GOOD (shared in global components, scoped overrides only) */
.stats-bar { display: flex; gap: var(--space-xl); }
.stat-number { font-size: 2.5rem; color: var(--color-primary); }
.page-portfolio .stat-number { font-size: 3rem; }  /* Only override difference */
```

### Anti-Pattern 5: Ignoring Mobile-First Token Usage

**What people do:** Use desktop-appropriate spacing tokens (`var(--space-4xl)`) in mobile responsive section.

**Why it's wrong:** Mobile should be tighter. Wastes vertical space on small screens.

**Do this instead:** Use smaller tokens in mobile overrides:
```css
/* Desktop (default) */
section { padding: var(--space-4xl) 0; }  /* 5rem = 80px */

/* Mobile override - BAD */
@media (max-width: 768px) {
    section { padding: var(--space-4xl) 0.75rem; }  /* Still 80px vertical, wasteful */
}

/* Mobile override - GOOD */
@media (max-width: 768px) {
    section { padding: var(--space-2xl) 0.75rem; }  /* 3rem = 48px vertical */
}
```

## Recommended Audit Order

Quality improvements should address issues in dependency order to minimize rework:

### Phase 1: Foundation (CSS Architecture)
**Why first:** Content and layout changes depend on solid CSS foundation. Fixing CSS architecture later requires touching all pages again.

1. **Design token coverage audit:** Find hardcoded values, ensure dark mode coverage
2. **Component duplication audit:** Extract shared components (stats bars, cards, buttons)
3. **Specificity cleanup audit:** Remove `!important`, fix cascade issues
4. **Responsive spacing audit:** Ensure mobile uses appropriate tokens

**Deliverable:** Clean, maintainable CSS with complete token coverage.

### Phase 2: Content (Information Architecture)
**Why second:** Content structure drives layout decisions. Reorganizing content after layout polish requires re-polishing.

1. **Content inventory:** Catalog all sections across 17 pages
2. **Redundancy detection:** Find duplicate content, near-duplicates, inconsistent messaging
3. **Information architecture audit:** Right content on right pages, clear user journeys
4. **Content quality scoring:** Clarity, compelling presentation, factual accuracy

**Deliverable:** Content reorganization plan with specific moves/consolidations.

### Phase 3: Layout & Visual Polish
**Why third:** Layout polish depends on finalized content structure. Visual consistency easier after content stabilized.

1. **Spacing consistency audit:** Use design tokens consistently, fix irregular spacing
2. **Typography hierarchy audit:** Ensure h1/h2/h3 usage correct, consistent sizing
3. **Color refinement audit:** Verify brand consistency, improve contrast where needed
4. **Component alignment audit:** Visual polish (cards, sections, CTAs)

**Deliverable:** Visually polished pages with consistent spacing, typography, color usage.

### Phase 4: Accessibility & Quality Assurance
**Why last:** Accessibility audits run against polished content and layout. Fixing earlier changes invalidates tests.

1. **Contrast audit:** WCAG AA compliance (4.5:1 text, 3:1 UI components)
2. **Keyboard navigation audit:** Focus indicators, skip links, tab order
3. **Screen reader audit:** Semantic HTML, ARIA attributes, alt text
4. **Cross-browser/device audit:** Desktop/mobile, light/dark mode, major browsers

**Deliverable:** WCAG AA compliant, accessible across devices and assistive technologies.

### Audit Dependencies

```
Phase 1: CSS Architecture
    ↓ (Clean foundation enables)
Phase 2: Content Reorganization
    ↓ (Final content structure enables)
Phase 3: Layout & Visual Polish
    ↓ (Polished UI enables)
Phase 4: Accessibility & QA
```

**Why this order matters:**
- Reorganizing content after layout polish → re-polish layouts
- Refactoring CSS after content moves → redo CSS changes
- Accessibility audit before visual polish → retest after polish changes

**Exception:** Critical accessibility issues (e.g., contrast failures, missing alt text) should be fixed immediately, not deferred to Phase 4.

## Design Token Adequacy Assessment

### Current Token Inventory (64 tokens)

**Colors (20 tokens):**
- Primary: `--color-primary`, `--color-primary-hover`, `--color-accent`
- Backgrounds: `--color-background`, `--color-background-alt`, `--color-surface`
- Text: `--color-text`, `--color-text-muted`, `--color-text-light`, `--color-text-medium`, `--color-text-source`, `--color-text-timeline`
- Inverse: `--color-inverse`, `--color-inverse-text`, `--color-inverse-text-muted`, `--color-inverse-text-light`
- Headings: `--color-heading`
- Borders: `--color-border`, `--color-border-primary`
- Hover: `--color-hover-background`

**Typography (3 tokens):**
- Fonts: `--font-heading`, `--font-body`, `--font-mono`

**Spacing (9 tokens):**
- Scale: `--space-xs` (0.25rem) through `--space-5xl` (6rem)

**Border Radius (3 tokens):**
- Corners: `--radius-sm`, `--radius-md`, `--radius-pill`

**Shadows (6 tokens):**
- Elevations: `--shadow-sm`, `--shadow-md`, `--shadow-hover`
- Focus: `--shadow-focus`, `--shadow-focus-inverse`
- Text: `--text-shadow-hero`, `--text-shadow-hero-accent`

**Overlays (3 tokens):**
- Transparency: `--overlay-hero`, `--overlay-grid-line`, `--overlay-hover-row`

### Assessment: Are 64 Tokens Enough?

**Verdict: YES for current needs, with minor gaps.**

**Well-covered areas:**
- ✓ Spacing scale (9 levels sufficient for layouts)
- ✓ Typography (3 font families adequate for NTSB aesthetic)
- ✓ Primary/accent colors (brand identity clear)
- ✓ Light/dark mode (18 tokens overridden in dark mode)

**Potential gaps (audit Phase 1 should investigate):**

1. **Status/feedback colors:** No dedicated success, warning, error, info colors
   - Current workaround: Using `--color-accent` (goldenrod) for warnings/caution
   - **Fix if needed:** Add `--color-success`, `--color-error`, `--color-info` tokens
   - **Risk:** Low — NTSB aesthetic may not need colorful status indicators

2. **Font sizes:** No font-size tokens, using `rem` values directly in selectors
   - Current: `.hero h1 { font-size: 3.5rem; }`, `.section-subtitle { font-size: 0.95rem; }`
   - **Fix if needed:** Add `--font-size-xs` through `--font-size-5xl` tokens
   - **Risk:** Medium — inconsistent font sizing across pages harder to maintain
   - **Recommendation:** Add font-size tokens in Phase 1 audit if inconsistencies found

3. **Line heights:** No line-height tokens, using numeric values
   - Current: `body { line-height: 1.6; }`
   - **Fix if needed:** Add `--line-height-tight`, `--line-height-normal`, `--line-height-relaxed`
   - **Risk:** Low — current usage appears consistent

4. **Transition durations:** No timing tokens for animations
   - Current: `transition: transform 0.3s ease-in-out;`
   - **Fix if needed:** Add `--duration-fast`, `--duration-normal`, `--duration-slow`
   - **Risk:** Low — minimal animations in NTSB aesthetic

### Token Expansion Recommendations

**Priority 1 (High value, low risk):**
- Add font-size tokens: `--font-size-xs` through `--font-size-5xl`
- Audit current font sizes, extract common values, replace with tokens
- **Benefit:** Easier to maintain typography hierarchy, responsive font sizing

**Priority 2 (Medium value if needed):**
- Add status color tokens IF content audit reveals need for success/error messaging
- Currently: Contact form feedback, error states — but these may not exist yet
- **Defer until:** Content audit Phase 2 confirms need

**Priority 3 (Low value, defer):**
- Line-height tokens (current usage appears consistent, low ROI)
- Transition timing tokens (NTSB aesthetic minimizes animations)

### Token Count Target

**Recommendation: 70-75 tokens** (current 64 + 6-11 additions)

- Add 6-8 font-size tokens (Priority 1)
- Add 0-3 status color tokens IF needed (Priority 2)

**Avoid ballooning to 100+ tokens:** Diminishing returns, harder to remember, violates NTSB simplicity aesthetic.

## Sources

### CSS Architecture Patterns

- [ITCSS: Scalable and Maintainable CSS Architecture - xfive](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture)
- [The Ultimate Guide to CSS Architectural Patterns - Frontend Architect](https://thefrontendarchitect.com/the-ultimate-guide-to-css-architectural-patterns/)
- [CSS Architecture and the Three Pillars of Maintainable CSS - SitePoint](https://www.sitepoint.com/css-architecture-and-the-three-pillars-of-maintainable-css/)
- [Getting Started With CSS Cascade Layers - Smashing Magazine](https://www.smashingmagazine.com/2022/01/introduction-css-cascade-layers/)

### Design Tokens & CSS Custom Properties

- [The developer's guide to design tokens and CSS variables - Penpot](https://penpot.app/blog/the-developers-guide-to-design-tokens-and-css-variables/)
- [CSS Custom Properties: The Complete Guide for 2026 - DevToolbox](https://devtoolbox.dedyn.io/blog/css-custom-properties-complete-guide)
- [Dark Mode in CSS Guide - CSS-Tricks](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- [Tutorial: Creating a Dark Theme using CSS Custom Properties - scale](https://www.scale.at/blog/css-custom-properties)

### Content Audit & Information Architecture

- [It's Time to Audit Your Information Architecture - Slickplan](https://slickplan.com/blog/audit-your-information-architecture)
- [The Complete Website Audit Checklist for 2026 (SEO + UX)](https://redrattlercreative.com/complete-website-audit-checklist-2026/)
- [How to fix duplicate content - Wix SEO Hub](https://www.wix.com/seo/learn/resource/how-to-fix-duplicate-content)

### Portfolio Site Best Practices

- [23 portfolio website examples, plus best practices - Webflow](https://webflow.com/blog/design-portfolio-examples)
- [23 Inspiring Portfolio Website Examples & Tips - Figma](https://www.figma.com/resource-library/portfolio-website-examples/)

### CSS Specificity & Scoping

- [CSS Specificity - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)
- [Saving the Day with Scoped CSS - CSS-Tricks](https://css-tricks.com/saving-the-day-with-scoped-css/)
- [@scope - CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/At-rules/@scope)

---
*Architecture research for: Pattern 158 Solutions quality audit*
*Researched: 2026-02-20*
