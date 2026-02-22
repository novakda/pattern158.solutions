# Deferred Items - Quick Task 6

## Pre-existing Accessibility Issue (Out of Scope)

**Issue:** Firefox dark mode contrast failures on index.html (Home page)
**Status:** Pre-existing before this task's changes
**Impact:** 1/270 tests failing (269/270 passing)

**Details:**
- Links on dark `.finding-card` backgrounds: #29b7c9 on #2a3f54 = 4.49:1 (needs 4.5:1)
- Button text on `.btn-primary`: #3a4a57 on #29bacc = 3.91:1 (needs 4.5:1)
- Only fails in Firefox (Chromium passes)
- Marginal failures (within 0.01-0.6 contrast ratio of threshold)

**Scope Boundary Rationale:**
Per GSD deviation rules, only auto-fix issues DIRECTLY caused by current task changes. This task modified only content (Three Stooges citations in philosophy.html, index.html, PROJECT.md). The contrast issue existed before these changes and is CSS-related, not content-related.

**Verification:**
- Ran `git stash` to remove task changes
- Ran `npx playwright test --project=firefox --grep="Home - Dark Mode"`
- Test failed with identical contrast violations
- Confirms pre-existing issue unrelated to Three Stooges content changes

**Recommendation:**
Create separate quick task or phase plan to:
1. Audit dark mode `--color-primary-on-dark` token usage
2. Adjust Firefox-specific contrast values if needed
3. Re-verify all 270 tests pass in both Chromium and Firefox

---
*Documented: 2026-02-22*
