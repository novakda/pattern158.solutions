# Phase 22: Strategic Pinning & Final Integration - Context

**Gathered:** 2026-02-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Curate the GitHub profile homepage (github.com/novakda) by pinning 3-6 repositories in strategic order, verifying bidirectional cross-links between website and GitHub, and wrapping up the v1.3 milestone. The profile README, repo metadata, and fork curation are already complete from Phases 19-21.

</domain>

<decisions>
## Implementation Decisions

### Pin selection & order
- pattern158.solutions pinned in position 1 (flagship portfolio — required by PIN-02)
- novakda (profile README) pinned in position 2
- 4-5 total pins (balanced approach)
- Accessibility-focused repos prioritized over SCORM repos for positions 3+
- Archived eLearning forks are acceptable as pins (descriptions explain evaluation context)

### Pin composition (Claude's discretion for positions 3-5)
- Claude selects the best 2-3 repos from: get-shit-done, SCOBot, aria-practices, dewordify, lms-content-template-scorm2004e3, wai-tutorials
- get-shit-done has some concern: it's a fork the user hasn't heavily customized yet — Claude should evaluate whether it adds or detracts from the professional impression
- Accessibility repos (aria-practices, wai-tutorials) should be considered before SCORM repos for ordering

### Narrative coherence
- Pinned repos should convey both domain depth AND builder mentality in equal measure
- General alignment with website themes (not 1:1 mapping to specific exhibits)
- Profile README does not reference pinned repos explicitly — they stand alone as proof
- Claude determines whether pins reinforce or complement the README narrative

### Cross-linking verification
- Claude checks current website-to-GitHub linking and determines what exists vs. what's needed
- Claude evaluates whether additional links in repo READMEs are needed beyond bio + repo homepage URL
- Automated API-based verification only (no manual visual review step)

### Milestone wrap-up
- Phase 22 includes v1.3 milestone closure as a final step
- Mark v1.3 complete and update state after pinning and verification are done

### Claude's Discretion
- Exact repos for positions 3-5 (accessibility-first ordering, get-shit-done inclusion decision)
- Whether pattern158.solutions repo README needs polish before pinning
- Narrative relationship between README and pins (reinforce vs. complement)
- Website cross-link placement (check what exists, add if missing)
- Whether pinned repo READMEs need back-links to website

</decisions>

<specifics>
## Specific Ideas

- User forked get-shit-done primarily to experiment with custom prompts but hasn't done much yet — factor this into pinning decision
- Archived fork descriptions already frame them as "evaluated as part of..." research, which provides professional context for the archive badge
- The profile should work for a hiring manager at Rustici landing on the GitHub page — both domain expertise and active building should be evident

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 22-strategic-pinning-final-integration*
*Context gathered: 2026-02-22*
