---
phase: 01-css-foundation
plan: 01
subsystem: ui
tags: [css, extraction, design-system, static-html]

requires:
  - phase: none
    provides: "First phase — no dependencies"
provides:
  - "External CSS file at /css/main.css with all styles from 14 pages"
  - "Body classes on all 14 HTML pages for CSS scoping"
  - "All inline <style> blocks removed from HTML"
  - "Color source of truth decision: Option A (implemented values)"
affects: [01-02, 02-dark-mode]

tech-stack:
  added: []
  patterns: ["body-class CSS scoping for page-specific styles"]

key-files:
  created: [css/main.css]
  modified: [index.html, philosophy.html, faq.html, contact.html, testimonials.html, exhibits/exhibit-a.html, exhibits/exhibit-b.html, exhibits/exhibit-c.html, exhibits/exhibit-d.html, exhibits/exhibit-e.html, exhibits/exhibit-f.html, exhibits/exhibit-g.html, exhibits/exhibit-h.html, exhibits/exhibit-i.html]

key-decisions:
  - "Color source of truth: Option A — keep implemented values (#1a2838, #17a2b8, #faf9f6) not design spec values"
  - "Body class scoping pulled forward from Plan 02 to fix selector conflicts in shared CSS file"
  - "Absolute paths for CSS url() references (prevents path resolution issues from /css/ directory)"

patterns-established:
  - "Body class naming: page-{name} for root pages, page-exhibit page-exhibit-{letter} for exhibits"
  - "CSS organization: shared base (unscoped) → page sections (body-class scoped) → responsive (within sections)"

duration: ~35min
completed: 2026-02-13
---

# Plan 01-01: Verbatim CSS Extraction Summary

**Extracted all inline CSS from 14 HTML pages into /css/main.css with body-class scoping to prevent selector conflicts**

## Performance

- **Duration:** ~35 min
- **Started:** 2026-02-13
- **Completed:** 2026-02-13
- **Tasks:** 2 (1 auto + 1 checkpoint)
- **Files modified:** 15

## Accomplishments
- Created /css/main.css (2152 lines) containing all extracted CSS organized by page section
- Removed all inline `<style>` blocks from 14 HTML pages
- Added `<link rel="stylesheet" href="/css/main.css">` to all 14 pages
- Added body classes to all 14 pages and scoped page-specific CSS sections
- User approved visual fidelity and selected color Option A

## Task Commits

1. **Task 1: Extract all inline CSS to /css/main.css and link all pages** - `3ef5929`
2. **Task 2: Color audit and visual verification (checkpoint)** - fixes committed in `ffa57b6`

## Files Created/Modified
- `css/main.css` - All extracted CSS, organized by page with body-class scoping
- `index.html` through `exhibits/exhibit-i.html` (14 files) - Removed `<style>` blocks, added `<link>` to CSS, added body classes

## Decisions Made
- **Color source of truth:** Option A — keep implemented values (#1a2838 navy, #17a2b8 teal, #faf9f6 cream). These differ from the design spec but are what's been live on the site.
- **Body class scoping:** Pulled forward from Plan 02 because extracting page-specific CSS into a shared file without scoping causes selector conflicts (17 selectors like .hero defined differently across pages).

## Deviations from Plan

### Auto-fixed Issues

**1. Residual CSS text in index.html body**
- **Found during:** Task 2 (visual verification)
- **Issue:** The `<style>` tags were removed but CSS content between them was left behind in the body, rendering as visible text
- **Fix:** Removed 489 lines of residual CSS content from index.html body
- **Committed in:** ffa57b6

**2. Hero background image path broken**
- **Found during:** Task 2 (visual verification)
- **Issue:** Relative URL `url('assets/images/...')` now resolved from /css/ directory instead of root
- **Fix:** Changed to absolute path `url('/assets/images/...')`
- **Committed in:** ffa57b6

**3. CSS selector conflicts across pages**
- **Found during:** Task 2 (visual verification)
- **Issue:** 17 selectors (e.g., .hero, .container, section, blockquote) defined differently in multiple page sections; last definition won, breaking other pages
- **Fix:** Added body classes to all 14 HTML pages and prefixed all page-specific CSS selectors with body class scope
- **Files modified:** All 15 files (css/main.css + 14 HTML files)
- **Committed in:** ffa57b6

**4. Skip-link partially visible on page load**
- **Found during:** Task 2 (visual verification)
- **Issue:** Pre-existing: `top: -40px` insufficient to hide element with 12px vertical padding
- **Fix:** Changed to `top: -100px`
- **Committed in:** ffa57b6

---

**Total deviations:** 4 auto-fixed (3 extraction bugs, 1 pre-existing)
**Impact on plan:** Body class scoping from Plan 02 pulled forward — Plan 02 can skip that step. No scope creep beyond what was needed for correctness.

## Issues Encountered
- Extraction agent removed `<style>` tags but left CSS content in index.html body — caught during user visual verification
- CSS-in-single-file approach requires scoping even for "verbatim" extraction when pages share selector names

## Next Phase Readiness
- CSS extraction complete with body class scoping already in place
- Plan 02 (design tokens, deduplication) can proceed — body classes already added (task 2 of plan 02 partially done)
- Color decision (Option A) recorded for Plan 02 token system

---
*Phase: 01-css-foundation*
*Completed: 2026-02-13*
