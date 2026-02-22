# Architecture Research: GitHub Profile Brand Alignment

**Domain:** GitHub profile integration with static portfolio website
**Researched:** 2026-02-22
**Confidence:** HIGH

## System Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     GitHub Profile Layer                     │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Bio (160  │  │  novakda/    │  │   Pinned     │        │
│  │    chars)   │  │  novakda     │  │    Repos     │        │
│  │             │  │  (Profile    │  │  (up to 6)   │        │
│  │             │  │   README)    │  │              │        │
│  └──────┬──────┘  └──────┬───────┘  └──────┬───────┘        │
│         │                │                 │                │
│         └────────────────┼─────────────────┘                │
│                          │                                  │
│         References pattern158.solutions                     │
│                          │                                  │
├──────────────────────────┼──────────────────────────────────┤
│                  Repository Metadata Layer                  │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐    │
│  │  novakda/pattern158.solutions                       │    │
│  │  - Description: Short summary (links to website)    │    │
│  │  - Homepage: https://pattern158.solutions           │    │
│  │  - Topics: Up to 20 keywords for discoverability    │    │
│  │  - About section: Rich metadata                     │    │
│  └────────────────────────┬────────────────────────────┘    │
│                           │                                 │
│         Other original repos (curated metadata)             │
│                           │                                 │
├───────────────────────────┼─────────────────────────────────┤
│                  Static Website Layer                       │
├─────────────────────────────────────────────────────────────┤
│  ┌─────────────────────────────────────────────────────┐    │
│  │  pattern158.solutions (Static HTML Site)            │    │
│  │  - 22 HTML pages (no build tools)                   │    │
│  │  - Single CSS file with design tokens               │    │
│  │  - Contact page: GitHub + LinkedIn links            │    │
│  │  - Footer: GitHub link across all pages             │    │
│  └─────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

**Data Flow Direction:**
- **Brand content flows:** Website → GitHub (one-way)
- **Portfolio site is source of truth** for professional identity
- **GitHub profile amplifies** the brand with platform-native features
- **Cross-linking is bidirectional** but content authority is unidirectional

## Integration Points

### 1. GitHub Profile Bio → Website
**What:** 160-character bio field on GitHub profile
**Integration:** References pattern158.solutions with tagline or role
**Source:** [GitHub's documentation](https://docs.github.com/en/get-started/start-your-journey/setting-up-your-profile), [character limit research](https://github.com/dead-claudia/github-limits)
**Confidence:** HIGH

**Example pattern:**
```
Dan Novak | Systems Architect | pattern158.solutions | 28 years rescuing enterprise systems. "I cheat, but I cheat fair."
```

**Trade-offs:**
- ✓ Appears at top of profile, highly visible
- ✓ Indexed by search engines
- ✗ 160-character hard limit (no flexibility)
- ✗ No Markdown support, plain text only

### 2. Profile README Repository (novakda/novakda) → Website
**What:** Special repository that displays README.md on profile page
**Integration:** Hybrid approach combining brand headline with GitHub-native stats/activity
**Source:** [GitHub official docs](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
**Confidence:** HIGH

**Repository structure:**
```
novakda/novakda/
├── README.md           # Profile content (required, root level)
└── .github/            # Optional: workflows for dynamic content
    └── workflows/
        └── update.yml  # Optional: auto-update stats
```

**Requirements (all mandatory):**
1. Repository name MUST match username exactly: `novakda`
2. Repository MUST be public
3. File MUST be named `README.md` in root
4. Content can be anything (Markdown supported)

**Recommended content sections:**
```markdown
# [Brand headline from pattern158.solutions]

[1-2 sentence positioning statement]

🔗 **Portfolio:** [pattern158.solutions](https://pattern158.solutions)

## Current Focus
[What you're working on now]

## Expertise
[3-5 key areas from website]

## Featured Projects
[Links to pinned repos with context]

## Stats
[Optional: GitHub stats badges/widgets]
```

**Trade-offs:**
- ✓ Full Markdown support (headings, links, images, code blocks)
- ✓ No length limits
- ✓ Can include dynamic content (via GitHub Actions)
- ✓ High visibility on profile
- ✗ Requires maintaining separate repository
- ✗ Can become stale if not updated

### 3. Repository Metadata → Website
**What:** Description, homepage URL, topics for novakda/pattern158.solutions and other repos
**Integration:** Repo metadata points to website, uses brand language from site content
**Source:** [GitHub SEO guide](https://www.gitdevtool.com/blog/github-seo), [metadata documentation](https://metaremover.com/articles/en/metadata-github)
**Confidence:** HIGH

**Metadata fields per repository:**

| Field | Purpose | Best Practice | Example (pattern158.solutions) |
|-------|---------|---------------|--------------------------------|
| **Description** | 1-line summary, appears in search | Use keywords from website meta description | "Professional portfolio: 28 years systems architecture, eLearning engineering, NTSB investigation aesthetic" |
| **Homepage** | External link, highly visible | Always link to pattern158.solutions | `https://pattern158.solutions` |
| **Topics** | Discoverability tags (max 20) | Technology + domain keywords | `portfolio`, `static-site`, `wcag-aa`, `systems-architecture`, `elearning`, `accessibility` |
| **About section** | Rich metadata | Combine description + topics | Auto-populated from above |

**SEO considerations:**
- GitHub topics are **exact match** for search (no fuzzy matching)
- Single-word topics preferred (multi-word get hyphenated: `static-site`)
- Description is **heavily weighted** in GitHub search algorithm
- Homepage URL appears prominently, drives external traffic
- Source: [GitHub SEO optimization](https://www.codemotion.com/magazine/dev-life/github-project/)

**Trade-offs:**
- ✓ Low maintenance (set once, rarely changes)
- ✓ High SEO value on GitHub
- ✓ Clear connection to portfolio site
- ✗ Topics limited to 20 per repo
- ✗ Description limited to ~250 characters (soft limit)

### 4. Pinned Repositories → Portfolio Page
**What:** Up to 6 pinned items (repos or gists) displayed prominently on profile
**Integration:** Pinned repos should mirror featured projects on pattern158.solutions/portfolio.html
**Source:** [GitHub pinning docs](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile), [professional strategy](https://underdog.io/blog/how-to-make-your-github-more-impressive-to-employers)
**Confidence:** HIGH

**Strategic pinning order (6 slots):**

| Position | Purpose | Example | Rationale |
|----------|---------|---------|-----------|
| 1 | Flagship/Portfolio | novakda/pattern158.solutions | Primary professional presence, links to full portfolio |
| 2 | Most technically impressive | [Strongest original project] | Demonstrates depth (87% of recruiters check GitHub) |
| 3 | Most professionally complete | [Project with CI/CD, tests, docs] | Shows production-ready practices |
| 4 | Domain expertise showcase | [eLearning-related if available] | Reinforces specialization from website |
| 5 | Unique/Creative work | [Novel implementation or tool] | Differentiator, personality |
| 6 | Community contribution | [Maintained fork or tool others use] | Collaboration, open-source citizenship |

**Pinning criteria:**
- ✓ Complete README with clear purpose
- ✓ Description matches repo content
- ✓ Active/maintained (not abandoned)
- ✓ Aligns with professional brand from website
- ✗ Avoid: Tutorials, toy projects, forks without contribution
- Source: [Repository selection strategy](https://www.starfolio.dev/blog/complete-guide-repository-analytics)

**Alignment with portfolio page:**
- Portfolio page exhibits should be **referenced** in pinned repo READMEs
- If exhibit demonstrates a private project, consider creating a **public case study repo** to pin
- Pinned repos act as **technical proof** for portfolio case studies

**Trade-offs:**
- ✓ High visibility (first thing visitors see)
- ✓ Curates professional narrative
- ✓ Can be reordered anytime
- ✗ Only 6 slots (must choose carefully)
- ✗ Can't pin private repos

### 5. Fork Management → Repository Visibility
**What:** Archiving hobby/personal forks, keeping eLearning-relevant forks visible
**Integration:** Reduces noise, focuses profile on professional identity from website
**Source:** [GitHub archiving docs](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories), [fork cleanup guide](https://www.jumpingrivers.com/blog/github-clean-remove-forks/)
**Confidence:** HIGH

**Archive vs. Delete decision matrix:**

| Scenario | Action | Reason |
|----------|--------|--------|
| One-off contribution, no ongoing interest | **Archive** | Preserves history, shows contribution |
| Hobby/personal experiment, no professional value | **Delete** | Reduces profile noise |
| eLearning-relevant fork (SCOBot, lms-content-template, etc.) | **Keep visible** | Demonstrates domain expertise |
| Fork with significant custom work | **Keep visible** + add description | Shows your contributions |
| Fork you might reference later | **Archive** | Reversible, keeps code accessible |

**Effects of archiving:**
- Repository becomes **read-only** (issues, PRs, code all locked)
- Displays **"Archived" badge** on repo page
- **Excluded from search by default** (can be included with filter)
- **Fully reversible** (unarchive anytime)
- **No billing impact** (free for public repos)
- Source: [Archiving documentation](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories)

**eLearning-relevant forks to KEEP visible:**
- SCOBot (SCORM testing tool)
- lms-content-template (course structure)
- dewordify (content simplification)
- wai-tutorials (accessibility reference)
- aria-practices (a11y implementation)
- **Add custom descriptions** explaining professional relevance

**Trade-offs:**
- ✓ Archive is reversible (safe choice)
- ✓ Reduces visual clutter on profile
- ✓ Focuses visitor attention on original work
- ✗ Archived repos still appear in total count
- ✗ Requires manual review of all 30 forks

### 6. GitHub Links on Website → GitHub Profile
**What:** Bidirectional linking between portfolio site and GitHub
**Integration:** Already exists (contact page, footer), ensure consistency after profile updates
**Confidence:** HIGH

**Current website → GitHub links:**
- Contact page: `https://github.com/novakda` (explicit button)
- Footer: `https://github.com/novakda` (text link, all 22 pages)
- Source: Contact page analysis

**Future GitHub → Website links:**
- Bio field: "pattern158.solutions" text reference
- Profile README: Prominent link to `https://pattern158.solutions`
- Repo metadata: Homepage field on pattern158.solutions repo
- Pinned repo READMEs: Link to specific portfolio exhibits

**SEO benefits:**
- Bidirectional links strengthen both domains
- GitHub has high domain authority (SEO boost for portfolio)
- Portfolio provides context for GitHub activity
- Source: [GitHub SEO strategy](https://www.codemotion.com/magazine/dev-life/github-project/)

**Trade-offs:**
- ✓ No code changes needed on website
- ✓ Strengthens brand cohesion
- ✓ Multiple discovery paths for visitors
- ✗ Must maintain link accuracy as content evolves

## Recommended Project Structure

### New Repository: novakda/novakda

```
novakda/novakda/
├── README.md                    # Profile content (PUBLIC)
├── .gitignore                   # Standard ignores
└── .github/                     # Optional: automation
    └── workflows/
        └── update-stats.yml     # Optional: dynamic content updates
```

**README.md content strategy:**

**Hybrid approach (recommended):**
- **Top section:** Brand identity from pattern158.solutions (tagline, positioning)
- **Middle section:** GitHub-native content (current focus, recent activity)
- **Bottom section:** Links to portfolio, contact, key repos

**Anti-pattern to avoid:**
- ✗ Duplicating entire portfolio content (use links instead)
- ✗ Stale content (if can't maintain, keep it minimal)
- ✗ Generic template text (personalize or omit)

**Template structure:**
```markdown
# Dan Novak | Systems Architect
> "I cheat, but I cheat fair." — Pattern 158 philosophy

28 years rescuing enterprise systems. Specializing in legacy system integration,
cross-platform solutions, and AI implementation.

🔗 **Portfolio:** [pattern158.solutions](https://pattern158.solutions)
📧 **Contact:** [dan@pattern158.solutions](mailto:dan@pattern158.solutions)
💼 **LinkedIn:** [dan-novak-5692197](https://linkedin.com/in/dan-novak-5692197)

---

## Current Focus
[1-2 sentences about current work or learning]

## Expertise
- Systems Architecture (28 years)
- eLearning Engineering (SCORM, xAPI, LMS integration)
- Legacy System Modernization
- Cross-Platform Solutions (Windows/macOS/Linux)
- AI Implementation & Integration

## Featured Projects
[Links to 3-4 pinned repos with brief context]

---

📊 [Optional: GitHub stats widget or activity summary]
```

### Modified Repository: novakda/pattern158.solutions

**No structural changes needed**, only metadata updates:

```
Existing structure remains:
pattern158.solutions/
├── index.html
├── philosophy.html
├── contact.html
├── [... other HTML files]
├── css/
│   └── main.css
├── assets/
└── [... rest of existing structure]
```

**Metadata updates (GitHub settings only):**
- **Description:** "Professional portfolio: 28 years systems architecture, eLearning engineering, NTSB investigation aesthetic. 22 pages, static HTML, WCAG AA compliant."
- **Homepage:** `https://pattern158.solutions`
- **Topics:** `portfolio`, `static-site`, `wcag-aa`, `accessibility`, `systems-architecture`, `elearning`, `html-css`, `design-tokens`, `dark-mode`, `responsive-design`

### Other Original Repositories

**For each original repo (8 total), add:**
1. **Clear description** explaining what it does (not just technology used)
2. **Homepage link** (if applicable):
   - Link to pattern158.solutions exhibit if project is featured
   - Link to live demo if publicly accessible
   - Leave blank if no external presence
3. **Topics** (3-10 relevant keywords)
4. **Complete README** with:
   - Purpose/problem solved
   - Tech stack
   - Setup instructions
   - Screenshots/demo (if applicable)
   - Link to portfolio exhibit (if featured)

## Data Flow Patterns

### Pattern 1: Brand Content Inheritance

**What:** GitHub profile content derives from portfolio site, not vice versa
**When to use:** Updating bio, profile README, repo descriptions after website changes
**Trade-offs:** Single source of truth (website), but requires manual sync

**Flow:**
```
pattern158.solutions content (source of truth)
    ↓
Distill to GitHub bio (160 chars)
    ↓
Expand in profile README (with GitHub-specific content)
    ↓
Reference in repo descriptions (keyword alignment)
```

**Example:**
- **Website meta description:** "Dan Novak - Systems architect with 28+ years rescuing enterprise systems. Specializing in legacy system integration, cross-platform solutions, and AI implementation."
- **GitHub bio:** "Dan Novak | Systems Architect | pattern158.solutions | 28 years rescuing enterprise systems. Specializing in legacy integration, cross-platform solutions, AI."
- **Profile README intro:** Same as website, expanded with current focus and GitHub-specific context
- **Repo descriptions:** Use fragments ("Legacy system integration tool for...", "Cross-platform solution for...")

### Pattern 2: Portfolio Exhibit → Pinned Repo Alignment

**What:** Pinned repos should reinforce case studies on portfolio page
**When to use:** Selecting which repos to pin, writing repo READMEs
**Trade-offs:** Creates cohesive narrative, but limits pinning flexibility

**Flow:**
```
Portfolio page exhibits (14 case studies)
    ↓
Identify which have public code repos (or can be created)
    ↓
Pin those repos + add README links to exhibits
    ↓
Visitors discover detailed case studies from GitHub
```

**Implementation:**
1. **Portfolio exhibits with repos:** Pin the repo, add exhibit link in README
2. **Portfolio exhibits without repos:** Consider creating a **case study repo** (docs-only) to pin
3. **Repos without exhibits:** Use pinning slots for technical depth, not just portfolio overlap

**Example case study repo structure:**
```
novakda/[project-name]-case-study/
└── README.md    # Full case study: Challenge, Approach, Solution, Results
                 # Links to pattern158.solutions/exhibits/[relevant-exhibit]
                 # Can include code snippets, architecture diagrams
                 # Even if project code is private, case study can be public
```

### Pattern 3: Fork Visibility Curation

**What:** Archive or delete forks that don't align with professional brand
**When to use:** During initial profile cleanup, then periodically (quarterly?)
**Trade-offs:** Reduces noise, but requires ongoing maintenance

**Decision tree:**
```
For each fork:
    │
    ├─ Does it demonstrate domain expertise (eLearning)? → KEEP + add description
    ├─ Did I contribute code back? → KEEP + add description highlighting contribution
    ├─ Might I reference it professionally? → ARCHIVE (reversible)
    └─ Hobby/personal/one-off? → DELETE (or archive if uncertain)
```

**Maintenance cadence:**
- **Initial cleanup:** Review all 30 forks, apply decision tree
- **Ongoing:** Review new forks within 1 week of creation
- **Periodic audit:** Quarterly review of forks (archive inactive)

## Build Order for Implementation

### Phase Dependencies

The following order respects technical and logical dependencies:

```
Bio/Profile Settings
    ↓
Profile README Repo (novakda/novakda)
    ↓
Repository Metadata Updates
    ↓
Fork Archival/Cleanup
    ↓
Pinned Repositories Selection
```

**Rationale:**
1. **Bio first:** Appears at top of profile, sets context for everything below
2. **Profile README second:** Elaborates on bio, provides detail before visitors browse repos
3. **Repo metadata third:** Ensures repos have clear descriptions before pinning/archiving
4. **Fork cleanup fourth:** Reduces noise before curating pins
5. **Pinning last:** Final curation after all content is polished

### Phase 1: Bio and Profile Settings
**Changes:** GitHub profile settings only (no repos)
**Dependencies:** Content from pattern158.solutions (already exists)
**Confidence:** HIGH

**Updates:**
- Bio field (160 chars max)
- Name: "Dan Novak"
- Location: "Portland, OR"
- Company/Workplace: "Pattern 158 Solutions" or blank
- Website: `https://pattern158.solutions`
- Social accounts: LinkedIn link
- Pronouns: (optional)

**Verification:**
- Bio references pattern158.solutions
- Bio includes tagline or role
- All fields consistent with website

### Phase 2: Profile README Repository
**Changes:** Create new public repo: novakda/novakda
**Dependencies:** Bio must be set (for consistency)
**Confidence:** HIGH

**Steps:**
1. Create public repo named `novakda`
2. Create `README.md` in root (required)
3. Write content using hybrid template (brand + GitHub-native)
4. Commit and verify display on profile page

**Content checklist:**
- [ ] Brand headline (from website)
- [ ] Link to pattern158.solutions (prominent)
- [ ] Contact email
- [ ] Expertise list (from website)
- [ ] Current focus (1-2 sentences)
- [ ] Featured projects (will align with pins later)
- [ ] Optional: GitHub stats widget

**Verification:**
- README displays on github.com/novakda
- All links work
- Content matches website tone/brand
- No typos or formatting issues

### Phase 3: Repository Metadata Updates
**Changes:** Modify settings for novakda/pattern158.solutions and other original repos
**Dependencies:** Profile README complete (for cross-reference consistency)
**Confidence:** HIGH

**For pattern158.solutions repo:**
- Description: Portfolio summary + tech stack
- Homepage: `https://pattern158.solutions`
- Topics: `portfolio`, `static-site`, `wcag-aa`, `accessibility`, `systems-architecture`, `elearning`, `html-css`, `design-tokens`, `dark-mode`, `responsive-design`

**For other original repos (apply to all 8):**
- Description: Clear problem/solution statement (not just tech)
- Homepage: Link to exhibit if featured, else blank
- Topics: 3-10 relevant keywords (single-word preferred)
- README: Ensure completeness (purpose, setup, tech stack)

**Verification:**
- All repos have descriptions
- Topics use single words (hyphenated if needed)
- Homepage links work (if present)
- No generic/placeholder text

### Phase 4: Fork Archival and Cleanup
**Changes:** Archive or delete hobby/personal forks
**Dependencies:** Repo metadata complete (need to identify what's valuable)
**Confidence:** MEDIUM (requires judgment calls)

**eLearning forks to KEEP (with custom descriptions):**
- SCOBot: "SCORM conformance testing tool — industry standard for LMS QA"
- lms-content-template: "Course structure template for SCORM/xAPI content"
- dewordify: "Content simplification tool for accessible eLearning"
- wai-tutorials: "W3C accessibility implementation patterns — reference for WCAG compliance"
- aria-practices: "ARIA authoring practices — accessibility engineering reference"

**For remaining ~25 forks, apply decision tree:**
1. Review each fork
2. Determine: KEEP, ARCHIVE, or DELETE
3. For KEEP: Add custom description explaining professional relevance
4. For ARCHIVE: Go to Settings → Archive this repository
5. For DELETE: Go to Settings → Delete this repository (confirm carefully)

**Verification:**
- Only professional/domain-relevant forks visible
- All kept forks have descriptions
- No hobby/personal forks in default view
- Total fork count reduced (or archived forks marked clearly)

### Phase 5: Pinned Repositories Selection
**Changes:** Pin up to 6 repos on profile
**Dependencies:** All above phases (bio, README, metadata, forks cleaned)
**Confidence:** HIGH

**Pinning strategy (6 slots):**
1. **novakda/pattern158.solutions** (flagship)
2. **[Most technically impressive original repo]** (depth)
3. **[Most professionally complete repo]** (CI/CD, tests, docs)
4. **[eLearning domain showcase]** (fork or original)
5. **[Unique/creative work]** (differentiator)
6. **[Community contribution or maintained fork]** (collaboration)

**Steps:**
1. Go to github.com/novakda
2. Click "Customize your pins"
3. Select up to 6 repos/gists
4. Arrange in strategic order (1-6 above)
5. Save

**Verification:**
- 6 repos pinned (or fewer if not enough quality repos)
- Order follows strategy
- All pinned repos have complete READMEs
- Pinned repos align with portfolio page narrative

## Architectural Anti-Patterns

### Anti-Pattern 1: Duplicating Portfolio Content on GitHub

**What people do:** Copy entire case studies, testimonials, or site content to profile README
**Why it's wrong:**
- Creates **maintenance burden** (two places to update)
- **Stale content risk** (README falls behind website)
- **Dilutes traffic** (visitors read on GitHub instead of visiting portfolio)
- **Weakens SEO** (duplicate content across domains)

**Do this instead:**
- **Profile README:** Brief intro + link to full portfolio
- **Repo READMEs:** Technical details + link to case study exhibit
- **Single source of truth:** pattern158.solutions remains authoritative

**Example:**
```markdown
✗ BAD: Copying exhibit-a.html content to profile README

✓ GOOD:
## Featured Work: LMS Integration Architecture
Designed cross-platform LMS integration framework serving 50K users across
10 enterprise clients. [Read full case study →](https://pattern158.solutions/exhibits/exhibit-a.html)
```

### Anti-Pattern 2: Generic/Template README Without Personalization

**What people do:** Use profile README generators, leave placeholder text, generic badges
**Why it's wrong:**
- **Reduces credibility** (looks like you didn't care)
- **Misses brand alignment** (doesn't reinforce pattern158.solutions identity)
- **Wasted visibility** (high-traffic page with no value)

**Do this instead:**
- Write **custom content** reflecting website brand voice
- Use tagline from philosophy page
- Skip badges/widgets unless they add real value
- Keep it minimal if you can't maintain it (minimal > stale)

**Example:**
```markdown
✗ BAD: "Hi 👋, I'm [Name]. I'm a passionate developer..."

✓ GOOD:
# Dan Novak | Systems Architect
> "I cheat, but I cheat fair." — Pattern 158 philosophy

28 years rescuing enterprise systems. Specializing in legacy system integration,
cross-platform solutions, and AI implementation.
```

### Anti-Pattern 3: Pinning Low-Quality or Irrelevant Repos

**What people do:** Pin repos because they're recent, popular, or fill all 6 slots
**Why it's wrong:**
- **First impression matters** (87% of recruiters check GitHub)
- **Dilutes professional narrative** (hobby projects next to portfolio)
- **Wastes valuable real estate** (only 6 slots)

**Do this instead:**
- Pin **only high-quality** repos (okay to use <6 slots)
- Ensure **every pinned repo** has complete README
- Align pins with **portfolio narrative**
- Unpin repos that don't meet quality bar

**Quality checklist for pinning:**
- [ ] Complete README (purpose, setup, tech stack)
- [ ] Clear description matching content
- [ ] Active or complete (not abandoned mid-development)
- [ ] Aligns with professional brand from website
- [ ] Code quality representative of your best work

### Anti-Pattern 4: Forgetting to Maintain After Initial Setup

**What people do:** Set up profile once, never update bio/README/pins
**Why it's wrong:**
- **Stale "current focus"** loses credibility
- **Outdated links** if website structure changes
- **Missed opportunities** (new projects, skills, accomplishments)
- **Profile/website divergence** (brand confusion)

**Do this instead:**
- **Review quarterly:** Bio, README, pinned repos, fork cleanup
- **Update promptly** when website changes (new exhibits, contact info)
- **Calendar reminder:** "Review GitHub profile" every 3 months
- **Minimal maintenance mode:** If can't maintain, keep README brief (better than stale)

**Quarterly review checklist:**
- [ ] Bio still accurate? (role, specialization)
- [ ] Profile README current focus updated?
- [ ] New projects worth pinning?
- [ ] Any repos to archive? (forks, old experiments)
- [ ] All links to website still work?
- [ ] Any new website exhibits to reference?

## Scaling Considerations

**This integration doesn't scale in the traditional sense** (not a software system), but it does evolve:

| Activity Level | Approach |
|---------------|----------|
| **Minimal activity** (few commits, stable repos) | Static approach: Set up once, review annually |
| **Moderate activity** (regular commits, occasional new repos) | Quarterly reviews: Update "current focus," pin new projects |
| **High activity** (daily commits, frequent new repos) | Dynamic approach: GitHub Actions to auto-update stats, monthly reviews |

### When to Add Automation

**Low priority** (probably not needed):
- GitHub Actions to auto-update stats in README
- Bots to sync content from website to GitHub
- Automated fork cleanup

**Why skip automation:**
- Maintenance burden > benefit
- Risk of stale/broken automation
- Manual review ensures quality

**When automation makes sense:**
- You commit daily and want real-time activity stats
- You frequently add new repos and forget to update README
- You have existing automation infrastructure (CI/CD already set up)

## Sources

**HIGH confidence sources (official documentation):**
- [Managing your profile README - GitHub Docs](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme)
- [Setting up your profile - GitHub Docs](https://docs.github.com/en/get-started/start-your-journey/setting-up-your-profile)
- [Pinning items to your profile - GitHub Docs](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile)
- [Archiving repositories - GitHub Docs](https://docs.github.com/en/repositories/archiving-a-github-repository/archiving-repositories)

**MEDIUM confidence sources (current guides and tools):**
- [Best Practices For An Eye Catching GitHub Readme - Hatica](https://www.hatica.io/blog/best-practices-for-github-readme/)
- [GitHub SEO Guide 2025 - GitDevTool](https://www.gitdevtool.com/blog/github-seo)
- [GitHub Project Visibility and SEO - Codemotion](https://www.codemotion.com/magazine/dev-life/github-project/)
- [How to make your GitHub more impressive to Employers - Underdog.io](https://underdog.io/blog/how-to-make-your-github-more-impressive-to-employers)
- [The Complete Guide to Repository Analytics - Starfolio](https://www.starfolio.dev/blog/complete-guide-repository-analytics)

**MEDIUM confidence sources (community practices):**
- [Your GitHub Profile as a Portfolio - Cirkled In](https://www.cirkledin.com/library/resume-and-portfolio-building/github-portfolio-college-tech-students/)
- [Cleaning up forked GitHub repositories - Jumping Rivers](https://www.jumpingrivers.com/blog/github-clean-remove-forks/)
- [Metadata on GitHub - MetaRemover](https://metaremover.com/articles/en/metadata-github)
- [GitHub Search Engine Optimization - MarkePear](https://www.markepear.dev/blog/github-search-engine-optimization)

**LOW confidence sources (general research, verify specifics):**
- [GitHub character limits collection](https://github.com/dead-claudia/github-limits) - Community-maintained, not official

---

*Architecture research for: GitHub Profile Brand Alignment*
*Researched: 2026-02-22*
*Confidence: HIGH (official docs + current best practices)*
