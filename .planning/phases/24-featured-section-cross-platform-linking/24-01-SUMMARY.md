---
phase: 24-featured-section-cross-platform-linking
plan: 01
subsystem: linkedin-profile-content
tags: [featured-section, copy-optimization, og-images, linkedin-strategy]
dependencies:
  requires: [23-01-headline-about, 23-02-url-strategy]
  provides: [featured-exhibit-selection, featured-copy-variants, og-image-decision]
  affects: [24-02-html-implementation]
tech-stack:
  added: []
  patterns: [linkedin-featured-optimization, og-protocol, copy-variant-methodology]
key-files:
  created:
    - .planning/phases/24-featured-section-cross-platform-linking/deliverables/featured-copy.md
    - .planning/phases/24-featured-section-cross-platform-linking/deliverables/og-image-strategy.md
  modified: []
decisions:
  - Selected 5 Featured exhibits: GM Investigation, SCORM Debugger, MCAPS AI Agent, Cross-Domain SCORM Framework, Homepage
  - 3 copy variants per item (outcome-focused, curiosity-driven, technical showcase) for user choice
  - Strength-first ordering with mobile context optimization (60% LinkedIn traffic is mobile)
  - Consistent branding OG image strategy (Option A) over unique per-exhibit images (Option B deferred)
  - Copy distinct from site OG tags, optimized for LinkedIn Featured click-through context
metrics:
  duration: 189
  completed: 2026-02-23T19:25:23Z
  tasks: 2
  files: 2
---

# Phase 24 Plan 01: Featured Exhibit Selection & Copy Summary

**One-liner:** Selected 5 pattern158.solutions exhibits for LinkedIn Featured section with 3 LinkedIn-optimized copy variants each; documented OG image strategy with consistent branding recommendation.

## Execution Overview

Plan 01 delivered Featured section content strategy and OG image decision for LinkedIn profile optimization. Selected 5 exhibits balancing brand recognition (GM, Electric Boat), skill diversity (forensic investigation, automation tooling, AI platforms, cross-domain frameworks), and story impact. Each exhibit has 3 copy variants (outcome-focused, curiosity-driven, technical showcase) optimized for LinkedIn Featured context, not generic social sharing. OG image strategy documented with clear recommendation for consistent logo branding (1200x627) across all pages.

## Tasks Completed

| Task | Description | Commit | Files |
|------|-------------|--------|-------|
| 1 | Select Featured exhibits and write LinkedIn-specific copy variants | 072c1a3 | featured-copy.md |
| 2 | Document OG image strategy decision | b679347 | og-image-strategy.md |

## Decisions Made

### Featured Exhibit Selection
Selected 5 items covering diverse engineering dimensions:
1. **GM Investigation** (exhibit-j.html) — Forensic engineering differentiator, NTSB methodology, recognizable brand
2. **SCORM Debugger** (exhibit-m.html) — Toolmaker identity, Vue.js modern stack, hours-to-minutes impact story
3. **Microsoft MCAPS AI Agent** (exhibit-k.html) — Currency proof (2024-2026), hybrid AI architecture, Microsoft platform credibility
4. **Cross-Domain SCORM Framework** (exhibit-e.html) — Longevity (10+ years production), first-to-market innovation (2011, pre-Rustici), enterprise scale
5. **pattern158.solutions Homepage** (index.html) — Brand anchor, portfolio gateway, provides context for exploration

**Rationale:** Quality over quantity (5 strong items vs filling all 6 slots). Selection criteria: brand recognition + story impact + skill diversity + hiring manager appeal. All links route through pattern158.solutions as hub (no direct GitHub links in Featured per CONTEXT.md).

### Copy Variant Strategy
Provided 3 copy variants per exhibit using three framing approaches:
- **Outcome-focused:** What it achieved/solved ("How I Cut QA Testing From Hours to Minutes")
- **Curiosity-driven:** What makes it interesting ("The Tool I Built Because Testing Courses Broke My Brain")
- **Technical showcase:** Engineering methodology angle ("TASBot for eLearning: Vue.js Debugger with Save States")

All titles 35-50 characters, descriptions 80-120 characters. Copy is LinkedIn-specific, distinct from site OG meta tags, optimized for Featured section click-through context. Aligns with Phase 23 About section voice (first-person, proof-point-driven, engineering-first positioning).

### Featured Item Ordering
Recommended strength-first ordering:
1. GM Investigation (strongest story impact, forensic differentiator)
2. SCORM Debugger (toolmaker identity, immediate relatability)
3. MCAPS AI Agent (currency proof, modern platform)
4. Cross-Domain Framework (longevity, innovation)
5. Homepage (brand anchor, exploration gateway)

**Mobile context:** LinkedIn Featured appears ABOVE Experience on mobile (60% of traffic), so front-load engagement with most compelling items first.

### OG Image Strategy
**Selected Option A: Consistent branding** (same logo on all pages)
- Resize/recompose pattern158_logo_3pipes_detailed.png from 1024x559 (1.83:1) to 1200x627 (1.91:1)
- Apply to all 17 pages (14 exhibits + homepage, philosophy, contact)
- Pros: Brand recognition, simpler execution, faster implementation, professional standard
- Cons: No visual differentiation (addressed via copy variants)

**Deferred Option B: Unique per-exhibit images**
- Can be implemented in future phase if engagement data supports
- Resource-intensive (14+ image design/creation)
- Featured section copy variants already provide strong differentiation

**Aspect ratio handling:** Target is WIDER than current (1.91:1 vs 1.83:1), requires recomposition not simple resize. Options: add top/bottom padding, crop strategically, or redesign composition at target dimensions.

## Deviations from Plan

None — plan executed exactly as written.

## Verification Results

All success criteria met:
- [x] featured-copy.md exists with 5 exhibits selected
- [x] Each exhibit has 3 copy variants with Title (35-50 chars) and Description (80-120 chars)
- [x] All Featured URLs point to pattern158.solutions (no GitHub links)
- [x] Copy is LinkedIn-specific (different from site OG tags)
- [x] Ordering recommendation documented with mobile context rationale
- [x] og-image-strategy.md exists with dimension decision
- [x] Aspect ratio difference (1.83:1 to 1.91:1) addressed with recomposition guidance

## Technical Notes

**LinkedIn Featured Section Context:**
- High-value profile real estate (above Experience on mobile, 60% of LinkedIn traffic)
- Custom copy optimized for click-through creates engagement that default OG text cannot
- Multiple variants give user choice over tone and framing (user knows their LinkedIn audience better than research predicts)

**OG Protocol Standards:**
- LinkedIn recommended: 1200x627 (1.91:1 ratio)
- Facebook: 1200x630 (also works for LinkedIn)
- Twitter: 1200x675 (summary_large_image card)
- Universal safe choice: 1200x627 works well across all platforms

**Copy Optimization Principles:**
- Titles: Outcome-focused, not feature-focused. "What it did" > "What it is"
- Descriptions: Create curiosity gap. Promise insight, not just information.
- Audience: LinkedIn Featured viewers evaluating whether to engage further — speak to their decision context
- Voice: Coheres with Phase 23 About section (first-person, engineering-first, proof-point-driven)

## Self-Check: PASSED

### Created files exist:
```
FOUND: .planning/phases/24-featured-section-cross-platform-linking/deliverables/featured-copy.md
FOUND: .planning/phases/24-featured-section-cross-platform-linking/deliverables/og-image-strategy.md
```

### Commits exist:
```
FOUND: 072c1a3 (Task 1: Featured exhibit selection + copy variants)
FOUND: b679347 (Task 2: OG image strategy documentation)
```

### Content verification:
- 5 exhibits selected with documented rationale
- 15 copy variants total (5 exhibits × 3 variants each)
- All URLs use pattern158.solutions domain
- Ordering recommendation with mobile-first rationale
- OG image decision with clear recommendation (Option A)
- Aspect ratio handling guidance (1.83:1 → 1.91:1 recomposition)

## Next Steps

**Plan 02: HTML Implementation & LinkedIn Instructions**
- Update HTML meta tags (og:image:width, og:image:height) across 17 pages
- Create consolidated LinkedIn UI instructions document
- Combine Featured section setup instructions with Phase 23 deliverables (headline, about, custom URL)
- Provide copy-paste-ready format for user to apply changes manually in LinkedIn UI

**Future Phases:**
- Phase 25: Skills & Endorsements
- Phase 26: Experience section optimization
- Phase 27: Projects section (if separate from Featured)
- Phase 28: Polish & Cross-Platform Verification

**Dependencies:**
- Plan 02 requires: Image file work (resize logo to 1200x627) — user/designer task, outside GSD scope
- Plan 02 delivers: HTML ready for OG verification, LinkedIn UI instructions ready for manual application

## Performance

- **Duration:** 3 minutes (189 seconds)
- **Velocity:** Content/copy project, minimal complexity (as expected for v1.4)
- **Files modified:** 2 created (featured-copy.md, og-image-strategy.md)
- **Commits:** 2 (one per task, atomic commits maintained)

---

*Plan completed: 2026-02-23*
*Phase: 24-featured-section-cross-platform-linking*
*Plan: 01/02*
