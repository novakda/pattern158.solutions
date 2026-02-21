#!/usr/bin/env node

/**
 * Dark Mode Surface Layering Verification
 * Checks that the 3-tier dark background system creates visible differentiation
 */

// WCAG relative luminance calculator
function luminance(hex) {
  const rgb = hex.replace('#', '').match(/.{2}/g).map(h => {
    const v = parseInt(h, 16) / 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2];
}

// Extract hue, saturation, lightness from hex
function hexToHSL(hex) {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = ((g - b) / d + (g < b ? 6 : 0)) / 6; break;
      case g: h = ((b - r) / d + 2) / 6; break;
      case b: h = ((r - g) / d + 4) / 6; break;
    }
  }

  return {
    h: Math.round(h * 360),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

console.log('\n=== DARK MODE SURFACE ELEVATION VERIFICATION ===\n');

// Dark mode background tiers
const background = '#1a2838';       // Page background (deepest)
const backgroundAlt = '#243447';    // Alternating sections (mid)
const surface = '#2a3f54';          // Cards, panels (lightest/elevated)

const bgLum = luminance(background);
const altLum = luminance(backgroundAlt);
const surfLum = luminance(surface);

console.log('TIER 1 (Deepest):    --color-background     ' + background);
console.log('  Luminance:', bgLum.toFixed(4));
console.log('  HSL:', hexToHSL(background));

console.log('\nTIER 2 (Mid):        --color-background-alt ' + backgroundAlt);
console.log('  Luminance:', altLum.toFixed(4));
console.log('  HSL:', hexToHSL(backgroundAlt));

console.log('\nTIER 3 (Elevated):   --color-surface         ' + surface);
console.log('  Luminance:', surfLum.toFixed(4));
console.log('  HSL:', hexToHSL(surface));

console.log('\n--- Tier Differentiation ---\n');

const diff1to2 = ((altLum - bgLum) / bgLum * 100).toFixed(2);
const diff2to3 = ((surfLum - altLum) / altLum * 100).toFixed(2);
const diff1to3 = ((surfLum - bgLum) / bgLum * 100).toFixed(2);

console.log(`Tier 1 → 2: ${diff1to2}% luminance increase`);
console.log(`Tier 2 → 3: ${diff2to3}% luminance increase`);
console.log(`Tier 1 → 3: ${diff1to3}% luminance increase (total)`);

const minDiff = 5; // Minimum 5% difference for visible layering
const pass1to2 = Math.abs(parseFloat(diff1to2)) >= minDiff;
const pass2to3 = Math.abs(parseFloat(diff2to3)) >= minDiff;

console.log('\nVISIBILITY CHECK (minimum 5% difference):');
console.log(`  Tier 1 → 2: ${pass1to2 ? '✓ PASS' : '✗ FAIL'}`);
console.log(`  Tier 2 → 3: ${pass2to3 ? '✓ PASS' : '✗ FAIL'}`);

// Navy brand verification (hue should be in blue range: 200-220°)
console.log('\n--- Navy Brand Identity Verification ---\n');

const hsl1 = hexToHSL(background);
const hsl2 = hexToHSL(backgroundAlt);
const hsl3 = hexToHSL(surface);

const navyHueMin = 200;
const navyHueMax = 220;
const navySatMin = 30;  // Minimum saturation to avoid gray

console.log('NAVY REQUIREMENTS: Hue 200-220°, Saturation ≥ 30%');

const checkNavy = (hsl, name) => {
  const huePass = hsl.h >= navyHueMin && hsl.h <= navyHueMax;
  const satPass = hsl.s >= navySatMin;
  const pass = huePass && satPass;
  console.log(`  ${name}: ${pass ? '✓ PASS' : '✗ FAIL'} (hue: ${hsl.h}°, sat: ${hsl.s}%)`);
  return pass;
};

const navy1 = checkNavy(hsl1, 'background    ');
const navy2 = checkNavy(hsl2, 'background-alt');
const navy3 = checkNavy(hsl3, 'surface       ');

const allPass = pass1to2 && pass2to3 && navy1 && navy2 && navy3;

console.log('\n=== OVERALL RESULT ===\n');
console.log(allPass ? '✓ ALL CHECKS PASS' : '✗ SOME CHECKS FAILED');
console.log('');

process.exit(allPass ? 0 : 1);
