# Phase 9: Layout & Spacing Consistency - Context

**Gathered:** 2026-02-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish consistent visual rhythm and spacing patterns across all 17 pages using design tokens. Migrate all remaining hardcoded spacing values to tokens. Verify layout at 320px, 768px, 1024px, and 1920px viewports. This phase does NOT touch typography (Phase 10), colors (Phase 11), or exhibit content structure (Phase 12).

</domain>

<decisions>
## Implementation Decisions

### Spacing scale & density
- Overall feel: balanced and professional — comfortable spacing but not excessive (think GitHub/Linear, not Apple marketing pages)
- Inner spacing (heading-to-content, list items, paragraphs) must be consistent across ALL page types — exhibit pages, landing pages, FAQ, etc. use the same rules
- Content should fill available width — minimize side margins, maximize content area
- Max content width capped at ~1200px on desktop to maintain readability
- Research task: investigate spacing reference sites for professional/consulting portfolio sites to inform specific token values

### Mobile vs desktop rhythm
- Mobile priority: balance breathing room and scroll depth — section breaks remain visible, but spacing reduces smartly to avoid excessive scrolling
- Mobile edge padding: scale down from desktop values rather than a separate mobile-specific token
- Card grids on mobile: single column stack (full width, vertical) at all mobile breakpoints
- No specific mobile spacing bugs reported — this is a consistency/polish pass

### Section structure patterns
- All structural decisions (page ordering, section padding, alternating backgrounds, CTA sizing) left to Claude's discretion
- Goal: consistent, balanced professional feel that fits each page's context
- Existing section separation patterns should be evaluated and made consistent, not necessarily changed

### Component alignment rules
- Navigation bar uses its own compact spacing system — treated as utility UI, not content
- All other component alignment decisions (card heights, text alignment, stats bars, button sizing, exhibit internal grids, grid gaps) left to Claude's discretion
- Goal: visual consistency across pages while respecting component context

### Claude's Discretion
- Section gap sizes (between hero, content, footer sections)
- Spacing token scale adjustments (whether current 10-step xs-5xl scale should be simplified)
- Mobile scaling approach (proportional vs floor-based)
- Breakpoint tiers for spacing (whether to add a tablet tier at ~1024px)
- Section padding rules (uniform vs hero-gets-more)
- Section separation approach (spacing-only vs alternating backgrounds)
- CTA block sizing consistency
- Card height strategy (equal-height rows vs content-sized)
- Text alignment within sections
- Stats bar sizing across pages
- Button/CTA sizing hierarchy
- Exhibit page internal alignment grid
- Grid gap sizing per component type
- Whether max-width varies for grid-heavy pages (e.g., portfolio wider than ~1200px)
- Footer spacing on mobile
- Whether exhibit pages need tighter mobile spacing for long-form content

</decisions>

<specifics>
## Specific Ideas

- User wants to see reference sites for spacing/density during research — researcher should find 2-3 professional consulting/portfolio sites with good spacing as benchmarks
- "Balanced & professional" — the GitHub/Linear density sweet spot, not Apple marketing spaciousness or dashboard compactness
- Navigation explicitly carved out as its own spacing system — don't force content spacing tokens onto nav

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 09-layout-spacing-consistency*
*Context gathered: 2026-02-20*
