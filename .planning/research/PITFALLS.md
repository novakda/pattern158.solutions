# Pitfalls Research

**Domain:** Static HTML Portfolio Site Quality Audit & Polish
**Researched:** 2026-02-20
**Confidence:** MEDIUM-HIGH

## Critical Pitfalls

### Pitfall 1: Accessibility Regressions from Visual Changes

**What goes wrong:**
Visual polish improvements (color refinements, typography changes, new focus states) inadvertently break WCAG AA compliance that was previously achieved. Common failures include new colors failing 4.5:1 contrast ratio, removed focus indicators during "cleanup", and dark mode changes that break light mode accessibility.

**Why it happens:**
Developers focus on how changes look in isolation (testing only one theme, one viewport size) without comprehensive cross-state verification. The site already has WCAG AA compliance, making regression testing feel redundant. Changes to CSS custom properties cascade in unexpected ways across light/dark themes.

**How to avoid:**
1. Test every visual change in BOTH light and dark modes
2. Verify contrast ratios with automated tools (4.5:1 for normal text, 3:1 for large text and UI components)
3. Test design-system components in the pages where they are deployed to detect accessibility regressions caused by inherited styles
4. Maintain automated accessibility tests (Playwright) that run on every change
5. Never remove focus indicators without replacing them with higher-quality alternatives

**Warning signs:**
- CSS changes to color variables without checking all contexts where used
- Focus state modifications for "cleaner" appearance
- Typography size changes that affect contrast calculations
- Adding new visual elements (badges, icons) without contrast verification

**Phase to address:**
Every phase involving visual changes must include accessibility regression testing as a gate. Specifically:
- Color refinement phase: contrast verification required
- Typography phase: focus state verification required
- Layout polish phase: full WCAG re-audit required

**Sources:**
- [WebAIM: 2026 Predictions: The Next Big Shifts in Web Accessibility](https://webaim.org/blog/2026-predictions/)
- [Color Contrast Accessibility: Complete WCAG 2025 Guide](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [WCAG 2.2: What You Need to Know in 2026](https://accessibe.com/blog/knowledgebase/wcag-two-point-two)

---

### Pitfall 2: Mobile Regressions from Desktop Layout Improvements

**What goes wrong:**
Layout improvements that look great on desktop break mobile responsive design. Typography changes overflow containers, new spacing rules create horizontal scrolling, or desktop-optimized navigation interferes with the existing hamburger menu.

**Why it happens:**
Testing during polish happens primarily on desktop viewports where problems are most visible. The hamburger menu already works, so mobile feels "done." Typography changes use fixed units instead of relative units, breaking the responsive scaling system.

**How to avoid:**
1. Test every layout change at 320px, 768px, 1024px, and 1920px widths
2. Use fluid typography (clamp(), em/rem) instead of fixed px values
3. Run automated visual regression tests across viewport sizes
4. Verify hamburger menu still functions after navigation changes
5. Check for horizontal overflow with browser dev tools mobile emulation

**Warning signs:**
- New CSS rules using px units for typography or spacing
- Changes to navigation structure without mobile testing
- Desktop-first mindset during polish ("make this look better on my monitor")
- Content reflow or overflow indicators in browser dev tools

**Phase to address:**
Layout consistency phase must include mobile-first verification. Typography phase requires responsive scaling verification before completion.

**Sources:**
- [Responsive Web Design Best Practices in 2026](https://www.blushush.co.uk/blogs/responsive-web-design-best-practices-in-2026)
- [Responsive Website Design in 2026: What Matters Now](https://vajraglobal.com/blogs/responsive-website-development-in-2026-key-technologies-and-trends-you-cannot-ignore/)

---

### Pitfall 3: Dark Mode Regressions from Light Theme Changes

**What goes wrong:**
Refining the light theme breaks dark mode in subtle ways: icons lose visibility, borders disappear, hover states become unreadable, or new elements only have light-theme styling defined. The dark theme passes WCAG on launch but fails after "polish" improvements.

**Why it happens:**
82.7% of consumers use dark mode, but development/testing often happens in light mode. CSS custom property changes affect both themes, but verification only happens in the active theme. New components get styled for light mode first, with dark mode as an afterthought.

**How to avoid:**
1. Every CSS change must be verified in both light AND dark themes before committing
2. Use CSS custom properties consistently - never hardcode colors
3. Maintain automated visual regression tests for both themes
4. Icons, charts, and visuals must be tested on dark backgrounds for visibility
5. Document which custom properties affect which theme contexts

**Warning signs:**
- CSS changes using hardcoded color values instead of var(--color-*)
- New components with only light-mode styling
- Testing only in your preferred theme
- User reports of "dark mode looks broken" after polish updates

**Phase to address:**
Color refinement phase must verify both themes. Every visual change phase requires dual-theme gate before completion.

**Sources:**
- [Dark Mode Design Best Practices in 2026](https://www.tech-rz.com/blog/dark-mode-design-best-practices-in-2026/)
- [The Designer's Guide to Dark Mode Accessibility](https://www.accessibilitychecker.org/blog/dark-mode-accessibility/)
- [Dark Mode Usage: Data Reports 2026](https://wifitalents.com/dark-mode-usage-statistics/)

---

### Pitfall 4: CSS Specificity Wars from Polish Layer

**What goes wrong:**
Adding polish rules on top of existing CSS creates escalating specificity battles. Developers add more specific selectors to override existing styles, leading to !important declarations, inline styles, and unmaintainable CSS. Future changes become progressively harder.

**Why it happens:**
It's faster to add `.section.polished .card` than to refactor the original `.card` rule. Each override compounds the problem. The single CSS file (2,877 LOC) makes it tempting to append rather than refactor. No CSS architecture guidelines for the polish layer.

**How to avoid:**
1. Refactor existing rules instead of overriding them
2. Use CSS cascade layers (@layer) to manage polish changes separately
3. Avoid !important except for utility classes
4. Maintain consistent specificity patterns (prefer single class selectors)
5. Audit CSS regularly with tools to identify specificity issues
6. Use @scope for component-specific polish changes

**Warning signs:**
- New rules with 3+ class selectors to override existing rules
- !important declarations appearing in new CSS
- Copy-pasted rules with slight modifications
- Difficulty predicting which style will apply

**Phase to address:**
Before starting visual polish phases, establish CSS architecture guidelines. Each polish phase should include CSS quality audit before completion.

**Sources:**
- [The Hidden Dangers of CSS Specificity Wars](https://blog.pixelfreestudio.com/the-hidden-dangers-of-css-specificity-wars/)
- [CSS @scope: Complete Guide to Scoped Styles 2026](https://devtoolbox.dedyn.io/blog/css-scope-complete-guide)
- [CSS in 2026: 7 Features That Let the Browser Do the Work](https://www.southwellmedia.com/blog/css-2026-7-features-that-let-browsers-do-the-work)

---

### Pitfall 5: Content Over-Optimization Losing Important Context

**What goes wrong:**
Aggressive content pruning removes "redundant" information that serves different audiences or use cases. Removing context for brevity makes content harder to understand. SEO optimization strips away the human voice and storytelling that makes the portfolio compelling.

**Why it happens:**
Content audits focus on eliminating redundancy, but what looks redundant may serve different user journeys. Writers optimize for keywords without considering how it reads to humans. The NTSB aesthetic's detailed approach gets mistaken for "too wordy."

**How to avoid:**
1. Before removing content, identify which audience needs it and why it exists
2. Balanced keyword distribution without over-optimization - preserve natural voice
3. Use hybrid approach: AI tools for flagging issues, human judgment for context decisions
4. Test content changes with representative users before finalizing
5. Preserve storytelling and first-hand expertise signals for AI search visibility
6. Remember: different content serves different audiences (hiring managers vs. engineers vs. clients)

**Warning signs:**
- Removing all instances of similar information across pages without considering context
- Making content "tighter" by removing all examples or explanatory detail
- SEO recommendations that make content read unnaturally
- Content that becomes generic after "optimization"

**Phase to address:**
Content audit phase must include audience journey mapping before pruning. Every content change requires readability verification from a fresh reader.

**Sources:**
- [The post-AI cleanup: Why 2026 is the year of the content audit](https://wgcontent.com/blog/post-ai-cleanup-content-audit/)
- [A Smarter SEO Content Audit: Aligning For Performance, Purpose & LLM Visibility](https://www.searchenginejournal.com/seo-content-audit-aligning-for-performance-purpose-llm-visibility/556584/)
- [How to Perform a Content Audit in 2026](https://seoprofy.com/blog/content-audit/)

---

### Pitfall 6: Visual Inconsistency from Piecemeal Polish

**What goes wrong:**
Polishing pages one at a time creates visual drift. Page A gets new button styles, Page B still has old styles, Page C has a hybrid. By the end, the site has 3-4 different visual treatments instead of unified polish. Internal consistency is lost.

**Why it happens:**
Natural tendency to complete pages sequentially without tracking cross-page elements. 17 pages with exhibits in subdirectory make it easy to miss pages. No visual element tracking system. Changes improve individual pages but break site-wide consistency.

**How to avoid:**
1. Maintain a style/branding guide documenting all visual elements (buttons, fonts, colors, spacing)
2. Make cross-cutting changes globally (all buttons, all headings) rather than per-page
3. Use templated approach - define component styles once, apply everywhere
4. Create checklist of visual elements that must stay consistent (fonts, button styles, card layouts, spacing patterns)
5. Visual regression testing across ALL pages before marking phase complete

**Warning signs:**
- Updating visual elements on one page without checking other pages
- Different button styles across pages
- Inconsistent spacing or typography hierarchy
- Having to remember "which version" of a component is on which page

**Phase to address:**
Visual polish phase must establish global component system first. Each change phase requires all-pages verification before completion.

**Sources:**
- [8 Common Website Design Mistakes to Avoid in 2026](https://www.zachsean.com/post/8-common-website-design-mistakes-to-avoid-in-2026-for-better-conversions-and-user-experience)
- [A Beginner's Guide to Achieving Web Design Consistency](https://gofishdigital.com/blog/guide-design-consistency/)
- [Consistency in web design](https://www.nibusinessinfo.co.uk/content/consistency-web-design)

---

### Pitfall 7: Scope Creep - "While We're Here" Syndrome

**What goes wrong:**
Audit reveals improvement opportunities that expand beyond original scope. "Let's also add..." leads to timeline extensions, budget overruns, and never-shipping syndrome. 52% of projects experience scope creep, especially during refinement work.

**Why it happens:**
Polish work naturally surfaces opportunities. The site is already good, so improvements feel low-risk. No clear boundaries between "quality audit" and "new features." Examining existing work triggers ideas for enhancements.

**How to avoid:**
1. Document explicit scope boundaries before starting (reference PROJECT.md "Out of Scope")
2. Maintain a "future enhancements" backlog for good ideas outside current scope
3. Require formal change request process with timeline/effort impact assessment
4. Use "trade-off visibility" - adding X means removing/deferring Y
5. Distinguish between fixing quality issues (in scope) vs. adding features (out of scope)
6. Time-box each audit phase - when time expires, phase ends

**Warning signs:**
- "While we're here, let's also..." statements
- Adding new pages or features during "audit and polish"
- Timeline extending without corresponding scope reduction elsewhere
- Perfectionism preventing phase completion

**Phase to address:**
Project planning must establish scope boundaries with examples. Each phase kickoff should reaffirm scope boundaries and defer new ideas to backlog.

**Sources:**
- [Scope Creep Control | Development Project Focus 2026](https://docs.gitscrum.com/en/best-practices/managing-scope-creep-in-development-projects)
- [How to Avoid Scope Creep in Website Redesign Projects](https://www.f22labs.com/blogs/how-to-avoid-scope-creep-in-website-redesign-projects/)
- [How to Handle Scope Creep in Web Design](https://speckyboy.com/scope-creep-web-design/)

---

### Pitfall 8: Breaking SEO from Content Reorganization

**What goes wrong:**
Information architecture improvements move content between pages, change page purposes, or consolidate pages - creating dead links (internal and external), breaking Open Graph metadata, losing keyword rankings, or confusing returning visitors who bookmarked old structure.

**Why it happens:**
Content audit identifies logical reorganization opportunities. Current structure has quirks that "could be better." Focus on ideal organization without considering existing links, search rankings, or user expectations.

**How to avoid:**
1. Audit internal links before moving content - update all references
2. Implement proper 301 redirects if consolidating pages (not applicable to static HTML - must maintain URLs)
3. Verify Open Graph metadata matches new page purpose after changes
4. Check which pages have external backlinks before restructuring (avoid changing URLs)
5. Content moves should preserve URLs - move content within existing files, not to new files
6. Test navigation flows to ensure users can still find key information

**Warning signs:**
- Planning to change page URLs or consolidate pages
- Moving content without checking where it's linked from
- Reorganizing without considering existing search rankings
- Treating information architecture as purely logical exercise

**Phase to address:**
Information architecture phase must include link audit and URL stability verification. SEO metadata must be updated when page purposes change.

**Sources:**
- [The Complete Website Audit Checklist for 2026 (SEO + UX)](https://redrattlercreative.com/complete-website-audit-checklist-2026/)
- [Common Website Audit Mistakes and How to Avoid Them](https://acclaim.agency/blog/common-website-audit-mistakes-and-how-to-avoid-them)
- [Website Audits in 2026: SEO, AI Search, Performance](https://websi.com/why-full-website-audits-matter-in-2026-with-data-led-insights-you-need/)

---

## Technical Debt Patterns

Shortcuts that seem reasonable but create long-term problems.

| Shortcut | Immediate Benefit | Long-term Cost | When Acceptable |
|----------|-------------------|----------------|-----------------|
| Adding override CSS instead of refactoring | Faster to ship change | CSS specificity wars, unmaintainable stylesheet | Never - always refactor |
| Testing only in light mode | 50% faster testing | Dark mode breaks in production | Never - both themes required |
| Testing only on desktop viewport | Matches development environment | Mobile users experience broken layout | Never - mobile-first required |
| Skipping accessibility re-verification | Assumes previous compliance maintained | WCAG AA regressions go undetected | Never - verify on every visual change |
| Manual testing without automated regression | Quick validation for small changes | Regressions slip through as site evolves | Only for one-off hotfixes, not systematic changes |
| Approving changes in isolation without cross-page check | Faster page-by-page progress | Visual inconsistency across site | Never for visual elements that appear on multiple pages |
| Inline color values instead of CSS custom properties | Saves looking up variable name | Theme changes require finding/replacing all instances | Never - site has dark mode |

## Integration Gotchas

Common mistakes when polish changes affect integrated systems.

| Integration | Common Mistake | Correct Approach |
|-------------|----------------|------------------|
| Dark mode theme toggle | Changing theme detection logic breaks localStorage persistence | Test theme toggle, persistence, system preference detection, and FOUC prevention after any theme-related changes |
| Hamburger menu | Modifying navigation structure breaks mobile menu JavaScript | Test hamburger functionality, keyboard accessibility, and ARIA attributes after nav changes |
| SEO metadata (Open Graph, JSON-LD) | Content changes don't update page descriptions | Verify meta descriptions, OG tags, and structured data match new content |
| CSS custom properties | Changing variable values breaks components that depend on them | Document which components use which variables; test all contexts |
| Analytics (future) | Layout changes break event tracking | Not yet applicable (TECH-04 not implemented), but will require verification when added |

## Performance Traps

Patterns that work at small scale but fail as usage grows.

| Trap | Symptoms | Prevention | When It Breaks |
|------|----------|------------|----------------|
| Growing CSS file without pruning | Stylesheet grows from 2,877 to 4,000+ lines | Audit for unused rules; refactor instead of appending | Minimal risk - static site loads fast, but affects maintainability |
| Multiple font weights/variants | Adding "just one more" font weight | Audit font usage; use variable fonts; font-display: swap | Already optimized with font-display: swap |
| Uncompressed images for "quality" | Reverting compression for "better visuals" | Maintain Q72 JPEG compression standard; measure quality objectively | Hero image already optimized (118KB at Q72) |
| Typography complexity | Adding multiple heading variants and sizes | Maintain hierarchical consistency; use fewer, well-defined levels | Not a performance issue but creates visual inconsistency |

## Security Mistakes

Domain-specific security issues beyond general web security.

| Mistake | Risk | Prevention |
|---------|------|------------|
| Hardcoding email addresses in HTML | Increased spam/harvesting | Already using mailto: link with visible email - acceptable for portfolio site |
| Exposing .planning/ directory | Research/strategy exposed to public | Verify .planning/ not deployed to production; check build/deploy process |
| Committing credentials to git | API keys leaked in version history | N/A - static site has no credentials |
| Client-side only theme preference | Minor privacy issue (localStorage readable) | Acceptable - no sensitive data, localStorage is standard for theme |

## UX Pitfalls

Common user experience mistakes in this domain.

| Pitfall | User Impact | Better Approach |
|---------|-------------|-----------------|
| Over-polishing navigation | Changes familiar navigation patterns for returning visitors | Preserve core navigation structure; polish visual treatment only |
| Removing "redundant" content | Different audiences need different entry points and context levels | Map content to user journeys before pruning; preserve multi-audience value |
| Typography changes for aesthetics | Reduced readability on mobile or at different zoom levels | Use relative units; test at 200% zoom; verify mobile readability |
| "Cleaner" design removes signifiers | Users can't identify interactive elements or navigation cues | Maintain clear affordances; test with fresh users |
| Consistency over usability | Forcing NTSB aesthetic where UX should win | Follow PROJECT.md principle: "UX takes priority when best practices conflict with NTSB aesthetic" |
| Information architecture for logic | New structure makes sense to architect but confuses users | Validate changes against actual user tasks and mental models |
| Content "improvement" changes voice | Professional polish removes personality and differentiation | Preserve brand voice and unique elements while improving clarity |

## "Looks Done But Isn't" Checklist

Things that appear complete but are missing critical pieces.

- [ ] **Visual polish:** Often missing dark mode verification - verify BOTH themes for every visual change
- [ ] **Typography changes:** Often missing mobile responsiveness check - verify 320px, 768px, 1024px viewports
- [ ] **Layout improvements:** Often missing accessibility re-verification - run WCAG contrast and focus state checks
- [ ] **Content edits:** Often missing SEO metadata updates - verify meta descriptions and OG tags match new content
- [ ] **Navigation changes:** Often missing cross-page consistency check - verify all 17 pages including exhibits
- [ ] **CSS refactoring:** Often missing specificity audit - check for increasing selector complexity or !important usage
- [ ] **Component polish:** Often missing all-instances verification - changing one button style requires updating all buttons
- [ ] **Color refinement:** Often missing theme integration check - new colors must work in light AND dark mode
- [ ] **Information architecture:** Often missing link audit - verify no broken internal links after content moves
- [ ] **Phase completion:** Often missing regression test suite run - verify automated Playwright tests still pass

## Recovery Strategies

When pitfalls occur despite prevention, how to recover.

| Pitfall | Recovery Cost | Recovery Steps |
|---------|---------------|----------------|
| Accessibility regression | LOW | Run automated WCAG checks; fix contrast/focus issues; re-verify both themes |
| Mobile layout broken | LOW-MEDIUM | Use browser dev tools to identify overflow/reflow; switch to relative units; test viewports |
| Dark mode regression | LOW | Check CSS custom property usage; verify new components have dark theme styles; visual comparison test |
| CSS specificity war | MEDIUM | Audit specificity patterns; refactor high-specificity rules to simpler selectors; consider @layer |
| Content over-optimization | MEDIUM | Restore removed content from git history; re-evaluate what serves which audience |
| Visual inconsistency | MEDIUM | Document all visual variants; standardize on one; apply site-wide; regression test all pages |
| Scope creep | MEDIUM-HIGH | Re-establish boundaries; move new features to backlog; return to original milestone scope |
| SEO/link breaking | HIGH | Audit all internal links; update references; verify external backlinks still work; monitor search rankings |
| Lost brand voice | HIGH | Restore from git history; re-evaluate content changes with brand guidelines; fresh review |

## Pitfall-to-Phase Mapping

How roadmap phases should address these pitfalls.

| Pitfall | Prevention Phase | Verification |
|---------|------------------|--------------|
| Accessibility regressions | Every visual change phase | Automated WCAG tests pass; manual verification of focus states and contrast in both themes |
| Mobile regressions | Layout consistency phase, Typography phase | Visual regression tests at 320px/768px/1024px pass; no horizontal overflow |
| Dark mode regressions | Color refinement phase, Any visual change | Both themes verified; automated visual comparison tests pass |
| CSS specificity wars | Before visual polish begins | CSS complexity audit shows no increasing specificity trends; no new !important declarations |
| Content over-optimization | Content audit phase | User journey mapping complete; test readers confirm clarity without voice loss |
| Visual inconsistency | Visual polish phase | All 17 pages verified; component inventory shows single variant per element type |
| Scope creep | Project planning phase | Milestone completes within defined scope; backlog tracks deferred ideas |
| SEO/link breaking | Information architecture phase | Link audit shows zero broken internal links; meta tags match page purposes |

## Audit-Specific Recovery Checklist

When polish goes wrong, recover with this process:

1. **Stop and assess:** Don't compound the problem with more changes
2. **Git history:** Identify when regression was introduced
3. **Scope check:** Is this a regression or scope creep revealing itself?
4. **Cross-state verification:** Test the change in ALL contexts (light/dark, mobile/desktop, all pages)
5. **Automated tests:** Run full Playwright test suite to identify cascading failures
6. **User perspective:** Fresh eyes review - does this actually improve the experience?
7. **Revert if needed:** Better to revert and re-approach than ship broken polish

## Sources

### Accessibility & Testing
- [WebAIM: 2026 Predictions: The Next Big Shifts in Web Accessibility](https://webaim.org/blog/2026-predictions/)
- [Color Contrast Accessibility: Complete WCAG 2025 Guide](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [WCAG 2.2: What You Need to Know in 2026](https://accessibe.com/blog/knowledgebase/wcag-two-point-two)
- [The Designer's Guide to Dark Mode Accessibility](https://www.accessibilitychecker.org/blog/dark-mode-accessibility/)

### Dark Mode & Responsive Design
- [Dark Mode Design Best Practices in 2026](https://www.tech-rz.com/blog/dark-mode-design-best-practices-in-2026/)
- [Dark Mode Usage: Data Reports 2026](https://wifitalents.com/dark-mode-usage-statistics/)
- [Responsive Web Design Best Practices in 2026](https://www.blushush.co.uk/blogs/responsive-web-design-best-practices-in-2026)
- [Responsive Website Design in 2026: What Matters Now](https://vajraglobal.com/blogs/responsive-website-development-in-2026-key-technologies-and-trends-you-cannot-ignore/)

### CSS Architecture
- [The Hidden Dangers of CSS Specificity Wars](https://blog.pixelfreestudio.com/the-hidden-dangers-of-css-specificity-wars/)
- [CSS @scope: Complete Guide to Scoped Styles 2026](https://devtoolbox.dedyn.io/blog/css-scope-complete-guide)
- [CSS in 2026: 7 Features That Let the Browser Do the Work](https://www.southwellmedia.com/blog/css-2026-7-features-that-let-browsers-do-the-work)

### Content & Information Architecture
- [The post-AI cleanup: Why 2026 is the year of the content audit](https://wgcontent.com/blog/post-ai-cleanup-content-audit/)
- [A Smarter SEO Content Audit: Aligning For Performance, Purpose & LLM Visibility](https://www.searchenginejournal.com/seo-content-audit-aligning-for-performance-purpose-llm-visibility/556584/)
- [How to Perform a Content Audit in 2026](https://seoprofy.com/blog/content-audit/)

### Visual Consistency & Design
- [8 Common Website Design Mistakes to Avoid in 2026](https://www.zachsean.com/post/8-common-website-design-mistakes-to-avoid-in-2026-for-better-conversions-and-user-experience)
- [A Beginner's Guide to Achieving Web Design Consistency](https://gofishdigital.com/blog/guide-design-consistency/)
- [Consistency in web design](https://www.nibusinessinfo.co.uk/content/consistency-web-design)

### Project Management
- [Scope Creep Control | Development Project Focus 2026](https://docs.gitscrum.com/en/best-practices/managing-scope-creep-in-development-projects)
- [How to Avoid Scope Creep in Website Redesign Projects](https://www.f22labs.com/blogs/how-to-avoid-scope-creep-in-website-redesign-projects/)
- [How to Handle Scope Creep in Web Design](https://speckyboy.com/scope-creep-web-design/)

### Website Audits
- [The Complete Website Audit Checklist for 2026 (SEO + UX)](https://redrattlercreative.com/complete-website-audit-checklist-2026/)
- [Common Website Audit Mistakes and How to Avoid Them](https://acclaim.agency/blog/common-website-audit-mistakes-and-how-to-avoid-them)
- [Website Audits in 2026: SEO, AI Search, Performance](https://websi.com/why-full-website-audits-matter-in-2026-with-data-led-insights-you-need/)

---
*Pitfalls research for: Static HTML Portfolio Site Quality Audit & Polish*
*Researched: 2026-02-20*
*Context: 17-page site with dark mode, mobile responsive, WCAG AA compliant - adding polish without breaking what works*
