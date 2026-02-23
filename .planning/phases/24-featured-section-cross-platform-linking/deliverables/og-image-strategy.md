# Open Graph Image Strategy

## Current State Analysis

**Image:** `pattern158_logo_3pipes_detailed.png`
**Current dimensions:** 1024 x 559 pixels
**Current aspect ratio:** 1.83:1
**File size:** ~16 KB
**Usage:** All pages (14 exhibits + homepage, philosophy, contact) use the same image
**Location:** `https://pattern158.solutions/assets/images/logos/`

**Meta tag configuration:**
```html
<meta property="og:image" content="https://pattern158.solutions/assets/images/logos/pattern158_logo_3pipes_detailed.png">
<meta property="og:image:width" content="1024">
<meta property="og:image:height" content="559">
```

---

## LinkedIn Recommended Dimensions

**Target:** 1200 x 627 pixels
**Target aspect ratio:** 1.91:1
**Industry standard:** Works across LinkedIn, Facebook (1200x630), Twitter summary_large_image

**Aspect ratio gap:**
- Current: 1.83:1 (wider)
- Target: 1.91:1 (even wider)
- Simple resize will distort or crop composition

---

## Option A: Consistent Branding (Same Logo on All Pages)

### Pros
- **Brand consistency**: Every Featured thumbnail displays the same recognizable Pattern 158 logo
- **Simpler execution**: One image to resize/recompose, update 17 HTML files with dimension changes
- **Faster implementation**: Can be completed in single session (image work + HTML meta tag updates)
- **Recognition at scale**: When multiple Featured items appear, brand reinforcement through repetition

### Cons
- **No visual differentiation**: All Featured items look identical in thumbnail view
- **Missed engagement opportunity**: LinkedIn Featured thumbnails can create visual curiosity before click
- **Homogeneous appearance**: Profile Featured section becomes visually flat/repetitive

### Implementation
1. Recompose `pattern158_logo_3pipes_detailed.png` from 1024x559 to 1200x627
   - Options: Add top/bottom margins (letterbox), crop strategically, or redesign composition at target dimensions
2. Export new image as `pattern158_logo_3pipes_detailed_1200x627.png` (or replace existing)
3. Update all HTML files (14 exhibits + homepage, philosophy, contact):
   - Change `og:image` path if new filename
   - Update `og:image:width` to 1200
   - Update `og:image:height` to 627
4. Verify rendering via LinkedIn Post Inspector or manual URL preview

---

## Option B: Unique Per-Exhibit Images

### Pros
- **Visual differentiation**: Each Featured item has distinct thumbnail appearance
- **Engagement optimization**: Unique visuals create curiosity, encourage exploration of each item
- **Context signaling**: Image can hint at exhibit content (e.g., GM logo element, code screenshot, workflow diagram)
- **Professional polish**: Demonstrates attention to detail and content curation

### Cons
- **More complex creation**: Need to create/source 14+ unique images at 1200x627
- **Maintenance overhead**: Future exhibits require new image design
- **Design consistency challenge**: Need style guide to ensure cohesive look across varied images
- **Longer implementation timeline**: Image creation bottleneck before HTML updates possible

### Implementation Options
**Approach 1: Text-on-brand template**
- Pattern 158 logo as background element
- Exhibit name/title overlaid (e.g., "GM Investigation", "SCORM Debugger")
- Consistent typography, color scheme from brand
- Differentiation via text content, not full redesign

**Approach 2: Screenshot-based**
- SCORM Debugger: Tool interface screenshot
- GM Investigation: NTSB-style findings table visual
- Homepage: Hero section screenshot
- Requires screenshot capture, cropping, composition at 1200x627

**Approach 3: Iconography/symbol-based**
- Pattern 158 logo + content-specific icon (magnifying glass for investigations, wrench for tools, AI chip for MCAPS)
- Visual shorthand for exhibit type
- Simpler than full screenshots, more distinctive than text-only

---

## Recommendation: Option A (Consistent Branding)

**Rationale:**

1. **Execution speed**: Option A can be completed within Plan 02's scope. Option B adds significant design/creation work that would delay implementation.

2. **Brand recognition priority**: At this stage (building professional presence, LinkedIn profile optimization), consistent brand recognition outweighs visual variety. Pattern 158 logo repetition reinforces brand identity.

3. **Content differentiation via copy**: Featured section relies on TITLES and DESCRIPTIONS for differentiation, not just thumbnails. Plan 01's LinkedIn-specific copy variants already provide strong differentiation. Thumbnails support, they don't carry engagement.

4. **Future flexibility**: Can always create unique images later (Plan 02+ or future phase). Starting with consistent branding establishes baseline, unique images can be phased in per-exhibit as time/resources allow.

5. **Professional standard**: Many professional portfolios use consistent branded OG images. It's not a deficit; it's a valid design choice that signals intentional brand architecture.

**Decision:** Proceed with Option A. Resize/recompose `pattern158_logo_3pipes_detailed.png` to 1200x627, update all HTML meta tags to new dimensions.

---

## Aspect Ratio Handling

**Problem:** Current image is 1024x559 (1.83:1), target is 1200x627 (1.91:1). The target aspect ratio is **wider** than current, meaning simple resize will either:
- Crop height (lose top/bottom content)
- Add width padding (letterbox left/right)

**Recommended approach:**

1. **Assess current logo composition**: Open `pattern158_logo_3pipes_detailed.png` in image editor. Check if logo elements are centered or if there's usable margin space.

2. **Option 1 - Add top/bottom padding**: If logo uses full width, add margin space above/below to reach 1.91:1 ratio. Background color should match site theme (dark mode compatible).

3. **Option 2 - Crop strategically**: If logo has excess margin on sides, crop horizontally while preserving core logo elements. Verify "Pattern 158" text and three-pipe visual remain fully visible.

4. **Option 3 - Recompose at target dimensions**: Redesign logo layout specifically for 1200x627. This ensures optimal composition without distortion or letterboxing artifacts.

**Validation:** After resize, test with LinkedIn Post Inspector or paste exhibit URL into LinkedIn share dialog. Verify thumbnail renders without distortion and logo remains legible at thumbnail scale (~140px wide in Featured section preview).

---

## Implementation Plan for Plan 02

Regardless of Option A or B decision, Plan 02 must execute:

1. **Image file work** (outside Plan 02 scope - user or designer handles):
   - Resize/recompose logo from 1024x559 to 1200x627
   - Export with optimized web compression (target <50 KB, current is 16 KB)
   - Save to `/assets/images/logos/` directory

2. **HTML meta tag updates** (Plan 02 scope):
   - Update all exhibit HTML files (exhibit-a.html through exhibit-n.html)
   - Update homepage (index.html), philosophy (philosophy.html), contact (contact.html)
   - Change `og:image:width` from "1024" to "1200"
   - Change `og:image:height` from "559" to "627"
   - If new filename (e.g., `_1200x627.png`), update `og:image` content attribute path

3. **Verification** (Plan 02 scope):
   - Manual verification: Paste 2-3 exhibit URLs into LinkedIn share dialog, verify thumbnail rendering
   - Optional: LinkedIn Post Inspector (if accessible in 2026) for automated validation
   - Check mobile rendering (thumbnails should display correctly at small scale)

---

## Future Considerations

**If switching to Option B (unique images) later:**
- Plan 03 or future phase can create exhibit-specific images incrementally
- Start with Featured section items (GM Investigation, SCORM Debugger, MCAPS, Cross-Domain Framework, Homepage) - only 5 images needed for Featured optimization
- Remaining 12 exhibits can stay with consistent logo until resources available
- Maintains flexibility without blocking current LinkedIn profile optimization work

**Monitoring:**
- After Featured section goes live, track engagement via LinkedIn profile analytics
- If click-through rates on Featured items are low, consider revisiting unique image strategy
- LinkedIn may update OG image dimension recommendations - aspect ratio should be monitored annually

---

## Decision Summary

**Selected approach:** Option A - Consistent branding (same logo on all pages at 1200x627)

**Key action items:**
1. Recompose logo image to 1200x627 (user/designer work, outside Plan 02)
2. Update 17 HTML files with new og:image dimensions (Plan 02 implementation)
3. Verify LinkedIn rendering via manual URL preview (Plan 02 verification)

**Deferred:**
- Unique per-exhibit images (can be implemented in future phase if engagement data supports)
- Screenshot-based thumbnails (resource-intensive, not required for initial Featured section optimization)
