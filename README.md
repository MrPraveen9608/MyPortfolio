# 🚀 K. Praveen — Personal Portfolio

> A single-page 3D immersive portfolio built entirely with vanilla HTML, CSS and JavaScript — no frameworks, no build tools, just clean code.

🌐 **Live Site → [https://mrpraveen9608.github.io/MyPortfolio/](https://mrpraveen9608.github.io/MyPortfolio/)**

---

## 🧑‍💻 Who

**K. Praveen** — BTech 2nd Year, CSIT-B section  
📍 Sree Datta College of Engineering, Ibrahim Patnam, Hayathnagar, Hyderabad, Telangana  
🎯 Currently learning: **Java · C++ · Machine Learning**  
🎮 Hobby: Online gaming (great for focus, strategy & decompressing after long study sessions)

---

## 📋 What

A fully responsive personal portfolio website featuring:

| Section | Status | Description |
|---------|--------|-------------|
| **Hero** | ✅ Live | Animated intro with 3D floating profile card, orbiting rings & resume button |
| **About Me** | ✅ Live | Bio, info cards, animated skill bars, hobby highlight |
| **Projects** | 🔜 Coming Soon | Countdown timer + dev progress bar |
| **Resume** | ✅ Live | 3D shining button · inline PDF viewer (desktop) · download-only (mobile) |
| **Contact** | ✅ Live | GitHub & email links |

---

## ✨ Features

### 3D & Depth Effects
- **Scroll-driven starfield** — 220 layered stars that scroll at different depths using `requestAnimationFrame`; closer stars are larger & glow
- **Shooting stars** — random shooting-star events drawn on canvas
- **Depth-parallax blobs** — three large radial-gradient blobs that move at different rates to both mouse position and scroll Y, creating a genuine multi-layer 3D depth illusion
- **3D floating cards** — hero profile card and about-me card animate with CSS `perspective` + `rotateX/rotateY`; they tilt in real-time toward the mouse cursor
- **CSS `transform-style: preserve-3d`** — hero and profile cards maintain true 3D space
- **Orbiting rings** — two dashed rings orbit the hero card on independent timers
- **3D Resume button** — gradient colour shift, shine-sweep animation, dual-layer glow pulse, depth shadow and satisfying `:active` press effect

### UI & Interaction
- **Custom CSS cursor** — dot + lagged ring follower, scales on hover
- **Smooth scroll reveal** — `IntersectionObserver` fades & slides sections in as they enter the viewport
- **Animated skill bars** — fill from 0 to percentage when the about section scrolls into view
- **Live countdown timer** — ticks down to project launch (90 days from first load)
- **Inline resume PDF viewer** — desktop users see the resume embedded in-page via Google Docs Viewer; no download required
- **Mobile-optimised resume** — phones show only the one-tap download button (no oversized iframe)
- **Scroll-to-top button** — appears after 300 px of scroll
- **Sticky frosted-glass nav** — blurs + darkens on scroll; mobile hamburger menu

### Tech Stack
| Layer | Tech |
|-------|------|
| Markup | Semantic HTML5 |
| Styling | Vanilla CSS3 (custom properties, grid, flexbox, animations) |
| 3D | CSS `perspective` / `transform-style: preserve-3d` |
| Background | HTML5 Canvas 2D API |
| Fonts | Google Fonts — Orbitron, Inter, JetBrains Mono |
| Icons | Unicode / Emoji (no external icon library dependency) |
| Scroll effects | `IntersectionObserver` + `requestAnimationFrame` |
| PDF viewer | Google Docs Viewer (iframe, desktop only) |

---

## 📍 Where

**Deployed** on GitHub Pages:  
🌐 **[https://mrpraveen9608.github.io/MyPortfolio/](https://mrpraveen9608.github.io/MyPortfolio/)**

Developed from:  
📍 Hayathnagar, Hyderabad, Telangana, India

---

## 🗓️ When

| Milestone | Date |
|-----------|------|
| Initial portfolio created | Early 2025 |
| Full rebuild with 3D effects | March 2025 |
| Resume button + PDF viewer added | April 2025 |
| Projects section launch | TBD (~90 days) |

---

## ❓ Why

I built this portfolio to:

1. **Showcase my journey** — as a BTech 2nd year CS student actively learning Java, C++ and Machine Learning
2. **Practice front-end skills** — pushing vanilla HTML/CSS/JS to its limits with 3D transforms, canvas and `IntersectionObserver`
3. **Stand out** — a static-file portfolio that looks and feels like a modern SPA, without a single npm dependency
4. **Share my resume** — with a desktop PDF viewer and a one-tap mobile download button, so every visitor can access it the most convenient way

---

## ⚙️ How to Run

No build step, no dependencies, no npm.

```bash
# Just open the file in any modern browser
open index.html
# — or —
python3 -m http.server 8080
# then visit http://localhost:8080
```

Or visit the **live site** instantly:  
🌐 [https://mrpraveen9608.github.io/MyPortfolio/](https://mrpraveen9608.github.io/MyPortfolio/)

---

## 📁 File Structure

```
MyPortfolio/
├── index.html   ← entire portfolio (HTML + CSS + JS, single file)
└── README.md    ← this file
```

---

## 🔮 Roadmap

- [x] Hero section — 3D floating card, orbiting rings, starfield, resume button
- [x] About section — skills bars, stat cards, hobby card
- [x] Resume — 3D shining button, inline PDF viewer (desktop), mobile download
- [ ] Projects section — Java, C++ & ML showcase
- [ ] Dark/Light mode toggle
- [ ] Contact form backend (email forwarding)
- [ ] Blog / devlog section

---

## 📜 License

© 2025 **K. Praveen** · All rights reserved  
Hayathnagar, Hyderabad, Telangana, India  
No part of this portfolio may be reproduced or distributed without prior written permission.

