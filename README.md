# Yousuf Ali — Full-Stack Web Developer Portfolio

A modern, high-performance, and responsive personal portfolio website engineered with **React 19**, **Tailwind CSS v4**, and **Vite**.

Designed for **Yousuf Ali**, Full-Stack Web Developer and Computer Science & Engineering (CSE) undergraduate student at **United International University (UIU)**, Bangladesh.

---

## 🌟 Key Sections & Architecture

- **Navbar**: Glassmorphic header with active section scroll-spy, mobile drawer, and quick resume view.
- **Hero Section**: Personal branding, UIU CSE affiliation, live status badge, GitHub/LinkedIn links, and direct CTA actions.
- **About Me**: Academic journey (Diploma in Computer Technology to B.Sc. in CSE @ UIU), programming interests, security mindset, and personal traits.
- **Technical Skills**: Categorized into 5 distinct areas (Frontend, Backend, Databases, Tools & Platforms, Cybersecurity & Interests).
- **Educational Background**: Timeline of formal qualifications (UIU B.Sc. in CSE + 3-Year Diploma in Computer Technology with GPA 3.48/4.00) and continuous learning focus.
- **Practical Development Journey**: Project leadership and academic lab milestones detailing hands-on work with Next.js, React, state management, and algorithms.
- **Featured Projects & Achievements**:
  1. **Silent Talk — Universal Sign Language** — 🏆 **UIU Hack Day 2026 Champion & Best Idea Award** with Team 405 Found (BDT 5,000 Prize). Universal assistive communication bridging deaf, blind, and non-disabled users (*Live: [cozy-mousse-23d324.netlify.app](https://cozy-mousse-23d324.netlify.app/)*).
  2. **Bazar-Dor** — Bangla daily grocery market price and trend tracker (*Verified Live Deployment: [bazar-dor-three-xi.vercel.app](https://bazar-dor-three-xi.vercel.app)*).
  3. **FitLog** — Dark-themed fitness companion & workout routine planner (*Verified Live Deployment: [assignment-6-yousuf19.vercel.app](https://assignment-6-yousuf19.vercel.app)*).
  4. **Bangla News 24** — Responsive Bangla digital news portal with live breaking news ticker and top-read story rankings.
- **Individual Project Details Pages (`/projects/:id`)**: In-depth breakdowns of each project covering problem statement, target audience, technical architecture, challenges, and future roadmaps.
- **ATS Resume View (`/resume`)**: Dedicated printable resume viewer with print CSS optimizations for clean PDF exporting.
- **Contact Section**: Direct verified email (`yousufali.ya01@gmail.com`), editable phone/WhatsApp placeholders, social links, and interactive message form.
- **Footer**: Brand mark, sitemap navigation, social links, copyright (2026), and back-to-top button.

---

## 🚀 Getting Started Locally

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or yarn

### Installation & Run

```bash
# 1. Clone the repository
git clone https://github.com/yousufali01/practice-portfolio-ejp-14.git
cd practice-portfolio-ejp-14

# 2. Run directly from root (or navigate into frontend/)
npm run dev

# Alternatively, from frontend directory:
cd frontend
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

---

## 🛠️ Verification & Build Commands

```bash
# Run Linter (Oxlint)
npm run lint

# Build for Production
npm run build

# Preview Production Build locally
npm run preview
```

---

## ☁️ Deployment Instructions (Vercel)

### Option A: Via GitHub & Vercel Dashboard (Recommended)
1. Push your repository to your GitHub account: `https://github.com/yousufali01/practice-portfolio-ejp-14`.
2. Go to [vercel.com](https://vercel.com) and log in.
3. Click **"Add New Project"** and select your repository.
4. **Framework Preset**: Vite.
5. **Root Directory**: Select `frontend` (or keep root since `vercel.json` is configured).
6. Click **"Deploy"**. Your live URL will be ready in seconds.

### Option B: Via Vercel CLI
```bash
# Install Vercel CLI globally
npm i -g vercel

# Deploy from frontend folder
cd frontend
vercel --prod
```
