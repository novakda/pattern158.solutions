# Stack Research

**Domain:** Static HTML Portfolio Site Enhancement
**Researched:** 2026-02-13
**Confidence:** HIGH

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| CSS Custom Properties | Native (all browsers) | Dark mode & theme management | Industry standard for theme switching in 2026. Enables dynamic color schemes without JavaScript. Supported in Chrome 120+, Safari 17.2+, Firefox 117+ (~82% global coverage) |
| `prefers-color-scheme` Media Query | Native CSS | System-level dark mode detection | Zero-JavaScript solution that respects user OS preferences. Well-established since 2020, works across all modern browsers |
| localStorage API | Native JavaScript | Theme preference persistence | Standard approach for storing user preferences client-side. 5MB storage per domain is more than sufficient for settings |
| `loading="lazy"` HTML Attribute | Native HTML | Image lazy loading | Supported across all major browsers (Chrome, Firefox, Safari, Edge). Zero-dependency performance optimization that improves LCP |
| JSON-LD Structured Data | Schema.org standard | SEO & search result enhancement | Google's recommended format for 2026. Easier to maintain than Microdata/RDFa as it separates from HTML markup |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| Plausible Analytics | v5.2.1+ | Privacy-first analytics | <1KB script (~50ms load time). GDPR/CCPA compliant by default. 75x smaller than Google Analytics. Use for production sites needing visitor insights |
| Umami Analytics | Latest | Self-hosted alternative | When you need complete data control and server infrastructure is available. Open-source, 2KB script weight |
| None (vanilla JS) | N/A | Dark mode toggle | Pure JavaScript sufficient for theme switching. No framework needed for static sites |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| XML-Sitemaps.com | Sitemap generation | Free online generator for static sites. Supports scheduled regeneration (weekly/monthly). No installation required |
| Screaming Frog SEO Spider | Advanced sitemap + SEO audit | Desktop tool with powerful filtering. Generates sitemaps based on actual crawl data. Recommended for 14+ page sites |
| Static.app CSS Minifier | CSS optimization | Browser-based, no installation. Processes client-side (no server upload). Alternative: CleanCSS |
| toWebP.io | Image format conversion | Batch converts JPG/PNG/GIF to WebP. Free, unlimited, browser-based. No upload to servers |
| Pixelied / Picflow | AVIF conversion | Batch WebP/AVIF conversion. Use when targeting 40-60% file size reduction vs JPEG |
| Google Search Console | robots.txt testing | Validates crawler interpretation. Essential for verifying crawl access rules |

## Installation

```bash
# No npm packages required for core functionality
# Static HTML sites use native browser APIs and CDN scripts

# For Plausible Analytics (hosted version):
# Add to <head>:
<script defer data-domain="yourdomain.com" src="https://plausible.io/js/script.js"></script>

# For self-hosted Umami:
# Add to <head>:
<script defer src="https://your-umami-instance.com/script.js" data-website-id="your-id"></script>
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| CSS Custom Properties | Tailwind CSS dark mode | When using Tailwind framework (violates constraint: "no frameworks") |
| Plausible Analytics | Google Analytics 4 | When you need advanced conversion tracking and already have Google ecosystem integration. Trade-off: 30-70ms page load penalty, GDPR complexity |
| Native lazy loading | Vanilla-lazyload.js | When you need more granular control or support for IE11 (unnecessary in 2026) |
| JSON-LD | Microdata/RDFa | Never. JSON-LD is easier to maintain and Google's recommended format |
| WebP | AVIF | Use AVIF when file size is critical (40-60% smaller than JPEG). Note: requires fallback for older browsers |
| XML-Sitemaps.com | Manual sitemap.xml | Only for 1-5 page sites where manual maintenance is trivial |
| Plausible | Fathom Analytics | Fathom has 2KB script vs Plausible's <1KB. Both excellent, choose based on UI preference |
| Self-hosting Google Fonts | Google Fonts CDN | Self-host when performance is critical. Eliminates DNS lookup (~100ms gain), improves privacy |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| JavaScript frameworks (React, Vue, etc.) | Project constraint: "must remain static HTML". Adds unnecessary complexity and bundle size | Vanilla JavaScript with CSS Custom Properties |
| Google Analytics 4 | 30-70ms page load penalty. GDPR compliance requires cookie banners and complex configuration | Plausible or Umami (cookieless, GDPR-compliant by default) |
| Multiple theme toggle approaches | Mixing localStorage, cookies, and meta tags creates confusion and bugs | Single source of truth: localStorage with CSS Custom Properties |
| JPEG/PNG without optimization | Unoptimized images are the #1 performance killer. JPEG/PNG are 40-70% larger than modern formats | WebP (30% smaller) or AVIF (40-60% smaller) with fallback |
| `changefreq` and `priority` in sitemap.xml | Google ignores these fields as of 2026 | Focus on accurate `lastmod` dates only |
| Duplicate light/dark HTML pages | Maintenance nightmare. Breaks single-source-of-truth principle | Use CSS variables with `prefers-color-scheme` and manual toggle |
| jQuery | Unnecessary in 2026. Native APIs (querySelector, fetch, classList) cover all use cases | Vanilla JavaScript with modern browser APIs |
| Microdata/RDFa | Harder to maintain. Mixed with HTML makes templates complex | JSON-LD (separate from HTML, easier validation) |

## Stack Patterns by Variant

**If targeting maximum performance (LCP < 1.5s):**
- Self-host Google Fonts with `font-display: swap`
- Use WebP/AVIF with `<picture>` element fallbacks
- Minify CSS (40%+ size reduction)
- Use `loading="lazy"` on all below-fold images
- Use `fetchpriority="high"` on hero images
- Because: These are table-stakes for passing Core Web Vitals in 2026

**If privacy compliance is critical (GDPR/CCPA):**
- Use Plausible or Umami (cookieless)
- Avoid Google Fonts CDN (use self-hosted)
- Add Privacy Policy page with clear analytics disclosure
- Because: Privacy-first analytics avoid cookie banners and consent complexity

**If SEO is the primary goal:**
- Implement JSON-LD structured data (Person/ProfilePage schema)
- Add comprehensive Open Graph + Twitter Card meta tags
- Generate XML sitemap with proper `lastmod` dates
- Create optimized `robots.txt` with sitemap reference
- Use semantic HTML5 elements (nav, article, section)
- Because: Search engines prioritize structured, well-organized content

**If supporting legacy browsers (pre-2020):**
- Don't. Browser support for `prefers-color-scheme` is 82% global as of 2026
- Because: The 18% gap is mostly IE11 and obsolete mobile browsers

## Version Compatibility

| Package A | Compatible With | Notes |
|-----------|-----------------|-------|
| WebP images | All modern browsers (2020+) | Provide JPEG fallback via `<picture>` for Safari <14 |
| AVIF images | Chrome 85+, Firefox 93+, Safari 16+ | Requires WebP AND JPEG fallback for compatibility |
| `prefers-color-scheme` | Chrome 76+, Firefox 67+, Safari 12.1+ | IE11 and older mobile browsers will fallback to light mode |
| `loading="lazy"` | Chrome 77+, Firefox 75+, Safari 15.4+, Edge 79+ | Use for all images except above-fold hero images |
| localStorage | All browsers since IE8 | Universal support, 5MB limit per domain |
| JSON-LD | All search engines | Google, Bing, Yandex all support Schema.org JSON-LD |

## Dark Mode Implementation Pattern

### Three-Layer Preference Cascade (2026 Best Practice)

```html
<!-- Inline script in <head> to prevent flash of wrong theme -->
<script>
  // Check preference cascade: localStorage > system > default
  const theme = localStorage.getItem('theme')
    || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  document.documentElement.setAttribute('data-theme', theme);
</script>

<style>
  /* CSS Custom Properties approach */
  :root {
    --bg-color: #ffffff;
    --text-color: #000000;
    --accent-color: #1a365d; /* Navy */
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --bg-color: #1a1a1a;
      --text-color: #e8e8e8;
      --accent-color: #4a9ead; /* Teal */
    }
  }

  /* Manual override with data-theme attribute */
  [data-theme="dark"] {
    --bg-color: #1a1a1a;
    --text-color: #e8e8e8;
    --accent-color: #4a9ead;
  }

  [data-theme="light"] {
    --bg-color: #ffffff;
    --text-color: #000000;
    --accent-color: #1a365d;
  }

  body {
    background-color: var(--bg-color);
    color: var(--text-color);
    transition: background-color 0.3s ease, color 0.3s ease;
  }
</style>

<script>
  // Toggle handler (vanilla JavaScript)
  document.querySelector('.theme-toggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
</script>
```

**Why this pattern:**
- Inline script prevents FOUC (flash of unstyled content)
- Respects system preference as fallback
- User choice takes precedence
- No external dependencies
- Accessible (works without JavaScript for system preference)

## SEO Optimization Pattern

### Essential Meta Tags (2026)

```html
<head>
  <!-- Title: <60 chars, front-load value -->
  <title>Dan Novak | Pattern 158 Solutions - UX/Design Portfolio</title>

  <!-- Description: 150-160 chars, promise outcome + CTA -->
  <meta name="description" content="Explore Dan Novak's UX design portfolio featuring NTSB-inspired investigation reports and technical solutions. View case studies and contact for consulting.">

  <!-- Open Graph (Facebook, LinkedIn) -->
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://pattern158.solutions/">
  <meta property="og:title" content="Dan Novak | Pattern 158 Solutions">
  <meta property="og:description" content="UX design portfolio with NTSB investigation report aesthetic.">
  <meta property="og:image" content="https://pattern158.solutions/og-image.jpg">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:url" content="https://pattern158.solutions/">
  <meta name="twitter:title" content="Dan Novak | Pattern 158 Solutions">
  <meta name="twitter:description" content="UX design portfolio with NTSB investigation report aesthetic.">
  <meta name="twitter:image" content="https://pattern158.solutions/twitter-image.jpg">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://pattern158.solutions/">

  <!-- JSON-LD Structured Data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "mainEntity": {
      "@type": "Person",
      "@id": "https://pattern158.solutions/#dan-novak",
      "name": "Dan Novak",
      "url": "https://pattern158.solutions/",
      "jobTitle": "UX Designer",
      "description": "UX designer specializing in investigation report aesthetics and technical solutions",
      "image": "https://pattern158.solutions/dan-novak.jpg",
      "sameAs": [
        "https://linkedin.com/in/yourprofile",
        "https://github.com/yourprofile"
      ]
    }
  }
  </script>
</head>
```

**Image requirements:**
- Open Graph: 1200x630px (square OK: 144x144 to 4096x4096)
- Twitter large image: 300x157 to 4096x4096px
- Max file size: 5MB
- Formats: JPG, PNG, WebP, GIF

## Performance Optimization Checklist

### Images
- [ ] Convert to WebP (30% smaller than JPEG)
- [ ] Consider AVIF for critical images (40-60% smaller)
- [ ] Add `loading="lazy"` to below-fold images
- [ ] Add `fetchpriority="high"` to hero/LCP image
- [ ] Use `<picture>` element with format fallbacks
- [ ] Compress with quality 80-85 for photos

### Fonts
- [ ] Self-host Google Fonts (eliminate DNS lookup)
- [ ] Use `font-display: swap` to prevent FOIT
- [ ] Subset fonts to include only needed characters
- [ ] Use WOFF2 format (best compression)
- [ ] Preload critical fonts: `<link rel="preload" as="font">`

### CSS
- [ ] Minify CSS (40%+ size reduction)
- [ ] Use CSS Custom Properties for theming
- [ ] Inline critical CSS in `<head>`
- [ ] Load non-critical CSS async

### HTML
- [ ] Minify HTML (remove comments, whitespace)
- [ ] Use semantic HTML5 elements
- [ ] Place scripts at end of `<body>` or use `defer`

## Mobile Navigation Pattern

### Accessible Hamburger Menu (2026 Standards)

```html
<nav>
  <button
    class="menu-toggle"
    aria-expanded="false"
    aria-controls="main-menu"
    aria-label="Toggle navigation menu">
    <span class="hamburger-icon"></span>
  </button>

  <ul id="main-menu" class="nav-menu" hidden>
    <li><a href="#work">Work</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#contact">Contact</a></li>
  </ul>
</nav>

<script>
const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#main-menu');

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') === 'true';
  toggle.setAttribute('aria-expanded', !isOpen);
  menu.hidden = isOpen;
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    toggle.setAttribute('aria-expanded', 'false');
    menu.hidden = true;
    toggle.focus();
  }
});
</script>

<style>
/* Touch target: minimum 44x44px (48x48px recommended) */
.menu-toggle {
  min-width: 48px;
  min-height: 48px;
  padding: 12px;
}

/* Show menu on desktop, toggle on mobile */
@media (min-width: 768px) {
  .menu-toggle {
    display: none;
  }

  .nav-menu {
    display: flex !important;
  }
}
</style>
```

**Accessibility requirements:**
- `aria-expanded` toggles true/false
- `aria-controls` links button to menu
- `aria-label` describes button function
- Touch target ≥48x48px
- Keyboard accessible (Enter, Space, Escape)
- Focus returns to button on close
- Use `<button>` not `<div>` or `<a>`

## robots.txt Pattern

```txt
# Pattern 158 Solutions - robots.txt
# Updated: 2026-02-13

User-agent: *
Disallow: /.planning/
Disallow: /assets/raw/

# Allow everything else (default behavior)
Allow: /

# Sitemap location
Sitemap: https://pattern158.solutions/sitemap.xml
```

**Best practices:**
- Keep it simple (default is allow all)
- Test with Google Search Console
- Review every 3-6 months
- Don't mix Disallow/Allow for same path
- AI crawlers follow same rules (no special directives)

## Sources

### Dark Mode
- [Best Practices for Dark Mode in Web Design 2026](https://natebal.com/best-practices-for-dark-mode/) — MEDIUM confidence
- [Dark Mode in CSS Guide | CSS-Tricks](https://css-tricks.com/a-complete-guide-to-dark-mode-on-the-web/) — HIGH confidence
- [Dark Mode with CSS: Comprehensive Guide 2026](https://618media.com/en/blog/dark-mode-with-css-a-comprehensive-guide/) — MEDIUM confidence
- [prefers-color-scheme - CSS | MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) — HIGH confidence
- [Can I use prefers-color-scheme](https://caniuse.com/prefers-color-scheme) — HIGH confidence

### SEO & Structured Data
- [Boost Your SEO Rankings in 2026 with Structured Data | O8](https://www.o8.agency/blog/using-structured-data-google-seo-dont-miss-out-benefits) — MEDIUM confidence
- [15 Essential SEO Tags in 2026](https://www.link-assistant.com/news/html-tags-for-seo.html) — MEDIUM confidence
- [Structured Data & Schema Markup for SEO in 2026](https://doesinfotech.com/the-role-of-structured-data-schema-markup-in-seo/) — MEDIUM confidence
- [JSON-LD Person Example | Steal our JSON-LD](https://jsonld.com/person/) — HIGH confidence
- [Person - Schema.org](https://schema.org/Person) — HIGH confidence

### Analytics
- [Hugo Analytics: Privacy-Focused for Static Sites](https://dasroot.net/posts/2026/02/hugo-analytics-privacy-focused-static-sites/) — MEDIUM confidence
- [Plausible Analytics](https://plausible.io/) — HIGH confidence (official site)
- [Plausible GitHub](https://github.com/plausible/analytics) — HIGH confidence
- [Best Privacy-Focused Alternatives to Google Analytics 2026](https://designmodo.com/google-analytics-alternatives/) — MEDIUM confidence
- [Fathom Analytics](https://usefathom.com/) — HIGH confidence (official site)
- [Self-Hosted Plausible Setup Guide](https://dasroot.net/posts/2026/01/self-hosted-plausible-analytics-setup/) — MEDIUM confidence

### Performance & Images
- [Lazy loading - Performance | MDN](https://developer.mozilla.org/en-US/docs/Web/Performance/Guides/Lazy_loading) — HIGH confidence
- [HTML Image Lazy Loading | DebugBear](https://www.debugbear.com/blog/image-lazy-loading) — MEDIUM confidence
- [Web Performance Optimization Techniques](https://dasroot.net/posts/2026/01/web-performance-optimization-techniques/) — MEDIUM confidence
- [How to Optimize Website Images: Complete 2026 Guide](https://requestmetrics.com/web-performance/high-performance-images/) — MEDIUM confidence
- [toWebP.io](https://towebp.io/) — MEDIUM confidence
- [Pixelied AVIF Converter](https://pixelied.com/convert/avif-converter/avif-to-webp) — MEDIUM confidence

### Mobile Navigation
- [Optimizing Mobile Navigation for Accessibility](https://theadminbar.com/accessibility-weekly/mobile-nav-and-hamburger-menus/) — MEDIUM confidence
- [Mobile Navigation Patterns That Work in 2026](https://phone-simulator.com/blog/mobile-navigation-patterns-in-2026) — MEDIUM confidence
- [Accessibility for Hamburger Menu | Medium](https://medium.com/@linlinghao/accessibility-for-hamburger-menu-a37fa9617a89) — MEDIUM confidence
- [Are Hamburger Menus Bad for Accessibility?](https://www.boia.org/blog/are-hamburger-menus-bad-for-accessibility) — MEDIUM confidence

### Tools & Optimization
- [XML-Sitemaps.com](https://www.xml-sitemaps.com/) — HIGH confidence
- [Screaming Frog SEO Spider](https://www.screamingfrog.co.uk/seo-spider/tutorials/xml-sitemap-generator/) — HIGH confidence
- [CSS Minifier - Static.app](https://static.app/css-minifier) — MEDIUM confidence
- [Robots.txt and SEO 2026](https://searchengineland.com/robots-txt-seo-453779) — MEDIUM confidence
- [How to Optimize Google Fonts Loading 2026](https://wpthrill.com/how-to-optimize-google-fonts-loading-without-plugins) — MEDIUM confidence
- [Self host Google fonts for Core Web Vitals](https://www.corewebvitals.io/pagespeed/self-host-google-fonts) — MEDIUM confidence

### localStorage & Theme Persistence
- [How to store theme color preferences with localStorage | CodyHouse](https://codyhouse.co/blog/post/store-theme-color-preferences-with-localstorage) — HIGH confidence
- [The best light/dark mode theme toggle in JavaScript](https://whitep4nth3r.com/blog/best-light-dark-mode-theme-toggle-javascript/) — MEDIUM confidence
- [How to Use localStorage in JavaScript](https://strapi.io/blog/how-to-use-localstorage-in-javascript) — MEDIUM confidence

### Open Graph & Twitter Cards
- [Getting started with Cards | Twitter](https://developer.x.com/en/docs/x-for-websites/cards/guides/getting-started) — HIGH confidence (official docs)
- [Understanding Open Graph and Twitter Card Meta Tags | Medium](https://medium.com/@jonathanikpen/understanding-open-graph-og-and-twitter-card-meta-tags-ca2742b60314) — MEDIUM confidence
- [How To Add Twitter Card and Open Graph | DigitalOcean](https://www.digitalocean.com/community/tutorials/how-to-add-twitter-card-and-open-graph-social-metadata-to-your-webpage-with-html) — HIGH confidence

---
*Stack research for: Pattern 158 Solutions portfolio site enhancements*
*Researched: 2026-02-13*
*Focus: Dark mode, SEO, analytics, performance, mobile navigation*
