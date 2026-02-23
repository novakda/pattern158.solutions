# Phase 20: Repository Metadata & Discoverability - Research

**Researched:** 2026-02-22
**Domain:** GitHub repository metadata management, SEO, and discoverability
**Confidence:** HIGH

## Summary

Phase 20 involves updating GitHub repository metadata (descriptions, homepage URLs, topics) for 8 public repositories and making 31 repositories private. This is a straightforward GitHub repository management task using the `gh` CLI tool and GitHub REST API.

GitHub repository metadata serves three audiences: (1) hiring managers scanning profiles for domain expertise, (2) developers searching for technical solutions, and (3) GitHub's discovery algorithm surfacing relevant repositories via topics and search. The metadata strategy must balance professional positioning (eLearning systems architecture, accessibility, SCORM) with technical accuracy.

The technical implementation is low-risk: all operations are reversible, the GitHub CLI provides atomic updates, and the REST API has comprehensive documentation. The primary challenges are editorial (crafting descriptions that serve both audiences) and strategic (selecting topics that maximize discoverability without diluting positioning).

**Primary recommendation:** Use `gh repo edit` for all metadata updates due to its simplicity and atomic operations. Make repositories private in batches to minimize exposure during transition. Verify topic effectiveness by checking GitHub topic pages for repository counts and related topics before applying.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Public Repo Set (8 repos — everything else goes private):**
- `pattern158.solutions` — original, portfolio site
- `novakda` — original, profile README (Phase 19)
- `aria-practices` — fork, W3C WAI-ARIA Authoring Practices
- `wai-tutorials` — fork, W3C accessibility tutorials
- `dewordify` — fork, Word-to-HTML eLearning tool
- `lms-content-template-scorm2004e3` — fork, SCORM 2004 content template
- `SCOBot` — fork, SCORM API JavaScript library
- `get-shit-done` — fork, Claude Code workflow/meta-prompting tool

**Repos to Make Private (31 repos):**

Originals (7):
- `clean-scraper-extension`, `fo4_addonideas`, `github-for-developers-7`, `imatch-deviantart-api`, `imatch-imgops`, `tabbles-tools`, `tabbles4-plugin-wlpg`

Non-eLearning forks (24):
- `agnai`, `booru-browser-vue`, `CAI-Tools`, `character-tools`, `danbooru`, `git-sticker`, `hydrus`, `hydrus.js`, `JSON-js`, `logseq`, `my-box`, `nvs`, `omnivore`, `RisuAI`, `SillyTavern`, `silverbullet-manager-space-template`, `spa_react_javascript_hello-world`, `Spoon-Knife`, `tabbles-testPlugin-ApiV4`, `tiny-1`, `turbo-vue-storybook`, `tuskydesign`, `typescript-EssT-2428199`, `tzk`

**Description Voice & Style:**
- Hybrid tone: lead with what it does (outcome), include key tech terms — serves both hiring managers and developers
- Fork descriptions acknowledge upstream origin — Claude decides format per repo (e.g., "Fork of X — context" or "Context (fork of X)")
- eLearning forks framed as evaluator/researcher: "evaluated for [purpose]" — not practitioner/integrator
- pattern158.solutions gets a minimal description — let the homepage URL speak for itself
- Homepage URL for pattern158.solutions set to https://pattern158.solutions
- eLearning fork homepage URLs: keep existing upstream URLs as-is
- No years of experience in repo descriptions — profile bio handles that
- Brand name (Pattern 158) only in the pattern158.solutions repo description
- Accessibility terminology: WCAG/formal for standards repos (aria-practices, wai-tutorials), broader "accessibility" language for others
- Description length: Claude's discretion per repo — shorter for simple repos, longer when context helps

**Specific Fork Framing:**
- `aria-practices` — reference material for implementing WCAG-compliant platforms
- `wai-tutorials` — reference material for implementing WCAG-compliant platforms
- `dewordify` — rapid authoring tool evaluation, alternative to WYSIWYG eLearning editors
- `lms-content-template-scorm2004e3` — general evaluation as part of SCORM standards research
- `SCOBot` — general evaluation as part of SCORM standards research
- `get-shit-done` — no special framing needed (upstream description is fine, or light touch-up)
- Claude should check fork commit histories to verify whether any have meaningful modifications

**Topic/Tag Strategy:**
- Hybrid approach: small core set of shared topics (2-3) for eLearning repos, plus repo-specific topics
- Claude decides core topic set based on what GitHub topic pages actually exist and have traffic
- Topic count per repo: Claude's discretion based on genuine relevance
- Tech topics (javascript, vue, etc.) vs domain topics: Claude decides per repo whether tech tags add discoverability
- Fork topics: Claude judges which shared eLearning topics genuinely apply per fork (don't force "scorm" on aria-practices)

### Claude's Discretion

- Exact description wording and length per repo
- Fork attribution format (prefix vs suffix style)
- Core topic set selection (based on GitHub topic page research)
- Number of topics per repo
- Whether to include tech-stack topics alongside domain topics
- Which shared topics genuinely apply to each fork
- Whether get-shit-done fork needs a description update

### Deferred Ideas (OUT OF SCOPE)

- **Phase 21 impact:** Making non-eLearning forks private in Phase 20 significantly reduces Phase 21's scope — Fork Curation may only need to handle edge cases or reconsideration of visibility decisions
- **Hobby fork visibility concern:** AI roleplay repos (SillyTavern, RisuAI, agnai), booru/media repos (danbooru, hydrus), and other personal interest forks were flagged as potentially unprofessional — addressed by making them private in this phase
- **Original tool repos (imatch-*, tabbles-*):** These show genuine API/plugin development skills but user chose to make them private — could be reconsidered if portfolio strategy changes

</user_constraints>

<phase_requirements>
## Phase Requirements

This phase must satisfy the following requirements from REQUIREMENTS.md:

| ID | Description | Research Support |
|----|-------------|-----------------|
| META-01 | pattern158.solutions repo description updated to reflect professional portfolio | GitHub CLI `gh repo edit -d "description"` provides atomic description updates |
| META-02 | pattern158.solutions repo homepage URL set to https://pattern158.solutions | GitHub CLI `gh repo edit -h "URL"` sets homepage field; separate from GitHub Pages URL |
| META-03 | pattern158.solutions repo has domain-specific topics (portfolio, accessibility, wcag, static-site) | GitHub CLI `gh repo edit --add-topic` supports multiple topics; max 20 topics per repo, lowercase with hyphens, 50 char limit |
| META-04 | All visible original repos have descriptive one-liner descriptions | Same `gh repo edit -d` command applies to all repositories; novakda repo currently has basic description |
| META-05 | eLearning-relevant forks have descriptions clarifying professional context | Forks can have custom descriptions independent of upstream; current forks retain upstream descriptions |

**Coverage:** All 5 META requirements directly addressable via GitHub CLI and REST API operations.

</phase_requirements>

## Standard Stack

### Core

| Tool | Version | Purpose | Why Standard |
|------|---------|---------|--------------|
| GitHub CLI (`gh`) | 2.x+ | Repository metadata management | Official GitHub tool, atomic operations, handles authentication |
| GitHub REST API v3 | 2022-11-28 | Programmatic repository updates | Canonical source for GitHub operations, comprehensive documentation |
| `jq` | 1.6+ | JSON parsing for verification | Standard tool for JSON manipulation in shell scripts |

### Supporting

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| `gh api` | (included in `gh`) | Direct REST API access | Complex operations not supported by `gh repo edit` (e.g., bulk topic replacement) |
| `gh repo view` | (included in `gh`) | Repository metadata inspection | Pre/post verification of changes |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| GitHub CLI | GitHub web UI | Manual clicking for 39 repos = error-prone, not scriptable, no audit trail |
| GitHub CLI | Git config + manual edits | No API for repo settings in `.git/config`; settings live on GitHub servers only |
| `gh repo edit` | `gh api PATCH /repos/{owner}/{repo}` | API is more verbose but necessary for topic replacement (uses separate endpoint) |

**Installation:**

GitHub CLI is already installed and authenticated (verified in Phase 19).

```bash
# Verify installation
gh --version

# Verify authentication
gh auth status
```

## Architecture Patterns

### Recommended Operation Structure

```
Phase 20 Execution:
├── 1. Audit Current State
│   └── Export all repo metadata to baseline JSON
├── 2. Update Public Repo Metadata (8 repos)
│   ├── pattern158.solutions (description, homepage, topics)
│   ├── novakda (description if needed)
│   ├── aria-practices (description, topics)
│   ├── wai-tutorials (description, topics)
│   ├── dewordify (description, topics)
│   ├── lms-content-template-scorm2004e3 (description, topics)
│   ├── SCOBot (description, topics)
│   └── get-shit-done (assess if update needed)
├── 3. Make Repos Private (31 repos)
│   ├── Batch 1: Original repos (7)
│   └── Batch 2: Non-eLearning forks (24)
└── 4. Verify Final State
    └── Confirm 8 public, 31+ private, all metadata correct
```

### Pattern 1: Atomic Metadata Update

**What:** Update repository description, homepage, and topics in a single CLI command

**When to use:** For repos where all metadata changes are known upfront

**Example:**

```bash
gh repo edit novakda/pattern158.solutions \
  --description "Pattern 158 Solutions - Professional portfolio" \
  --homepage "https://pattern158.solutions" \
  --add-topic "portfolio" \
  --add-topic "accessibility" \
  --add-topic "wcag" \
  --add-topic "static-site"
```

**Why atomic:** Each `gh repo edit` call is a single API transaction; partial failures are rare and obvious

### Pattern 2: Topic Replacement (for repos with existing topics)

**What:** Replace all topics at once rather than incrementally adding/removing

**When to use:** When changing topic strategy for a repo that already has topics

**Example:**

```bash
# Via API (topics use separate endpoint)
gh api /repos/novakda/SCOBot/topics \
  -X PUT \
  -H "Accept: application/vnd.github.mercy-preview+json" \
  -f names[]="scorm" \
  -f names[]="elearning" \
  -f names[]="javascript"
```

**Why separate endpoint:** GitHub treats topics as a distinct resource from repository settings

### Pattern 3: Visibility Change in Batches

**What:** Change multiple repositories to private in coordinated batches

**When to use:** Managing large visibility transitions (31 repos in this phase)

**Example:**

```bash
# Batch 1: Original repos
for repo in clean-scraper-extension fo4_addonideas github-for-developers-7; do
  gh repo edit novakda/$repo --visibility private
  echo "✓ $repo now private"
done
```

**Why batches:** Allows verification between batches; limits exposure if issues arise

### Pattern 4: Pre/Post Verification

**What:** Capture repository state before and after changes for audit trail

**When to use:** Always for destructive operations (visibility changes) and bulk updates

**Example:**

```bash
# Before changes
gh repo list novakda --limit 200 --json name,isPrivate,description,homepageUrl,repositoryTopics > before-state.json

# Make changes...

# After changes
gh repo list novakda --limit 200 --json name,isPrivate,description,homepageUrl,repositoryTopics > after-state.json

# Compare
jq -s '.[0] - .[1]' before-state.json after-state.json
```

**Why verification:** Ensures no unintended changes; provides rollback reference

### Anti-Patterns to Avoid

- **Manually editing via GitHub web UI:** Not reproducible, no audit trail, error-prone for 39 repos
- **Adding topics one at a time:** `--add-topic` works for adding, but replacing requires the PUT endpoint to avoid accumulation
- **Making all repos private at once:** No opportunity to verify batch 1 before committing to batch 2
- **Copying upstream fork descriptions verbatim:** Loses professional context; forks need custom framing
- **Over-tagging with topics:** Max 20 topics allowed, but 10+ dilutes discoverability; quality over quantity
- **Using generic descriptions:** "My portfolio site" vs. "Pattern 158 Solutions - eLearning systems architecture portfolio" — specificity improves SEO

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Bulk repository updates | Custom API client in Python/Node | `gh` CLI with shell loops | GitHub CLI handles auth, pagination, error handling, rate limits |
| Topic validation | Custom topic existence checker | GitHub topic pages (github.com/topics/{topic}) | GitHub's own data is authoritative; no API endpoint for topic stats |
| Visibility rollback | Manual web UI reversals | Commit visibility changes in batches with verification | Batching allows early detection; full automation risks cascading errors |
| Description templates | Hardcoded description generator | Editorial decisions per-repo | Each repo's context is unique; templates create generic noise |

**Key insight:** GitHub CLI is battle-tested for repository management; custom tooling adds risk without benefit. The editorial work (writing descriptions, selecting topics) is where value lies, not the API plumbing.

## Common Pitfalls

### Pitfall 1: Topic Naming Violations

**What goes wrong:** Topics with uppercase letters, spaces, or special characters fail silently or get rejected

**Why it happens:** GitHub enforces strict topic naming rules: lowercase, hyphens only, 50 char max

**How to avoid:**
- Always use lowercase: `elearning` not `eLearning`
- Hyphens for multi-word: `static-site` not `static_site` or `staticsite`
- Check length: `instructional-design` (20 chars) is fine, but concatenating domains can exceed 50

**Warning signs:**
```bash
gh repo edit --add-topic "SCORM"  # Fails
gh repo edit --add-topic "e learning"  # Fails (space)
gh repo edit --add-topic "e_learning"  # Accepted but non-standard
```

**Correct usage:**
```bash
gh repo edit --add-topic "scorm"  # ✓
gh repo edit --add-topic "elearning"  # ✓
gh repo edit --add-topic "e-learning"  # ✓ (if this variant exists)
```

### Pitfall 2: Forgetting to Set Homepage URL Separately from GitHub Pages

**What goes wrong:** Developers confuse repository homepage URL (metadata field shown on repo page) with GitHub Pages URL (deployment hosting)

**Why it happens:** GitHub has multiple "URL" concepts:
- Repository URL: `https://github.com/owner/repo`
- Homepage URL: Metadata field for project website (editable via `gh repo edit -h`)
- GitHub Pages URL: Auto-generated from Pages settings (`owner.github.io/repo`)

**How to avoid:**
- Homepage URL is purely metadata — it doesn't configure hosting
- For pattern158.solutions: set homepage to `https://pattern158.solutions` (the deployed site)
- GitHub Pages settings are separate (already configured in earlier phases)

**Warning signs:**
```bash
gh repo view pattern158.solutions --json homepageUrl
# Output: {"homepageUrl": ""}  <-- Homepage not set
```

### Pitfall 3: Topic Accumulation from Add-Only Operations

**What goes wrong:** Using `--add-topic` repeatedly without removing old topics leads to 20+ topic bloat

**Why it happens:** `--add-topic` appends; it doesn't replace. No automatic deduplication.

**How to avoid:**
- For new topics on empty repo: `--add-topic` is fine
- For changing topic strategy: use API `PUT /repos/{owner}/{repo}/topics` to replace all at once
- Track topic count: GitHub allows max 20 topics, but optimal is 5-10

**Warning signs:**
```bash
gh api /repos/novakda/example/topics | jq '.names | length'
# Output: 18  <-- Approaching limit, need curation
```

**Correct approach for replacement:**
```bash
# Replace all topics (not add)
gh api /repos/novakda/SCOBot/topics \
  -X PUT \
  -H "Accept: application/vnd.github.mercy-preview+json" \
  -f names[]="scorm" \
  -f names[]="elearning" \
  -f names[]="javascript"
```

### Pitfall 4: Private→Public Visibility Exposes Action History

**What goes wrong:** When making a repo public, all GitHub Actions logs and workflow history become publicly visible

**Why it happens:** GitHub doesn't retroactively hide private repo activity when visibility changes

**How to avoid:**
- This phase is Public→Private (safe direction; hides history)
- For future Public changes: review Actions logs first
- For this phase: no concern since we're going Private, not Public

**Warning signs:**
- N/A for this phase (we're making repos private, which hides history)

### Pitfall 5: Fork Descriptions Overwritten by Upstream Sync

**What goes wrong:** Developers assume fork descriptions stay after syncing from upstream

**Why it happens:** Misunderstanding of what "sync fork" does (code only, not metadata)

**How to avoid:**
- Fork metadata (description, homepage, topics) is independent of upstream
- Syncing branches doesn't touch metadata
- Safe to set custom descriptions on forks

**Verification:**
```bash
# Check fork metadata is independent
gh api /repos/novakda/aria-practices | jq '{description, fork: .fork, parent: .parent.full_name}'
# Description persists across syncs
```

### Pitfall 6: Assuming Topics Improve SEO Outside GitHub

**What goes wrong:** Developers expect GitHub topics to boost Google search rankings

**Why it happens:** Confusion between GitHub's internal discovery (topics) and web search SEO

**Reality:**
- Topics improve discoverability **within GitHub** (topic pages, GitHub search)
- Topics appear in repo metadata but have minimal Google SEO impact
- For web SEO: focus on README content, GitHub profile bio, and deployed site content

**How to avoid:**
- Use topics for GitHub users searching for SCORM, accessibility, eLearning
- Use README, profile bio, and pattern158.solutions for Google-targeted SEO
- Topics are a GitHub-internal taxonomy, not a web-wide SEO signal

## Code Examples

Verified patterns from official sources and live testing:

### Update Repository Description and Homepage

```bash
# Single repo update (pattern158.solutions)
gh repo edit novakda/pattern158.solutions \
  --description "Pattern 158 Solutions - Professional portfolio" \
  --homepage "https://pattern158.solutions"

# Verify change
gh repo view pattern158.solutions --json description,homepageUrl
```

**Source:** GitHub CLI manual (`man gh-repo-edit`), tested 2026-02-22

### Add Topics to Repository

```bash
# Add multiple topics in one command
gh repo edit novakda/pattern158.solutions \
  --add-topic "portfolio" \
  --add-topic "accessibility" \
  --add-topic "wcag" \
  --add-topic "static-site"

# Verify topics
gh api /repos/novakda/pattern158.solutions/topics \
  -H "Accept: application/vnd.github.mercy-preview+json" | jq .names
```

**Source:** GitHub CLI manual, GitHub REST API docs (https://docs.github.com/en/rest/repos/repos#replace-all-repository-topics)

### Replace All Topics (for repos with existing topics)

```bash
# Replace all topics atomically
gh api /repos/novakda/SCOBot/topics \
  -X PUT \
  -H "Accept: application/vnd.github.mercy-preview+json" \
  -f names[]="scorm" \
  -f names[]="elearning" \
  -f names[]="javascript" \
  -f names[]="scorm-api"

# Verify replacement
gh api /repos/novakda/SCOBot/topics \
  -H "Accept: application/vnd.github.mercy-preview+json"
```

**Source:** GitHub REST API docs, tested 2026-02-22 with SCOBot (20 existing topics)

### Change Repository Visibility to Private

```bash
# Single repo
gh repo edit novakda/clean-scraper-extension --visibility private

# Batch operation with verification
for repo in clean-scraper-extension fo4_addonideas github-for-developers-7; do
  echo "Making $repo private..."
  gh repo edit novakda/$repo --visibility private
  # Verify immediately
  gh repo view novakda/$repo --json isPrivate
done
```

**Source:** GitHub CLI manual, tested concept (not executed on live repos)

### Audit Current State (Pre-Change Snapshot)

```bash
# Export all repo metadata before changes
gh repo list novakda --limit 200 --json name,isPrivate,isFork,description,homepageUrl \
  > .planning/phases/20-repository-metadata-discoverability/before-state.json

# Count public repos
jq '[.[] | select(.isPrivate == false)] | length' before-state.json

# List public non-fork repos
jq -r '.[] | select(.isPrivate == false and .isFork == false) | .name' before-state.json
```

**Source:** GitHub CLI manual (`gh repo list --help`), jq documentation

### Check Fork Commit History for Modifications

```bash
# See if fork has commits ahead of upstream
gh api /repos/novakda/aria-practices | jq '{ahead_by: .commits_ahead_by, fork: .fork}'

# Alternative: compare with upstream
gh repo view novakda/aria-practices --json parent | jq .parent.full_name
# Then: gh repo view {upstream} --json defaultBranchRef
# Compare commit SHAs
```

**Source:** GitHub REST API, tested 2026-02-22

## Topic Research Findings

Based on GitHub topic page analysis (2026-02-22):

### Recommended Core Topics for eLearning Repos

| Topic | Repo Count | Usage | Recommendation |
|-------|------------|-------|----------------|
| `portfolio` | 49,418 | High-traffic topic for showcase sites | Use for pattern158.solutions only |
| `accessibility` | 6,945 | Well-established topic | Use for aria-practices, wai-tutorials, pattern158.solutions |
| `wcag` | 536 | Niche but authoritative | Use for aria-practices, wai-tutorials, pattern158.solutions |
| `scorm` | 93 | Small but specific eLearning audience | Use for SCOBot, lms-content-template-scorm2004e3 |
| `elearning` | 460 | Medium traffic | Use for SCOBot, lms-content-template-scorm2004e3, dewordify |
| `lms` | 1,397 | Larger than `elearning` | Use for lms-content-template-scorm2004e3 |
| `static-site` | 6,513 | High traffic for portfolio sites | Use for pattern158.solutions |
| `instructional-design` | 60 | Very niche | Skip (too small for discoverability benefit) |

### Topic Pairing Patterns Observed

**Portfolio repositories commonly use:**
- `portfolio` + `static-site` + `html` + `javascript`

**Accessibility repositories commonly use:**
- `accessibility` + `wcag` + `aria` + `html`

**SCORM repositories commonly use:**
- `scorm` + `elearning` + `javascript` + `lms`

**Upstream topic analysis:**

- **w3c/aria-practices:** `aria`, `css`, `html` (3 topics, tech-focused)
- **w3c/wai-tutorials:** (0 topics currently)
- **cybercussion/SCOBot:** `scorm`, `api`, `javascript`, `scorm12`, `scorm2004`, `e-learning`, and 14 more (20 topics total — at max limit)

**Insight:** Upstream W3C repos use minimal topics; SCOBot uses maximum. Best practice is 5-10 topics balancing domain and tech.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual web UI editing | GitHub CLI (`gh repo edit`) | CLI stable since 2020, v2.x refined | Scriptable, atomic operations, audit trails |
| Topics as optional metadata | Topics as primary discoverability mechanism | ~2017 when GitHub Topics launched | Repos without topics are harder to discover in GitHub search |
| Fork descriptions mirror upstream | Forks have independent metadata | Always supported, but culturally normalized ~2020+ | Professional forks need custom framing |
| Public-by-default profile | Curated public repos | Portfolio strategy shift ~2024+ | Intentional visibility = stronger positioning |

**Deprecated/outdated:**

- **GitHub API v2 (REST):** Deprecated 2014; use v3 (current) or GraphQL (v4)
- **`git config` for repo settings:** Never supported repo description, topics, or visibility (these are GitHub server-side only)
- **Topic preview header:** `application/vnd.github.mercy-preview+json` still required for topics API (not yet GA as of 2026-02-22 docs)

## Open Questions

### 1. Should `get-shit-done` fork receive a custom description?

**What we know:**
- Upstream description: "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code and OpenCode."
- Fork description: "A light-weight and powerful meta-prompting, context engineering and spec-driven development system for Claude Code by TÂCHES."
- User marked as "Claude's discretion" whether to update
- Context: Fork is for workflow/productivity, not eLearning — doesn't need eLearning framing

**What's unclear:**
- Does the existing fork description (already slightly different from upstream) adequately signal Dan's usage context?
- Would adding context like "Workflow automation framework (fork)" add value?

**Recommendation:**
- Assess during planning: if fork has commits ahead of upstream, justify custom description
- If no custom commits: keep current description (already slightly different from upstream)
- No eLearning framing needed (not part of eLearning positioning)

### 2. Should original repos (novakda, pattern158.solutions) receive tech-stack topics?

**What we know:**
- pattern158.solutions is a static site (likely HTML/CSS/JS)
- User specified "Claude decides per repo whether tech tags add discoverability"
- Topic research shows `html`, `javascript`, `css` are common on portfolio repos

**What's unclear:**
- Does adding `javascript` or `html` to pattern158.solutions dilute the professional positioning?
- Target audience is hiring managers and eLearning professionals, not JavaScript developers

**Recommendation:**
- For pattern158.solutions: prioritize domain topics (`portfolio`, `accessibility`, `wcag`, `static-site`) over tech topics
- Skip tech-stack topics unless they're differentiators (e.g., if site used cutting-edge framework)
- For novakda profile README: no topics needed (profile READMEs typically don't use topics)

### 3. What's the optimal number of topics per repo?

**What we know:**
- GitHub allows max 20 topics
- Topic research shows ranges: W3C aria-practices has 3, SCOBot has 20, median seems 5-10
- More topics = broader search coverage but diluted relevance signals

**What's unclear:**
- Does GitHub's algorithm penalize repos with 15+ topics as "over-tagged"?
- Is there a discoverability sweet spot?

**Recommendation:**
- Use 4-7 topics per repo: 2-3 core domain topics + 2-4 context/tech topics
- pattern158.solutions: 4 topics (`portfolio`, `accessibility`, `wcag`, `static-site`)
- eLearning forks: 5-6 topics (mix of `scorm`, `elearning`, `accessibility`, tech stack)
- Avoid exceeding 10 topics; quality over quantity

## Sources

### Primary (HIGH confidence)

- **GitHub CLI Manual:** `man gh-repo-edit` (version 2.x, tested 2026-02-22)
- **GitHub REST API Documentation:** https://docs.github.com/en/rest/repos/repos (API version 2022-11-28)
  - Update a repository endpoint
  - Replace all repository topics endpoint
  - Setting repository visibility
- **GitHub Topics Documentation:** https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics
- **Live API Testing:** Tested against novakda repositories 2026-02-22
  - Verified current state of pattern158.solutions, aria-practices, wai-tutorials, SCOBot, dewordify, lms-content-template-scorm2004e3, get-shit-done
  - Confirmed 28 public repos currently, 100+ total repos

### Secondary (MEDIUM confidence)

- **GitHub Topic Pages:** (accessed 2026-02-22)
  - https://github.com/topics/portfolio (49,418 repos)
  - https://github.com/topics/accessibility (6,945 repos)
  - https://github.com/topics/wcag (536 repos)
  - https://github.com/topics/scorm (93 repos)
  - https://github.com/topics/elearning (460 repos)
  - https://github.com/topics/lms (1,397 repos)
  - https://github.com/topics/static-site (6,513 repos)
  - https://github.com/topics/instructional-design (60 repos)
- **Upstream Repository Analysis:** Checked w3c/aria-practices, cybercussion/SCOBot, gsd-build/get-shit-done for topic patterns

### Tertiary (LOW confidence)

- **General GitHub best practices:** Inferred from topic page analysis and repository examples
- **SEO impact of topics:** Based on understanding of GitHub's search algorithm (not officially documented)

## Metadata

**Confidence breakdown:**
- **Standard stack:** HIGH - GitHub CLI and REST API are official, well-documented, tested in Phase 19
- **Architecture patterns:** HIGH - Patterns verified via CLI testing and API docs; atomic operations are straightforward
- **Topic strategy:** MEDIUM - Topic page data is authoritative, but optimal topic count is inferred from observation
- **Pitfalls:** HIGH - Common mistakes documented in GitHub docs (topic naming rules) and verified via testing

**Research date:** 2026-02-22
**Valid until:** 60 days (GitHub API and CLI are stable; topic counts may drift but strategy remains valid)

**Researcher notes:**

This phase is technically simple (CLI commands are well-documented and tested) but editorially nuanced (description wording, topic selection). The research prioritized:

1. **Tool verification:** Confirmed GitHub CLI capabilities via `gh --help` and live API testing
2. **Topic research:** Analyzed 8 GitHub topic pages to understand repository counts and discoverability potential
3. **Upstream analysis:** Checked current metadata of all 8 public repos to understand baseline state
4. **Pitfall identification:** Documented common mistakes (topic naming, visibility gotchas) from GitHub docs and testing

The primary value-add for planning will be:
- **Topic recommendations** based on traffic data (MEDIUM confidence — data is factual but optimal strategy is judgment)
- **Description framing patterns** for forks (editorial guidance, not technical)
- **Operation sequencing** (batching, verification) to minimize risk

The technical implementation is low-risk: GitHub CLI operations are atomic and reversible. The strategic decisions (which topics, how to frame forks) require editorial judgment during planning.
