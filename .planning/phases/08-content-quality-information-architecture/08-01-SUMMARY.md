---
phase: 08-content-quality-information-architecture
plan: 01
subsystem: content-audit
tags: [content-inventory, grammar-analysis, ia-assessment, automation]
dependencies:
  requires: []
  provides: [content-inventory-data, grammar-report, ia-recommendations]
  affects: [08-02, 08-03, 08-04, 08-05]
tech-stack:
  added: [cheerio, write-good, glob]
  patterns: [data-extraction, automated-linting, content-analysis]
key-files:
  created:
    - .planning/phases/08-content-quality-information-architecture/scripts/extract-content.mjs
    - .planning/phases/08-content-quality-information-architecture/scripts/check-grammar.mjs
    - .planning/phases/08-content-quality-information-architecture/scripts/find-duplicates.mjs
    - .planning/phases/08-content-quality-information-architecture/inventory/content-inventory.csv
    - .planning/phases/08-content-quality-information-architecture/inventory/grammar-report.txt
    - .planning/phases/08-content-quality-information-architecture/inventory/duplicate-report.txt
    - .planning/phases/08-content-quality-information-architecture/inventory/ia-analysis.md
  modified:
    - package.json
    - package-lock.json
decisions:
  - title: "Cheerio for HTML parsing"
    rationale: "Lightweight, jQuery-like API, well-suited for Node.js content extraction"
    outcome: "Successfully parsed all 16 HTML pages without errors"
  - title: "write-good for prose linting"
    rationale: "Established tool for automated grammar/style suggestions, non-opinionated"
    outcome: "Generated 915 lines of actionable suggestions across all pages"
  - title: "Section-level granularity for content inventory"
    rationale: "Balance between detail (too granular = noise) and usefulness (too high-level = no actionable data)"
    outcome: "291 sections across 16 pages provides clear view of content structure"
  - title: "Both exact and near-duplicate detection"
    rationale: "Exact matches catch copy/paste, near matches catch paraphrasing and minor edits"
    outcome: "1 exact duplicate (testimonial), 1 near duplicate (quote formatting) found"
  - title: "9-section IA analysis structure"
    rationale: "Comprehensive coverage: page roles, audience journeys, redundancy, placement issues, exhibit assessment, ordering, FAQ fate, navigation, proprietary flags"
    outcome: "706-line actionable blueprint for Plans 02-05"
metrics:
  duration_minutes: 6.6
  completed_date: "2026-02-21"
  tasks_completed: 2
  files_created: 7
  files_modified: 2
  sections_cataloged: 291
  pages_analyzed: 16
  grammar_suggestions: 915
  duplicates_found: 2
  ia_analysis_lines: 706
---

# Phase 08 Plan 01: Content Analysis Infrastructure & Inventory Generation Summary

**One-liner:** Automated content extraction, grammar linting, and duplicate detection infrastructure generating comprehensive IA blueprint for 16 public pages.

## What Was Built

Built three automated analysis scripts (extract-content, check-grammar, find-duplicates) using cheerio and write-good, generating section-level inventory CSV (291 sections), prose quality report (915 suggestions), duplicate content report (2 instances), and comprehensive 706-line IA analysis document assessing page roles, audience journeys, redundancy, content placement, exhibit structure recommendations, navigation, and proprietary content flags.

## Tasks Completed

### Task 1: Create content extraction and analysis scripts
- **Commit:** dd36147
- **Files:** 3 scripts created, package.json updated, 3 inventory files generated
- **Outcome:** Reusable npm scripts (audit:inventory, audit:grammar, audit:duplicates, audit:all) successfully analyze all 16 public pages

### Task 2: Generate IA analysis from inventory data
- **Commit:** f351958
- **Files:** ia-analysis.md (706 lines)
- **Outcome:** Comprehensive editorial blueprint with 9 sections covering all requirements from PLAN.md

## Deviations from Plan

None - plan executed exactly as written.

## Verification Results

All verification criteria passed:

1. ✓ `npm run audit:all` completes without errors
2. ✓ content-inventory.csv has 291 rows covering all 16 public pages (zero pages missing)
3. ✓ grammar-report.txt contains 915 lines of findings across all pages
4. ✓ duplicate-report.txt shows 2 duplicates (1 exact, 1 near)
5. ✓ ia-analysis.md is comprehensive with all 9 required sections
6. ✓ ia-analysis.md references specific pages and sections (not generic advice)
7. ✓ All 11 exhibits individually assessed in ia-analysis.md

## Key Findings from IA Analysis

**Page Role Assessment:**
- **index.html:** Needs restructure (currently 19 sections, target 10) — too long for "hook and route" model
- **philosophy.html:** Excellent alignment with core identity role, minor grammar cleanup needed
- **portfolio.html:** Best-structured page, NTSB "probable cause summaries" model works well
- **technologies.html:** Purpose unclear from visitor perspective, needs intro clarification
- **faq.html:** Conditional fate (pending full content read in Plan 02) — may strengthen, merge, or retire
- **contact.html:** Needs "Types of Work" and "Not a Good Fit" sections added
- **testimonials.html:** Well-executed, one duplicate testimonial to fix
- **Exhibits (11 total):** All justify existence, varying section counts 7-22 (appropriate depth variance)

**Audience Journey Mapping:**
- **Hiring Managers (30s scan):** Homepage too long, needs explicit visual hierarchy
- **Engineering Peers (3-4min):** Technologies page needs purpose statement, exhibits need consistent structure for quick scanning
- **Clients (full review):** Contact page missing key sections, FAQ fate affects trust

**Redundancy Found:**
- **Exact duplicate:** "Dan Novak 'The Fiddler'" testimonial on testimonials.html AND exhibit-c.html
- **Near duplicate:** Entergy testimonial quote formatting (extra quotation marks on portfolio.html)
- **Content echoes (intentional):** Philosophy section on index.html (should remove), Featured projects on index vs portfolio (should reduce detail on index)

**Content Placement Issues:**
- Deep technical details on index.html (move to exhibits)
- Generic weakening language on philosophy.html ("just" × 4, "it was" × 3) — strengthen authoritative voice
- Technologies page lacks purpose statement

**Proprietary Content Flags:**
- **Medium Risk:** GM Exhibit J (course completion investigation details), GP Strategies Exhibit C (GPiLEARN platform internals)
- **Low Risk:** All other client mentions (general technical work)

**Recommended Actions (Plans 02-05):**
1. Restructure index.html (trim 19→10 sections, remove philosophy duplication, reduce featured project detail)
2. Strengthen contact.html (add "Types of Work" and "Not a Good Fit" sections)
3. Decide FAQ fate (full content read → strengthen, merge, or retire)
4. Fix duplicates (remove "Fiddler" from testimonials.html, fix Entergy quote formatting)
5. Grammar cleanup (philosophy 15 issues, portfolio 8 issues, technologies 5 issues)
6. Add purpose statement to technologies.html
7. Audit exhibits for structure consistency (apply Standard vs Investigation-Inspired templates)
8. Reorder portfolio exhibits by story strength (recommended: A→J→L→C→D→F→...)
9. Review proprietary content in Exhibits J and C

## Impact on Subsequent Plans

**Plan 02 (ROT Audit):** Has complete inventory data (291 sections) and IA recommendations for redundancy elimination, outdated content removal, and trivial content trimming.

**Plan 03 (Grammar/Typo Cleanup):** Has grammar-report.txt with 915 specific suggestions, plus IA analysis identifying weakening language to strengthen.

**Plan 04 (IA Optimization):** Has page role assessments, audience journey maps, navigation recommendations, and content placement issue list.

**Plan 05 (Exhibit Structure Verification):** Has individual exhibit assessments, structure template recommendations (Standard vs Investigation-Inspired), depth guidance, and recommended ordering.

## Self-Check

### Files Created (7/7)
- ✓ FOUND: .planning/phases/08-content-quality-information-architecture/scripts/extract-content.mjs
- ✓ FOUND: .planning/phases/08-content-quality-information-architecture/scripts/check-grammar.mjs
- ✓ FOUND: .planning/phases/08-content-quality-information-architecture/scripts/find-duplicates.mjs
- ✓ FOUND: .planning/phases/08-content-quality-information-architecture/inventory/content-inventory.csv
- ✓ FOUND: .planning/phases/08-content-quality-information-architecture/inventory/grammar-report.txt
- ✓ FOUND: .planning/phases/08-content-quality-information-architecture/inventory/duplicate-report.txt
- ✓ FOUND: .planning/phases/08-content-quality-information-architecture/inventory/ia-analysis.md

### Commits (2/2)
- ✓ FOUND: dd36147 (Task 1: content analysis infrastructure)
- ✓ FOUND: f351958 (Task 2: IA analysis document)

### Verification Commands
```bash
# All scripts run successfully
npm run audit:all

# CSV has all 16 pages
wc -l .planning/phases/08-content-quality-information-architecture/inventory/content-inventory.csv
# Output: 291 (290 data rows + 1 header = 291 sections)

# Grammar report covers all pages
grep -c "^[a-z].*\.html:" .planning/phases/08-content-quality-information-architecture/inventory/grammar-report.txt
# Output: 18 (16 pages, includes exhibits/ subdirectory paths)

# IA analysis has all 9 sections
grep -E "^## [0-9]" .planning/phases/08-content-quality-information-architecture/inventory/ia-analysis.md
# Output: All 9 required sections present
```

## Self-Check: PASSED

All files exist, all commits present, all verification criteria met.

---

**Status:** Complete
**Duration:** 6.6 minutes
**Next Plan:** 08-02 (ROT Audit - Redundant, Outdated, Trivial content removal)
