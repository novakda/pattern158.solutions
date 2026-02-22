# Phase 13: Exhibit Content Optimization - Context

**Gathered:** 2026-02-21
**Status:** Ready for planning

<domain>
## Phase Boundary

Optimize all 14 exhibits for consistent NTSB investigation structure, impact-first presentation, quantifiable results, and visual consistency. Includes full inventory audit of all exhibits (including 3 new Phase 12 exhibits). Does NOT add new exhibits or new site capabilities.

</domain>

<decisions>
## Implementation Decisions

### Structure Enforcement
- **Gold standard:** GM Investigation exhibit — use as content/tone benchmark
- **Formatting benchmark:** Exhibit A — use as visual/layout benchmark
- Full exhibit inventory audit required, including new Phase 12 exhibits (SCORM Debugger, CSBB Dispatch, BP Learning Platform)
- Extra attention on the 3 new Phase 12 Rustici-targeted exhibits
- Source traceability: best effort — use EmailArchive where available, don't block on missing sources

### Claude's Discretion: Structure
- Section heading consistency (exact same vs flexible wording)
- Whether exhibits that don't fit 4-part structure can skip sections
- NTSB voice level (full investigation terminology vs light flavor)
- Content length per exhibit (standardize vs let content dictate)
- Standard opening pattern (hook/summary vs jump into structure)
- Metadata blocks (structured sidebar vs organic in narrative)
- Cross-references between related exhibits
- Rewrite scope per exhibit (full rewrite vs targeted fixes)
- Whether Field Reports index page needs optimization
- Skills/tech callout format (explicit callout vs woven into narrative)
- Closing section approach (philosophy tie-back vs results-only)

### Impact-First Headlines
- Headlines should be optimized for 30-second hiring manager scan

### Claude's Discretion: Headlines
- Headline angle per exhibit (business outcome, domain/role, or problem-first)
- Whether summary blocks are needed at top of each exhibit
- Card preview content on Field Reports listing page
- Soft impact framing for non-metric exhibits (scope/scale vs qualitative outcomes)
- Exhibit ID prominence (NTSB naming vs project name leading)
- Subtitle patterns under headlines
- Rustici signaling level on targeted exhibits
- SEO keyword consideration in headlines

### Metrics & Results Handling
- Claude may mine EmailArchive/Projects/ for specific metrics where exhibits feel thin

### Claude's Discretion: Metrics
- Visual treatment of metrics (callout boxes vs bold inline)
- Framing for exhibits without hard numbers (qualitative vs estimated ranges)
- Closing section naming (Results vs Outcome vs Impact based on content)

### Visual Consistency
- **User decision:** Restructure tables (Personnel Involved, etc.) away from table format — items currently blend together and are hard to read
- **User decision:** Similar sections use the same components, but exhibits can have unique elements where content warrants it (consistent within type)
- **User decision:** Dark mode must receive equal attention — verify every exhibit in both light and dark modes
- **User decision:** Mobile responsiveness checked in this phase, not deferred to Phase 15
- Claude should study Exhibit A to identify what makes it the best-formatted and replicate those patterns across all exhibits
- Full visual audit across all 14 exhibits to find inconsistencies

### Claude's Discretion: Visual
- Token compliance spot-checking during visual work
- Specific replacement format for tables (card-style blocks, definition lists, etc. — based on Exhibit A patterns)

</decisions>

<specifics>
## Specific Ideas

- GM Investigation exhibit is the content/tone gold standard — other exhibits should match its quality
- Exhibit A is the formatting/visual gold standard — other exhibits should match its layout patterns
- Personnel Involved sections and other table-based blocks are hard to read — items blend into each other. Restructure away from tables.
- Phase 12 exhibits (SCORM Debugger, CSBB Dispatch, BP Learning Platform) get extra attention since they're newest
- All visual changes must be verified in both light and dark modes
- Mobile responsiveness included in visual consistency checks

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 13-exhibit-content-optimization*
*Context gathered: 2026-02-21*
