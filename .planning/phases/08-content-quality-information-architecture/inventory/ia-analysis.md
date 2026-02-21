# Information Architecture Analysis
**Generated:** 2026-02-21
**Pages Analyzed:** 16 public pages
**Data Sources:** content-inventory.csv, grammar-report.txt, duplicate-report.txt, manual HTML review

---

## 1. Page Roles Assessment

### index.html — Homepage
**Current Role:** Multi-purpose landing page with hero, intro, featured projects (NTSB-style), field reports teaser, and philosophy section. 507 lines of HTML, 19 content sections.

**Ideal Role (per CONTEXT.md):** Hook and route. Quick credibility, funnel to depth, minimal scrolling.

**Gap:** Currently too long for "hook and route" model. Homepage attempts to do too much: full philosophy explanation, three detailed featured projects, testimonial section. User decision was "Index (homepage) is too long."

**Content Placement Issues:**
- Philosophy section duplicates philosophy.html content
- Three featured projects are detailed enough to be mini-exhibits
- Field reports teaser is good but could be streamlined

**Recommended Action:** RESTRUCTURE
- Keep: Hero, brief intro (4 specialty cards), 3 featured projects as summary cards (not full detail)
- Trim: Philosophy section (just tagline + link to full page)
- Trim: Field reports teaser (2 quotes → 1 quote + CTA)
- Add: Explicit 30-second scan path for hiring managers (visual hierarchy)
- Target: Reduce from 19 sections to ~10 sections

---

### philosophy.html — Philosophy Page
**Current Role:** Core brand identity page. Explains brand elements, work methodology, Pattern 158 origin story, five influences, testimonials. 409 lines, 25 sections.

**Ideal Role (per CONTEXT.md):** Culture fit filter. Methodology/values. Core page, central to site identity.

**Gap:** MINIMAL. This page aligns well with its intended role. Deep explanations of influences, clear methodology (Deconstruct/Build/Empower), strong NTSB connection.

**Content Placement Issues:** NONE significant.

**Proprietary Content Flags:**
- GM course completion investigation mentioned (line 212) — currently okay, general description
- Pattern 158 origin story reveals specific thinking patterns — this is intentional and valuable

**Recommended Action:** KEEP AS-IS with minor polish
- Grammar cleanup (15 suggestions from write-good: "just" × 4, "it was/it is" × 3, "methodology" × 2)
- Strengthen authoritative voice where conversational ("just" → remove or rephrase)
- Excellent cross-references to exhibits (J, L)

---

### portfolio.html — Portfolio Page
**Current Role:** NTSB "probable cause summaries." High-level project list organized by featured engagements (10 flagship cards) + complete directory (tables by industry). 800 lines, 24 sections.

**Ideal Role (per CONTEXT.md):** Exactly as stated — NTSB probable cause summaries with links to full exhibits.

**Gap:** EXCELLENT alignment. This is the best-structured page on the site.

**Content Placement Issues:** NONE. Structure is sound.

**Recommended Exhibit Ordering (portfolio page):**
Based on story strength and investigation depth:
1. **Electric Boat (Exhibit A)** — Accessibility practice built from zero, became division standard
2. **GM (Exhibit J)** — NTSB-style course completion investigation, perfect storm diagnosis
3. **Power Platform (Exhibit L)** — AI-assisted analysis, vendor departure chaos
4. **GPiLEARN (Exhibit C)** — 2,554 emails, long-term platform work
5. **Wells Fargo (Exhibit D)** — Xyleme migration
6. **HSBC (Exhibit F)** — Global distributed team
7. **Remaining exhibits** (B, G, H, I, K) — assess individually in exhibit audit

**Recommended Action:** LIGHT POLISH
- 8 grammar suggestions (mostly "multiple" × 4, "numerous," "really," "approximately") — strengthen voice
- Consider exhibit ordering change (currently appears chronological, not strength-based)
- Flagship card quotes are excellent social proof

---

### technologies.html — Technologies Page
**Current Role:** Comprehensive technology list organized by 6 categories (eLearning Standards, LMS, Authoring Tools, Programming, Platforms, Emerging). Each tech has expertise badge (Deep/Working/Aware), summary, and client tags. 672 lines, 41 sections.

**Ideal Role (per CONTEXT.md):** Audit should determine purpose — skills inventory vs breadth showcase vs something else.

**Analysis:** This is a **breadth showcase** structured for **engineering peer verification**. The expertise badges (Deep/Working/Aware) show honest self-assessment, not resume padding. Client tags provide proof. Category organization is logical.

**Gap:** Purpose is unclear from visitor perspective. Is this "what I know" or "what I can do for you"?

**Recommended Action:** STRENGTHEN with clarity
- Add intro explaining purpose: "Verified technical expertise across 27 technologies, extracted from 28 years of email archives. This isn't a resume skills list—it's documented proof of production work."
- Grammar: 5 suggestions (mostly "Multiple," "Deep Deep" repetition on line 95)
- Fix "Deep Deep" typo in AICC card
- Consider: Do engineering peers need this? YES for credibility verification
- Consider: Does this help hiring managers? PARTIAL — shows breadth but may overwhelm
- Decision: KEEP but clarify intent

---

### faq.html — FAQ Page
**Current Role:** Hiring logistics (3 questions) + technical expertise section (partial read, 150 lines visible). Uses <details> HTML elements for accordion UX.

**Ideal Role (per CONTEXT.md):** Assess — strengthen, merge, or retire.

**Gap:** User decision was "FAQ feels thin." From partial read: only 3 hiring logistics questions visible. Need full content to assess.

**Assessment:** NEEDS FULL READ to determine fate, but initial impression is this addresses practical hiring concerns (availability, rates, remote work). If content is genuinely valuable Q&A that doesn't fit elsewhere, STRENGTHEN. If it's generic filler, RETIRE or MERGE into Contact.

**Recommended Action:** CONDITIONAL
- If FAQ has 8+ substantive, specific questions → STRENGTHEN
- If FAQ has <6 questions or generic content → MERGE best content into contact.html, retire page
- Grammar: Unknown (not in top pages for issues)

**Decision Required:** Full content review in Plan 02.

---

### contact.html — Contact Page
**Current Role:** Email, social links, guidance on "What to Include" when reaching out. 150 lines visible (partial read).

**Ideal Role (per CONTEXT.md):** Action page. Should reference "not a good fit" criteria and types of engagements open to.

**Gap:** From CONTEXT.md decisions: "Contact page should reference 'not a good fit' criteria and types of engagements open to; anti-pattern: no direct employment at billable-hours-first consultancies."

**Current Content (visible):** Practical guidance ("What to Include"). No visible "not a good fit" criteria or engagement types.

**Recommended Action:** STRENGTHEN
- Add section: "Types of Work I'm Open To" (contract, contract-to-hire, full-time with caveat)
- Add section: "Not a Good Fit" (billable-hours-first consultancies, pure people management, keyword-matching commodity roles)
- Add section: "Best Fit Engagements" (legacy rescue, forensic troubleshooting, AI implementation, accessibility, SCORM/LMS)
- Grammar: Not flagged in report (likely clean)

---

### testimonials.html — Field Reports
**Current Role:** Social proof page styled as "field reports." NTSB-inspired presentation: "documented evidence from incident sites." Executive summary stats, then testimonial exhibits organized by engagement. 150+ lines visible.

**Ideal Role (per CONTEXT.md):** Social proof, field reports. Per CONTEXT: "Testimonials sourced from email archives without explicit permission—flag for later, keep as-is for now."

**Gap:** NONE. Role is clear and well-executed.

**Proprietary Content Flags:**
- All testimonials sourced from GP Strategies email archives
- No explicit permission obtained (deferred decision per CONTEXT)
- Most quotes are generic praise, unlikely to be sensitive
- One duplicate found: "Dan Novak 'The Fiddler'" quote appears on both testimonials.html AND exhibits/exhibit-c.html (per duplicate report)

**Content Placement Issues:**
- Duplicate testimonial (see Redundancy Map below)

**Recommended Action:** KEEP AS-IS
- Note testimonial permission issue for future (outside this phase scope)
- Fix duplicate (see Redundancy section)
- Grammar: Not flagged in top issues

---

### Exhibits (11 total: A-D, F-L, no E)

**Individual Exhibit Assessment:**

#### Exhibit A (exhibit-a.html) — [Title TBD from full read]
- 10 sections, ties to Electric Boat per portfolio
- Recommended structure: Investigate during exhibit audit (Plan TBD)

#### Exhibit B (exhibit-b.html)
- 11 sections
- Recommended structure: TBD

#### Exhibit C (exhibit-c.html) — GPiLEARN
- 11 sections
- Contains duplicate testimonial: "Dan Novak 'The Fiddler'" also on testimonials.html
- Recommended: Keep testimonial here (exhibits are full reports), remove from testimonials.html or add context

#### Exhibit D (exhibit-d.html) — Wells Fargo
- 15 sections, mentioned in portfolio
- Recommended structure: TBD

#### Exhibit F (exhibit-f.html) — HSBC
- 13 sections, mentioned in portfolio
- Recommended structure: TBD

#### Exhibit G (exhibit-g.html)
- 20 sections (longest exhibit by section count)
- Recommended structure: TBD

#### Exhibit H (exhibit-h.html)
- 12 sections
- Recommended structure: TBD

#### Exhibit I (exhibit-i.html)
- 22 sections (second longest)
- Recommended structure: TBD

#### Exhibit J (exhibit-j.html) — GM Investigation
- 8 sections
- Explicitly referenced in philosophy.html as textbook NTSB example
- Recommended structure: STRONG investigation model, likely already follows Situation→Investigation→Analysis→Findings→Impact

#### Exhibit K (exhibit-k.html) — [Title TBD]
- 8 sections
- Recommended structure: TBD

#### Exhibit L (exhibit-l.html) — Power Platform
- 7 sections
- Explicitly referenced in philosophy.html (AI/GitHub Spec Kit)
- Recommended structure: TBD

**Exhibit Consolidation Assessment:**
- Insufficient data from inventory alone to recommend consolidation
- Section counts vary 7-22, suggesting different story depths (appropriate)
- No obvious consolidation candidates without reading full content
- Recommendation: DEFER to exhibit-specific audit plan

---

## 2. Audience Journey Mapping

### Audience 1: Hiring Managers (30-second scan)

**Likely Entry:** index.html (Google search, LinkedIn link)

**Expected Path:**
1. Hero (who is this?) →
2. Specialty cards (what does he do?) →
3. ONE featured project (proof) →
4. Decision: dig deeper OR move on

**What They Need:**
- Immediate credibility signal (28 years, enterprise clients)
- Quick categorization (systems architect, legacy rescue, SCORM/LMS expert)
- One concrete example of impact
- Clear next action (LinkedIn, contact)

**Current Gaps:**
- Homepage too long (19 sections, requires scrolling)
- Philosophy section on homepage is noise for 30s scan
- No explicit "30-second path" visual hierarchy

**Friction Points:**
- Myst reference in hero tagline ("I cheat, but I cheat fair") may confuse non-geeks
- Three featured projects = choice paralysis (pick ONE strongest)

**Recommendations:**
- Reduce homepage to 10 sections
- Bold visual hierarchy: Hero → 4 cards → 1 flagship project → CTA
- Move philosophy section entirely to philosophy.html
- Consider adding "TL;DR" callout box at top: "28yr systems architect. I rescue undocumented legacy systems and integrate incompatible platforms. Enterprise clients: Electric Boat, Wells Fargo, HSBC, GM."

---

### Audience 2: Engineering Peers (3-4 minute review)

**Likely Entry:** index.html OR technologies.html (if linked from technical community)

**Expected Path:**
1. index.html (overview) →
2. technologies.html (credential verification) →
3. exhibits/ (deep technical dive on 1-2 projects) →
4. Decision: respect + possible referral OR skepticism

**What They Need:**
- Technical credibility (specific tools, not buzzwords)
- Proof of deep work (not surface-level)
- Problem-solving approach (how he thinks)
- Honest self-assessment (Deep/Working/Aware badges = good signal)

**Current Gaps:**
- technologies.html purpose unclear (is this skills inventory or proof?)
- No explicit "how I think about technical problems" on index (philosophy page has it, but buried)
- Exhibits lack consistent structure (hard to quick-scan for technical depth)

**Friction Points:**
- Philosophy page is excellent but long (25 sections) — engineers may bounce before reaching influences
- NTSB framing may not resonate with all engineers (niche reference)

**Recommendations:**
- Add 1-2 sentences to technologies.html intro explaining "This is proof, not padding"
- Consider adding "Technical Methodology" section to index.html (Deconstruct→Build→Empower, 3 sentences)
- Exhibits should have consistent H2 headings for quick scanning (Challenge, Approach, Solution, Results OR Situation, Investigation, Analysis, Findings, Impact)
- Philosophy page is GOOD for engineers who care about culture fit, keep depth

---

### Audience 3: Potential Clients (full review, 10-20 minutes)

**Likely Entry:** index.html (referral, search, LinkedIn) OR contact.html (direct outreach)

**Expected Path:**
1. index.html (first impression) →
2. portfolio.html (breadth of work) →
3. 2-3 exhibits (depth + proof) →
4. philosophy.html (culture fit, methodology) →
5. testimonials.html (social proof) →
6. contact.html (reach out)

**What They Need:**
- Confidence in capability (breadth + depth)
- Methodology clarity (how does he work?)
- Culture fit assessment (values alignment)
- Risk mitigation (social proof, documented work)
- Clear engagement path (contact, rates, availability)

**Current Gaps:**
- Contact page missing "types of work" and "not a good fit" sections (per CONTEXT.md)
- FAQ fate unclear (if thin, clients lose trust)
- No explicit "artisan not commodity" positioning statement (CONTEXT.md mentions this)

**Friction Points:**
- Portfolio page is LONG (800 lines) — excellent but requires commitment
- Philosophy page culture references (Three Stooges, Harry Potter fanfic) may confuse non-geek clients
- No "how I price work" transparency (FAQ may address this)

**Recommendations:**
- Contact page MUST add "Types of Work" and "Not a Good Fit" sections
- Consider adding testimonial snippets to portfolio flagship cards (already done — GOOD)
- Philosophy page: Add TL;DR at top for time-pressed clients: "I use forensic engineering methodology (inspired by NTSB accident investigation) to diagnose system failures, then build reusable tools to prevent entire categories of problems."
- FAQ: If thin, merge practical Q&A into contact.html

---

## 3. Redundancy Map

### Exact Duplicates (per duplicate-report.txt)

**1. "Dan Novak 'The Fiddler'" testimonial**
- **Appears on:** testimonials.html AND exhibits/exhibit-c.html
- **Content:** "Dan Novak "The Fiddler" (Automation) — Dan gets this name not only because he makes extensive use of the Fiddler application to help us troubleshoot c..."
- **Canonical Location:** exhibits/exhibit-c.html (GPiLEARN exhibit — this is context-specific)
- **Recommendation:** REMOVE from testimonials.html. This quote is tightly coupled to GPiLEARN project work. If testimonials.html needs a GPiLEARN quote, use a different one from the 2,554 email archive, or add context: "On GPiLEARN troubleshooting (see Exhibit C):"

---

### Near Duplicates (per duplicate-report.txt)

**1. "Dan, thank you for being such a team player..." testimonial**
- **Appears on:** philosophy.html AND portfolio.html
- **Content (philosophy):** "Dan, thank you for being such a team player with the GP team and the client, and thank you for your incredible knowledge and expertise."
- **Content (portfolio):** ""Dan, thank you for being such a team player with the GP team and the client, and thank you for your incredible knowledge and expertise."" (extra quotation marks)
- **Canonical Location:** portfolio.html (Entergy flagship card — context-specific)
- **Recommendation:** ALLOW echo on philosophy.html (different context: philosophy page uses it as general praise, portfolio uses it for Entergy-specific work). Fix quotation mark formatting on portfolio.html.

---

### Content Echoes (Manual Review)

**Philosophy Section on index.html vs philosophy.html**
- **index.html:** Has full philosophy section (Brand Elements in visual list, Cheat/Fair columns, Influences list)
- **philosophy.html:** Has same content but with deeper explanations
- **Recommendation:** CONSOLIDATE. Remove philosophy section from index.html entirely. Replace with single tagline + link: "Philosophy: I cheat, but I cheat fair. [Learn more →]"

**Featured Projects on index.html vs portfolio.html**
- **index.html:** 3 detailed "Finding" cards (Cross-Domain SCORM, Legacy CMS Rescue, Enterprise AI Agent)
- **portfolio.html:** Same 3 projects appear in flagship cards with more detail
- **Recommendation:** ALLOW echo but REDUCE detail on index.html. Featured projects should be 2-3 sentence summaries with "Full investigation report →" links, not full Analysis/Solution/Outcome sections.

---

## 4. Content Placement Issues

### Deep Technical Details on index.html (Wrong Page)

**Issue:** Homepage featured projects include technical implementation details appropriate for exhibits, not homepage summary.

**Examples:**
- "Engineered cross-domain communication using EasyXDM. Built SCORM API proxy for transparent AICC/SCORM protocol translation."
- "Decompiled Java/JSP packages to understand system behavior."
- "Built data pipeline converting eLearning course materials into structured JSON."

**Recommendation:** Move detail to exhibits. Homepage should say WHAT was solved (business impact), not HOW (implementation).

**Revised Homepage Featured Project Template:**
```
[Finding Label]
[Project Name]
[Date | Status]

Problem: [1 sentence]
Solution: [1 sentence, outcome-focused]
Impact: [1 sentence, metric if available]

[Tech tags]
[Link to exhibit]
```

---

### Generic Language on philosophy.html (Strengthen or Remove)

**Issue:** Per grammar-report.txt, philosophy.html has 15 write-good suggestions, mostly weakening words ("just" × 4, "it was" × 3, "methodology" × 2).

**Examples:**
- "Don't just fix individual bugs" → "Don't fix individual bugs"
- "it was a tracking bug" → rephrase for strength
- "you just have to see" → "you have to see"

**Recommendation:** Remove weakening words. Philosophy page is CORE identity — every word should be authoritative, not conversational.

---

### Technology Lists Without Context (technologies.html)

**Issue:** technologies.html has excellent structure (expertise badges, client tags) but no clear purpose statement.

**Current intro:** "27 technologies documented across 28 years of email archives"

**Recommended intro:**
"Verified technical expertise across 27 technologies, extracted from 28 years of email archives. This isn't a resume skills list—it's documented proof of production work. Client tags show WHERE each technology was used. Expertise badges (Deep/Working/Aware) show honest self-assessment based on actual engagement depth."

**Impact:** Clarifies purpose for all three audiences (hiring managers: proof not padding, engineers: credential verification, clients: capability breadth).

---

## 5. Exhibit Assessment

### General Observations (from inventory data)

- Section counts range 7-22 (appropriate variance for different story depths)
- Exhibits J and L explicitly cross-referenced in philosophy.html (GOOD)
- Duplicate testimonial in Exhibit C (addressed in Redundancy section)
- No consistent structure visible from section headings alone (requires full content read)

### Recommended Structure Variants (per CONTEXT.md)

**Standard Structure (for clean success stories):**
1. Challenge
2. Approach
3. Solution
4. Results
5. Technologies (summary list)

**Investigation-Inspired Structure (for discovery-heavy, diagnostic work):**
1. Situation (context, what appeared to be wrong)
2. Investigation (forensic process, data gathering)
3. Analysis (root cause identification)
4. Findings (what was actually wrong, contributing factors)
5. Impact (what changed, lessons learned)
6. Technologies (summary list)

**Long-Running Engagement Structure (for multi-year projects):**
1. Context (client, timeline, business need)
2. Evolution (phases of work over time)
3. Key Contributions (role-specific highlights)
4. Representative Incidents (2-3 mini-investigations)
5. Lasting Impact
6. Technologies

### Per-Exhibit Recommendations

**HIGH PRIORITY (referenced in philosophy, use as templates):**

- **Exhibit J (GM Investigation):** SHOULD use Investigation-Inspired structure (textbook NTSB example per philosophy.html)
- **Exhibit L (Power Platform):** SHOULD use Investigation-Inspired structure (vendor departure chaos, AI-assisted diagnostics)
- **Exhibit A (Electric Boat Accessibility):** SHOULD use either Standard OR Evolution structure (practice built from zero → division standard)

**MEDIUM PRIORITY (mentioned in portfolio):**

- **Exhibit C (GPiLEARN):** SHOULD use Long-Running structure (2011-2020, 2,554 emails, platform evolution)
- **Exhibit D (Wells Fargo):** SHOULD use Standard structure (migration project, clean scope)
- **Exhibit F (HSBC):** SHOULD use Long-Running structure (5 years, global team)

**LOWER PRIORITY (assess during full audit):**

- Exhibits B, G, H, I, K: Require full content read to determine best structure

### Exhibit Depth Recommendations

**Per CONTEXT.md:** "Length varies by project—stronger stories get more space."

Based on philosophy.html cross-references and portfolio positioning:

- **Most Space:** Exhibits J (GM), L (Power Platform), A (Accessibility) — these are signature stories
- **Medium Space:** Exhibits C (GPiLEARN), F (HSBC), D (Wells Fargo) — long engagements, solid proof
- **Variable Space:** Remaining exhibits — assess story strength during content audit

### Exhibit Consolidation

**Current Assessment:** INSUFFICIENT DATA to recommend consolidation from inventory alone.

**Decision:** DEFER to Plan 02 (ROT audit) or dedicated exhibit audit plan. During that audit, assess:
- Are any exhibits weak stories that would strengthen if combined?
- Are any exhibits covering similar ground (duplicate technical approaches)?
- Do all 11 exhibits earn their place, or should count reduce to 8-10?

---

## 6. Recommended Exhibit Ordering (Portfolio Page)

**Current Order:** Appears chronological or arbitrary.

**Recommended Order (by story strength and investigation quality):**

1. **Electric Boat (Exhibit A)** — Accessibility practice signature story
2. **GM Course Completion (Exhibit J)** — NTSB investigation textbook example
3. **Power Platform Analysis (Exhibit L)** — AI-assisted chaos resolution
4. **GPiLEARN Platform (Exhibit C)** — Long-term foundation work, 2,554 emails
5. **Wells Fargo Migration (Exhibit D)** — Clean execution, Xyleme expertise
6. **HSBC Global Team (Exhibit F)** — Distributed collaboration proof
7-11. **Remaining exhibits** (B, G, H, I, K) — order TBD after content audit

**Rationale:**
- Lead with strongest diagnostic/investigation stories (A, J, L) to establish NTSB credibility
- Follow with breadth (C = platform engineering, D = migration, F = global scale)
- Back-load remaining exhibits (await assessment of story strength)

---

## 7. FAQ Assessment

**Current Data:** Partial read (150 lines), 3 hiring logistics questions visible.

**Assessment:** INCOMPLETE — requires full content read.

**Three Scenarios:**

**Scenario A: FAQ has 8+ substantive questions**
- **Recommendation:** STRENGTHEN in place
- **Actions:** Grammar cleanup, add cross-references, ensure no redundancy with contact.html

**Scenario B: FAQ has 4-7 questions**
- **Recommendation:** EVALUATE per question
- **Actions:** Merge best questions into contact.html as "Common Questions" section, retire FAQ page OR keep FAQ if questions are genuinely different from contact guidance

**Scenario C: FAQ has <4 questions or generic filler**
- **Recommendation:** RETIRE page
- **Actions:** Merge any valuable content into contact.html, remove FAQ from navigation, redirect FAQ URL to contact.html

**Decision Required:** Full FAQ content read in Plan 02 (ROT audit).

---

## 8. Navigation Recommendations

### Current Navigation (all 16 pages)

```
Home | Philosophy | FAQ | Technologies | Portfolio | Contact | Field Reports
```

**Analysis:**
- Order is arbitrary (not user-journey driven)
- "Field Reports" is branded name (good) but "Testimonials" might be clearer for SEO
- FAQ placement between Philosophy and Technologies suggests importance, but content may not warrant it

### Recommended Navigation Structure (if FAQ RETIRES)

```
Home | Philosophy | Portfolio | Exhibits* | Technologies | Contact
```
*Exhibits as dropdown or omit (accessible via Portfolio links)

**Rationale:**
- Journey-driven: Home (hook) → Philosophy (culture fit) → Portfolio (breadth) → Exhibits (depth) → Technologies (verification) → Contact (action)
- Removes FAQ (if retired)
- "Field Reports" absorbed into Portfolio or separate link if strong

### Recommended Navigation Structure (if FAQ STRENGTHENS)

```
Home | About* | Portfolio | Technologies | FAQ | Contact
```
*About = Philosophy renamed for clarity, or Philosophy stays

**Rationale:**
- If FAQ earns its place, position it near Contact (action-oriented pages together)
- "About" may be clearer than "Philosophy" for non-geek audiences (but "Philosophy" is on-brand)

### Suggested First-Time Visitor Path

**For Hiring Managers (30s scan):**
`Home (hero + 1 project) → Contact`

**For Engineering Peers (3-4min):**
`Home → Technologies (verification) → 1 Exhibit (depth check) → Philosophy (optional culture)`

**For Clients (full review):**
`Home → Portfolio → 2-3 Exhibits → Philosophy → Testimonials/Field Reports → Contact`

### CTAs Per Page

**index.html:**
- Primary CTA: "View My Work" (Portfolio)
- Secondary CTA: "Field Reports" (Testimonials)
- Subtle nudge: After reading, nav to Portfolio or Philosophy

**philosophy.html:**
- No explicit CTA (this is culture filter, not sales page)
- Subtle nudge: Cross-references to Exhibits J, L (investigation examples)
- If visitor reads all 25 sections → they're engaged, nav to Portfolio or Contact

**portfolio.html:**
- Primary CTA: Links to Exhibits (scattered throughout flagship cards)
- No bottom CTA needed (page is long, exhibits are next step)

**technologies.html:**
- No explicit CTA (this is verification page)
- Subtle nudge: Back to Portfolio or Contact

**faq.html:**
- Primary CTA (if page exists): "Ready to discuss your project? Contact me"
- Subtle nudge: Link to Portfolio or Testimonials for proof

**contact.html:**
- Primary CTA: Email address (already prominent)
- Secondary CTA: LinkedIn
- No nudges needed (this is terminus)

**testimonials.html:**
- Primary CTA: "View Full Portfolio" or "See Detailed Case Studies" (link to Portfolio)
- After reading social proof → next step is Portfolio (breadth) or Contact (action)

---

## 9. Proprietary Content Flags

**Per CONTEXT.md:** "No NDA signed, but exercise caution with former employer (GP) and client proprietary information."

### General Dynamics Electric Boat (GDEB)
- **Location:** portfolio.html, testimonials.html, exhibits/exhibit-a.html
- **Content:** Accessibility practice, Flash conversion, cross-domain SCORM
- **Risk:** LOW — general technical work, no proprietary GDEB systems details
- **Flag:** None

### General Motors (GM)
- **Location:** portfolio.html, philosophy.html, exhibits/exhibit-j.html
- **Content:** Course completion investigation, dealer training ecosystem
- **Risk:** MEDIUM — Investigation details may reveal GM LMS behavior or training processes
- **Flag:** REVIEW Exhibit J during audit — ensure no GM-proprietary LMS configurations or internal process details are exposed

### GP Strategies (former employer)
- **Location:** portfolio.html (GPiLEARN), exhibits/exhibit-c.html, testimonials.html (most quotes)
- **Content:** GPiLEARN platform architecture, CSBB content server, SCORM-to-AICC wrapper
- **Risk:** MEDIUM — GPiLEARN is proprietary GP platform
- **Flag:** REVIEW Exhibit C — ensure no proprietary GP platform internals (server architecture, client lists, pricing) are exposed. Current portfolio.html description seems safe (general "custom platform for energy utilities").

### United Overseas Bank (UOB)
- **Location:** portfolio.html
- **Content:** Compliance eLearning, SAP SuccessFactors integration
- **Risk:** LOW — general eLearning work, no bank internal processes
- **Flag:** None

### Entergy, PNC, HSBC, Wells Fargo, etc.
- **Location:** portfolio.html, various exhibits
- **Content:** LMS integration, content migration, SCORM troubleshooting
- **Risk:** LOW — general technical consulting, no client proprietary systems details
- **Flag:** None

### Summary of Flags
- **HIGH RISK:** None identified
- **MEDIUM RISK:** GM Exhibit J, GP Strategies Exhibit C
- **LOW RISK:** All other client mentions

**Recommendation:** During Exhibit J and C audits (Plan TBD), review for:
- Specific LMS configuration details
- Internal client process descriptions
- Proprietary platform architecture beyond general description
- Client-specific data (course counts, user numbers, revenue) unless already public

---

## Summary

### Pages That Justify Existence: 16/16 (all pass)

- **index.html:** YES (required entry point, but needs restructuring)
- **philosophy.html:** YES (core identity, culture filter)
- **portfolio.html:** YES (breadth showcase, well-executed)
- **technologies.html:** YES (verification for engineering peers)
- **faq.html:** CONDITIONAL (pending full content read — may retire)
- **contact.html:** YES (required action page, needs strengthening)
- **testimonials.html:** YES (social proof, well-executed)
- **11 exhibits:** YES (depth proof, NTSB investigation model)

### Key Recommendations by Priority

**CRITICAL (Plan 02):**
1. Restructure index.html: trim from 19 to ~10 sections, remove philosophy duplication
2. Strengthen contact.html: add "Types of Work" and "Not a Good Fit" sections
3. Decide FAQ fate: full content read → strengthen, merge, or retire
4. Fix exact duplicate: "The Fiddler" testimonial (remove from testimonials.html)
5. Fix near duplicate: quotation mark formatting on portfolio.html

**HIGH (Plan 03-04):**
6. Grammar cleanup: philosophy.html (15 issues), portfolio.html (8 issues), technologies.html (5 issues)
7. Strengthen authoritative voice: remove "just," "it was," weakening words
8. Add purpose statement to technologies.html intro
9. Review proprietary content in Exhibits J (GM) and C (GP Strategies)

**MEDIUM (Plan 05 or later):**
10. Exhibit structure audit: apply Standard vs Investigation-Inspired templates
11. Exhibit ordering: reorder portfolio.html by story strength (recommend A→J→L→C→D→F→...)
12. Navigation structure: adjust based on FAQ decision
13. Add 30-second scan visual hierarchy to index.html

### Metrics

- **Total sections cataloged:** 291 across 16 pages
- **Exact duplicates:** 1 ("The Fiddler" testimonial)
- **Near duplicates:** 1 (Entergy testimonial quotation marks)
- **Content echoes (intentional):** 2 (philosophy on index, featured projects on index vs portfolio)
- **Pages requiring restructure:** 1 (index.html)
- **Pages requiring strengthening:** 2 (contact.html, possibly faq.html)
- **Pages requiring retirement:** 0-1 (faq.html pending assessment)
- **Exhibits requiring individual structure audit:** 11 (all)
- **Proprietary content flags:** 2 (Exhibits J, C — medium risk, review recommended)

---

**Analysis Complete.**
**Next Steps:** Execute Plans 02-05 based on these findings.
