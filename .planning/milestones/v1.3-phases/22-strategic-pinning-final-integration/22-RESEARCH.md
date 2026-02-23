# Phase 22: Strategic Pinning & Final Integration - Research

**Researched:** 2026-02-22
**Domain:** GitHub profile optimization, repository curation, cross-platform linking
**Confidence:** HIGH

## Summary

Phase 22 focuses on GitHub profile homepage optimization through strategic repository pinning, bidirectional cross-linking verification, and v1.3 milestone closure. This is a manual web UI operation (no CLI/API support for pinning) combined with automated verification of existing cross-links.

The research reveals that repository pinning is entirely a frontend operation with no programmatic interface—pins must be set manually via github.com/username settings. However, the current state is optimal: existing website-to-GitHub links are already in place (contact.html, footer, profile README), and the profile narrative is complete from Phase 19.

**Primary recommendation:** Manual pin selection via web UI following accessibility-first ordering, automated verification of existing cross-links (no additional links needed), and milestone state update as the final integration step.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Pin selection & order:**
- pattern158.solutions pinned in position 1 (flagship portfolio — required by PIN-02)
- novakda (profile README) pinned in position 2
- 4-5 total pins (balanced approach)
- Accessibility-focused repos prioritized over SCORM repos for positions 3+
- Archived eLearning forks are acceptable as pins (descriptions explain evaluation context)

**Narrative coherence:**
- Pinned repos should convey both domain depth AND builder mentality in equal measure
- General alignment with website themes (not 1:1 mapping to specific exhibits)
- Profile README does not reference pinned repos explicitly — they stand alone as proof
- Claude determines whether pins reinforce or complement the README narrative

**Cross-linking verification:**
- Claude checks current website-to-GitHub linking and determines what exists vs. what's needed
- Claude evaluates whether additional links in repo READMEs are needed beyond bio + repo homepage URL
- Automated API-based verification only (no manual visual review step)

**Milestone wrap-up:**
- Phase 22 includes v1.3 milestone closure as a final step
- Mark v1.3 complete and update state after pinning and verification are done

### Claude's Discretion

- Exact repos for positions 3-5 (accessibility-first ordering, get-shit-done inclusion decision)
- Whether pattern158.solutions repo README needs polish before pinning
- Narrative relationship between README and pins (reinforce vs. complement)
- Website cross-link placement (check what exists, add if missing)
- Whether pinned repo READMEs need back-links to website

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope

</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| PIN-01 | 3-6 repos pinned in strategic order (flagship first, then technical depth) | Manual web UI pinning workflow documented; candidate repository analysis complete; strategic ordering criteria researched |
| PIN-02 | pattern158.solutions pinned in position 1 as flagship repo | Flagship positioning rationale documented; current repo state verified as pin-ready |

</phase_requirements>

## Standard Stack

### Core Tools

| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| GitHub Web UI | N/A | Repository pinning | Only interface for pinning—no CLI/API/GraphQL support exists |
| GitHub CLI (`gh`) | 2.x | Cross-link verification | Official CLI for repository metadata inspection |
| GitHub REST API | v3 | Automated verification | Programmatic access to repo metadata and profile data |

### Supporting Tools

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| GitHub GraphQL API | v4 | Query pinned repos | Verify pinning state after manual changes |
| `jq` | 1.x | JSON parsing | Process API responses for verification |

**Installation:**
All tools already available in environment. No additional installation required.

## Architecture Patterns

### Pattern 1: Manual Pinning with Automated Verification

**What:** Separate manual UI operations (pinning) from automated verification (cross-links, metadata)

**When to use:** When GitHub API doesn't support programmatic access to certain features

**Workflow:**
```bash
# Step 1: Manual web UI operation (HUMAN REQUIRED)
# Navigate to: https://github.com/novakda
# Click "Customize your pins" button
# Drag repositories into desired order (max 6)
# Save changes

# Step 2: Automated verification
gh api graphql -f query='
{
  user(login: "novakda") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
        }
      }
    }
  }
}'

# Step 3: Cross-link verification
gh api /repos/{owner}/{repo} --jq '{homepage: .homepage, description: .description}'
```

### Pattern 2: Repository Quality Assessment for Pinning

**What:** Evaluate repos against pinning criteria (completeness, professional polish, narrative fit)

**Criteria:**
1. **Description quality:** Clear, professional one-liner (already complete from Phase 20)
2. **Homepage URL:** Set for flagship repos (pattern158.solutions ✓, others N/A)
3. **Topics/tags:** Domain-specific keywords present (complete from Phase 20)
4. **README quality:** Informative content (varies by repo)
5. **Archive status:** Acceptable if description frames context (eLearning forks ✓)
6. **Narrative alignment:** Supports profile story without redundancy

**Current state analysis:**

| Repository | Description | Topics | README | Archive | Pin Quality |
|------------|-------------|--------|--------|---------|-------------|
| pattern158.solutions | ✓ Professional | ✓ 4 topics | Basic (2-line) | No | **HIGH** - Flagship |
| novakda | ✓ Professional | None (intentional) | N/A (is README) | No | **HIGH** - Profile |
| get-shit-done | ✓ Professional | ✓ 4 topics | Upstream (not customized) | No | **MEDIUM** - Active fork, minimal customization |
| aria-practices | ✓ Evaluator framing | ✓ 4 topics | Upstream | Yes (archived) | **HIGH** - W3C reference, accessibility signal |
| wai-tutorials | ✓ Evaluator framing | ✓ 4 topics | Upstream | Yes (archived) | **HIGH** - W3C reference, accessibility signal |
| SCOBot | ✓ Evaluator framing | ✓ 5 topics | Upstream | Yes (archived) | **MEDIUM-HIGH** - SCORM depth signal |
| dewordify | ✓ Evaluator framing | ✓ 4 topics | Upstream | Yes (archived) | **MEDIUM** - Niche authoring tool |
| lms-content-template-scorm2004e3 | ✓ Evaluator framing | ✓ 4 topics | Upstream | Yes (archived) | **MEDIUM** - Standards research signal |

**Narrative analysis:**

Profile README emphasizes:
- eLearning systems architecture (SCORM/xAPI/LMS)
- Legacy system rescue
- WCAG accessibility
- NTSB forensic methodology
- Builder mentality (custom tools, middleware)

**Pinning strategy options:**

**Option A: Accessibility-First (5 pins)**
1. pattern158.solutions (flagship)
2. novakda (profile README)
3. aria-practices (W3C ARIA reference)
4. wai-tutorials (W3C accessibility patterns)
5. SCOBot (SCORM depth)

**Narrative:** Leads with accessibility expertise, demonstrates W3C standards fluency, backs with SCORM domain depth. Strong for accessibility-forward hiring managers.

**Option B: Domain-Balanced (5 pins)**
1. pattern158.solutions (flagship)
2. novakda (profile README)
3. SCOBot (SCORM API library)
4. aria-practices (accessibility)
5. wai-tutorials (accessibility)

**Narrative:** SCORM domain signal before accessibility references, demonstrates both technical areas equally. Balanced for eLearning generalists.

**Option C: Active-Builder (4 pins)**
1. pattern158.solutions (flagship)
2. novakda (profile README)
3. get-shit-done (active dev tool)
4. aria-practices (W3C reference)

**Narrative:** Minimal pins, emphasizes currently-in-use tools, reduces archive badge visibility. Strong for "active GitHub user" signal.

**Recommendation:** Option A (Accessibility-First) aligns with user's stated priority "Accessibility-focused repos prioritized over SCORM repos for positions 3+" and matches profile bio's WCAG emphasis.

### Pattern 3: Cross-Link Verification Matrix

**What:** Systematically verify bidirectional linking between website and GitHub

**Links to verify:**

| Direction | Location | Target | Current State | Action |
|-----------|----------|--------|---------------|--------|
| Website → GitHub | contact.html line 139 | github.com/novakda | ✓ EXISTS | Verify only |
| Website → GitHub | contact.html footer line 213 (implied via LinkedIn) | N/A | ✓ IMPLIED | No action |
| GitHub → Website | Profile bio | pattern158.solutions | ✓ EXISTS | Verify only |
| GitHub → Website | Profile website field | pattern158.solutions | ✓ EXISTS | Verify only |
| GitHub → Website | pattern158.solutions homepage URL | pattern158.solutions | ✓ EXISTS | Verify only |
| GitHub → Website | Profile README line ~45 | pattern158.solutions | ✓ EXISTS | Verify only |

**Verification script:**
```bash
# Website → GitHub link verification
grep -n "github.com/novakda" contact.html

# GitHub → Website verification
gh api /users/novakda --jq '{bio, blog}'
gh api /repos/novakda/pattern158.solutions --jq '.homepage'
gh api /repos/novakda/novakda/readme --jq '.content' | base64 -d | grep -i "pattern158.solutions"
```

**Finding:** All bidirectional links already exist. No additional linking needed.

### Anti-Patterns to Avoid

- **Over-pinning:** Don't pin 6 repos just to fill slots—4-5 high-quality pins is stronger than 6 diluted pins
- **Archive shame:** Don't hide archived forks—the descriptions frame them professionally as "evaluated as part of research"
- **Redundant linking:** Don't add website URLs to every repo README—flagship repo homepage URL is sufficient
- **Narrative disconnect:** Don't pin repos that contradict the profile story (e.g., hobby projects)
- **README theater:** Don't delay pinning to write elaborate READMEs for forks—upstream READMEs + professional descriptions are sufficient

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Repository pinning | Custom pinning UI, browser automation | Manual web UI operation | No API exists; automation would be fragile |
| Cross-link discovery | Manual page inspection | `grep`, `gh api` with JSON queries | Automated verification is faster and repeatable |
| Pin order optimization | Complex scoring algorithms | User-defined priority + narrative coherence | Human judgment of "professional impression" can't be algorithmed |
| Milestone state management | Custom project tracking | `.planning/STATE.md` + git commits | Existing GSD workflow tracks state reliably |

**Key insight:** Pinning is a curation task requiring human aesthetic judgment—the value is in *which* repos to pin and *why*, not in automating the mechanics.

## Common Pitfalls

### Pitfall 1: Assuming Pinning API Exists

**What goes wrong:** Attempting to use `gh` CLI or REST API to set pinned repositories fails—no such endpoint exists

**Why it happens:** Most GitHub profile features have API support, but pinning is frontend-only

**How to avoid:** Document manual web UI workflow with clear human handoff steps

**Warning signs:** Research that proposes "automated pinning workflow" without web UI step

### Pitfall 2: Pinning Before Metadata Polish

**What goes wrong:** Pinned repos lack descriptions, topics, or homepage URLs—looks incomplete

**Why it happens:** Pinning feels like the final step, but it exposes repos that weren't ready for spotlight

**How to avoid:** Phase 20 (metadata) → Phase 21 (fork curation) → Phase 22 (pinning) ensures quality first

**Warning signs:** Pinned repos with empty descriptions or missing topics

**Current state:** ✓ AVOIDED - All metadata complete from Phase 20, all forks curated from Phase 21

### Pitfall 3: Over-Linking Creates Noise

**What goes wrong:** Adding website URLs to every repo README, footer, and description creates repetitive noise

**Why it happens:** "Bidirectional linking" interpreted as "link from every possible location"

**How to avoid:** Strategic placement—profile bio, profile website field, flagship repo homepage, contact page. That's sufficient.

**Warning signs:** Plans that propose "add pattern158.solutions to all 8 repo READMEs"

### Pitfall 4: Pin Order Doesn't Tell a Story

**What goes wrong:** Random pin order (alphabetical, most recent) fails to guide viewer through intended narrative

**Why it happens:** Treating pins as "featured repos" instead of "professional introduction sequence"

**How to avoid:** Flagship first (portfolio), profile second (bio), then domain depth in strategic order

**Warning signs:** Plans that sort pins by stars, activity, or alphabetical order

### Pitfall 5: README Polish Paralysis

**What goes wrong:** Delaying Phase 22 to write custom READMEs for all pinned forks

**Why it happens:** Perfectionism—"I can't pin this until the README is impressive"

**How to avoid:** Recognize that fork READMEs serve different purpose—the *description* frames your relationship to the fork, the upstream README documents the tool

**Warning signs:** Plans that include "write custom README for aria-practices fork"

**Current state:** ✓ AVOIDED - Fork descriptions already provide professional framing; upstream READMEs are appropriate

### Pitfall 6: Forgetting Milestone Closure

**What goes wrong:** Completing pinning and verification but forgetting to mark v1.3 milestone complete in STATE.md

**Why it happens:** Focus on tactical execution, lose sight of milestone tracking

**How to avoid:** Include milestone state update as explicit final task in plan

**Warning signs:** Plan ends with "verify pins" instead of "update milestone status"

## Code Examples

### Example 1: Verify Current Pinned Repositories

```bash
# Source: GitHub GraphQL API v4 documentation
gh api graphql -f query='
{
  user(login: "novakda") {
    pinnedItems(first: 6, types: REPOSITORY) {
      nodes {
        ... on Repository {
          name
          description
          url
          isFork
          isArchived
          homepageUrl
        }
      }
    }
  }
}' --jq '.data.user.pinnedItems.nodes'
```

**Current output:** `[]` (no pins set yet)

**Expected after pinning (Option A):**
```json
[
  {"name": "pattern158.solutions", "description": "Pattern 158 Solutions — eLearning systems architecture and accessibility portfolio", "url": "https://github.com/novakda/pattern158.solutions", "isFork": false, "isArchived": false, "homepageUrl": "https://pattern158.solutions"},
  {"name": "novakda", "description": "GitHub profile README — Dan Novak, eLearning systems architect", "url": "https://github.com/novakda/novakda", "isFork": false, "isArchived": false, "homepageUrl": null},
  {"name": "aria-practices", "description": "Fork of w3c/aria-practices — Evaluated as reference for implementing WCAG-compliant interactive components in eLearning platforms", "url": "https://github.com/novakda/aria-practices", "isFork": true, "isArchived": true, "homepageUrl": "https://www.w3.org/wai/aria/apg/"},
  {"name": "wai-tutorials", "description": "Fork of w3c/wai-tutorials — Evaluated as reference for implementing WCAG-compliant content patterns in eLearning platforms", "url": "https://github.com/novakda/wai-tutorials", "isFork": true, "isArchived": true, "homepageUrl": "https://www.w3.org/WAI/tutorials/"},
  {"name": "SCOBot", "description": "Fork of cybercussion/SCOBot — Evaluated as part of SCORM API standards research for JavaScript runtime communication libraries", "url": "https://github.com/novakda/SCOBot", "isFork": true, "isArchived": true, "homepageUrl": "https://cybercussion.com"}
]
```

### Example 2: Verify Bidirectional Cross-Links (Website → GitHub)

```bash
# Source: Standard grep + gh CLI
# Verify website links to GitHub
grep -c "github.com/novakda" /home/xhiris/projects/pattern158.solutions/contact.html

# Expected: 1 (link exists in Connect section)
```

**Current state:** ✓ Link exists at line 139 of contact.html

### Example 3: Verify Bidirectional Cross-Links (GitHub → Website)

```bash
# Source: GitHub REST API v3
# Verify GitHub profile links to website
gh api /users/novakda --jq '{bio, blog}'

# Expected output:
# {
#   "bio": "28 years building eLearning systems (SCORM/xAPI) and accessible platforms. Open to opportunities. If you want to cheat, cheat fair.",
#   "blog": "https://pattern158.solutions"
# }

# Verify flagship repo homepage URL
gh api /repos/novakda/pattern158.solutions --jq '.homepage'

# Expected: "https://pattern158.solutions"

# Verify profile README links to website
gh api /repos/novakda/novakda/readme --jq '.content' | base64 -d | grep -c "pattern158.solutions"

# Expected: 2+ (multiple references in README)
```

**Current state:** ✓ All links verified present

### Example 4: Repository Metadata Verification

```bash
# Source: GitHub REST API v3
# Verify all public repo metadata completeness
gh api /users/novakda/repos --paginate --jq '.[] | select(.private == false) | {name, description, homepage, topics, archived}'
```

**Current state:** All 8 public repos have complete metadata (descriptions, topics, appropriate homepage URLs)

### Example 5: Manual Pinning Workflow (Human Task)

```markdown
# Source: GitHub Web UI documentation
**Task:** Pin repositories in strategic order

**Prerequisites:**
- All repo metadata complete (✓ Phase 20)
- Forks curated and archived appropriately (✓ Phase 21)
- Pinning strategy decided (✓ Research)

**Steps:**
1. Navigate to: https://github.com/novakda
2. Click "Customize your pins" button (visible to profile owner only)
3. Select repositories to pin (up to 6):
   - ✓ pattern158.solutions
   - ✓ novakda
   - ✓ aria-practices
   - ✓ wai-tutorials
   - ✓ SCOBot
4. Drag repositories into order (top = position 1)
5. Click "Save pins" button
6. Verify public profile shows pins in correct order
7. Run automated verification (Example 1) to confirm
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Random/alphabetical pin order | Strategic narrative-driven ordering | Ongoing best practice | Profile tells coherent story instead of random showcase |
| Pin all active repos | Pin 3-6 strategically chosen repos | Ongoing best practice | Quality over quantity—empty slots acceptable |
| Hide archived repos | Pin archived repos with contextual descriptions | ~2020+ | Archive badge = "evaluated" not "abandoned" when framed properly |
| One-way linking (GitHub → Website) | Bidirectional cross-linking | Ongoing best practice | Reinforces brand consistency across platforms |
| Default repo descriptions | Professional one-liners with domain keywords | Ongoing best practice | Better discoverability + professional polish |

**Deprecated/outdated:**
- **GitHub Pages pinning requirement:** No longer needed—direct links to external portfolio sites (pattern158.solutions) are standard
- **"Green squares" obsession:** Contribution graphs less important than repo quality and professional descriptions
- **Private repos for incomplete work:** Preference has shifted to archiving forks + descriptive framing over hiding

## Open Questions

### Question 1: Include get-shit-done in pins?

**What we know:**
- It's an active fork (not archived)
- Minimal customization so far (user forked to experiment with prompts)
- Description is professional: "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES."
- Topics are relevant: automation, claude, meta-prompting, workflow
- It's the tool actively being used to build the portfolio

**What's unclear:**
- Does pinning a lightly-customized fork add or detract from professional impression?
- Does it strengthen "builder mentality" narrative or dilute domain expertise signal?

**Recommendation:**
**EXCLUDE from pins.** Rationale:
1. User noted "hasn't done much yet" - low customization
2. 5-pin Option A (Accessibility-First) tells stronger domain story
3. Active usage doesn't require public pinning
4. Can always pin later after meaningful customization
5. Fewer pins with stronger narrative > more pins with weaker coherence

### Question 2: Does pattern158.solutions repo README need polish before pinning?

**What we know:**
- Current README is minimal: "# pattern158.solutions\nPattern 158 - Personal portfolio site"
- Homepage URL (https://pattern158.solutions) is set
- Description is professional
- Topics are appropriate

**What's unclear:**
- Does minimal README undermine flagship positioning?
- Should README link to key exhibits, explain tech stack, etc.?

**Recommendation:**
**No polish needed.** Rationale:
1. Homepage URL is the primary call-to-action—clicking pin navigates to live site
2. "Portfolio site" repos commonly have minimal READMEs (the site IS the documentation)
3. Adding README content would duplicate website content
4. Professional description + homepage URL are sufficient
5. Delaying pinning for README polish = unnecessary perfection paralysis

Mark as LOW priority future enhancement, not blocker.

### Question 3: Should archived forks have website back-links in README?

**What we know:**
- Archived repos are read-only (can't edit without unarchiving)
- Descriptions already provide professional framing
- Upstream READMEs document the tools
- Homepage URLs point to upstream projects (W3C, original authors)

**What's unclear:**
- Would adding pattern158.solutions to fork READMEs strengthen brand?
- Is it worth unarchiving → edit → re-archive workflow?

**Recommendation:**
**No back-links needed.** Rationale:
1. Archive = intentionally frozen state, "evaluated as-is"
2. Description provides sufficient context ("Evaluated as reference for...")
3. Unarchiving to add self-promotional links contradicts "reference preservation" framing
4. Profile bio + flagship repo homepage provide sufficient brand linking
5. Forks serve as domain expertise signals, not brand marketing

## Sources

### Primary (HIGH confidence)
- GitHub REST API v3 - `/users/{username}`, `/repos/{owner}/{repo}` endpoints verified
- GitHub GraphQL API v4 - `pinnedItems` query verified
- GitHub Web UI - Manual inspection of profile settings, pinning interface
- Project repository state - All 8 public repos queried via `gh api`
- Website source code - `contact.html`, footer cross-links verified

### Secondary (MEDIUM confidence)
- GitHub profile optimization best practices - Training data current as of January 2025
- Professional GitHub curation patterns - Observed from hiring manager perspective patterns

### Tertiary (LOW confidence)
- None - All findings verified from primary sources or project state

## Metadata

**Confidence breakdown:**
- Standard stack: **HIGH** - Manual web UI requirement verified, no API alternative exists
- Architecture: **HIGH** - All patterns verified against current project state and GitHub API capabilities
- Pinning strategy: **HIGH** - Based on user constraints, profile narrative analysis, and repo quality assessment
- Cross-linking: **HIGH** - All links verified present via grep and API queries
- Common pitfalls: **MEDIUM-HIGH** - Based on project history (avoided pitfalls 2, 5) and training data

**Research date:** 2026-02-22
**Valid until:** ~60 days (GitHub pinning UI stable, profile optimization practices slow-changing)

**Key findings:**
1. No CLI/API for pinning—manual web UI required
2. All cross-links already exist—no additional linking needed
3. All repo metadata complete—pins are ready
4. Option A (Accessibility-First, 5 pins) recommended for narrative coherence
5. pattern158.solutions README minimal but sufficient—no polish needed
6. get-shit-done should be excluded due to low customization
7. v1.3 milestone closure is final integration step
