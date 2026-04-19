# Chao Phraya Trips - Private & Exclusive River Experience

Welcome to **Chao Phraya Trips**, a premium web application designed for a luxury boat tour service in Bangkok. This project focuses on high-end aesthetics, smooth user experience, and secure architecture.

---

## 🇹🇭 บทสรุปสำหรับนักพัฒนา (Thai Summary)

โปรเจกต์นี้คือเว็บไซต์บริการจองเรือนำเที่ยวแบบส่วนตัว (Private Boat Tour) เน้นความหรูหรา (Luxury) และใช้งานง่าย (User Experience)
- **จุดเด่น**: มีระบบแอนิเมชันที่นุ่มนวล, รองรับหน้าจอมือถืออย่างสมบูรณ์ (Mobile Optimized), และมีการตั้งค่าความปลอดภัยเบื้องต้น (Security Hardened)
- **เทคโนโลยี**: ใช้ Next.js 16 (Turbopack), Tailwind CSS 4, และ Framer Motion (Motion)

---

## 🚀 Tech Stack & Core Libraries

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router + Turbopack)
- **UI & Styling**: [Tailwind CSS 4](https://tailwindcss.com/) - Using modern CSS variables and utility classes.
- **Animations**: [Motion (formerly Framer Motion)](https://motion.dev/) - For high-end scroll-reveal and staggered effects.
- **Icons**: [Lucide React](https://lucide.dev/) - Consistent, clean iconography.
- **Language**: [TypeScript](https://www.typescriptlang.org/) - Ensuring type safety and better developer experience.
- **Font**: Inter (Sans-serif) & Playfair Display (Serif) for that "luxury editorial" look.

---

## ✨ Key Features Implemented

1. **Smart Navigation**: A dynamic navbar that switches from transparent to blurred white on scroll, perfectly fitting the Hero background.
2. **Interactive Fleet & Destinations**:
   - Dynamic routing for tour details (`/destinations/[id]`).
   - "Staggered" reveal animations for cards.
   - Luxury "mini-hero" headers for sub-pages.
3. **Responsive Optimization**:
   - Custom `container-custom` logic for various screen sizes.
   - Specifically optimized for 375px screens (Standard mobile width).
4. **Integrated Map Section**: Switching between different pier locations (Talat Phlu / BTS Wutthakat) with smooth indicators.
5. **Contact Hub**: Pre-configured links for WhatsApp, LINE, and WeChat, ready for professional use.

---

## 🛡️ Security Hardening

This project follows security best practices:
- **Security Headers**: Added to `next.config.ts` (`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, etc.).
- **Environment Management**: Includes `.env.example` to prevent hardcoding contact details in the source.
- **Remote Image Safety**: Configured `remotePatterns` for secure external image loading.
- **Dependency Audit**: All packages are updated to the latest secure versions as of April 2026.

---

## 🛠️ How to Get Started

### 1. Installation
```bash
npm install
# or
yarn install
```

### 2. Setup Environment Variables
Copy `.env.example` to `.env` and fill in your actual contact details:
```bash
cp .env.example .env
```

### 3. Running Locally
```bash
npm run dev
```

### 4. Building for Production
```bash
npm run build
npm start
```

---

## 📂 Project Structure Guide

- `/src/app`: Next.js App Router (Pages, Layouts, and dynamic routes).
- `/src/components`: Reusable UI components (Navbar, Hero, Fleet, Gallery, etc.).
- `/src/constants`: All static data and animation configurations.
  - `data.ts`: Central source for Fleet, Tours, and Destinations.
  - `animations.ts`: Reusable Motion variants.
- `/src/app/globals.css`: Tailwind `@theme` configurations and custom class-based components.

---

## 💡 Note for Future Developers

- **Adding a New Boat**: Simply add a new object to the `fleet` array in `src/constants/data.ts`.
- **Adding a New Tour**: Update the `allDestinations` array in `src/constants/data.ts`. The detail page will automatically generate for the new ID.
- **Animations**: Use the `fadeInUp` and `staggerContainer` variants from `src/constants/animations.ts` for consistent reveal effects.

---

## 🛥️ License
© 2026 Chao Phraya Trips - Private & Exclusive. All Rights Reserved.
