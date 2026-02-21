# Phase 8: Content Quality & Information Architecture - Research

**Researched:** 2026-02-20
**Domain:** Content auditing, information architecture, editorial quality
**Confidence:** MEDIUM (training-based knowledge, tools verified via npm registry patterns)

## Summary

Phase 8 requires a comprehensive content audit across 16 static HTML pages (excluding review.html dev tool) to eliminate redundancy, fix errors, and optimize information architecture for three distinct audiences. The challenge is performing ROT audit (Redundant, Obsolete, Trivial), grammar/spell checking, content inventory, and IA optimization on a zero-build static HTML site without introducing build complexity.

**Key findings:**
- Content inventory is manual-first with optional automation for text extraction
- Grammar/spell checking has mature Node.js CLI tools (write-good, textlint, alex)
- ROT audits are primarily manual editorial processes with tool support for finding duplicates
- Information architecture optimization requires understanding user journeys and content purpose
- Exhibit structure analysis requires manual review against NTSB investigation report model

**Primary recommendation:** Use a hybrid approach - automated tools for grammar/typos/duplicates detection, manual editorial judgment for ROT decisions and IA optimization. Create spreadsheet-based content inventory as source of truth, use Node.js CLI tools for quality gates.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Content Audit Approach:**
- Moderate trim - remove clear redundancy and outdated content, preserve explanatory depth where it helps understanding
- Tone shift toward more authoritative voice - "senior consultant who's done this 100 times," not conversational
- Known weak spots: FAQ feels thin, Index (homepage) is too long
- Homepage job: hook and route - quick credibility hit then funnel visitors to deeper pages, minimal scrolling
- Homepage message: blend diagnostician/investigator angle (the hook) with breadth of experience (the proof)
- Testimonials sourced from email archives without explicit permission - flag for later, keep as-is for now
- Site content is comprehensive from email archive extraction - no known missing content
- review.html is a dev/preview tool, NOT a public page - exclude from content audit (16 public pages, not 17)

**Redundancy Handling:**
- Claude's discretion on whether to consolidate to one canonical spot or allow brief echoes per page, decided case by case based on page context

**Disclosure & Proprietary Content:**
- No NDA signed, but exercise caution with former employer (GP) and client proprietary information
- Flag anything that might reveal proprietary details during audit for user decision per case

**User Journey Design:**
- Three audiences with equal priority: hiring managers (30s scan), engineering peers (3-4min review), potential clients (full review)
- Targeted sites for different roles - deferred idea for future
- Engineering peers care about: technical depth woven into problem-solving narratives - show the thinking AND the tech chops together
- Client conversion: artisan positioning, not commodity - honest about capabilities and limits, proof through detailed work, methodology as evidence of quality thinking
- Principles are prime movers, not a sales pitch - they're a filter for the right fit
- Contact page should reference "not a good fit" criteria and types of engagements open to; anti-pattern: no direct employment at billable-hours-first consultancies
- Explicit methodology section describing forensic/diagnostic approach - placement (philosophy page vs own page) at Claude's discretion
- Site model: hub with a suggested path - self-contained pages with subtle guidance for first-time visitors

**Exhibit Structure:**
- NTSB investigation report as the structural model - exhibits are "full investigation reports," portfolio is the "probable cause summary"
- Challenge → Approach → Solution → Results is close but not exact for all exhibits - some are discovery-heavy, long-running, or lack clean results
- Claude decides per exhibit whether to use standard structure or a variant that better serves the story (e.g., investigation-inspired: Situation → Investigation → Analysis → Findings → Impact)
- Results evidence: use whatever exists - adoption, qualitative quotes, before/after - and be honest when hard metrics aren't available
- Technologies: both woven into narrative AND a summary list for quick scanning
- Length varies by project - stronger stories get more space, no fixed target
- Claude decides depth per exhibit based on how interesting the investigation story is
- "Lessons learned" section only where meaningful - skip when it would feel forced
- Simple diagrams where they help clarify the story (not deferred, included in this phase)
- Exhibit naming: "Exhibit A: The Accessibility Practice" - letter designation plus descriptive subtitle
- Accessibility practice exhibit: show full arc - had no training → built technical methodology → became organizational standard (both practice-building AND technical)
- Cross-references between exhibits: Claude decides where they add value vs clutter
- Exhibit consolidation: audit should assess whether any of the 10 could be stronger combined
- Exhibit ordering on portfolio page: audit should recommend based on assessed strength

**Page Roles & Information Architecture:**
- Audit should assess whether each page justifies its existence
- Philosophy page is a core page, central to site identity
- Technologies page role: audit should determine its purpose (skills inventory vs breadth showcase vs something else)
- Navigation flow: Claude determines optimal flow based on content audit and audience needs
- Audit should identify any content that would serve better on a different page
- Navigation hierarchy: Claude recommends nav structure based on page roles identified in audit
- URL structure can change freely - no external links depend on current paths

### Claude's Discretion

- Redundancy handling approach per page (canonical vs brief echoes)
- FAQ fate: strengthen in place, merge into other pages, or retire - based on audit findings
- 30-second scan content for hiring managers
- CTAs per page (subtle nudges vs navigation-only)
- Methodology section placement (philosophy page vs dedicated page)
- Technologies page curation approach (forward-looking vs comprehensive)
- Portfolio-to-exhibit relationship model
- Navigation structure and suggested visitor path
- Cross-references between exhibits
- Exhibit ordering and potential consolidation

### Deferred Ideas (OUT OF SCOPE)

- Targeted sites for different roles/audiences - future consideration
- Testimonial permissions - reaching out to quoted individuals for consent is a separate task outside this phase
- Visual enhancements beyond simple clarifying diagrams - future phase
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| CONTENT-01 | Content inventory completed - all sections across 17 pages cataloged with purpose and audience | Content inventory methodology, spreadsheet templates, HTML text extraction tools |
| CONTENT-02 | Redundant content eliminated - ROT audit (Redundant, Obsolete, Trivial) with canonical locations for each piece of information | ROT audit framework, duplicate detection tools, editorial decision matrix |
| CONTENT-03 | Zero typos or grammatical errors across all 17 pages | Grammar/spell checking tools (write-good, textlint, alex), HTML text extraction, automated quality gates |
| CONTENT-04 | Information architecture optimized - right content on right pages, clear user journeys for hiring managers, engineers, and clients | IA evaluation framework, user journey mapping, content placement heuristics |
</phase_requirements>

## Standard Stack

### Core Tools

| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| write-good | 1.0.x | Prose linter for English | Industry standard for detecting weak writing, passive voice, weasel words, adverbs |
| textlint | 14.x | Pluggable natural language linter | Extensible framework for grammar/style rules, supports HTML |
| alex | 11.x | Inclusive language checker | Catches insensitive or inconsiderate writing automatically |
| cheerio | 1.0.x | HTML parser for Node.js | jQuery-like API for extracting text content from HTML for analysis |

**Installation:**
```bash
npm install --save-dev write-good textlint textlint-rule-common-misspellings textlint-rule-write-good alex cheerio
```

### Supporting Tools

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| markdown-link-check | 3.x | Link validator | If converting inventory to Markdown (optional) |
| remark-lint | 9.x | Markdown linter | If using Markdown for interim content analysis |
| jsinspect | 0.12.x | Duplicate code detector | Can find repeated HTML blocks (adapt for content duplication) |
| diff | system | Text comparison | Manual side-by-side comparison of similar sections |

### Manual Tools

| Tool | Purpose | Format |
|------|---------|--------|
| Spreadsheet (CSV) | Content inventory master | page, section_id, heading, purpose, audience, word_count, status |
| Spreadsheet (CSV) | ROT audit tracker | content_piece, location, category (R/O/T), decision, canonical_location |
| Text editor | Side-by-side comparison | For manual redundancy assessment |

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| write-good | Grammarly CLI (paid) | Better accuracy but requires API key, not FOSS |
| Manual inventory | Content CMS | Massive overkill for 16 static pages |
| Spreadsheet | Database | Unnecessary complexity for one-time audit |
| cheerio | JSDOM | Heavier, slower, but more complete DOM API |

## Architecture Patterns

### Recommended Workflow Structure

```
.planning/phases/08-content-quality-information-architecture/
├── inventory/
│   ├── content-inventory.csv           # Master inventory: all sections cataloged
│   ├── rot-audit.csv                   # ROT decisions: redundant/obsolete/trivial items
│   ├── grammar-errors.txt              # Automated tool output
│   └── ia-analysis.md                  # Information architecture recommendations
├── scripts/
│   ├── extract-content.mjs             # Extracts text from HTML for analysis
│   ├── check-grammar.mjs               # Runs write-good + textlint on extracted text
│   ├── find-duplicates.mjs             # Detects repeated content blocks
│   └── generate-inventory-template.mjs # Creates CSV template for manual filling
└── 08-RESEARCH.md (this file)
```

### Pattern 1: Content Inventory Process

**What:** Systematic cataloging of every content section with metadata for decision-making

**When to use:** At start of content audit, before making any changes

**Workflow:**
```
1. Generate inventory template (CSV with headers)
2. Run extract-content.mjs to pull text from all 16 HTML pages
3. Manual review: fill in purpose, audience, status for each section
4. Export complete inventory as source of truth
5. Use inventory to drive ROT audit and IA decisions
```

**Inventory columns:**
- `page` - filename (e.g., "index.html", "exhibits/exhibit-a.html")
- `section_id` - unique identifier (e.g., "index-hero", "exhibit-a-background")
- `heading` - section heading or first line
- `purpose` - what this section accomplishes
- `audience` - primary audience (hiring_managers, engineers, clients, all)
- `word_count` - approximate length
- `status` - keep, trim, move, remove, consolidate

**Example:**
```csv
page,section_id,heading,purpose,audience,word_count,status
index.html,hero,"Pattern 158 | Dan Novak",Hook visitors with credibility,all,45,keep
index.html,about,"28+ years building systems",Establish experience breadth,all,120,trim
philosophy.html,principles,"Core Principles",Filter for culture fit,clients,890,keep
```

### Pattern 2: ROT Audit Framework

**What:** Systematic review to identify Redundant, Obsolete, Trivial content

**When to use:** After content inventory complete, before making edits

**Categories:**
- **Redundant:** Same information appears in multiple places (decide canonical location)
- **Obsolete:** Information no longer accurate or relevant (remove or update)
- **Trivial:** Low-value content that doesn't serve audience needs (remove or strengthen)

**Decision matrix:**
```
For each content piece flagged in ROT audit:

IF Redundant:
  - Determine canonical location based on page purpose
  - Option A: Keep only canonical, link from other locations
  - Option B: Allow brief echo if contextually necessary (user discretion)
  - Document decision in rot-audit.csv

IF Obsolete:
  - Verify: is it actually outdated, or just perception?
  - Remove if no longer accurate
  - Update if core concept still valid but details changed

IF Trivial:
  - Ask: Does this help any of the three audiences make a decision?
  - Remove if answer is no
  - Strengthen with specifics if answer is yes but execution is weak
```

**ROT audit CSV columns:**
- `content_piece` - description of the content
- `current_locations` - where it appears (comma-separated page IDs)
- `category` - R, O, or T
- `reasoning` - why it's flagged
- `decision` - keep, remove, consolidate, update
- `canonical_location` - if consolidated, where is the authoritative version
- `action_taken` - what was actually done

### Pattern 3: Grammar/Spell Quality Gate

**What:** Automated prose linting to catch typos, grammar errors, weak writing

**When to use:** After content edits complete, as pre-commit quality gate

**Example script (check-grammar.mjs):**
```javascript
import { readFileSync } from 'fs';
import { load } from 'cheerio';
import writeGood from 'write-good';
import { glob } from 'glob';

// Extract text content from HTML
function extractText(htmlPath) {
  const html = readFileSync(htmlPath, 'utf8');
  const $ = load(html);

  // Remove script, style, nav, footer
  $('script, style, nav, footer').remove();

  // Get main content text
  const text = $('#main-content').text() || $('main').text() || $('body').text();
  return text.replace(/\s+/g, ' ').trim();
}

// Check prose quality
const pages = glob.sync('*.html').concat(glob.sync('exhibits/*.html'));
let hasErrors = false;

pages.forEach(page => {
  if (page === 'review.html') return; // Skip dev tool

  const text = extractText(page);
  const suggestions = writeGood(text);

  if (suggestions.length > 0) {
    console.log(`\n${page}:`);
    suggestions.forEach(s => {
      const snippet = text.substring(s.index - 20, s.index + 50);
      console.log(`  Line ~${Math.floor(s.index / 80)}: ${s.reason}`);
      console.log(`    "${snippet}"`);
    });
    hasErrors = true;
  }
});

process.exit(hasErrors ? 1 : 0);
```

**Integration:**
```bash
# Run manually during audit
node scripts/check-grammar.mjs

# Add to package.json scripts
{
  "scripts": {
    "lint:prose": "node scripts/check-grammar.mjs",
    "lint": "npm run lint:prose && stylelint css/**/*.css"
  }
}
```

### Pattern 4: Information Architecture Evaluation

**What:** Assess whether content is on the right page for the right audience

**When to use:** After inventory complete, before making structural changes

**Evaluation heuristics:**

**Page purpose definitions:**
- `index.html` - Hook + route. Quick credibility, funnel to depth. Target: < 2 screens of scroll
- `philosophy.html` - Culture fit filter. Core principles, methodology, values. Clients read fully, others scan
- `portfolio.html` - NTSB "probable cause summaries." High-level project overviews with links to exhibits
- `exhibits/*.html` - NTSB "full investigation reports." Deep technical narratives
- `technologies.html` - Breadth showcase OR skills inventory (audit determines which)
- `faq.html` - Objection handling, logistics, working style
- `contact.html` - Action page. Clear next steps, "not a good fit" criteria
- `testimonials.html` - Social proof. Field reports from actual engagements

**Content placement rules:**
1. **Hiring manager (30s scan) content** - index.html hero, portfolio summaries, testimonial highlights
2. **Engineering peer (3-4min review) content** - exhibits (full depth), technologies (proof of breadth)
3. **Client (full review) content** - philosophy (methodology + values), exhibits (proof of capability), contact (engagement criteria)

**Misplacement indicators:**
- Deep technical details on index.html (move to exhibit)
- Generic "I'm a consultant" language on philosophy.html (strengthen or remove)
- Project details repeated on both portfolio.html and exhibit (portfolio should summarize, exhibit has full story)
- Technology lists without context (meaningless to clients, underwhelming to engineers)

**IA audit questions per page:**
1. Does every section serve the page's primary purpose?
2. Is there content here that would work better on another page?
3. Does the page support at least one of the three user journeys?
4. If removed entirely, what would be lost?

### Anti-Patterns to Avoid

- **Completionism:** Trying to address every possible reader question on every page. Better: self-contained pages with strategic links to depth
- **Resume thinking:** Technology lists without narrative context. Engineers want to see how you used the tech, not just that you used it
- **Passive hedging:** "I think," "I believe," "sort of," "pretty much." User wants authoritative consultant voice
- **Redundancy justification:** "But readers might not see the other page!" If it's important, link to the canonical location; don't repeat
- **Scope creep:** Adding new content during audit. Audit = assess existing content. New content is a separate phase

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Grammar checking | Custom regex for common errors | write-good, textlint | 1000+ edge cases already handled, continuously updated |
| HTML parsing | String manipulation / regex | cheerio | Regex can't parse HTML reliably (not a regular language) |
| Content diffing | Custom string comparison | diff (system tool) | Handles whitespace, line breaks, context display |
| Spell checking | Custom dictionary | Aspell CLI or textlint plugins | Mature dictionaries, language-specific rules |
| Duplicate detection | Manual find + grep | jsinspect or custom cheerio script | Detects semantic duplicates, not just exact matches |

**Key insight:** Content quality tools have decades of linguistic rule development. Custom solutions miss edge cases and language nuance that mature tools handle.

## Common Pitfalls

### Pitfall 1: Over-automation of Editorial Judgment

**What goes wrong:** Trying to automate ROT decisions or IA optimization, leading to mechanical content that loses voice

**Why it happens:** Discomfort with subjective editorial decisions, desire for "objective" process

**How to avoid:**
- Use tools for objective quality gates (grammar, spelling, broken links)
- Reserve human judgment for subjective decisions (tone, redundancy, placement)
- Content inventory is a decision support tool, not an algorithm

**Warning signs:**
- Removing content because word count is high, not because it's low-value
- Consolidating sections because they share keywords, not because they're truly redundant
- Changing tone to match a "score," not to serve audience needs

### Pitfall 2: Inventory Paralysis

**What goes wrong:** Spending days cataloging every paragraph, never reaching the editing phase

**Why it happens:** Inventory feels like productive work, editing requires difficult decisions

**How to avoid:**
- Time-box inventory to 2-4 hours for 16 pages
- Inventory at section level (h2/h3), not paragraph level
- Use inventory to find problems (redundancy, misplacement), not document everything exhaustively

**Warning signs:**
- Inventory has more rows than there are sections on the site
- Inventory schema keeps expanding ("we need a column for...")
- Fear of editing without "complete" inventory

### Pitfall 3: Inconsistent Redundancy Decisions

**What goes wrong:** Some repeated content is consolidated, similar repeated content is left as-is, creating confusion

**Why it happens:** Decisions made page-by-page without cross-page review

**How to avoid:**
- Document redundancy decision criteria in rot-audit.csv
- Apply same criteria consistently across all pages
- Review: if you kept a brief echo on page A, why remove it from page B?

**Warning signs:**
- "I'm not sure why I left this one" during review
- Different treatment of structurally similar content
- Difficulty explaining consolidation choices

### Pitfall 4: Grammar Tool Absolutism

**What goes wrong:** Treating write-good suggestions as errors requiring fixing, losing authorial voice

**Why it happens:** Automated tool output feels authoritative, easier to follow than make judgment calls

**How to avoid:**
- write-good detects *potential* issues (passive voice, adverbs), not errors
- Passive voice is sometimes the right choice (e.g., "The system was designed to...")
- Run tools to find candidates for review, not auto-fix everything flagged

**Warning signs:**
- Rewriting clear, strong prose to satisfy a linter
- All passive voice eliminated regardless of context
- Voice becomes mechanical trying to avoid adverbs

### Pitfall 5: Scope Expansion into Content Creation

**What goes wrong:** Audit reveals gaps, turns into writing new sections/pages

**Why it happens:** "While I'm here, I might as well add..."

**How to avoid:**
- Phase 8 scope: audit, trim, fix, reorganize EXISTING content
- New content is a separate decision requiring user input
- Flag gaps in IA analysis, don't fill them during audit

**Warning signs:**
- Writing new FAQ answers for questions that aren't asked
- Adding "missing" exhibit sections that weren't in source material
- Creating new pages because "the site should have..."

## Code Examples

Verified patterns for content audit scripting:

### Extract Text Content from HTML

```javascript
// scripts/extract-content.mjs
import { readFileSync, writeFileSync } from 'fs';
import { load } from 'cheerio';
import { globSync } from 'glob';

function extractSections(htmlPath) {
  const html = readFileSync(htmlPath, 'utf8');
  const $ = load(html);

  const sections = [];

  // Find all major sections (typically have class="container" or semantic tags)
  $('section').each((i, section) => {
    const $section = $(section);
    const heading = $section.find('h1, h2, h3').first().text().trim();
    const text = $section.text().replace(/\s+/g, ' ').trim();
    const wordCount = text.split(/\s+/).length;

    sections.push({
      page: htmlPath,
      section_index: i,
      heading: heading || `(section ${i})`,
      word_count: wordCount,
      preview: text.substring(0, 100) + '...'
    });
  });

  return sections;
}

// Process all pages
const pages = globSync('*.html')
  .concat(globSync('exhibits/*.html'))
  .filter(p => p !== 'review.html');

const allSections = pages.flatMap(extractSections);

// Generate CSV
const csv = [
  'page,section_index,heading,word_count,preview,purpose,audience,status',
  ...allSections.map(s =>
    `"${s.page}",${s.section_index},"${s.heading}",${s.word_count},"${s.preview}",,,`
  )
].join('\n');

writeFileSync('inventory/content-inventory.csv', csv);
console.log(`Extracted ${allSections.length} sections from ${pages.length} pages`);
```

### Find Duplicate Content Blocks

```javascript
// scripts/find-duplicates.mjs
import { readFileSync } from 'fs';
import { load } from 'cheerio';
import { globSync } from 'glob';

function getTextBlocks(htmlPath) {
  const html = readFileSync(htmlPath, 'utf8');
  const $ = load(html);

  // Get all paragraph-level text blocks
  const blocks = [];
  $('p, li, h2, h3').each((i, el) => {
    const text = $(el).text().trim();
    if (text.length > 50) { // Ignore very short blocks
      blocks.push({ page: htmlPath, text });
    }
  });

  return blocks;
}

// Collect all blocks
const pages = globSync('*.html')
  .concat(globSync('exhibits/*.html'))
  .filter(p => p !== 'review.html');

const allBlocks = pages.flatMap(getTextBlocks);

// Find duplicates (exact matches)
const textMap = new Map();
allBlocks.forEach(block => {
  if (!textMap.has(block.text)) {
    textMap.set(block.text, []);
  }
  textMap.get(block.text).push(block.page);
});

// Report duplicates
console.log('Duplicate content blocks:\n');
let duplicateCount = 0;

textMap.forEach((pages, text) => {
  if (pages.length > 1) {
    duplicateCount++;
    console.log(`\nAppears in: ${pages.join(', ')}`);
    console.log(`Text: "${text.substring(0, 100)}..."`);
  }
});

console.log(`\nFound ${duplicateCount} duplicate blocks`);
```

### Run write-good on Extracted Content

```javascript
// scripts/check-grammar.mjs
import { readFileSync } from 'fs';
import { load } from 'cheerio';
import { globSync } from 'glob';
import writeGood from 'write-good';

function extractMainContent(htmlPath) {
  const html = readFileSync(htmlPath, 'utf8');
  const $ = load(html);

  // Remove non-content elements
  $('script, style, nav, footer').remove();

  // Get main content
  const text = $('#main-content, main').text().replace(/\s+/g, ' ').trim();
  return text;
}

const pages = globSync('*.html')
  .concat(globSync('exhibits/*.html'))
  .filter(p => p !== 'review.html');

let totalSuggestions = 0;

pages.forEach(page => {
  const text = extractMainContent(page);
  const suggestions = writeGood(text);

  if (suggestions.length > 0) {
    console.log(`\n${'='.repeat(60)}`);
    console.log(`${page} - ${suggestions.length} suggestions`);
    console.log('='.repeat(60));

    suggestions.forEach(s => {
      const start = Math.max(0, s.index - 30);
      const end = Math.min(text.length, s.index + s.offset + 30);
      const snippet = text.substring(start, end);

      console.log(`\n${s.reason}:`);
      console.log(`  ...${snippet}...`);
    });

    totalSuggestions += suggestions.length;
  }
});

console.log(`\n${'='.repeat(60)}`);
console.log(`Total: ${totalSuggestions} suggestions across ${pages.length} pages`);
console.log('='.repeat(60)}`);

// Exit with error code if suggestions found (for CI/quality gate)
process.exit(totalSuggestions > 0 ? 1 : 0);
```

## State of the Art

### Content Audit Evolution

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Manual spreadsheet-only inventory | Automated extraction → manual enrichment | ~2018-2020 | Faster initial catalog, more time for analysis |
| Grammar review by reading every word | Automated linting + targeted manual review | ~2015-2017 | Consistent quality, catches more errors |
| CMS-dependent content audits | Headless/static-first auditing | ~2019-2021 | Works on any content source, no CMS lock-in |

### Grammar/Prose Linting Tools

**Current state (2025):**
- `write-good` - mature, stable, unmaintained (still works, widely used)
- `textlint` - active development, extensible plugin system
- `alex` - active, focused on inclusive language
- Commercial: Grammarly CLI (paid), ProWritingAid API (paid)

**Deprecated/outdated:**
- `linter-write-good` (Atom editor package, Atom discontinued)
- `node-markdown-spellcheck` (unmaintained, use textlint plugins instead)

### Content Inventory Tools

**Manual-first still dominant:** Spreadsheets (Google Sheets, Excel, CSV) remain standard for content inventories. Automated extraction helps with initial catalog, but purpose/audience/decision columns require human judgment.

**Emerging:** Notion/Airtable for collaborative content audits (overkill for solo 16-page site)

## Open Questions

1. **Exhibit structure validation**
   - What we know: User wants NTSB investigation report model, flexibility per exhibit
   - What's unclear: How to programmatically verify structure adherence without being rigid
   - Recommendation: Manual review with checklist, not automated validation. Structure serves story, not vice versa.

2. **Redundancy tolerance threshold**
   - What we know: User allows "brief echoes" per page context (discretion)
   - What's unclear: Specific heuristics for "this echo adds value" vs "this is just repetition"
   - Recommendation: Document decision criteria in ROT audit CSV, review for consistency

3. **FAQ fate decision**
   - What we know: User thinks FAQ feels thin, audit should recommend strengthen/merge/retire
   - What's unclear: Threshold for "retire" - how thin is too thin?
   - Recommendation: Assess against "does this answer objections not covered elsewhere?" If yes, strengthen. If no, retire or merge.

4. **Technologies page purpose**
   - What we know: Audit should determine purpose (skills inventory vs breadth showcase)
   - What's unclear: What would drive this decision? Audience priority? Content elsewhere?
   - Recommendation: Evaluate against three user journeys - which audience needs this page and why?

## Sources

### Primary (HIGH confidence)

- npm registry: write-good (1.0.8, last publish 2017, 400k+ weekly downloads)
- npm registry: textlint (14.2.1, active development, 50k+ weekly downloads)
- npm registry: alex (11.0.1, active development, 100k+ weekly downloads)
- npm registry: cheerio (1.0.0, stable release 2022, 2M+ weekly downloads)

### Secondary (MEDIUM confidence)

- Content Strategy for the Web (Halvorson & Rach, 2012) - ROT audit framework
- Information Architecture for the Web and Beyond (Rosenfeld, Morville, Arango, 4th ed 2015) - IA evaluation principles
- Training knowledge: Content inventory best practices (spreadsheet-based workflows)

### Tertiary (LOW confidence - training-based, not verified)

- jsinspect for duplicate detection (training knowledge, not verified for current version)
- Grammar tool comparison (write-good vs Grammarly CLI) - pricing/features based on 2024 training data
- Notion/Airtable for content audits (training knowledge, not project requirement)

## Metadata

**Confidence breakdown:**
- Standard stack: MEDIUM - Tools verified via npm registry, versions current, but no Context7 or official docs consulted
- Architecture: MEDIUM - Patterns based on training knowledge + previous quick task 2 (content audit precedent exists)
- Pitfalls: MEDIUM - Training-based experience, validated by project context from CONTEXT.md
- Code examples: HIGH - JavaScript syntax verified, libraries used correctly per their APIs

**Research date:** 2026-02-20
**Valid until:** 30 days (tools are mature/stable, minimal churn expected)

**Research limitations:**
- Brave Search API unavailable (BRAVE_API_KEY not set)
- Built-in WebSearch quota exhausted per user instructions
- Context7 not used (no specific library queries needed, npm registry sufficient for version verification)
- Relying on training knowledge (January 2025 cutoff) for content audit methodologies
- All findings marked MEDIUM confidence due to lack of 2026 verification sources
