# Phase 8: Content Quality & Information Architecture - Context

**Gathered:** 2026-02-20
**Status:** Ready for planning

<domain>
## Phase Boundary

Finalize content structure and eliminate redundancy across all 16 public pages (review.html is a dev tool, excluded) before layout polish. Ensures content-driven rework doesn't cascade into later phases. This phase covers content inventory, ROT audit, typo/grammar cleanup, information architecture optimization, and exhibit structure verification.

</domain>

<decisions>
## Implementation Decisions

### Content Audit Approach
- Moderate trim — remove clear redundancy and outdated content, preserve explanatory depth where it helps understanding
- Tone shift toward more authoritative voice — "senior consultant who's done this 100 times," not conversational
- Known weak spots: FAQ feels thin, Index (homepage) is too long
- Homepage job: hook and route — quick credibility hit then funnel visitors to deeper pages, minimal scrolling
- Homepage message: blend diagnostician/investigator angle (the hook) with breadth of experience (the proof)
- Testimonials sourced from email archives without explicit permission — flag for later, keep as-is for now
- Site content is comprehensive from email archive extraction — no known missing content
- review.html is a dev/preview tool, NOT a public page — exclude from content audit (16 public pages, not 17)

### Redundancy Handling
- Claude's discretion on whether to consolidate to one canonical spot or allow brief echoes per page, decided case by case based on page context

### Disclosure & Proprietary Content
- No NDA signed, but exercise caution with former employer (GP) and client proprietary information
- Flag anything that might reveal proprietary details during audit for user decision per case

### User Journey Design
- Three audiences with equal priority: hiring managers (30s scan), engineering peers (3-4min review), potential clients (full review)
- Targeted sites for different roles — deferred idea for future
- Engineering peers care about: technical depth woven into problem-solving narratives — show the thinking AND the tech chops together
- Client conversion: artisan positioning, not commodity — honest about capabilities and limits, proof through detailed work, methodology as evidence of quality thinking
- Principles are prime movers, not a sales pitch — they're a filter for the right fit
- Contact page should reference "not a good fit" criteria and types of engagements open to; anti-pattern: no direct employment at billable-hours-first consultancies
- Explicit methodology section describing forensic/diagnostic approach — placement (philosophy page vs own page) at Claude's discretion
- Site model: hub with a suggested path — self-contained pages with subtle guidance for first-time visitors

### Exhibit Structure
- NTSB investigation report as the structural model — exhibits are "full investigation reports," portfolio is the "probable cause summary"
- Challenge → Approach → Solution → Results is close but not exact for all exhibits — some are discovery-heavy, long-running, or lack clean results
- Claude decides per exhibit whether to use standard structure or a variant that better serves the story (e.g., investigation-inspired: Situation → Investigation → Analysis → Findings → Impact)
- Results evidence: use whatever exists — adoption, qualitative quotes, before/after — and be honest when hard metrics aren't available
- Technologies: both woven into narrative AND a summary list for quick scanning
- Length varies by project — stronger stories get more space, no fixed target
- Claude decides depth per exhibit based on how interesting the investigation story is
- "Lessons learned" section only where meaningful — skip when it would feel forced
- Simple diagrams where they help clarify the story (not deferred, included in this phase)
- Exhibit naming: "Exhibit A: The Accessibility Practice" — letter designation plus descriptive subtitle
- Accessibility practice exhibit: show full arc — had no training → built technical methodology → became organizational standard (both practice-building AND technical)
- Cross-references between exhibits: Claude decides where they add value vs clutter
- Exhibit consolidation: audit should assess whether any of the 10 could be stronger combined
- Exhibit ordering on portfolio page: audit should recommend based on assessed strength

### Page Roles & Information Architecture
- Audit should assess whether each page justifies its existence
- Philosophy page is a core page, central to site identity
- Technologies page role: audit should determine its purpose (skills inventory vs breadth showcase vs something else)
- Navigation flow: Claude determines optimal flow based on content audit and audience needs
- Audit should identify any content that would serve better on a different page
- Navigation hierarchy: Claude recommends nav structure based on page roles identified in audit
- URL structure can change freely — no external links depend on current paths

### Claude's Discretion
- Redundancy handling approach per page (canonical vs brief echoes)
- FAQ fate: strengthen in place, merge into other pages, or retire — based on audit findings
- 30-second scan content for hiring managers
- CTAs per page (subtle nudges vs navigation-only)
- Methodology section placement (philosophy page vs dedicated page)
- Technologies page curation approach (forward-looking vs comprehensive)
- Portfolio-to-exhibit relationship model
- Navigation structure and suggested visitor path
- Cross-references between exhibits
- Exhibit ordering and potential consolidation

</decisions>

<specifics>
## Specific Ideas

- Brand identity anchored in pattern recognition and forensic methodology — "pattern158" references the Myst fireplace puzzle; "If you're gonna cheat, cheat fair" from the Three Stooges
- NTSB accident investigation reports as the structural model for exhibits — the user's dream job would be NTSB investigator; this methodology gives structure to show detective work that comes naturally
- Diagnostician positioning: "I find what's wrong and fix it" — natural at seeing miswiring/misconfigurations immediately, then working methodically to prove it
- Artisan, not commodity — quality of work over making a buck; honest about capabilities and limits; the opposite of a used car salesman
- Accessibility practice as a signature story: assigned to sign off on accessibility audits with no training → built enterprise methodology from scratch → became division standard
- Portfolio page = NTSB "probable cause summaries" (high-level), Exhibits = full investigation reports (detailed)

</specifics>

<deferred>
## Deferred Ideas

- Targeted sites for different roles/audiences — future consideration
- Testimonial permissions — reaching out to quoted individuals for consent is a separate task outside this phase
- Visual enhancements beyond simple clarifying diagrams — future phase

</deferred>

---

*Phase: 08-content-quality-information-architecture*
*Context gathered: 2026-02-20*
