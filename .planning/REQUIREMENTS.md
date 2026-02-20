# Requirements: Pattern 158 Solutions v1.1

**Defined:** 2026-02-20
**Core Value:** Accurately and compellingly present Dan's professional identity and body of work to hiring managers, engineers, and potential clients

## v1.1 Requirements

Requirements for the Comprehensive Quality Audit & Polish milestone. Each maps to roadmap phases.

### CSS Foundation

- [ ] **CSS-04**: All CSS values use design tokens — zero hardcoded colors, spacing, or font sizes in selectors
- [ ] **CSS-05**: Shared components (stats bars, cards, buttons) extracted to global CSS section — page-scoped sections contain only overrides
- [ ] **CSS-06**: Zero `!important` declarations — clean specificity cascade throughout stylesheet
- [ ] **CSS-07**: Font-size token system added (`--font-size-xs` through `--font-size-5xl`) with consistent usage across all pages

### Content & Information Architecture

- [ ] **CONTENT-01**: Content inventory completed — all sections across 17 pages cataloged with purpose and audience
- [ ] **CONTENT-02**: Redundant content eliminated — ROT audit (Redundant, Obsolete, Trivial) with canonical locations for each piece of information
- [ ] **CONTENT-03**: Zero typos or grammatical errors across all 17 pages
- [ ] **CONTENT-04**: Information architecture optimized — right content on right pages, clear user journeys for hiring managers, engineers, and clients

### Layout & Spacing

- [ ] **LAYOUT-01**: Consistent spacing using design tokens across all 17 pages (no raw pixel/rem values)
- [ ] **LAYOUT-02**: Mobile layout verified — consistent padding/margins, no cramped or oversized sections at 320px/768px viewports
- [ ] **LAYOUT-03**: Component alignment consistent — cards, sections, and CTAs visually aligned across all pages
- [ ] **LAYOUT-04**: Generous whitespace with intentional visual rhythm between sections

### Typography

- [ ] **TYPO-01**: Typography hierarchy clear and consistent — h1 > h2 > h3 > body differentiation visible on every page
- [ ] **TYPO-02**: Heading hierarchy correct — no skipped levels (h2 → h4) on any page
- [ ] **TYPO-03**: Responsive typography scales appropriately for mobile viewports

### Color & Contrast

- [ ] **COLOR-01**: All text meets WCAG AA contrast ratios (4.5:1 normal text, 3:1 large text and UI) in both light and dark modes
- [ ] **COLOR-02**: Dark mode visually consistent with brand (navy-based, not generic black) across all 17 pages
- [ ] **COLOR-03**: Link colors distinct from body text and consistent across all pages in both themes

### Exhibit Content

- [ ] **EXHIBIT-01**: All exhibits follow Challenge → Approach → Solution → Results structure
- [ ] **EXHIBIT-02**: Quantifiable results/metrics highlighted in summaries, not buried in prose
- [ ] **EXHIBIT-03**: Impact-first headlines — outcomes visible within 30-second scan
- [ ] **EXHIBIT-04**: Visual consistency across all exhibit pages (same card styles, spacing, typography)

### Navigation & Footer

- [ ] **NAV-05**: Navigation structure 100% identical across all 17 pages (verified programmatically)
- [ ] **NAV-06**: Footer optimized — contact visibility, social links, trust elements consistent
- [ ] **NAV-07**: Zero broken internal links across all 17 pages

### Accessibility & QA

- [ ] **A11Y-02**: Full WCAG AA re-verification passes after all v1.1 changes
- [ ] **A11Y-03**: Automated accessibility test suite passes (@axe-core/playwright across all pages)
- [ ] **A11Y-04**: Cross-browser rendering verified (Chrome, Firefox, Safari/WebKit)
- [ ] **A11Y-05**: All pages verified in both light/dark modes on both desktop and mobile viewports
- [ ] **A11Y-06**: Semantic HTML verified — proper landmark roles, heading hierarchy, ARIA attributes

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Process & Content Depth

- **PROCESS-01**: Process documentation added to exhibits — sketches, iterations, decision rationale where relevant
- **PROCESS-02**: Expandable detail sections for interested readers (show more/less pattern)

### Accessibility Enhancements

- **A11Y-07**: AAA-level focus indicators (enhanced thickness, high-contrast color)
- **A11Y-08**: Reduced motion preference respected (`prefers-reduced-motion`)
- **A11Y-09**: Color contrast AAA (7:1) for critical headings and CTAs

### Performance

- **PERF-04**: Critical CSS inlined for above-fold content
- **PERF-05**: HTML/CSS minification for production
- **PERF-06**: Preload directives for hero image and fonts

### Analytics

- **TECH-04**: Privacy-first cookieless analytics integration

## Out of Scope

Explicitly excluded. Documented to prevent scope creep.

| Feature | Reason |
|---------|--------|
| Blog platform | High maintenance burden, content creation ongoing, scope creep risk |
| Resume download | Resumes tailored per application, managed elsewhere |
| Auto-playing animations/parallax | Accessibility issues, conflicts with NTSB aesthetic |
| JavaScript frameworks | Violates static HTML constraint |
| Build tools | Site intentionally has zero build dependencies |
| Video testimonials | Production overhead, not essential for quality audit |
| Interactive demos | JavaScript complexity, violates static constraint |
| New case studies/exhibits | Content sourced from archives, not creation milestone |
| Cookie consent banner | Eliminated by choosing cookieless analytics |
| Awards/credentials section | Defer until specific achievements identified |

## Traceability

Which phases cover which requirements. Updated during roadmap creation.

| Requirement | Phase | Status |
|-------------|-------|--------|
| CSS-04 | Phase 7 | Pending |
| CSS-05 | Phase 7 | Pending |
| CSS-06 | Phase 7 | Pending |
| CSS-07 | Phase 7 | Pending |
| CONTENT-01 | Phase 8 | Pending |
| CONTENT-02 | Phase 8 | Pending |
| CONTENT-03 | Phase 8 | Pending |
| CONTENT-04 | Phase 8 | Pending |
| LAYOUT-01 | Phase 9 | Pending |
| LAYOUT-02 | Phase 9 | Pending |
| LAYOUT-03 | Phase 9 | Pending |
| LAYOUT-04 | Phase 9 | Pending |
| TYPO-01 | Phase 10 | Pending |
| TYPO-02 | Phase 10 | Pending |
| TYPO-03 | Phase 10 | Pending |
| COLOR-01 | Phase 11 | Pending |
| COLOR-02 | Phase 11 | Pending |
| COLOR-03 | Phase 11 | Pending |
| EXHIBIT-01 | Phase 12 | Pending |
| EXHIBIT-02 | Phase 12 | Pending |
| EXHIBIT-03 | Phase 12 | Pending |
| EXHIBIT-04 | Phase 12 | Pending |
| NAV-05 | Phase 13 | Pending |
| NAV-06 | Phase 13 | Pending |
| NAV-07 | Phase 13 | Pending |
| A11Y-02 | Phase 14 | Pending |
| A11Y-03 | Phase 14 | Pending |
| A11Y-04 | Phase 14 | Pending |
| A11Y-05 | Phase 14 | Pending |
| A11Y-06 | Phase 14 | Pending |

**Coverage:**
- v1.1 requirements: 30 total
- Mapped to phases: 30/30 (100%)
- Unmapped: 0

**Phase distribution:**
- Phase 7 (CSS Foundation): 4 requirements
- Phase 8 (Content & IA): 4 requirements
- Phase 9 (Layout & Spacing): 4 requirements
- Phase 10 (Typography): 3 requirements
- Phase 11 (Color & Contrast): 3 requirements
- Phase 12 (Exhibit Content): 4 requirements
- Phase 13 (Navigation & Footer): 3 requirements
- Phase 14 (Accessibility & QA): 5 requirements

---
*Requirements defined: 2026-02-20*
*Traceability updated: 2026-02-20 (100% coverage across 8 phases)*
