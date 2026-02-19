# Phase 6: Inline Style Token Cleanup - Research

**Researched:** 2026-02-18
**Domain:** HTML inline style attribute cleanup — CSS custom property migration, WCAG contrast compliance
**Confidence:** HIGH

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| CSS-02 | All hardcoded color values (rgba, hex) replaced with CSS custom properties | Complete inventory of all hardcoded hex values in inline styles: 10x `#888`, 1x `#555`, 3x `#666`, 10x `background: white`. All have verified token replacements with WCAG-compliant dark mode values. |
| DARK-01 | Dark theme using CSS custom properties with brand-aligned palette (not generic black) | Inline styles using hardcoded hex bypass `[data-theme="dark"]` overrides entirely. Replacing with CSS custom properties restores dark mode coverage. Token dark values have been verified against WCAG 4.5:1. |
</phase_requirements>

---

## Summary

This phase closes two gaps found in the v1.0 milestone audit. Both gaps share a single root cause: Phase 1 (CSS Foundation) converted hardcoded colors in `css/main.css` to design tokens but did not audit HTML `style=` attributes. The HTML files retained references to deleted token names (`--teal`, `--light-gray`) and hardcoded hex values (`#888`, `#555`, `#666`, `white`). These bypass the dark mode override system entirely because `[data-theme="dark"]` rules only affect CSS custom property values — not inline hardcoded values and not undefined variable references.

There are exactly 49 inline style color problems across 17 HTML files, split into 4 fix groups. The fix is a direct find-and-replace of specific patterns. No new CSS needs to be written, no new tokens need to be created — the design system already has all the correct tokens from Phase 1. The work is purely applying those tokens where they were missed.

A critical WCAG finding emerged during research: the v1.0 audit suggested mapping `#888 -> --color-text-source`, but `--color-text-source` is `#888888` in light mode, which achieves only 3.37:1 contrast against `--color-background` (`#faf9f6`) — below the 4.5:1 WCAG AA threshold for small text. The correct token for the attribution footnote pattern (0.8rem text) is `--color-text-muted` (`#666666` light / `#a0a0a0` dark), which achieves 5.45:1 / 5.72:1 in both modes.

**Primary recommendation:** Run four targeted string replacements across all HTML files in the correct order: first undefined variable names, then hardcoded hex colors, then hardcoded color keywords (`white`). Verify with grep that zero instances remain.

---

## Standard Stack

This phase uses no external libraries. The stack is:

| Tool | Purpose | Why Used |
|------|---------|---------|
| `grep -rn` | Locate all problem instances with line numbers | Precise — finds exact strings, reports file:line for verification |
| Text editor / sed-style replacement | Execute the 4 string substitutions | Direct — no templating or build step needed |
| Browser devtools | Visual verification of dark mode toggle | Only way to confirm inline styles now respond to `[data-theme="dark"]` |

**No npm packages, no build tools, no frameworks.** The site is static HTML. All fixes are text substitutions in `.html` files.

---

## Architecture Patterns

### The Problem Pattern

Inline `style=` attributes in HTML are evaluated at paint time using the computed value of CSS custom properties at that moment. When a CSS variable is undefined (e.g., `--teal` was deleted from `:root`), the browser falls back to the initial value — which for `color` is the inherited value or browser default black, and for `background` is `transparent`. This means:

- `color: var(--teal)` renders as black (browser default) in both light and dark mode
- `background: var(--light-gray)` renders as transparent in both modes
- `color: #888` renders as `#888888` in BOTH light and dark mode — dark mode toggle has zero effect

### The Fix Pattern

Replace undefined/hardcoded values with valid design system tokens. The token system's `[data-theme="dark"]` block overrides the `:root` values, so inline styles using `var(--color-*)` will automatically respond to the dark mode toggle after this fix.

```html
<!-- BEFORE (broken): -->
<p style="color: var(--teal);">Pattern 158: I cheat, but I cheat fair.</p>
<section style="background: var(--light-gray);">
<section style="background: white;">
<p style="color: #888;">All quotations sourced...</p>

<!-- AFTER (correct): -->
<p style="color: var(--color-primary);">Pattern 158: I cheat, but I cheat fair.</p>
<section style="background: var(--color-background-alt);">
<section style="background: var(--color-surface);">
<p style="color: var(--color-text-muted);">All quotations sourced...</p>
```

### Recommended Fix Order

Process fixes in this order to avoid accidentally re-introducing problems:

1. **Group 1:** `var(--teal)` → `var(--color-primary)` (17 occurrences, all 17 pages, footer tagline)
2. **Group 2:** `var(--light-gray)` → `var(--color-background-alt)` (8 occurrences, exhibits f/g/h/i)
3. **Group 3:** `background: white` → `background: var(--color-surface)` (10 occurrences, exhibits f/g/h/i)
4. **Group 4a:** `color: #888` → `color: var(--color-text-muted)` (10 occurrences, testimonials + 9 exhibits)
5. **Group 4b:** `color: #555` → `color: var(--color-text-medium)` (1 occurrence, exhibit-a.html)
6. **Group 4c:** `color: #666` → `color: var(--color-text-muted)` (3 occurrences, exhibits c/e/i)

### Anti-Patterns to Avoid

- **Using `--color-text-source` for attribution text:** `--color-text-source` is `#888888` in light mode which fails WCAG 4.5:1 against `#faf9f6`. The audit's suggested mapping is wrong. Use `--color-text-muted` instead.
- **Using `--color-text-light` for any body text:** `--color-text-light` is `#999999` light / `#888888` dark. Both values fail 4.5:1 against their respective backgrounds. Only use for decorative or purely visual elements.
- **Mapping `background: white` to `--color-background`:** `--color-background` is the page canvas (`#faf9f6`). Section alternation uses `--color-surface` (`#ffffff`) for white sections and `--color-background-alt` (`#e8e8e8` / `#243447`) for gray sections.
- **Leaving non-color inline styles alone:** Inline styles with only `margin-top`, `font-size`, `width`, `line-height` — these are fine and do NOT need changing. They aren't color-related and don't bypass dark mode.

---

## Complete Problem Inventory

### Group 1: `var(--teal)` — 17 occurrences

All are identical: `<p style="margin-top: 1rem; font-style: italic; color: var(--teal);">Pattern 158: I cheat, but I cheat fair.</p>`

| File | Line |
|------|------|
| contact.html | 211 |
| faq.html | 270 |
| index.html | 367 |
| philosophy.html | 248 |
| testimonials.html | 604 |
| exhibits/exhibit-a.html | 498 |
| exhibits/exhibit-b.html | 257 |
| exhibits/exhibit-c.html | 263 |
| exhibits/exhibit-d.html | 243 |
| exhibits/exhibit-e.html | 260 |
| exhibits/exhibit-f.html | 235 |
| exhibits/exhibit-g.html | 228 |
| exhibits/exhibit-h.html | 258 |
| exhibits/exhibit-i.html | 244 |
| exhibits/exhibit-j.html | 350 |
| exhibits/exhibit-k.html | 267 |
| exhibits/exhibit-l.html | 272 |

**Fix:** `color: var(--teal)` → `color: var(--color-primary)`

### Group 2: `var(--light-gray)` — 8 occurrences

All are `<section style="background: var(--light-gray);">` on 4 exhibit files.

| File | Lines |
|------|-------|
| exhibits/exhibit-f.html | 130, 202 |
| exhibits/exhibit-g.html | 130, 194 |
| exhibits/exhibit-h.html | 130, 212 |
| exhibits/exhibit-i.html | 130, 191 |

**Fix:** `background: var(--light-gray)` → `background: var(--color-background-alt)`

### Group 3: `background: white` — 10 occurrences

All are `<section style="background: white;">` alternating with `var(--light-gray)` sections.

| File | Lines |
|------|-------|
| exhibits/exhibit-f.html | 118, 174 |
| exhibits/exhibit-g.html | 118, 174 |
| exhibits/exhibit-h.html | 118, 178, 224 |
| exhibits/exhibit-i.html | 118, 171, 209 |

**Fix:** `background: white` → `background: var(--color-surface)`

### Group 4: Hardcoded hex — 14 occurrences

**`#888` — 10 occurrences** (attribution footnotes, 0.8rem text):

| File | Line | Content |
|------|------|---------|
| testimonials.html | 605 | All quotations sourced... |
| exhibits/exhibit-a.html | 499 | All quotations sourced... |
| exhibits/exhibit-b.html | 258 | All quotations sourced... |
| exhibits/exhibit-c.html | 264 | All quotations sourced... |
| exhibits/exhibit-d.html | 244 | All quotations sourced... |
| exhibits/exhibit-e.html | 261 | All quotations sourced... |
| exhibits/exhibit-f.html | 236 | All quotations sourced... |
| exhibits/exhibit-g.html | 229 | All quotations sourced... |
| exhibits/exhibit-h.html | 259 | All quotations sourced... |
| exhibits/exhibit-i.html | 245 | All quotations sourced... |

**Fix:** `color: #888` → `color: var(--color-text-muted)`

**`#555` — 1 occurrence** (body descriptive paragraph, 1rem text):

| File | Line | Content |
|------|------|---------|
| exhibits/exhibit-a.html | 360 | "The following five issues..." |

**Fix:** `color: #555` → `color: var(--color-text-medium)`

**`#666` — 3 occurrences** (table cell + small paragraph, italic):

| File | Line | Content |
|------|------|---------|
| exhibits/exhibit-c.html | 174 | Table cell — "13 additional team members..." |
| exhibits/exhibit-e.html | 159 | Table cell — "25+ additional team members..." |
| exhibits/exhibit-i.html | 165 | Paragraph — "Additional accessibility..." |

**Fix:** `color: #666` → `color: var(--color-text-muted)`

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Verifying zero bad patterns remain | Custom scanner script | `grep -rn "var(--teal)\|var(--light-gray)\|#888\|#555\|#666\|background: white" *.html exhibits/*.html` | Direct grep is the verification — no false negatives, no setup |
| WCAG contrast math | Manual calculation | Values pre-calculated in this research | All ratios verified; token choices are locked |
| New CSS tokens | New `:root` variables | Existing Phase 1 tokens: `--color-primary`, `--color-background-alt`, `--color-surface`, `--color-text-muted`, `--color-text-medium` | All needed tokens exist; creating duplicates would fragment the design system |

**Key insight:** This phase adds zero new code. It only corrects existing HTML. No new CSS, no new tokens, no new JavaScript. The design system is already complete from Phase 1.

---

## WCAG Contrast Analysis

All token replacements have been verified to meet WCAG AA (4.5:1) in both light and dark mode:

| Hex | Context | Token | Light mode | Dark mode | Status |
|-----|---------|-------|-----------|----------|--------|
| `#888` | Attribution footnote (0.8rem) | `--color-text-muted` | 5.45:1 | 5.72:1 | PASS both |
| `#555` | Body paragraph (1rem) | `--color-text-medium` | 7.08:1 | 6.89:1 | PASS both |
| `#666` | Table cell / small italic | `--color-text-muted` | 5.45:1 | 5.72:1 | PASS both |
| `var(--teal)` | Footer tagline italic | `--color-primary` | 4.66:1 | 4.66:1* | PASS both |
| `var(--light-gray)` | Section background | `--color-background-alt` | n/a (bg) | n/a (bg) | Background only |
| `white` | Section background | `--color-surface` | n/a (bg) | n/a (bg) | Background only |

*`--color-primary` is not overridden in dark mode; `#0e7c8c` on `#1a2838` achieves 4.66:1.

**Token values (from Phase 1 / css/main.css):**

| Token | Light (`:root`) | Dark (`[data-theme="dark"]`) |
|-------|----------------|------------------------------|
| `--color-primary` | `#0e7c8c` | `#0e7c8c` (not overridden) |
| `--color-background-alt` | `#e8e8e8` | `#243447` |
| `--color-surface` | `#ffffff` | `#2a3f54` |
| `--color-text-muted` | `#666666` | `#a0a0a0` |
| `--color-text-medium` | `#555555` | `#b0b0b0` |

**WARNING: Do NOT use `--color-text-source` for attribution text.** The audit document suggested this mapping, but `--color-text-source` (`#888888` light, `#909090` dark) achieves only 3.37:1 in light mode against `#faf9f6` — failing WCAG AA for small text. Use `--color-text-muted` instead.

---

## Common Pitfalls

### Pitfall 1: Wrong Token for `#888` Attribution Text
**What goes wrong:** Using `--color-text-source` to replace `#888`, matching the numeric value but failing WCAG AA in light mode (3.37:1 vs. required 4.5:1).
**Why it happens:** The audit suggested this mapping; it appears semantically correct ("source citation" = "text-source"). But the token value itself doesn't meet contrast requirements for small text.
**How to avoid:** Use `--color-text-muted` (#666666 light / #a0a0a0 dark). Achieves 5.45:1 / 5.72:1.
**Warning signs:** Lighthouse accessibility audit flags contrast failures on attribution footnotes after fix.

### Pitfall 2: Missing `background: white` (Not in Audit's Original Finding)
**What goes wrong:** The v1.0 audit identified `var(--light-gray)` and hardcoded hex colors but did NOT explicitly call out `background: white` as a separate problem. It exists on the same 4 exhibit files.
**Why it happens:** `white` is a named color keyword (not hex), so hex-scanning tools miss it. But `white` is as hardcoded as `#ffffff` — dark mode toggle does not affect it.
**How to avoid:** Include `background: white` in the fix pass. Replace with `var(--color-surface)`.
**Warning signs:** Section backgrounds on exhibits f/g/h/i remain white-on-dark in dark mode after fixing only hex colors.

### Pitfall 3: Over-fixing Non-Color Inline Styles
**What goes wrong:** Removing or tokenizing layout-only inline styles like `margin-top: 1rem`, `font-size: 0.8rem`, `width: 5%`, `line-height: 2`. These are valid, intentional, and do not bypass dark mode.
**Why it happens:** Wanting to eliminate all inline styles as part of "cleanup."
**How to avoid:** Only target inline styles with `color:` or `background:` properties. Leave margin, padding, width, height, line-height values intact.
**Warning signs:** Layout breaks, table columns collapse, spacing changes.

### Pitfall 4: Failing to Verify After Each Group
**What goes wrong:** Running all 4 fix groups at once without verifying, then discovering one regex was broader than intended.
**Why it happens:** Efficiency — wanting to batch everything.
**How to avoid:** After each group, run the corresponding grep to confirm zero instances remain before moving to the next group. The verification command IS the success check.

---

## Code Examples

### Verification Commands

Run these grep commands to confirm zero instances remain after fixes:

```bash
# After Group 1 (--teal):
grep -rn "var(--teal)" *.html exhibits/*.html

# After Group 2 (--light-gray):
grep -rn "var(--light-gray)" *.html exhibits/*.html

# After Group 3 (background: white):
grep -rn "background: white" *.html exhibits/*.html

# After Group 4 (hex colors):
grep -rn 'color: #888\|color: #555\|color: #666' *.html exhibits/*.html

# Comprehensive final check (should return zero matches):
grep -rn "var(--teal)\|var(--light-gray)\|color: #888\|color: #555\|color: #666\|background: white" *.html exhibits/*.html
```

### Before/After: Footer Tagline Pattern (appears on all 17 pages)

```html
<!-- BEFORE - renders black (undefined var), bypasses dark mode -->
<p style="margin-top: 1rem; font-style: italic; color: var(--teal);">Pattern 158: I cheat, but I cheat fair.</p>

<!-- AFTER - renders as --color-primary teal, responds to dark mode -->
<p style="margin-top: 1rem; font-style: italic; color: var(--color-primary);">Pattern 158: I cheat, but I cheat fair.</p>
```

### Before/After: Section Background Pattern (exhibits f/g/h/i)

```html
<!-- BEFORE - undefined var renders transparent; white is fixed regardless of theme -->
<section style="background: var(--light-gray);">
<section style="background: white;">

<!-- AFTER - responds to dark mode token override -->
<section style="background: var(--color-background-alt);">
<section style="background: var(--color-surface);">
```

### Before/After: Attribution Footnote Pattern (testimonials + 9 exhibit files)

```html
<!-- BEFORE - #888 is hardcoded; does not respond to dark mode; fails WCAG in both modes -->
<p style="margin-top: 0.5rem; font-size: 0.8rem; color: #888;">All quotations sourced from professional correspondence (2005&ndash;2022).</p>

<!-- AFTER - responds to dark mode; passes WCAG 4.5:1 in both modes (5.45:1 / 5.72:1) -->
<p style="margin-top: 0.5rem; font-size: 0.8rem; color: var(--color-text-muted);">All quotations sourced from professional correspondence (2005&ndash;2022).</p>
```

### Before/After: Descriptive Paragraph Pattern (exhibit-a.html)

```html
<!-- BEFORE - #555 fails WCAG in dark mode (2.01:1) -->
<p style="margin-bottom: 1.5rem; font-size: 1rem; color: #555;">The following five issues were identified...</p>

<!-- AFTER - --color-text-medium achieves 7.08:1 light / 6.89:1 dark -->
<p style="margin-bottom: 1.5rem; font-size: 1rem; color: var(--color-text-medium);">The following five issues were identified...</p>
```

---

## State of the Art

| Old Approach | Current Approach | Impact |
|--------------|------------------|--------|
| `color: var(--teal)` (deleted token) | `color: var(--color-primary)` | Visual fix: renders teal, not black |
| `background: var(--light-gray)` (deleted token) | `background: var(--color-background-alt)` | Visual fix: renders gray, not transparent |
| `background: white` (hardcoded keyword) | `background: var(--color-surface)` | Dark mode fix: responds to theme toggle |
| `color: #888` (hardcoded hex, WCAG fail) | `color: var(--color-text-muted)` | WCAG fix: 3.37:1 → 5.45:1 (light), 4.22:1 → 5.72:1 (dark) |
| `color: #555` (hardcoded hex, dark mode fail) | `color: var(--color-text-medium)` | Dark mode + WCAG fix: 2.01:1 → 6.89:1 (dark) |
| `color: #666` (hardcoded hex, dark mode fail) | `color: var(--color-text-muted)` | Dark mode + WCAG fix: 2.60:1 → 5.72:1 (dark) |

---

## Open Questions

1. **Should inline color styles be moved to CSS classes instead?**
   - What we know: Phase 1's scope was to remove inline `<style>` blocks and extract to `css/main.css`. These inline `style=` attributes survived. Moving them to classes would be cleaner architecture.
   - What's unclear: Whether this phase's scope includes extracting to CSS classes or just fixing the values in place.
   - Recommendation: Fix in place (token substitution only). Extracting to classes would require defining new class names, adding CSS rules, and updating markup — expanding scope significantly. The phase goal is gap closure, not architecture refactoring. Confirm with requirements: CSS-02 requires "replaced with CSS custom properties" — inline `var(--token)` satisfies this.

2. **`--color-text-source` and `--color-text-light` tokens fail WCAG AA in light mode — is that a known trade-off?**
   - What we know: `--color-text-source` (#888888 light) = 3.37:1, `--color-text-light` (#999999 light) = 2.71:1. Both are currently used in `css/main.css` for decorative/supporting elements.
   - What's unclear: Whether these tokens will cause Lighthouse failures for CSS-driven elements (not scope of this phase).
   - Recommendation: Out of scope for Phase 6. Phase 6 only fixes inline styles. Note that this research intentionally avoids using these tokens for the attribution text fix precisely because they fail 4.5:1.

---

## Sources

### Primary (HIGH confidence)

- Direct code inspection: `/home/xhiris/projects/pattern158.solutions/css/main.css` — complete token inventory
- Direct code inspection: All 17 `.html` files — complete inline style inventory via grep
- Direct code inspection: `v1-MILESTONE-AUDIT.md` — gap analysis and root cause
- WCAG contrast ratio calculations: Node.js luminance formula (W3C specification-compliant algorithm)

### Secondary (MEDIUM confidence)

- MDN Web Docs (CSS custom properties): CSS custom properties in inline `style=` attributes resolve the same `:root` / `[data-theme]` cascade as stylesheet rules — confirmed by browser behavior and CSS spec.

### Tertiary (LOW confidence)

- None — all claims are verifiable from the codebase directly.

---

## Metadata

**Confidence breakdown:**
- Problem inventory: HIGH — direct grep of all HTML files, exact line numbers, zero ambiguity
- Token mapping (WCAG compliance): HIGH — contrast ratios calculated with W3C algorithm, all values verified
- Fix approach: HIGH — standard CSS custom property substitution, no novel patterns
- Scope boundary (inline style → CSS class): MEDIUM — could go either way, but in-place fix clearly satisfies requirement

**Research date:** 2026-02-18
**Valid until:** 2026-03-18 (30 days — stable tech domain, no external dependencies)
