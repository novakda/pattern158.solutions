# Phase 7: CSS Foundation & Token System Audit - Context

**Gathered:** 2026-02-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Audit and refactor the existing CSS stylesheet to use design tokens everywhere, extract shared components to a global section, eliminate all `!important` declarations, and introduce a font-size token scale (`--font-size-xs` through `--font-size-5xl`). This establishes the clean CSS architecture that all subsequent v1.1 phases (8-14) build on.

</domain>

<decisions>
## Implementation Decisions

### Token naming & scale
- Spacing token naming convention: Claude's discretion — pick whichever style (t-shirt sizes or numeric) fits the existing codebase best
- Color tokens: Semantic names only (--color-bg-primary, --color-text-body, --color-accent) — NOT raw palette names
- Font-size scale approach: Claude's discretion — audit current usage and decide whether to define only used sizes or a full predetermined scale
- All existing custom property names can be renamed freely for consistency — no preservation requirements

### Component extraction
- Shared vs page-scoped boundary: Claude's discretion — assess each component based on current usage and likelihood of spreading to more pages
- Page-scoped CSS organization: Claude's discretion — choose between per-page sections or grouped-by-type based on actual similarity after extraction
- Single file vs split: Claude's discretion — decide based on current file size and maintainability
- Minor visual refinement acceptable during extraction — consistent border-radius, aligned padding welcome. No major visual changes.

### Specificity strategy
- Specificity approach after !important removal: Claude's discretion — pick what fits the current structure and browser requirements
- Dark mode: Token swap for most cases + targeted selector overrides for edge cases that tokens can't handle
- Refactor aggressively when removing !important — restructure significant chunks of selectors if needed. This phase is the right time.
- Catch any inline style stragglers found during audit — convert them to token-based CSS too, completing what Phase 6 started

### Linting enforcement
- Stylelint severity for hardcoded values: Claude's discretion — errors if few violations remain, warnings if overwhelming initially
- Automation (pre-commit hook vs manual): Claude's discretion — based on project's current tooling and zero-build philosophy
- Rule scope: Token enforcement AND basic style rules (property ordering, no duplicate selectors, naming conventions)
- Dev dependency decision: Claude's discretion — pick what works best for the zero-build philosophy (committed package.json vs npx-only)

### Claude's Discretion
- Spacing token naming convention (t-shirt sizes vs numeric scale)
- Font-size scale: exact sizes used only vs full predetermined scale
- Component extraction threshold (2+ pages vs 3+ pages = global)
- Page-scoped section organization (per-page vs grouped-by-type)
- Single CSS file vs multi-file split
- Specificity approach (CSS layers vs flat specificity)
- Stylelint severity level (error vs warning)
- Stylelint automation (pre-commit hook vs manual command)
- Whether to add package.json as dev dependency vs npx-only

</decisions>

<specifics>
## Specific Ideas

- Color tokens must be semantic only — no raw palette names exposed. This keeps dark mode switching clean and the codebase readable.
- Aggressive refactoring is explicitly welcomed for !important removal — don't shy away from restructuring selectors.
- Inline styles found during audit should be converted, not ignored — the cleanup from Phase 6 should be completed.
- Stylelint should cover both token enforcement AND basic code style (property order, no duplicates, naming conventions).

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 07-css-foundation-token-system-audit*
*Context gathered: 2026-02-20*
