# HIO Hair Studio — Quiet Luxury & Editorial Hair Artistry

> A serene digital sanctuary dedicated to bespoke couture coloring, architectural hair design, and Japanese holistic scalp therapy in Saigon.

![HIO Hair Studio Preview](/public/hero.jpg)

---

## ✦ Overview

**HIO Hair Studio** website is designed with a **Quiet Luxury & High Editorial Fashion** aesthetic. It focuses on intentional pacing, tactile typography, fluid micro-interactions, and bespoke motion rather than loud, generic salon templates.

- **Atelier Location:** 55/28 Lê Thị Hồng Gấm, Bến Thành, Quận 1, TP. Hồ Chí Minh
- **Creative Director:** Alexandre Hio

---

## ✦ Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Motion & Interactions:** [Motion (Framer Motion)](https://motion.dev/) & [GSAP](https://gsap.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** *Cormorant Garamond* (Editorial Serif) & *Plus Jakarta Sans* (Minimalist Sans)

---

## ✦ Key Features

1. **Editorial SplashScreen:** Royal opening sequence with dual-curtain split reveal.
2. **Interactive Spotlight Hero:**
   - *Desktop:* Black & White grayscale base layer with mouse-driven spotlight color reveal (`radial-gradient` mask) and subtle rose-bronze glow.
   - *Mobile:* Naturally focused color portrait with dynamic viewport height (`100svh`).
3. **Philosophy Deck Animation:** Auto-fanning deck of editorial cards pausing on scroll.
4. **Signature Services 3x3 Grid:** Staggered visual sequence with cinematic dark lead cards and direct consultation booking.
5. **Full-Bleed Studio Showcase:** Sticky container zooming from framed 52% width to full-screen 100vw on scroll with synchronized pure white marquee.
6. **Lookbook Lightbox (Video & Photography):** Filterable anthology supporting autoplay muted reels, click-to-lightbox video/photo viewer with responsive controls.
7. **Social Proof & Testimonials:** Infinite looping guest reviews gliding seamlessly behind a pinned vertical live reel video.
8. **Interactive Custom Cursor:** Context-aware dual-ring cursor adapting to light/dark themes and contextual interactions.
9. **Full Mobile Optimization:** 100% responsive across all modern mobile viewports (iOS Safari / Android Chrome).

---

## ✦ Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/longledev1/hio-hair.git
cd hio-hair
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Build for production
```bash
npm run build
```
Production build assets will be generated in `/dist`.

---

## ✦ Deployment

### Deploy to Netlify
1. Connect your GitHub repository to [Netlify](https://www.netlify.com/).
2. Set build settings:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Click **Deploy Site**.

Alternatively, via Netlify CLI:
```bash
npx netlify deploy --prod --dir=dist
```

---

## ✦ License & Rights

© 2026 HIO Hair Studio. All rights reserved. Private Atelier & Haute Coiffure Sanctuary.
