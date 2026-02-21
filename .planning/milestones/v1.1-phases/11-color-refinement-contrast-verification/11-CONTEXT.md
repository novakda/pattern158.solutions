# Phase 11: Color Refinement & Contrast Verification - Context

**Gathered:** 2026-02-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Verify and refine the existing color token system for WCAG AA compliance in both light and dark modes. Ensure dark mode is brand-consistent (navy-based), links are visually distinct from body text, and color distribution follows the 60-30-10 principle. All 17 pages must pass contrast verification in both themes.

This phase audits and adjusts existing color values — it does not introduce new visual features or layout changes.

</domain>

<decisions>
## Implementation Decisions

### Contrast Remediation
- Claude's discretion on fix approach per case — minimal nudge for near-passes, bigger shifts for poor readability
- Open to replacing colors entirely if they don't work for contrast — brand consistency matters more than exact hex values
- Claude evaluates whether all text-level tokens (muted, light, medium, source, timeline) are used meaningfully and consolidates redundant ones
- Claude audits gold accent (#b8860b) actual usage and applies contrast requirements based on whether it appears as text/interactive or purely decorative

### Dark Mode Identity
- Claude evaluates whether current navy background (#1a2838) works for contrast and brand, adjusts if needed
- Claude determines appropriate surface/background elevation and layering
- Claude checks teal primary (#0e7c8c) contrast on dark backgrounds and shifts lighter if needed
- Claude evaluates inverse section handling in dark mode for cohesion

### Link Styling
- Claude picks link distinction approach based on WCAG best practices and the site's visual style
- Claude determines appropriate treatment for nav links vs body content links based on their different contexts
- Claude evaluates whether visited link states add value given this is a portfolio site (not heavy navigation)
- Claude tests teal link contrast on all background contexts and provides adaptive colors where needed

### Color Distribution (60-30-10)
- Claude evaluates whether current distribution feels right and flags pages that look off-balance
- Claude determines accent color hierarchy between teal and gold based on actual usage
- Claude assesses per-page whether current balance works for readability and brand feel — content-heavy pages may lean lighter
- Claude evaluates each mode independently for balance and brand consistency

### Claude's Discretion
- Contrast fix strategy (minimal vs. broader refinement) on a per-case basis
- Whether to consolidate text-level tokens or keep all existing variants
- Dark mode background tone, surface layering, and teal adjustment
- Inverse section behavior in dark mode
- Link underline/color approach and nav vs content differentiation
- Visited link state treatment
- Strictness of 60-30-10 enforcement and per-page balance
- Accent hierarchy between teal and gold
- Light mode vs dark mode ratio differences

</decisions>

<specifics>
## Specific Ideas

No specific requirements — open to standard approaches. User trusts Claude to make the right calls based on WCAG compliance, brand consistency, and professional polish. The guiding principle: brand consistency matters more than preserving exact current hex values.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 11-color-refinement-contrast-verification*
*Context gathered: 2026-02-20*
