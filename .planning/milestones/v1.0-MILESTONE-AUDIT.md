---
milestone: v1.0
audited: 2026-02-18T23:59:00Z
status: gaps_found
scores:
  requirements: 16/18
  phases: 5/5
  integration: 16/18
  flows: 4/5
gaps:
  requirements:
    - id: "CSS-02"
      status: "unsatisfied"
      phase: "Phase 1"
      claimed_by_plans: ["01-01-PLAN.md", "01-02-PLAN.md", "01-03-PLAN.md"]
      completed_by_plans: ["01-01-SUMMARY.md", "01-02-SUMMARY.md", "01-03-SUMMARY.md"]
      verification_status: "passed (CSS file only — HTML inline styles not audited)"
      evidence: "Integration checker found var(--teal) and var(--light-gray) referencing deleted token names in HTML inline styles across all 17 pages (footer tagline) and 4 exhibit pages (section backgrounds). Also found hardcoded hex colors #888, #555, #666 in inline styles on testimonials.html and 8 exhibit pages. Phase 1 verifier only checked css/main.css, not HTML inline style= attributes."
    - id: "DARK-01"
      status: "partial"
      phase: "Phase 2"
      claimed_by_plans: ["02-01-PLAN.md", "02-02-PLAN.md"]
      completed_by_plans: ["02-01-SUMMARY.md", "02-02-SUMMARY.md"]
      verification_status: "passed (CSS token override system verified — HTML inline style bypass not detected)"
      evidence: "Dark mode token override system works correctly for CSS-driven values. However, HTML inline styles using var(--teal) (undefined — renders as browser default black), var(--light-gray) (undefined — renders as transparent), and hardcoded #888/#555/#666 bypass the dark mode system entirely. In dark mode, #555 on navy #1a2838 has ~2.5:1 contrast ratio, failing WCAG AA."
  integration:
    - finding: "Undefined CSS variable references in HTML inline styles"
      severity: "Medium"
      from: "Phase 1 (CSS Foundation)"
      to: "All 17 HTML pages"
      issue: "Phase 1 renamed --teal to --color-primary and --light-gray to --color-background-alt in css/main.css but did not update HTML inline style= attributes. Footer tagline on all 17 pages uses var(--teal) which is now undefined."
      affected_requirements: ["CSS-02", "DARK-01"]
    - finding: "Hardcoded hex colors in HTML inline styles bypass dark mode"
      severity: "Low-Medium"
      from: "Phase 2 (Dark Mode)"
      to: "testimonials.html + 8 exhibit pages"
      issue: "#888, #555, #666 in inline style= attributes do not respond to dark mode toggle. #555 on dark background fails WCAG contrast."
      affected_requirements: ["CSS-02", "DARK-01"]
  flows:
    - flow: "Dark mode toggle"
      status: "partial"
      breaks_at: "Content areas with inline styles — footer tagline renders in black instead of teal, exhibit section backgrounds transparent instead of gray, attribution text has low contrast on dark backgrounds"
tech_debt:
  - phase: "01-css-foundation"
    items:
      - "SUMMARY.md frontmatter missing requirements-completed field (all 3 plans)"
      - "REQUIREMENTS.md traceability table still says 'Pending' for CSS-01, CSS-02, CSS-03"
      - "Minor discrepancy: SUMMARY claims 62 design tokens, verifier counted 44"
  - phase: "02-dark-mode-implementation"
    items:
      - "SUMMARY.md frontmatter missing requirements-completed field (both plans)"
      - "REQUIREMENTS.md traceability table still says 'Pending' for DARK-01 through DARK-04"
      - "6 human verification tests documented but not confirmed (visual regression, FOUC, cross-tab, system preference, keyboard, multi-page)"
  - phase: "03-navigation-mobile-responsiveness"
    items:
      - "SUMMARY.md frontmatter missing requirements-completed field (both plans)"
      - "REQUIREMENTS.md traceability table still says 'Pending' for NAV-01 through NAV-04"
      - "Verification status is 'human_needed' — 6 human verification tests not yet confirmed"
  - phase: "04-seo-optimization"
    items:
      - "SUMMARY.md frontmatter missing requirements-completed field (both plans)"
      - "REQUIREMENTS.md traceability table still says 'Pending' for SEO-01 through SEO-04"
      - "OG image is 1024x559 instead of optimal 1200x630 for social sharing (documented trade-off)"
  - phase: "05-performance-optimization"
    items:
      - "VERIFICATION.md has contradictory status: YAML says 'passed', body says 'gaps_found' — gaps were resolved by subsequent docs commit updating requirement text"
      - "Hero image file has .png extension but contains JPEG data (pre-existing technical inconsistency)"
  - phase: "cross-cutting"
    items:
      - "Page count expanded from 14 to 17 (exhibits j, k, l added) — milestone scope was defined around 14 pages but all 17 carry full integration"
      - "REQUIREMENTS.md checkboxes not updated for Phases 1-4 requirements (only Phase 5 updated)"
      - "12 of 15 requirements show 'Pending' in traceability table despite being verified as satisfied"
---

# v1.0 Milestone Audit Report

**Milestone:** v1.0 — CSS Foundation, Dark Mode, Navigation, SEO, Performance
**Audited:** 2026-02-18
**Status:** gaps_found
**Score:** 16/18 requirements satisfied

## Executive Summary

All 5 phases are complete with passing VERIFICATION.md reports. 16 of 18 requirements are satisfied. Two requirements have genuine gaps discovered by cross-phase integration checking:

1. **CSS-02** (unsatisfied): HTML inline `style=` attributes reference deleted CSS variable names (`--teal`, `--light-gray`) and contain hardcoded hex colors (`#888`, `#555`, `#666`). Phase 1 verifier only audited `css/main.css`, missing the HTML inline styles.

2. **DARK-01** (partial): Dark mode token system works correctly for CSS-driven values, but HTML inline style values bypass the system entirely. This causes visual bugs (footer tagline renders in black instead of teal) and WCAG contrast failures (`#555` on dark background).

Both gaps stem from the same root cause: Phase 1 CSS extraction did not audit or update HTML inline `style=` attributes. The fix is straightforward — replace undefined variable references and hardcoded hex values in inline styles with correct design system tokens.

## Phase Verification Summary

| Phase | Status | Score | Requirements | Gaps |
|-------|--------|-------|-------------|------|
| 1. CSS Foundation | passed | 5/5 | CSS-01 ✓, CSS-02 **✗**, CSS-03 ✓ | HTML inline styles not audited for old token names |
| 2. Dark Mode | passed | 5/5 | DARK-01 **~**, DARK-02 ✓, DARK-03 ✓, DARK-04 ✓ | Dark mode bypassed by inline styles |
| 3. Navigation | human_needed | 8/8 | NAV-01 ✓, NAV-02 ✓, NAV-03 ✓, NAV-04 ✓ | None (human verification pending) |
| 4. SEO | passed | 6/6 | SEO-01 ✓, SEO-02 ✓, SEO-03 ✓, SEO-04 ✓ | None |
| 5. Performance | passed | 5/5 | PERF-01 ✓, PERF-02 ✓, PERF-03 ✓ | None (requirements updated to match delivery) |

## Requirements Coverage (3-Source Cross-Reference)

### Source Legend
- **V** = Phase VERIFICATION.md status
- **S** = SUMMARY.md `requirements-completed` frontmatter
- **R** = REQUIREMENTS.md traceability table checkbox

| Requirement | V | S | R | Final Status | Notes |
|-------------|---|---|---|--------------|-------|
| CSS-01 | passed | missing | [ ] Pending | **satisfied** | Verified: 0 inline `<style>` blocks remain |
| CSS-02 | passed* | missing | [ ] Pending | **unsatisfied** | *Verifier checked CSS only. Integration found undefined vars + hardcoded hex in HTML inline styles |
| CSS-03 | passed | missing | [ ] Pending | **satisfied** | Body classes standardized, stylesheet linking consistent |
| DARK-01 | passed* | missing | [ ] Pending | **partial** | *Token system works. Inline styles bypass dark mode |
| DARK-02 | passed | missing | [ ] Pending | **satisfied** | prefers-color-scheme detection verified |
| DARK-03 | passed | missing | [ ] Pending | **satisfied** | localStorage toggle verified |
| DARK-04 | passed | missing | [ ] Pending | **satisfied** | Blocking script before CSS on all pages |
| NAV-01 | passed | missing | [ ] Pending | **satisfied** | All 17 pages have identical nav links |
| NAV-02 | passed | missing | [ ] Pending | **satisfied** | All nav links use absolute-from-root paths |
| NAV-03 | passed | missing | [ ] Pending | **satisfied** | Hamburger with ARIA attributes on all pages |
| NAV-04 | passed | missing | [ ] Pending | **satisfied** | 48px touch targets + keyboard handlers |
| SEO-01 | passed | missing | [ ] Pending | **satisfied** | 17 unique meta descriptions |
| SEO-02 | passed | missing | [ ] Pending | **satisfied** | Complete OG tag sets on all pages |
| SEO-03 | passed | missing | [ ] Pending | **satisfied** | Person + WebSite JSON-LD |
| SEO-04 | passed | missing | [ ] Pending | **satisfied** | sitemap.xml with 17 URLs |
| PERF-01 | passed | listed | [x] Complete | **satisfied** | Hero compressed 148KB→118KB |
| PERF-02 | passed | listed | [x] Complete | **satisfied** | N/A by architecture (no non-critical images) |
| PERF-03 | passed | listed | [x] Complete | **satisfied** | display=swap + preconnect on all pages |

### Documentation Gaps

**REQUIREMENTS.md traceability table is stale:** 12 of 15 requirements for Phases 1-4 show "Pending" despite being verified as satisfied. Only Phase 5 requirements were updated to "Complete."

**SUMMARY.md frontmatter incomplete:** 9 of 10 SUMMARY files lack the `requirements-completed` YAML field. Only Phase 5 Plan 01 includes it.

### Orphan Detection

No orphaned requirements. All 18 v1 requirements appear in at least one phase VERIFICATION.md.

## Integration Check Results

**Connected:** 16/18 cross-phase integrations properly wired
**Partial:** 2 integrations with gaps (CSS-02, DARK-01)
**Broken:** 0 hard breaks

### Critical Findings

**Finding 1: Undefined CSS variable references in HTML inline styles (CSS-02, DARK-01)**

Phase 1 renamed `--teal` → `--color-primary` and `--light-gray` → `--color-background-alt` in css/main.css but did not update HTML inline `style=` attributes.

Affected elements:
- **All 17 pages:** Footer tagline `<p style="color: var(--teal)">` — renders as black (browser default) instead of teal
- **4 exhibit pages (f, g, h, i):** Section backgrounds `<section style="background: var(--light-gray)">` — renders as transparent instead of light gray

Fix: Replace `var(--teal)` → `var(--color-primary)` and `var(--light-gray)` → `var(--color-background-alt)` in HTML inline styles.

**Finding 2: Hardcoded hex colors in HTML inline styles (CSS-02, DARK-01)**

Multiple pages have inline `style=` attributes with hardcoded hex colors that bypass the CSS custom property system:
- `#888` on testimonials.html + 8 exhibit pages (attribution footnotes)
- `#555` on exhibits a, c, e, i (descriptive paragraphs)
- `#666` on exhibits c, e (table cells)

In dark mode, `#555` on navy `#1a2838` has ~2.5:1 contrast, failing WCAG AA (4.5:1 required).

Fix: Replace `#888` → `var(--color-text-light)`, `#555` → `var(--color-text-medium)`, `#666` → `var(--color-text-muted)`.

### Informational Findings

- **Page count:** Site has 17 pages (exhibits j, k, l added beyond original 14-page scope). All 17 carry full Phase 1-5 integration.
- **Logo CSS width:auto:** CSS `width: auto` overrides HTML `width="88"` attribute but CLS prevention still works via CSS `height: 48px` establishing the aspect ratio hint.
- **Favicon paths:** Exhibit pages use relative `../` paths for favicons — intentionally out of NAV-02 scope.

## E2E Flow Results

| Flow | Status | Notes |
|------|--------|-------|
| Landing page load | **Complete** | CSS loads, FOUC prevented, hero compressed, fonts swap |
| Dark mode toggle | **Partial** | Token system works; footer tagline + hardcoded inline colors don't respond |
| Mobile navigation | **Complete** | Hamburger toggle, slide-in, keyboard, touch targets all wired |
| Page-to-page navigation | **Complete** | Absolute paths, aria-current, cross-directory resolution |
| Social sharing preview | **Complete** | OG tags, JSON-LD, sitemap, robots.txt all correct |

## Tech Debt Summary

**Total: 15 items across 6 categories**

### Phase 1: CSS Foundation (3 items)
- SUMMARY.md frontmatter missing `requirements-completed` field (all 3 plans)
- REQUIREMENTS.md traceability table says "Pending" for CSS-01, CSS-02, CSS-03
- Minor: SUMMARY claims 62 design tokens, verifier counted 44

### Phase 2: Dark Mode (3 items)
- SUMMARY.md frontmatter missing `requirements-completed` field (both plans)
- REQUIREMENTS.md traceability table says "Pending" for DARK-01 through DARK-04
- 6 human verification tests documented but not yet confirmed

### Phase 3: Navigation (3 items)
- SUMMARY.md frontmatter missing `requirements-completed` field (both plans)
- REQUIREMENTS.md traceability table says "Pending" for NAV-01 through NAV-04
- 6 human verification tests not yet confirmed (phase status: human_needed)

### Phase 4: SEO (3 items)
- SUMMARY.md frontmatter missing `requirements-completed` field (both plans)
- REQUIREMENTS.md traceability table says "Pending" for SEO-01 through SEO-04
- OG image 1024x559 instead of optimal 1200x630 (documented trade-off)

### Phase 5: Performance (2 items)
- VERIFICATION.md has contradictory status (YAML: passed, body: gaps_found) — resolved by post-verification docs update
- Hero image has .png extension but contains JPEG data (pre-existing)

### Cross-Cutting (1 item)
- REQUIREMENTS.md checkboxes and traceability table not updated for Phases 1-4 (12 requirements show "Pending" despite being satisfied)

---

*Audited: 2026-02-18*
*Auditor: Claude (gsd milestone audit)*
