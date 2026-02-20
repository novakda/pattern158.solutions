# Feature Research

**Domain:** Static HTML portfolio websites (systems architecture/engineering)
**Researched:** 2026-02-20
**Confidence:** MEDIUM-HIGH

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist. Missing these = portfolio feels incomplete or unprofessional.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Fast loading time (<2.5s LCP)** | 50% of users expect <2s load, 53% leave mobile sites >3s | LOW | Already achieved via static HTML. Core Web Vitals: LCP <2.5s, INP <200ms, CLS minimal |
| **Mobile-responsive design** | 60% of traffic is mobile, expected by all users | LOW | Already implemented. Verify consistent padding/spacing across breakpoints |
| **Clear navigation** | Users need to find information effortlessly | LOW | Already implemented. Audit for consistency across all 17 pages |
| **Professional headshot on About page** | Hiring managers expect personal connection, visual identity | LOW | Check if current bio includes photo, quality of image |
| **Contact information prominently placed** | Recruiters/hiring managers need easy way to reach you | LOW | Already in footer + contact page. Verify visibility and accessibility |
| **Case study storytelling** | Expected for all professional portfolios 2026+ | MEDIUM | Challenge → Approach → Solution → Results. Check if exhibits follow this structure |
| **Quantifiable results/metrics** | Hiring managers look for measurable impact in seconds | MEDIUM | Check if exhibits include specific numbers, percentages, timeframes |
| **Clean, uncluttered layout** | Visual craft judged in seconds, clutter = amateur | LOW | Audit for consistent whitespace, spacing, visual rhythm |
| **No typos or grammatical errors** | Even small errors destroy professional credibility | LOW | Full proofreading pass across all 17 pages |
| **Recent/current work showcased** | Portfolios with timestamps expect fresh content | LOW | Verify project relevance, consider date visibility strategy |
| **Clear call-to-action** | Users need to know what to do next | LOW | Check contact page, verify CTA clarity on landing page |
| **Social proof (testimonials)** | Expected for credibility, especially for senior roles | LOW | Already implemented as "Field Reports". Verify prominence |
| **About/bio page** | One of most-clicked pages, hiring managers gauge fit | LOW | Already implemented. Audit for tone, length (~200 words), personality |

### Differentiators (Competitive Advantage)

Features that set excellent portfolios apart. Not required, but create competitive advantage.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Impact-first presentation** | Lead with results ("30% increase..."), not process. Respects hiring manager time constraints (30s initial scan) | LOW | Audit exhibits: do headlines/summaries lead with outcomes? |
| **Process documentation** | Shows thinking, problem-solving, collaboration. Differentiates senior from junior | MEDIUM | Exhibits should include sketches, iterations, decision rationale where relevant |
| **Unique aesthetic/branding** | NTSB investigation report aesthetic = memorable, distinctive | ACHIEVED | Already differentiated. Maintain consistency while ensuring UX wins conflicts |
| **Curated selection (quality > quantity)** | 8-12 best projects vs. everything. Shows judgment, focus | LOW | Already curated (9 exhibits). Verify each is strongest work, consider culling weak ones |
| **Personalized tone** | Authentic voice in bio/content, not formulaic corporate speak | LOW | Audit philosophy, about, FAQ for authentic vs. generic tone |
| **Clear problem framing** | Hiring managers evaluate *how you think*, not just what you designed | MEDIUM | Each exhibit: is the problem clearly defined before solution? |
| **Minimal, supportive color scheme** | Colors support work, don't compete. Neutral backgrounds let projects shine | LOW | Audit: does navy/teal/cream compete with content or support it? |
| **Generous whitespace** | Creates editorial/professional feel, guides attention | LOW | Audit spacing consistency, particularly between sections |
| **Typography hierarchy** | Headlines that perform, legible body, intentional rhythm | LOW | Audit heading sizes, line-height, spacing for clear hierarchy |
| **Accessibility beyond AA** | Going to AAA or best practices = inclusive, professional | MEDIUM | Consider: focus visible improvements, clearer skip links, semantic HTML audit |
| **Awards/credentials highlighted** | Instant credibility when shown in hero/headline | LOW | Check if notable achievements are visible early in user journey |
| **Project type diversity** | Shows versatility within niche (different scales, industries, challenges) | ACHIEVED | 28 years across multiple domains already demonstrates this |

### Anti-Features (Commonly Requested, Often Problematic)

Features that seem good but create problems, especially for static HTML portfolios.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| **Every project ever created** | Completeness, showing full breadth | Overwhelming, dilutes strengths, suggests poor curation judgment | Curate 8-12 strongest, most relevant projects. Quality beats quantity |
| **Auto-playing animations/parallax** | "Modern" look, visual interest | Accessibility issues, conflicts with NTSB aesthetic, performance impact | Subtle CSS transitions, intentional micro-interactions where needed |
| **Behance/Dribbble as primary portfolio** | Easy setup, community features | Hiring managers for UX/product roles often won't click these links | Custom portfolio (already achieved with static HTML) |
| **Long, detailed process for every project** | Showing thoroughness | Hiring managers have 30s-3min initially. Too much text = skipped | Lead with impact, offer process details for those who want depth |
| **Complex JavaScript frameworks** | Trendy tech, impressive to developers | Build complexity, dependencies, slower load, violates static constraint | Already avoided. Vanilla JS for essential features only |
| **Blog platform** | Shows thought leadership, SEO | Maintenance burden, content creation ongoing, scope creep | Defer. Philosophy page + FAQ already demonstrate thinking |
| **Maximalist navigation** | "Helpful" to show everything | Clutters focus, confusing, conflicts with minimal design trend | Stripped-down essentials (already achieved) |
| **Cookie consent banner** | Legal compliance | Only needed if using tracking cookies. Adds visual clutter | Use cookieless analytics (already planned) |
| **Resume download** | Convenience for hiring managers | Resumes should be tailored per application, not generic | Link to LinkedIn, offer custom resume on request |
| **Portfolio passwords** | Exclusivity, NDA work | Friction, hiring managers skip password-protected portfolios | Use case study descriptions without proprietary details |

## Feature Dependencies

```
Fast Loading (<2.5s LCP)
    └──requires──> Optimized Images
    └──requires──> Minimal JavaScript
    └──requires──> Static HTML (already achieved)

Case Study Storytelling
    └──requires──> Clear Problem Framing
    └──requires──> Quantifiable Results
    └──enhances──> Process Documentation

Visual Hierarchy
    └──requires──> Consistent Spacing
    └──requires──> Typography Hierarchy
    └──requires──> Generous Whitespace
    └──enhances──> Color Scheme Restraint

Accessibility Beyond AA
    └──requires──> WCAG AA Baseline (already achieved)
    └──enhances──> Semantic HTML
    └──enhances──> Clear Navigation

Impact-First Presentation
    └──conflicts──> Long Process Documentation (balance needed)
```

### Dependency Notes

- **Fast Loading requires Static HTML:** Already achieved. Static HTML provides inherent performance advantage over CMS/framework-based portfolios.
- **Case Study Storytelling requires Clear Problem Framing:** Each exhibit must establish the problem before presenting solution. Hiring managers evaluate thinking, not just deliverables.
- **Visual Hierarchy requires Consistent Spacing:** Audit reveals this is the most common gap. Inconsistent padding undermines professional polish.
- **Impact-First conflicts with Long Process:** Balance via structure: lead with results in summary, provide process details below fold for interested readers.

## Current State Assessment (Pattern158.solutions)

### Already Achieved (Differentiators)

- **Static HTML architecture:** Fast loading, zero dependencies, excellent performance baseline
- **Unique aesthetic:** NTSB investigation report theme = memorable, distinctive
- **WCAG AA compliance:** Accessibility baseline met
- **Field Reports structure:** Testimonials as exhibits = strong social proof presentation
- **Curated project selection:** 9 exhibits from 28 years = quality over quantity
- **Dark mode:** Brand-aligned, localStorage persistence, no FOUC
- **SEO foundation:** Meta descriptions, Open Graph, JSON-LD, sitemap across 17 pages
- **Mobile navigation:** Hamburger menu with accessibility, 48px touch targets

### Table Stakes Gaps (Quality Audit Targets)

| Gap | Evidence | Complexity | Priority |
|-----|----------|------------|----------|
| **Inconsistent spacing/padding** | Audit likely to reveal variation across 17 pages | LOW | HIGH |
| **Visual hierarchy inconsistency** | Typography, heading sizes, section separation may vary | LOW | HIGH |
| **Case study structure variance** | Exhibits may not consistently follow Challenge → Solution → Results | MEDIUM | HIGH |
| **Quantifiable results visibility** | Metrics may be buried in prose vs. highlighted | LOW | HIGH |
| **Bio optimization** | About page may not follow best practices (200 words, conversational, photo, personality) | LOW | MEDIUM |
| **Typos/grammar across 17 pages** | Comprehensive proofreading needed | LOW | HIGH |
| **Navigation consistency** | Already improved but verify 100% consistency | LOW | MEDIUM |
| **Footer optimization** | Contact info visibility, social links, trust elements | LOW | LOW |
| **Color contrast edge cases** | Beyond AA minimum, look for low-contrast text on backgrounds | LOW | MEDIUM |

### Opportunities for Differentiation

| Opportunity | Value | Complexity | Priority |
|-------------|-------|------------|----------|
| **Impact-first exhibit structure** | Hiring managers scan in 30s. Lead with outcomes in headlines/summaries | MEDIUM | HIGH |
| **Process documentation enhancement** | Senior-level differentiation: show decision-making, collaboration, iteration | MEDIUM | MEDIUM |
| **Accessibility beyond AA** | AAA-level focus indicators, enhanced semantic HTML, skip link improvements | LOW-MEDIUM | MEDIUM |
| **Generous whitespace audit** | Professional/editorial feel. Audit spacing for intentional rhythm | LOW | HIGH |
| **Typography refinement** | Verify hierarchy clarity, line-height consistency, heading performance | LOW | HIGH |
| **Awards/credentials prominence** | If relevant achievements exist, surface them earlier in user journey | LOW | LOW |

## User Journey Optimization

### Hiring Manager Journey (Primary Persona)

**Timeline: 30 seconds → 3-4 minutes → full review**

**30-Second Scan (Decide to Continue):**
- Visual craft judgment (design quality, professionalism)
- Hero section fit assessment (relevant specialty, clear positioning)
- Skim work for clarity and story (can they understand what you do?)

**3-4 Minute Review (Shortlist Decision):**
- Case study storytelling (problem → solution → results clear?)
- Process insight (how do you think and work?)
- Social proof (testimonials, credentials, results)

**Full Review (Interview Preparation):**
- Deep dive on 1-2 relevant projects
- About page (culture fit, personality)
- Technical capabilities demonstration

**Portfolio Implications:**
1. **Hero must communicate specialty instantly** - verify landing page clarity
2. **Exhibits must be scannable** - headlines with outcomes, visual breaks, not walls of text
3. **First exhibit must be strongest** - order matters, front-load best work
4. **About page must be personal** - conversational tone, photo, authentic personality
5. **Case studies must show thinking** - decision rationale, not just deliverables

### Engineer/Peer Journey (Secondary Persona)

**Goals:** Technical depth validation, collaboration potential assessment

**Journey:**
- Skip hero, go straight to projects
- Look for technical detail, problem complexity
- Evaluate depth of expertise, not breadth
- Check credentials, methodology, philosophy

**Portfolio Implications:**
1. **Exhibits need technical depth** - not just business outcomes, but how solutions work
2. **Philosophy page critical** - methodology, influences, technical approach
3. **FAQ addresses common technical questions** - already achieved
4. **Process documentation valuable** - shows technical decision-making

### Client/Decision-Maker Journey (Tertiary Persona)

**Goals:** Trustworthiness, results delivery capability, communication skills

**Journey:**
- Look for social proof first (testimonials, case studies)
- Business outcomes over technical process
- Communication clarity (can they explain complex things simply?)
- Professionalism signals (polish, attention to detail)

**Portfolio Implications:**
1. **Field Reports page is critical** - already well-structured
2. **Outcomes must be quantified** - business metrics, ROI, impact
3. **Contact page must reduce friction** - clear next steps, response expectations
4. **Visual polish signals capability** - inconsistent spacing = sloppy work perception

## Content Quality Framework

### Writing Quality Signals

| Quality Signal | What It Means | How to Audit |
|----------------|---------------|--------------|
| **Plain language** | Technical writing adapts to audience, avoids jargon | Read each page: could a non-expert understand the value? |
| **Scannable structure** | Busy hiring managers skim before reading | Headings, bullets, short paragraphs. Remove walls of text |
| **Active voice** | Energy, clarity, ownership ("I led" not "was led") | Search for passive constructions, rewrite |
| **Specific over vague** | "Reduced load time 40%" vs. "improved performance" | Flag generic claims, add specifics where possible |
| **Conversational tone** | Authentic, personable, not corporate-speak | Read aloud: does it sound like how you'd actually talk? |
| **Error-free** | Even small typos destroy credibility | Full proofreading pass, consider fresh eyes review |

### Content Redundancy Elimination (ROT Audit)

**ROT = Redundant, Obsolete, Trivial content**

**Redundancy signals:**
- Same information appears on multiple pages
- Multiple pages cover overlapping topics without clear differentiation
- Footer/header content duplicates page content
- Testimonials repeat information already in case studies

**Audit protocol:**
1. Map all 17 pages to information architecture
2. Identify overlapping content across pages
3. Consolidate or eliminate duplicates (choose canonical location)
4. Ensure navigation doesn't create circular journeys
5. Verify each page has unique value proposition

**Already at risk areas:**
- Landing page project previews vs. full exhibits (ensure preview adds value, not just duplication)
- Philosophy preview on landing vs. full philosophy page (verify preview entices, doesn't repeat)
- Contact info in footer vs. contact page (footer = convenience, contact page = depth)
- Testimonials page vs. exhibit pages (ensure exhibits add context beyond testimonial)

## Color Scheme Evaluation Framework

### Best Practices for Portfolio Color Systems

| Principle | Application to Pattern158 | Audit Action |
|-----------|---------------------------|--------------|
| **60-30-10 rule** | 60% navy, 30% cream, 10% teal accent | Verify color distribution across pages |
| **Colors support, don't compete** | Neutral backgrounds let content shine | Check if navy/teal draw attention away from text/images |
| **Accessibility first** | WCAG AA minimum, test all combinations | Already achieved primary. Audit edge cases (muted text) |
| **Consistency builds recognition** | Same palette across all 17 pages | Verify design tokens used consistently |
| **Brand alignment** | Navy = NTSB aesthetic, professional, technical | Already achieved. Maintain during polish |

### Specific Audit Targets

- **--color-primary (teal #0e7c8c):** Is it used only for accents/CTAs, not body text?
- **--color-text-muted:** Does it meet 4.5:1 contrast on all backgrounds where used?
- **--color-inverse-text-muted:** Verify usage on dark footer/hero/nav contexts
- **Dark mode consistency:** Same brand feel, not generic black theme
- **Link colors:** Distinct from body text, consistent across all pages

## Typography Hierarchy Best Practices

### Hierarchy Signals

| Element | Purpose | Audit Question |
|---------|---------|----------------|
| **H1 (hero headline)** | Instant communication of value/specialty | Does landing page H1 immediately convey what you do? |
| **H2 (section headers)** | Major topic changes, scannable structure | Can you understand page structure from H2s alone? |
| **H3 (subsections)** | Detail within sections | Clear differentiation from H2? |
| **Body text** | Readable, not competing with headings | Line-height adequate? Paragraph spacing consistent? |
| **Captions/muted text** | Supporting info, de-emphasized | Visually distinct from body, but still legible? |
| **Pull quotes** | Emphasize key points, break up text | Used sparingly? Clear visual differentiation? |

### Technical Audit

- **Font stack:** Bebas Neue (headings), Inter (body), JetBrains Mono (code). Verify consistent usage
- **Size scale:** Is there clear size differentiation (H1 > H2 > H3 > body)?
- **Line-height:** Body text typically 1.5-1.6, headings tighter. Verify consistency
- **Letter-spacing:** Headings often benefit from slight tracking. Already set?
- **Responsive scaling:** Do font sizes adapt appropriately for mobile?

### 2026 Trends

- Typography as hero (not just images)
- Editorial clarity (clean, legible, intentional)
- Generous leading (line-height), breathable layouts
- Headlines that "perform" (active, specific, engaging)

## Accessibility Beyond AA

### Going Further (AAA and Best Practices)

| Enhancement | Benefit | Complexity | Notes |
|-------------|---------|------------|-------|
| **Enhanced focus indicators** | Clearer keyboard navigation for low-vision users | LOW | Increase focus outline thickness, use high-contrast color |
| **Skip to main content prominence** | Faster navigation for screen reader users | LOW | Currently hidden until focus. Consider making visible option |
| **Semantic HTML audit** | Better screen reader comprehension | LOW | Verify `<article>`, `<section>`, `<nav>`, `<aside>` usage |
| **ARIA landmark roles** | Explicit page structure for assistive tech | LOW | Add `role="main"`, `role="navigation"`, etc. |
| **Reduced motion preference** | Respect `prefers-reduced-motion` for animations | LOW | Hamburger menu animation should respect this |
| **Link purpose clarity** | All links understandable out of context | LOW | Audit "click here", "read more" for context |
| **Descriptive page titles** | Each page title unique and descriptive | LOW | Verify `<title>` tags across all 17 pages |
| **Heading hierarchy audit** | No skipped levels (H2 → H4 problematic) | LOW | Verify proper nesting on all pages |
| **Alternative text for images** | All images have descriptive alt text | LOW | Audit hero image, project images, logos |
| **Color contrast AAA (7:1)** | Higher visibility for low-vision users | MEDIUM | Consider for critical CTAs, headings |

## Performance Optimization (Static HTML Specific)

### Core Web Vitals Targets (2026)

| Metric | Good | Needs Improvement | Poor | Notes |
|--------|------|-------------------|------|-------|
| **LCP (Largest Contentful Paint)** | ≤2.5s | 2.5-4s | >4s | Hero image load time critical |
| **INP (Interaction to Next Paint)** | ≤200ms | 200-500ms | >500ms | Hamburger menu, dark mode toggle |
| **CLS (Cumulative Layout Shift)** | ≤0.1 | 0.1-0.25 | >0.25 | Font loading, image dimensions |

### Static HTML Advantages

- **No JavaScript framework overhead** - Already leveraged
- **No build step** - Instant deployment
- **Page caching** - Static HTML serves instantly
- **Minimal JavaScript** - Only theme toggle, hamburger menu

### Optimization Opportunities

| Technique | Benefit | Already Done? | Action |
|-----------|---------|---------------|--------|
| **Image compression** | Faster LCP | YES (hero 148KB → 118KB) | Audit all exhibit images |
| **Font-display: swap** | Prevent FOIT (flash of invisible text) | YES | Verify working |
| **Inline critical CSS** | Faster first paint | NO | Consider for above-fold styles |
| **Minify HTML/CSS** | Smaller file sizes | NO | Easy win for production |
| **Preload critical assets** | Faster resource loading | NO | Hero image, fonts |
| **Lazy load below-fold images** | Faster initial load | N/A | No images below fold per current architecture |

## MVP Definition (For Quality Audit Milestone)

### Launch With (v1.1 - Quality Audit)

Minimum viable polish — what's needed to call the site "forensic-level quality."

- [ ] **Content audit complete** - ROT elimination, redundancy removal across 17 pages
- [ ] **Visual consistency** - Spacing, padding, margins standardized
- [ ] **Typography hierarchy** - Clear, intentional, consistent across pages
- [ ] **Case study structure** - All exhibits follow Challenge → Solution → Results
- [ ] **Quantifiable results** - Metrics visible, highlighted in summaries
- [ ] **Full proofreading** - Zero typos, grammatical errors
- [ ] **Navigation 100% consistent** - All 17 pages identical structure
- [ ] **About page optimized** - ~200 words, conversational, photo, personality
- [ ] **Impact-first exhibit leads** - Headlines/summaries emphasize outcomes
- [ ] **Mobile spacing audit** - Padding/margins consistent on mobile breakpoint
- [ ] **Color contrast edge cases** - All text readable on all backgrounds
- [ ] **Footer optimization** - Contact visibility, social links, trust elements

### Add After Launch (v1.2+)

Features to add once core quality is established.

- [ ] **Process documentation depth** - Sketches, iterations, decision rationale where relevant
- [ ] **Accessibility AAA enhancements** - Focus indicators, semantic HTML, ARIA landmarks
- [ ] **Performance optimizations** - Minification, critical CSS inline, preload directives
- [ ] **Analytics integration** - Privacy-first, cookieless tracking (already planned)
- [ ] **Awards/credentials highlighting** - If relevant, surface earlier in journey

### Future Consideration (v2+)

Features to defer until post-audit feedback or specific needs emerge.

- [ ] **Blog platform** - Thought leadership, SEO value, but high maintenance
- [ ] **Case study deep dives** - Expandable process sections for interested readers
- [ ] **Video testimonials** - If available, adds credibility, but production overhead
- [ ] **Interactive demos** - For technical projects, but JavaScript complexity concerns
- [ ] **Downloadable case studies** - PDF versions for offline review

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority | Notes |
|---------|------------|---------------------|----------|-------|
| Spacing consistency | HIGH | LOW | P1 | Table stakes, high impact |
| Typography hierarchy | HIGH | LOW | P1 | Professional polish signal |
| Full proofreading | HIGH | LOW | P1 | Typos destroy credibility |
| Case study structure | HIGH | MEDIUM | P1 | Hiring manager expectations |
| Impact-first leads | HIGH | MEDIUM | P1 | Respects time constraints |
| Quantifiable results | HIGH | LOW | P1 | Expected by hiring managers |
| Mobile spacing audit | HIGH | LOW | P1 | 60% of traffic |
| About page optimization | MEDIUM | LOW | P1 | One of most-clicked pages |
| Navigation consistency | HIGH | LOW | P1 | Already good, verify 100% |
| Color contrast audit | MEDIUM | LOW | P2 | Beyond AA minimum |
| Footer optimization | MEDIUM | LOW | P2 | Trust, contact visibility |
| Process documentation | MEDIUM | MEDIUM | P2 | Differentiates senior roles |
| Accessibility AAA | LOW | MEDIUM | P2 | Nice to have, not expected |
| Performance optimization | MEDIUM | LOW | P2 | Already fast, optimize further |
| Awards/credentials | LOW | LOW | P3 | If applicable |
| Minification | LOW | LOW | P3 | Marginal performance gain |
| Blog platform | LOW | HIGH | P3 | Deferred, scope creep risk |

**Priority key:**
- **P1:** Must have for quality audit completion (v1.1)
- **P2:** Should have, add when time permits (v1.2)
- **P3:** Nice to have, future consideration (v2+)

## Competitor Feature Analysis (Portfolio Quality)

Research findings show common patterns across excellent portfolios:

| Feature | Best-in-Class Approach | Pattern158 Status | Action |
|---------|------------------------|-------------------|--------|
| **Loading speed** | <2.5s LCP, Core Web Vitals pass | Likely good (static HTML) | Measure, verify |
| **Case study format** | Challenge → Approach → Solution → Results | Unknown | Audit exhibits |
| **Visual hierarchy** | Clear, consistent, generous whitespace | Unknown | Audit spacing |
| **Quantifiable results** | Metrics in headlines, not buried | Unknown | Audit exhibits |
| **About page** | Photo, ~200 words, conversational, personality | Unknown | Audit bio |
| **Navigation** | Minimal, clear, consistent | Good | Verify 100% |
| **Color scheme** | 60-30-10, supports work, doesn't compete | Good (navy/teal/cream) | Verify distribution |
| **Typography** | Editorial clarity, hierarchy, generous leading | Good (Bebas/Inter) | Audit consistency |
| **Mobile responsive** | Expected by all | Good | Verify spacing |
| **Testimonials** | Social proof, credibility | Excellent (Field Reports) | Maintain |
| **Process shown** | Differentiates senior from junior | Unknown | Consider adding |
| **Accessibility** | WCAG AA minimum, AAA ideal | AA achieved | Consider AAA |
| **Curated selection** | 8-12 best projects, not everything | Good (9 exhibits) | Verify all are strongest |
| **Unique aesthetic** | Memorable, distinctive | Excellent (NTSB) | Maintain |

## Sources

### Portfolio Best Practices (2026)

- [5 Best Portfolio Website Builders Creators Are Using in 2026](https://emergent.sh/learn/best-portfolio-website-builders)
- [7 Digital Portfolio Examples & Guide for 2026 — Squarespace](https://www.squarespace.com/blog/portfolio-website-examples)
- [23 Inspiring Portfolio Website Examples & Tips | Figma](https://www.figma.com/resource-library/portfolio-website-examples/)
- [23 portfolio website examples, plus best practices to attract clients | Webflow Blog](https://webflow.com/blog/design-portfolio-examples)
- [10 UX/UI Design Portfolio Examples to Inspire You (Updated for 2026) | Designlab](https://designlab.com/blog/10-ux-ui-design-portfolios)

### Hiring Manager Perspective

- [Grab Hiring Managers' Attention with Your Design Portfolio Right From the Start | IxDF](https://www.interaction-design.org/literature/article/grab-hiring-managers-attention-with-your-design-portfolio-right-from-the-start)
- [What Hiring Managers Really Look For In A Good Portfolio](https://welovesalt.com/insights/what-hiring-managers-really-look-for-in-a-good-portfolio)
- [How Recruiters and Hiring Managers Actually Look at Your Portfolio](https://blog.opendoorscareers.com/p/how-recruiters-and-hiring-managers-actually-look-at-your-portfolio)
- [What hiring managers look for in a UX portfolio - UX Design Institute](https://www.uxdesigninstitute.com/blog/hiring-managers-ux-portfolio/)

### Case Study Storytelling

- [The Art of Storytelling for Case Studies | Indeed Design](https://indeed.design/article/the-art-of-storytelling-for-case-studies/)
- [Impact-First Storytelling in Your Product Design Portfolio | Medium](https://medium.com/@sarahscussel/impact-first-storytelling-in-your-product-design-portfolio-9f122f747ee8)
- [How to Write UX/UI Design Case Studies That Boost Your Portfolio and Get You Hired | IxDF](https://www.interaction-design.org/literature/article/how-to-write-great-case-studies-for-your-ux-design-portfolio)
- [UX Storytelling Techniques for Design Portfolios – UX Beginner](https://uxbeginner.com/ux-storytelling-techniques-design-portfolio/)

### Common Mistakes

- [The 8 Biggest Mistakes on Your Portfolio (And How to Fix Them)](https://www.format.com/magazine/resources/photography/8-mistakes-build-portfolio-website-photography)
- [Common mistakes when creating a portfolio (and how to avoid them)](https://www.wix.com/blog/common-portfolio-mistakes)
- [5 Common Mistakes in Portfolio Website Content to Avoid](https://www.strikingly.com/blog/posts/5-common-mistakes-portfolio-website-content)
- [6 Wildly Common Portfolio Mistakes Designers Might Make](https://workspace.fiverr.com/blog/6-wildly-common-portfolio-mistakes-designers-might-make/)

### Accessibility

- [Web Accessibility Best Practices 2025 Guide](https://www.broworks.net/blog/web-accessibility-best-practices-2025-guide)
- [2026 WCAG & ADA Website Compliance Requirements & Standards](https://www.accessibility.works/blog/wcag-ada-website-compliance-standards-requirements/)
- [Best Practice - Accessibility - dock.codes](https://wcag.dock.codes/documentation/best-practice/)
- [WCAG 2 Overview | Web Accessibility Initiative (WAI) | W3C](https://www.w3.org/WAI/standards-guidelines/wcag/)

### Performance Optimization

- [Website Performance Optimization 2026: Complete Speed Guide](https://teknoppy.com/website-performance-optimization-2026-speed-strategies/)
- [Website load time statistics for 2026: Trends & key insights](https://www.hostinger.com/tutorials/website-load-time-statistics)
- [13 Metrics to Measure Website Performance in 2026](https://nitropack.io/blog/website-performance-metrics/)
- [How Fast Should Your Website Load in 2026? - Seobility Blog](https://www.seobility.net/en/blog/how-fast-should-a-website-load/)

### Visual Design

- [Visual Hierarchy in Web Design: How to, Examples & Techniques for 2026 | Clay](https://clay.global/blog/web-design-guide/visual-hierarchy-web-design)
- [Best Color Palettes for Developer Portfolios (2025) + Real Examples](https://www.webportfolios.dev/blog/best-color-palettes-for-developer-portfolio)
- [UI Color Palette 2026: Best Practices, Tips, and Tricks for Designers | IxDF](https://www.interaction-design.org/literature/article/ui-color-palette)
- [Top 40 Favorite Designer Portfolio Sites in 2026 · Typewolf](https://www.typewolf.com/portfolio-sites)

### Content & Writing

- [9 Tips for Writing Your Portfolio's Biography 'About Me' Page](https://www.format.com/magazine/resources/photography/online-portfolio-about-page-step-by-step-guide)
- [How To Write a Portfolio Biography (Plus Tips and Examples) | Indeed.com](https://www.indeed.com/career-advice/career-development/how-to-write-portfolio-biography)
- [Top Technical Writing Portfolio Examples 2026 | Technical Writer HQ](https://technicalwriterhq.com/career/technical-writer/technical-writer-portfolio/)
- [Content Inventory and Auditing 101 - NN/G](https://www.nngroup.com/articles/content-audits/)

### Footer & Contact

- [Footers for Your Portfolio Website: What to Include, Design Tips and Examples](https://curator.io/blog/footer-for-portfolio-website)
- [Website footer design examples that will inspire you](https://blog.hubspot.com/website/website-footer)
- [Website Footer Design Best Practices: 27 Things to Put at the Bottom | Orbit Media Studios](https://www.orbitmedia.com/blog/website-footer-design-best-practices/)

---
*Feature research for: Pattern158.solutions portfolio quality audit*
*Researched: 2026-02-20*
*Confidence: MEDIUM-HIGH (combination of current best practices, hiring manager research, and portfolio-specific analysis)*
