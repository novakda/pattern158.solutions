---
phase: 09-layout-spacing-consistency
plan: 01
subsystem: css
tags: [design-tokens, spacing-scale, layout-consistency]

# Dependency graph
requires:
  - phase: 07-css-foundation-token-system-audit
    provides: Initial spacing token scale and migration methodology
provides:
  - Complete spacing token coverage with new --space-ms token
  - Zero hardcoded spacing values except structural exceptions
  - Verified consistent section spacing rhythm across all 17 pages
affects: [10-typography-enhancement, 11-color-contrast-refinement]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Spacing token migration: all margin/padding/gap values use --space-* tokens"
    - "Structural exceptions: nav dimensions, timeline positioning, sr-only, zero resets"
    - "Negative positioning uses calc(-1 * var(--token)) for CSS variable negation"

key-files:
  created: []
  modified:
    - css/main.css

key-decisions:
  - "Added --space-ms token (0.75rem) for mobile horizontal padding pattern"
  - "Replaced all hardcoded spacing values except documented structural exceptions"
  - "Used calc() for negative positioning values to properly negate CSS variables"
  - "Verified section spacing rhythm already consistent from Phase 7 work"

patterns-established:
  - "Spacing tokenization: var(--space-xs) through var(--space-5xl) for all layout spacing"
  - "Mobile-specific spacing: --space-ms (0.75rem) bridges gap between sm and md"
  - "Section rhythm: desktop var(--space-4xl) vertical, mobile var(--space-2xl) vertical"
  - "Hero hierarchy: index hero var(--space-5xl), hero-minimal var(--space-4xl)"

requirements-completed: [LAYOUT-01, LAYOUT-04]

# Metrics
duration: 5.9min
completed: 2026-02-21
---

# Phase 09 Plan 01: Spacing Token Migration & Section Rhythm Summary

**Complete spacing token coverage with new --space-ms token (0.75rem), all hardcoded values migrated except nav/timeline structural exceptions, section spacing rhythm verified consistent across all 17 pages**

## Performance

- **Duration:** 5.9 min
- **Started:** 2026-02-21T04:56:26Z
- **Completed:** 2026-02-21T05:02:18Z
- **Tasks:** 2
- **Files modified:** 1

## Accomplishments
- Added --space-ms token (0.75rem) to bridge spacing scale gap for mobile horizontal padding
- Migrated all remaining hardcoded margin/padding/gap values to design tokens
- Fixed negative positioning values to use calc(-1 * var(--token)) for proper CSS variable negation
- Verified section spacing rhythm already consistent: desktop var(--space-4xl), mobile var(--space-2xl)
- Documented 6 structural exceptions: nav hamburger, nav menu, timeline positioning, sr-only patterns

## Task Commits

Each task was committed atomically:

1. **Task 1: Migrate all remaining hardcoded spacing values to design tokens** - `f3922d9` (feat)
2. **Task 2: Normalize section spacing rhythm for consistent visual flow** - `d1b30ac` (chore - verification only)

**Auto-fix deviation:** `bdc76b2` (fix - tokenize mobile table label margin)

## Files Created/Modified
- `css/main.css` - Added --space-ms token, replaced all hardcoded spacing with tokens except structural exceptions, verified section spacing consistency

## Decisions Made

1. **Added --space-ms token (0.75rem)**: Mobile horizontal padding uses 0.75rem extensively as a deliberate pattern between --space-sm (0.5rem) and --space-md (1rem). Rather than force these to existing tokens and change mobile spacing, added --space-ms to preserve the intentional design.

2. **Preserved structural exceptions**: Kept 6 hardcoded spacing values as documented exceptions:
   - Nav hamburger padding (12px) - touch target dimension
   - Nav menu link padding (14px 20px) - user decided nav has own spacing system
   - Timeline positioning (padding-left: 2.5rem, 2 instances) - structural offset for timeline dots
   - Sr-only margin (-1px, 2 instances) - accessibility pattern

3. **Used calc() for negative values**: Negative positioning (top: -var(--space-sm)) requires calc(-1 * var(--token)) to properly negate CSS variables.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 1 - Bug] Tokenized mobile table label margin**
- **Found during:** Final verification after Task 1
- **Issue:** Mobile table card transformation had hardcoded margin-bottom: 2px for data-label pseudo-elements, missed in initial migration
- **Fix:** Replaced 2px with var(--space-xs) for consistency
- **Files modified:** css/main.css
- **Verification:** Stylelint passes, grep shows only documented structural exceptions remain
- **Committed in:** bdc76b2 (separate commit after Task 1)

---

**Total deviations:** 1 auto-fixed (Rule 1 - bug)
**Impact on plan:** Necessary fix to complete spacing token coverage. No scope creep.

## Issues Encountered

None - plan executed as specified with one missed value caught in verification.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- Spacing token migration complete - LAYOUT-01 requirement satisfied
- Section spacing rhythm normalized - LAYOUT-04 requirement partially satisfied (full visual hierarchy in subsequent plans)
- Ready for Phase 09 Plan 02 (Component-Level Layout Consistency)
- Typography phase (10) can proceed with clean spacing foundation

## Self-Check

Verified plan completion:

- [x] --space-ms token exists in :root: PASSED
- [x] css/main.css modified with spacing tokens: PASSED
- [x] Commit f3922d9 exists (Task 1): PASSED
- [x] Commit d1b30ac exists (Task 2): PASSED
- [x] Commit bdc76b2 exists (deviation): PASSED
- [x] Only 6 structural exceptions remain: PASSED
- [x] Stylelint validation passes: PASSED

---
*Phase: 09-layout-spacing-consistency*
*Completed: 2026-02-21*
