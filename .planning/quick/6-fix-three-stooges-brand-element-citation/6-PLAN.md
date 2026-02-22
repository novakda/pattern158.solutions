---
phase: quick-6
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - philosophy.html
  - index.html
  - .planning/PROJECT.md
autonomous: true
requirements: [CONTENT-FIX-01]

must_haves:
  truths:
    - "Every reference to the 'cheat fair' quote cites 'Healthy, Wealthy and Dumb' not 'Tassels in the Air'"
    - "Philosophy page Three Stooges section uses the full quote as its heading with proper citation"
    - "Homepage Five Core Influences entry 3 shows the full quote, attribution, and links to philosophy page"
  artifacts:
    - path: "philosophy.html"
      provides: "Corrected citation and updated heading for Three Stooges section"
      contains: "Healthy, Wealthy and Dumb"
    - path: "index.html"
      provides: "Updated Three Stooges entry in Five Core Influences"
      contains: "Healthy, Wealthy and Dumb"
    - path: ".planning/PROJECT.md"
      provides: "Corrected brand identity citation"
      contains: "Healthy, Wealthy and Dumb"
  key_links:
    - from: "index.html"
      to: "/philosophy.html#influences"
      via: "anchor link on Three Stooges entry"
      pattern: "philosophy.html"
---

<objective>
Fix incorrect Three Stooges citation ("Tassels in the Air" -> "Healthy, Wealthy and Dumb") across all files, update philosophy page heading to use the actual quote with citation, and update homepage Five Core Influences entry with full quote, attribution, and philosophy page link.

Purpose: Factual accuracy is a core constraint of this site. The card game scene with the "cheat fair" quote is from "Healthy, Wealthy and Dumb" (1938), not "Tassels in the Air."
Output: Corrected citations in philosophy.html, index.html, and .planning/PROJECT.md
</objective>

<execution_context>
@/home/xhiris/.claude/get-shit-done/workflows/execute-plan.md
@/home/xhiris/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@philosophy.html
@index.html
@.planning/PROJECT.md
</context>

<tasks>

<task type="auto">
  <name>Task 1: Fix Three Stooges citation and update content across all files</name>
  <files>philosophy.html, index.html, .planning/PROJECT.md</files>
  <action>
Make the following targeted text changes, preserving all surrounding HTML structure and styling:

**philosophy.html — 3 changes:**

1. Line 134 — Brand Elements source note. Change:
   `<p class="source-note">The Three Stooges, "Tassels in the Air," 1938</p>`
   To:
   `<p class="source-note">The Three Stooges, "Healthy, Wealthy and Dumb," 1938</p>`

2. Lines 225-227 — Five Core Influences, influence #3. Replace the `<h3>` and `<p><strong>Source:</strong>` lines. Change:
   ```html
   <h3>3. The Three Stooges Philosophy</h3>
   <p><strong>Source:</strong> "Tassels in the Air" (1938) — "I cheat, but I cheat fair"</p>
   ```
   To:
   ```html
   <h3>3. &ldquo;You want to cheat, cheat fair &mdash; anything I hate is a crookin&rsquo; crook.&rdquo;</h3>
   <p><strong>Source:</strong> Moe Howard &mdash; &ldquo;Healthy, Wealthy and Dumb,&rdquo; The Three Stooges (1938)</p>
   ```
   Use HTML entities for typographic quotes and dashes to match the site's existing conventions (see influence #5 which uses `&ldquo;` entities).

**index.html — 1 change:**

3. Lines 202-203 — Five Core Influences, entry 3. Replace the dt and dd. Change:
   ```html
   <dt>3. The Three Stooges</dt>
   <dd>The philosophy behind every tool Dan builds: automate the tedium through proper engineering &mdash; documented, maintainable, ethical.</dd>
   ```
   To:
   ```html
   <dt>3. &ldquo;You want to cheat, cheat fair &mdash; anything I hate is a crookin&rsquo; crook.&rdquo;</dt>
   <dd>&mdash; Moe Howard, &ldquo;Healthy, Wealthy and Dumb&rdquo; (1938). The source of the tagline. If you&rsquo;ve found an elegant shortcut, document it, share it, build it properly. Hoarding a clever solution is the real dishonesty. <a href="/philosophy.html#influences" class="link-primary">Full philosophy &rarr;</a></dd>
   ```

**PROJECT.md — 1 change:**

4. Line 131 — Brand identity tagline source. Change:
   `- Tagline: "I cheat, but I cheat fair." (The Three Stooges, "Tassels in the Air," 1938)`
   To:
   `- Tagline: "I cheat, but I cheat fair." (The Three Stooges, "Healthy, Wealthy and Dumb," 1938)`

Do NOT modify the archived content-inventory.csv files — those are historical snapshots from v1.1 and should remain as-is.
  </action>
  <verify>
Run these checks:
1. `grep -rn "Tassels in the Air" philosophy.html index.html .planning/PROJECT.md` — should return zero results
2. `grep -rn "Healthy, Wealthy and Dumb" philosophy.html index.html .planning/PROJECT.md` — should return matches at the corrected locations
3. `grep -n "crookin" philosophy.html index.html` — should show the new quote in both files
4. `grep -n "philosophy.html#influences" index.html` — should show the link in the Three Stooges dd
5. Run existing accessibility tests: `npx playwright test` — all 270 tests should still pass (content-only changes, no structural changes)
  </verify>
  <done>
- Zero instances of "Tassels in the Air" in philosophy.html, index.html, or PROJECT.md
- philosophy.html brand elements source note cites "Healthy, Wealthy and Dumb"
- philosophy.html influence #3 heading is the full quote with typographic entities
- philosophy.html influence #3 source line shows "Moe Howard" attribution with correct film title
- index.html influence #3 dt is the full quote, dd has attribution, explanation, and link to philosophy page
- PROJECT.md brand identity cites "Healthy, Wealthy and Dumb"
- All existing accessibility tests pass
  </done>
</task>

</tasks>

<verification>
- `grep -rn "Tassels in the Air" philosophy.html index.html .planning/PROJECT.md` returns nothing
- `grep -rn "Healthy, Wealthy and Dumb" philosophy.html index.html .planning/PROJECT.md` returns 3 matches (philosophy x2, PROJECT x1) plus index.html (1 match)
- Philosophy page renders correctly with the full quote heading and citation
- Homepage Five Core Influences entry 3 shows full quote with philosophy page link
- Accessibility tests pass (270/270)
</verification>

<success_criteria>
All references to the Three Stooges "cheat fair" quote consistently cite "Healthy, Wealthy and Dumb" (1938) as the source. The philosophy page heading uses the actual full quote with proper attribution. The homepage entry links to the philosophy page for the full explanation. No regressions in accessibility compliance.
</success_criteria>

<output>
After completion, create `.planning/quick/6-fix-three-stooges-brand-element-citation/6-SUMMARY.md`
</output>
