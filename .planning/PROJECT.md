# Pattern 158 Solutions Website

## What This Is

The personal brand website for Dan Novak (pattern158.solutions) -- a static HTML portfolio site presenting 28 years of systems architecture and eLearning engineering through an NTSB investigation report aesthetic. The site showcases the "I cheat, but I cheat fair" philosophy, project case studies as "Findings," and client testimonials as "Field Reports" with detailed exhibit pages.

## Core Value

The site must accurately and compellingly present Dan's professional identity and body of work to hiring managers, fellow engineers, and potential clients -- with every claim traceable to primary sources.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. Carried forward from vault GSD project v1.0-v2.3. -->

- ✓ **HOME-01**: Landing page with hero, specialty cards, featured projects, philosophy section -- v2.0
- ✓ **PHIL-01**: Philosophy page with six brand elements (Provider of Clarity, Cheat Fair, Build the Tool, Seek Knowledge, Time Machine, TASBot) -- v2.2
- ✓ **FAQ-01**: FAQ page with 15 questions in 4 categories using native `<details>` accordion -- v2.2
- ✓ **CONT-01**: Contact page with email, LinkedIn, GitHub, response guidance, testimonial -- v2.2
- ✓ **NAV-01**: Consistent cross-page navigation with semantic HTML -- v2.2
- ✓ **A11Y-01**: WCAG 2.1 AA compliance (contrast, focus indicators, skip link, semantic elements) -- v2.1
- ✓ **BRAND-01**: Brand assets deployed (hero image, logo with 1:5:8 ratio, favicon) -- v2.0
- ✓ **BRAND-02**: Design system (Navy/Teal/Cream palette, Bebas Neue/Inter/JetBrains Mono typography) -- v2.0

### Active

<!-- Current scope. Building toward these. -->

- [ ] **FIELD-01**: Testimonials page ("Field Reports") with 9 exhibit case study pages integrated into site navigation across all pages
- [ ] **FIELD-02**: Field Reports nav link present in all page navigations (philosophy, faq, contact, exhibits), not just index.html
- [ ] **POLISH-01**: Consistent navigation across ALL pages including testimonials.html and all exhibit pages
- [ ] **POLISH-02**: Testimonials/exhibit pages use same nav structure as other pages (philosophy.html, faq.html, contact.html links)
- [ ] **TECH-01**: Dark mode support with CSS custom properties
- [ ] **TECH-02**: SEO metadata (Open Graph, structured data, meta descriptions) across all pages
- [ ] **TECH-03**: Performance audit and optimization (image compression, lazy loading, critical CSS)
- [ ] **TECH-04**: Analytics integration
- [ ] **TECH-05**: Mobile hamburger menu for responsive navigation

### Out of Scope

<!-- Explicit boundaries. -->

- Blog platform -- major feature, separate project if ever
- Resume hosting/download -- resumes are tailored per application, managed elsewhere
- Backend/CMS -- static site, no server-side processing
- Cover letter or LinkedIn management -- external platforms
- Content creation (new case studies, new testimonials) -- content sourced from existing archives; this project is about the website, not content authoring

## Context

This website was originally developed as part of a broader "Career Documentation Refactoring" GSD project in an Obsidian vault (`/mnt/c/main/Obsidian Vault/`). That project covered brand identity, career files, resumes, AND the website across milestones v1.0 through v2.3 (24 phases). The website-specific work (phases 12-19) has been factored out to this standalone repository.

**Source material in the vault (reference only -- this repo is now source of truth):**
- `CAREER/Website/Pages/` -- Markdown source content for Home, About, Portfolio
- `CAREER/Website/Assets/Design-System.md` -- Complete design system specification
- `CAREER/Brand Vision 1.md` -- Brand identity and positioning
- `CAREER/Dan Novak - Writing Style Profile.md` -- Voice and tone guidelines
- `CAREER/Dan Novak - Master Career File.md` -- Canonical career history
- `CAREER/Case Studies/` -- Detailed project case studies
- `CAREER/Pattern158/Brand/` -- Brand quick reference and guidelines
- `.planning/phases/12-19` -- Previous website phase plans and verification docs
- `.planning/claims-database.yaml` -- 55 audited claims with source traceability

**Current site pages (14 HTML files):**
- index.html -- Home/landing with hero, projects as "Findings," philosophy preview
- philosophy.html -- Six brand elements, methodology, origin story, influences
- faq.html -- 15 questions, native accordion, 4 categories
- contact.html -- Email, LinkedIn, GitHub, guidance, testimonial
- testimonials.html -- "Field Reports" with 9 exhibit summaries, metrics
- exhibits/exhibit-a.html through exhibit-i.html -- Detailed case study pages

**Brand identity:**
- Name: Pattern 158 (Myst fireplace puzzle reference -- 1:5:8 ratio)
- Tagline: "I cheat, but I cheat fair." (The Three Stooges, "Tassels in the Air," 1938)
- Aesthetic: NTSB investigation reports, industrial/technical
- Six elements: Provider of Clarity, Cheat Fair, Build the Tool, Seek Knowledge, Time Machine, TASBot

## Constraints

- **Static HTML only**: No build tools, no frameworks, no JavaScript dependencies. Pure HTML/CSS with minimal vanilla JS where needed (copy-to-clipboard, accordions).
- **Accessibility**: WCAG 2.1 AA minimum. All changes must maintain or improve compliance.
- **Brand consistency**: All content must align with established brand voice and design system.
- **Factual accuracy**: Every claim on the site must be traceable to primary sources (emails, project files). No embellishment.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Factor website out of vault GSD project | Vault project scope too broad (career docs + website); website needs its own development lifecycle | -- Pending |
| This repo is source of truth | Vault managed content authoring; now that site is live, HTML is the canonical form | -- Pending |
| Static HTML, no framework | Simplicity, zero dependencies, fast load times, easy to deploy | ✓ Good |
| NTSB investigation aesthetic | Unique, memorable, aligns with Dan's forensic engineering brand | ✓ Good |
| Testimonials as "Field Reports" with exhibit pages | Gives weight to testimonials, matches investigation aesthetic | -- Pending |

---
*Last updated: 2026-02-13 after project initialization (factored out from vault GSD project)*
