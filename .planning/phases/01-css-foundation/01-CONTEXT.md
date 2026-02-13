# Phase 1: CSS Foundation - Context

**Gathered:** 2026-02-13
**Status:** Ready for planning

<domain>
## Phase Boundary

Extract all inline `<style>` blocks from 14 HTML pages into external stylesheet(s), establish a centralized design system using CSS custom properties, and ensure all pages render identically after extraction. This phase creates the CSS infrastructure that Phase 2 (dark mode) and Phase 3 (navigation) depend on.

</domain>

<decisions>
## Implementation Decisions

### Stylesheet architecture
- Claude's discretion on file organization (single file vs split by concern) — pick based on codebase complexity
- Stylesheets live in `/css/` folder at project root
- Claude's discretion on CSS reset/normalize — assess whether one helps or disrupts current rendering
- Claude's discretion on class naming convention — evaluate what's already in use and decide

### Design token scope
- Full design system tokenization: colors, typography, spacing scale, border radii, shadows — everything becomes CSS custom properties
- Semantic naming only (--color-primary, --color-background, --text-heading) — no raw value layer (no --navy-900)
- Audit actual HTML values against the established design spec (Bebas Neue, Inter, JetBrains Mono, #0a1628, #2dd4bf, #fdf6e3) before creating tokens
- Flag discrepancies between live site and design spec for user review before committing — do not auto-resolve

### Page-specific styling
- Claude's discretion on scoping strategy (body classes vs separate files) — decide based on how much page-specific CSS exists
- All 9 exhibit pages treated as a group with shared exhibit layout styles — not 9 separate page-specific stylesheets
- Claude's discretion on stylesheet path strategy (absolute vs relative) — decide based on deployment setup
- Claude's discretion on whether testimonials grid/card is a component or page-specific — decide based on pattern reuse

### Migration approach
- Exact extraction first: move inline styles to external files verbatim, then consolidate in a separate pass
- Screenshot comparison for visual verification — before/after diffs to catch subtle shifts
- Claude's discretion on batch size (all pages at once vs grouped batches) — decide based on CSS overlap
- No known problematic inline styles — extract everything uniformly

### Claude's Discretion
- File organization (single vs multiple stylesheets)
- CSS reset inclusion
- Class naming convention
- Page-specific scoping strategy
- Stylesheet path strategy (absolute vs relative for exhibits/)
- Testimonials card pattern classification
- Migration batch grouping

</decisions>

<specifics>
## Specific Ideas

- CSS files go in `/css/` directory
- Semantic token names only — this must support dark mode theming in Phase 2
- Exhibit pages share a common layout — treat as a group, not individually
- Extract first, consolidate second — safety over cleverness
- Screenshot diffs for verification — the success criterion requires "pages render identically"

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-css-foundation*
*Context gathered: 2026-02-13*
