---
phase: quick-4
plan: 01
type: execute
wave: 1
depends_on: []
files_modified:
  - css/main.css
  - portfolio.html
  - testimonials.html
  - exhibits/exhibit-a.html
  - exhibits/exhibit-b.html
  - exhibits/exhibit-c.html
  - exhibits/exhibit-d.html
  - exhibits/exhibit-f.html
  - exhibits/exhibit-g.html
  - exhibits/exhibit-h.html
  - exhibits/exhibit-i.html
  - exhibits/exhibit-j.html
  - exhibits/exhibit-k.html
  - exhibits/exhibit-l.html
autonomous: false
requirements: [QUICK-4]

must_haves:
  truths:
    - "Tables transform into stacked card layouts on viewports <= 768px"
    - "Each table row becomes a compact card with label-value pairs stacked vertically"
    - "Table headers are visually hidden on mobile (labels come from data-label attributes)"
    - "Cards are readable and well-spaced on mobile without horizontal scrolling"
    - "Desktop table rendering is completely unchanged"
    - "Dark mode card rendering works correctly"
  artifacts:
    - path: "css/main.css"
      provides: "Mobile card transformation CSS for all three table types"
      contains: "data-label"
    - path: "portfolio.html"
      provides: "data-label attributes on all 7 directory-table td elements"
      contains: "data-label"
    - path: "testimonials.html"
      provides: "data-label attributes on resolution-table td elements"
      contains: "data-label"
    - path: "exhibits/exhibit-a.html"
      provides: "data-label attributes on resolution-table and personnel-table td elements"
      contains: "data-label"
  key_links:
    - from: "css/main.css"
      to: "all HTML table td elements"
      via: "data-label attribute rendered by td::before pseudo-element"
      pattern: "content:\\s*attr\\(data-label\\)"
---

<objective>
Transform all HTML tables across the site into PowerApps model-driven-app-style card layouts on mobile viewports (<=768px). Each table row becomes a compact card with label-value pairs stacked vertically, eliminating the cramped column rendering on narrow screens.

Purpose: Tables are currently unreadable on mobile — columns squeeze together with tiny font sizes. Card layouts give each record breathing room and a clear visual hierarchy.
Output: Updated CSS with mobile card transformations, updated HTML with data-label attributes on all table cells across 13 HTML files.
</objective>

<execution_context>
@/home/xhiris/.claude/get-shit-done/workflows/execute-plan.md
@/home/xhiris/.claude/get-shit-done/templates/summary.md
</execution_context>

<context>
@css/main.css
@portfolio.html
@testimonials.html
@exhibits/exhibit-a.html
@exhibits/exhibit-b.html
@exhibits/exhibit-c.html
@exhibits/exhibit-d.html
@exhibits/exhibit-f.html
@exhibits/exhibit-g.html
@exhibits/exhibit-h.html
@exhibits/exhibit-i.html
@exhibits/exhibit-j.html
@exhibits/exhibit-k.html
@exhibits/exhibit-l.html
</context>

<tasks>

<task type="auto">
  <name>Task 1: Add data-label attributes to all table cells across 13 HTML files</name>
  <files>
    portfolio.html
    testimonials.html
    exhibits/exhibit-a.html
    exhibits/exhibit-b.html
    exhibits/exhibit-c.html
    exhibits/exhibit-d.html
    exhibits/exhibit-f.html
    exhibits/exhibit-g.html
    exhibits/exhibit-h.html
    exhibits/exhibit-i.html
    exhibits/exhibit-j.html
    exhibits/exhibit-k.html
    exhibits/exhibit-l.html
  </files>
  <action>
    Add `data-label="Column Name"` attributes to every `<td>` element in every table across the site. The data-label value must match the corresponding `<th>` text for that column. This is what the CSS `::before` pseudo-element will render as the field label on mobile.

    **portfolio.html** — 7 `directory-table` tables, all with columns: Client, Project, Dates, Role.
    Each `<td>` gets: `data-label="Client"`, `data-label="Project"`, `data-label="Dates"`, `data-label="Role"` respectively.
    EXCEPTION: Any `<td colspan="...">` rows (summary/note rows) should NOT get data-label — they span the full width and will be handled differently in CSS.

    **testimonials.html** — 1 `resolution-table`, columns: Issue, Resolution.
    Each `<td>` gets: `data-label="Issue"`, `data-label="Resolution"`.

    **exhibits/exhibit-a.html** — 1 `resolution-table`, columns: #, Issue, Background, Resolution.
    Each `<td>` gets: `data-label="#"`, `data-label="Issue"`, `data-label="Background"`, `data-label="Resolution"`.
    Note: The first td already has class `issue-id`.

    **exhibits/exhibit-b.html** — 1 `personnel-table`, columns: Name, Title / Role, Involvement.
    Each `<td>` gets: `data-label="Name"`, `data-label="Title / Role"`, `data-label="Involvement"`.

    **exhibits/exhibit-c.html** — 1 `personnel-table`, columns: Name, Nickname, Role / Contribution.
    Each `<td>` gets: `data-label="Name"`, `data-label="Nickname"`, `data-label="Role / Contribution"`.
    EXCEPTION: The final row with `colspan="3"` should NOT get data-label.

    **exhibits/exhibit-d.html** — 1 `personnel-table`, columns: Name, Title / Organization, Role in Engagement.
    Each `<td>` gets: `data-label="Name"`, `data-label="Title / Organization"`, `data-label="Role in Engagement"`.

    **exhibits/exhibit-f.html** — 1 `personnel-table`, columns: Name, Title / Organization, Role in Engagement.
    Same pattern as exhibit-d.

    **exhibits/exhibit-g.html** — 1 `personnel-table`, columns: Name, Role.
    Each `<td>` gets: `data-label="Name"`, `data-label="Role"`.

    **exhibits/exhibit-h.html** — 1 `personnel-table`, columns: Name, Role.
    Same pattern as exhibit-g.

    **exhibits/exhibit-i.html** — 1 `personnel-table`, columns: Name, Role.
    Same pattern as exhibit-g.

    **exhibits/exhibit-j.html** — 1 `personnel-table` (columns: Role, Responsibility) + 1 `resolution-table` (columns: #, Failure, Description).
    Personnel: `data-label="Role"`, `data-label="Responsibility"`.
    Resolution: `data-label="#"`, `data-label="Failure"`, `data-label="Description"`.

    **exhibits/exhibit-k.html** — 1 `personnel-table` (columns: Name, Role, Involvement) + 1 `resolution-table` (columns: Component, Approach, Rationale).
    Personnel: `data-label="Name"`, `data-label="Role"`, `data-label="Involvement"`.
    Resolution: `data-label="Component"`, `data-label="Approach"`, `data-label="Rationale"`.

    **exhibits/exhibit-l.html** — 1 `resolution-table` (columns: Role, Involvement) + 1 `resolution-table` (columns: #, Finding, Severity, Description).
    First table: `data-label="Role"`, `data-label="Involvement"`.
    Second table: `data-label="#"`, `data-label="Finding"`, `data-label="Severity"`, `data-label="Description"`.

    Do NOT modify any existing classes, IDs, inline styles, or content. Only ADD the data-label attribute to each td.
  </action>
  <verify>
    Grep all HTML files for `data-label=` and confirm every non-colspan td in every table has the attribute. Count should be roughly 100+ data-label attributes across all files. Verify no existing content or attributes were altered by diffing structure.
  </verify>
  <done>Every `<td>` in every table (except colspan summary rows) has a `data-label` attribute matching its column header text.</done>
</task>

<task type="auto">
  <name>Task 2: Add mobile card transformation CSS for all table types</name>
  <files>css/main.css</files>
  <action>
    Add CSS inside the existing `@media (max-width: 768px)` block that transforms tables into card layouts. The pattern:

    1. **Shared mobile card base** (applies to `.directory-table`, `.personnel-table`, `.resolution-table`):
       ```
       Hide thead: `thead { display: none; }`
       Make table, tbody, tr, td all `display: block`
       Each tr becomes a card:
         - background: var(--color-surface)
         - margin-bottom: var(--space-md)
         - padding: var(--space-md)
         - border-left: 4px solid var(--color-primary)
         - border-radius: var(--radius-md)
         - box-shadow: var(--shadow-sm)
       Each td:
         - display: block (or grid with 2 columns for label-value alignment)
         - padding: var(--space-xs) 0
         - border-bottom: none (remove the normal row borders)
       Each td::before:
         - content: attr(data-label)
         - font-weight: 700
         - font-size: 0.7rem
         - letter-spacing: 0.5px
         - text-transform: uppercase
         - color: var(--color-primary)
         - display: block
         - margin-bottom: 2px
       ```

    2. **Card-specific refinements:**

       For `.directory-table` cards (portfolio page):
         - First td (Client) should be styled as the card "title": larger font, font-weight 700, color var(--color-heading), margin-bottom var(--space-xs). Its ::before label can be hidden since the client name IS the identity.
         - Actually, keep all labels visible for consistency — the PowerApps style always shows labels.
         - Remove the `.directory-table-wrap { overflow-x: auto }` horizontal scroll on mobile — it is no longer needed since cards do not overflow.

       For `.personnel-table` cards (exhibit pages):
         - First td (Name) styled as card title: font-weight 700, color var(--color-heading).
         - The `.person-name` and `.person-org` spans within cells should still render normally.

       For `.resolution-table` cards (testimonials + exhibits):
         - For tables with issue-id column (#), style the issue-id td as a small badge: font-family var(--font-mono), background var(--color-background-alt), display inline-block, padding 0.1rem 0.5rem, border-radius var(--radius-pill), font-size 0.75rem. Position it at the top-right of the card using relative positioning on tr and absolute on the issue-id td.
         - For severity spans (.severity, .severity-critical, .severity-high), keep their existing color styling.

       For colspan rows (summary/note rows like the "13 additional team members" row in exhibit-c):
         - `td[colspan] { border-left-color: var(--color-border); font-style: italic; }` — make it look like a note card, not a data card.
         - `td[colspan]::before { display: none; }` — no label for colspan cells.

    3. **Ensure the existing mobile table styles (font-size: 0.8rem, padding: var(--space-sm)) are REPLACED, not layered on top.** The new card styles supersede those. Remove or override the existing mobile table size reductions for:
       - `.page-testimonials .resolution-table` (line ~2899-2906)
       - `.page-exhibit-j/.page-exhibit-k/.page-exhibit-l .personnel-table/.resolution-table` (lines ~2954-2976)
       - `.page-exhibit .personnel-table/.resolution-table` (lines ~3003-3013)
       - `.page-portfolio .directory-table` (lines ~3317-3324)

       Replace those existing rules with the new card layout rules. Keep the font-size at a readable 0.9rem for card content (not the cramped 0.8rem).

    4. **Dark mode compatibility:** The card styles use CSS custom properties (var(--color-surface), var(--color-primary), etc.) which already have dark mode overrides in the `[data-theme="dark"]` block. No additional dark mode rules needed — the cards will automatically inherit correct dark mode colors.

    5. **Transition/animation:** Add a subtle entry: `tr { transition: box-shadow 0.2s; }` and `tr:hover { box-shadow: var(--shadow-hover); }` — but ONLY inside the mobile media query so desktop hover behavior is unchanged.

    Place all new CSS logically within the existing responsive section, replacing the old table-shrinking rules.
  </action>
  <verify>
    Open the site in a browser at 768px width or narrower. Verify:
    1. All tables render as stacked cards (no horizontal table layout)
    2. Each card shows label-value pairs with uppercase teal labels
    3. No horizontal scrolling on any page
    4. Desktop rendering (>768px) is completely unchanged
    5. Dark mode cards render with correct dark surface/text colors
    Run: `grep -c "data-label" css/main.css` should show the attr(data-label) pattern.
    Run: `grep "display: none" css/main.css` should show thead being hidden in mobile.
  </verify>
  <done>Mobile viewport shows card-based layouts for all tables with label-value stacking. Desktop tables are unaffected. Dark mode works correctly.</done>
</task>

<task type="checkpoint:human-verify" gate="blocking">
  <name>Task 3: Verify mobile card layout rendering across all pages</name>
  <files>none</files>
  <action>
    Human visual verification of the mobile card transformation across all affected pages.

    What was built: Mobile card transformation for all 22 tables across 13 HTML files. Tables now render as PowerApps-style stacked cards on mobile viewports (<=768px) with uppercase teal labels, card shadows, and left accent borders. Desktop rendering unchanged.

    How to verify:
    1. Open the site locally and use browser DevTools to switch to a mobile viewport (375px wide)
    2. Check portfolio.html — the 7 project directory tables should show as cards with Client/Project/Dates/Role labels
    3. Check testimonials.html — the Issue/Resolution table should show as 2-field cards
    4. Check exhibits/exhibit-a.html — the 4-column findings table should show as cards with #/Issue/Background/Resolution labels
    5. Check exhibits/exhibit-c.html — the personnel table should show as cards, and the colspan summary row should appear as an italic note card
    6. Check exhibits/exhibit-l.html — both tables (Role/Involvement and Findings) should show as cards
    7. Toggle dark mode — cards should have dark surface backgrounds with correct text contrast
    8. Switch back to desktop width (>768px) — all tables should render as normal tables with no visual changes
    9. Spot-check 2-3 other exhibit pages for consistent card rendering

    Resume signal: Type "approved" or describe any issues with the card layout rendering.
  </action>
  <verify>User confirms visual correctness of mobile card layouts.</verify>
  <done>User has approved the mobile card rendering across all pages in both light and dark mode.</done>
</task>

</tasks>

<verification>
- All tables across the site transform to card layouts at <=768px viewport
- No horizontal scrolling on any page at mobile widths
- Label-value pairs are clearly readable with visual hierarchy (teal labels, dark values)
- Desktop rendering is pixel-identical to before
- Dark mode renders correctly for both desktop tables and mobile cards
- Colspan/summary rows render gracefully as note-style cards
</verification>

<success_criteria>
- 22 tables across 13 HTML files transform into card layouts on mobile
- Each card shows field labels derived from data-label attributes
- Cards follow the design system (using CSS custom properties for colors, spacing, shadows)
- Zero regression on desktop table rendering
- Dark mode fully supported
</success_criteria>

<output>
After completion, create `.planning/quick/4-improve-mobile-table-rendering-with-comp/4-SUMMARY.md`
</output>
