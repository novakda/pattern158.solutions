# Cross-Platform Link Map

## Hub: pattern158.solutions

Pattern158.solutions functions as the central hub in a bidirectional link ecosystem connecting LinkedIn profile, GitHub account, and portfolio website. All external platform links route through pattern158.solutions to establish brand authority and create multiple verification touchpoints for hiring managers and recruiters.

---

## Outbound Links (site → external)

### LinkedIn Profile
**URL:** https://linkedin.com/in/dan-novak-5692197
**Location:** Footer (all pages), Contact page (contact info section)
**Status:** ✅ Live (verified in footer across all 22 HTML pages)
**Purpose:** Professional profile discovery, social proof, network verification

### GitHub Profile
**URL:** https://github.com/novakda
**Location:** Footer (all pages), Contact page (GitHub section with profile + repos links)
**Status:** ✅ Updated (corrected from github.com/xhiris to novakda in Plan 02 Task 1)
**Purpose:** Code repository access, technical credibility, open source contributions

---

## Inbound Links (external → site)

### From LinkedIn: Featured Section
**Type:** Featured items (external links displayed on profile)
**Status:** ⏳ Pending user action (apply instructions.md after Plan 02 complete)
**Items to add:** 5 exhibit links with custom copy

1. **GM Investigation**
   - URL: https://pattern158.solutions/exhibits/exhibit-j.html
   - Copy variants: 3 options (outcome-focused, curiosity-driven, technical showcase)
   - Purpose: Forensic engineering differentiator, brand recognition (General Motors)

2. **SCORM Debugger**
   - URL: https://pattern158.solutions/exhibits/exhibit-m.html
   - Copy variants: 3 options
   - Purpose: Toolmaker identity, Vue.js modern stack, developer productivity focus

3. **Microsoft MCAPS AI Agent**
   - URL: https://pattern158.solutions/exhibits/exhibit-k.html
   - Copy variants: 3 options
   - Purpose: Currency proof (2024-2026), AI/LLM relevance, Microsoft platform credibility

4. **Cross-Domain SCORM Framework**
   - URL: https://pattern158.solutions/exhibits/exhibit-e.html
   - Copy variants: 3 options
   - Purpose: Longevity (10+ years production), first-to-market innovation (2011, pre-Rustici)

5. **pattern158.solutions Homepage**
   - URL: https://pattern158.solutions/index.html
   - Copy variants: 3 options
   - Purpose: Brand anchor, portfolio gateway, philosophy overview

**Action required:** User adds Featured items via LinkedIn UI using instructions.md guide and featured-copy.md copy variants.

### From LinkedIn: About Section
**Type:** Pattern158.solutions mention in About text
**Status:** ✅ Applied (Phase 23 Plan 02 deliverable)
**Location:** LinkedIn About section text body
**Purpose:** Direct site reference in professional summary, SEO for brand name searches

### From GitHub: novakda Profile
**Type:** Social account link + optional website link
**Status:** ⏳ Pending user action
**Action required:**
1. GitHub Settings → Profile → Social accounts: Add LinkedIn URL (https://linkedin.com/in/dan-novak-5692197)
2. GitHub Settings → Profile → Website: Add https://pattern158.solutions (optional but recommended)

**Current state:** GitHub novakda profile exists, but social links not yet configured.

### From GitHub: novakda README (Optional)
**Type:** Repository README.md link
**Status:** ⏳ Optional enhancement (not required for MVP link loop)
**Action:** Add pattern158.solutions link to github.com/novakda profile README if exists
**Purpose:** Additional discovery path for repository visitors

---

## Link Loop Verification

Complete bidirectional link loop path:

```
LinkedIn Profile (Featured + About)
         ↓
pattern158.solutions (exhibits + homepage)
         ↓
GitHub novakda Profile (footer links)
         ↓
LinkedIn Profile (GitHub social account link)
         ↑_______________|
```

### Step-by-step verification checklist

#### 1. LinkedIn → pattern158.solutions
- [⏳] LinkedIn Featured → pattern158.solutions exhibits (5 items)
  - Status: User adds after Plan 02 complete (see instructions.md)
- [✅] LinkedIn About → pattern158.solutions mention
  - Status: Applied in Phase 23 Plan 02

#### 2. pattern158.solutions → External Platforms
- [✅] pattern158.solutions footer → LinkedIn profile
  - Status: Live on all pages
- [✅] pattern158.solutions footer → GitHub novakda profile
  - Status: Updated in Task 1 (corrected from xhiris)
- [✅] pattern158.solutions contact → GitHub novakda profile + repos link
  - Status: Already correct (contact.html has novakda links)

#### 3. GitHub → LinkedIn (Completing the Loop)
- [⏳] GitHub novakda profile → LinkedIn social account link
  - Status: User must add in GitHub Settings → Profile → Social accounts
  - URL to add: https://linkedin.com/in/dan-novak-5692197

#### 4. GitHub → pattern158.solutions (Optional Enhancement)
- [⏳] GitHub novakda profile → pattern158.solutions website link
  - Status: User optionally adds in GitHub Settings → Profile → Website
  - URL to add: https://pattern158.solutions

---

## Current Issues Resolved

### Footer GitHub Link Correction (Plan 02 Task 1)
**Issue:** Footer links on 18 HTML pages pointed to github.com/xhiris instead of primary account github.com/novakda
**Resolution:** Updated all footer GitHub links to github.com/novakda
**Verified:** Zero instances of github.com/xhiris remain in any HTML file
**Files affected:** portfolio.html, testimonials.html, technologies.html, all 14 exhibit files, contact.html already correct

### OG Image Dimensions (Plan 02 Task 1)
**Issue:** OG image meta tags used 1024x559 dimensions instead of LinkedIn recommended 1200x627
**Resolution:** Updated og:image:width and og:image:height across all 22 HTML pages
**Verified:** All pages now have 1200x627 OG dimensions
**Note:** Actual image file (pattern158_logo_3pipes_detailed.png) still at 1024x559 - user must resize image file separately (manual work outside GSD scope)

---

## Outstanding Manual Actions

### 1. Add Featured Items to LinkedIn Profile (HIGH PRIORITY)
**Who:** User
**When:** After Plan 02 complete
**How:** Follow instructions.md step-by-step guide
**Resources needed:** featured-copy.md (copy variants to paste)
**Time estimate:** 15-20 minutes (5 items × 3-4 minutes each)

### 2. Add LinkedIn Link to GitHub Profile (MEDIUM PRIORITY)
**Who:** User
**When:** After Featured items added (completes bidirectional loop)
**How:**
1. Go to github.com/novakda
2. Click Settings → Profile
3. Scroll to "Social accounts"
4. Click "Add a social account"
5. Select LinkedIn, paste URL: https://linkedin.com/in/dan-novak-5692197
6. Save changes

**Verification:** LinkedIn icon appears on GitHub profile, links to LinkedIn profile

### 3. Add Website Link to GitHub Profile (LOW PRIORITY - Optional)
**Who:** User
**When:** Anytime (not required for link loop)
**How:**
1. Go to github.com/novakda
2. Click Settings → Profile
3. Find "Website" field
4. Enter: https://pattern158.solutions
5. Save changes

**Verification:** Website link appears below bio on GitHub profile

### 4. Resize OG Image File (MEDIUM PRIORITY)
**Who:** User or designer
**When:** Before LinkedIn Featured cache refresh (24-48 hours after adding items)
**What:** Resize pattern158_logo_3pipes_detailed.png from 1024x559 to 1200x627
**How:** See og-image-strategy.md for aspect ratio handling options (letterbox, crop, recompose)
**Location:** /assets/images/logos/pattern158_logo_3pipes_detailed.png
**Note:** HTML meta tags already updated to 1200x627 - this is just the image file resize

---

## LinkedIn OG Cache Considerations

**Issue:** LinkedIn caches Open Graph data for shared URLs. Even after updating HTML meta tags, LinkedIn may show old cached thumbnail/dimensions for 24-48 hours.

**Manual cache refresh methods:**
1. **LinkedIn Post Inspector** (if available in 2026): Paste URL to force re-scrape
2. **Share dialog trick**: Create new LinkedIn post, paste exhibit URL (LinkedIn re-scrapes), close post without publishing
3. **Wait 24-48 hours**: LinkedIn cache naturally expires and re-scrapes on next access

**When to refresh:**
- After resizing OG image file from 1024x559 to 1200x627
- After adding Featured items (to verify thumbnails display correctly)
- If old dimensions/images persist after HTML updates

---

## Cross-Platform Consistency Notes

**Brand name alignment:**
- LinkedIn: Dan Novak (with pattern158.solutions mention in About)
- GitHub: novakda (primary account)
- Website: pattern158.solutions (Dan Novak as systems architect)

**GitHub account clarification:**
- Primary: github.com/novakda (corrected in all HTML footer links)
- Secondary: github.com/xhiris (eliminated from footer links - no longer referenced)

**Email consistency:**
- Contact email: dan@pattern158.solutions (appears in LinkedIn About section and pattern158.solutions Contact page)
- GitHub: Uses novakda account (not xhiris)

---

## Verification Timeline

| Step | Action | Status | Completed |
|------|--------|--------|-----------|
| 1 | Update HTML OG dimensions to 1200x627 | ✅ Complete | 2026-02-23 (Plan 02 Task 1) |
| 2 | Fix footer GitHub links (xhiris → novakda) | ✅ Complete | 2026-02-23 (Plan 02 Task 1) |
| 3 | Add LinkedIn Featured items (5 exhibits) | ⏳ Pending | User action (instructions.md) |
| 4 | Add LinkedIn URL to GitHub novakda profile | ⏳ Pending | User action (GitHub Settings) |
| 5 | Add pattern158.solutions to GitHub novakda profile | ⏳ Optional | User action (GitHub Settings) |
| 6 | Resize OG image file to 1200x627 | ⏳ Pending | User/designer work (outside GSD) |
| 7 | Verify LinkedIn OG cache refresh | ⏳ Pending | After Step 6 (24-48 hours) |

---

## Success Metrics

**Link loop complete when:**
- ✅ All pattern158.solutions pages link to GitHub novakda (not xhiris)
- ✅ All pattern158.solutions pages link to LinkedIn profile
- ⏳ LinkedIn Featured section displays 5 pattern158.solutions exhibit links
- ⏳ LinkedIn About section mentions pattern158.solutions (already done in Phase 23)
- ⏳ GitHub novakda profile links to LinkedIn
- ⏳ GitHub novakda profile optionally links to pattern158.solutions

**OG optimization complete when:**
- ✅ All HTML pages have og:image:width="1200" and og:image:height="627"
- ⏳ Image file resized to 1200x627 (user/designer work)
- ⏳ LinkedIn Featured thumbnails display at optimal resolution (after cache refresh)

---

**Last updated:** 2026-02-23 (Plan 02 Task 2)
**Phase:** 24-featured-section-cross-platform-linking
**Dependencies:** Phase 23 (headline, about, URL, email), Plan 01 (featured-copy.md, og-image-strategy.md)
