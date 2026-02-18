---
phase: quick-2
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - faq.html
autonomous: true

must_haves:
  truths:
    - "All internal links across 14 HTML pages resolve to existing files"
    - "No placeholder, lorem ipsum, or TODO text exists in any page"
    - "All image references (src and CSS url()) resolve to files on disk"
    - "Cross-page content references are accurate (e.g., links describing content match destination)"
    - "Sitemap.xml lists all 14 pages and no pages that don't exist"
    - "Any fixable issues found during audit are corrected"
  artifacts:
    - path: "faq.html"
      provides: "Corrected content reference for Power Platform project link"
---

<objective>
Audit the entire pattern158.solutions website (14 HTML pages) for missing content, dead links, broken references, placeholder text, and content accuracy. Fix any issues found.

Purpose: Ensure the live portfolio site has no embarrassing broken links, missing content, or inaccurate cross-references before it represents Dan to potential employers/clients.
Output: Audit report of findings in this plan's SUMMARY, plus fixes applied to any issues found.
</objective>

<execution_context>
@/home/xhiris/.claude/get-shit-done/workflows/execute-plan.md
@/home/xhiris/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@index.html
@philosophy.html
@faq.html
@contact.html
@testimonials.html
@exhibits/exhibit-a.html
@exhibits/exhibit-b.html
@exhibits/exhibit-c.html
@exhibits/exhibit-d.html
@exhibits/exhibit-e.html
@exhibits/exhibit-f.html
@exhibits/exhibit-g.html
@exhibits/exhibit-h.html
@exhibits/exhibit-i.html
@css/main.css
@sitemap.xml
@robots.txt
</context>

<tasks>

<task type="auto">
  <name>Task 1: Comprehensive site audit - link, content, and asset verification</name>
  <files>faq.html</files>
  <action>
Audit all 14 HTML pages systematically for the following categories. For each issue found, record it and fix it if possible.

**1. Internal link verification:**
Check every href in all 14 pages resolves to an existing file. The site pages are:
- Root: index.html, philosophy.html, faq.html, contact.html, testimonials.html
- Exhibits: exhibits/exhibit-{a through i}.html
- Assets: css/main.css, sitemap.xml, robots.txt

Known link patterns to verify:
- Nav links use absolute paths: `/index.html`, `/philosophy.html`, `/faq.html`, `/contact.html`, `/testimonials.html`
- Exhibit back-links use relative: `../testimonials.html`
- Inline links in FAQ use relative without leading slash: `contact.html`, `index.html#work`, `philosophy.html`
- Exhibit links from testimonials.html use relative: `exhibits/exhibit-{x}.html`

**2. Anchor link verification:**
- index.html `#work` anchor -> verify `id="work"` exists (it does, on the findings section)
- index.html `#main-content` -> verify `id="main-content"` exists on all pages
- index.html `#philosophy` -> verify target exists
- FAQ `index.html#work` links -> verify the referenced content matches the link text

**3. Content accuracy check - KNOWN ISSUE TO FIX:**
In faq.html line 207, there is a link that says "Power Platform project" pointing to `index.html#work`. However, the index.html #work section contains three projects: Cross-Domain SCORM Framework, Legacy Courseware CMS Rescue, and Enterprise AI Training Agent. There is NO Power Platform project listed there.

FIX: Change the text in faq.html line 207 from:
`See the <a href="index.html#work">Power Platform project</a> for an example where I discovered undocumented workflows and rebuilt them systematically.`
to:
`See the <a href="index.html#work">featured projects</a> for examples of how I approach undocumented systems and rebuild them systematically.`

This preserves the link destination and the message while accurately describing what the user will find at that anchor.

**4. Placeholder/missing content scan:**
Search all 14 HTML files for: lorem, ipsum, placeholder, TODO, FIXME, TBD, "coming soon", empty href="#", empty href="", empty sections with no content.

**5. Image/asset verification:**
Verify all referenced images exist on disk:
- `/assets/images/logos/pattern158_logo_3pipes_detailed.png` (used in all 14 pages via nav logo src)
- `assets/images/icons/pattern158_favicon_flat.png` (used in all pages via favicon link, root-relative in main pages, `../assets/...` in exhibits)
- `/assets/images/hero/pattern158_organ_pipes_hero.png` (referenced in css/main.css line 454)

**6. External link inventory:**
List all external links for manual verification (do not attempt to fetch):
- `https://linkedin.com/in/dan-novak-5692197` (footer on all pages + contact page)
- `https://github.com/novakda` (contact page only)
- `https://fonts.googleapis.com` and `https://fonts.gstatic.com` (font loading)
- `mailto:xhiris@gmail.com` (footer on all pages + contact page)

**7. Sitemap completeness:**
Verify sitemap.xml lists exactly the 14 pages that exist and no pages that don't exist. Current sitemap has 14 entries - cross-reference with actual HTML files.

**8. Link consistency audit:**
Note (but do not fix unless it causes issues) the inconsistency where FAQ inline links use relative paths (`contact.html`) while nav links use root-relative (`/contact.html`). Both work for a flat site, so this is cosmetic not functional.
  </action>
  <verify>
1. Run: `grep -rn 'href="[^"]*"' *.html exhibits/*.html | grep -v node_modules | grep -v 'http' | grep -v 'mailto' | grep -v '#' | grep -v 'fonts' | grep -v 'css'` and verify every local file reference resolves
2. Run: `grep -rn 'lorem\|ipsum\|placeholder\|TODO\|FIXME\|TBD\|coming.soon' *.html exhibits/*.html` and verify no results (excluding node_modules)
3. Verify faq.html line 207 no longer references "Power Platform project"
4. Verify all 3 image files exist: `ls assets/images/logos/pattern158_logo_3pipes_detailed.png assets/images/icons/pattern158_favicon_flat.png assets/images/hero/pattern158_organ_pipes_hero.png`
  </verify>
  <done>
- The faq.html "Power Platform project" link text is corrected to accurately describe the destination content
- All internal links verified as resolving to existing files
- No placeholder or TODO text found in any page
- All image assets confirmed present on disk
- Sitemap confirmed complete and accurate
- Audit findings documented in SUMMARY with categorized list of: issues found and fixed, issues noted but not actionable (external links), and clean areas
  </done>
</task>

</tasks>

<verification>
- All 14 HTML pages have working internal navigation links
- No broken anchor references (#work, #main-content, etc.)
- No placeholder/dummy text in any page
- All image references resolve to files on disk
- Sitemap matches actual page inventory
- FAQ content references accurately describe their link destinations
</verification>

<success_criteria>
- Zero broken internal links across all 14 pages
- Zero placeholder/TODO text
- All content cross-references are accurate (link text matches destination content)
- Audit report produced as SUMMARY documenting all findings
</success_criteria>

<output>
After completion, create `.planning/quick/2-review-the-website-for-any-missing-conte/2-SUMMARY.md`
</output>
