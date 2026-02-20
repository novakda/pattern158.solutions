---
phase: quick-3
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - contact.html
  - faq.html
  - technologies.html
  - portfolio.html
  - testimonials.html
autonomous: true
requirements: [QUICK-3]

must_haves:
  truths:
    - "No forward-facing page suggests Dan is interested in manual QA or accessibility testing work"
    - "Accessibility remediation is still listed as a service offering"
    - "Historical project descriptions reframe toward forensic engineering and methodology creation"
    - "Exhibit deep-dive pages are NOT modified (historical accuracy preserved)"
  artifacts:
    - path: "contact.html"
      provides: "Reframed project preferences"
    - path: "faq.html"
      provides: "Reframed expertise descriptions"
    - path: "technologies.html"
      provides: "Reframed Saba/SumTotal summary"
    - path: "portfolio.html"
      provides: "Reframed project titles and role descriptions"
    - path: "testimonials.html"
      provides: "Reframed exhibit card titles and impact tags"
  key_links: []
---

<objective>
Remove manual QA and accessibility testing messaging from forward-facing website pages. Reframe historical project descriptions to emphasize forensic engineering, methodology creation, and tool-building rather than manual QA/testing work.

Purpose: The current messaging on several pages implies Dan is interested in or actively seeking manual QA testing and accessibility testing roles. His actual sweet spot is forensic engineering and building tools. Accessibility REMEDIATION is fine; tedious manual testing (screenreader reviews, QA checklists, quality assurance) is not the message to send.

Output: Updated HTML across 5 forward-facing pages. Exhibit deep-dive pages (exhibits/*.html) are NOT touched -- those are historical forensic investigation reports and rewriting them would be dishonest.
</objective>

<execution_context>
@/home/xhiris/.claude/get-shit-done/workflows/execute-plan.md
@/home/xhiris/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@contact.html
@faq.html
@technologies.html
@portfolio.html
@testimonials.html
</context>

<tasks>

<task type="auto">
  <name>Task 1: Reframe contact and FAQ forward-facing messaging</name>
  <files>contact.html, faq.html</files>
  <action>
  In contact.html (the primary "what I want" page):
  - Line 169: "Accessibility remediation (WCAG 2.1 AA+)" is FINE -- keep it exactly as-is. Remediation is on-message.
  - No other changes needed on contact.html -- it's already well-framed around rescue/architecture/remediation/AI.

  In faq.html:
  - Line 126: "accessibility remediation (WCAG 2.1 AA+)" -- FINE, keep as-is.
  - Line 155: Change "accessibility (WCAG 2.1 AA/AAA)" to "accessibility remediation (WCAG 2.1 AA/AAA)" -- add the word "remediation" to clarify this is about fixing, not testing.

  That's it for these two files. They're mostly on-message already. The key change is the single word addition on faq.html line 155.
  </action>
  <verify>
  Grep faq.html for "accessibility" and confirm the specialized domains line now says "accessibility remediation" not just "accessibility".
  Grep contact.html for "accessibility" and confirm "Accessibility remediation" is still present.
  Confirm neither file contains phrases like "accessibility testing", "QA testing", or "manual testing" in forward-facing messaging sections.
  </verify>
  <done>
  FAQ specialized domains line says "accessibility remediation (WCAG 2.1 AA/AAA)" instead of bare "accessibility (WCAG 2.1 AA/AAA)". Contact page unchanged (already on-message).
  </done>
</task>

<task type="auto">
  <name>Task 2: Reframe portfolio, testimonials, and technologies project descriptions</name>
  <files>portfolio.html, testimonials.html, technologies.html</files>
  <action>
  These pages contain historical project descriptions that currently use "QA" and "testing" terminology. Reframe to emphasize forensic engineering, methodology, and tool-building. DO NOT change exhibit deep-dive pages.

  **technologies.html:**
  - Line 224 (Saba/SumTotal tech-summary): Change "QA testing and migration consulting" to "Migration consulting and integration troubleshooting" -- removes QA framing, keeps the actual work description accurate.

  **portfolio.html -- Flagship Cards:**
  - Line 336 (Wells Fargo role): Change "Technical lead for functional QA of migrated courses; SCORM/LMS troubleshooting expert; Xyleme technical advisor" to "Technical lead for migration validation; SCORM/LMS troubleshooting expert; Xyleme technical advisor" -- "migration validation" describes what he did without framing it as QA work.
  - Line 337 (Wells Fargo summary): Change "Involved a robust QA process including functional testing within the LCMS environment" to "Involved systematic validation of migrated content within the LCMS environment" -- removes "QA process" and "functional testing" framing.

  **portfolio.html -- Project Directory:**
  - Line 455 (General Dynamics project name): Change "eLearning Development &amp; QA" to "eLearning Development &amp; Technical Validation"
  - Line 457 (General Dynamics role): Change "QA/Testing Lead" to "Technical Validation Lead"
  - Line 560 (Nike project name): Change "eLearning Accessibility QA Assessment" to "eLearning Accessibility Evaluation &amp; Remediation"
  - Line 562 (Nike role): Change "Accessibility QA Technical Advisor" to "Accessibility Technical Advisor"

  **testimonials.html -- Exhibit Cards:**
  - Line 293 (Wells Fargo exhibit title): Change "Sales Conversion Migration: 100+ Course Technical QA Lead" to "Sales Conversion Migration: 100+ Course Technical Lead"
  - Line 306 (Wells Fargo impact tag): Change `<span class="impact-tag">QA Testing</span>` to `<span class="impact-tag">Migration Validation</span>`
  - Line 423 (TD Bank context paragraph): Change "Created WCAG 2.1 AA evaluation methodology, JAWS/NVDA testing protocols, and ARIA remediation templates used across the account." to "Created WCAG 2.1 AA evaluation methodology, JAWS/NVDA interaction protocols, and ARIA remediation templates used across the account." -- changes "testing protocols" to "interaction protocols" which is more accurate (they were documenting screen reader interaction patterns, not doing rote testing).

  IMPORTANT: Do NOT modify anything inside exhibits/*.html files. Those are historical investigation reports.
  </action>
  <verify>
  Run these checks:
  1. Grep portfolio.html for "QA" -- should return zero matches (the word QA should be completely removed from this file)
  2. Grep testimonials.html for "QA Testing" -- should return zero matches
  3. Grep technologies.html for "QA testing" -- should return zero matches
  4. Grep all non-exhibit HTML files for the exact phrase "QA" to confirm no forward-facing QA references remain (excluding exhibits/ directory)
  5. Verify "accessibility remediation" still appears on contact.html
  6. Verify exhibit files are untouched: git diff exhibits/ should show no changes
  </verify>
  <done>
  All forward-facing pages (portfolio, testimonials, technologies) have been reframed from QA/testing language to forensic engineering, methodology, validation, and remediation language. No exhibit pages modified. No references to "QA" remain in forward-facing project descriptions.
  </done>
</task>

</tasks>

<verification>
After both tasks:
1. Search all non-exhibit HTML files for "QA" -- the only acceptable matches are in navigation/script code, not in content sections describing Dan's work or offerings
2. Search all non-exhibit HTML files for "manual test" or "accessibility test" -- should return zero forward-facing messaging matches
3. Confirm "accessibility remediation" still appears on contact.html and faq.html
4. Confirm exhibits/ directory has zero git changes
5. Visual spot-check: the Wells Fargo, General Dynamics, Nike, and TD Bank entries should read as engineering/methodology/validation work, not QA/testing work
</verification>

<success_criteria>
- Zero instances of "QA" in forward-facing content descriptions (portfolio summaries, testimonial cards, tech summaries, contact preferences, FAQ answers)
- "Accessibility remediation" preserved as a service offering on contact.html and faq.html
- FAQ specialized domains says "accessibility remediation" not bare "accessibility"
- Historical exhibit pages (exhibits/*.html) completely untouched
- All reframed descriptions remain factually accurate -- just repositioned from QA/testing language to engineering/methodology/validation language
</success_criteria>

<output>
After completion, create `.planning/quick/3-remove-manual-qa-and-accessibility-testi/3-SUMMARY.md`
</output>
