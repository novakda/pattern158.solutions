# Phase 24: Featured Section & Cross-Platform Linking - Context

**Gathered:** 2026-02-23
**Status:** Ready for planning

<domain>
## Phase Boundary

Create LinkedIn Featured section with 4-6 pattern158.solutions exhibit links, write custom click-optimized titles/descriptions for each, verify OG thumbnail rendering, and establish a verified bidirectional cross-platform link loop (LinkedIn → pattern158.solutions → GitHub → LinkedIn). All Featured links route through pattern158.solutions as the hub.

</domain>

<decisions>
## Implementation Decisions

### Exhibit Selection
- Claude has full discretion on which 4-6 items to feature (exhibits, homepage, philosophy)
- Selection should balance brand recognition, story impact, and skill diversity
- All Featured links go to pattern158.solutions — no direct GitHub links in Featured
- Quality over quantity: 4-5 strong items preferred over filling all 6 slots
- Success criteria mentions GM Investigation, SCORM Debugger, homepage, philosophy — Claude interprets whether these are hard requirements or examples
- Audience targeting (hiring managers vs clients) at Claude's discretion

### Featured Copy
- Write LinkedIn-specific copy, different from the site's OG meta tags
- Provide 2-3 copy variants per Featured item so user can choose
- Tone, title length, framing (outcome vs role), CTA style, branding references, and coherence with About section — all at Claude's discretion
- Copy should be optimized for the LinkedIn Featured context specifically

### OG Image Strategy
- Update OG image dimensions to 1200x627 (LinkedIn recommended) — currently 1024x559
- All pages currently use the same OG image (pattern158_logo_3pipes_detailed.png) — whether to create unique per-exhibit images is at Claude's discretion
- If unique images are created, style (text-on-brand vs visual/screenshot) at Claude's discretion
- Verification method (LinkedIn Post Inspector, manual test, etc.) at Claude's discretion

### Cross-Platform Link Loop
- GitHub profile (github.com/novakda) needs LinkedIn link added — currently missing
- Whether GitHub also links to pattern158.solutions directly — Claude's discretion
- Create a cross-platform link map document that maps every link in the loop with verification status
- Note: site currently links to two GitHub accounts — github.com/xhiris (footers) and github.com/novakda (contact page). Primary account is novakda.

### Claude's Discretion
- Exhibit selection criteria weighting and final picks
- Featured copy tone, length, framing, CTA style
- Whether to create unique OG images per exhibit or keep consistent branding
- OG image style if unique images are created
- OG verification method
- Featured item ordering on LinkedIn profile
- Whether GitHub profile links to site in addition to LinkedIn

</decisions>

<specifics>
## Specific Ideas

- User wants 2-3 copy variants per Featured item to choose from (not a single final version)
- All Featured links must route through pattern158.solutions as the hub — no direct GitHub links
- Quality over quantity for Featured count (4-5 strong items > 6 filler items)
- OG images must be updated to 1200x627 dimensions regardless of other OG decisions
- Cross-platform link map document required for verification
- Primary GitHub account is github.com/novakda (not xhiris despite footer usage)

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 24-featured-section-cross-platform-linking*
*Context gathered: 2026-02-23*
