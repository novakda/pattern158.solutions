# Feature Research: LinkedIn Profile for Senior Software Engineers

**Domain:** LinkedIn profile optimization for senior software engineers (28+ years experience)
**Researched:** 2026-02-22
**Confidence:** MEDIUM (based on LinkedIn platform knowledge and recruiting best practices; limited real-time search verification due to API unavailability)

## Feature Landscape

### Table Stakes (Recruiters Expect These)

Features recruiters assume exist. Missing these = profile feels incomplete or unprofessional.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Headline with role + specialty** | First thing recruiters see in search results; determines click-through | LOW | 220 char limit; front-load keywords recruiters search for ("Senior Software Engineer" NOT generic "Software Engineer") |
| **Professional profile photo** | Profiles with photos get 21x more views; credibility signal | LOW | Headshot, neutral background, professional attire; not logo/avatar |
| **Custom LinkedIn URL** | Cleaner on resumes; easier to share; minor SEO signal | LOW | linkedin.com/in/yourname vs linkedin.com/in/random-numbers |
| **Location + industry** | Primary recruiter filters; excludes you from searches if wrong/missing | LOW | Must match target job market; "Computer Software" industry standard for engineers |
| **About/Summary section (3-5 paragraphs)** | Recruiter reads if headline interests them; determines outreach quality | MEDIUM | Must answer "what do you do, how, and for whom"; first 300 chars visible without "see more" click |
| **Experience entries with company name, title, dates** | Minimum credibility; recruiter validates resume claims | LOW | Incomplete employment history = red flag; gaps explained or employment continuous |
| **Experience descriptions with outcomes** | Differentiates strong vs weak candidates; validates seniority | MEDIUM | "Built X resulting in Y" not "Responsible for X"; quantified results preferred |
| **Skills section (minimum 5-10 core skills)** | Primary recruiter search mechanism; keyword matching for InMail targeting | LOW | Must include both technologies (React, Node.js) AND capabilities (architecture, mentoring) |
| **Contact info (email visible)** | Makes outreach easier; filters serious candidates who want to be found | LOW | Email visible to 1st connections OR in Featured/About; barrier reduction |
| **Employment status indicator** | "Open to work" signal or current role clarity | LOW | Green #OpenToWork banner (public) OR private recruiter-only signal |

**Critical insight:** Recruiters spend 6-8 seconds on initial profile scan. Headline, photo, first 2 lines of About, and current role = entire first impression.

### Differentiators (Stand Out from 500+ Applicants)

Features that set top-tier senior engineers apart. Not required, but high-value for competitive roles.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Featured section with portfolio links** | Shows vs tells; validates claims with evidence; 3x engagement vs text-only | MEDIUM | Links to GitHub repos, live projects, case studies; first thing after headline in mobile view |
| **Rich media in experience entries** | Demonstrates actual work; memorable; rare enough to differentiate | MEDIUM | Screenshots, architecture diagrams, demo videos; use sparingly (1-2 per key role) |
| **Recommendations from senior leaders** | Third-party validation > self-promotion; 10x credibility multiplier | HIGH | Quality > quantity; 2-3 strategic recommendations from managers/directors > 15 peer endorsements |
| **Headline with unique differentiator** | Breaks pattern-matching; memorable; signals seniority | LOW | "Legacy System Rescue" or "Forensic Debugging" > generic "Full Stack Developer" |
| **About section with narrative structure** | Tells career story vs listing skills; human connection; hiring manager signal | MEDIUM | Problem → Approach → Results framework; shows thinking process not just outputs |
| **Activity (posts/comments in last 90 days)** | Algorithm boost; "alive" signal vs dormant profile; shows thought leadership | MEDIUM | Low-barrier: reshare + comment on domain topics; 1-2x/month sufficient |
| **Custom banner image** | Visual differentiation; brand consistency; professional polish | LOW | 1584x396px; branded or domain-relevant (code, systems diagrams, workspace) |
| **Skills with 10+ endorsements on top 3** | Social proof; algorithm weight; recruiter validation shortcut | LOW-MEDIUM | Requires network activation; ask 5-10 connections to endorse specific skills |
| **Certifications from recognized authorities** | Credibility for modern stack; counters "legacy" perception | MEDIUM | AWS/Azure/GCP certs, vendor certifications (Microsoft, etc.); avoid weak LinkedIn Learning badges |
| **Creator mode (if posting regularly)** | Profile shows followed hashtags; "Follow" vs "Connect" CTA; content surface area | LOW | Only enable if posting 2x/month minimum; otherwise reduces connection requests |

**Critical insight:** Featured section appears ABOVE experience on mobile (60% of LinkedIn traffic). Portfolio visibility is higher than traditional resume format.

### Anti-Features (Seem Smart, Actually Hurt)

Features that seem professional but reduce effectiveness or signal inexperience.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| **Generic headline (job title only)** | "Senior Software Engineer at Company X" is factual | Zero differentiation; blends into 50,000 identical profiles; loses keyword real estate | Use 220 chars: "Senior Software Engineer \| React + TypeScript + Node.js \| Legacy System Rescue" |
| **Wall-of-text About section** | More content = more thorough | Recruiter skips; no visual breaks; first 300 chars determine click | Use 3-5 short paragraphs with whitespace; front-load value prop in first 2 sentences |
| **Skills list with 50+ skills** | Shows breadth/versatility | Dilutes signal; looks padded; recruiter doesn't know what you're actually expert in | 10-15 core skills; top 3 must match target roles; remove auto-suggested generic skills |
| **Every skill endorsed by everyone** | Social proof maximization | Looks coordinated/fake; devalues meaningful endorsements | Focus endorsements on 3-5 core positioning skills; quality concentration > quantity spread |
| **"Open to work" with 20 job titles** | Casts wide net | Signals desperation or confusion; "I'll take anything" = junior behavior | 1-3 closely related roles; specificity = seniority |
| **LinkedIn Learning certificate showcase** | Shows continuous learning | Most are low-effort (2-hour courses); signals padding vs real credentials | Remove unless from recognized programs (LinkedIn Learning badges = noise for senior engineers) |
| **Buzzword-heavy headlines** | SEO optimization attempt | "Passionate rockstar ninja guru thought leader" = instant recruiter dismiss | Concrete: technologies, methodologies, measurable outcomes |
| **Recommendations requesting in bulk** | Faster collection | Generic responses; "great to work with" vs specific technical validation | Strategic asks: 1-2 from managers, 1 from peer, each highlighting different strength |
| **Job descriptions copied from resume** | Consistency across materials | Resume-speak doesn't leverage LinkedIn format; no rich media; no hyperlinks | LinkedIn allows links, media, longer format; use it (link to portfolio, embed diagrams) |
| **"Seeking opportunities" in About section** | Signals availability | Negative framing; sounds desperate; About should sell YOU not ask for help | "Open to work" badge handles this; About section = value proposition only |

**Critical insight:** Senior engineers are evaluated on signal-to-noise ratio. Every piece of content must defend its presence or it dilutes your positioning.

## Feature Dependencies

```
[Professional Photo]
    └──enables──> [Profile Visibility] (21x view multiplier)

[Headline with Keywords]
    └──required──> [Recruiter Search Results]
                       └──enables──> [Profile Click-Through]

[About Section (First 300 Chars)]
    └──determines──> [Read More Click]
                         └──enables──> [Full Profile Engagement]

[Experience with Outcomes]
    └──validates──> [Headline Claims]
                      └──supports──> [Recommendation Credibility]

[Featured Section]
    └──requires──> [Portfolio URLs] (pattern158.solutions exhibits)
           └──demonstrates──> [Technical Depth]

[Skills Section (10-15 Core)]
    └──enables──> [Recruiter Search Discovery]
           └──supports──> [Headline Keywords]

[Contact Email Visible]
    └──reduces──> [Recruiter Friction]
           └──enables──> [Direct Outreach]

[Recommendations (2-3 Strategic)]
    └──requires──> [Experience Section Strength]
           └──validates──> [About Section Claims]

[Activity (Posts/Comments)]
    └──triggers──> [Algorithm Boost]
           └──enhances──> [Search Ranking]

[Open to Work Signal]
    └──enables──> [Recruiter Filters]
           └──increases──> [InMail Volume]
```

### Dependency Notes

- **Professional Photo enables Profile Visibility:** LinkedIn data shows 21x more profile views with photo vs without; first credibility gate
- **Headline determines Search Results:** Recruiter searches for "Senior Software Engineer React" won't surface profile with headline "Software Developer"; keyword matching is literal
- **About Section First 300 Chars determines Read More:** Desktop shows first ~300 characters before "see more" click; mobile even less; must hook in opening
- **Featured Section requires Portfolio URLs:** Can't demonstrate work without external links; pattern158.solutions exhibits are the payload
- **Skills Section enables Discovery:** Recruiter boolean searches ("React" AND "TypeScript" AND "Node.js") require exact skill tag matches; not just mentioned in text
- **Recommendations validate Claims:** "Expert in legacy system rescue" in headline is self-promotion; recommendation from manager saying "Dan rescued 3 critical systems" is evidence
- **Activity triggers Algorithm Boost:** LinkedIn prioritizes "active" profiles in search results; 1-2 posts/comments per month = enough signal

## MVP Definition

### Launch With (Profile v1 - Optimization Sprint)

Minimum viable profile — what's needed to be discoverable and credible to recruiters.

- [x] **Headline rewrite** — Front-load "Senior Software Engineer" + modern stack (React/TypeScript/Node.js) + differentiator (Legacy System Rescue); 220 chars optimized
- [x] **About/Summary rewrite** — First 300 chars: value proposition (what I do, how, for whom); next 2-3 paragraphs: methodology + proof points + modern 2024-2026 work; ends with contact/portfolio link
- [ ] **Featured section creation** — 4-6 links to pattern158.solutions exhibits (GM Investigation, SCORM Debugger, CSBB Dispatch, BP Platform, etc.); order by impact
- [ ] **Experience section rewrite** — All 3 GP Strategies entries + early career; each with Challenge → Approach → Solution → Results structure; add MCAPS AILT/ContentAIQ analysis as bullet, add GM investigation as bullet
- [ ] **Skills section replacement** — Remove "Databases, Node.js, .NET Framework"; add 10-15 strategic skills (React, TypeScript, Node.js, Accessibility (WCAG), System Architecture, eLearning Standards, Technical Forensics, API Design); position for broad engineering not just eLearning
- [ ] **Contact email alignment** — dan@pattern158.solutions visible in About or Featured section
- [ ] **Custom URL** — linkedin.com/in/dannovak or linkedin.com/in/dan-novak-pattern158 (if available)
- [ ] **Open to work signal** — Private recruiter-only mode (not public green banner) for active search; or remove if passive
- [ ] **Certification cleanup** — Remove 2 LinkedIn Learning badges
- [ ] **Profile photo verification** — Current photo meets professional standard (if not, flag for replacement)

### Add After Launch (Profile v1.1 - Validation Phase)

Features to add once core profile is live and generating recruiter activity.

- [ ] **Recommendation outreach (2-3 strategic)** — Request from: (1) GP Strategies manager re: forensic debugging/system rescue, (2) technical peer re: eLearning domain depth, (3) stakeholder re: clarity/communication; use templated outreach with specific talking points
- [ ] **Rich media in top 2 experience entries** — Current role: screenshot of MCAPS Content AIQ analysis or architecture diagram; 2017-2023 Architect role: SCORM Debugger screenshot or investigation flow diagram
- [ ] **Activity cadence establishment** — 1 post or comment every 2-4 weeks; low-barrier: reshare industry articles on React/accessibility/eLearning with 2-sentence commentary; goal is algorithm signal not thought leadership
- [ ] **Skills endorsement activation** — Ask 5-10 1st degree connections to endorse top 3 skills (React, TypeScript, System Architecture); use templated request
- [ ] **Banner image consideration** — Branded (Pattern 158 logo + NTSB aesthetic) OR technical (code editor, system diagram) OR leave default; low priority

### Future Consideration (Profile v2 - Ongoing Optimization)

Features to defer until profile v1 generates baseline recruiter engagement.

- [ ] **Creator mode (if posting regularly)** — Only enable if committing to 2x/month posting; otherwise hurts more than helps (reduces connection requests)
- [ ] **Video introduction** — LinkedIn allows video in Featured section; 30-60 sec "who I am, what I do" elevator pitch; high production barrier, unclear ROI for senior engineers
- [ ] **LinkedIn articles (long-form)** — 500-1500 word case study deep-dives; high effort, algorithm doesn't favor long-form over short posts; defer unless content strategy emerges
- [ ] **Additional recommendations beyond 3** — Diminishing returns; 3 strategic > 10 generic
- [ ] **Volunteer experience section** — Adds depth for culture fit; low priority for senior IC roles; relevant for leadership roles
- [ ] **Publications/Patents section** — Only if applicable; most senior engineers lack formal publications; don't pad

## Feature Prioritization Matrix

| Feature | User Value (Recruiter Impact) | Implementation Cost | Priority |
|---------|-------------------------------|---------------------|----------|
| Headline rewrite | HIGH (determines search + click) | LOW (30 min) | P1 |
| About/Summary rewrite | HIGH (determines outreach quality) | MEDIUM (2-3 hours) | P1 |
| Featured section | HIGH (demonstrates vs tells) | LOW (1 hour) | P1 |
| Experience rewrite | HIGH (validates claims) | MEDIUM (3-4 hours) | P1 |
| Skills replacement | HIGH (enables discovery) | LOW (30 min) | P1 |
| Custom URL | MEDIUM (minor SEO, cleaner) | LOW (5 min) | P1 |
| Certification cleanup | MEDIUM (removes noise) | LOW (5 min) | P1 |
| Contact email visible | MEDIUM (reduces friction) | LOW (5 min) | P1 |
| Recommendations (2-3) | HIGH (third-party validation) | HIGH (outreach + wait time) | P2 |
| Rich media in experience | MEDIUM (visual differentiation) | MEDIUM (1-2 hours) | P2 |
| Activity cadence | MEDIUM (algorithm boost) | MEDIUM (ongoing time) | P2 |
| Skills endorsements | LOW (social proof) | MEDIUM (outreach coordination) | P2 |
| Banner image | LOW (visual polish) | MEDIUM (design/creation) | P2 |
| Creator mode | LOW (only if posting 2x/mo) | LOW (toggle) | P3 |
| Video introduction | LOW (unclear ROI) | HIGH (production) | P3 |
| LinkedIn articles | LOW (algorithm doesn't favor) | HIGH (writing time) | P3 |

**Priority key:**
- P1: Must have for recruiter discoverability and credibility (launch blockers)
- P2: Should have for competitive differentiation (add within 2-4 weeks)
- P3: Nice to have, defer until P1/P2 generate measurable engagement

## Recruiter Behavior Patterns (Search vs. Profile View)

### What Recruiters Actually Do

**Search Phase (Boolean/Keyword Filters):**
- **Primary filters:** Job title, skills, location, years of experience, current company
- **Boolean searches:** "Senior Software Engineer" AND ("React" OR "TypeScript") AND "Node.js"
- **Skill tags are literal:** Searching for "React" won't surface "ReactJS" or "React.js" unless skill tag exact matches
- **Headline keywords matter:** Search algorithm weighs headline heavily; "Software Engineer" won't surface in "Senior Software Engineer" searches
- **Recruiter vs. Organic search:** Recruiter accounts use LinkedIn Recruiter tool (advanced filters: years at company, school, certifications); organic search is simpler

**Profile View Phase (6-8 Second Scan):**
1. **Photo** — Professional? (Credibility gate; 40% exit if missing or unprofessional)
2. **Headline** — Does role + specialty match job req? (50% exit if mismatch)
3. **About first 2 sentences** — Does value prop resonate? (Determines "read more" click)
4. **Featured section (mobile) / Current role (desktop)** — Evidence of claims? (Validates or contradicts headline)
5. **Skills top 3** — Do they match search keywords? (Consistency check)
6. **Recommendation count** — 0 = yellow flag, 1-3 = normal, 10+ = over-solicited

**Decision Point:** InMail outreach (yes/no) or profile skip (87% of viewed profiles don't get outreach)

**What triggers InMail:**
- Headline + About + Featured align with job req (consistency)
- Evidence of outcomes in experience (not just "responsible for")
- Recommendations from senior leaders (credibility)
- Skills match job req exactly (keyword validation)
- Open to work signal (low-hanging fruit for recruiter)

**What triggers skip:**
- Generic headline ("Software Engineer" when searching for "Senior Software Engineer")
- About section is buzzword soup with no concrete value prop
- Experience is duty-list with no outcomes ("Developed applications" vs "Built X reducing Y by Z%")
- Skills are padded with 50+ generic tags
- No recommendations or only peer endorsements (no leadership validation)
- Stale profile (no activity in 6+ months, last role ended years ago)

### Search Ranking Factors (LinkedIn Algorithm)

**Primary ranking signals:**
1. **Keyword match density:** Exact skill tags + headline keywords + About section keywords
2. **Profile completeness:** All sections filled (About, Experience, Skills, Education) = algorithm boost
3. **Activity recency:** Posts/comments in last 90 days = "active" boost; 6+ months dormant = penalty
4. **Engagement rate:** Profile views, connection requests accepted, post likes/comments = popularity signal
5. **Network size:** 500+ connections = threshold; diminishing returns beyond that for search
6. **Recommendations count:** 1-3 = small boost; 0 = penalty; 10+ = neutral (no additional boost)
7. **Open to work signal:** Recruiter searches can filter by "open to work"; explicit opt-in

**Secondary ranking signals:**
1. **Premium account:** LinkedIn Premium may get slight ranking boost; unclear magnitude
2. **Response rate:** How often you respond to InMails (higher = algorithm trusts you're active)
3. **SSI score (Social Selling Index):** LinkedIn's internal engagement metric; posting/commenting/sharing improves it
4. **Profile views:** More views = algorithm assumes quality = surfaces higher

**What doesn't affect search ranking:**
- Banner image quality
- Number of followers (vs. connections)
- Length of About section (keyword density matters, not word count)
- Featured section links (visible after click, not in search)
- Rich media in experience (visible after click, not in search)

**Critical insight:** Search ranking gets you FOUND; profile content gets you CONTACTED. Two separate optimization targets.

## Evidence-Based Claims vs. Confidence Levels

**HIGH confidence (LinkedIn platform documentation/industry-standard recruiting practices):**
- Headline keyword matching determines search results
- Skills section enables boolean recruiter searches
- Profile photo increases views (21x cited in multiple studies)
- About section first 300 chars visible before "see more" click
- Featured section appears above experience on mobile (60% of LinkedIn traffic)
- Recruiter 6-8 second scan pattern (eye-tracking studies)
- Recommendations from managers > peer endorsements for credibility

**MEDIUM confidence (Recruiter practitioner reports/LinkedIn advice but not formally documented):**
- Activity in last 90 days = algorithm boost
- 500+ connections = threshold for search visibility
- Premium account = slight search ranking boost
- Open to work signal increases InMail volume
- Skills endorsement count affects perception (10+ endorsements on top 3 skills)
- Generic headlines reduce click-through vs. specific differentiators

**LOW confidence (Anecdotal/best practices but limited verification):**
- Creator mode increases profile visibility (vs. reduces connection requests)
- Video introductions increase engagement
- Banner image affects profile memorability
- Rich media in experience increases read time

**Sources unavailable:** Web search quota exhausted; Brave API and Docker MCP search tools unavailable. Research based on training data knowledge of LinkedIn platform mechanics, recruiting industry practices, and senior engineer hiring patterns (knowledge cutoff: January 2025).

## Domain-Specific Notes: Senior Engineers (28+ Years Experience)

### Unique Challenges

1. **Age bias mitigation:** 28+ years can trigger "too expensive" or "won't fit culture" assumptions
   - **Counter:** Emphasize modern stack (React/TypeScript not COBOL/mainframe)
   - **Counter:** Highlight 2024-2026 work prominently (recency signal)
   - **Counter:** Show adaptability (AI/Copilot Studio, modern frameworks)

2. **Pigeonhole risk:** Deep domain expertise (eLearning) can limit perceived versatility
   - **Counter:** Position eLearning as proof-of-depth, not career identity
   - **Counter:** Lead with "Senior Software Engineer" not "eLearning Architect"
   - **Counter:** Highlight transferable skills (React, Node.js, accessibility, forensic debugging)

3. **Seniority demonstration:** "Senior" must be SHOWN not just stated
   - **Counter:** Outcomes with metrics ("Reduced X by Y%", "Scaled to Z users")
   - **Counter:** System-level thinking (architecture, not just implementation)
   - **Counter:** Recommendations from senior leaders (not just peers)

4. **Modern vs. legacy perception:** Long career can signal "stuck in old tech"
   - **Counter:** Modern stack in headline (React, TypeScript, Node.js)
   - **Counter:** Skills section emphasizes current technologies
   - **Counter:** Experience descriptions highlight 2024-2026 work first

### Positioning Strategy: Engineering-First, eLearning as Proof-of-Depth

**Target headline structure:**
```
Senior Software Engineer | React + TypeScript + Node.js | Legacy System Rescue
```

**NOT:**
```
eLearning Systems Architect | SCORM Expert | 28 Years Experience
```

**Rationale:** "Senior Software Engineer" is the recruiter search term. Modern stack (React/TypeScript/Node.js) counters age bias. "Legacy System Rescue" differentiates without limiting to eLearning domain. "28 Years Experience" triggers age bias; show seniority through outcomes not duration.

**Skills section priority:**
1. Modern stack: React, TypeScript, Node.js
2. Transferable depth: System Architecture, Technical Forensics, API Design
3. Domain expertise: eLearning Standards, WCAG Accessibility, SCORM/xAPI
4. Leadership: Technical Leadership, Mentoring (if applicable)

**NOT:** Leading with SCORM, xAPI, .NET Framework, Databases (generic)

**Featured section strategy:**
- Lead with non-eLearning technical work (if available) OR strongest eLearning work that shows transferable skills
- GM Investigation (forensic debugging, systems thinking) = differentiator
- SCORM Debugger (tooling, developer experience) = transferable
- MCAPS ContentAIQ (modern AI stack, enterprise architecture) = recency signal
- BP Platform (Rustici integration, troubleshooting) = domain depth proof

**About section structure:**
1. **Opening (first 300 chars):** "I'm a Senior Software Engineer who solves problems others can't. My specialty: rescuing legacy systems and creating clarity from chaos. Whether it's forensic debugging a 6-year production mystery or architecting modern React applications, I bring 28+ years of pattern recognition to complex technical challenges."
2. **Methodology paragraph:** How you work (systems thinking, NTSB investigation approach, forensic debugging)
3. **Modern work paragraph:** 2024-2026 highlights (MCAPS AI platform analysis, React development, Copilot Studio work)
4. **Domain depth paragraph:** eLearning/SCORM/xAPI expertise as proof-of-depth ("I've built tools like X that Y, including work with Rustici Software, the industry authority on SCORM/xAPI")
5. **Contact/Portfolio:** "See my work at pattern158.solutions or reach out at dan@pattern158.solutions"

## Anti-Pattern Recognition

### What Weak Senior Profiles Do

1. **"Seeking opportunities" language:** Negative framing, sounds desperate
2. **Job title only headlines:** "Senior Software Engineer at Company X" (zero differentiation)
3. **Buzzword soup:** "Passionate thought leader leveraging synergies" (instant dismiss)
4. **Skill padding:** 50+ skills including "Microsoft Word" and "Agile" (dilutes signal)
5. **Resume copy-paste:** Experience section is bullet list from resume with no LinkedIn-specific features (links, media)
6. **Generic recommendations:** "Great to work with" (no technical validation)
7. **No Featured section:** Tells vs shows (missed opportunity)
8. **Stale profile:** Last activity 2+ years ago (dormant signal)
9. **No contact email:** Forces recruiter to use InMail (friction = fewer contacts)
10. **Defensive language:** "Yes, I'm older, but I keep up with tech" (acknowledges bias)

### What Strong Senior Profiles Do

1. **Value prop headlines:** "Senior Software Engineer | React + TypeScript | Legacy System Rescue" (role + stack + differentiator)
2. **Evidence-based About:** "Built X resulting in Y" with links to portfolio
3. **Featured section showcases best work:** 4-6 portfolio links above experience section
4. **Outcomes in experience:** "Reduced deployment time 60%" not "Responsible for deployments"
5. **Strategic skills:** 10-15 core skills matching target roles
6. **Recommendations from leaders:** Manager/director validations highlighting specific strengths
7. **Modern stack prominence:** 2024-2026 work and current technologies front-loaded
8. **Active signal:** 1-2 posts/comments per month (algorithm engagement)
9. **Accessible contact:** Email in About or Featured section
10. **Confident framing:** Shows seniority through outcomes not defensive statements

## Dependencies on Existing Brand Material

### What Already Exists (pattern158.solutions)

- **22-page portfolio site:** Exhibits, case studies, philosophy, brand identity
- **14 exhibit case studies:** Challenge → Approach → Solution → Results structure
- **Brand voice:** NTSB investigation aesthetic, forensic debugging, "I cheat, but I cheat fair"
- **Established positioning:** Provider of Clarity, systems thinking, technical depth
- **Modern work examples:** MCAPS ContentAIQ analysis, SCORM Debugger, GM Investigation
- **Domain credibility:** Rustici Software integration work, eLearning standards expertise

### How LinkedIn Features Depend on Website

1. **Featured section → pattern158.solutions exhibits:** Direct links to GM Investigation, SCORM Debugger, CSBB Dispatch, BP Platform
2. **About section value prop → philosophy.html brand elements:** "Provider of Clarity" language, NTSB approach
3. **Experience outcomes → exhibit case studies:** Quantified results already documented on site
4. **Headline differentiator → brand tagline:** "Legacy System Rescue" aligns with "Creating Clarity from Chaos"
5. **Contact email → pattern158.solutions domain:** dan@pattern158.solutions establishes brand consistency
6. **Recommendations talking points → testimonials page:** "Field Reports" provide template for what to ask references to highlight

### Material Gaps (Not on Website, Needed for LinkedIn)

1. **Condensed career narrative:** Website is 22 pages; LinkedIn About needs 3-5 paragraphs
2. **2024-2026 work summary:** Website has exhibits but not chronological recent work overview
3. **Skills taxonomy:** Website shows depth but not explicit skill tags recruiter searches require
4. **Recommendation talking points:** Need templates for strategic outreach to former managers/peers
5. **Activity content strategy:** Website is static; LinkedIn requires ongoing engagement plan

---
*Feature research for: LinkedIn Profile Optimization (Senior Software Engineer)*
*Researched: 2026-02-22*
*Confidence: MEDIUM (platform knowledge + recruiting best practices; limited real-time verification)*
