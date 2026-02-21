#!/usr/bin/env node
/**
 * check-grammar.mjs
 * Lints prose quality on all public pages using write-good
 */

import * as cheerio from 'cheerio';
import { readFileSync, writeFileSync } from 'fs';
import writeGood from 'write-good';

const OUTPUT_PATH = '.planning/phases/08-content-quality-information-architecture/inventory/grammar-report.txt';

const PUBLIC_PAGES = [
  'index.html',
  'philosophy.html',
  'portfolio.html',
  'technologies.html',
  'faq.html',
  'contact.html',
  'testimonials.html',
  'exhibits/exhibit-a.html',
  'exhibits/exhibit-b.html',
  'exhibits/exhibit-c.html',
  'exhibits/exhibit-d.html',
  'exhibits/exhibit-f.html',
  'exhibits/exhibit-g.html',
  'exhibits/exhibit-h.html',
  'exhibits/exhibit-i.html',
  'exhibits/exhibit-j.html',
  'exhibits/exhibit-k.html',
  'exhibits/exhibit-l.html',
];

function extractTextContent(filePath) {
  const html = readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  // Remove non-content elements
  $('script, style, nav, footer, button, input, select, textarea').remove();

  // Get main content text
  const text = $('body').text().trim();

  return text.replace(/\s+/g, ' '); // Normalize whitespace
}

function checkGrammar() {
  console.log('Checking prose quality on 16 public pages...\n');
  console.log('NOTE: write-good suggestions are candidates for review, NOT auto-fix targets.\n');
  console.log('Passive voice and adverbs are sometimes correct.\n');
  console.log('='.repeat(80) + '\n');

  let reportLines = [];
  reportLines.push('GRAMMAR AND PROSE QUALITY REPORT');
  reportLines.push('Generated: ' + new Date().toISOString());
  reportLines.push('Tool: write-good');
  reportLines.push('Pages analyzed: 16 public pages');
  reportLines.push('');
  reportLines.push('NOTE: These are suggestions for review, NOT errors requiring fixes.');
  reportLines.push('Passive voice and adverbs are sometimes appropriate.');
  reportLines.push('');
  reportLines.push('='.repeat(80));
  reportLines.push('');

  let totalSuggestions = 0;

  for (const pagePath of PUBLIC_PAGES) {
    try {
      const text = extractTextContent(pagePath);
      const suggestions = writeGood(text);

      console.log(`${pagePath}:`);
      reportLines.push(`${pagePath}:`);

      if (suggestions.length === 0) {
        console.log('  No suggestions\n');
        reportLines.push('  No suggestions');
        reportLines.push('');
      } else {
        console.log(`  ${suggestions.length} suggestions\n`);
        reportLines.push(`  ${suggestions.length} suggestions`);
        reportLines.push('');

        suggestions.forEach((suggestion, idx) => {
          const context = text.substring(
            Math.max(0, suggestion.index - 50),
            Math.min(text.length, suggestion.index + suggestion.offset + 50)
          );

          const line = `  ${idx + 1}. [${suggestion.reason}] at position ~${suggestion.index}`;
          console.log(line);
          reportLines.push(line);

          const contextLine = `     Context: "...${context}..."`;
          console.log(contextLine);
          reportLines.push(contextLine);

          console.log('');
          reportLines.push('');
        });

        totalSuggestions += suggestions.length;
      }

      console.log('');
    } catch (err) {
      const errMsg = `ERROR processing ${pagePath}: ${err.message}`;
      console.error(errMsg);
      reportLines.push(errMsg);
      reportLines.push('');
    }
  }

  reportLines.push('='.repeat(80));
  reportLines.push('');
  reportLines.push(`SUMMARY: ${totalSuggestions} total suggestions across ${PUBLIC_PAGES.length} pages`);

  const report = reportLines.join('\n');
  writeFileSync(OUTPUT_PATH, report, 'utf-8');

  console.log('='.repeat(80));
  console.log(`\n✓ Grammar report written to ${OUTPUT_PATH}`);
  console.log(`  Total suggestions: ${totalSuggestions}`);
}

checkGrammar();
