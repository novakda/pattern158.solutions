---
phase: quick-5
plan: 01
status: complete
commits: [7575c1f, d0ac4a6, 41147ef]
files_modified: [css/main.css]
---

## Summary

Audited mobile rendering across all 6 main pages using Playwright screenshots at iPhone 12 Pro viewport (390px). Identified and fixed excessive padding that was squeezing content into a narrow column.

## Changes Made

**1. Global container/section horizontal padding** (biggest impact)
- `.container`: 2rem (32px/side) → 0.75rem (12px/side) on mobile
- `section`: same reduction
- Recovers 40px of usable horizontal width

**2. Vertical section spacing**
- `section` vertical padding: 5rem (80px) → 3rem (48px) on mobile
- Removes dead zones between sections

**3. Hero sections tightened**
- `.hero-minimal`: 5rem → 3rem vertical padding
- `.page-index .hero`: 6rem → 4rem, min-height 600px → 480px
- `.page-testimonials .hero`, `.page-exhibit .hero`: 5rem → 3rem

**4. Nested element padding reduced**
- Flagship cards: 1.5rem → 1rem
- Finding cards, specialty cards, tech cards: --space-xl/--space-lg → --space-md
- FAQ summaries/answers: --space-md → --space-sm
- Contact guidance list: --space-md → --space-sm
- Blockquotes (testimonials + exhibits): 0.8rem/--space-md → 0.6rem/--space-sm
- Footer: --space-xl → --space-md vertical, 0.75rem horizontal

**5. Page-specific section overrides** (specificity fix)
- Added all page-specific selectors (.page-index section, .page-technologies .tech-category, .page-contact .contact-methods/.guidance/.testimonial, .page-portfolio .portfolio-flagships/.portfolio-directory, .page-philosophy .content-section, .page-index .field-reports-teaser) to the mobile override block to ensure they inherit the tighter padding

## Verification

Playwright screenshots taken before and after changes confirm:
- Content fills significantly more of the viewport width
- Index page fold now shows beginning of first content section
- Portfolio flagship cards and directory tables use full width
- FAQ accordions, contact page, and testimonials all less cramped
- Technologies tech cards span full available width
- No horizontal overflow or layout breaks on any page
