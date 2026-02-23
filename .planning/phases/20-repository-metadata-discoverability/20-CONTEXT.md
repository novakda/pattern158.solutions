# Phase 20: Repository Metadata & Discoverability - Context

**Gathered:** 2026-02-22
**Status:** Ready for planning

<domain>
## Phase Boundary

Update GitHub repository descriptions, topics, and homepage URLs for the curated set of public repos. Make all non-eLearning repos private. The result is a focused, professional GitHub profile where every visible repo reinforces Dan's eLearning systems architecture and accessibility expertise.

</domain>

<decisions>
## Implementation Decisions

### Public Repo Set (8 repos — everything else goes private)
- `pattern158.solutions` — original, portfolio site
- `novakda` — original, profile README (Phase 19)
- `aria-practices` — fork, W3C WAI-ARIA Authoring Practices
- `wai-tutorials` — fork, W3C accessibility tutorials
- `dewordify` — fork, Word-to-HTML eLearning tool
- `lms-content-template-scorm2004e3` — fork, SCORM 2004 content template
- `SCOBot` — fork, SCORM API JavaScript library
- `get-shit-done` — fork, Claude Code workflow/meta-prompting tool

### Repos to Make Private (31 repos)
**Originals (7):**
- `clean-scraper-extension`, `fo4_addonideas`, `github-for-developers-7`, `imatch-deviantart-api`, `imatch-imgops`, `tabbles-tools`, `tabbles4-plugin-wlpg`

**Non-eLearning forks (24):**
- `agnai`, `booru-browser-vue`, `CAI-Tools`, `character-tools`, `danbooru`, `git-sticker`, `hydrus`, `hydrus.js`, `JSON-js`, `logseq`, `my-box`, `nvs`, `omnivore`, `RisuAI`, `SillyTavern`, `silverbullet-manager-space-template`, `spa_react_javascript_hello-world`, `Spoon-Knife`, `tabbles-testPlugin-ApiV4`, `tiny-1`, `turbo-vue-storybook`, `tuskydesign`, `typescript-EssT-2428199`, `tzk`

### Description Voice & Style
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

### Specific Fork Framing
- `aria-practices` — reference material for implementing WCAG-compliant platforms
- `wai-tutorials` — reference material for implementing WCAG-compliant platforms
- `dewordify` — rapid authoring tool evaluation, alternative to WYSIWYG eLearning editors
- `lms-content-template-scorm2004e3` — general evaluation as part of SCORM standards research
- `SCOBot` — general evaluation as part of SCORM standards research
- `get-shit-done` — no special framing needed (upstream description is fine, or light touch-up)
- Claude should check fork commit histories to verify whether any have meaningful modifications

### Topic/Tag Strategy
- Hybrid approach: small core set of shared topics (2-3) for eLearning repos, plus repo-specific topics
- Claude decides core topic set based on what GitHub topic pages actually exist and have traffic
- Topic count per repo: Claude's discretion based on genuine relevance
- Tech topics (javascript, vue, etc.) vs domain topics: Claude decides per repo whether tech tags add discoverability
- Fork topics: Claude judges which shared eLearning topics genuinely apply per fork (don't force "scorm" on aria-practices)

### Light Cleanup for Non-Priority Originals
- N/A — all non-eLearning originals are going private, so no cleanup needed

### Claude's Discretion
- Exact description wording and length per repo
- Fork attribution format (prefix vs suffix style)
- Core topic set selection (based on GitHub topic page research)
- Number of topics per repo
- Whether to include tech-stack topics alongside domain topics
- Which shared topics genuinely apply to each fork
- Whether get-shit-done fork needs a description update

</decisions>

<specifics>
## Specific Ideas

- Fork descriptions should be honest about the relationship — "evaluated for" not "built with" since the forks were for research/evaluation, not active development
- Specific LMS platform names belong in the profile/portfolio, not in individual repo descriptions
- The profile should look curated and intentional with only 8 public repos, all reinforcing the eLearning/accessibility narrative

</specifics>

<deferred>
## Deferred Ideas

- **Phase 21 impact:** Making non-eLearning forks private in Phase 20 significantly reduces Phase 21's scope — Fork Curation may only need to handle edge cases or reconsideration of visibility decisions
- **Hobby fork visibility concern:** AI roleplay repos (SillyTavern, RisuAI, agnai), booru/media repos (danbooru, hydrus), and other personal interest forks were flagged as potentially unprofessional — addressed by making them private in this phase
- **Original tool repos (imatch-*, tabbles-*):** These show genuine API/plugin development skills but user chose to make them private — could be reconsidered if portfolio strategy changes

</deferred>

---

*Phase: 20-repository-metadata-discoverability*
*Context gathered: 2026-02-22*
