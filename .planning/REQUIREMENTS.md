# Requirements: Pattern 158 Solutions Website

**Defined:** 2026-02-13
**Core Value:** Accurately and compellingly present Dan's professional identity and body of work to hiring managers, engineers, and potential clients

## v1 Requirements

Requirements for current milestone. Each maps to roadmap phases.

### CSS Foundation

- [ ] **CSS-01**: All inline `<style>` blocks extracted to shared external stylesheet(s)
- [ ] **CSS-02**: All hardcoded color values (rgba, hex) replaced with CSS custom properties
- [ ] **CSS-03**: Page structure normalized across all 14 HTML files (consistent markup patterns)

### Navigation

- [ ] **NAV-01**: All 14 pages have identical navigation links (Home, Philosophy, FAQ, Contact, Field Reports)
- [ ] **NAV-02**: All navigation paths use absolute-from-root URLs (resolves exhibits/ subdirectory issues)
- [ ] **NAV-03**: Mobile hamburger menu with accessible ARIA attributes (aria-expanded, aria-controls)
- [ ] **NAV-04**: Hamburger menu has 48x48px touch targets and keyboard support

### Dark Mode

- [ ] **DARK-01**: Dark theme using CSS custom properties with brand-aligned palette (not generic black)
- [ ] **DARK-02**: System preference detection via `prefers-color-scheme` media query
- [ ] **DARK-03**: User toggle with localStorage persistence across page loads
- [ ] **DARK-04**: No flash of unstyled content (inline theme detection in `<head>`)

### SEO

- [ ] **SEO-01**: Unique meta description for each of the 14 pages
- [ ] **SEO-02**: Open Graph tags (og:title, og:description, og:image, og:url) on all pages
- [ ] **SEO-03**: JSON-LD structured data (Person schema for Dan, WebSite schema)
- [ ] **SEO-04**: sitemap.xml listing all 14 pages

### Performance

- [ ] **PERF-01**: Images served in optimized format (WebP with PNG fallback)
- [ ] **PERF-02**: Native lazy loading (`loading="lazy"`) on non-critical images
- [ ] **PERF-03**: Font loading optimized (font-display: swap or self-hosted with preload)

## v2 Requirements

Deferred to future milestone. Tracked but not in current roadmap.

### Analytics

- **ANLY-01**: Privacy-first pageview tracking (Plausible or Umami, cookieless)
- **ANLY-02**: Custom event tracking (CTA clicks, exhibit page views)

### Enhanced SEO

- **SEO-05**: Per-exhibit JSON-LD structured data (Article schema)
- **SEO-06**: Print stylesheet for clean printing of exhibits
- **SEO-07**: Custom 404 page

### Future Polish

- **POLISH-01**: Component templates for nav/footer (reduce duplication maintenance)
- **POLISH-02**: Performance monitoring (Core Web Vitals tracking)

## Out of Scope

| Feature | Reason |
|---------|--------|
| JavaScript frameworks (React, Vue, etc.) | Violates static HTML constraint; unnecessary complexity |
| Build tools (Webpack, Vite, etc.) | Site intentionally has zero build dependencies |
| Blog platform | Major feature, separate project if ever |
| CMS/backend | Static site, no server-side processing |
| Google Analytics | Privacy concerns, performance impact, requires cookie consent |
| Parallax scrolling / animations | Conflicts with NTSB investigation aesthetic |
| Resume hosting | Resumes tailored per application, managed elsewhere |
| Cookie consent banner | Eliminated by choosing cookieless analytics |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| CSS-01 | Phase 1 | Pending |
| CSS-02 | Phase 1 | Pending |
| CSS-03 | Phase 1 | Pending |
| NAV-01 | Phase 3 | Pending |
| NAV-02 | Phase 3 | Pending |
| NAV-03 | Phase 3 | Pending |
| NAV-04 | Phase 3 | Pending |
| DARK-01 | Phase 2 | Pending |
| DARK-02 | Phase 2 | Pending |
| DARK-03 | Phase 2 | Pending |
| DARK-04 | Phase 2 | Pending |
| SEO-01 | Phase 4 | Pending |
| SEO-02 | Phase 4 | Pending |
| SEO-03 | Phase 4 | Pending |
| SEO-04 | Phase 4 | Pending |
| PERF-01 | Phase 5 | Pending |
| PERF-02 | Phase 5 | Pending |
| PERF-03 | Phase 5 | Pending |

**Coverage:**
- v1 requirements: 18 total
- Mapped to phases: 18
- Unmapped: 0

---
*Requirements defined: 2026-02-13*
*Last updated: 2026-02-13 after roadmap creation*
