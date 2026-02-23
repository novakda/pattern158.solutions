# Phase 21: Fork Curation & Visibility Strategy - Context

**Gathered:** 2026-02-23
**Status:** Ready for planning

<domain>
## Phase Boundary

Reduce profile noise by archiving eLearning forks (preserving them as read-only references) and ensuring all remaining public repos are presentation-ready. Phase 20 already privatized 24 hobby/personal forks — this phase polishes what remains visible.

Scope: 6 public forks (5 eLearning + get-shit-done), 2 public originals. No changes to private repos or originals.

</domain>

<decisions>
## Implementation Decisions

### Keep/Archive Criteria
- Keep list is exactly: SCOBot, lms-content-template-scorm2004e3, dewordify, wai-tutorials, aria-practices, get-shit-done
- No other forks need to be reconsidered — the 24 privatized in Phase 20 stay private
- 2 public originals (novakda, pattern158.solutions) are correct and need no changes
- Phase focus shifts from "archive ~25 repos" to "polish the 6 remaining public forks"

### Archive vs Private vs Delete
- 24 previously privatized forks stay private (not archived, not deleted)
- Update success criteria: change "archived" to "private" to match actual action taken
- 5 eLearning forks: archive them (public + read-only) — signals "evaluated and preserved" rather than "actively maintained"
- get-shit-done: stays active (not archived) — it's a dev tool in active use
- No repos to delete

### Fork Descriptions
- 5 eLearning fork descriptions from Phase 20 stay as-is (evaluator framing intact)
- get-shit-done keeps upstream description ("A light-weight and powerful meta-prompting...")
- No description updates needed — archiving reinforces the evaluator framing naturally

### Claude's Discretion
- Whether to add topics/tags to get-shit-done fork (add if it makes sense for discoverability, skip if not)
- Whether the "Archived" badge on eLearning forks looks appropriate in context (assess and flag if concerning)
- Verification flow structure (inline vs pause-for-review — decide based on what's most efficient)

</decisions>

<specifics>
## Specific Ideas

### Verification Requirements
- Automated check must verify all 4: public repo count (8 total), archive status (5 eLearning archived), description integrity, topic integrity
- User will also do visual profile review
- No formal rollback procedure needed — archiving is reversible via unarchive

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 21-fork-curation-visibility-strategy*
*Context gathered: 2026-02-23*
