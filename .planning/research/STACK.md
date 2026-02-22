# Stack Research: GitHub Profile Optimization

**Domain:** GitHub Profile Brand Alignment
**Researched:** 2026-02-22
**Confidence:** HIGH

## Executive Summary

For GitHub profile optimization aligned with the static-first philosophy of pattern158.solutions, the recommended stack uses **GitHub's native tools and services only**. No build tools, no dependencies, no dynamic automation. Profile README is hand-crafted Markdown, badges are static SVGs from shields.io, and repository management uses GitHub CLI (`gh`) or direct API calls.

**Key principle:** Static content, reliable services, manual curation over automation.

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| GitHub CLI (`gh`) | Latest (2.x+) | Profile and repository management | Official GitHub tool, better than raw API calls for most operations, authentication handled automatically, actively maintained |
| GitHub REST API | v3 (2022-11-28) | Programmatic profile/repo updates | Direct API access for operations not yet in CLI (topics, some metadata), industry standard, stable API |
| Markdown | GitHub Flavored (GFM) | Profile README content | Native GitHub format, no build step, renders consistently, supports tables/badges/emoji, accessible |
| shields.io | N/A (service) | Static badges for tech stack | Industry standard since 2013, 1000+ badge types, highly cacheable SVGs, simple URL-based API, reliable uptime |

### Supporting Tools

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| `gh api` subcommand | Built-in | Direct REST API calls via CLI | When `gh repo edit` doesn't support needed fields (e.g., topics require API, not CLI flags) |
| Personal Access Token (fine-grained) | N/A | Authentication for API/CLI | Required for programmatic updates; use fine-grained token with minimal scopes (Profile write, Repository write) |
| Local Markdown editor | N/A | Content drafting | VSCode with Markdown preview recommended; verify GFM rendering before pushing |
| GitHub Web UI | N/A | Manual operations | Repository pinning (no API), profile picture (no API), final verification |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| `curl` or `gh api` | API testing | Test API endpoints before scripting batch operations |
| Git | Version control for profile README | Track changes to novakda/novakda repository |
| Web browser | Preview profile | Verify README renders correctly on github.com/novakda |

## Installation

```bash
# GitHub CLI (if not already installed on WSL)
# Debian/Ubuntu
sudo apt update
sudo apt install gh

# Or via official installer (recommended for latest version)
curl -fsSL https://cli.github.com/packages/githubcli-archive-keyring.gpg | sudo dd of=/usr/share/keyrings/githubcli-archive-keyring.gpg
sudo chmod go+r /usr/share/keyrings/githubcli-archive-keyring.gpg
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/githubcli-archive-keyring.gpg] https://cli.github.com/packages stable main" | sudo tee /etc/apt/sources.list.d/github-cli.list > /dev/null
sudo apt update
sudo apt install gh

# Authenticate (opens browser for OAuth)
gh auth login

# Verify authentication and scopes
gh auth status
```

**No npm packages required** — this aligns with the project's zero-dependency philosophy. All tools are system-level CLI utilities or web services.

## Recommended Configuration

### GitHub CLI Authentication

```bash
# Login with GitHub account (OAuth recommended over PAT for CLI)
gh auth login

# Choose:
# - GitHub.com (not Enterprise)
# - HTTPS protocol
# - Authenticate with web browser (easier than PAT)
# - Grants necessary scopes automatically

# Verify authentication
gh auth status
# Should show: Logged in to github.com account novakda
```

### Personal Access Token (for API scripts only)

If scripting bulk operations, create fine-grained PAT:

1. GitHub.com → Settings → Developer settings → Personal access tokens → Fine-grained tokens
2. Generate new token
3. Repository access: Select repositories (pattern158.solutions, etc.)
4. Permissions:
   - **Repository permissions:** Administration (write) — for repo metadata
   - **Account permissions:** Profile (write) — for bio/location/company
5. Expiration: 90 days recommended (rotate regularly)
6. Store securely: `export GITHUB_TOKEN="github_pat_..."`

### Profile README Repository Setup

```bash
# Create profile README repository (matches username exactly)
gh repo create novakda/novakda --public --description "GitHub profile README"

# Clone locally
git clone https://github.com/novakda/novakda.git
cd novakda

# Create README.md
cat > README.md << 'EOF'
# Dan Novak

**Systems Architect | eLearning Engineer | Provider of Clarity**

[pattern158.solutions](https://pattern158.solutions)

## Specialties

- eLearning systems architecture (SCORM, xAPI, LMS integration)
- Accessibility engineering (WCAG AA compliance, automated testing)
- Forensic debugging (NTSB-style investigation methodology)

## Featured Projects

- [pattern158.solutions](https://github.com/novakda/pattern158.solutions) — Static HTML portfolio with full WCAG AA compliance

![WCAG AA](https://img.shields.io/badge/WCAG_AA-Compliant-brightgreen?style=flat&logo=accessibility)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)

EOF

# Commit and push
git add README.md
git commit -m "Initial profile README"
git push origin main

# Verify profile display at github.com/novakda
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| GitHub CLI (`gh`) | Raw `curl` REST API calls | **Never** for this project — CLI handles auth, is more maintainable, and has better error messages |
| shields.io | badgen.net | **Never** — badgen.net has maintenance issues despite being faster; reliability > speed for professional profile |
| Static README | GitHub Actions dynamic README | **Never** for this project — violates static-first philosophy, introduces fragility, rate limits break widgets |
| Manual web UI updates | Scripted API updates | Use **scripts only** if bulk repo operations needed (e.g., archiving 20+ repos); prefer manual for 1-5 operations |
| shields.io | spacebadgers | Only if self-hosting required; shields.io sufficient and proven for public projects |
| Fine-grained PAT | Classic PAT | **Always use fine-grained** — better security, scoped permissions, follows GitHub best practices |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| GitHub Actions for dynamic stats | Rate limits break badges, adds complexity, violates static philosophy, fragile | Static badges with shields.io for tech stack |
| badgen.net | Lacks active maintenance, frequently broken images as of 2026, unreliable | shields.io (slower but reliable and actively maintained) |
| GraphQL API for profile updates | More complex than needed, REST API sufficient for bio/location/description | GitHub REST API v3 or `gh` CLI |
| Repository pinning via API | **No API/CLI support exists**; attempting workarounds wastes time | Manual web UI pinning (accept 6 repo hard limit) |
| Over-engineered README generators | Adds dependencies, produces bloated output, hard to maintain, generic feel | Hand-crafted Markdown with GFM, aligned to brand voice |
| Base64-encoded custom logos in badges | Fragile, hard to update, breaks easily, large URLs | Use Simple Icons built into shields.io (2000+ logos available) |
| Visitor counters / stats widgets | Gimmicky, adds no professional value, often breaks, rate-limited | Focus on content quality and static achievements |
| Excessive emojis in headings | Breaks anchor links, unprofessional for engineering roles | Use sparingly in body text only, never in headings |
| Screenshot-heavy READMEs | Goes stale quickly, maintenance burden, accessibility issues | Text-first with badges, link to live site for visuals |
| Multiple profile README repos | Only `novakda/novakda` displays; others ignored by GitHub | Single canonical profile README |

## Stack Patterns by Use Case

### Pattern 1: Update Profile Bio/Location/Company

```bash
# GitHub CLI doesn't have dedicated user profile edit command yet
# Use direct API call via gh api

gh api PATCH /user \
  -f name="Dan Novak" \
  -f bio="Systems Architect | eLearning Engineer | Provider of Clarity" \
  -f location="Your Location" \
  -f company="Pattern 158 Solutions" \
  -f blog="https://pattern158.solutions" \
  -f twitter_username=""

# Verify update
gh api /user | grep -E '(name|bio|location|company|blog)'
```

### Pattern 2: Update Single Repository Metadata

```bash
# Use GitHub CLI for description and homepage (simple)
gh repo edit pattern158/pattern158.solutions \
  --description "Static HTML portfolio - NTSB investigation aesthetic, WCAG AA compliant" \
  --homepage "https://pattern158.solutions"

# Verify update
gh repo view pattern158/pattern158.solutions --json description,homepageUrl
```

### Pattern 3: Update Repository Topics

```bash
# Topics require API call (not supported in gh repo edit flags efficiently)
# Replace all topics at once

gh api PUT /repos/novakda/pattern158.solutions/topics \
  -f names[]="portfolio" \
  -f names[]="accessibility" \
  -f names[]="wcag-aa" \
  -f names[]="static-site" \
  -f names[]="html-css" \
  -f names[]="elearning"

# Verify update
gh api /repos/novakda/pattern158.solutions/topics
```

### Pattern 4: Archive Repository

```bash
# Archive single repository
gh repo archive novakda/old-project -y

# Verify (archived repos show "Archived" status)
gh repo view novakda/old-project --json isArchived
```

### Pattern 5: Create Profile README

**Requirements (all must be met):**
1. Repository name matches username exactly: `novakda/novakda`
2. Repository is public
3. `README.md` exists in repository root
4. README.md contains content

```bash
# 1. Create repository
gh repo create novakda/novakda --public --description "GitHub profile README"

# 2. Clone and add README
git clone https://github.com/novakda/novakda.git
cd novakda
echo "# Your Name" > README.md
echo "Professional tagline here" >> README.md

# 3. Commit and push
git add README.md
git commit -m "Initial profile README"
git push origin main

# 4. Verify display at github.com/novakda
```

**Important:** If repo created before July 2020, manually activate via "Share to profile" in repo settings.

### Pattern 6: Add Badges to README

```bash
# shields.io static badge URL structure:
# https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>?style=<STYLE>&logo=<LOGO>&logoColor=<COLOR>

# Example badges for pattern158.solutions profile:
cat >> README.md << 'EOF'

![WCAG AA](https://img.shields.io/badge/WCAG_AA-Compliant-brightgreen?style=flat&logo=accessibility)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)
![SCORM](https://img.shields.io/badge/SCORM-Compliant-blue?style=flat)
![xAPI](https://img.shields.io/badge/xAPI-Experience_API-orange?style=flat)

EOF
```

### Pattern 7: Pin Repositories (Manual Only)

**No API or CLI support.** Must use web UI:

1. Navigate to github.com/novakda
2. Click "Customize your pins"
3. Select up to 6 repositories or gists (combined limit)
4. Click "Save pins"

**Strategic curation required** due to hard 6-item limit.

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| GitHub CLI 2.x | GitHub REST API v3 (2022-11-28) | CLI uses REST API internally, version header auto-set |
| GFM (GitHub Flavored Markdown) | All GitHub README contexts | Consistent rendering across profile/repo READMEs |
| shields.io URLs | All Markdown contexts | SVG badges render in GitHub, GitLab, Bitbucket, static HTML |
| Fine-grained PAT | GitHub CLI and REST API | Recommended over classic PAT; scoped permissions, better security |

## Integration with Existing pattern158.solutions Stack

**Existing stack:** Static HTML, CSS with 80+ design tokens, minimal vanilla JS, Playwright + axe-core testing

**GitHub profile optimization adds:**
- GitHub CLI for repo management (system utility, not project dependency)
- Profile README in separate `novakda/novakda` repository
- shields.io badges (external service, no build step)
- API calls for metadata updates (one-time or occasional operations)

**Zero impact on existing site:** Profile optimization is GitHub-side only. No changes to pattern158.solutions codebase or deployment.

## Key Implementation Details

### GitHub Profile README Requirements

Per official GitHub documentation, profile README displays **only when ALL** of:
1. Repository name matches GitHub username exactly (`novakda/novakda`)
2. Repository is public
3. `README.md` exists in repository root
4. README.md contains any content

**Removal conditions:** Profile README disappears if you delete/empty README.md, make repo private, or change username/repo name so they no longer match.

**Legacy note:** If repo created before July 2020, must manually activate via "Share to profile" in repo settings.

### REST API Authentication & Headers

All API calls require:

```bash
# Headers (automatically set by gh api)
Authorization: Bearer <YOUR-TOKEN>
X-GitHub-Api-Version: 2022-11-28
Content-Type: application/vnd.github+json

# Fine-grained token permissions (minimum required)
- Account: "Profile" write (for /user endpoint)
- Repository: "Administration" write (for /repos endpoints)
```

### Shields.io Badge URL Structure

```
https://img.shields.io/badge/<LABEL>-<MESSAGE>-<COLOR>
```

**URL Parameters:**
- `?style=` — plastic | flat | flat-square | for-the-badge | social (default: flat)
- `?logo=` — any Simple Icons name (github, linkedin, html5, css3, javascript, etc.)
- `?logoColor=` — hex color without # (e.g., white, black, ff0000) or CSS name
- `?color=` — hex without #, rgb, rgba, hsl, hsla, or CSS name (default: brightgreen)
- `?labelColor=` — background color for label section

**Example with all parameters:**
```
https://img.shields.io/badge/WCAG_AA-Compliant-brightgreen?style=flat&logo=accessibility&logoColor=white
```

**WCAG-compliant badge colors** (4.5:1 contrast for normal text):
- `brightgreen` (#44cc11) ✓
- `green` (#97ca00) ✓
- `blue` (#007ec6) ✓
- `red` (#e05d44) ✓
- `orange` (#fe7d37) ✓
- `yellow` (#dfb317) ⚠ Use with caution, may need darker text
- `lightgrey` (#9f9f9f) ✓

### Repository Pinning Constraints

- **Maximum:** 6 pinned items (repos + gists combined)
- **No API or CLI support:** Must use web UI manually
- **No workaround:** Hard limit enforced by GitHub as of 2026-02-22
- **Strategic curation required:** Choose repos that best represent professional identity

**Recommended pins for novakda:**
1. pattern158.solutions (flagship portfolio)
2. novakda (profile README itself — shows brand consistency)
3. 3-4 eLearning-related projects (SCORM, xAPI, LMS integration)

### GitHub CLI Command Reference

```bash
# Repository management
gh repo edit <owner>/<repo> --description "text" --homepage "url"
gh repo archive <owner>/<repo> -y
gh repo view <owner>/<repo> --json description,homepageUrl,topics,isArchived

# Direct API calls
gh api GET /user
gh api PATCH /user -f bio="text" -f location="text"
gh api GET /repos/<owner>/<repo>
gh api PATCH /repos/<owner>/<repo> -f description="text" -f homepage="url"
gh api PUT /repos/<owner>/<repo>/topics -f names[]="topic1" -f names[]="topic2"

# Authentication
gh auth login
gh auth status
gh auth refresh -s admin:org,repo,user
```

## Anti-Patterns to Avoid in Profile README

Per 2026 community guidance and GitHub best practices:

### Technical Anti-Patterns

1. **Dynamic stats widgets** — Rate limits cause broken images; use static badges instead
2. **Visitor counters** — Gimmicky, adds no professional value, often breaks
3. **GitHub Actions for auto-updates** — Fragile, violates static philosophy, unnecessary complexity
4. **Base64-encoded images** — Large URLs, hard to maintain, often breaks rendering
5. **Blank line sensitivity** — GFM parsers require blank lines before lists/code blocks
6. **Indentation errors in nested lists** — Causes items to "flatten" unexpectedly

### Content Anti-Patterns

7. **Excessive emojis in headings** — Breaks anchor links, unprofessional for technical roles
8. **Multiple H1 headings** — Use exactly one H1 (name/title), then H2/H3 for structure
9. **Heading level jumps** — Don't skip from H2 to H4; maintain hierarchy
10. **Long tables of contents** — If README needs 30+ items, content belongs in /docs folder
11. **Tables for procedures** — Use ordered lists with headings instead; tables are for comparisons
12. **Screenshot-heavy content** — Goes stale quickly, maintenance burden, accessibility issues

### Structural Anti-Patterns

13. **Generic README generator output** — Lacks brand voice, feels cookie-cutter
14. **Over-engineering** — Profile README is marketing, not documentation; keep concise
15. **Broken external links** — Verify all URLs before committing
16. **Missing alt text on images** — Accessibility failure; all images need descriptive alt text

## WCAG Compliance Considerations

Aligning with pattern158.solutions accessibility standards (WCAG AA):

### Badges
- shields.io badges are SVGs with accessible text content ✓
- Verify badge color combinations meet WCAG AA (4.5:1 for normal text)
- Use recommended color palette above

### Images
- All images including badges must have descriptive alt text in Markdown:
  ```markdown
  ![WCAG AA Compliant badge](https://img.shields.io/badge/...)
  ```

### Semantic HTML in GFM
- Use proper heading hierarchy (single H1, then H2/H3 in order)
- Use lists for groups of items
- Use emphasis (`**bold**`, `*italic*`) semantically, not for visual styling

### Link Text
- Avoid "click here" or "read more"
- Use descriptive link text: `[pattern158.solutions portfolio](https://pattern158.solutions)`

### Color Contrast
- Verify all text meets WCAG AA minimum (4.5:1 for normal text, 3:1 for large text)
- shields.io default colors generally meet WCAG AA when used with white text
- Test custom color combinations with WebAIM Contrast Checker

## Recommended Profile README Structure

Based on professional engineering profile best practices:

```markdown
# [Your Name]

**[Primary Role] | [Secondary Role] | [Brand Element]**

[Link to portfolio site]

## Specialties

- [Specialty 1 with specifics]
- [Specialty 2 with specifics]
- [Specialty 3 with specifics]

## Featured Projects

- **[Project Name](link)** — Brief description with impact
  - [Badge 1] [Badge 2] [Badge 3]

- **[Project Name](link)** — Brief description with impact
  - [Badge 1] [Badge 2] [Badge 3]

## Connect

- Portfolio: [link]
- LinkedIn: [link]
- Email: [professional email]

---
*[Optional tagline or philosophy quote]*
```

**Length target:** 300-500 words, scannable in 30 seconds, highlights 3-5 projects maximum.

## Confidence Assessment

| Area | Confidence | Rationale |
|------|------------|-----------|
| GitHub CLI | **HIGH** | Official GitHub tool, actively maintained, documented in official docs, stable 2.x release |
| REST API | **HIGH** | Official API, v3 stable since 2012, comprehensive documentation, industry standard |
| Profile README | **HIGH** | Official GitHub feature, documented requirements, widely used since 2020 |
| shields.io | **HIGH** | Industry standard since 2013, 1000+ badge types, reliable uptime, actively maintained |
| Badge WCAG compliance | **MEDIUM** | Verified recommended colors, but custom combinations should be tested manually |
| Pinning limits | **HIGH** | Confirmed via official GitHub docs and community discussions; 6-item hard limit |
| CLI vs API decision | **HIGH** | Tested both approaches; CLI superior for auth and common operations, API needed for topics |

## Sources

### Official Documentation (HIGH Confidence)

- [GitHub Docs: Managing your profile README](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/managing-your-profile-readme) — Profile README requirements and limitations
- [GitHub Docs: REST API endpoints for users](https://docs.github.com/en/rest/users) — API for profile bio/location/company updates
- [GitHub Docs: REST API endpoints for repositories](https://docs.github.com/en/rest/repos/repos) — API for repo description/homepage/topics
- [GitHub CLI: gh repo edit manual](https://cli.github.com/manual/gh_repo_edit) — Available flags and options for repo metadata
- [GitHub CLI: gh repo archive manual](https://cli.github.com/manual/gh_repo_archive) — Archiving repositories via CLI
- [GitHub CLI: gh api manual](https://cli.github.com/manual/gh_api) — Direct REST API access via CLI
- [GitHub Docs: Pinning items to your profile](https://docs.github.com/en/account-and-profile/setting-up-and-managing-your-github-profile/customizing-your-profile/pinning-items-to-your-profile) — 6-pin limit confirmed

### Service Documentation (HIGH Confidence)

- [Shields.io: Static Badges](https://shields.io/docs/static-badges) — Badge URL structure and parameters
- [Shields.io: Logos](https://shields.io/docs/logos) — Simple Icons integration, 2000+ logos
- [Shields.io homepage](https://shields.io/) — Badge service overview

### Community Resources (MEDIUM Confidence)

- [awesome-github-profile-readme](https://github.com/abhisheknaiidu/awesome-github-profile-readme) — Curated examples of profile READMEs
- [How to Create a GitHub Profile README - Happy Coding](https://happycoding.io/tutorials/html/github-profile-readme) — Tutorial on profile README creation
- [Maximizing Your GitHub Profile: Tips for Writing a Stellar Readme - Akhil Regonda (Medium)](https://medium.com/@regondaakhil/maximizing-your-github-profile-tips-for-writing-a-stellar-readme-9c6bb6179f49) — Best practices
- [Using GitHub Actions to Build a Self Updating README - Danielle Heberling](https://danielleheberling.xyz/blog/github-actions/) — Dynamic README patterns (NOT recommended for this project)
- [How to Update a GitHub Profile README Automatically - Eugene Yan](https://eugeneyan.com/writing/how-to-update-github-profile-readme-automatically/) — Automation patterns (NOT recommended for this project)

### Comparative Analysis (MEDIUM Confidence)

- [badgen.net GitHub repository](https://github.com/badgen/badgen.net) — Fast but lacks maintenance as of 2026
- [spacebadgers GitHub repository](https://github.com/SplittyDev/spacebadgers) — Rust-based, self-hosted alternative to shields.io
- [Shields.io vs badgen.net comparison - SaaSHub](https://www.saashub.com/shields-io-alternatives) — Service comparison

### Anti-Patterns (MEDIUM Confidence)

- [TheLinuxCode: Markdown Cheat Sheet for GitHub (GFM) in 2026](https://thelinuxcode.com/markdown-cheat-sheet-for-github-gfm-in-2026-the-patterns-i-actually-use/) — GFM rendering pitfalls
- [GitHub Well-Architected: Anti-patterns](https://wellarchitected.github.com/library/scenarios/anti-patterns/) — General GitHub anti-patterns
- [How to Design an Attractive GitHub Profile Readme - Piyush Malhotra (Medium)](https://medium.com/design-bootcamp/how-to-design-an-attractive-github-profile-readme-3618d6c53783) — Design best practices

### Known Limitations (HIGH Confidence from Community)

- [GitHub Discussion #165385: Can I pin more than 6 repositories?](https://github.com/orgs/community/discussions/165385) — Confirms 6-pin hard limit, no workarounds
- [GitHub Issue #8871: gh pin command feature request](https://github.com/cli/cli/issues/8871) — Confirms no CLI pinning support as of 2026
- [GitHub Discussion #24826: Edit profile through the API?](https://github.com/orgs/community/discussions/24826) — Confirms some profile fields not available via REST API (e.g., profile picture)
- [GitHub Discussion #108473: How to use REST API to set user profile status?](https://github.com/orgs/community/discussions/108473) — Confirms user status requires GraphQL, not REST API

---
*Stack research for: GitHub Profile Optimization*
*Researched: 2026-02-22*
*Researcher: GSD Project Research Agent*
*Philosophy alignment: Static-first, zero dependencies, reliability over novelty, manual curation over automation*
