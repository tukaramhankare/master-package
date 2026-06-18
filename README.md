# 🔶 Jarvis Studio — Project Showcase

<div align="center">

![Jarvis Studio Banner](https://img.shields.io/badge/Jarvis%20Studio-Project%20Showcase-D97757?style=for-the-badge&logo=data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHJ4PSI4IiBmaWxsPSIjRDk3NzU3Ii8+PHBhdGggZD0iTTggMjJMMTYgMTBMMjQgMjIiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTEgMThIMjEiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiLz48L3N2Zz4=&labelColor=1A1714)

**A beautiful, responsive web app showcasing 7 live projects — built with Claude UI colors.**

🌐 **[Live Demo → tukaramhankare.github.io/master-package](https://tukaramhankare.github.io/master-package/)**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![No Dependencies](https://img.shields.io/badge/Dependencies-Zero-4A9452?style=flat-square)](.)
[![Responsive](https://img.shields.io/badge/Responsive-All%20Devices-D97757?style=flat-square)](.)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-D97757?style=flat-square&logo=github)](https://tukaramhankare.github.io/master-package/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

<br/>

_Built with purpose, shipped with craft._
<br/>
**Tukaram Hankare** · Farmer · Coder · Web Developer / Designer · Solapur, Maharashtra, India

</div>

---

## 📋 Table of Contents

- [Overview](#-overview)
- [Live Projects](#-live-projects)
- [Features](#-features)
- [Design System](#-design-system)
- [File Structure](#-file-structure)
- [Getting Started](#-getting-started)
- [Responsive Breakpoints](#-responsive-breakpoints)
- [JavaScript Features](#-javascript-features)
- [Color Palette](#-color-palette-claude-ui)
- [Browser Support](#-browser-support)
- [Author](#-author)
- [License](#-license)

---

## 🌟 Overview

**Jarvis Studio** is a fully client-side, zero-dependency project showcase grid app built using the exact **Claude UI color palette** (`#D97757` orange, `#FAF9F6` warm cream, and the full Claude surface/border/text token system). It showcases 7 live web projects built for Indian farming communities, developers, students, and enthusiasts.

🔗 **Live at:** [tukaramhankare.github.io/master-package](https://tukaramhankare.github.io/master-package/)

> **No frameworks. No build tools. No npm. No CDN (except Google Fonts).  
> Just 3 files — drop them in a folder and open `index.html`.**

---

## 🚀 Live Projects

| # | Project | Category | Description | Link |
|---|---------|----------|-------------|------|
| 1 | **ForgeHub** ⭐ | 🔧 Tool | Turn `.html` source files into GitHub-ready repo structures | [forgehublive.wordpress.com](https://forgehublive.wordpress.com/) |
| 2 | **Backpack Emulator** | 🔧 Tool | Browser-based file manager with virtual filesystem & live preview | [backpackemulator.wordpress.com](https://backpackemulator.wordpress.com/) |
| 3 | **Markdown Premium** | 📝 Editor | Premium markdown editor with live preview & multi-format export | [markdownpremium.wordpress.com](https://markdownpremium.wordpress.com/) |
| 4 | **KisaanBill** | 🌿 Farm | Tractor rental invoice builder for Indian farmers — PDF/XLSX/DOCX export | [kisaanbill.wordpress.com](https://kisaanbill.wordpress.com/) |
| 5 | **KisaanBook** | 🌿 Farm | Farm budget & crop lifecycle tracker with Chart.js dashboards | [kisaanbook.wordpress.com](https://kisaanbook.wordpress.com/) |
| 6 | **CryptoPadel Elite** | 💰 Finance | Crypto asset tracking meets padel sports analytics dashboard | [cryptopadelite.wordpress.com](https://cryptopadelite.wordpress.com/) |
| 7 | **EduTrack** | 🎓 Education | Student progress & learning habit tracker — offline-ready PWA | [edutrack.carrd.co](https://edutrack.carrd.co/) |

---

## ✨ Features

### 🎨 Visual Design
- **Claude UI color tokens** — exact palette used throughout (`--claude-orange`, `--claude-bg`, `--claude-surface`, etc.)
- **Animated ambient background blobs** — soft radial gradients that drift gently
- **Card mouse-glow effect** — radial spotlight follows your cursor inside each card
- **Subtle 3D card tilt** — perspective transform on hover (desktop only)
- **Shine sweep animation** — glossy highlight slides across cards on hover
- **Category accent strips** — orange top border for featured, green for farm cards
- **Staggered card reveal** — sequential fade-up animation on page load

### 🌓 Dark / Light Mode
- Toggle button in the header
- Persists to `localStorage` across sessions
- Respects OS-level `prefers-color-scheme` automatically
- Smooth transitions on all color properties

### 🔍 Category Filtering
- Filter by: **All · Tools · Farm · Edu & Finance**
- Live project count badge updates on filter
- Cards re-animate with staggered delay when filter changes
- Keyboard shortcuts: `1` `2` `3` `4` to switch filters instantly

### 📱 Fully Responsive
- **Desktop** — 3-column grid, featured card spans 2 columns
- **Tablet landscape** — 2-column grid
- **Tablet portrait** — 2-column grid, compact header
- **Mobile** — 1-column, fixed bottom nav bar for thumb-friendly filtering
- Typography scales fluidly with `clamp()`

### ⚡ Performance
- Zero JavaScript frameworks
- Zero npm dependencies
- Zero CDN dependencies (except Google Fonts)
- Single `requestAnimationFrame` loop for counters
- `IntersectionObserver` for scroll reveal (progressive enhancement)
- CSS-only animations where possible

---

## 🎨 Design System

### Typography
| Role | Font | Weight |
|------|------|--------|
| Display / Headings | **Syne** | 700, 800 |
| Body / UI | **DM Sans** | 300, 400, 500 |

### Color Palette (Claude UI)
| Token | Light | Dark | Usage |
|-------|-------|------|-------|
| `--bg` | `#FAF9F6` | `#141210` | Page background |
| `--surface` | `#F5F3EE` | `#1E1B18` | Card background |
| `--surface-2` | `#EDEAE3` | `#272320` | Pills, badges |
| `--border` | `#E2DDD6` | `#353028` | All borders |
| `--text` | `#1A1714` | `#F0EDE8` | Primary text |
| `--text-muted` | `#7A7168` | `#7A7168` | Secondary text |
| `--accent` | `#D97757` | `#D97757` | Orange (Claude) |

### Category Colors
| Category | Background | Text (Light) | Text (Dark) |
|----------|-----------|--------------|-------------|
| Tool | `rgba(217,119,87,0.12)` | `#C0614A` | `#E8957A` |
| Farm | `rgba(74,148,82,0.12)` | `#2E7D36` | `#5AB864` |
| Education | `rgba(66,120,190,0.12)` | `#2558A8` | `#6BA4E8` |
| Finance | `rgba(140,100,200,0.12)` | `#6B3FA8` | `#A87AE0` |

---

## 📁 File Structure

```
jarvis-studio/
│
├── index.html      # Semantic HTML structure, all 7 project cards
├── style.css       # Full design system, CSS variables, responsive grid
├── app.js          # Filter, dark mode, glow, tilt, counters, ripple
│
└── README.md       # This file
```

> **That's it.** Three files. No `node_modules`. No `package.json`. No build step.

---

## 🚦 Getting Started

### Option 1 — Open directly
```bash
# Clone the repo
git clone https://github.com/tukaramhankare/master-package.git

# Navigate to folder
cd master-package

# Open in browser
open index.html
# or on Windows:
start index.html
```

### Option 2 — Local dev server (optional)
```bash
# Python 3
python -m http.server 8000

# Node.js (npx, no install needed)
npx serve .

# Then open: http://localhost:8000
```

### Option 3 — GitHub Pages
1. Push to GitHub
2. Go to **Settings → Pages**
3. Set Source to `main` branch, `/ (root)`
4. Your showcase is live at `https://tukaramhankare.github.io/master-package/`

---

## 📐 Responsive Breakpoints

| Breakpoint | Layout | Notes |
|------------|--------|-------|
| `> 1024px` | 3-column grid | Featured card = 2 columns |
| `≤ 1024px` | 2-column grid | Featured card = 2 columns |
| `≤ 768px` | 2-column grid | Compact header, hidden sub-brand |
| `≤ 580px` | 1-column grid | **Bottom nav bar** replaces header nav |
| `≤ 380px` | 1-column grid | Extra compact typography |

---

## 🧠 JavaScript Features

| Feature | Description |
|---------|-------------|
| **Theme Toggle** | Light ↔ Dark, saved to `localStorage`, respects `prefers-color-scheme` |
| **Category Filter** | Filters cards by `data-category`, updates count, re-triggers animations |
| **Keyboard Shortcuts** | `1` All · `2` Tools · `3` Farm · `4` Edu & Fin |
| **Mouse Glow** | Per-card `--mouse-x / --mouse-y` CSS variables driving a radial spotlight |
| **3D Card Tilt** | `perspective(800px) rotateX/Y` on `mousemove`, resets on `mouseleave` |
| **Scroll Reveal** | `IntersectionObserver` triggers card fade-in as they enter viewport |
| **Counter Animation** | Hero stat numbers animate from 0 on page load with ease-out cubic |
| **Ripple Effect** | Click ripple on "Visit Project" buttons — pure DOM, no library |
| **Dynamic Year** | Footer copyright year updates automatically |

---

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome / Edge 88+ | ✅ Full |
| Firefox 85+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Samsung Internet 13+ | ✅ Full |
| Opera 74+ | ✅ Full |

> `backdrop-filter` (glass header) degrades gracefully in unsupported browsers — solid background shown instead.

---

## 👨‍💻 Author

<div align="center">

**Tukaram Hankare**
*Farmer · Coder · Web Developer / Designer*

📍 Solapur, Maharashtra, India
🎓 M.Sc. — Solapur University

[![ForgeHub](https://img.shields.io/badge/ForgeHub-Live-D97757?style=flat-square)](https://forgehublive.wordpress.com/)
[![KisaanBill](https://img.shields.io/badge/KisaanBill-Live-4A9452?style=flat-square)](https://kisaanbill.wordpress.com/)
[![KisaanBook](https://img.shields.io/badge/KisaanBook-Live-4A9452?style=flat-square)](https://kisaanbook.wordpress.com/)
[![EduTrack](https://img.shields.io/badge/EduTrack-Live-4272BE?style=flat-square)](https://edutrack.carrd.co/)
[![Live Showcase](https://img.shields.io/badge/🔶%20Live%20Showcase-master--package-D97757?style=flat-square)](https://tukaramhankare.github.io/master-package/)

</div>

---

## 📄 License

```
Apache License 2.0

Copyright (c) 2026 Tukaram Hankare

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
```

---

<div align="center">

Made with ❤️ in Solapur, Maharashtra 🇮🇳

*Built with purpose, shipped with craft.*

</div>
