#!/usr/bin/env node
/**
 * find-duplicates.mjs
 * Finds exact and near-duplicate content blocks across pages
 */

import * as cheerio from 'cheerio';
import { readFileSync, writeFileSync } from 'fs';

const OUTPUT_PATH = '.planning/phases/08-content-quality-information-architecture/inventory/duplicate-report.txt';

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

function normalizeText(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '') // Remove punctuation
    .replace(/\s+/g, ' ')    // Collapse whitespace
    .trim();
}

function extractBlocks(filePath) {
  const html = readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  // Remove non-content elements
  $('script, style, nav, footer, button, input, select, textarea').remove();

  const blocks = [];

  // Extract text blocks from paragraphs, list items, headings
  $('p, li, h2, h3, blockquote, dt, dd').each((_, elem) => {
    const text = $(elem).text().trim();

    // Ignore short blocks
    if (text.length >= 50) {
      blocks.push({
        page: filePath,
        text: text,
        normalized: normalizeText(text)
      });
    }
  });

  return blocks;
}

function findDuplicates() {
  console.log('Finding duplicate content across 16 public pages...\n');

  // Collect all blocks from all pages
  const allBlocks = [];

  for (const pagePath of PUBLIC_PAGES) {
    try {
      const blocks = extractBlocks(pagePath);
      allBlocks.push(...blocks);
      console.log(`${pagePath}: ${blocks.length} blocks`);
    } catch (err) {
      console.error(`ERROR processing ${pagePath}:`, err.message);
    }
  }

  console.log(`\nTotal blocks: ${allBlocks.length}\n`);

  // Find duplicates
  const exactDuplicates = new Map(); // key: exact text, value: array of pages
  const nearDuplicates = new Map();  // key: normalized text, value: array of {page, originalText}

  for (const block of allBlocks) {
    // Exact matches
    if (!exactDuplicates.has(block.text)) {
      exactDuplicates.set(block.text, []);
    }
    exactDuplicates.get(block.text).push(block.page);

    // Near matches
    if (!nearDuplicates.has(block.normalized)) {
      nearDuplicates.set(block.normalized, []);
    }
    nearDuplicates.get(block.normalized).push({
      page: block.page,
      text: block.text
    });
  }

  // Filter to only multi-page duplicates
  const exactMultiPage = Array.from(exactDuplicates.entries())
    .filter(([text, pages]) => new Set(pages).size > 1)
    .map(([text, pages]) => ({ text, pages: Array.from(new Set(pages)) }));

  const nearMultiPage = Array.from(nearDuplicates.entries())
    .filter(([norm, instances]) => {
      const uniquePages = new Set(instances.map(i => i.page));
      const uniqueTexts = new Set(instances.map(i => i.text));
      // Near duplicate = appears on multiple pages AND text variations exist
      return uniquePages.size > 1 && uniqueTexts.size > 1;
    })
    .map(([norm, instances]) => ({
      normalized: norm,
      instances: instances.reduce((acc, inst) => {
        if (!acc.some(a => a.page === inst.page && a.text === inst.text)) {
          acc.push(inst);
        }
        return acc;
      }, [])
    }));

  // Generate report
  let reportLines = [];
  reportLines.push('DUPLICATE CONTENT REPORT');
  reportLines.push('Generated: ' + new Date().toISOString());
  reportLines.push('Pages analyzed: 16 public pages');
  reportLines.push('');
  reportLines.push('='.repeat(80));
  reportLines.push('');

  // Exact duplicates
  reportLines.push('EXACT DUPLICATES');
  reportLines.push('(Identical text appearing on multiple pages)');
  reportLines.push('');

  if (exactMultiPage.length === 0) {
    reportLines.push('No exact duplicates found.');
  } else {
    exactMultiPage.forEach((dup, idx) => {
      reportLines.push(`${idx + 1}. Found on ${dup.pages.length} pages:`);
      dup.pages.forEach(page => reportLines.push(`   - ${page}`));
      reportLines.push(`   Text: "${dup.text.substring(0, 150)}${dup.text.length > 150 ? '...' : ''}"`);
      reportLines.push('');
    });
  }

  reportLines.push('='.repeat(80));
  reportLines.push('');

  // Near duplicates
  reportLines.push('NEAR DUPLICATES');
  reportLines.push('(Similar text with minor variations appearing on multiple pages)');
  reportLines.push('');

  if (nearMultiPage.length === 0) {
    reportLines.push('No near duplicates found.');
  } else {
    nearMultiPage.forEach((dup, idx) => {
      const uniquePages = new Set(dup.instances.map(i => i.page));
      reportLines.push(`${idx + 1}. Found on ${uniquePages.size} pages with ${dup.instances.length} variations:`);
      dup.instances.forEach(inst => {
        reportLines.push(`   - ${inst.page}`);
        reportLines.push(`     "${inst.text.substring(0, 150)}${inst.text.length > 150 ? '...' : ''}"`);
      });
      reportLines.push('');
    });
  }

  reportLines.push('='.repeat(80));
  reportLines.push('');
  reportLines.push(`SUMMARY:`);
  reportLines.push(`  Exact duplicates: ${exactMultiPage.length}`);
  reportLines.push(`  Near duplicates: ${nearMultiPage.length}`);
  reportLines.push(`  Total blocks analyzed: ${allBlocks.length}`);

  const report = reportLines.join('\n');
  writeFileSync(OUTPUT_PATH, report, 'utf-8');

  console.log('='.repeat(80));
  console.log(`\n✓ Duplicate report written to ${OUTPUT_PATH}`);
  console.log(`  Exact duplicates: ${exactMultiPage.length}`);
  console.log(`  Near duplicates: ${nearMultiPage.length}`);
}

findDuplicates();
