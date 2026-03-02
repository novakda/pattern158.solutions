---
phase: quick-7
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - philosophy.html
  - faq.html
autonomous: true
requirements: [QUICK-7]

must_haves:
  truths:
    - "Testimonial section on philosophy.html renders with testimonial-divider styling (border-top, margin)"
    - "Testimonial section on faq.html renders with testimonial-divider styling (border-top, margin)"
    - "Testimonial sections on philosophy.html and faq.html are structurally consistent with contact.html pattern"
  artifacts:
    - path: "philosophy.html"
      provides: "Fixed testimonial section with proper class attribute"
      contains: 'class="testimonial testimonial-divider"'
    - path: "faq.html"
      provides: "Fixed testimonial section with proper class attribute"
      contains: 'class="testimonial testimonial-divider"'
  key_links:
    - from: "philosophy.html"
      to: "css/main.css"
      via: "testimonial-divider class"
      pattern: "class=\"testimonial testimonial-divider\""
---

<objective>
Fix the "What Colleagues Say" testimonial section formatting on philosophy.html (and the identical bug on faq.html) so the testimonial-divider CSS class is actually applied and the section renders consistently with the site-wide testimonial pattern.

Purpose: The testimonial sections on philosophy.html and faq.html have a duplicate `class` attribute on their `<section>` tags — `class="testimonial" class="testimonial-divider"` — which causes browsers to silently ignore the second attribute. The `testimonial-divider` class (which provides a border-top separator and extra margin/padding) never applies. This is an HTML validity bug.

Output: Both files fixed with merged class attributes so CSS applies correctly.
</objective>

<execution_context>
@/home/xhiris/.claude/get-shit-done/workflows/execute-plan.md
@/home/xhiris/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@philosophy.html (lines 279-295 — testimonial section)
@faq.html (lines 268-284 — testimonial section)
@contact.html (lines 192-206 — testimonial section, correct pattern reference)
@css/main.css (lines 687-702 — testimonial-divider and section-heading-styled classes)

<interfaces>
<!-- CSS classes involved (from css/main.css) -->

.testimonial-divider — Adds margin-top: var(--space-2xl), border-top: 1px solid var(--color-border), padding-top: var(--space-2xl)
.section-heading-styled — Bebas Neue heading, uppercase, letter-spacing: 2px
.testimonial — Base testimonial section styling
.testimonial-quote — Blockquote styling
.testimonial-secondary — Secondary quote variant
.quote-attribution — Footer inside blockquote
.quote-text — Quote paragraph text
</interfaces>
</context>

<tasks>

<task type="auto">
  <name>Task 1: Fix duplicate class attributes on testimonial sections</name>
  <files>philosophy.html, faq.html</files>
  <action>
    Fix the HTML-invalid duplicate `class` attribute on the testimonial `<section>` tags in both files.

    **philosophy.html line 280:**
    Change: `<section class="testimonial" class="testimonial-divider">`
    To: `<section class="testimonial testimonial-divider">`

    **faq.html line 269:**
    Change: `<section class="testimonial" class="testimonial-divider">`
    To: `<section class="testimonial testimonial-divider">`

    This is the ONLY change needed. Do NOT remove the `<h2 class="section-heading-styled">What Colleagues Say</h2>` heading — philosophy.html and faq.html intentionally have this heading while contact.html does not (contact.html uses the testimonial as a minimal footer element, while philosophy and faq use it as a visible content section with a title). The heading is a deliberate design choice for these pages.

    Do NOT modify any other part of these files. Do NOT touch contact.html.
  </action>
  <verify>
    <automated>grep -n 'class="testimonial".*class="testimonial-divider"' /home/xhiris/projects/pattern158.solutions/philosophy.html /home/xhiris/projects/pattern158.solutions/faq.html; echo "Exit: $? (expect 1 = no matches = bug is fixed)" && grep -c 'class="testimonial testimonial-divider"' /home/xhiris/projects/pattern158.solutions/philosophy.html /home/xhiris/projects/pattern158.solutions/faq.html</automated>
  </verify>
  <done>
    - No duplicate `class` attributes exist in philosophy.html or faq.html
    - Both files have `class="testimonial testimonial-divider"` (single merged class attribute)
    - The testimonial-divider CSS (border-top separator, margin, padding) will now actually render in browsers
    - The `section-heading-styled` heading remains intact on both pages
  </done>
</task>

</tasks>

<verification>
- `grep -rn 'class=.*class=' philosophy.html faq.html` returns no results (no duplicate class attributes anywhere)
- `grep -c 'testimonial testimonial-divider' philosophy.html faq.html` returns 1 match per file
- HTML structure of testimonial sections matches: section.testimonial.testimonial-divider > div.container > h2.section-heading-styled + blockquote.testimonial-quote + blockquote.testimonial-quote.testimonial-secondary
</verification>

<success_criteria>
- philosophy.html and faq.html have valid single `class` attributes on their testimonial sections
- The `testimonial-divider` CSS class is no longer silently dropped
- No other content or structure changes introduced
</success_criteria>

<output>
After completion, create `.planning/quick/7-fix-what-colleagues-say-footer-formattin/7-SUMMARY.md`
</output>
