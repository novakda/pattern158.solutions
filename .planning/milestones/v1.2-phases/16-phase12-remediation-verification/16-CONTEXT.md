# Phase 16: Phase 12 Remediation & Verification - Context

**Gathered:** 2026-02-21
**Status:** Ready for planning

<domain>
## Phase Boundary

Close audit gaps from Phase 12's quick execution. Add missing exhibit cards (E, M, N) to testimonials.html, create retroactive verification for Phase 12, clean up debug/audit scripts and temp files, and verify E2E flow from Homepage through Field Reports to all 14 exhibits.

</domain>

<decisions>
## Implementation Decisions

### Exhibit card integration
- Use an improved card design — better visual hierarchy, cleaner/simpler than current cards
- Retrofit ALL exhibit cards on testimonials.html to the improved design (not just E, M, N)
- Cards must work well in both light and dark mode
- If verification finds existing Phase 12 content doesn't meet quality bar, bring it up to standard

### Cleanup approach
- Archive debug/audit scripts to `.archive/` folder (not deleted)
- `.archive/` folder committed to repo (tracked in git)
- Clean up `.bak` files (e.g., `css/main.css.bak`) — archive them
- General root cleanup scope beyond just scripts — Claude identifies additional candidates

### Verification standard
- E2E flow verification: Homepage → Field Reports → all 14 exhibits — full QA pass (links work + content present + styling correct + accessibility checks)
- Verify both light and dark mode for all 14 exhibits
- VERIFICATION.md includes a full matrix: all 14 exhibits × QA dimensions (links, content, styling, accessibility, dark mode) with pass/fail per cell
- Bring all Phase 12 content up to the same quality standard as newer phases

### Claude's Discretion
- Card placement on testimonials page (alphabetical, grouped, or based on page structure)
- Card content depth (self-contained summary vs teaser — balance based on content)
- Metadata shown on cards (dates, categories — review existing and make sensible choices)
- Interactive elements (hover effects based on site patterns)
- Card responsive layout (follow existing site patterns)
- Exhibit priority/prominence (determine based on content)
- Card text tone (match existing exhibit card tone)
- Page section structure (separate section vs integrated — based on current layout)
- Lighthouse temp directories handling
- .gitignore updates for tool artifacts (test-results/, playwright-report/, etc.)
- Phase 15 screenshot files disposition
- Archive folder organization (flat vs by-phase — based on file count)
- Verification depth for retroactive Phase 12 check (match existing verification patterns)
- WCAG level for accessibility checks (based on Phase 15 precedent)
- REQUIREMENTS.md updates (handle based on existing project patterns)
- Fix-vs-document discovered issues (fix quick wins, document larger issues)

</decisions>

<specifics>
## Specific Ideas

- Card design should have "better visual hierarchy" and be "cleaner/simpler" — not cluttered
- Consistency matters: all exhibit cards should look the same, not just new ones
- Verification matrix format explicitly requested — exhibit-by-exhibit with pass/fail per QA dimension
- Dark mode is a hard requirement for both cards and E2E verification

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 16-phase12-remediation-verification*
*Context gathered: 2026-02-21*
