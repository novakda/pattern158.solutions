---
phase: 06-inline-style-token-cleanup
plan: 01
subsystem: ui
tags: [css-custom-properties, dark-mode, wcag, inline-styles, design-tokens]

# Dependency graph
requires:
  - phase: 01-css-foundation
    provides: Design token system with --color-* tokens in :root and [data-theme="dark"] blocks
  - phase: 02-dark-mode
    provides: Dark mode toggle system that overrides :root CSS custom property values
provides:
  - All 17 HTML files using only valid CSS custom property references in inline style= attributes
  - Zero instances of deleted token names (--teal, --light-gray) in any HTML file
  - Zero hardcoded hex/keyword color values in any HTML inline style
  - Dark mode toggle now affects ALL inline-styled text and background colors across all pages
affects: [performance-testing, lighthouse-audit, wcag-validation]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "Inline style= color values use var(--color-*) tokens, never hardcoded hex or deleted token names"
    - "Attribution footnotes use --color-text-muted (#666666 light / #a0a0a0 dark) for WCAG 4.5:1 compliance"
    - "Section alternation uses --color-surface (white) and --color-background-alt (gray) — NOT --color-background"

key-files:
  created: []
  modified:
    - index.html
    - contact.html
    - faq.html
    - philosophy.html
    - testimonials.html
    - exhibits/exhibit-a.html
    - exhibits/exhibit-b.html
    - exhibits/exhibit-c.html
    - exhibits/exhibit-d.html
    - exhibits/exhibit-e.html
    - exhibits/exhibit-f.html
    - exhibits/exhibit-g.html
    - exhibits/exhibit-h.html
    - exhibits/exhibit-i.html
    - exhibits/exhibit-j.html
    - exhibits/exhibit-k.html
    - exhibits/exhibit-l.html

key-decisions:
  - "Map #888 attribution text to --color-text-muted (not --color-text-source) — text-source (#888888) fails WCAG 4.5:1 at 3.37:1, text-muted (#666666) achieves 5.45:1"
  - "Fix inline style= values in place (token substitution only) — do not extract to CSS classes (out of scope for gap closure)"
  - "background: white maps to --color-surface (#ffffff / #2a3f54 dark), not --color-background (page canvas)"

patterns-established:
  - "Attribution footnote pattern: color: var(--color-text-muted) — all 11 instances now consistent"
  - "Section alternation pattern: background: var(--color-background-alt) / background: var(--color-surface) — all 18 instances consistent"
  - "Footer tagline pattern: color: var(--color-primary) — all 17 pages consistent"

requirements-completed: [CSS-02, DARK-01]

# Metrics
duration: 1min
completed: 2026-02-19
---

# Phase 6 Plan 1: Inline Style Token Cleanup Summary

**49 inline style color problems fixed across 17 HTML files — deleted CSS variable references (--teal, --light-gray) and hardcoded hex colors (#888, #555, #666, white) replaced with design system tokens, closing CSS-02 and DARK-01 gaps from v1.0 milestone audit**

## Performance

- **Duration:** 1 min
- **Started:** 2026-02-19T00:12:23Z
- **Completed:** 2026-02-19T00:13:23Z
- **Tasks:** 2 (1 execution + 1 validation)
- **Files modified:** 17

## Accomplishments

- Fixed 17 instances of `color: var(--teal)` → `color: var(--color-primary)` across all 17 HTML pages (footer tagline now renders teal instead of black browser default)
- Fixed 18 section background inline styles in exhibits f/g/h/i: 8x `var(--light-gray)` → `var(--color-background-alt)` and 10x `background: white` → `background: var(--color-surface)` (all now respond to dark mode toggle)
- Fixed 14 hardcoded hex color values (10x `#888`, 1x `#555`, 3x `#666`) in testimonials and 9 exhibit files — all attribution and descriptive text now meets WCAG AA 4.5:1 in both light and dark themes

## Task Commits

Each task was committed atomically:

1. **Task 1: Execute all 4 token replacement groups across 17 HTML files** - `b7b9e6f` (fix)
2. **Task 2: Validate token resolution and WCAG compliance** - (validation only, no file changes)

## Files Created/Modified

- `index.html` - Footer tagline: `var(--teal)` → `var(--color-primary)`
- `contact.html` - Footer tagline: `var(--teal)` → `var(--color-primary)`
- `faq.html` - Footer tagline: `var(--teal)` → `var(--color-primary)`
- `philosophy.html` - Footer tagline: `var(--teal)` → `var(--color-primary)`
- `testimonials.html` - Footer tagline + attribution footnote: 2 tokens replaced
- `exhibits/exhibit-a.html` - Footer tagline + attribution (#888→muted) + body para (#555→medium): 3 tokens replaced
- `exhibits/exhibit-b.html` - Footer tagline + attribution: 2 tokens replaced
- `exhibits/exhibit-c.html` - Footer tagline + attribution + table cell (#666→muted): 3 tokens replaced
- `exhibits/exhibit-d.html` - Footer tagline + attribution: 2 tokens replaced
- `exhibits/exhibit-e.html` - Footer tagline + attribution + table cell (#666→muted): 3 tokens replaced
- `exhibits/exhibit-f.html` - Footer tagline + section backgrounds (2x alt + 2x surface) + attribution: 6 tokens replaced
- `exhibits/exhibit-g.html` - Footer tagline + section backgrounds (2x alt + 2x surface) + attribution: 6 tokens replaced
- `exhibits/exhibit-h.html` - Footer tagline + section backgrounds (2x alt + 3x surface) + attribution: 7 tokens replaced
- `exhibits/exhibit-i.html` - Footer tagline + section backgrounds (2x alt + 3x surface) + attribution + paragraph (#666→muted): 8 tokens replaced
- `exhibits/exhibit-j.html` - Footer tagline: 1 token replaced
- `exhibits/exhibit-k.html` - Footer tagline: 1 token replaced
- `exhibits/exhibit-l.html` - Footer tagline: 1 token replaced

## Decisions Made

- **`#888` → `--color-text-muted`** (not `--color-text-source`): The v1.0 audit suggested `--color-text-source` for `#888` attribution text, but `--color-text-source` is `#888888` in light mode — only 3.37:1 contrast ratio against `#faf9f6` background, failing WCAG AA (4.5:1 required for 0.8rem text). `--color-text-muted` (`#666666` light / `#a0a0a0` dark) achieves 5.45:1 / 5.72:1 in both modes.
- **In-place token substitution** (not CSS class extraction): Extracting inline styles to named classes would require new class definitions in main.css and markup changes — expanding scope beyond gap closure. CSS-02 requires "replaced with CSS custom properties" which inline `var(--token)` satisfies directly.
- **`background: white` → `--color-surface`** (not `--color-background`): `--color-background` is the page canvas token (`#faf9f6`). Section alternation uses `--color-surface` (`#ffffff` / `#2a3f54`) for white sections — matching the existing CSS class-based section patterns in main.css.

## Deviations from Plan

None - plan executed exactly as written.

## Issues Encountered

None. The research had pre-identified all 49 problem instances with exact file and line numbers. Execution was 4 targeted sed substitutions followed by grep verification. All counts matched research inventory exactly.

## User Setup Required

None - no external service configuration required.

## Next Phase Readiness

- CSS-02 and DARK-01 requirements are now fully satisfied
- All 17 HTML files use only valid CSS custom properties in inline style= attributes
- Dark mode toggle now affects 100% of page colors (previously 49 inline styles were bypassing the theme system)
- Ready for Lighthouse audit to verify no WCAG contrast failures remain
- Phase 6 is the final gap closure phase — v1.0 milestone requirements are now complete

---
*Phase: 06-inline-style-token-cleanup*
*Completed: 2026-02-19*

## Self-Check: PASSED

- index.html: FOUND, contains var(--color-primary)
- testimonials.html: FOUND, contains var(--color-text-muted)
- exhibits/exhibit-f.html: FOUND, contains var(--color-background-alt)
- exhibits/exhibit-a.html: FOUND, contains var(--color-text-medium)
- .planning/phases/06-inline-style-token-cleanup/06-01-SUMMARY.md: FOUND
- Commit b7b9e6f: FOUND in git log
