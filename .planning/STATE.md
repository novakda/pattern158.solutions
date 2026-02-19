# Project State

## Project Reference

See: .planning/PROJECT.md (updated 2026-02-13)

**Core value:** Accurately and compellingly present Dan's professional identity and body of work to hiring managers, engineers, and potential clients
**Current focus:** Phase 6 - Inline Style Token Cleanup (complete)

## Current Position

Phase: 6 of 6 (Inline Style Token Cleanup)
Plan: 1 of 1 complete
Status: Phase 6 Plan 1 complete - CSS-02 and DARK-01 gap closure, 49 inline style token replacements
Last activity: 2026-02-19 - Completed 06-01: inline style token cleanup across 17 HTML files

Progress: [████████████████████] 100% Phase 6 Plan 1

## Performance Metrics

**Velocity:**
- Total plans completed: 11
- Average duration: ~9 min
- Total execution time: ~98 min

**By Phase:**

| Phase | Plans | Total | Avg/Plan |
|-------|-------|-------|----------|
| 1 | 3/3 | ~50min | ~17min |
| 2 | 2/2 | ~3min | ~1.5min |
| 3 | 2/2 | ~26min | ~13min |
| 4 | 2/2 | ~8min | ~4min |
| 5 | 1/1 | ~3min | ~3min |
| 6 | 1/1 | ~1min | ~1min |

**Recent Trend:**
- Last 5 plans: 03-02 (~20min), 04-01 (~5min), 04-02 (~3min), 05-01 (~2.5min), 06-01 (~1min)
- Trend: Consistent fast execution on metadata, validation, and cleanup tasks

*Updated after each plan completion*

**Detailed Metrics:**

| Plan | Duration | Tasks | Files |
|------|----------|-------|-------|
| 01-01 | ~35min | 3 | 14 |
| 01-02 | ~5min | 1 | 1 |
| 01-03 | ~10min | 2 | 14 |
| 02-01 | 88s | 2 | 1 |
| 02-02 | 2min | 3 | 14 |
| 03-01 | 6min | 2 | 15 |
| 03-02 | 20min | 2 | 14 |
| 04-01 | 5m12s | 2 | 14 |
| 04-02 | 2m48s | 2 | 2 |
| 05-01 | 2m30s | 2 | 19 |
| 06-01 | 1min | 2 | 17 |

## Accumulated Context

### Decisions

Decisions are logged in PROJECT.md Key Decisions table.
Recent decisions affecting current work:

- Factor website out of vault GSD project (separate development lifecycle)
- This repo is source of truth (HTML is canonical form)
- Static HTML, no framework (simplicity, zero dependencies)
- NTSB investigation aesthetic (unique brand differentiator)
- **Color source of truth: Option A** — keep implemented values (#1a2838, #17a2b8, #faf9f6) not design spec
- Body class scoping pulled forward from Plan 02 into Plan 01 (required for correctness)
- Semantic token naming: --color-primary (not --navy), --color-background (not --cream) for theme flexibility
- 62 design tokens established: 19 colors, 3 fonts, 9 spacing scale, 3 radii, 5 shadows, 2 text-shadow, 3 overlays
- Phase 1 complete: Zero inline styles, zero hardcoded colors, user-approved visual fidelity across all 14 pages
- [Phase 02-01]: Dark mode uses brand-aligned navy #1a2838 (not generic black) for backgrounds
- [Phase 02-01]: Nav/footer/hero keep dark appearance in both themes (no inverse token swaps)
- [Phase 02-01]: Theme toggle icon visibility uses display:none/block (not opacity) for cleaner accessibility
- [Phase 02-02]: Inline blocking script placed before CSS to prevent FOUC
- [Phase 02-02]: localStorage used for theme persistence (not cookies or server-side)
- [Phase 02-02]: System preference respected only on first visit (manual override takes precedence)
- **Phase 2 complete**: Dark mode fully functional with toggle, persistence, cross-tab sync, and accessibility
- [Phase 03-01]: Removed Work/About anchor links from nav (were index.html section anchors, not pages)
- [Phase 03-01]: Absolute-from-root paths (/page.html) used for all navigation to avoid relative path fragility
- [Phase 03-01]: No role="menu" attribute - semantic HTML approach for cleaner accessibility
- [Phase 03-01]: GPU-accelerated transforms (translate3d) for 60fps mobile menu animation
- [Phase 03-01]: 48px minimum touch targets for WCAG 2.1 AA compliance
- [Phase 03-02]: Script placed BEFORE theme toggle script for consistent DOM load order
- [Phase 03-02]: Used var (not let/const) for maximum browser compatibility without transpiler
- [Phase 03-02]: Automated Playwright testing replaced manual verification checkpoint (27/27 tests passed)
- **Phase 3 complete**: Responsive navigation with hamburger menu, keyboard accessibility, and automated testing
- [Phase 04-01]: Used existing logo (1024x559) for og:image despite suboptimal size (ideal: 1200x630) - proper social image out of scope
- [Phase 04-01]: Set og:type=article for exhibit pages (case studies) vs og:type=website for root pages
- [Phase 04-01]: Added Person schema only to index.html (primary identity page) not to all pages to avoid redundancy
- [Phase 04-02]: Omitted lastmod/changefreq/priority from sitemap.xml per Google best practices (ignored fields)
- [Phase 04-02]: Implemented comprehensive automated validation (10 categories) for reproducible SEO audit
- **Phase 4 complete**: Full SEO coverage with meta tags, OG tags, JSON-LD, sitemap, robots.txt, and validation
- [Phase 05-01]: --color-primary changed from #17a2b8 to #0e7c8c for WCAG 4.5:1 compliance (preserves teal brand identity)
- [Phase 05-01]: Used JPEG quality 72 (not 85) for hero compression — Q85 gave <1% reduction, Q72 gives 20% at acceptable quality
- [Phase 05-01]: Used Pillow (Python) for compression — jpegoptim unavailable, sudo not accessible in execution environment
- **Phase 5 complete**: PERF-01, PERF-02, PERF-03 all satisfied — hero compressed, no lazy-load candidates, display=swap confirmed
- [Phase 06-01]: #888 attribution text mapped to --color-text-muted (not --color-text-source) — text-source fails WCAG 4.5:1 at 3.37:1, text-muted achieves 5.45:1
- [Phase 06-01]: Inline style= values fixed in place (token substitution only) — CSS class extraction is out of scope for gap closure
- [Phase 06-01]: background: white maps to --color-surface, not --color-background (page canvas token)
- **Phase 6 complete**: CSS-02 and DARK-01 gaps closed — 49 inline style token replacements across 17 HTML files

### Quick Tasks Completed

| # | Task | Date | Commit |
|---|------|------|--------|
| 1 | Anonymize site content — remove all individual names (except Dan Novak), phone numbers, internal product names (GPiLEARN, Ready2Role, CSBB), revenue/ranking data, and HSBC security vulnerability details across all 14 HTML pages | 2026-02-13 | cd9f10e |
| 2 | Full 14-page content audit — verified all internal links, anchors, images, sitemap; fixed inaccurate FAQ link text "Power Platform project" -> "featured projects" | 2026-02-18 | 28aad09 |

### Pending Todos

None.

### Blockers/Concerns

None.

**Research Notes:**
- Research identified CSS duplication as critical blocker requiring Phase 1 completion before other work
- Dark mode must use brand-aligned palette (navy/teal/cream) not generic black to preserve NTSB aesthetic
- Navigation requires absolute-from-root paths (/page.html) to avoid relative path fragility in exhibits/ subdirectory

## Session Continuity

Last session: 2026-02-19 (06-01 complete)
Stopped at: Completed 06-01-PLAN.md - inline style token cleanup (CSS-02 and DARK-01 gap closure)
Resume file: None

---
*All 6 phases complete. v1.0 milestone requirements (CSS-02 and DARK-01) fully satisfied. Ready for Lighthouse validation.*
