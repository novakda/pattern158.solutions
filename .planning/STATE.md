# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-02-21)

**Core value:** Accurately and compellingly present Dan's professional identity and body of work to hiring managers, engineers, and potential clients
**Current focus:** v1.2 — Rustici-Targeted Content + Exhibit/Nav/QA

## Current Milestone: v1.2 Rustici-Targeted Content + Quality

**Goal:** Add Rustici-relevant exhibits and positioning, then complete deferred quality audit phases.

**Target features:**
- Rustici-targeted exhibits (SCORM Debugger, CSBB Dispatch, BP Learning Platform)
- Three positioning narratives (Enterprise Integration, AI-Driven Modernization, Learning Systems)
- GM exhibit strengthening, homepage influences
- Exhibit content optimization (deferred from v1.1)
- Navigation/footer consistency (deferred from v1.1)
- Comprehensive accessibility QA (deferred from v1.1)

## Current Position

Phase: 16-phase12-remediation-verification
Plan: 04 of 04 complete
Status: Complete
Last activity: 2026-02-22 — Phase 16 Plan 04 complete: Archive recovery and git configuration (3 verification gaps closed)

Progress: [■■■■■■■■■■■■■■■■] 16/16 phases, 4/4 plans complete in Phase 16

## Performance Metrics

**v1.0 Velocity:**
- Total plans completed: 12
- Average duration: ~8.3 min
- Total execution time: ~100 min
- Timeline: 8 days (2026-02-10 to 2026-02-18)

**v1.1 Velocity:**
- Total plans completed: 15
- Average duration: ~9.1 min
- Total execution time: ~137 min
- Timeline: 2 days (2026-02-20 to 2026-02-21)

**v1.2 Velocity (complete):**
- Total plans completed: 15 (12-01, 12-02, 13-01, 13-02, 13-03, 16-01, 16-02, 14-01, 14-02, 14-03, 15-01, 15-02, 15-03, 16-03, 16-04)
- Average duration: ~19.8 min
- Total execution time: ~297 min (estimated)
- Timeline: 2026-02-21 to 2026-02-22

## Accumulated Context

### Decisions

All v1.0 decisions logged in PROJECT.md Key Decisions table (15 entries).
All v1.1 decisions logged in PROJECT.md Key Decisions table (10 entries added).

Full v1.1 decision log archived in `.planning/milestones/v1.1-ROADMAP.md`.
- [Phase 16]: Used exhibit-context div (not blockquote) for Exhibit E - no direct testimonial quote available
- [Phase 16]: Removed test-results/ directory with .mjs scripts - contained only debug artifacts
- [Phase 16]: Used grep-based automated verification to gather codebase evidence for all 8 CONTENT requirements
- [Phase 16]: Verified E2E flows through both entry points (Field Reports and Portfolio) before marking requirements complete
- [Phase 16]: Created Phase 12 directory and VERIFICATION.md retroactively to formally document delivered work
- [Phase 16-03]: Used comprehensive 5-dimension QA matrix (Links, Content, Styling, Accessibility, Dark Mode) for retroactive verification
- [Phase 16-03]: WCAG AA standard applied per Phase 15 precedent for consistency
- [Phase 16-03]: Automated grep-based verification combined with manual QA review for thoroughness
- [Phase 16-03]: Quality parity assessment confirms Phase 12 exhibits match Phase 13-optimized standards
- [Phase 14-01]: Kept current nav order unchanged (well-established, SEO benefit)
- [Phase 14-01]: Exhibit pages highlight Field Reports nav item as parent (aria-current pattern)
- [Phase 14-01]: Footer structure optimized with GitHub link, trust elements (28+ years, 14 case studies)
- [Phase 14]: Used semantic variable name --color-primary-subtle (not --color-primary-alpha-15) to describe purpose over implementation
- [Phase 14]: Dark mode override uses rgba(30, 163, 181, 0.15) to match lightened primary color #1ea3b5
- [Phase 15]: Used Playwright + axe-core for automated accessibility testing (industry standard, comprehensive)
- [Phase 15-01]: Added --color-primary-on-dark token (#20b8cc) for WCAG-compliant links on dark backgrounds
- [Phase 15-02]: Created --color-primary-on-alt token (#0c6f7e light, #30c9dc dark) for links on gray/dark backgrounds
- [Phase 15-02]: Fixed 18 instances of incorrect --color-primary-on-dark usage on light backgrounds
- [Phase 15-02]: Updated dark mode --color-primary to #30c9dc for 4.5:1 contrast requirement
- [Phase 15-02]: Disabled WebKit testing (WSL system dependency limitations), using Chromium + Firefox
- [Phase 15-03]: Evidence capture approach: Playwright script generating full-page screenshots in 4 configurations (light/dark x desktop/mobile)
- [Phase 15-03]: Lighthouse integration: Playwright CDP for programmatic audits with JSON output
- [Phase 15-03]: Accessibility report structure: Executive summary, methodology, per-page results, WCAG criterion checklist, issues fixed log
- [Phase 15-03]: Public statement placement: Footer link across all pages, /accessibility.html standalone page
- [Phase 15-03]: Fixed .key-fact contrast in .probable-cause-box from #1a1a1a to #000000 for 4.5:1 contrast (user-identified during checkpoint)
- [Phase 16-04]: Recovered debug scripts from commit 290a9c2^ (commit before deletion)
- [Phase 16-04]: Used .archive/ directory for all archived debug/backup artifacts
- [Phase 16-04]: Created .gitignore excluding tool artifacts while preserving .archive/ and .planning/ in git tracking

### v1.2 Phase 12 Decisions

| Decision | Rationale |
|----------|-----------|
| CSBB framing: "Built 2011, 5 years before Rustici Content Controller" | Factual timeline correction — CSBB predated the commercial product |
| BP exhibit: Dan worked ON it, didn't build it | Accurate framing — Leo Learning built the platform, Dan did rebranding/troubleshooting |
| Exhibit naming: e (gap fill), m, n | Used available letter gap first, then sequential |
| Three Lenses on portfolio.html | Lightweight positioning without JS filtering |
| Influences on homepage as dl list | Compact format, links to philosophy.html for depth |
| TECH-04 (analytics) deferred past v1.2 | Not needed for immediate Rustici opportunity |
| Phase 13 P03 | 5 | 3 tasks | 22 files |
| Phase 16 P01 | 98 | 2 tasks | 1 files |
| Phase 16 P02 | 178 | 2 tasks | 2 files |
| Phase 14 P01 | 182 | 2 tasks | 22 files |
| Phase 14 P02 | 152 | 2 tasks | 1 files |
| Phase 14 P03 | 1 | 1 tasks | 1 files |
| Phase 15 P01 | 11 | 2 tasks | 25 files |
| Phase 15 P02 | 65 | 2 tasks | 2 files |
| Phase 15 P03 | 8428 | 4 tasks | 29 files |
| Phase 16 P04 | 67 | 2 tasks | 6 files |

### v1.2 Phase 13-01 Decisions

| Decision | Rationale |
|----------|-----------|
| Python script approach for HTML restructuring | Edit tool changes didn't persist reliably — scripted transformation ensured consistent application |
| CSS class consolidation (removed section-surface/section-alt) | Simplified to consistent report-section class matching exhibit-a gold standard |
| Metrics highlighting with key-fact spans | Quantifiable results (email counts, timelines, scales) wrapped for visual prominence |

### v1.2 Phase 13-03 Decisions

| Decision | Rationale |
|----------|-----------|
| Personnel/role tables restructured to narrative paragraphs | Removed blended table format that made items hard to distinguish — narrative format matches exhibit-a benchmark |
| Findings/resolution tables preserved | Investigation data (F-01, F-02 format) kept in table format as appropriate for data presentation |
| Visual audit used Playwright screenshots at 1200px/375px in light/dark modes | Saved to phase directory for verification — 4 representative exhibits sampled |

### Quick Tasks Completed (v1.0)

| # | Task | Date | Commit |
|---|------|------|--------|
| 1 | Anonymize site content — remove individual names, phone numbers, internal product names, sensitive details | 2026-02-13 | cd9f10e |
| 2 | Full content audit — verified internal links, anchors, images, sitemap; fixed FAQ link text | 2026-02-18 | 28aad09 |
| 3 | Remove manual QA and accessibility testing messaging — reframed forward-facing pages to emphasize engineering/methodology | 2026-02-20 | 45af5a3, 9f6857c |
| 4 | Mobile table rendering with PowerApps-style card transformation — 22 tables across 13 HTML files | 2026-02-20 | 10b37f0, 5ee4c46 |
| 5 | Improve mobile horizontal space usage — reduced padding, tightened heroes and nested elements | 2026-02-20 | 7575c1f, d0ac4a6, 41147ef |

### Pending Todos

None.

### Blockers/Concerns

None.

## Session Continuity

Last session: 2026-02-22 (v1.2 Phase 16-04 complete)
Stopped at: Completed 16-04-PLAN.md — Archive recovery and git configuration
Resume file: None

**Next step:** v1.2 Milestone complete — all planned phases executed, all requirements verified, verification gaps closed

---
*Milestone v1.2 started: 2026-02-21*
*Phase 12 (Rustici-targeted content): complete*
*Phase 13 (Exhibit optimization): complete*
*Phase 14 (Navigation/footer consistency): complete*
*Phase 15 (Accessibility QA): complete*
*Phase 16 (Phase 12 retroactive verification): complete*
*v1.2 Milestone: COMPLETE*
*v1.2 Final verification: 70/70 QA checks PASS, 20/20 requirements complete*
