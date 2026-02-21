---
status: diagnosed
trigger: "Footer attribution text contrast failure"
created: 2026-02-18T00:00:00Z
updated: 2026-02-18T00:00:05Z
---

## Current Focus

hypothesis: The inline style uses `var(--color-text-muted)` (#666) on footer with dark background `var(--color-text)` (#2d3436), causing 2.21:1 contrast. Should use `var(--color-inverse-text-muted)` instead.
test: Verify footer background token, confirm available inverse tokens, locate all 10 affected instances
expecting: Footer uses --color-text background, inverse tokens exist (lines 22-23), all 10 pages have same pattern
next_action: Check footer CSS for background, grep for all instances

## Symptoms

expected: Small attribution text in footer should meet WCAG 4.5:1 contrast ratio
actual: Contrast ratio is 2.21:1 in light mode (#666666 text on #2d3436 background)
errors: WCAG AA contrast failure
reproduction: Open any of 10 affected pages in light mode, check footer attribution text
started: Introduced during Phase 6 token cleanup when replacing hardcoded #888 with --color-text-muted
affected_pages:
  - testimonials.html
  - exhibits/exhibit-a.html through exhibit-i.html (9 files)

## Eliminated

## Evidence

- timestamp: 2026-02-18T00:00:01Z
  checked: css/main.css lines 1-100
  found: Design tokens defined - --color-text-muted: #666666 (line 16), --color-inverse-text-muted: rgba(250, 249, 246, 0.8) (line 22), --color-inverse-text-light: rgba(250, 249, 246, 0.7) (line 23)
  implication: Inverse tokens exist for dark backgrounds. Regular --color-text-muted is for light backgrounds only.

- timestamp: 2026-02-18T00:00:02Z
  checked: exhibits/exhibit-a.html line 499
  found: <p style="... color: var(--color-text-muted);">All quotations sourced...</p> inside <footer>
  implication: Confirms problematic pattern - regular text token on dark footer background

- timestamp: 2026-02-18T00:00:03Z
  checked: css/main.css line 347-349
  found: footer { background: var(--color-text); color: var(--color-inverse-text); }
  implication: Footer explicitly uses dark background (--color-text = #2d3436) and inverse text tokens

- timestamp: 2026-02-18T00:00:04Z
  checked: All HTML files for attribution text pattern
  found: 10 instances total - testimonials.html:605, exhibit-a.html:499, exhibit-b.html:258, exhibit-c.html:264, exhibit-d.html:244, exhibit-e.html:261, exhibit-f.html:236, exhibit-g.html:229, exhibit-h.html:259, exhibit-i.html:245
  implication: All 10 affected pages have identical problematic inline style

## Resolution

root_cause: Footer attribution text uses `color: var(--color-text-muted)` (#666666) but footer has `background: var(--color-text)` (#2d3436). The --color-text-muted token is designed for light backgrounds, not dark backgrounds. This creates 2.21:1 contrast ratio, failing WCAG AA 4.5:1 requirement. Should use --color-inverse-text-muted which is designed for dark backgrounds.
fix: Replace `color: var(--color-text-muted)` with `color: var(--color-inverse-text-muted)` in all 10 instances
verification: Verify contrast ratio meets 4.5:1, check all 10 pages in both light and dark modes
files_changed:
  - testimonials.html:605
  - exhibits/exhibit-a.html:499
  - exhibits/exhibit-b.html:258
  - exhibits/exhibit-c.html:264
  - exhibits/exhibit-d.html:244
  - exhibits/exhibit-e.html:261
  - exhibits/exhibit-f.html:236
  - exhibits/exhibit-g.html:229
  - exhibits/exhibit-h.html:259
  - exhibits/exhibit-i.html:245
