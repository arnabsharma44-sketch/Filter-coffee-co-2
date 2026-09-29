# Filter Coffee Co. — Website Documentation

> **Version:** 1.0.0  
> **Last Updated:** September 2025  
> **Stack:** HTML5 · Vanilla CSS · Vanilla JavaScript (no dependencies)

---

## Table of Contents

1. [Project Overview](#1-project-overview)  
2. [File Structure](#2-file-structure)  
3. [Design System](#3-design-system)  
4. [Page Sections — Copy & Structure](#4-page-sections)  
5. [Navigation](#5-navigation)  
6. [Animations & Interactions](#6-animations--interactions)  
7. [Responsive Behaviour](#7-responsive-behaviour)  
8. [Placeholder Zones](#8-placeholder-zones---what-to-replace)  
9. [Customisation Guide](#9-customisation-guide)  
10. [SEO Checklist](#10-seo-checklist)  
11. [Deployment Notes](#11-deployment-notes)  
12. [Brand Voice Reference](#12-brand-voice-reference)

---

## 1. Project Overview

**Filter Coffee Co.** is an advertising and social media agency. This website is their primary marketing and lead-generation platform.

### Brand Positioning

| Element | Detail |
|---------|--------|
| Name | Filter Coffee Co. (FCC) |
| Tagline | *Espresso Your Creativity.* |
| Value Prop | We make brands addictive. |
| Tone | Sharp · Confident · Witty · Warm |
| Design Direction | Premium Black & White · Editorial · Modern |

### Founder

**Anuja Deora** — Founder & CEO  
The mind behind the briefs, the ideas and probably a few too many open tabs.

---

## 2. File Structure

```
filter-coffee-co/
├── index.html        ← Main website (single-page)
├── styles.css        ← All styling (no external CSS frameworks)
├── script.js         ← All interactivity (no JS libraries)
└── DOCS.md           ← This file
```

> **Note:** Zero npm packages, zero build tools, zero dependencies. Open `index.html` in any browser.

---

## 3. Design System

### Colour Palette

| Token | Value | Usage |
|-------|-------|-------|
| `--black` | `#0a0a0a` | Primary background |
| `--white` | `#f5f5f0` | Primary text / CTA fill |
| `--off-white` | `#ebebeb` | Secondary backgrounds |
| `--mid-grey` | `#888888` | Secondary text, labels |
| `--light-grey` | `#d4d4d4` | Body copy, tags |
| `--border` | `rgba(255,255,255,0.12)` | All borders (dark sections) |
| `--border-dark` | `rgba(0,0,0,0.12)` | Borders on light sections |

### Typography

**Font Family:** SF Pro Display / SF Pro Text (system font on macOS/iOS)  
**Web Fallback:** Inter (Google Fonts) → -apple-system → system-ui

```css
font-family: 'SF Pro Display', 'SF Pro Text', 'Inter', -apple-system, 
             BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

| Scale | Size | Weight | Use |
|-------|------|--------|-----|
| Hero Headline | `clamp(3.5rem, 8vw, 9rem)` | 800 | Hero H1 |
| Section Title | `clamp(2.8rem, 5vw, 5.5rem)` | 700 | Section H2 |
| CEO Name | `clamp(2.2rem, 4vw, 4rem)` | 700 | CEO section |
| Body | `0.95rem–1.15rem` | 300–400 | Paragraphs |
| Eyebrow | `0.68–0.72rem` | 600 | Section labels |
| Tags / Labels | `0.6–0.75rem` | 600 | Chips, badges |

### Spacing

- Section vertical padding: `140px` desktop → `100px` tablet → `80px` mobile
- Container max-width: `1360px` with `48px` side padding
- Grid gap: `1px` (creates thin dividing lines using background colour)

### Animation Easing

```css
--ease-out-expo: cubic-bezier(0.16, 1, 0.3, 1);   /* Most transitions */
--ease-in-out:   cubic-bezier(0.4, 0, 0.2, 1);    /* Nav, bg fades */
```

---

## 4. Page Sections

### Hero

**Headline:** *Espresso Your Creativity.*  
**Supporting Copy:**
- Yes, our name is Filter Coffee Co.
- No, we don't make coffee.
- We make brands addictive.

**CTA:** See Our Work ↓ (anchors to `#work`)

---

### Ticker Banner

Continuous scrolling marquee that pauses on hover.

**Content:**  
`STRATEGY • SOCIAL • CREATIVE • CONTENT • CAMPAIGNS • INFLUENCER • E-COMMERCE • DIGITAL • REPEAT`

---

### About Blurb

> We're an advertising and social media agency blending **strategy**, **creativity** and **culture** to create work that gets seen, shared, saved and remembered.

---

### Work — FRESHLY BREWED

**Heading:** Work worth a *double tap.*  
**Subheading:** A fresh pour of campaigns, content and social-first ideas we've brewed for brands.

**Grid Layout:** 3-column masonry-style  
**Cards:** 6 placeholders (2 span full width)

| Slot | Type | Label |
|------|------|-------|
| 1 (wide) | Campaign | Brand Story |
| 2 | Social | Feed-First Creative |
| 3 | Branding | Visual Identity |
| 4 | Influencer | Creator Campaign |
| 5 | E-Commerce | Product Listing |
| 6 (wide) | Digital | Integrated Campaign |

---

### Services — WHAT'S BREWING?

**Heading:** Pick your *blend.*

| # | Service | Tagline | Tags |
|---|---------|---------|------|
| 01 | Social Media | Always on. Never meh. | Social strategy · Content calendars · Platform-first creative · Community |
| 02 | Creative Campaigns | Big idea energy. | Campaign concepts · Digital creative · Integrated campaigns · Launches |
| 03 | Brand & Digital Strategy | Before we post, we plot. | Brand strategy · Consumer insights · Communication · Digital strategy |
| 04 | Content & Production | Shoot. Edit. Post. Repeat. | Reels · Films · Photography · CGI · AI-led content |
| 05 | Influencer Marketing | Putting influence to work. | Creator strategy · Collaborations · Campaigns · Amplification |
| 06 | E-Commerce | Add creativity to cart. | PDP · A+ Content · Marketplace creatives · Performance assets |

**CTA:** LET'S GET BREWING → (links to `#contact`)

---

### About / Our Blend

**Heading:** From skincare shelves to *social feeds.*  
**Copy:** We've partnered with brands to serve ideas that keep conversations brewing.

**Client Logo Wall:** 12 placeholder slots in a 6-column grid.

---

### Stats — Big ideas. *Bigger numbers.*

> Because good creatives get attention,  
> Great creatives get results.

| Stat | Label |
|------|-------|
| `XX+` | Brands in the blend |
| `XXM+` | Impressions served |
| `XXM+` | Engagements stirred up |
| `XXX+` | Campaigns gone live |
| `XXXX+` | Creatives sent into the feed |
| `XX+ YEARS` | Still brewing. |

> **TODO for client:** Replace all `XX` placeholders with real numbers.  
> Stats animate in with a count-up effect when scrolled into view.

---

### CEO — MEET OUR CEO

**Name:** Anuja Deora  
**Role:** Founder & CEO, Filter Coffee Co.

> The mind behind the briefs, the ideas and probably a few too many open tabs.

Anuja built Filter Coffee Co. with a simple belief: creativity should never feel filtered. From building brands to building teams, she leads FCC with a sharp eye for culture, a love for ideas and an instinct for what gets people to stop, look and engage.

**Tags:** Big-picture thinker. · Brand builder.

---

### Team — MEET THE BREW CREW

> Strategists. Copywriters. Designers. Social media managers.  
> Content creators. And professional tab-hoarders.

> Different roles. Different playlists. Different coffee orders.  
> **One shared obsession: making good work.**

6 team member placeholder cards with role labels.

---

### Contact — GOT A BRIEF?

**Headline:** Spill the beans. *We'll brew the idea.*

**Copy:**  
New campaign? Social needs a refresh? Launch loading? Or just an idea sitting in your notes app?  
Slide into our inbox.

**CTA:** SEND THE BRIEF → (mailto link)

**Form Fields:**
- Your Name *(required)*
- Brand / Company
- Email *(required)*
- What's brewing? (dropdown — service selector)
- The Brief *(required, textarea)*

**Submit CTA:** BREW IT UP →

---

### Footer

**Links:** The Good Stuff · What's Brewing? · Our Blend · Our Clients · Grab a Coffee  
**Social:** IG · LI · X (placeholder links)  
**Copyright:** © 2025 Filter Coffee Co.  
**Sign-off:** Crafted with creativity. Brewed to perfection.

---

## 5. Navigation

| Label | Hover Sub-label | Anchor |
|-------|----------------|--------|
| Work | The Good Stuff | `#work` |
| Services | What's Brewing? | `#services` |
| About Us | Our Blend | `#about` |
| Our Clients | — | `#clients` |
| Grab a Coffee | — | `#contact` (styled as CTA button) |

**Behaviour:**
- Transparent on hero → frosted glass on scroll
- Active link underline via scroll spy
- Mobile: Hamburger menu with animated open/close
- Smooth scroll to sections with nav-height offset

---

## 6. Animations & Interactions

| Interaction | Detail |
|-------------|--------|
| Hero entrance | Staggered fade-up (eyebrow → headline → copy → CTA) |
| Hero BG text | Slow infinite drift animation |
| Ticker | Continuous left scroll, pauses on hover |
| Scroll reveal | Elements fade up as they enter viewport |
| Stagger grids | Grid children animate in sequentially (70ms delay) |
| Work card tilt | Subtle 3D perspective tilt on mouse move |
| Stat count-up | Numbers animate from 0 when scrolled into view |
| Button fill | White fill slides in from left on hover |
| Nav CTA | Same fill animation |
| Logo slots | Opacity lift on hover |
| Service cards | Top border slides in + background lightens on hover |
| Cursor glow | Soft radial gradient follows cursor (desktop only) |
| Scroll indicator | Pulsing line in hero bottom-right |

---

## 7. Responsive Behaviour

| Breakpoint | Changes |
|------------|---------|
| > 1024px (Desktop) | Full layout — 3-col services, 6-col logos, 3-col stats |
| ≤ 1024px (Tablet) | 2-col services, 4-col logos, 2-col stats, 3-col team |
| ≤ 768px (Mobile) | 1-col services, 3-col logos, hamburger nav, stacked CEO |

---

## 8. Placeholder Zones — What to Replace

> Everything marked with `◈` or `Brand XX` is a placeholder.

| Zone | What to add |
|------|------------|
| **Work Grid** (6 cards) | Real campaign imagery or video stills (16:9 or 21:9 ratio) |
| **Service Visuals** (6 cards) | Mockups, creative samples, or concept visuals |
| **Client Logo Wall** (12 slots) | Actual client logos (SVG recommended, white or on dark bg) |
| **CEO Photo** | Professional photo of Anuja Deora (3:4 portrait ratio) |
| **Team Photos** (6 cards) | Team headshots or illustrations (1:1 square) |
| **Stat Numbers** | Replace all `XX`, `XXM`, `XXX`, `XXXX` with real data |
| **Social Links** | Update `href="#"` on IG, LI, X links |
| **Email** | Update `hello@filtercoffeeco.in` in the mailto link |
| **OG Image** | Add a `<meta property="og:image">` tag with brand visual |

---

## 9. Customisation Guide

### Updating Colours

All colours are CSS variables in `:root {}` in `styles.css`. Change once, updates everywhere:

```css
:root {
  --black: #0a0a0a;   /* ← change this for background */
  --white: #f5f5f0;   /* ← change this for text/CTA */
  --mid-grey: #888888;
}
```

### Updating Stats

In `index.html`, find the `.stats-grid` section and update:

```html
<span class="stat-value">50+</span>   <!-- was XX+ -->
<span class="stat-value">200M+</span> <!-- was XXM+ -->
```

The count-up animation will automatically pick up the numeric prefix.

### Adding Client Logos

Replace `.logo-slot` content with actual `<img>` tags:

```html
<div class="logo-slot">
  <img src="images/client-name.svg" alt="Client Name" />
</div>
```

### Adding Work Case Studies

Replace the `.work-placeholder` divs with images or link the cards:

```html
<a href="case-studies/brand-name.html" class="work-card work-card--large">
  <img src="images/work/brand-name.jpg" alt="Brand Name Campaign" class="work-img" />
  ...
</a>
```

### Updating Email / Contact

In `index.html`, update the mailto link:

```html
<a href="mailto:YOUR@EMAIL.com" class="btn-primary btn-large">
```

Also wire the form to your backend or a service like Formspree / EmailJS.

### Ticker Speed

In `styles.css`, find `@keyframes tickerScroll` — change the `animation` duration:

```css
.ticker-track {
  animation: tickerScroll 28s linear infinite; /* lower = faster */
}
```

---

## 10. SEO Checklist

- [x] `<title>` tag — descriptive and brand-first
- [x] `<meta name="description">` — compelling summary
- [x] `<meta name="keywords">` — relevant industry terms
- [x] `<meta property="og:title">` — social sharing title
- [x] `<meta property="og:description">` — social sharing description
- [x] `<meta property="og:type">` — `website`
- [x] Single `<h1>` per page (hero headline)
- [x] Semantic HTML5 elements (`<nav>`, `<section>`, `<footer>`, `<form>`)
- [x] `aria-label` on nav, social links, buttons
- [x] `alt` attributes on all images (once added)
- [ ] `<meta property="og:image">` — **add brand visual**
- [ ] `<link rel="canonical">` — **add production URL**
- [ ] `favicon.ico` / `apple-touch-icon` — **add brand icon**
- [ ] Google Analytics / tag manager — **add tracking**
- [ ] `robots.txt` — **create if needed**
- [ ] `sitemap.xml` — **create for multi-page expansion**

---

## 11. Deployment Notes

### Quick Local Preview

```bash
# Option A — just open the file
open index.html

# Option B — local server (recommended)
npx serve .
# or
python -m http.server 8080
```

### Production Checklist

1. **Compress images** — Use WebP format, max 200KB per image
2. **Minify CSS/JS** — Use a tool like [minify.com](https://minify.com) or a build step
3. **Add favicon** — 32×32 and 192×192 PNG + `apple-touch-icon`
4. **Test on devices** — iOS Safari, Android Chrome, desktop Chrome/Firefox/Safari
5. **Form backend** — Wire `#contactForm` to Formspree, EmailJS, or custom API
6. **HTTPS** — Ensure SSL certificate is active
7. **Performance** — Run Lighthouse audit, target 90+ scores

### Recommended Hosting

- **Netlify** (drag-and-drop folder, free tier, instant HTTPS)
- **Vercel** (git-connected, automatic deploys)
- **GitHub Pages** (free, good for static sites)

---

## 12. Brand Voice Reference

### Tone Principles

| Principle | What it means in copy |
|-----------|----------------------|
| **Sharp** | No fluff. Every word earns its place. |
| **Confident** | State, don't hedge. *"We make brands addictive"* not *"We try to make brands..."* |
| **Witty** | Wordplay and coffee puns are encouraged. |
| **Warm** | Smart but never cold. People-first. |

### Coffee Metaphors Used

| Context | Phrase |
|---------|--------|
| Making work | Brewing |
| Services | Blends |
| Team | Brew Crew |
| A campaign idea | A pour |
| Getting started | Let's get brewing |
| Submitting a brief | Spill the beans |
| Success | Brewed to perfection |
| Agency | Filter Coffee Co. |
| Creativity | Never filtered |

### Do / Don't

| ✅ Do | ❌ Don't |
|------|---------|
| Always on. Never meh. | We are always consistently posting content. |
| Big idea energy. | We create big ideas for your campaigns. |
| Shoot. Edit. Post. Repeat. | Our team handles content production end to end. |
| Work worth a double tap. | Content that performs well on social media. |

---

*Filter Coffee Co. — We make brands addictive.*  
*Built with zero fuss, maximum taste. ☕*
