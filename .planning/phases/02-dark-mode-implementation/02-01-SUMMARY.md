---
phase: 02-dark-mode-implementation
plan: 01
subsystem: css-foundation
tags: [dark-mode, design-tokens, theme-toggle, accessibility]

dependency-graph:
  requires: [01-03-design-token-system]
  provides: [dark-mode-css-foundation]
  affects: [all-pages]

tech-stack:
  added: []
  patterns: [css-custom-properties, data-attribute-theming, token-overrides]

key-files:
  created: []
  modified:
    - css/main.css

decisions:
  - "Keep primary (#17a2b8) and accent (#b8860b) unchanged - good contrast on both themes"
  - "Use navy #1a2838 for dark backgrounds (NTSB brand) not generic black"
  - "Do NOT override inverse tokens - nav/hero stay dark in both themes"
  - "Add explicit footer dark mode override using --color-surface"
  - "Icon visibility uses display:none/block (not opacity) for cleaner accessibility"

metrics:
  duration: 88s
  tasks: 2
  files: 1
  commits: 2
  completed: 2026-02-13
---

# Phase 02 Plan 01: Dark Mode CSS Foundation Summary

**One-liner:** Added dark mode token overrides with brand-aligned navy palette and theme toggle button CSS with icon visibility rules.

## Tasks Completed

### Task 1: Add dark mode color token overrides
**Status:** ✓ Complete
**Commit:** a045bc5

Added `[data-theme="dark"]` block with 19 color token overrides using brand-aligned navy palette (#1a2838 background, not generic black). Text tokens set to #e8e8e8 for high contrast on dark backgrounds. Shadows increased to 0.4-0.6 opacity (from 0.08-0.2) for visibility on dark backgrounds. Hero overlay increased from 0.65 to 0.80 for better text contrast.

**Key decision:** Do NOT override `--color-inverse`, `--color-inverse-text`, or related tokens. Nav and hero use these and should remain dark in both themes. Added explicit footer override (`[data-theme="dark"] footer`) to maintain dark appearance since footer uses `var(--color-text)` as background.

**Files modified:**
- css/main.css (added 39 lines)

### Task 2: Add theme toggle button CSS and icon visibility rules
**Status:** ✓ Complete
**Commit:** 564fed6

Added complete theme toggle button styles in NAVIGATION section: base styles with 40x40px touch target (accessibility minimum), hover/focus states with visible focus indicators using `--shadow-focus-inverse`, icon visibility rules swapping `.icon-sun` and `.icon-moon` between themes using `display: none/block` (cleaner than opacity for accessibility), and `.sr-only` utility class for screen reader text.

**Files modified:**
- css/main.css (added 54 lines)

## Deviations from Plan

None - plan executed exactly as written.

## Technical Implementation

**Dark mode architecture:**
- Single `[data-theme="dark"]` selector overrides CSS custom properties
- Token override cascade: `:root` → `[data-theme="dark"]` → specific element overrides
- 19 color tokens overridden, 43 tokens unchanged (typography, spacing, radius, some shadows/overlays)

**Token decisions:**
- `--color-primary` (#17a2b8 teal): unchanged, good contrast on both light and dark
- `--color-accent` (#b8860b gold): unchanged, good contrast on both light and dark
- `--color-inverse` (#1a2838 navy): NOT overridden - nav/hero stay dark in both themes
- `--color-text`: overridden to #e8e8e8 (light) but footer needs explicit override since it uses `background: var(--color-text)`

**Button accessibility:**
- 40x40px touch target (WCAG 2.1 AA minimum)
- Visible focus indicator: 2px outline + box-shadow
- Icon swap via `display: none/block` (not `opacity` or `visibility`) - hidden icon completely removed from layout
- `.sr-only` utility for "Toggle dark mode" text

## Success Criteria Met

- [x] Dark mode tokens override background to navy #1a2838 (not black)
- [x] Text tokens provide high contrast (#e8e8e8) on dark backgrounds
- [x] Primary teal and accent gold unchanged between themes
- [x] Nav and hero maintain dark appearance in both themes (no inverse token swaps)
- [x] Footer explicitly overridden for dark mode
- [x] Toggle button styled with accessible focus states
- [x] Icon visibility correctly swaps between themes via CSS

## Files Changed

```
css/main.css    +93 lines
```

**Total additions:** 93 lines of CSS (39 for dark mode tokens, 54 for theme toggle)

## Next Steps

Plan 02-02 will add the HTML integration: insert theme toggle button into navigation, add `data-theme` attribute handling via JavaScript, implement theme persistence to localStorage, and verify dark mode works across all 14 pages.

## Self-Check

Verifying claimed files and commits exist:

```bash
# Check files exist and have expected content
[ -f "css/main.css" ] && grep -q "data-theme=\"dark\"" css/main.css && echo "FOUND: dark mode in css/main.css" || echo "MISSING: dark mode in css/main.css"
[ -f "css/main.css" ] && grep -q "theme-toggle" css/main.css && echo "FOUND: theme-toggle in css/main.css" || echo "MISSING: theme-toggle in css/main.css"

# Check commits exist
git log --oneline --all | grep -q "a045bc5" && echo "FOUND: a045bc5" || echo "MISSING: a045bc5"
git log --oneline --all | grep -q "564fed6" && echo "FOUND: 564fed6" || echo "MISSING: 564fed6"
```

**Result:**
```
FOUND: dark mode in css/main.css
FOUND: theme-toggle in css/main.css
FOUND: commit a045bc5
FOUND: commit 564fed6
```

## Self-Check: PASSED

All claimed files exist with expected content, and all commits are present in git history.
