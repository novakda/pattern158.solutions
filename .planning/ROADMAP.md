# Roadmap: Pattern 158 Solutions Website

## Milestones

- ✅ **v1.0 MVP** — Phases 1-6 (shipped 2026-02-19)
- [ ] **v1.1 Comprehensive Quality Audit & Polish** — Phases 7-14 (in progress)

## Phases

<details>
<summary>✅ v1.0 MVP (Phases 1-6) — SHIPPED 2026-02-19</summary>

- [x] Phase 1: CSS Foundation (3/3 plans) — completed 2026-02-13
- [x] Phase 2: Dark Mode Implementation (2/2 plans) — completed 2026-02-13
- [x] Phase 3: Navigation & Mobile Responsiveness (2/2 plans) — completed 2026-02-13
- [x] Phase 4: SEO Optimization (2/2 plans) — completed 2026-02-13
- [x] Phase 5: Performance Optimization (1/1 plan) — completed 2026-02-18
- [x] Phase 6: Inline Style Token Cleanup (2/2 plans) — completed 2026-02-19

Full details: `.planning/milestones/v1.0-ROADMAP.md`

</details>

<details open>
<summary>[ ] v1.1 Comprehensive Quality Audit & Polish (Phases 7-14)</summary>

- [x] **Phase 7: CSS Foundation & Token System Audit** - Clean architecture foundation before content/visual polish (completed 2026-02-20)
- [ ] **Phase 8: Content Quality & Information Architecture** - Finalize content structure before layout changes
- [ ] **Phase 9: Layout & Spacing Consistency** - Establish visual rhythm after content finalized
- [ ] **Phase 10: Typography & Hierarchy** - Polish typography after layout rhythm established
- [ ] **Phase 11: Color Refinement & Contrast Verification** - Verify color/contrast after typography finalized
- [ ] **Phase 12: Exhibit Content Structure Optimization** - Apply established visual system to case studies
- [ ] **Phase 13: Navigation & Footer Consistency Verification** - Verify cross-page consistency after content/layout stable
- [ ] **Phase 14: Comprehensive Accessibility & Cross-Browser QA** - Final verification gate against polished site

</details>

## Phase Details

### Phase 7: CSS Foundation & Token System Audit
**Goal**: Establish clean, maintainable CSS architecture with complete token coverage before content and visual polish begins

**Depends on**: Nothing (first phase of v1.1)

**Requirements**: CSS-04, CSS-05, CSS-06, CSS-07

**Success Criteria** (what must be TRUE):
1. Zero hardcoded colors, spacing, or font sizes remain in CSS selectors — all use design tokens
2. Shared components (stats bars, cards, buttons) extracted to global CSS section — page-scoped sections contain only overrides
3. Zero `!important` declarations exist in stylesheet — clean specificity cascade throughout
4. Font-size token system (`--font-size-xs` through `--font-size-5xl`) implemented and used consistently across all 17 pages
5. Stylelint configuration enforces token usage and catches future violations

**Research**: Complete (07-RESEARCH.md)

**Plans:** 3/3 plans complete

Plans:
- [ ] 07-01-PLAN.md — Font-size token scale definition and hardcoded value migration
- [ ] 07-02-PLAN.md — Component extraction, cascade layers, and inline style cleanup
- [ ] 07-03-PLAN.md — Stylelint configuration and enforcement validation

---

### Phase 8: Content Quality & Information Architecture
**Goal**: Finalize content structure and eliminate redundancy before layout polish to avoid content-driven rework cycles

**Depends on**: Phase 7 (CSS foundation stable)

**Requirements**: CONTENT-01, CONTENT-02, CONTENT-03, CONTENT-04

**Success Criteria** (what must be TRUE):
1. Content inventory completed — all sections across 17 pages cataloged with purpose and audience
2. ROT audit complete (Redundant, Obsolete, Trivial content eliminated) — canonical location established for each piece of information
3. Zero typos or grammatical errors exist across all 17 pages
4. Information architecture optimized — right content on right pages, clear user journeys for hiring managers (30s scan), engineers (3-4min review), and clients (full review)
5. All exhibits verified to follow Challenge → Approach → Solution → Results structure

**Research**: Complete (08-RESEARCH.md)

**Plans:** 5 plans

Plans:
- [ ] 08-01-PLAN.md — Content inventory, quality tooling, and IA analysis
- [ ] 08-02-PLAN.md — Main pages editorial pass (ROT audit, grammar, tone, IA optimization)
- [ ] 08-03-PLAN.md — Exhibit restructuring A-F per NTSB investigation model
- [ ] 08-04-PLAN.md — Exhibit restructuring G-L and cross-exhibit consistency verification
- [ ] 08-05-PLAN.md — Portfolio alignment, final quality gate, and user verification

---

### Phase 9: Layout & Spacing Consistency
**Goal**: Establish consistent visual rhythm and spacing patterns across all 17 pages using design tokens

**Depends on**: Phase 8 (content structure finalized)

**Requirements**: LAYOUT-01, LAYOUT-02, LAYOUT-03, LAYOUT-04

**Success Criteria** (what must be TRUE):
1. All spacing uses design tokens — zero raw pixel/rem values for margins or padding
2. Mobile layout verified at 320px and 768px viewports — no cramped sections, no horizontal overflow, consistent padding/margins
3. Component alignment consistent — cards, sections, and CTAs visually aligned across all pages
4. Generous whitespace implemented with intentional visual rhythm — professional/editorial feel with breathing room between sections
5. Desktop layout verified at 1024px and 1920px viewports — balanced spacing scales appropriately

**Research**: Skip (standard patterns, no additional research needed)

**Plans**: TBD

---

### Phase 10: Typography & Hierarchy
**Goal**: Establish clear, consistent typography hierarchy using font-size tokens from Phase 7

**Depends on**: Phase 9 (layout rhythm established)

**Requirements**: TYPO-01, TYPO-02, TYPO-03

**Success Criteria** (what must be TRUE):
1. Typography hierarchy visually clear on every page — h1 > h2 > h3 > body size differentiation immediately apparent
2. Heading hierarchy semantically correct — no skipped levels (h2 → h4) on any page
3. Responsive typography scales appropriately — headings readable but not overwhelming on mobile viewports (320px-768px)
4. Line-height and letter-spacing consistent across all pages — readability optimized for body text and headings
5. Font-size tokens used exclusively — zero hardcoded `rem` or `px` font sizes remain

**Research**: Skip (standard patterns, no additional research needed)

**Plans**: TBD

---

### Phase 11: Color Refinement & Contrast Verification
**Goal**: Verify and refine color usage while maintaining WCAG AA compliance in both light and dark modes

**Depends on**: Phase 10 (typography finalized, affects contrast ratios)

**Requirements**: COLOR-01, COLOR-02, COLOR-03

**Success Criteria** (what must be TRUE):
1. All text meets WCAG AA contrast ratios (4.5:1 normal text, 3:1 large text and UI) verified in both light and dark modes
2. Dark mode visually consistent with brand (navy-based, not generic black) across all 17 pages
3. Link colors distinct from body text with consistent styling across all pages in both themes
4. Color distribution follows 60-30-10 principle (60% navy backgrounds, 30% cream/white content, 10% teal accents)
5. No contrast edge cases remain — all text readable on all background contexts in both themes

**Research**: Skip (WCAG verification methodology standard, automated tools cover this)

**Plans**: TBD

---

### Phase 12: Exhibit Content Structure Optimization
**Goal**: Apply established visual system to optimize case study storytelling and impact presentation

**Depends on**: Phase 11 (visual system established)

**Requirements**: EXHIBIT-01, EXHIBIT-02, EXHIBIT-03, EXHIBIT-04

**Success Criteria** (what must be TRUE):
1. All 9 exhibits follow Challenge → Approach → Solution → Results structure consistently
2. Quantifiable results/metrics highlighted prominently in summaries — not buried in prose paragraphs
3. Impact-first headlines implemented — hiring manager can identify key outcomes within 30-second scan
4. Visual consistency achieved across all exhibit pages — identical card styles, spacing patterns, and typography usage
5. Process documentation enhanced where relevant — senior-level differentiation showing decision rationale

**Research**: Skip initially, flag for light research mid-phase if exhibits deviate significantly from standard storytelling patterns

**Plans**: TBD

---

### Phase 13: Navigation & Footer Consistency Verification
**Goal**: Verify 100% consistency of navigation and footer across all 17 pages after content/layout stabilization

**Depends on**: Phase 12 (all page-level content finalized)

**Requirements**: NAV-05, NAV-06, NAV-07

**Success Criteria** (what must be TRUE):
1. Navigation structure programmatically verified as 100% identical across all 17 pages (automated test)
2. Footer optimized for contact visibility — email, LinkedIn, GitHub links prominent with trust elements consistent
3. Zero broken internal links verified across all 17 pages (automated link checker)
4. Hamburger menu functionality verified after all v1.1 changes — keyboard accessible, 48px touch targets, proper ARIA
5. Skip links and keyboard navigation verified — all pages support keyboard-only navigation with visible focus indicators

**Research**: Skip (navigation consistency verification straightforward)

**Plans**: TBD

---

### Phase 14: Comprehensive Accessibility & Cross-Browser QA
**Goal**: Final comprehensive verification gate — validate WCAG AA compliance and cross-browser/device compatibility

**Depends on**: Phase 13 (all content, layout, and navigation finalized)

**Requirements**: A11Y-02, A11Y-03, A11Y-04, A11Y-05, A11Y-06

**Success Criteria** (what must be TRUE):
1. Full WCAG AA re-verification passes after all v1.1 changes — contrast, focus indicators, semantic HTML, keyboard navigation all verified
2. Automated accessibility test suite passes — @axe-core/playwright across all 17 pages, Lighthouse CI accessibility score ≥95
3. Cross-browser rendering verified — Chrome, Firefox, Safari/WebKit tested on both desktop and mobile
4. All pages verified in both light and dark modes at desktop (1920px, 1024px) and mobile (768px, 320px) viewports
5. Semantic HTML verified — proper landmark roles (`<header>`, `<nav>`, `<main>`, `<footer>`), heading hierarchy, ARIA attributes correct
6. Performance metrics maintained — LCP <2.5s, INP <200ms, CLS minimal (<0.1)

**Research**: Skip (WCAG testing methodology well-documented, automated tools cover verification)

**Plans**: TBD

---

## Progress

| Phase | Milestone | Plans Complete | Status | Completed |
|-------|-----------|----------------|--------|-----------|
| 1. CSS Foundation | v1.0 | 3/3 | ✓ Complete | 2026-02-13 |
| 2. Dark Mode Implementation | v1.0 | 2/2 | ✓ Complete | 2026-02-13 |
| 3. Navigation & Mobile Responsiveness | v1.0 | 2/2 | ✓ Complete | 2026-02-13 |
| 4. SEO Optimization | v1.0 | 2/2 | ✓ Complete | 2026-02-13 |
| 5. Performance Optimization | v1.0 | 1/1 | ✓ Complete | 2026-02-18 |
| 6. Inline Style Token Cleanup | v1.0 | 2/2 | ✓ Complete | 2026-02-19 |
| 7. CSS Foundation & Token System Audit | v1.1 | Complete    | 2026-02-20 | - |
| 8. Content Quality & Information Architecture | v1.1 | 0/5 | Planned | - |
| 9. Layout & Spacing Consistency | v1.1 | 0/? | Not started | - |
| 10. Typography & Hierarchy | v1.1 | 0/? | Not started | - |
| 11. Color Refinement & Contrast Verification | v1.1 | 0/? | Not started | - |
| 12. Exhibit Content Structure Optimization | v1.1 | 0/? | Not started | - |
| 13. Navigation & Footer Consistency Verification | v1.1 | 0/? | Not started | - |
| 14. Comprehensive Accessibility & Cross-Browser QA | v1.1 | 0/? | Not started | - |

---
*Roadmap created: 2026-02-13*
*v1.1 phases added: 2026-02-20*
*Last updated: 2026-02-20*
