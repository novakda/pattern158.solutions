# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-02-22)

**Core value:** Accurately and compellingly present Dan's professional identity and body of work to hiring managers, engineers, and potential clients
**Current focus:** Phase 24: Featured Section & Cross-Platform Linking (COMPLETE)

## Milestone History

- v1.0 MVP — shipped 2026-02-19 (Phases 1-6, 12 plans)
- v1.1 Quality Audit & Polish — shipped 2026-02-21 (Phases 7-11, 15 plans)
- v1.2 Rustici-Targeted Content + Quality — shipped 2026-02-22 (Phases 12-18, 17 plans)
- v1.3 GitHub Profile Brand Alignment — shipped 2026-02-23 (Phases 19-22, 6 plans)

## Current Position

Phase: 24 of 28 (Featured Section & Cross-Platform Linking — COMPLETE)
Plan: 2 of 2 complete
Status: Phase 24 complete — OG dimensions updated, GitHub links corrected, cross-platform link map and LinkedIn instructions delivered
Last activity: 2026-02-23 — completed 24-02 (HTML implementation + cross-platform linking documentation)

Progress: [████████████████████░░░░░░░░] 82% (23 of 28 phases complete)

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

**v1.2 Velocity:**
- Total plans completed: 17 (15 formal + Phase 12 quick execution)
- Average duration: ~18 min (estimated)
- Total execution time: ~306 min (estimated)
- Timeline: 2 days (2026-02-21 to 2026-02-22)

**v1.3 Velocity:**
- Total plans completed: 6 (4 phases)
- Average duration: 1.5 min
- Total execution time: ~9 min
- Timeline: 2026-02-22 (same day)

**v1.4 Velocity:**
- Total plans completed: 4 (2 phases)
- Average duration: 3.5 min
- Total execution time: ~14 min
- Timeline: 2026-02-23 (same day)
- Pattern: Content/copy project with occasional HTML bulk updates (Phase 23 pure docs, Phase 24 mixed docs + HTML)

## Accumulated Context

### Decisions

All decisions logged in PROJECT.md Key Decisions table (41 entries across v1.0-v1.3).

Recent decisions affecting v1.4 work:

- **v1.4 milestone structure**: Content/copy project delivering copy-paste-ready documents with LinkedIn-specific instructions. User applies changes manually in LinkedIn UI (no API automation).
- **Phase numbering**: Start at 23 (continuing from v1.3 Phase 22)
- **Depth calibration**: Standard depth (6 phases) derived from dependency-driven build order in research
- **Deliverable format**: Markdown documents in .planning directory, not code changes

**Phase 23 Plan 01 decisions (2026-02-22):**

- **Vue.js first in headline and about**: Authentic to strongest competency, React immediately follows for market reach. Both keywords captured.
- **Forensic engineering as differentiator**: GM investigation as hook in about section (first 300 chars), methodology woven throughout profile.
- **GP Strategies reframed as "5+ distinct engineering roles"**: Addresses single-employer perception directly.
- **2024-2026 work leads**: AI/LLM integration and Next.js platform prove currency and modern stack competency.
- **WCAG positioned as engineering quality**: Embedded in craft/quality paragraph, not headline (avoids QA perception).
- **Layoff framed as builder-in-transition**: "Currently building pattern158.solutions and ready for my next senior engineering role."
- **pattern158.solutions in about only**: Omitted from headline for cleaner keyword focus.
- [Phase 23]: Custom URL priority: pattern158 (brand-aligned) > dan-novak (name-based) > dannovak (fallback)
- [Phase 23]: Contact email dual-placement: Contact Info (authoritative) + About section (visible convenience)
- [Phase 23]: Open to Work: recruiter-only mode recommended (no public green banner)

**Phase 24 Plan 01 decisions (2026-02-23):**

- **Featured section: 5 exhibits selected**: GM Investigation, SCORM Debugger, MCAPS AI Agent, Cross-Domain SCORM Framework, Homepage — balances brand recognition, skill diversity, story impact
- **3 copy variants per item**: Outcome-focused, curiosity-driven, technical showcase — gives user choice over tone/framing
- **Strength-first ordering**: Lead with GM Investigation (forensic differentiator), mobile context optimized (Featured appears above Experience on 60% of traffic)
- **OG image strategy: consistent branding (Option A)**: Same logo at 1200x627 across all pages; unique per-exhibit images deferred (Option B can be implemented later if engagement data supports)
- **Copy distinct from site OG tags**: Featured copy optimized for LinkedIn click-through context, not generic social sharing

**Phase 24 Plan 02 decisions (2026-02-23):**

- **Updated OG dimensions to 1200x627**: All 22 HTML pages now have LinkedIn-optimized og:image:width and og:image:height meta tags (actual image file resize deferred to user/designer work)
- **Corrected GitHub links from xhiris to novakda**: Footer links on 18 pages updated to reference primary GitHub account (eliminates inconsistent secondary account references)
- **Documented bidirectional link loop**: Cross-platform-links.md maps all connections between LinkedIn, pattern158.solutions, and GitHub with verification status tracking
- **Combined Featured + Phase 23 in single workflow**: instructions.md provides step-by-step guide for applying all LinkedIn profile optimizations in one 28-40 minute session
- **Copy variant selection guidance**: Explained when to use outcome/curiosity/technical variants based on target audience (hiring managers vs engineers vs architects)

### Pending Todos

None.

### Blockers/Concerns

**Phase 23 dependency (MEDIUM priority):**
- LinkedIn character limits and banner dimensions require UI verification before content writing and asset creation
- Research provides training data specs (headline 220 chars, banner 1584x396px) but LinkedIn may have updated
- Mitigation: User verifies specs in LinkedIn UI during Phase 23 planning/execution
- See research/SUMMARY.md "Research Flags" section for details

**Cross-platform consistency (LOW priority):**
- Every LinkedIn top 10 skill must have pattern158.solutions or GitHub evidence
- Addressed in Phase 26 (Skills) and Phase 28 (Polish) with explicit cross-reference audit

### Quick Tasks Completed

| # | Description | Date | Commit | Directory |
|---|-------------|------|--------|-----------|
| 6 | Fix Three Stooges brand element citation and content | 2026-02-22 | 3bf6118 | [6-fix-three-stooges-brand-element-citation](./quick/6-fix-three-stooges-brand-element-citation/) |
| Phase 23 P01 | 3 | 2 tasks | 2 files |
| Phase 23 P02 | 3 | 2 tasks | 2 files |
| Phase 24 P01 | 3 | 2 tasks | 2 files |
| Phase 24 P02 | 4 | 2 tasks | 24 files |
| Phase 24-featured-section-cross-platform-linking P02 | 236 | 2 tasks | 24 files |

## Session Continuity

Last session: 2026-02-23 (Phase 24 Plan 02 execution)
Stopped at: Completed 24-02 (HTML implementation + cross-platform linking) — Phase 24 COMPLETE
Resume file: None (ready for next phase planning)

**Next step:** Plan Phase 25 (Skills & Endorsements optimization) or continue with remaining v1.4 phases

---
*v1.0 shipped: 2026-02-19*
*v1.1 shipped: 2026-02-21*
*v1.2 shipped: 2026-02-22*
*v1.3 shipped: 2026-02-23*
