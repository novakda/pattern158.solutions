# Phase 19: Profile Foundation & Brand Voice - Research

**Researched:** 2026-02-22
**Domain:** GitHub profile configuration and professional identity presentation
**Confidence:** HIGH

## Summary

GitHub profile configuration and profile README creation is a well-documented domain with clear technical requirements and established professional conventions. The core challenge is not technical (GitHub's system is straightforward) but strategic: translating Pattern 158's distinctive NTSB investigation aesthetic to GitHub's community-oriented platform while maintaining brand consistency.

The GitHub profile serves as a bridge between the formal portfolio site (pattern158.solutions) and the developer community. It requires adapting the brand voice from "technical investigation report" to "senior developer with distinctive approach" without losing the core identity elements.

**Primary recommendation:** Use GitHub CLI and web UI for all operations (no API complexity needed). Create novakda/novakda repo privately first to iterate on content, then flip to public when finalized. Bio should lead with domain expertise (28 years, eLearning/SCORM specificity) and include availability signal. README should balance NTSB aesthetic with GitHub's markdown conventions—enough brand distinction to stand out, not so much that it feels out of place in developer community.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Bio wording:**
- Lead with domain experience: "28 years" framing with eLearning specificity
- Blend domain outcome with key tech mentions (SCORM/xAPI + accessible systems)
- Include tagline "I cheat, but I cheat fair" in the bio text
- Signal availability — "Open to opportunities" or on-brand equivalent in bio
- No buzzwords: avoid "passionate", "innovative", "thought leader"
- Location field: "Remote"
- Pronouns: he/him

**README structure:**
- Length: Detailed — full professional profile, not a business card
- Sections: Intro + philosophy, Skills/domains, Featured projects, Contact + links
- Availability signal: Both bio and README (placement within README is Claude's discretion)
- novakda/novakda repo: Create new, start private, flip to public when finalized

**Brand intensity:**
- Tone: Match website voice but slightly warmer for GitHub's community-oriented audience
- Tagline: Include with full attribution — "I cheat, but I cheat fair" — Moe Howard, 1938
- AI/Claude acknowledgment: Include — fits "cheat fair" philosophy; prominence level is Claude's discretion
- Core impression sequence: Competence ("solves hard problems") → Distinction ("this person is different") → Value ("I should hire this person")

**Project showcase:**
- Feature career exhibits from pattern158.solutions (case studies), NOT GitHub repos
- Description angle: Developer-oriented — emphasize technical challenges and solutions

### Claude's Discretion

- Bio character budget allocation (many elements competing for 160 chars)
- README visual formatting and markdown styling
- NTSB language intensity on GitHub
- Skills section format (grouped, flat, narrative)
- Number and selection of featured exhibits
- AI/Claude mention prominence
- Emoji usage within "no overload" constraint
- Pattern 158 name origin inclusion
- Three-step methodology inclusion
- Exact availability signal phrasing and placement
- Accessibility/WCAG mention: based on 160-char budget
- Pattern 158 name in bio: based on character budget
- Website mention in bio text vs URL field only
- Company field: Pattern 158 Solutions vs blank
- Display name: Check current and recommend

### Deferred Ideas (OUT OF SCOPE)

None — discussion stayed within phase scope

</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| PROF-01 | GitHub bio updated to reflect professional identity aligned with pattern158.solutions brand | Bio character limit (160), field structure, best practices for professional developer bios |
| PROF-02 | Website URL set to pattern158.solutions in GitHub profile settings | Profile fields documentation, social links best practices |
| README-01 | Public novakda/novakda repo created with README.md that displays on profile | Repository naming requirements, visibility settings, setup workflow |
| README-02 | README includes brand headline aligned with Pattern 158 identity | Professional README structure patterns, header conventions |
| README-03 | README includes 2-3 sentence professional introduction | Professional bio patterns, tone guidance |
| README-04 | README includes key skills/domains section (eLearning, SCORM, accessibility, systems architecture) | Skills section formatting patterns, organization approaches |
| README-05 | README includes featured projects section with links to pattern158.solutions exhibits | Project showcase patterns, external linking conventions |
| README-06 | README includes link to pattern158.solutions website and contact info | Contact section patterns, cross-platform linking best practices |

</phase_requirements>

## Standard Stack

### Core

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| GitHub CLI (gh) | Latest | Repository operations, authentication | Official GitHub tool, simplifies repo creation and management |
| GitHub Web UI | N/A | Profile field editing, manual operations | Only interface for some profile settings (bio, pronouns, location) |
| Markdown | GitHub-flavored | README content formatting | Universal GitHub documentation format |

### Supporting

None required. This is a configuration and content creation phase, not a development phase.

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| GitHub CLI | GitHub API (REST/GraphQL) | API requires more complexity for simple operations; CLI handles auth and formatting automatically |
| Manual web UI | GitHub API | Some profile fields (bio, pronouns) have no API endpoints; web UI is only option |
| Private repo first | Create public immediately | Private-first allows content iteration without public visibility; flip to public is one-click |

**Installation:**

GitHub CLI should already be installed and authenticated based on STATE.md blockers. If not:

```bash
# Install GitHub CLI (if needed)
# Debian/Ubuntu
sudo apt install gh

# Verify authentication
gh auth status

# If not authenticated
gh auth login
```

## Architecture Patterns

### Recommended Profile Structure

**Bio (160 characters max):**
```
[Domain experience statement] [Key tech/domains] [Availability signal] [Tagline fragment if space]
```

**Profile Fields:**
- **Name:** Dan Novak (current display name)
- **Pronouns:** he/him (locked decision)
- **Bio:** 160-character professional statement (see Bio Composition Pattern)
- **Company:** Pattern 158 Solutions (Claude's discretion, recommend including for brand consistency)
- **Location:** Remote (locked decision)
- **Website:** https://pattern158.solutions (locked decision)
- **Social accounts:** LinkedIn (https://linkedin.com/in/dan-novak-5692197)

**README Structure:**
```markdown
# [Brand Headline]
[2-3 sentence professional introduction]

## [Skills/Domains Section]
[eLearning, SCORM, accessibility, systems architecture - format TBD]

## [Featured Projects/Exhibits]
[Links to pattern158.solutions exhibits with developer-angle descriptions]

## [Contact/Links]
[Website, email, LinkedIn, GitHub - availability signal placement TBD]
```

### Pattern 1: Bio Composition Under 160-Character Constraint

**What:** Prioritize elements that fit GitHub's 160-character bio limit while maintaining brand identity.

**When to use:** Profile bio field editing.

**Approach:**

1. **Calculate fixed elements:**
   - Tagline: "I cheat, but I cheat fair" = 28 characters
   - Period/spacing: ~2 characters
   - **Fixed total:** ~30 characters
   - **Remaining budget:** 130 characters

2. **Prioritize variable elements:**
   - **Priority 1 (must have):** Domain experience (28 years + eLearning specificity)
   - **Priority 2 (must have):** Key tech mentions (SCORM/xAPI)
   - **Priority 3 (must have):** Availability signal
   - **Priority 4 (if space):** Accessibility/WCAG mention
   - **Priority 5 (if space):** Pattern 158 name

3. **Test variations:**
   - Start with Priority 1-3, measure character count
   - Add Priority 4 if under 150
   - Add Priority 5 only if under 140
   - Iterate word choices for compression

**Example candidate (127 characters):**
```
28 years building eLearning systems (SCORM/xAPI) and accessible platforms. Open to opportunities. I cheat, but I cheat fair.
```

**Character budget flexibility:**
- "28 years" vs "28+ years" (1 char difference)
- "building" vs "rescuing" vs "engineering" (word choice affects tone and length)
- "Open to opportunities" vs "Available for hire" vs "Currently seeking roles" (varies 6-19 chars)

### Pattern 2: README Brand Intensity Calibration

**What:** Balance NTSB aesthetic with GitHub markdown conventions to achieve "distinctive but not alien" tone.

**When to use:** README content drafting.

**NTSB Aesthetic Elements (Website):**
- All-caps section headers ("EXHIBIT M: SCORM DEBUGGER")
- Classification tags ("Field Report · Exhibit M · Client · Date Range")
- Numbered finding tables (F-01, F-02, etc.)
- Formal section structure (Background, Personnel, Sequence of Events, Findings)
- Industrial/technical language ("Provider of Clarity", "forensic engineering")

**GitHub Markdown Conventions:**
- Title case or sentence case headers
- Emoji for visual breaks (used sparingly)
- Bullet lists and simple tables
- Conversational-professional tone
- Horizontal rules for section breaks

**Calibration Strategy:**

| Element | Website Intensity | GitHub Adaptation | Rationale |
|---------|------------------|-------------------|-----------|
| Headers | ALL CAPS | Title Case with optional monospace | GitHub devs expect readable headers; monospace signals technical precision without shouting |
| Classification tags | Formal metadata | Subtle subheader or omit | GitHub profiles don't use metadata tags; could use italics or skip |
| Section structure | NTSB formal sections | Simplified headers | Keep Philosophy/Skills/Projects structure, drop Background/Personnel formality |
| Language tone | Investigation report | Investigation-influenced professional | "Provider of Clarity" works; "Personnel Involved" doesn't |
| Visual formatting | Rules, blockquotes, tables | Markdown native elements | Use `---` horizontal rules, `>` blockquotes sparingly, simple tables |

**Recommended intensity level:** 60% NTSB aesthetic, 40% GitHub native. Enough to be distinctive, not so much that it reads as rigid.

### Pattern 3: Featured Projects Section (External Linking)

**What:** Showcase portfolio exhibits (not GitHub repos) with developer-oriented framing.

**When to use:** README Featured Projects section.

**Structure:**

```markdown
## Featured Work

### [Project Name] — [One-line technical hook]
[2-3 sentences describing technical challenge and solution, developer angle]
→ [Read more on pattern158.solutions](https://pattern158.solutions/exhibits/exhibit-X.html)
```

**Developer-angle framing examples:**

| Exhibit | Website Frame | GitHub Developer Angle |
|---------|---------------|----------------------|
| SCORM Debugger (M) | TASBot for eLearning | Built Vue.js wrapper with SCORM API emulation—testing cycles from hours to minutes via save state architecture |
| Cross-Domain SCORM (E) | Framework eliminating manual distribution | Custom CORS middleware solving iframe sandboxing—production framework 5 years before Rustici's commercial product |
| GM Investigation (J) | NTSB-style root cause analysis | Swiss cheese model forensics: browser debugging + UX analysis + user interviews revealed architecture fragility, not bug |
| BP Learning Platform (N) | Rustici Content Controller integration | Inherited undocumented platform with custom xAPI implementation—reverse-engineered integration between Rustici and proprietary LMS |

**Key differences:**
- Website: Emphasizes business outcomes, client impact
- GitHub: Emphasizes technical approach, engineering solutions
- Both cite measurable results, but GitHub angle speaks to developers

**Number of exhibits to feature:** Recommend 3-4 strongest for GitHub developer audience (SCORM Debugger, Cross-Domain SCORM, GM Investigation, Power Platform Analysis).

### Anti-Patterns to Avoid

- **Buzzword bio:** "Passionate innovator driving digital transformation" — violates locked decision, generic
- **Resume dump:** Listing every job/client in README — cluttered, violates "detailed but not business card" principle
- **Dynamic stats widgets:** github-readme-stats, contribution graphs — breaks frequently, conflicts with static-first philosophy (explicitly out of scope per PROJECT.md)
- **Animated GIFs:** Conflicts with NTSB aesthetic (explicitly out of scope)
- **Emoji overload:** ✨🚀💻🔥 on every line — locked decision says "no emoji overload"
- **Full NTSB formality on GitHub:** Section numbering, classification metadata, finding tables — too rigid for GitHub community context

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| GitHub profile updates | Custom API scripts | GitHub CLI + Web UI | CLI handles auth/formatting; some fields have no API access |
| Markdown rendering preview | Custom parser | GitHub's web editor preview | GitHub-flavored Markdown has specific quirks; their preview is source of truth |
| Bio character counting | Manual counting | Text editor with char count | Reduces errors, shows real-time budget |

**Key insight:** This phase is content and configuration, not development. Use native tools (CLI, web UI) rather than building automation.

## Common Pitfalls

### Pitfall 1: Bio Character Budget Underestimation

**What goes wrong:** Drafting bio content without real-time character counting leads to discovering 180-character drafts that must be painfully compressed, losing clarity or impact.

**Why it happens:** Writers compose in prose mode without monitoring constraints; GitHub's 160-limit is strict.

**How to avoid:**
1. Draft in text editor with character count visible
2. Start with fixed elements (tagline) to establish budget
3. Prioritize variable elements before writing
4. Test multiple phrasings for each element

**Warning signs:**
- Bio draft sounds perfect but exceeds 160 characters
- Forced to cut key identity elements (domain specificity, availability signal)
- Resorting to unclear abbreviations to fit

### Pitfall 2: README Brand Intensity Mismatch

**What goes wrong:** Either (a) full NTSB formality makes GitHub profile feel alien and rigid, or (b) generic developer bio loses Pattern 158 distinction entirely.

**Why it happens:** Website voice is optimized for hiring managers and business contexts; GitHub voice needs developer community calibration.

**How to avoid:**
1. Reference website for brand elements (Provider of Clarity, tagline, three-step methodology)
2. Adapt language for developer audience (technical depth over business outcomes)
3. Use GitHub markdown conventions (horizontal rules, not formal section numbers)
4. Test tone: "Does this sound like a senior developer who happens to have NTSB methodology, or a stiff corporate report?"

**Warning signs:**
- README uses "PERSONNEL INVOLVED" section headings
- Classification metadata ("Field Report · Exhibit M") appears verbatim
- No adaptation for platform context

### Pitfall 3: Profile README Visibility Failure

**What goes wrong:** Creating repository correctly but profile README doesn't display on GitHub profile page.

**Why it happens:** GitHub has specific requirements for display (exact username match, public repo, README.md in root).

**How to avoid:**
1. Repository name MUST exactly match username: `novakda/novakda`
2. Repository MUST be public (start private for iteration, flip public when ready)
3. File MUST be named `README.md` in repository root
4. File MUST contain content (empty READMEs don't display)

**Warning signs:**
- Repo named `novakda/profile` instead of `novakda/novakda`
- Repo is private (intentional during iteration, but must flip public for display)
- README.md in subdirectory instead of root

### Pitfall 4: Featured Projects Section Over-Engineering

**What goes wrong:** Attempting to build filtering, tagging, or dynamic project displays in README when simple markdown links would suffice.

**Why it happens:** Pattern158.solutions has sophisticated exhibit categorization (Three Lenses positioning); temptation to replicate complexity on GitHub.

**How to avoid:**
1. GitHub profile README is static markdown—no JavaScript, no dynamic filtering
2. Select 3-4 strongest exhibits for developer audience instead of listing all 14
3. Use simple structure: title, description, link
4. Cross-reference website for complete portfolio

**Warning signs:**
- Attempting to use GitHub Actions for README updates
- Trying to embed external filtering widgets
- Including all 14 exhibits instead of selective showcase

### Pitfall 5: Bio/README Availability Signal Inconsistency

**What goes wrong:** Bio says "Currently seeking roles" but README says nothing, or vice versa—mixed signals confuse hiring managers scanning profile.

**Why it happens:** Locked decision requires availability signal in BOTH bio and README; easy to update one and forget the other.

**How to avoid:**
1. Draft both bio and README availability language in same session
2. Ensure phrasing is consistent (don't say "seeking roles" in bio and "open to opportunities" in README)
3. Document phrasing choice for future updates

**Warning signs:**
- Bio includes availability, README omits it
- Contradictory signals (bio says "open", README says "not currently available")

## Code Examples

### GitHub Profile README Repository Creation

```bash
# Verify authentication
gh auth status

# Create repository (private initially for iteration)
gh repo create novakda/novakda --private --description "GitHub profile README" --add-readme

# Clone for local editing
gh repo clone novakda/novakda
cd novakda

# Edit README.md locally
# (content creation, not code)

# Commit and push changes
git add README.md
git commit -m "docs: add profile README content"
git push

# When ready to publish, flip to public visibility
gh repo edit novakda/novakda --visibility public
```

**Note:** Repository created private first allows iteration without public visibility. Flip to public when content is finalized.

### Profile Field Updates (Web UI)

GitHub profile fields (bio, pronouns, location, company) have **no API endpoints** and must be updated via web UI:

1. Navigate to https://github.com/settings/profile
2. Edit fields:
   - **Name:** Dan Novak (verify current)
   - **Public email:** (optional, likely omit)
   - **Bio:** [160-character professional statement]
   - **Pronouns:** he/him
   - **Company:** Pattern 158 Solutions
   - **Location:** Remote
   - **Website:** https://pattern158.solutions
   - **Social accounts → LinkedIn:** https://linkedin.com/in/dan-novak-5692197
3. Click "Save" (required per field or section)

**Bio example (127 characters):**
```
28 years building eLearning systems (SCORM/xAPI) and accessible platforms. Open to opportunities. I cheat, but I cheat fair.
```

### Markdown Formatting Patterns for README

**Header hierarchy:**
```markdown
# Dan Novak — Provider of Clarity
## Skills & Domains
### eLearning Systems Architecture
```

**Horizontal rules for section breaks:**
```markdown
## Skills & Domains
[content]

---

## Featured Work
[content]
```

**External links to exhibits:**
```markdown
### SCORM Debugger — TASBot for eLearning
Built a Vue.js wrapper with SCORM API emulation to eliminate manual testing overhead. Testing cycles dropped from hours to minutes via save state architecture inspired by speedrunning emulators.

→ [Read the full case study](https://pattern158.solutions/exhibits/exhibit-m.html)
```

**Blockquote for tagline (optional stylistic choice):**
```markdown
> "I cheat, but I cheat fair."
> — Moe Howard, _The Three Stooges_, 1938
```

**Skills formatting options:**

*Option 1: Grouped by domain*
```markdown
## Skills & Domains

**eLearning & Standards**
SCORM (1.2, 2004), xAPI (Tin Can API), AICC, cmi5, LMS integration

**Frontend Engineering**
JavaScript (Vue.js, React), HTML5, CSS3, WCAG 2.1 AA accessibility

**Systems Architecture**
Legacy system rescue, cross-platform integration, forensic debugging
```

*Option 2: Flat list*
```markdown
## Skills & Domains

- **eLearning Standards:** SCORM, xAPI, AICC, cmi5, LMS integration
- **Frontend:** JavaScript (Vue.js, React), HTML5, CSS3, accessibility (WCAG 2.1 AA)
- **Systems:** Legacy rescue, cross-platform integration, forensic debugging
- **Tools:** Git, Docker, Claude Code, AI-assisted development
```

*Option 3: Narrative (more distinctive)*
```markdown
## What I Build

I specialize in **eLearning systems architecture** (SCORM, xAPI, LMS integration) and **legacy system rescue**—the projects where documentation is incomplete, vendors have departed, and the system is critical but fragile.

Core technologies: JavaScript (Vue.js, React), HTML5/CSS3, WCAG 2.1 AA accessibility, cross-platform integration, forensic debugging.
```

**Recommendation:** Option 3 (narrative) feels most aligned with Pattern 158 voice—focuses on what you do, not just tech keywords.

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| No profile README | Profile README standard | ~2020 | GitHub added special repository feature; now expected for professional developers |
| Generic bio ("Full-stack developer") | Domain-specific positioning | 2020s shift | Hiring managers scan for expertise, not generalist claims |
| Resume-style project lists | Selective showcase with narrative | ~2021+ | Quality over quantity; 3-4 strong projects better than 20 mediocre |
| Buzzword-heavy bios | Authentic voice | 2022+ | Backlash against "passionate/innovative" language; developers value specificity |

**Deprecated/outdated:**
- **Profile visitor counters:** github-readme-stats hit counters were popular 2020-2021, now seen as noisy
- **Contribution graph optimizations:** "Green square" farming to show activity — recognized as vanity metric
- **Animated typing headers:** readme-typing-svg was trendy 2021-2022, now conflicts with professional minimalism
- **Skill badges everywhere:** shields.io badge overload (one badge per tech) — cluttered, hard to scan

**Current best practice (2026):**
- Selective profile README showcase (not every repo)
- Domain expertise over generalist positioning
- Narrative voice over keyword lists
- Minimalism and readability over visual complexity
- External portfolio links (pattern158.solutions) for depth

## Open Questions

1. **Current GitHub profile bio content**
   - What we know: Current bio from API: "Wannabe mad scientist, currently focused on web development especially CSS and frameworks like Vue and React. Not a jack-of-all-trades so such as a 6 or 7."
   - What's unclear: Whether this needs complete replacement or elements to preserve
   - Recommendation: Complete replacement. Current bio is informal/self-deprecating; Pattern 158 positioning requires professional domain expertise framing.

2. **Display name optimization**
   - What we know: Current display name is "Dan Novak" (from API)
   - What's unclear: Whether to add professional title or keep simple
   - Recommendation: Keep "Dan Novak" simple. Bio and README carry professional positioning; display name should remain human-readable identifier.

3. **Company field strategy**
   - What we know: Claude's discretion per CONTEXT.md; current value is `null`
   - What's unclear: Whether "Pattern 158 Solutions" strengthens brand or looks self-promotional
   - Recommendation: Include "Pattern 158 Solutions" for brand consistency. GitHub company field is standard practice; omitting it loses brand reinforcement opportunity.

4. **README emoji usage boundary**
   - What we know: Locked decision says "no emoji overload"; emoji sparingly is acceptable
   - What's unclear: Exact threshold (zero emoji? 1-2 per section? only in specific contexts?)
   - Recommendation: Maximum 2-3 emoji in entire README, used as visual section markers if needed. Arrow (→) for external links is acceptable as typographic element, not decorative emoji.

5. **AI/Claude acknowledgment placement**
   - What we know: Must include per locked decision; prominence level is Claude's discretion
   - What's unclear: Dedicated section, footer note, or inline mention in methodology?
   - Recommendation: Footer note. Aligns with "cheat fair" philosophy without dominating profile. Example: "Built with AI-assisted development (Claude Code)—tools that make complex work precise."

## Sources

### Primary (HIGH confidence)

- **GitHub Official Documentation:**
  - Profile README: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme
  - Personalizing profile: https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/personalizing-your-profile
  - Verified: Repository naming (exact username match), visibility requirements, 160-character bio limit, profile field structure

- **Pattern 158 Website Content:**
  - /home/xhiris/projects/pattern158.solutions/philosophy.html (brand elements, methodology)
  - /home/xhiris/projects/pattern158.solutions/exhibits/exhibit-m.html (NTSB structure example)
  - /home/xhiris/projects/pattern158.solutions/.planning/PROJECT.md (brand identity, constraints)
  - Verified: Six brand elements, Three Stooges tagline attribution, three-step methodology, NTSB aesthetic patterns

- **GitHub API:**
  - `gh api /user` output: Current profile state (name, bio, company, location)
  - Verified: Current bio content ("Wannabe mad scientist..."), display name ("Dan Novak"), null company field

### Secondary (MEDIUM confidence)

- **awesome-github-profile-readme community resource:**
  - https://github.com/abhisheknaiidu/awesome-github-profile-readme
  - Verified patterns: Header/intro, skills, experience, links, call-to-action sections
  - Verified trends: Minimalism over visual complexity (2022+), narrative voice over keyword lists, selective showcase over comprehensive lists
  - Not verified: Specific statistics on adoption rates, no official GitHub endorsement

### Tertiary (LOW confidence)

None. All research findings verified against official documentation or primary sources.

## Metadata

**Confidence breakdown:**
- GitHub technical requirements: HIGH — Official documentation, verified via CLI/API
- Profile README conventions: MEDIUM — Community patterns verified across multiple sources, but no single authoritative standard
- Brand voice adaptation: HIGH — Direct access to Pattern 158 website content, CONTEXT.md locked decisions
- Professional developer tone: MEDIUM — Informed by community examples and docs, but subjective judgment required

**Research date:** 2026-02-22
**Valid until:** ~60 days (stable domain; GitHub profile conventions change slowly; Pattern 158 brand elements are fixed)

**Coverage assessment:**
- ✓ Technical requirements (repo naming, visibility, file structure)
- ✓ Profile field structure (bio, pronouns, location, company, website)
- ✓ README content patterns (sections, formatting, external linking)
- ✓ Brand voice calibration (NTSB aesthetic adaptation for GitHub)
- ✓ Featured projects selection and framing (developer-angle descriptions)
- ✓ Common pitfalls (character limits, visibility failures, tone mismatches)
- ✓ Phase requirements mapping (all 8 requirements addressed)
