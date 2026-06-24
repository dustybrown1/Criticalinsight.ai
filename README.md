# Critical Insight Inc. — Website

**Domain:** www.criticalinsight.ai  
**Stack:** Static HTML + CSS (no JavaScript, no build step required)

---

## Folder Structure

```
criticalinsight-site/
├── index.html          → Home page
├── about.html          → About Us (team bios)
├── cognos.html         → CognOS platform page
├── contact.html        → Contact page
├── assets/
│   ├── css/
│   │   └── styles.css  → Global stylesheet (single file for all pages)
│   └── images/
│       ├── Dan.jpg           → Dan Vanderboom headshot
│       ├── Dusty_Headshot.png → Dusty-Lynn Brown headshot
│       └── IMG_6587.PNG      → CognOS spiral logo (used ONLY on cognos.html hero)
└── README.md
```

---

## Pages

| File | Page | Notes |
|------|------|-------|
| `index.html` | Home | Hero, mission, three-pillar preview, CTA |
| `about.html` | About Us | Team cards with photos and full bios |
| `cognos.html` | CognOS | Logo hero, overview, pillars, cognitive loop, capabilities, workload catalog, CTA |
| `contact.html` | Contact | Email + LinkedIn cards for Dan and Dusty; YouTube CTA box |

---

## Design System

- **Background:** Near-black `#07070F` with deep black `#000000` accent sections  
- **Primary accent:** Electric blue `#3B9EFF`  
- **Secondary accent:** Cyan `#00D4FF`  
- **Tertiary accent:** Violet `#7B5FFF`  
- **Typography:** Inter (loaded via Google Fonts CDN), system font fallback  
- **Responsive:** Mobile-first; breakpoints at 640px and 900px  
- **No JavaScript** — fully static

---

## Deploying to Vercel

1. Push this folder to a GitHub repository (or upload directly).
2. Import the repository in [vercel.com](https://vercel.com).
3. No build settings required — Vercel detects static HTML automatically.
4. Set the custom domain to `www.criticalinsight.ai` in Vercel's Domain settings.
5. Vercel will provision SSL automatically.

### Optional: `vercel.json` for clean URLs

To remove `.html` extensions from URLs, add a `vercel.json` file at the root:

```json
{
  "cleanUrls": true,
  "trailingSlash": false
}
```

This makes `/about.html` accessible at `/about`, and so on.

---

## Image Notes

- `Dan.jpg` and `Dusty_Headshot.png` are used on `about.html` only.
- `IMG_6587.PNG` (CognOS logo) is used **only** in the hero section of `cognos.html`. It does not appear in any navigation, footer, or on any other page.
- No images were modified, resized, or renamed.

---

## Content Sources

All CognOS technical content is drawn from:
- `CognOS_Workload_Catalog.pdf` (April 2026)
- `CognOS_Pitch_Narrative.docx`
- `cognos-docs.zip` (system architecture and getting started guides)
- `About_Us.docx` (team bios, used verbatim)

No technical details were invented or altered.
