# Project Research Summary

**Project:** Pattern 158 Solutions Website v1.1 Comprehensive Quality Audit & Polish
**Domain:** Static HTML portfolio site (systems architecture/engineering)
**Researched:** 2026-02-20
**Confidence:** HIGH

## Executive Summary

This is a quality audit and polish phase for a 17-page static HTML portfolio site with an established NTSB investigation report aesthetic. The site already achieves WCAG AA compliance, dark mode, mobile responsiveness, and fast loading. Research reveals the primary challenge is maintaining these achievements while auditing six quality dimensions (content, layout, color, accessibility, branding, information architecture) without introducing regressions.

The recommended approach is **foundation-first, then build upward**: start with CSS architecture cleanup to establish a solid token system, then content reorganization, then layout/visual polish, and finally comprehensive accessibility verification. This order minimizes rework - fixing CSS foundation after content changes would require re-touching all pages. The single 3,450-line CSS file with page-scoped classes requires disciplined refactoring rather than override-based polish to avoid specificity wars.

The critical risk is **regressions during polish**. Eight major pitfalls identified: accessibility breaks from visual changes tested in only one theme, mobile layout breaks from desktop-only testing, dark mode regressions, CSS specificity wars from polish overrides, content over-optimization losing brand voice, visual inconsistency from piecemeal changes, scope creep, and SEO/link breaking from IA changes. Mitigation: dual-theme verification gates, mobile-first testing, global component changes rather than per-page polish, and strict scope boundaries with backlog for deferred ideas.

## Key Findings

### Recommended Stack

For audit and polish work on this static HTML site with existing Playwright tests, research recommends **development-only audit tools** that integrate without changing production code. All tools are CLI-based, run locally or in CI, and respect the zero-dependency production constraint.

**Core audit technologies:**
- **@axe-core/playwright** (latest): Accessibility testing integrated with existing test suite - industry-standard axe engine, Playwright official recommendation, supports WCAG 2.1 A/AA/AAA with granular rules
- **Lighthouse CI** (latest): Automated performance, accessibility, SEO, best practices audits - Google's official tool designed for static sites via `staticDistDir`, tracks metrics over time, excellent for CI/CD
- **Stylelint** (latest): CSS linting for quality and consistency - over 100 built-in rules for errors, conventions, specificity management, standard in 2026
- **HTMLHint** (latest): HTML static analysis for markup quality - fast, configurable validation with rule customization

**Supplementary tools:**
- **pa11y** (9.x): Command-line a11y testing for spot-checks (requires Node 20+)
- **Nu HTML Checker (vnu)**: Official W3C validator for final release validation
- **broken-link-checker**: Internal/external link verification across 17 pages
- **Playwright screenshots**: Visual regression baseline (built-in, FREE, covers 80% of use cases before considering Percy/Argos)
- **Chrome DevTools Coverage**: Manual CSS unused selector detection (accurate, no build pipeline needed)

**Key principle:** Site remains pure HTML/CSS/minimal JS. Tools are dev dependencies only. Zero changes to production code.

### Expected Features

Research distinguishes between **table stakes** (users expect these), **differentiators** (competitive advantage), and **anti-features** (commonly requested but problematic).

**Must have (table stakes):**
- Fast loading (<2.5s LCP) - already achieved via static HTML, verify maintained
- Mobile-responsive design - already implemented, audit spacing consistency
- Clear navigation - already implemented, verify 100% consistency across 17 pages
- Case study storytelling (Challenge → Solution → Results) - audit exhibits for structure
- Quantifiable results/metrics - check if outcomes are highlighted vs. buried in prose
- Clean, uncluttered layout - audit whitespace, spacing, visual rhythm consistency
- No typos or grammatical errors - full proofreading pass required
- Contact information prominent - already in footer + contact page
- Social proof (testimonials) - already strong via Field Reports structure
- About/bio page - already exists, audit for best practices (~200 words, conversational, photo)

**Should have (competitive advantage):**
- Impact-first presentation - lead with outcomes in 30s hiring manager scan window
- Process documentation - senior-level differentiation, shows thinking not just deliverables
- Unique aesthetic - NTSB theme already achieved (memorable, distinctive)
- Curated selection - 9 exhibits from 28 years (quality over quantity) already good
- Generous whitespace - audit for intentional rhythm and professional/editorial feel
- Typography hierarchy - verify heading sizes, line-height, spacing for clear hierarchy
- Accessibility beyond AA - AAA focus indicators, enhanced semantic HTML considered
- Personalized tone - audit philosophy, about, FAQ for authentic vs. generic voice

**Defer (v2+):**
- Blog platform - thought leadership value but high maintenance burden, scope creep risk
- Process deep dives - expandable sections for interested readers
- Video testimonials - credibility boost but production overhead
- Downloadable case studies - PDF versions for offline review

**Anti-features (avoid):**
- Auto-playing animations/parallax - accessibility issues, conflicts with NTSB aesthetic
- Complex JavaScript frameworks - violates static constraint
- Maximalist navigation - clutters focus, conflicts with minimal design
- Resume download - should be tailored per application, not generic
- Content over-optimization that removes personality/differentiation

### Architecture Approach

The site uses a **page-scoped CSS architecture** within a single 3,450-line stylesheet. No build tools means component isolation through `.page-{name}` classes on `<body>` elements. 64 CSS custom properties provide semantic design tokens with dark mode support via `[data-theme="dark"]` overrides. HTML duplication (nav, footer) across 17 pages requires testing automation to maintain consistency.

**Major architectural considerations:**

1. **Design token coverage (64 tokens)** - 20 colors, 3 fonts, 9 spacing, 3 radii, 6 shadows, 3 overlays. Adequate for current needs but audit should add font-size tokens (currently using raw `rem` values inconsistently). All new styles MUST use existing tokens; hardcoded values break dark mode and maintainability.

2. **CSS specificity management** - Cascade managed through section order: Reset → Base → Global Components → Page-Scoped → Responsive. Adding polish overrides creates specificity wars. Research strongly recommends refactoring existing rules rather than appending overrides. Use of `!important` is an anti-pattern that creates maintenance nightmares.

3. **Component deduplication** - Stats bars, cards, buttons duplicated in page-scoped sections should be extracted to global components. Page-scoped sections should only contain differences, not full component redefinitions.

4. **Responsive token usage** - Mobile sections should use smaller spacing tokens (`--space-2xl` not `--space-4xl`) to avoid wasting vertical space on small screens.

5. **Recommended audit order** - Foundation first (CSS architecture), then content (information architecture), then layout/visual polish, finally accessibility/QA. This order minimizes rework because content changes after layout polish requires re-polishing.

**Scaling considerations:** Current architecture is appropriate for 1-20 pages. First bottleneck around 25 pages is CSS file size (users load entire 3,450 lines on every page). Second bottleneck around 15-20 pages is HTML duplication maintenance burden (nav/footer changes across all files). Both acceptable for current 17-page scope.

### Critical Pitfalls

Research identified eight major pitfalls with specific prevention strategies:

1. **Accessibility regressions from visual changes** - Visual polish breaks WCAG AA compliance previously achieved. Contrast ratio failures, removed focus indicators, dark mode changes breaking light mode. **Prevention:** Test EVERY visual change in BOTH themes, verify contrast with automated tools (4.5:1 text, 3:1 UI), maintain automated Playwright a11y tests, never remove focus without high-quality replacement. **Gate:** Every phase with visual changes requires dual-theme accessibility verification before completion.

2. **Mobile regressions from desktop improvements** - Layout changes that look great on desktop break mobile responsive design (overflow, scroll, hamburger menu issues). **Prevention:** Test every layout change at 320px/768px/1024px/1920px, use fluid typography (clamp, em/rem), verify hamburger menu functions, automated visual regression across viewports. **Gate:** Layout consistency phase must include mobile-first verification.

3. **Dark mode regressions from light theme changes** - 82.7% of consumers use dark mode, but development often happens in light mode only. **Prevention:** Every CSS change verified in both themes before commit, use CSS custom properties exclusively (never hardcode colors), icons/visuals tested on dark backgrounds. **Gate:** Color refinement phase must verify both themes; any visual change requires dual-theme completion criteria.

4. **CSS specificity wars from polish layer** - Adding polish rules on top creates escalating specificity battles and `!important` declarations. **Prevention:** Refactor existing rules instead of overriding, use CSS cascade layers (@layer) for polish changes, avoid `!important` except utility classes, maintain consistent specificity patterns. **Gate:** Before visual polish begins, establish CSS architecture guidelines and audit for specificity trends.

5. **Content over-optimization losing context** - Aggressive pruning removes "redundant" information serving different audiences, stripping personality and brand voice. **Prevention:** Map content to user journeys before pruning, preserve natural voice vs. keyword stuffing, test changes with representative users, remember different content serves different audiences (hiring managers vs. engineers vs. clients). **Gate:** Content audit phase requires audience journey mapping before removal decisions.

6. **Visual inconsistency from piecemeal polish** - Polishing pages one at a time creates visual drift (different button styles, spacing, typography across pages). **Prevention:** Make cross-cutting changes globally rather than per-page, maintain style guide documenting visual elements, use templated approach (define once, apply everywhere), visual regression testing across ALL 17 pages. **Gate:** Visual polish must establish global component system first; each change requires all-pages verification.

7. **Scope creep - "while we're here" syndrome** - Audit reveals opportunities that expand beyond original scope, leading to never-shipping. 52% of projects experience scope creep. **Prevention:** Document explicit scope boundaries, maintain future enhancements backlog, require formal change requests with impact assessment, distinguish fixing quality issues (in scope) vs. adding features (out of scope), time-box phases. **Gate:** Project planning establishes scope with examples; each phase kickoff reaffirms boundaries.

8. **Breaking SEO from content reorganization** - Content moves create dead links, break Open Graph metadata, lose keyword rankings. **Prevention:** Audit internal links before moving content, preserve URLs (no page consolidation without 301s), verify meta tags match new page purpose, check for external backlinks before URL changes. **Gate:** Information architecture phase requires link audit and URL stability verification before implementation.

## Implications for Roadmap

Based on architectural dependencies and pitfall prevention, recommended phase structure follows **foundation-first progression**:

### Phase 7: CSS Foundation & Token System Audit
**Rationale:** CSS architecture cleanup must come first because content and layout changes depend on a solid foundation. Fixing CSS after content reorganization requires re-touching all pages. The single 3,450-line stylesheet with page-scoped classes needs token coverage verification and component deduplication before polish begins.

**Delivers:**
- Complete design token coverage audit (find hardcoded values, verify dark mode coverage)
- Component deduplication (extract stats bars, cards, buttons to global section)
- Specificity cleanup (remove `!important`, fix cascade issues)
- Font-size tokens added (currently inconsistent raw `rem` usage)
- Clean, maintainable CSS with complete token coverage

**Addresses:**
- CSS quality and consistency (STACK.md: Stylelint enforcement)
- Foundation for typography hierarchy improvements (FEATURES.md: differentiator)
- Responsive token usage (ARCHITECTURE.md: mobile should use smaller spacing tokens)

**Avoids:**
- CSS specificity wars from polish overrides (PITFALLS.md #4)
- Dark mode regressions from hardcoded values (PITFALLS.md #3)
- Rework from fixing foundation after content/layout changes

**Research flag:** Standard patterns. CSS architecture research well-documented. No additional research needed.

### Phase 8: Content Quality & Information Architecture
**Rationale:** Content structure drives layout decisions. Reorganizing content after layout polish requires re-polishing. This phase establishes final content structure before visual work begins. Must complete before layout phase to avoid rework cycle.

**Delivers:**
- Content inventory across all 17 pages
- Redundancy elimination (ROT audit: Redundant, Obsolete, Trivial content)
- Information architecture optimization (right content on right pages)
- Full proofreading pass (zero typos/grammar errors)
- Case study structure audit (ensure all exhibits follow Challenge → Solution → Results)

**Addresses:**
- Table stakes: no typos, case study storytelling (FEATURES.md)
- Should have: personalized tone, clear problem framing (FEATURES.md)
- User journey optimization: hiring manager 30s scan, 3-4min review, full review (FEATURES.md)

**Avoids:**
- Content over-optimization losing brand voice (PITFALLS.md #5)
- Breaking SEO from IA changes (PITFALLS.md #8)
- Content-driven layout rework after visual polish complete

**Research flag:** May need light research on portfolio case study storytelling best practices if current exhibits significantly vary from Challenge → Solution → Results structure. Most research already covered in FEATURES.md.

### Phase 9: Layout & Spacing Consistency
**Rationale:** With CSS foundation clean and content finalized, layout polish can proceed without risk of undermining changes. Spacing consistency is the most common quality gap in portfolio sites and has high user impact. Must come before typography to establish visual rhythm first.

**Delivers:**
- Spacing consistency audit using design tokens
- Component alignment verification (cards, sections, CTAs)
- Mobile spacing audit (verify padding/margins consistent on mobile breakpoint)
- Generous whitespace implementation (professional/editorial feel)
- Grid/layout fixes for visual rhythm

**Addresses:**
- Table stakes: clean, uncluttered layout (FEATURES.md: highest impact)
- Should have: generous whitespace, minimal color scheme supporting work (FEATURES.md)
- Mobile responsive consistency (60% of traffic)

**Avoids:**
- Mobile regressions from desktop-only testing (PITFALLS.md #2)
- Visual inconsistency from piecemeal changes (PITFALLS.md #6)
- Accessibility regressions from layout changes (PITFALLS.md #1)

**Research flag:** Standard patterns. Layout consistency research well-covered. No additional research needed.

### Phase 10: Typography & Hierarchy
**Rationale:** Typography hierarchy depends on established spacing/layout rhythm. Font changes affect contrast ratios and must be verified for accessibility. Typography is a key professional polish signal but cannot be optimized until layout establishes visual structure.

**Delivers:**
- Typography hierarchy audit (h1/h2/h3 usage, consistent sizing)
- Font-size token implementation (from Phase 7 additions)
- Heading performance optimization (active, specific, engaging)
- Line-height and letter-spacing consistency
- Responsive typography verification

**Addresses:**
- Should have: typography hierarchy as differentiator (FEATURES.md)
- Table stakes: readability, visual hierarchy clarity
- 2026 trends: editorial clarity, generous leading, headlines that "perform"

**Avoids:**
- Accessibility regressions from contrast changes (PITFALLS.md #1)
- Mobile regressions from fixed font sizes (PITFALLS.md #2)
- Dark mode typography visibility issues (PITFALLS.md #3)

**Research flag:** Standard patterns. Typography best practices well-documented. No additional research needed.

### Phase 11: Color Refinement & Contrast Verification
**Rationale:** Color refinement is one of the riskiest changes because it affects accessibility compliance, dark mode, and brand identity simultaneously. Must come after layout/typography are stable to avoid cascading rework. Requires rigorous dual-theme verification.

**Delivers:**
- Color distribution verification (60-30-10 rule: 60% navy, 30% cream, 10% teal)
- Contrast edge cases audit (all text readable on all backgrounds)
- Dark mode consistency verification (same brand feel, not generic black)
- Link color distinctness verification
- WCAG AA compliance maintained (4.5:1 text, 3:1 UI)

**Addresses:**
- Table stakes: WCAG AA compliance already achieved, must maintain (FEATURES.md)
- Should have: minimal color scheme supporting work not competing (FEATURES.md)
- Brand alignment: navy = NTSB professional/technical aesthetic

**Avoids:**
- Accessibility regressions from color changes (PITFALLS.md #1 - CRITICAL)
- Dark mode regressions from light theme refinements (PITFALLS.md #3 - CRITICAL)
- Breaking existing WCAG AA compliance

**Research flag:** Standard patterns. WCAG contrast verification well-documented. Automated testing via @axe-core/playwright and Lighthouse covers this.

### Phase 12: Exhibit Content Structure Optimization
**Rationale:** Portfolio exhibits are the core value proposition for hiring managers but require special attention to case study storytelling structure. Separated from general content phase because exhibits have specific storytelling requirements (Challenge → Solution → Results with quantified outcomes). Dependencies on typography/layout phases for presentation polish.

**Delivers:**
- All 9 exhibits follow Challenge → Approach → Solution → Results structure
- Quantifiable results highlighted (not buried in prose)
- Impact-first headlines (30s hiring manager scan optimization)
- Process documentation enhancement where relevant (senior-level differentiation)
- Visual consistency across all exhibit pages

**Addresses:**
- Table stakes: case study storytelling, quantifiable metrics (FEATURES.md: HIGH priority)
- Should have: impact-first presentation, process documentation (FEATURES.md: competitive advantage)
- Hiring manager journey optimization: 30s scan decision criteria

**Avoids:**
- Content over-optimization losing context (PITFALLS.md #5)
- Visual inconsistency across exhibit pages (PITFALLS.md #6)
- Scope creep from exhibit enhancement ideas (PITFALLS.md #7)

**Research flag:** Likely needs light research. If current exhibits significantly deviate from Challenge → Solution → Results structure, may need case study storytelling pattern research. However, FEATURES.md already provides guidance; this would be validation rather than discovery.

### Phase 13: Navigation & Footer Consistency Verification
**Rationale:** Navigation and footer appear on all 17 pages, making consistency critical. Changes affect every page simultaneously. Must come after content/layout/typography are stable to avoid rework. This phase is verification-heavy rather than redesign (nav/footer already functional).

**Delivers:**
- Navigation structure 100% consistent across all 17 pages
- Footer optimization (contact visibility, social links, trust elements)
- Hamburger menu functionality verification after all changes
- Keyboard accessibility verification (skip links, focus states, tab order)
- Cross-page link verification (no broken internal links)

**Addresses:**
- Table stakes: clear navigation, contact information prominent (FEATURES.md)
- Mobile functionality: hamburger menu with accessibility
- Trust signals: footer as credibility/contact consolidation point

**Avoids:**
- Visual inconsistency from partial updates (PITFALLS.md #6)
- Mobile regressions from nav changes (PITFALLS.md #2)
- Breaking SEO from link changes (PITFALLS.md #8)

**Research flag:** Standard patterns. Navigation consistency verification is straightforward. No additional research needed.

### Phase 14: Comprehensive Accessibility & Cross-Browser QA
**Rationale:** Final phase because accessibility audits run against polished content/layout/typography/color. Testing earlier invalidates results. This is the comprehensive verification gate before milestone completion. All previous phases include accessibility checks; this phase is final validation and AAA enhancement consideration.

**Delivers:**
- Full WCAG AA re-verification after all changes (contrast, focus, semantic HTML)
- Automated test suite execution (@axe-core/playwright, Lighthouse CI, pa11y)
- Cross-browser testing (Chrome, Firefox, Safari, Edge)
- Cross-device testing (desktop/mobile, light/dark mode, all viewport sizes)
- AAA enhancement evaluation (enhanced focus indicators, semantic HTML, ARIA landmarks)
- Performance verification (LCP <2.5s, INP <200ms, CLS minimal)

**Addresses:**
- Table stakes: WCAG AA maintained, fast loading (<2.5s LCP)
- Should have: accessibility beyond AA as differentiator (FEATURES.md)
- Audit tools from STACK.md: comprehensive verification suite

**Avoids:**
- Accessibility regressions shipped to production (PITFALLS.md #1)
- Mobile/dark mode issues discovered post-launch (PITFALLS.md #2, #3)
- Performance degradation from polish additions

**Research flag:** Standard patterns. WCAG testing methodology well-documented. Automated tools cover most verification. No additional research needed.

### Phase Ordering Rationale

**Dependency-driven order:**
- CSS foundation before content: Content layout depends on clean CSS. Refactoring CSS after content finalized avoids rework.
- Content before layout: Layout polish depends on final content structure. Reorganizing content after layout polish requires re-polishing.
- Layout before typography: Typography hierarchy depends on established spacing/layout rhythm.
- Typography before color: Font changes affect contrast ratios; color must be verified after typography finalized.
- Color before exhibit optimization: Exhibit presentation uses established color/typography system.
- Navigation consistency after content/layout stable: Changes affect all 17 pages; must be based on stable foundation.
- Accessibility QA last: Comprehensive verification against polished, finalized site.

**Pitfall mitigation through ordering:**
- Foundation-first prevents rework cycles (fixing CSS after polish complete requires re-touching all pages)
- Content structure before visual polish prevents layout-driven content reorganization
- Global changes (nav, footer) after page-level polish prevents visual drift
- Comprehensive accessibility last prevents retesting invalidation

**Phase grouping rationale:**
- Phases 7-8: Foundation (CSS + Content)
- Phases 9-11: Visual Polish (Layout + Typography + Color)
- Phase 12: Content Polish (Exhibits)
- Phase 13: Global Consistency (Nav + Footer)
- Phase 14: Verification (Accessibility + QA)

Each grouping completes a logical unit with clear dependencies flowing between groups.

### Research Flags

**Phases with standard patterns (skip additional research):**
- **Phase 7 (CSS Foundation):** CSS architecture patterns well-documented. Stylelint/design token coverage is standard.
- **Phase 9 (Layout):** Layout consistency auditing has established patterns. DevTools inspection well-documented.
- **Phase 10 (Typography):** Typography hierarchy best practices well-covered in FEATURES.md and standard references.
- **Phase 11 (Color):** WCAG contrast verification methodology standard. Automated tools cover this.
- **Phase 13 (Navigation):** Navigation consistency verification is straightforward testing.
- **Phase 14 (Accessibility QA):** Comprehensive WCAG testing methodology well-documented in STACK.md.

**Phases possibly needing light research:**
- **Phase 8 (Content):** If ROT audit reveals complex IA issues or user journey mapping uncovers gaps, may need portfolio IA research. However, FEATURES.md already provides hiring manager journey insights, so this would be validation rather than discovery. **Recommendation:** Start without additional research; flag for research mid-phase if content structure problems emerge that aren't covered by FEATURES.md guidance.

- **Phase 12 (Exhibits):** If current exhibits significantly deviate from Challenge → Solution → Results structure, may need case study storytelling pattern research for portfolio-specific guidance. FEATURES.md already provides framework; this would be deep-dive validation. **Recommendation:** Start with FEATURES.md guidance; flag for research if exhibits have unusual structures not covered by standard storytelling patterns.

**Overall:** All phases have sufficient research coverage to begin. Two phases flagged for potential mid-phase research if specific gaps emerge, but starting point is solid for all eight phases.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | **HIGH** | Audit tools well-established. @axe-core/playwright is Playwright official recommendation. Lighthouse CI designed for static sites. Stylelint/HTMLHint are 2026 standards. All tools have active maintenance and extensive documentation. |
| Features | **MEDIUM-HIGH** | Portfolio best practices well-researched with 30+ sources covering hiring manager perspectives, case study storytelling, and 2026 trends. Some inference required for Pattern158 site-specific application (e.g., current exhibit structure unknown). User journey mapping validated across multiple sources. |
| Architecture | **HIGH** | CSS architecture patterns (ITCSS, design tokens, specificity management) well-documented. Page-scoped CSS in single file is established pattern for constraint-driven static sites. 64-token assessment based on standard design system principles. Audit order recommendations based on dependency analysis. |
| Pitfalls | **MEDIUM-HIGH** | Eight critical pitfalls identified from 2026 audit research, accessibility regression studies, and dark mode usage data (82.7% stat). Recovery strategies based on standard debugging approaches. Some inference about Pattern158-specific risks (e.g., NTSB aesthetic preservation) but core pitfalls (a11y regressions, mobile breaks, dark mode issues) are well-documented patterns. |

**Overall confidence:** **HIGH**

The research provides a solid foundation for roadmap creation with minimal gaps. Audit methodology is well-established. Tools are industry-standard. Architectural patterns are validated. Pitfall prevention strategies are evidence-based.

### Gaps to Address

**Minor gaps (low impact):**

1. **Current site state unknown:** Research assumes WCAG AA compliance, dark mode functionality, and mobile responsiveness are working as documented. **Mitigation:** Phase 7 begins with baseline verification. If current state differs significantly from documented state, may need to adjust phase priorities.

2. **Exhibit current structure:** Unknown if current exhibits follow Challenge → Solution → Results pattern or have significant deviations. **Mitigation:** Phase 8 content inventory will reveal structure. If exhibits are wildly inconsistent, Phase 12 may need light case study research mid-phase.

3. **Font-size token coverage:** Research recommends adding font-size tokens in Phase 7 but doesn't know current inconsistency severity. **Mitigation:** Phase 7 CSS audit will reveal whether inconsistent font sizing is minor (3-5 variations) or major (10+ variations). Recommendation strength depends on findings.

4. **Component duplication extent:** Research identifies stats bars, cards, buttons as likely duplicated but doesn't have full inventory. **Mitigation:** Phase 7 CSS audit will identify all duplicated component patterns. More duplication = higher ROI from extraction.

**No critical gaps identified.** Research provides sufficient guidance to begin all eight phases. Gaps are discovery-oriented (understanding current state) rather than knowledge gaps (not knowing what to do).

## Sources

### Primary (HIGH confidence)

**Accessibility & WCAG:**
- [Playwright Accessibility Testing Official Docs](https://playwright.dev/docs/accessibility-testing) - @axe-core/playwright integration
- [WebAIM 2026 Predictions: Web Accessibility Shifts](https://webaim.org/blog/2026-predictions/)
- [Color Contrast Accessibility: Complete WCAG 2025 Guide](https://www.allaccessible.org/blog/color-contrast-accessibility-wcag-guide-2025)
- [WCAG 2.2: What You Need to Know in 2026](https://accessibe.com/blog/knowledgebase/wcag-two-point-two)
- [WCAG 2 Overview (W3C Official)](https://www.w3.org/WAI/standards-guidelines/wcag/)

**Audit Tools:**
- [Lighthouse CI GitHub](https://github.com/GoogleChrome/lighthouse-ci) - Official documentation
- [Stylelint Official Docs](https://stylelint.io/)
- [HTMLHint GitHub](https://github.com/htmlhint/HTMLHint)
- [pa11y GitHub](https://github.com/pa11y/pa11y) - v9 release notes
- [Nu HTML Checker GitHub](https://github.com/validator/validator)

**CSS Architecture:**
- [ITCSS: Scalable and Maintainable CSS Architecture](https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture)
- [CSS Custom Properties: Complete Guide for 2026](https://devtoolbox.dedyn.io/blog/css-custom-properties-complete-guide)
- [Dark Mode in CSS Guide (CSS-Tricks)](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/)
- [CSS Specificity (MDN)](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

### Secondary (MEDIUM confidence)

**Portfolio Best Practices:**
- [Grab Hiring Managers' Attention With Your Portfolio (IxDF)](https://www.interaction-design.org/literature/article/grab-hiring-managers-attention-with-your-design-portfolio-right-from-the-start)
- [How Recruiters and Hiring Managers Actually Look at Your Portfolio](https://blog.opendoorscareers.com/p/how-recruiters-and-hiring-managers-actually-look-at-your-portfolio)
- [Impact-First Storytelling in Product Design Portfolio (Medium)](https://medium.com/@sarahscussel/impact-first-storytelling-in-your-product-design-portfolio-9f122f747ee8)
- [23 Portfolio Website Examples + Best Practices (Webflow)](https://webflow.com/blog/design-portfolio-examples)
- [23 Inspiring Portfolio Examples (Figma)](https://www.figma.com/resource-library/portfolio-website-examples/)

**Dark Mode & Responsive:**
- [Dark Mode Design Best Practices in 2026](https://www.tech-rz.com/blog/dark-mode-design-best-practices-in-2026/)
- [Dark Mode Usage: Data Reports 2026](https://wifitalents.com/dark-mode-usage-statistics/) - 82.7% stat source
- [Responsive Web Design Best Practices in 2026](https://www.blushush.co.uk/blogs/responsive-web-design-best-practices-in-2026)

**Content Audit:**
- [The Post-AI Cleanup: Why 2026 is the Year of Content Audit](https://wgcontent.com/blog/post-ai-cleanup-content-audit/)
- [A Smarter SEO Content Audit: LLM Visibility](https://www.searchenginejournal.com/seo-content-audit-aligning-for-performance-purpose-llm-visibility/556584/)
- [Content Inventory and Auditing 101 (NN/G)](https://www.nngroup.com/articles/content-audits/)

**Pitfall Prevention:**
- [The Hidden Dangers of CSS Specificity Wars](https://blog.pixelfreestudio.com/the-hidden-dangers-of-css-specificity-wars/)
- [Scope Creep Control in Development Projects 2026](https://docs.gitscrum.com/en/best-practices/managing-scope-creep-in-development-projects)
- [Website Audit Mistakes and How to Avoid Them](https://acclaim.agency/blog/common-website-audit-mistakes-and-how-to-avoid-them)

### Tertiary (LOW confidence)

**Performance & Visual Design:**
- [Website Performance Optimization 2026: Complete Speed Guide](https://teknoppy.com/website-performance-optimization-2026-speed-strategies/)
- [Website Load Time Statistics for 2026](https://www.hostinger.com/tutorials/website-load-time-statistics)
- [Visual Hierarchy in Web Design: 2026 Techniques](https://clay.global/blog/web-design-guide/visual-hierarchy-web-design)
- [Best Color Palettes for Developer Portfolios 2025](https://www.webportfolios.dev/blog/best-color-palettes-for-developer-portfolio)

**Visual Regression & Consistency:**
- [Playwright Visual Regression Testing Guide](https://bug0.com/knowledge-base/playwright-visual-regression-testing)
- [Beginner's Guide to Achieving Web Design Consistency](https://gofishdigital.com/blog/guide-design-consistency/)

---
*Research completed: 2026-02-20*
*Ready for roadmap: yes*
