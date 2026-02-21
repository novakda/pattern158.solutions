#!/usr/bin/env node
/**
 * extract-content.mjs
 * Generates section-level content inventory CSV for all public pages
 */

import * as cheerio from 'cheerio';
import { readFileSync, writeFileSync } from 'fs';
import { glob } from 'glob';

const OUTPUT_PATH = '.planning/phases/08-content-quality-information-architecture/inventory/content-inventory.csv';

// Public pages (exclude review.html)
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

function extractContent(filePath) {
  const html = readFileSync(filePath, 'utf-8');
  const $ = cheerio.load(html);

  // Remove non-content elements
  $('script, style, nav, footer').remove();

  const sections = [];
  let sectionIndex = 0;

  // Extract sections based on headings or major structural divs
  $('h1, h2, h3, section, article, main > div').each((_, elem) => {
    const $elem = $(elem);
    const tagName = elem.name;

    let heading = '';
    let content = '';

    if (tagName === 'h1' || tagName === 'h2' || tagName === 'h3') {
      heading = $elem.text().trim();
      // Get content until next heading or section boundary
      let $current = $elem.next();
      while ($current.length && !$current.is('h1, h2, h3, section, article')) {
        content += ' ' + $current.text().trim();
        $current = $current.next();
      }
    } else if (tagName === 'section' || tagName === 'article') {
      heading = $elem.find('h1, h2, h3').first().text().trim() || `[${tagName} ${sectionIndex}]`;
      content = $elem.text().trim();
    } else if (tagName === 'div') {
      // Only capture divs with substantial content
      const text = $elem.text().trim();
      if (text.length > 100) {
        heading = $elem.find('h1, h2, h3').first().text().trim() || `[div ${sectionIndex}]`;
        content = text;
      } else {
        return; // Skip this div
      }
    }

    if (content.trim().length > 0) {
      const words = content.trim().split(/\s+/).length;
      const preview = content.trim().substring(0, 100).replace(/\n/g, ' ').replace(/,/g, ';');

      sections.push({
        page: filePath,
        section_index: sectionIndex,
        heading: heading.replace(/,/g, ';') || '[No heading]',
        word_count: words,
        preview
      });

      sectionIndex++;
    }
  });

  return sections;
}

function generateInventory() {
  console.log('Extracting content from 16 public pages...\n');

  const allSections = [];

  for (const pagePath of PUBLIC_PAGES) {
    try {
      console.log(`Processing: ${pagePath}`);
      const sections = extractContent(pagePath);
      allSections.push(...sections);
      console.log(`  Found ${sections.length} sections\n`);
    } catch (err) {
      console.error(`ERROR processing ${pagePath}:`, err.message);
    }
  }

  // Generate CSV
  const csvHeader = 'page,section_index,heading,word_count,preview\n';
  const csvRows = allSections.map(s =>
    `"${s.page}",${s.section_index},"${s.heading}",${s.word_count},"${s.preview}"`
  ).join('\n');

  const csv = csvHeader + csvRows;

  writeFileSync(OUTPUT_PATH, csv, 'utf-8');

  console.log(`\n✓ Content inventory written to ${OUTPUT_PATH}`);
  console.log(`  Total sections cataloged: ${allSections.length}`);
  console.log(`  Pages analyzed: ${PUBLIC_PAGES.length}`);
}

generateInventory();
