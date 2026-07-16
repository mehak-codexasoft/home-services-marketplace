# Khidma — On-Demand Home Services

A modern, fully responsive **on-demand home services marketplace** built in React for
a UAE service marketplace. Khidma connects customers with verified home
professionals through real-time booking, GPS-based dispatch, live job tracking,
and secure in-app payments.

> Built by **CodexaSoft**.

## ✨ Highlights

- **Marketing site** — hero, challenge/solution narrative, feature grid,
  interactive module tabs (Booking · Providers · Payments · Live Tracking),
  analytics showcase, testimonial & CTA.
- **Interactive operations console** (`/dashboard`) — KPIs, live bookings,
  a real-time dispatch queue you can assign, provider directory, payments,
  ratings & reviews, and revenue analytics.
- **Fully responsive** — refined layouts from large desktop down to mobile.
- **Polished design system** — indigo + coral brand palette, custom SVG icon
  set, scroll-reveal animations, glassmorphism, and accessible motion (respects
  `prefers-reduced-motion`).

## 🧩 Features covered

Real-time service booking · provider availability management · GPS-based
provider assignment · live job status tracking · integrated online payments ·
in-app chat · customer ratings & reviews · earnings dashboard for professionals.

## 🚀 Getting started

```bash
npm install
npm run dev      # start dev server (http://localhost:5173)
npm run build    # production build
npm run preview  # preview the production build
```

## 🛠 Tech stack

- **React 18** + **Vite 5**
- **React Router 6**
- Hand-crafted CSS design system (no UI framework) with Google Fonts
  (Inter + Sora)

## 📦 Deployment

Ships with a `netlify.toml` — build `npm run build`, publish `dist`, with an SPA
redirect so client-side routes work on refresh.

## 📁 Structure

```
src/
├── components/     # Navbar, Hero, Modules, Footer, Icons, useReveal
├── pages/          # Home (marketing), Dashboard (ops console demo)
├── data/content.js # All copy + demo data
├── index.css       # Design system
└── App.jsx
```
