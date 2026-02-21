# Phase 10: Typography & Hierarchy - Context

**Gathered:** 2026-02-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish clear, consistent typography hierarchy across all 17 pages using font-size tokens from Phase 7. Covers heading size differentiation, semantic heading correctness, responsive scaling for mobile viewports (320px-768px), and line-height/letter-spacing consistency. Does not add new content or change layout structure.

</domain>

<decisions>
## Implementation Decisions

### Overall Typographic Feel
- Consulting-firm style: clean, readable, information-forward
- Type serves the content, not the other way around
- No specific typography references provided — optimize for professional readability

### Heading Size Scale
- Claude's discretion on dramatic vs refined stepping — optimize for clear hierarchy with a consulting-firm tone
- Claude's discretion on 5xl usage — audit current usage and standardize (hero-only vs interior pages) based on what makes sense
- Claude's discretion on uniform vs page-type variant scales — determine where consistency matters vs where variation helps
- Claude's discretion on body text base size (1rem vs 1.125rem) — evaluate based on content density and reading experience
- Claude's discretion on strictness of heading consistency across similar contexts — audit and make judgment calls
- Claude's discretion on whether all 10 font-size token steps are needed — evaluate if all are used meaningfully

### Responsive Scaling
- Claude's discretion on fluid (clamp) vs stepped (breakpoints) approach — pick what fits the existing CSS architecture
- Claude's discretion on mobile heading minimums — determine based on readability and hierarchy clarity
- Claude's discretion on body text mobile scaling — evaluate content density needs
- Claude's discretion on token-level vs component-level responsive definitions — fit the existing CSS pattern

### Line-height & Spacing
- Claude's discretion on heading line-height — evaluate based on how headings actually wrap in current content
- Claude's discretion on body text line-height — optimize for readability based on content length and type
- Claude's discretion on letter-spacing — apply only where it meaningfully improves the result
- Claude's discretion on heading-to-content spacing — balance grouping clarity with visual breathing room

### Visual Weight Beyond Size
- Claude's discretion on font-weight variation per heading level — determine whether it improves or clutters the hierarchy
- Claude's discretion on color tinting for heading hierarchy — evaluate whether it helps or overcomplicates
- Claude's discretion on heading decoration standardization — audit current decorations and standardize where it makes sense
- Claude's discretion on small-text treatment (labels, captions, metadata) — evaluate which contexts benefit from distinct treatment (uppercase, lighter color, etc.)

### Claude's Discretion
All typography decisions are delegated to Claude's judgment with the following constraints:
- Must result in consulting-firm aesthetic (clean, readable, professional)
- Must satisfy all 5 success criteria from the roadmap
- Must use font-size tokens exclusively (no hardcoded values)
- Must ensure semantic heading correctness (no skipped levels)
- Must scale appropriately for 320px-768px mobile viewports

</decisions>

<specifics>
## Specific Ideas

No specific requirements — open to standard approaches. User's key direction: "consulting firm" feel (clean and readable, type serves the content, information-forward).

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 10-typography-hierarchy*
*Context gathered: 2026-02-20*
