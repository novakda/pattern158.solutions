# Phase 14: Navigation & Footer Consistency - Context

**Gathered:** 2026-02-21
**Status:** Ready for planning

<domain>
## Phase Boundary

Achieve 100% navigation and footer consistency across all 22 pages with zero broken links. This phase makes the existing navigation identical everywhere, optimizes the footer, and audits all links. No new pages or capabilities are added.

</domain>

<decisions>
## Implementation Decisions

### Nav menu structure
- Review and optimize the current nav order/grouping rather than just replicating as-is
- Define a canonical navigation by auditing all pages and deriving the best structure
- How the 3 new exhibit pages integrate (dropdown vs flat) is at Claude's discretion based on current site patterns

### Footer content & trust
- Social links: LinkedIn + GitHub (these two specifically)
- Contact info placement, trust elements (years, certs, project count), and whether to include a mini site map are at Claude's discretion based on existing site content and professional context

### Active state indicators
- Visual treatment for active nav items, parent highlighting for subpages, hover differentiation, and mobile active states are all at Claude's discretion — should fit the existing design language

### Link audit scope
- Audit both internal links (between 22 pages) AND external links (LinkedIn, GitHub, etc.)
- Audit anchor links (#section-name) — verify they point to existing sections
- Fix broken links when there's an obvious correct target; flag ambiguous cases in a report for manual review
- Whether to produce a full link status report is at Claude's discretion

### Claude's Discretion
- Exhibit integration approach (dropdown vs flat nav)
- Mobile nav adaptation (mirror desktop vs optimized)
- Golden reference page selection for canonical nav
- Contact info prominence and format in footer
- Trust element selection and display
- Footer layout (mini site map vs minimal)
- Active state visual treatment (underline, color, bold)
- Parent nav highlighting for subpages
- Hover vs active state differentiation
- Mobile active state indicators
- Link audit report format

</decisions>

<specifics>
## Specific Ideas

No specific requirements — open to standard approaches. User wants the nav reviewed and optimized (not just blindly replicated), thorough link coverage including external and anchors, and LinkedIn + GitHub as the definitive social links.

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 14-navigation-footer-consistency*
*Context gathered: 2026-02-21*
