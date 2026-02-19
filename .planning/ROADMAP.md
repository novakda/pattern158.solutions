# Roadmap: Pattern 158 Solutions Website

## Overview

This roadmap transforms the Pattern 158 Solutions static portfolio site from a functional 14-page website with duplicated inline CSS into a maintainable, modern portfolio with dark mode, mobile responsiveness, and SEO optimization. The five phases follow a foundation-first approach: extract CSS to eliminate duplication, add dark mode support, establish consistent navigation, optimize discoverability, and finalize performance.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [x] **Phase 1: CSS Foundation** - Extract inline styles to external stylesheets, establish design system
- [x] **Phase 2: Dark Mode Implementation** - Add brand-aligned dark theme with system preference support
- [x] **Phase 3: Navigation & Mobile Responsiveness** - Consistent cross-page navigation with mobile hamburger menu
- [x] **Phase 4: SEO Optimization** - Meta tags, Open Graph, structured data, sitemap
- [x] **Phase 5: Performance Optimization** - Image optimization, lazy loading, font loading
- [x] **Phase 6: Inline Style Token Cleanup** - Replace undefined CSS variables and hardcoded hex in HTML inline styles (gap closure) (completed 2026-02-19)

## Phase Details

### Phase 1: CSS Foundation
**Goal**: Eliminate CSS duplication and establish single source of truth for styling
**Depends on**: Nothing (first phase)
**Requirements**: CSS-01, CSS-02, CSS-03
**Success Criteria** (what must be TRUE):
  1. All 14 HTML pages link to external stylesheet(s) and contain zero inline `<style>` blocks
  2. All color values reference CSS custom properties (no hardcoded rgba/hex values in stylesheets)
  3. All pages render identically to before extraction (visual regression test passes)
  4. Design system tokens (colors, fonts, spacing) centralized in :root{} block
  5. Browser caching enabled (stylesheet loads once, applies to all pages)
**Plans:** 3 plans

Plans:
- [x] 01-01-PLAN.md — Pass 1: Verbatim CSS extraction from 14 pages + color audit checkpoint
- [x] 01-02-PLAN.md — Pass 2: Design token system, deduplication, body class scoping
- [x] 01-03-PLAN.md — Final automated audit + visual regression verification

### Phase 2: Dark Mode Implementation
**Goal**: Provide brand-aligned dark theme with system preference support
**Depends on**: Phase 1 (requires extracted CSS)
**Requirements**: DARK-01, DARK-02, DARK-03, DARK-04
**Success Criteria** (what must be TRUE):
  1. User can toggle between light and dark themes via navigation control
  2. Dark theme uses brand-aligned palette (not generic black) maintaining NTSB investigation aesthetic
  3. User's theme preference persists across browser sessions (localStorage)
  4. Theme automatically respects system preference (prefers-color-scheme) on first visit
  5. No flash of unstyled content (FOUC) on any page load in either theme
**Plans:** 2 plans

Plans:
- [x] 02-01-PLAN.md — Dark mode CSS token overrides and toggle button styling
- [x] 02-02-PLAN.md — HTML integration: blocking script, toggle button, and JS across all 14 pages

### Phase 3: Navigation & Mobile Responsiveness
**Goal**: Consistent cross-page navigation with mobile-friendly access
**Depends on**: Phase 1 (benefits from shared CSS)
**Requirements**: NAV-01, NAV-02, NAV-03, NAV-04
**Success Criteria** (what must be TRUE):
  1. All 14 pages have identical navigation links (Home, Philosophy, FAQ, Contact, Field Reports)
  2. All navigation links work correctly from both root pages and exhibits/ subdirectory
  3. Mobile viewport (<768px) displays hamburger menu with smooth transitions
  4. Hamburger menu is keyboard-accessible (Enter/Space to toggle, Tab navigation, Escape to close)
  5. Touch targets in mobile menu meet 48x48px minimum size
**Plans:** 2 plans

Plans:
- [x] 03-01-PLAN.md — Standardize navigation HTML (absolute paths, consistent links, hamburger markup) + mobile menu CSS
- [x] 03-02-PLAN.md — Navigation toggle JavaScript (keyboard accessibility, state management) + visual verification

### Phase 4: SEO Optimization
**Goal**: Maximize discoverability and social media sharing
**Depends on**: Phase 3 (requires stable URLs and navigation)
**Requirements**: SEO-01, SEO-02, SEO-03, SEO-04
**Success Criteria** (what must be TRUE):
  1. Every page has unique, descriptive meta description (no placeholder text)
  2. Open Graph tags generate correct social media previews on LinkedIn/Twitter/Facebook
  3. JSON-LD structured data appears in Google Rich Results Test
  4. sitemap.xml lists all 14 pages with correct URLs
  5. Search engines can discover and index all public pages
**Plans:** 2 plans

Plans:
- [x] 04-01-PLAN.md — SEO meta tags, Open Graph, canonical URLs, and JSON-LD on all 14 pages
- [x] 04-02-PLAN.md — sitemap.xml, robots.txt, and comprehensive SEO validation

### Phase 5: Performance Optimization
**Goal**: Fast load times and optimal user experience
**Depends on**: Phases 1-4 (optimizing final structure)
**Requirements**: PERF-01, PERF-02, PERF-03
**Success Criteria** (what must be TRUE):
  1. Images are optimized for fast loading (hero compressed 148KB→118KB; WebP skipped — no build tooling per static site constraint)
  2. No non-critical `<img>` elements exist requiring lazy loading (logo is above-fold, hero is CSS background-image, favicon is `<link>`)
  3. Fonts load without blocking page render (font-display: swap or preload)
  4. Lighthouse mobile performance score reaches 90+ on all pages
  5. Core Web Vitals meet "Good" thresholds (LCP <2.5s, FID <100ms, CLS <0.1)
**Plans:** 1 plan

Plans:
- [x] 05-01-PLAN.md — Fix color contrast (WCAG 4.5:1), add logo width attribute (CLS), compress hero image (LCP), validate font/lazy-loading requirements

### Phase 6: Inline Style Token Cleanup
**Goal**: Close CSS-02 and DARK-01 audit gaps — replace undefined CSS variable references and hardcoded hex colors in HTML inline styles
**Depends on**: Phase 1 (uses design token names), Phase 2 (dark mode must cover all color values)
**Requirements**: CSS-02, DARK-01
**Gap Closure**: Closes gaps from v1.0 milestone audit
**Success Criteria** (what must be TRUE):
  1. Zero references to deleted CSS variable names (--teal, --light-gray) in any HTML file
  2. Zero hardcoded hex color values (#888, #555, #666) in HTML inline style= attributes
  3. All inline color values use design system tokens (var(--color-primary), var(--color-text-light), etc.)
  4. Dark mode toggle changes ALL text and background colors on ALL pages (no inline style bypass)
  5. WCAG AA contrast (4.5:1) maintained in both light and dark themes for all inline-styled text
**Plans:** 2 plans

Plans:
- [x] 06-01-PLAN.md — Replace 49 inline style color problems (undefined vars + hardcoded hex) with design system tokens across 17 HTML files
- [ ] 06-02-PLAN.md — Fix footer attribution contrast (replace --color-text-muted with --color-inverse-text-muted in 10 files)

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. CSS Foundation | 3/3 | ✓ Complete | 2026-02-13 |
| 2. Dark Mode Implementation | 2/2 | ✓ Complete | 2026-02-13 |
| 3. Navigation & Mobile Responsiveness | 2/2 | ✓ Complete | 2026-02-13 |
| 4. SEO Optimization | 2/2 | ✓ Complete | 2026-02-13 |
| 5. Performance Optimization | 1/1 | ✓ Complete | 2026-02-18 |
| 6. Inline Style Token Cleanup | 1/2 | In Progress | - |

---
*Roadmap created: 2026-02-13*
*Last updated: 2026-02-19 (Phase 6 gap closure plan 06-02 added from UAT findings)*
