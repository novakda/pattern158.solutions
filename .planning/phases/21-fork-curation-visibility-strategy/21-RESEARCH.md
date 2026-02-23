# Phase 21: Fork Curation & Visibility Strategy - Research

**Researched:** 2026-02-22
**Domain:** GitHub repository archiving and fork curation
**Confidence:** HIGH

## Summary

Phase 21 focuses on archiving 5 eLearning forks to reduce profile noise while preserving them as visible read-only references. Phase 20 already privatized 24 hobby/personal forks (omnivore, tuskydesign, logseq, agnai, character-tools, CAI-Tools, SillyTavern, RisuAI, turbo-vue-storybook, spa_react_javascript_hello-world, silverbullet-manager-space-template, git-sticker, typescript-EssT-2428199, my-box, hydrus, tzk, nvs, booru-browser-vue, Spoon-Knife, tiny-1, hydrus.js, tabbles-testPlugin-ApiV4, danbooru, JSON-js). This phase shifts from "archive ~25 repos" to "polish the 6 remaining public forks" by archiving the 5 eLearning forks and keeping get-shit-done active.

The GitHub archive feature makes repositories read-only and displays an "Archived" badge, signaling "evaluated and preserved" rather than "actively maintained" — reinforcing the evaluator/researcher framing established in Phase 20. Archiving is fully reversible via the same API endpoint.

**Primary recommendation:** Use GitHub CLI's `gh repo archive` command for the 5 eLearning forks (SCOBot, lms-content-template-scorm2004e3, dewordify, wai-tutorials, aria-practices). Archive operations are immediate and reversible. Verify with `gh repo list` filtering on `isArchived` field.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Keep/Archive Criteria:**
- Keep list is exactly: SCOBot, lms-content-template-scorm2004e3, dewordify, wai-tutorials, aria-practices, get-shit-done
- No other forks need to be reconsidered — the 24 privatized in Phase 20 stay private
- 2 public originals (novakda, pattern158.solutions) are correct and need no changes
- Phase focus shifts from "archive ~25 repos" to "polish the 6 remaining public forks"

**Archive vs Private vs Delete:**
- 24 previously privatized forks stay private (not archived, not deleted)
- Update success criteria: change "archived" to "private" to match actual action taken
- 5 eLearning forks: archive them (public + read-only) — signals "evaluated and preserved" rather than "actively maintained"
- get-shit-done: stays active (not archived) — it's a dev tool in active use
- No repos to delete

**Fork Descriptions:**
- 5 eLearning fork descriptions from Phase 20 stay as-is (evaluator framing intact)
- get-shit-done keeps upstream description ("A light-weight and powerful meta-prompting...")
- No description updates needed — archiving reinforces the evaluator framing naturally

### Claude's Discretion

- Whether to add topics/tags to get-shit-done fork (add if it makes sense for discoverability, skip if not)
- Whether the "Archived" badge on eLearning forks looks appropriate in context (assess and flag if concerning)
- Verification flow structure (inline vs pause-for-review — decide based on what's most efficient)

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope

</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| FORK-01 | Hobby/personal forks archived (~25 repos) | Phase 20 already privatized 24 hobby forks; this phase archives 5 eLearning forks for read-only preservation. Success criteria should be updated to reflect actual state: "24 hobby/personal forks are private" + "5 eLearning forks are archived" |
| FORK-02 | eLearning-relevant forks kept visible (SCOBot, lms-content-template, dewordify, wai-tutorials, aria-practices) | All 5 eLearning forks will remain public after archiving (archived repos are still visible, just read-only). get-shit-done stays active/unarchived. |

</phase_requirements>

## Standard Stack

### Core

| Library/Tool | Version | Purpose | Why Standard |
|--------------|---------|---------|--------------|
| GitHub CLI (`gh`) | 2.x+ | Repository archiving operations | Official GitHub CLI tool for all repo operations including archive/unarchive |
| GitHub REST API | v3 | Direct API archiving via PATCH endpoint | Alternative to CLI for programmatic control; used via `gh api` wrapper |
| `jq` | 1.6+ | JSON filtering for verification | Standard tool for parsing `gh repo list` JSON output |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| `gh api` | (via gh CLI) | REST API endpoint access | For PATCH operations if `gh repo archive` unavailable in older CLI versions |

**Installation:**
```bash
# GitHub CLI already installed and authenticated (verified in Phase 19-20)
gh --version

# jq likely already available
jq --version
```

## Architecture Patterns

### Recommended Archive Flow

```
1. Capture before-state (already exists from Phase 20 as after-state.json)
2. Archive 5 eLearning forks sequentially
3. Verify archive status
4. Capture after-state (JSON snapshot)
5. Visual profile review (user confirmation)
```

### Pattern 1: Archive Repository via CLI

**What:** Use GitHub CLI to archive a repository (makes it read-only)

**When to use:** For all 5 eLearning forks requiring archive status

**Example:**
```bash
# Source: GitHub CLI documentation
# Archive a fork (makes it public + read-only)
gh repo archive novakda/SCOBot --confirm

# Verify archive status
gh repo view novakda/SCOBot --json isArchived,isFork,isPrivate
```

**Output:**
```json
{
  "isArchived": true,
  "isFork": true,
  "isPrivate": false
}
```

### Pattern 2: Archive Repository via REST API

**What:** Use PATCH endpoint to set `archived: true` field

**When to use:** If `gh repo archive` command is unavailable or for programmatic control

**Example:**
```bash
# Source: GitHub REST API documentation
# Archive via API
gh api /repos/novakda/SCOBot -X PATCH -f archived=true

# Unarchive via API (reversible)
gh api /repos/novakda/SCOBot -X PATCH -f archived=false
```

### Pattern 3: Bulk Verification

**What:** Verify all forks have correct archive status

**When to use:** After archiving operations complete

**Example:**
```bash
# Source: GitHub CLI JSON output + jq filtering
# Get all public repos with fork and archive status
gh repo list novakda --limit 50 --json name,isFork,isPrivate,isArchived | \
  jq '[.[] | select(.isPrivate == false)] | map({name, isFork, isArchived})'
```

**Expected output:**
```json
[
  {"name": "aria-practices", "isFork": true, "isArchived": true},
  {"name": "dewordify", "isFork": true, "isArchived": true},
  {"name": "get-shit-done", "isFork": true, "isArchived": false},
  {"name": "lms-content-template-scorm2004e3", "isFork": true, "isArchived": true},
  {"name": "novakda", "isFork": false, "isArchived": false},
  {"name": "pattern158.solutions", "isFork": false, "isArchived": false},
  {"name": "SCOBot", "isFork": true, "isArchived": true},
  {"name": "wai-tutorials", "isFork": true, "isArchived": true}
]
```

### Anti-Patterns to Avoid

- **Archiving get-shit-done:** This is an active development tool; archiving would prevent updates
- **Deleting instead of archiving:** Archiving is reversible; deletion is permanent
- **Archiving before capturing state:** Always snapshot before-state for audit trail
- **Assuming archive = private:** Archived repos are still public and visible, just read-only

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Repository archiving | Custom API wrapper or manual web UI clicking | `gh repo archive` CLI command | GitHub CLI handles authentication, rate limiting, error handling |
| Archive status verification | Manual GitHub web UI checks | `gh repo list --json isArchived` + jq filtering | Programmatic verification provides audit trail |
| Rollback mechanism | Custom undo logic | `gh api /repos/{owner}/{repo} -X PATCH -f archived=false` | Archive/unarchive uses same endpoint with boolean toggle |

**Key insight:** GitHub CLI and REST API provide complete archive lifecycle management. No custom tooling needed.

## Common Pitfalls

### Pitfall 1: Confusing Archive with Private

**What goes wrong:** Assuming archived repos are hidden from profile view

**Why it happens:** Archive terminology suggests "put away" or "hidden," but GitHub archiving only makes repos read-only while keeping them public and visible

**How to avoid:** Understand archive semantics:
- **Archived + Public:** Visible on profile, searchable, read-only (this phase's goal)
- **Private (not archived):** Hidden from public, still editable (Phase 20's approach for hobby forks)
- **Archived + Private:** Hidden AND read-only (not used in this project)

**Warning signs:** Success criteria stating "hobby forks archived (~25 repos)" when Phase 20 actually privatized them

### Pitfall 2: Archive Without Confirmation Flag

**What goes wrong:** `gh repo archive` command prompts for confirmation, blocking automation

**Why it happens:** GitHub CLI defaults to safe mode requiring manual confirmation

**How to avoid:** Always use `--confirm` or `-y` flag:
```bash
gh repo archive novakda/SCOBot --confirm
```

**Warning signs:** Script hangs waiting for user input

### Pitfall 3: Not Verifying Archive Badge Appearance

**What goes wrong:** Archived badge may look unprofessional or conflict with brand aesthetic

**Why it happens:** GitHub automatically adds visual "Archived" badge to repo — may not align with NTSB investigation aesthetic

**How to avoid:**
1. Archive one repo first
2. Check profile appearance at github.com/novakda
3. Verify badge doesn't undermine professional positioning
4. If acceptable, proceed with remaining archives
5. Flag to user if concerning

**Warning signs:** User constraints explicitly give Claude discretion to "assess and flag if concerning"

### Pitfall 4: Incomplete Verification Scope

**What goes wrong:** Only verifying archive status without confirming descriptions/topics intact

**Why it happens:** Archive operation might unexpectedly reset metadata (unlikely but possible)

**How to avoid:** Comprehensive verification checks all 4 dimensions:
1. Public repo count (8 total)
2. Archive status (5 eLearning forks archived, get-shit-done NOT archived)
3. Description integrity (evaluator framing preserved)
4. Topic integrity (domain topics preserved)

**Warning signs:** User explicitly specified "automated check must verify all 4" in CONTEXT.md

## Code Examples

Verified patterns from official sources:

### Archive a Repository

```bash
# Source: GitHub CLI manual (https://cli.github.com/manual/gh_repo_archive)
# Archive with confirmation flag (non-interactive)
gh repo archive novakda/SCOBot --confirm

# Alternative: API approach
echo '{"archived": true}' | gh api /repos/novakda/SCOBot -X PATCH --input -
```

### Verify Archive Status

```bash
# Source: GitHub CLI JSON output format
# Single repo check
gh repo view novakda/SCOBot --json isArchived --jq '.isArchived'
# Output: true

# Bulk check for all public repos
gh repo list novakda --limit 50 --json name,isArchived,isFork,isPrivate | \
  jq '[.[] | select(.isPrivate == false and .isFork == true)] | map({name, isArchived})'
```

### Unarchive (Rollback)

```bash
# Source: GitHub REST API docs (PATCH /repos/{owner}/{repo})
# Unarchive is fully reversible
gh api /repos/novakda/SCOBot -X PATCH -f archived=false

# Verify unarchived
gh repo view novakda/SCOBot --json isArchived
# Output: {"isArchived": false}
```

### Full Verification Suite

```bash
# Source: Composite pattern from Phase 20 verification approach
# Check 1: Public repo count (should be 8)
gh repo list novakda --limit 50 --json name,isPrivate | \
  jq '[.[] | select(.isPrivate == false)] | length'

# Check 2: Archive status (5 archived, 1 unarchived fork)
gh repo list novakda --limit 50 --json name,isFork,isArchived,isPrivate | \
  jq '[.[] | select(.isPrivate == false and .isFork == true)] |
      map({name, archived: .isArchived}) | sort_by(.name)'

# Check 3: Description integrity
for repo in aria-practices wai-tutorials dewordify lms-content-template-scorm2004e3 SCOBot; do
  echo "=== $repo ==="
  gh repo view novakda/$repo --json description --jq '.description'
done

# Check 4: Topic integrity
for repo in aria-practices wai-tutorials dewordify lms-content-template-scorm2004e3 SCOBot; do
  echo "=== $repo ==="
  gh api /repos/novakda/$repo/topics -H "Accept: application/vnd.github.mercy-preview+json" | \
    jq -r '.names | join(", ")'
done
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual web UI archive clicks | `gh repo archive` CLI command | GitHub CLI 2.0+ (2021) | Automation-friendly, scriptable, audit trail |
| Custom API wrappers for archiving | Native `gh api` with PATCH endpoint | Always available | Simpler, official support, no custom code |
| Archive = hidden assumption | Archive = read-only but visible | N/A (always true) | Clarifies semantic difference from private repos |

**Deprecated/outdated:**
- None identified — GitHub archive feature is stable and unchanged in recent years

## Current State Analysis

### Before Phase 21

From Phase 20 after-state.json:

**Public repos (8 total):**
- 2 originals: novakda, pattern158.solutions
- 6 forks: aria-practices, dewordify, get-shit-done, lms-content-template-scorm2004e3, SCOBot, wai-tutorials
- All 6 forks: `isArchived: false`

**Private repos (30+ total):**
- Includes 24 formerly-public hobby forks (omnivore, tuskydesign, logseq, agnai, etc.)
- These were privatized in Phase 20-01, NOT archived

### After Phase 21 (Target State)

**Public repos (8 total, unchanged count):**
- 2 originals: novakda, pattern158.solutions (unchanged)
- 6 forks:
  - 5 eLearning archived: aria-practices, dewordify, lms-content-template-scorm2004e3, SCOBot, wai-tutorials (`isArchived: true`)
  - 1 dev tool active: get-shit-done (`isArchived: false`)

**Private repos (30+ total, unchanged count):**
- 24 hobby forks remain private (not archived)

### Topics on get-shit-done

Phase 20-02 already added topics to get-shit-done:
- Topics: automation, claude, meta-prompting, workflow (4 topics)
- User constraints state: "Whether to add topics/tags to get-shit-done fork (add if it makes sense for discoverability, skip if not)"
- **Decision:** Topics already added in Phase 20-02 — no action needed

## Open Questions

1. **Visual "Archived" Badge Appearance**
   - What we know: GitHub displays an "Archived" badge on archived repos
   - What's unclear: Whether badge conflicts with NTSB professional aesthetic or reinforces evaluator positioning
   - Recommendation: Archive one fork first, check github.com/novakda appearance, flag to user if concerning (per Claude's discretion)

2. **Success Criteria Wording Update**
   - What we know: FORK-01 states "hobby/personal forks archived (~25 repos)" but Phase 20 privatized them instead
   - What's unclear: Whether to update REQUIREMENTS.md or just document discrepancy in verification
   - Recommendation: Note in verification that FORK-01 is satisfied via privatization (Phase 20) + archival (Phase 21), totaling desired cleanup outcome

## Verification Protocol

Per user constraints, automated check must verify all 4 dimensions:

### 1. Public Repo Count Verification
```bash
# Must return exactly 8 repos
gh repo list novakda --limit 50 --json name,isPrivate | \
  jq '[.[] | select(.isPrivate == false)] | length'
```
**Expected:** `8`

### 2. Archive Status Verification
```bash
# Must show 5 archived eLearning forks, 1 unarchived dev tool fork
gh repo list novakda --limit 50 --json name,isFork,isArchived,isPrivate | \
  jq '[.[] | select(.isPrivate == false and .isFork == true)] |
      map({name, archived: .isArchived}) | sort_by(.name)'
```
**Expected:**
```json
[
  {"name": "aria-practices", "archived": true},
  {"name": "dewordify", "archived": true},
  {"name": "get-shit-done", "archived": false},
  {"name": "lms-content-template-scorm2004e3", "archived": true},
  {"name": "SCOBot", "archived": true},
  {"name": "wai-tutorials", "archived": true}
]
```

### 3. Description Integrity Verification
```bash
# All 5 eLearning forks must retain evaluator framing
for repo in aria-practices wai-tutorials dewordify lms-content-template-scorm2004e3 SCOBot; do
  gh repo view novakda/$repo --json description --jq '.description' | grep -q "Fork of.*Evaluated"
  echo "$repo: $?"  # Should output 0 (success)
done
```

### 4. Topic Integrity Verification
```bash
# All 5 eLearning forks must retain domain topics
gh api /repos/novakda/aria-practices/topics -H "Accept: application/vnd.github.mercy-preview+json" | \
  jq '.names | length'  # Should be 4 topics

gh api /repos/novakda/SCOBot/topics -H "Accept: application/vnd.github.mercy-preview+json" | \
  jq '.names | length'  # Should be 5 topics
```

## Sources

### Primary (HIGH confidence)

- **GitHub CLI Manual**: https://cli.github.com/manual/gh_repo_archive — Archive command syntax and flags
- **GitHub REST API**: https://docs.github.com/en/rest/repos/repos — PATCH endpoint for archived field
- **GitHub Archive Documentation**: https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories — Semantics of archiving (read-only, visibility, reversibility)
- **Phase 20 after-state.json**: Verified current state of all 8 public repos (none currently archived)

### Secondary (MEDIUM confidence)

- None required — all findings verified with official GitHub documentation

### Tertiary (LOW confidence)

- None

## Metadata

**Confidence breakdown:**
- Archive operations: HIGH — Official GitHub CLI and REST API documentation verified
- Verification approach: HIGH — Patterns from Phase 20 verified and working
- Visual appearance: LOW — GitHub docs don't specify badge appearance; requires empirical testing

**Research date:** 2026-02-22
**Valid until:** 90 days (GitHub archive feature is stable, unlikely to change)

---

**RESEARCH COMPLETE**

Phase 21 is straightforward: archive 5 eLearning forks using `gh repo archive` CLI command, verify archive status and metadata integrity, capture after-state. The operation is immediate, reversible, and reinforces the evaluator/researcher positioning established in Phase 20. No custom tooling or complex workflows needed — GitHub CLI handles everything.
