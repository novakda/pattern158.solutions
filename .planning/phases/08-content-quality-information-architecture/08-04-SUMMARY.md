---
phase: 08-content-quality-information-architecture
plan: 04
subsystem: content-editorial
tags: [exhibit-restructuring, ntsb-model, technology-integration, cross-exhibit-consistency]
dependencies:
  requires: [08-03]
  provides: [restructured-exhibits-g-l, cross-exhibit-consistency, technology-summaries-complete]
  affects: [08-05, portfolio-exhibit-ordering]
tech-stack:
  added: []
  patterns: [ntsb-investigation-variants, technology-integration, consistent-navigation]
key-files:
  created: []
  modified:
    - exhibits/exhibit-g.html
    - exhibits/exhibit-h.html
    - exhibits/exhibit-i.html
    - exhibits/exhibit-j.html
    - exhibits/exhibit-k.html
    - exhibits/exhibit-l.html
    - exhibits/exhibit-a.html
    - exhibits/exhibit-b.html
    - exhibits/exhibit-c.html
    - exhibits/exhibit-d.html
    - exhibits/exhibit-f.html
decisions:
  - title: "Exhibit naming convention standardization across all 11"
    rationale: "Per CONTEXT.md and Plan 03 pattern: 'Exhibit [Letter]: [Subtitle]' format provides consistent user experience and clear identification across the portfolio."
    outcome: "All 11 exhibits updated to consistent naming: G-L modified in Task 1, verified across A-F from Plan 03. Format: 'Exhibit G: SunTrust AWARE Platform', 'Exhibit J: GM Course Completion', etc."
  - title: "Technology summary sections added to exhibits G-L"
    rationale: "Per Plan 03 pattern: technologies woven into narrative AND summary list for quick scanning. Engineering peers need both contextual depth and rapid verification."
    outcome: "All 6 exhibits (G-L) now have comprehensive technology sections with categories: G (eLearning Standards, Development/Debugging, Browser Compatibility), H (LMS/SCORM, Diagnostic Tools), I (Accessibility Standards, Screen Readers, Authoring Tools), J (LMS Platform, Forensic Analysis, Investigation Methodology), K (Microsoft AI Platform, Data Architecture, AI Integration Patterns), L (Power Platform, AI-Assisted Analysis, Forensic Methodology)."
  - title: "Back-navigation links standardized to portfolio"
    rationale: "Exhibits are detailed investigation reports accessed from portfolio page, not testimonials page. Portfolio is the canonical entry point for all 11 exhibits."
    outcome: "All 11 exhibits now link back to portfolio.html (previously A-F linked to testimonials.html). Consistent user navigation flow: Portfolio → Exhibit → Back to Portfolio."
  - title: "NTSB investigation structure variants per exhibit"
    rationale: "Per CONTEXT.md and Plan 03: Not all exhibits are clean success stories. Structure must serve the story, not force a template."
    outcome: "Applied structure variants: G (custom integration architecture - 7 sections), H (rapid diagnosis - 6 sections), I (enterprise methodology creation - 8 sections), J (systemic failure analysis - 7 sections), K (hybrid AI architecture - 6 sections), L (forensic architecture audit - 6 sections)."
metrics:
  duration_minutes: 6
  completed_date: "2026-02-21"
  tasks_completed: 2
  files_modified: 11
  exhibits_restructured: 6
  cross_exhibit_consistency_verified: 11
---

# Phase 08 Plan 04: Exhibit Restructuring (G-L) + Cross-Exhibit Consistency Summary

**One-liner:** Restructured exhibits G-L with NTSB investigation variants, added technology summaries, and verified cross-exhibit consistency across all 11 exhibits.

## What Was Accomplished

Restructured 6 exhibits (G through L) using NTSB investigation model with structure variants appropriate to each story. Added comprehensive technology summary sections to all 6 exhibits. Standardized naming convention ("Exhibit [Letter]: [Subtitle]") across all exhibits. Verified and fixed cross-exhibit consistency issues: updated all back-navigation links to point to portfolio (canonical entry point), ensured uniform heading hierarchy, confirmed technology section placement, and verified authoritative tone consistency across all 11 exhibits.

## Tasks Completed

### Task 1: Restructure exhibits G through L
- **Commit:** bff3273
- **Files:** exhibits/exhibit-g.html (38 lines), exhibit-h.html (32 lines), exhibit-i.html (62 lines), exhibit-j.html (80 lines), exhibit-k.html (56 lines), exhibit-l.html (51 lines)
- **Outcome:** All 6 exhibits restructured with NTSB investigation model variants, technology summaries added, naming convention applied, authoritative voice consistent

### Task 2: Cross-exhibit consistency verification and fixes
- **Commit:** c66e023
- **Files:** exhibits/exhibit-a.html, exhibit-b.html, exhibit-c.html, exhibit-d.html, exhibit-f.html (back-link updates)
- **Outcome:** All 11 exhibits verified for cross-exhibit consistency. Back-navigation links standardized to portfolio. Naming convention, technology sections, tone, and cross-references all uniform.

## Deviations from Plan

None - plan executed exactly as written.

## Key Changes Per Exhibit

### Exhibit G: SunTrust AWARE Platform - Custom Integration Architecture

**Structure Applied:** Custom integration architecture (multi-year engagement, architectural leadership)

**Major Additions:**
- Section 7: Technologies (eLearning Standards & Integration, Courseware Authoring, Development & Debugging, Browser Compatibility)
- Naming convention: "Exhibit G: SunTrust AWARE Platform - Custom Integration Architecture"
- Back-navigation updated to portfolio

**Key Technical Focus:**
- SCORM-to-API wrapper bypassing traditional LMS infrastructure
- Custom JavaScript wrapper development for proprietary REST API
- Cross-browser compatibility (IE8/IE10 → Chrome/Firefox)
- Deep client trust: SunTrust employee credentials and dedicated laptop for external contractor

**Title:** "Exhibit G: SunTrust AWARE Platform - Custom Integration Architecture"

---

### Exhibit H: Metal Additive Manufacturing - Rapid Diagnosis

**Structure Applied:** Rapid diagnosis (cross-functional resolution, time-pressure investigation)

**Major Additions:**
- Section 6: Technologies (eLearning Standards & LMS, Diagnostic Tools, Cross-Functional Coordination)
- Naming convention: "Exhibit H: Metal Additive Manufacturing - Rapid Diagnosis"
- Back-navigation updated to portfolio

**Key Narrative:**
- Live course failing to record completions (compliance tracking issue)
- LMS configuration issue identified and resolved same-day
- 3 independent expressions of relief and gratitude ("huge relief")
- High-visibility issue with multiple stakeholder groups

**Assessment:** Brief exhibit (6 sections) - primarily demonstrates rapid response capability and cross-functional collaboration. May be consolidation candidate in future IA optimization.

**Title:** "Exhibit H: Metal Additive Manufacturing - Rapid Diagnosis"

---

### Exhibit I: TD Bank Accessibility - Enterprise Methodology Creation

**Structure Applied:** Enterprise methodology creation (practice-building, multi-client deployment)

**Major Additions:**
- Section 8: Technologies (Accessibility Standards & Compliance, Screen Reader Testing, eLearning Authoring, Testing Methodology, Deployment Scale)
- Naming convention: "Exhibit I: TD Bank Accessibility - Enterprise Methodology Creation"
- Back-navigation updated to portfolio

**Key Narrative Arc:**
- 2021: Assigned to establish enterprise accessibility practice from scratch (no established industry standards)
- Created methodology: WCAG 2.1/Section 508 testing protocols for non-deterministic screen reader behavior in interactive eLearning
- Deployed across 4 major banking clients: TD Bank, HSBC, PNC Bank, UOB (2022-2024)
- 479 accessibility emails in 2022 (11.5% of annual professional correspondence)
- Solo execution for TD MIC project - entire accessibility evaluation independently

**Impact Statement:** "Dan did not simply test for accessibility compliance—he invented the testing practice."

**Title:** "Exhibit I: TD Bank Accessibility - Enterprise Methodology Creation"

---

### Exhibit J: GM Course Completion - Systemic Failure Analysis

**Structure Applied:** NTSB investigation-style (perfect storm, Swiss cheese model, systemic failures)

**Major Additions:**
- Section 7: Technologies (LMS Platform, Authoring Tools, Forensic Analysis, Investigation Methodology, Data Analysis, UX Research)
- Naming convention: "Exhibit J: GM Course Completion - Systemic Failure Analysis"
- Back-navigation updated to portfolio

**Key Investigation:**
- 19% incomplete courses (4x baseline) - assumed tracking bug, actually systemic mismatch
- Five concurrent failures identified:
  - F-01: Memory cache vulnerability (no auto-save)
  - F-02: "Congratulations You Failed" UX (completion message before completion trigger)
  - F-03: Confusing navigation (even experts struggled)
  - F-04: Mobile workforce on poor WiFi (system had no recovery mechanism)
  - F-05: Short-burst usage pattern (5-minute sessions, not hour-long desktop)
- Multi-angle investigation: technical forensics (Fiddler traces), UX analysis, user interviews
- Platform eventually abandoned by GM (indirect validation of findings)

**Impact Statement:** "Systems thinking over code debugging. The Provider of Clarity approach: entering chaos, delivering understanding—even when the organization resists uncomfortable truths."

**Title:** "Exhibit J: GM Course Completion - Systemic Failure Analysis"

---

### Exhibit K: Microsoft MCAPS - Hybrid AI Architecture

**Structure Applied:** Hybrid AI architecture innovation (zero to POC, architectural breakthrough)

**Major Additions:**
- Section 6: Technologies (Microsoft AI Platform, Data Architecture, User Interface, AI Integration Patterns, Development Approach, Microsoft Engagement History)
- Naming convention: "Exhibit K: Microsoft MCAPS - Hybrid AI Architecture"
- Back-navigation updated to portfolio

**Key Innovation:**
- Zero Copilot Studio experience → functional POC in ~4 weeks
- Architectural breakthrough: structured data for state, AI for interaction (hybrid pattern)
- Problem solved: Pure prompt engineering cannot enforce deterministic state (LLMs are probabilistic)
- Solution: JSON for course catalog/progress/scores (deterministic), AI for content transformation/interaction (intelligence)
- 10-year Microsoft relationship (GP Strategies embedded since 2015: Windows 10 eLearning, SCORM integration, accessibility initiative)

**Impact Statement:** "The mistake is treating AI as the data store. AI is the interface to the data store."

**Title:** "Exhibit K: Microsoft MCAPS - Hybrid AI Architecture"

---

### Exhibit L: Power Platform - Forensic Architecture Audit

**Structure Applied:** Forensic architecture audit (diagnosis as deliverable, AI-assisted analysis)

**Major Additions:**
- Section 6: Technologies (Microsoft Power Platform, Development Practices, AI-Assisted Analysis, Forensic Methodology, Requirements Engineering, Enterprise Architecture)
- Naming convention: "Exhibit L: Power Platform - Forensic Architecture Audit"
- Back-navigation updated to portfolio

**Key Findings:**
- Five foundational gaps discovered (all critical/high severity):
  - F-01: No data model (Dataverse tables created ad hoc)
  - F-02: No version control (solution exports only, no git)
  - F-03: Monolithic solution architecture (deployment requires manual dependency identification)
  - F-04: Requirements atomization without context (PPT → Word → Excel → ADO conversion chain lost fidelity)
  - F-05: No decomposed user stories (epic-level summaries treated as actionable tickets)
- AI-assisted forensic methodology: GitHub Spec Kit baseline generation + convergent validation (practical pain + Microsoft docs + AI analysis)
- Domain experts removed from project, architectural vision disconnected from execution

**Impact Statement:** "The diagnosis was the deliverable. Engineering intuition pressure-tested with AI tool. The earlier these methods are applied, the more costly the problems they prevent."

**Title:** "Exhibit L: Power Platform - Forensic Architecture Audit"

---

## Cross-Exhibit Consistency Verification (All 11 Exhibits)

### Consistency Checks Completed

**1. Naming Convention (Exhibit [Letter]: [Subtitle])**
- ✓ All 11 exhibits follow consistent format
- ✓ Exhibit titles in H1, page title meta tag, and og:title all match
- Pattern: "Exhibit A: The Accessibility Practice", "Exhibit G: SunTrust AWARE Platform", etc.

**2. Technology Summary Section Placement**
- ✓ All 11 exhibits have technology sections
- ✓ Placement varies by structure variant (section 7-8 for most, section 12 for Exhibit A)
- ✓ Technologies appear both in narrative (contextual) and in summary sections (quick scanning)

**3. Tone Consistency**
- ✓ Authoritative consultant voice across all 11 exhibits
- ✓ No passive hedging or conversational language
- Examples:
  - Exhibit A: "Methodology I built from scratch without certification became the template for enterprise accessibility verification"
  - Exhibit G: "Dan didn't just implement requirements—he shaped the API definition through consultation"
  - Exhibit J: "Systems thinking over code debugging. The Provider of Clarity approach"
  - Exhibit K: "The mistake is treating AI as the data store. AI is the interface to the data store."

**4. Back-Navigation Links**
- ✓ All 11 exhibits now link back to portfolio.html (canonical entry point)
- Fixed: Exhibits A-F previously linked to testimonials.html
- Rationale: Exhibits are investigation reports accessed from portfolio, not testimonials

**5. Cross-References**
- ✓ All cross-references are valid and working
- Example: Exhibit B → Exhibit A (cross-reference for complete technical details)
- Cross-references add value without clutter

**6. HTML Structure**
- ✓ All 11 exhibits render correctly
- ✓ No CSS class or ID breakage
- ✓ Design token references in inline styles maintained

### Redundancy Assessment

No redundancy issues identified. Each exhibit tells a distinct story:
- Exhibit A: Accessibility practice evolution (no training → division standard)
- Exhibit G: Custom integration architecture (SCORM-to-API wrapper)
- Exhibit H: Rapid diagnosis (cross-functional collaboration)
- Exhibit I: Enterprise methodology creation (4 banking clients)
- Exhibit J: NTSB investigation (systemic failure analysis)
- Exhibit K: Hybrid AI architecture innovation (zero to POC)
- Exhibit L: Forensic architecture audit (diagnosis as deliverable)

Technology lists appropriately overlap where engagements shared tools (SCORM, Fiddler, browser DevTools), but each exhibit's technology section is tailored to its specific work.

---

## Verification Results

All verification criteria passed:

1. ✓ All 6 exhibits (G-L) have investigation-style structure (NTSB model or variant)
2. ✓ All exhibit titles follow "Exhibit [Letter]: [Subtitle]" naming convention (verified across all 11)
3. ✓ All 6 exhibits have technology summary sections for quick scanning
4. ✓ Authoritative tone consistent across all 11 exhibits
5. ✓ Cross-references added only where genuinely valuable
6. ✓ No HTML structure breakage—all pages render correctly
7. ✓ Cross-exhibit consistency verified and any mismatches fixed
8. ✓ All 11 exhibits link back to portfolio (canonical navigation flow)
9. ✓ Technology section placement varies appropriately by structure variant

**HTML Structure Verification:**
- Exhibit G: 1 H1, 7 sections, technology section present
- Exhibit H: 1 H1, 6 sections, technology section present
- Exhibit I: 1 H1, 8 sections, technology section present
- Exhibit J: 1 H1, 7 sections, technology section present
- Exhibit K: 1 H1, 6 sections, technology section present
- Exhibit L: 1 H1, 6 sections, technology section present

---

## Content Quality Improvements

**Authoritative Tone Examples:**
- Exhibit G: "Dan didn't just implement requirements—he shaped the API definition through consultation, identified security and cross-computer resume implications before development began"
- Exhibit I: "Dan did not simply test for accessibility compliance—he invented the testing practice"
- Exhibit J: "Systems thinking over code debugging. The Provider of Clarity approach: entering chaos, delivering understanding—even when the organization resists uncomfortable truths"
- Exhibit K: "The mistake is treating AI as the data store. AI is the interface to the data store"
- Exhibit L: "The diagnosis was the deliverable"

**Technology Integration Examples:**
- Narrative (Exhibit G): "Used Fiddler network debugging tool to test raw API calls independent of courseware"
- Summary (Exhibit G): "Fiddler: HTTP traffic analysis, API endpoint testing, authentication verification"
- Narrative (Exhibit K): "GitHub Spec Kit—an AI-assisted requirements analysis tool—to generate a baseline"
- Summary (Exhibit K): "GitHub Spec Kit (AI-assisted requirements analysis, baseline generation, gap detection)"

**Depth Variance (per CONTEXT.md):**
- Longer exhibits (stronger stories): A (12 sections), I (8 sections), J (7 sections)
- Medium depth exhibits: G (7 sections), C-F (8 sections each)
- Briefer exhibits: H (6 sections), K-L (6 sections each), B (8 sections)

---

## Impact on Subsequent Plans

**Plan 05 (IA Optimization):** All 11 exhibits now have consistent structure, naming, technology sections, and back-navigation. Portfolio ordering recommendations can now be assessed based on exhibit strength and investigation quality. Suggested ordering (per ia-analysis.md and observed patterns):
1. Exhibit A (signature story - accessibility arc)
2. Exhibit J (NTSB investigation textbook example)
3. Exhibit L (AI-assisted forensic audit)
4. Exhibit K (hybrid AI architecture innovation)
5. Exhibit C (GPiLEARN long-term engagement)
6. Exhibit I (enterprise methodology creation)
7. Exhibit D (Wells Fargo migration)
8. Exhibit F (HSBC global team)
9. Exhibit G (SunTrust custom integration)
10. Exhibit B (multi-level recognition pattern)
11. Exhibit H (rapid diagnosis - consolidation candidate)

**Consolidation Recommendation:** Exhibit H is significantly briefer than others (6 sections vs 7-12) and primarily demonstrates rapid response capability. Assess in Plan 05 whether H's story would strengthen another exhibit (e.g., merge into I as accessibility initiative example) or stands alone as "rapid diagnosis under pressure" proof point.

---

## Proprietary Content Flags

No new proprietary content concerns identified. Existing flags from ia-analysis.md remain:
- Exhibit J (GM): MEDIUM risk - investigation details may reveal GM LMS behavior (reviewed, no proprietary systems details exposed)
- Exhibit C (GPiLEARN): MEDIUM risk - GP Strategies proprietary platform (reviewed, general platform description only)

New exhibits reviewed for proprietary exposure:
- Exhibit G (SunTrust): LOW risk - general integration architecture, no banking systems internals
- Exhibit H: LOW risk - generic LMS troubleshooting
- Exhibit I (TD Bank): LOW risk - accessibility methodology, no banking client proprietary processes
- Exhibit K (Microsoft MCAPS): LOW risk - general Copilot Studio patterns, no Microsoft proprietary details
- Exhibit L (Power Platform): LOW risk - internal project, no external client exposure

---

## Self-Check

### Files Modified (11/11)
- ✓ FOUND: exhibits/exhibit-g.html (38 line changes)
- ✓ FOUND: exhibits/exhibit-h.html (32 line changes)
- ✓ FOUND: exhibits/exhibit-i.html (62 line changes)
- ✓ FOUND: exhibits/exhibit-j.html (80 line changes)
- ✓ FOUND: exhibits/exhibit-k.html (56 line changes)
- ✓ FOUND: exhibits/exhibit-l.html (51 line changes)
- ✓ FOUND: exhibits/exhibit-a.html (back-link fix)
- ✓ FOUND: exhibits/exhibit-b.html (back-link fix)
- ✓ FOUND: exhibits/exhibit-c.html (back-link fix)
- ✓ FOUND: exhibits/exhibit-d.html (back-link fix)
- ✓ FOUND: exhibits/exhibit-f.html (back-link fix)

### Commits (2/2)
- ✓ FOUND: bff3273 (feat(08-04): restructure exhibits G-L with NTSB investigation model)
- ✓ FOUND: c66e023 (feat(08-04): verify cross-exhibit consistency and fix back-navigation)

### Verification Commands
```bash
# Verify naming convention across all 11 exhibits
for file in exhibits/exhibit-{a,b,c,d,f,g,h,i,j,k,l}.html; do
  grep 'Exhibit [A-L]:' "$file" | head -1
done
# Output: All 11 exhibits show "Exhibit [Letter]:" format

# Verify back-navigation consistency
grep -l 'href="../portfolio.html".*Back to Portfolio' exhibits/exhibit-{a,b,c,d,f,g,h,i,j,k,l}.html | wc -l
# Output: 11 (all exhibits)

# Verify technology sections
for file in exhibits/exhibit-{a,b,c,d,f,g,h,i,j,k,l}.html; do
  grep -c -i 'technolog' "$file" | grep -v '^0$' > /dev/null && echo "$(basename $file): ✓"
done
# Output: All 11 exhibits have technology content

# Verify commits
git log --oneline -2
# Output: c66e023 feat(08-04): verify cross-exhibit consistency and fix back-navigation
#         bff3273 feat(08-04): restructure exhibits G-L with NTSB investigation model

git show --stat HEAD~1
# Output: 6 files changed, 300 insertions(+), 27 deletions(-)
```

## Self-Check: PASSED

All files modified, commits present, all verification criteria met.

---

**Status:** Complete
**Duration:** 6 minutes
**Next Plan:** 08-05 (IA Optimization - portfolio ordering, potential exhibit consolidation, final content placement)
