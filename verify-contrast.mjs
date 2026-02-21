#!/usr/bin/env node

/**
 * WCAG Contrast Verification Script
 * Computes contrast ratios for all color token pairs in light and dark modes
 */

// WCAG relative luminance calculator
function luminance(hex) {
  // Handle rgba by extracting hex portion
  if (hex.startsWith('rgba')) {
    return null; // Will handle separately
  }

  const rgb = hex.replace('#', '').match(/.{2}/g).map(h => {
    const v = parseInt(h, 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

// WCAG contrast ratio calculator
function contrast(fg, bg) {
  const l1 = Math.max(luminance(fg), luminance(bg));
  const l2 = Math.min(luminance(fg), luminance(bg));
  return (l1 + 0.05) / (l2 + 0.05);
}

// Convert rgba to approximate luminance (use rgb component, assume alpha on background)
function rgbaToLuminance(rgba, bgLuminance) {
  const match = rgba.match(/rgba?\((\d+),\s*(\d+),\s*(\d+),?\s*([\d.]+)?\)/);
  if (!match) return null;

  const [, r, g, b, a = '1'] = match;
  const alpha = parseFloat(a);

  // Calculate foreground luminance
  const fgRgb = [r, g, b].map(v => {
    const val = parseInt(v) / 255;
    return val <= 0.03928 ? val / 12.92 : Math.pow((val + 0.055) / 1.055, 2.4);
  });
  const fgLum = 0.2126 * fgRgb[0] + 0.7152 * fgRgb[1] + 0.0722 * fgRgb[2];

  // Alpha blend with background
  return alpha * fgLum + (1 - alpha) * bgLuminance;
}

// Test pairs: [foreground, background, label, threshold, size]
const lightModePairs = [
  // Body text on backgrounds
  ['#2d3436', '#faf9f6', 'text/bg', 4.5, 'normal'],
  ['#2d3436', '#ffffff', 'text/surface', 4.5, 'normal'],

  // Muted text on backgrounds
  ['#666666', '#faf9f6', 'text-muted/bg', 4.5, 'normal'],
  ['#666666', '#ffffff', 'text-muted/surface', 4.5, 'normal'],

  // Light text on backgrounds (FIXED: #999999 → #737373)
  ['#737373', '#faf9f6', 'text-light/bg', 4.5, 'normal'],
  ['#737373', '#ffffff', 'text-light/surface', 4.5, 'normal'],

  // Medium text
  ['#555555', '#faf9f6', 'text-medium/bg', 4.5, 'normal'],

  // Source citations (FIXED: #888888 → #707070)
  ['#707070', '#faf9f6', 'text-source/bg', 4.5, 'normal'],

  // Timeline (FIXED: #444 → #444444)
  ['#444444', '#faf9f6', 'text-timeline/bg', 4.5, 'normal'],

  // Headings
  ['#1a2838', '#faf9f6', 'heading/bg', 4.5, 'normal'],
  ['#1a2838', '#ffffff', 'heading/surface', 4.5, 'normal'],

  // Primary (teal) links
  ['#0e7c8c', '#faf9f6', 'primary/bg', 4.5, 'normal'],
  ['#0e7c8c', '#ffffff', 'primary/surface', 4.5, 'normal'],

  // Gold accent as text (FIXED: #b8860b → #8f6d00)
  ['#8f6d00', '#faf9f6', 'accent/bg', 4.5, 'normal'],
  ['#8f6d00', '#ffffff', 'accent/surface', 4.5, 'normal'],

  // Inverse sections (nav/hero/footer)
  ['#faf9f6', '#1a2838', 'inverse-text/inverse', 4.5, 'normal'],

  // Teal on dark sections (uses light mode primary value)
  ['#0e7c8c', '#1a2838', 'primary/inverse', 3.0, 'large'],

  // Danger (FIXED: #dc3545 → #c82333)
  ['#c82333', '#faf9f6', 'danger/bg', 4.5, 'normal'],
];

const darkModePairs = [
  // Body text on backgrounds
  ['#e8e8e8', '#1a2838', 'text/bg', 4.5, 'normal'],
  ['#e8e8e8', '#2a3f54', 'text/surface', 4.5, 'normal'],

  // Muted text (FIXED: #a0a0a0 → #ababab)
  ['#ababab', '#1a2838', 'text-muted/bg', 4.5, 'normal'],
  ['#ababab', '#2a3f54', 'text-muted/surface', 4.5, 'normal'],

  // Light text (FIXED: #888888 → #a8a8a8)
  ['#a8a8a8', '#1a2838', 'text-light/bg', 4.5, 'normal'],
  ['#a8a8a8', '#2a3f54', 'text-light/surface', 4.5, 'normal'],

  // Medium text
  ['#b0b0b0', '#1a2838', 'text-medium/bg', 4.5, 'normal'],

  // Source citations
  ['#909090', '#1a2838', 'text-source/bg', 4.5, 'normal'],

  // Timeline
  ['#b0b0b0', '#1a2838', 'text-timeline/bg', 4.5, 'normal'],

  // Headings
  ['#e8e8e8', '#1a2838', 'heading/bg', 4.5, 'normal'],
  ['#e8e8e8', '#2a3f54', 'heading/surface', 4.5, 'normal'],

  // Primary (teal) on dark backgrounds (FIXED: #0e7c8c → #1ea3b5)
  ['#1ea3b5', '#1a2838', 'primary/bg', 3.0, 'large'],
  ['#1ea3b5', '#2a3f54', 'primary/surface', 3.0, 'large'],
  ['#1ea3b5', '#243447', 'primary/bg-alt', 3.0, 'large'],

  // Gold accent (FIXED: lightened for dark mode to #c9a226)
  ['#c9a226', '#1a2838', 'accent/bg', 4.5, 'normal'],

  // Danger (FIXED: #dc3545 → #ff6b7a)
  ['#ff6b7a', '#1a2838', 'danger/bg', 4.5, 'normal'],

  // Border visibility (FIXED: #3d5266 → #5d7289)
  ['#5d7289', '#1a2838', 'border/bg', 3.0, 'ui'],
];

console.log('\n=== LIGHT MODE CONTRAST AUDIT ===\n');
let allPass = true;
let failCount = 0;

for (const [fg, bg, label, threshold, size] of lightModePairs) {
  const ratio = contrast(fg, bg);
  const pass = ratio >= threshold;
  const status = pass ? '✓ PASS' : '✗ FAIL';
  const margin = (ratio - threshold).toFixed(2);

  if (!pass) {
    allPass = false;
    failCount++;
  }

  console.log(`${status} ${ratio.toFixed(2)}:1 (${margin >= 0 ? '+' : ''}${margin}) [${size}] ${label}`);
}

console.log('\n=== DARK MODE CONTRAST AUDIT ===\n');

for (const [fg, bg, label, threshold, size] of darkModePairs) {
  const ratio = contrast(fg, bg);
  const pass = ratio >= threshold;
  const status = pass ? '✓ PASS' : '✗ FAIL';
  const margin = (ratio - threshold).toFixed(2);

  if (!pass) {
    allPass = false;
    failCount++;
  }

  console.log(`${status} ${ratio.toFixed(2)}:1 (${margin >= 0 ? '+' : ''}${margin}) [${size}] ${label}`);
}

// Check rgba inverse-text tokens
console.log('\n=== RGBA TOKEN VERIFICATION (LIGHT MODE) ===\n');
const inverseBgLum = luminance('#1a2838');

// inverse-text-muted: rgba(250, 249, 246, 0.8)
const mutedLum = rgbaToLuminance('rgba(250, 249, 246, 0.8)', inverseBgLum);
const mutedRatio = (Math.max(mutedLum, inverseBgLum) + 0.05) / (Math.min(mutedLum, inverseBgLum) + 0.05);
const mutedPass = mutedRatio >= 4.5;
console.log(`${mutedPass ? '✓ PASS' : '✗ FAIL'} ${mutedRatio.toFixed(2)}:1 inverse-text-muted/inverse`);
if (!mutedPass) { allPass = false; failCount++; }

// inverse-text-light: rgba(250, 249, 246, 0.7)
const lightLum = rgbaToLuminance('rgba(250, 249, 246, 0.7)', inverseBgLum);
const lightRatio = (Math.max(lightLum, inverseBgLum) + 0.05) / (Math.min(lightLum, inverseBgLum) + 0.05);
const lightPass = lightRatio >= 4.5;
console.log(`${lightPass ? '✓ PASS' : '✗ FAIL'} ${lightRatio.toFixed(2)}:1 inverse-text-light/inverse`);
if (!lightPass) { allPass = false; failCount++; }

console.log('\n=== SUMMARY ===\n');
console.log(`Total tests: ${lightModePairs.length + darkModePairs.length + 2}`);
console.log(`Failures: ${failCount}`);
console.log(`Status: ${allPass ? '✓ ALL PASS' : '✗ SOME FAILURES'}\n`);

process.exit(allPass ? 0 : 1);
