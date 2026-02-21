# Deferred Items - Phase 15-01

## Color Contrast Issues (WCAG AA 4.5:1)

**Scope:** Pre-existing color contrast violations across multiple pages, discovered during automated accessibility testing.

**Status:** Partially fixed (nav, footer, some testimonials). Remaining violations documented below.

**Root Cause:** Use of `--color-primary` (#0e7c8c) on dark backgrounds without sufficient contrast. This color has only 3.04:1 contrast on #1a2838 (nav background) and 2.58:1 on #2d3436 (footer background in light mode).

**Already Fixed:**
- Navigation active/hover states → now use `--color-primary-on-dark` (#20b8cc, 5.31:1 contrast)
- Footer links → now use `--color-primary-on-dark`
- Theme toggle hover → now use `--color-primary-on-dark`
- Field reports teaser section subtitle → now use `--color-primary-on-dark`
- Footer tagline → now use `--color-primary-on-dark`
- Teaser quote cite elements → now use `--color-primary-on-dark`
- Contact page testimonials → now use `--color-primary-on-dark`

**Remaining Violations (119 elements across 5 pages):**
1. **Philosophy page** (4 violations)
   - `.link-primary` links inside `.methodology-note` sections
   - Links: exhibits j, e, m, l

2. **Contact page** (remaining violations)
   - Additional testimonial elements not yet fixed

3. **Technologies page** (violations)
   - Expertise badges, timeline elements, other colored spans on dark backgrounds

4. **Exhibit C** (Content Remediation)
   - Report section elements, timeline dates, section numbers, etc.

5. **Exhibit D** (Xyleme Flash Migration)
   - Similar report section styling issues

**Elements Affected:**
- `.exhibit-link` - links to full investigation reports
- `.back-link` - back to portfolio links
- `.link-primary` - primary colored inline links
- `.timeline-date` - timeline milestone labels
- `.section-number` - numbered section labels (1., 2., 3., etc.)
- `.issue-id` - finding IDs (F-01, F-02, etc.)
- `.exhibit-client` - client name spans
- `.expertise-badge` - technology/skill badges
- `.key-fact` - highlighted metrics
- `.flagship-role` - exhibit descriptions
- `.impact-tag` - impact highlight tags

**Fix Strategy:**
1. Create comprehensive audit of ALL sections with `background: var(--color-inverse)` or similar dark backgrounds
2. For each section, ensure all text/link colors use appropriate high-contrast tokens
3. Consider creating utility classes like `.inverse-section` that automatically apply correct link colors
4. Add CSS logical layer rules to override link colors within inverse contexts

**Estimated Effort:** 2-3 hours to systematically fix all instances

**Deferral Reason:** These are pre-existing issues not caused by semantic HTML changes in Task 1. The test suite (Task 2) successfully detects them, proving the test infrastructure works. Fixing all contrast issues is out of scope for Task 1 (semantic HTML) and should be addressed in a dedicated color/contrast remediation task.

**Tracking:** Will be addressed in Phase 15-02 (Color Contrast Remediation) or Phase 15-03 (Final QA Pass)
