# Phase 15: Comprehensive Accessibility QA - Context

**Gathered:** 2026-02-21
**Status:** Ready for planning

<domain>
## Phase Boundary

Full accessibility audit and cross-browser verification across all 22 pages after v1.2 content changes. Covers WCAG AA re-verification, automated test suite creation, cross-browser rendering verification, light/dark mode visual verification, and semantic HTML audit. This phase both audits AND fixes issues found.

</domain>

<decisions>
## Implementation Decisions

### Browser & Device Targets
- Claude's discretion on browser matrix (reasonable set for a professional portfolio site)
- Mobile-first verification priority — mobile viewports tested rigorously, not just desktop
- Claude's discretion on specific test viewports
- Primarily emulation-based testing (Chrome DevTools), with real device spot-checks if issues arise
- Manual toggle for dark mode (not system-preference-only)
- Light and dark mode are equal priority — both must look polished
- Claude's discretion on dark mode toggle verification depth

### Fix-or-Report Boundary
- Audit AND fix in the same phase — goal is 22 clean pages at the end
- Design/layout fixes handled case-by-case: small visual tweaks OK, major redesigns flagged for review
- Full semantic HTML overhaul — restructure pages to use proper semantic elements wherever appropriate
- Cross-browser rendering bar is "functionally equivalent" — content readable, navigation works, looks professional; minor rendering differences between browsers are acceptable
- ARIA/semantic markup correctness is sufficient for screen reader compatibility — no direct screen reader testing required

### Claude's Discretion
- Browser matrix selection
- Test viewport selection
- WCAG level (AA floor, Claude decides which AAA criteria to pursue)
- Fix priority ordering
- Keyboard navigation testing depth
- Dark mode toggle verification depth

### Test Suite Permanence
- Permanent test suite that lives in the repo and can be re-run after future changes
- Dev dependencies are acceptable (package.json with devDependencies for testing tools — site itself stays zero-build)
- Claude's discretion on test invocation method (npm test vs standalone script)
- Claude's discretion on automated vs manual cross-browser testing split

### Verification Evidence
- Audience is dual: useful internally AND presentable to employers/clients as proof of accessibility
- Both internal markdown report (in .planning/) AND public accessibility statement page on the site
- Claude's discretion on public accessibility statement detail level
- Full screenshot evidence: every page in both light/dark modes at key viewports
- Claude's discretion on screenshot storage location
- Claude's discretion on accessibility page placement (footer link, nav link, or unlisted)
- Full Lighthouse reports captured per page (performance, accessibility, best practices, SEO — not just a11y)
- Per-page WCAG criterion checklist in internal report — every page gets pass/fail per criterion

</decisions>

<specifics>
## Specific Ideas

- The audit results serve double duty: internal QA tracking AND a portfolio showcase of accessibility commitment
- Full Lighthouse scores (all categories) captured since the tooling is already running
- Per-page WCAG criterion checklist provides comprehensive traceability for the internal report
- Screenshots serve as visual evidence and can demonstrate before/after improvements

</specifics>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 15-comprehensive-accessibility-qa*
*Context gathered: 2026-02-21*
