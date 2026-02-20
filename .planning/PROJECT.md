# Pattern 158 Solutions Website

## What This Is

The personal brand website for Dan Novak (pattern158.solutions) -- a static HTML portfolio site presenting 28 years of systems architecture and eLearning engineering through an NTSB investigation report aesthetic. The site features a unified CSS design system with dark mode, responsive mobile navigation, full SEO coverage, and WCAG AA accessibility compliance across 17 pages.

## Core Value

The site must accurately and compellingly present Dan's professional identity and body of work to hiring managers, fellow engineers, and potential clients -- with every claim traceable to primary sources.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ **HOME-01**: Landing page with hero, specialty cards, featured projects, philosophy section -- v2.0
- ✓ **PHIL-01**: Philosophy page with six brand elements (Provider of Clarity, Cheat Fair, Build the Tool, Seek Knowledge, Time Machine, TASBot) -- v2.2
- ✓ **FAQ-01**: FAQ page with 15 questions in 4 categories using native `<details>` accordion -- v2.2
- ✓ **CONT-01**: Contact page with email, LinkedIn, GitHub, response guidance, testimonial -- v2.2
- ✓ **NAV-01**: Consistent cross-page navigation with semantic HTML -- v2.2
- ✓ **A11Y-01**: WCAG 2.1 AA compliance (contrast, focus indicators, skip link, semantic elements) -- v2.1
- ✓ **BRAND-01**: Brand assets deployed (hero image, logo with 1:5:8 ratio, favicon) -- v2.0
- ✓ **BRAND-02**: Design system (Navy/Teal/Cream palette, Bebas Neue/Inter/JetBrains Mono typography) -- v2.0
- ✓ **FIELD-01**: Testimonials page ("Field Reports") with 9 exhibit case study pages integrated into site navigation -- v1.0
- ✓ **FIELD-02**: Field Reports nav link present in all page navigations -- v1.0
- ✓ **POLISH-01**: Consistent navigation across ALL 17 pages including testimonials and exhibits -- v1.0
- ✓ **POLISH-02**: All pages use same nav structure (Home, Philosophy, FAQ, Contact, Field Reports) -- v1.0
- ✓ **TECH-01**: Dark mode with CSS custom properties, brand-aligned palette, toggle, persistence, FOUC prevention -- v1.0
- ✓ **TECH-02**: SEO metadata (Open Graph, JSON-LD structured data, meta descriptions) across all 17 pages -- v1.0
- ✓ **TECH-03**: Performance optimization (hero compression, WCAG color contrast, CLS elimination, font-display swap) -- v1.0
- ✓ **TECH-05**: Mobile hamburger menu with keyboard accessibility and 48px touch targets -- v1.0
- ✓ **CSS-01**: All inline `<style>` blocks extracted to shared external stylesheet -- v1.0
- ✓ **CSS-02**: All hardcoded color values replaced with CSS custom properties (including inline styles) -- v1.0
- ✓ **CSS-03**: Page structure normalized across all HTML files -- v1.0
- ✓ **NAV-02**: All navigation paths use absolute-from-root URLs -- v1.0
- ✓ **NAV-03**: Mobile hamburger menu with accessible ARIA attributes -- v1.0
- ✓ **NAV-04**: Hamburger menu has 48x48px touch targets and keyboard support -- v1.0
- ✓ **DARK-01**: Dark theme using CSS custom properties with brand-aligned palette -- v1.0
- ✓ **DARK-02**: System preference detection via prefers-color-scheme -- v1.0
- ✓ **DARK-03**: User toggle with localStorage persistence -- v1.0
- ✓ **DARK-04**: No flash of unstyled content (inline theme detection in `<head>`) -- v1.0
- ✓ **SEO-01**: Unique meta description for each page -- v1.0
- ✓ **SEO-02**: Open Graph tags on all pages -- v1.0
- ✓ **SEO-03**: JSON-LD structured data (Person + WebSite schema) -- v1.0
- ✓ **SEO-04**: sitemap.xml listing all 17 pages -- v1.0
- ✓ **PERF-01**: Hero image compressed (148KB to 118KB) -- v1.0
- ✓ **PERF-02**: No non-critical images require lazy loading (N/A by architecture) -- v1.0
- ✓ **PERF-03**: Font loading optimized (font-display: swap) -- v1.0

### Active

<!-- Next milestone scope. -->

- [ ] **TECH-04**: Analytics integration (privacy-first, cookieless)

## Current Milestone: v1.1 Comprehensive Quality Audit & Polish

**Goal:** Audit and polish all 17 pages across content, layout, color, accessibility, branding, and information architecture — benchmarked against portfolio site best practices — to achieve forensic-level quality.

**Target areas:**
- Full content audit: eliminate redundancy, improve writing quality, ensure compelling presentation
- Information architecture: right content on right pages, clear user journeys
- Visual polish: layout consistency, spacing, color refinement, typography hierarchy
- Accessibility: maintain/exceed WCAG AA, improve beyond minimum
- Branding: consistency across all pages, NTSB aesthetic adapts where UX demands
- Best practices: benchmark against portfolio site standards

**Guiding principle:** UX takes priority when best practices conflict with the NTSB aesthetic.

### Out of Scope

<!-- Explicit boundaries. -->

- Blog platform -- major feature, separate project if ever
- Resume hosting/download -- resumes are tailored per application, managed elsewhere
- Backend/CMS -- static site, no server-side processing
- Cover letter or LinkedIn management -- external platforms
- Content creation (new case studies, new testimonials) -- content sourced from existing archives
- JavaScript frameworks (React, Vue, etc.) -- violates static HTML constraint
- Build tools (Webpack, Vite, etc.) -- site intentionally has zero build dependencies
- Google Analytics -- privacy concerns, performance impact, requires cookie consent
- Parallax scrolling / animations -- conflicts with NTSB investigation aesthetic
- Cookie consent banner -- eliminated by choosing cookieless analytics

## Context

Shipped v1.0 with 10,299 LOC (7,422 HTML + 2,877 CSS) across 17 pages. Tech stack: static HTML, single CSS file with 62 design tokens, minimal vanilla JS (theme toggle, hamburger menu). No build tools, no frameworks, no dependencies.

This website was originally developed as part of a broader "Career Documentation Refactoring" GSD project in an Obsidian vault. The website-specific work was factored out to this standalone repository. This repo is now the source of truth.

**Current site pages (17 HTML files):**
- index.html -- Home/landing with hero, projects as "Findings," philosophy preview
- philosophy.html -- Six brand elements, methodology, origin story, influences
- faq.html -- 15 questions, native accordion, 4 categories
- contact.html -- Email, LinkedIn, GitHub, guidance, testimonial
- testimonials.html -- "Field Reports" with 9 exhibit summaries, metrics
- exhibits/exhibit-a.html through exhibit-l.html -- 12 detailed case study pages

**Brand identity:**
- Name: Pattern 158 (Myst fireplace puzzle reference -- 1:5:8 ratio)
- Tagline: "I cheat, but I cheat fair." (The Three Stooges, "Tassels in the Air," 1938)
- Aesthetic: NTSB investigation reports, industrial/technical
- Six elements: Provider of Clarity, Cheat Fair, Build the Tool, Seek Knowledge, Time Machine, TASBot

## Constraints

- **Static HTML only**: No build tools, no frameworks, no JavaScript dependencies. Pure HTML/CSS with minimal vanilla JS where needed.
- **Accessibility**: WCAG 2.1 AA minimum. All changes must maintain or improve compliance.
- **Brand consistency**: All content must align with established brand voice and design system.
- **Factual accuracy**: Every claim on the site must be traceable to primary sources (emails, project files). No embellishment.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Factor website out of vault GSD project | Vault project scope too broad; website needs its own development lifecycle | ✓ Good |
| This repo is source of truth | Vault managed content authoring; now that site is live, HTML is the canonical form | ✓ Good |
| Static HTML, no framework | Simplicity, zero dependencies, fast load times, easy to deploy | ✓ Good |
| NTSB investigation aesthetic | Unique, memorable, aligns with forensic engineering brand | ✓ Good |
| Testimonials as "Field Reports" with exhibit pages | Gives weight to testimonials, matches investigation aesthetic | ✓ Good |
| Color source of truth: implemented values | Keep #1a2838, #17a2b8, #faf9f6 not design spec values | ✓ Good |
| Semantic token naming (--color-primary not --navy) | Enables theme flexibility without renaming tokens | ✓ Good |
| Brand-aligned dark mode (navy not generic black) | Preserves NTSB aesthetic in both themes | ✓ Good |
| localStorage for theme persistence (not cookies) | Simpler, no server needed, immediate access in blocking script | ✓ Good |
| Absolute-from-root nav paths (/page.html) | Avoids relative path fragility in exhibits/ subdirectory | ✓ Good |
| Automated Playwright testing over manual verification | Reproducible, 27/27 tests passed, faster iteration | ✓ Good |
| --color-primary #17a2b8 to #0e7c8c | WCAG 4.5:1 compliance while preserving teal brand identity | ✓ Good |
| JPEG Q72 for hero (not Q85) | Q85 gave <1% reduction, Q72 gives 20% at acceptable quality | ✓ Good |
| --color-inverse-text-muted for dark backgrounds | --color-text-muted fails WCAG on dark footer/nav/hero contexts | ✓ Good |

| UX over brand when conflicting | Best practices should win over aesthetic when they improve usability | — Pending |

---
*Last updated: 2026-02-20 after v1.1 milestone start*
