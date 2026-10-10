# ☀️ Sunny Steps Preschool (SUNSTEP)

> A vibrant, playful, and responsive web application for **Sunny Steps Preschool**, built with **React + Vite**. Crafted with an authentic, child-friendly design system inspired by modern preschool aesthetics — warm cream tones, lively accents, zero harsh strokes, and interactive features.

---

## 🌟 Live Features & Highlights

### 1. 🧭 Seamless 5-Page Navigation (`react-router-dom`)
- **Home (`/`)**: 
  - Hero section featuring an authentic 4-photo preschool collage (1 top panorama + 3 bottom squares).
  - About our philosophy, campus overview, and interactive program highlights.
  - 6 real facility cards (Sensory Play, Smart Learning, Safe Outdoor Greens, CCTV Security, Child-Friendly Dining, Health & Hygiene).
  - Parent testimonials and direct admissions CTA.
- **Programs (`/program`)**:
  - Full early-childhood developmental ladder: **Playgroup**, **Nursery**, **Junior KG**, and **Senior KG**.
  - Age criteria, curriculum focus, daily learning routines, and key milestones.
  - Interactive **"Enquire for [Program]"** CTAs that dynamically prefill the Contact Us form via URL query params (`/contact?program=nursery`).
- **Gallery (`/gallery`)**:
  - 6 special weekly activity showcases (Art & Craft, Story Time, Music & Movement, Outdoor Exploration, Sand & Sensory, Festival Celebrations).
  - **Dynamic Photo Wall (Masonry Grid)** with interactive photo cards, hover caption overlays, and responsive columns.
  - **✨ Interactive "Add Your Photo" Community Feature**:
    - Upload images directly from your device (phone/computer) or paste any image URL.
    - Automated client-side HTML5 Canvas compression (max 1200px, 85% JPEG) to prevent storage quota issues and keep loading instant.
    - Custom title, subtitle, and card aspect toggle (*Standard 290px* vs *Tall Portrait 370px*).
    - **Works 100% after deployment** with zero backend required via `localStorage` persistence.
    - Integrated delete button (`✕`) for removing custom-uploaded memories.
- **Our Team (`/team`)**:
  - Faculty showcases, core pedagogical values, 1:8 student-teacher ratio highlights, certifications, and caring teacher profiles.
- **Contact Us (`/contact`)**:
  - Complete admissions enquiry form with validation and instant confirmation toast.
  - Pre-selected program dropdown when arriving from program cards.
  - Campus timings, admission helpline (+91 98765 43210), email, and location details.

---

### 2. 🎨 Design System & Visual Polish
- **Color Palette**:
  - Warm Canvas: `#FFFDF9` (Natural soft cream)
  - Secondary Canvas: `#F8F3ED` & `#FFF7EB`
  - Deep Royal Purple: `#641C8C` / `#471066`
  - Playful Warm Orange: `#FF5100` / `#D6341A`
  - Cheerful Sun Yellow: `#FEC200`
  - Lagoon Emerald: `#00A896` / `#198754`
- **Typography**:
  - Headings: `Fredoka` (Rounded, friendly, approachable)
  - Body: `Plus Jakarta Sans` (Clean, legible, modern)
- **Authentic Visuals**:
  - 100% real preschool classroom, craft, and playground imagery.
  - Static subtle doodle elements (stars, circles, clean accents) with zero distracting animations.
  - Official vector logo lockup (`/SUNSTEP.svg`) in Navbar and Footer.
  - Custom vector sun favicon (`/favicon.svg`).

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** | Modern UI component architecture |
| **Vite 6** | Ultra-fast build tool and local dev server |
| **React Router v7** | Client-side routing with query param state passing |
| **Vanilla CSS** | Modular custom design tokens, fluid layouts, and responsive media queries |
| **HTML5 Canvas API** | In-browser client-side image resizing and compression |
| **LocalStorage API** | Offline & post-deployment user photo persistence |
| **Oxlint** | High-performance linter ensuring clean and error-free code |

---

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Installation
Clone or navigate to the project directory:
```bash
cd sunstep
npm install
```

### 2. Start Development Server
```bash
npm run dev
```
Open your browser and navigate to the local URL (typically `http://localhost:5173` or `http://localhost:5174`).

### 3. Production Build
To create an optimized production build:
```bash
npm run build
```
The output will be placed in the `dist/` directory ready for deployment.

### 4. Preview Production Build
```bash
npm run preview
```

### 5. Lint Check
```bash
npm run lint
```

---

## 📂 Project Structure

```text
sunstep/
├── public/
│   ├── SUNSTEP.svg       # Official vector brand logo
│   ├── favicon.svg       # Custom browser tab icon
│   └── icons.svg         # SVG sprite utilities
├── src/
│   ├── assets/           # Static asset files
│   ├── components/       # Global shared components
│   │   ├── Navbar.jsx    # Sticky navigation with mobile drawer & SUNSTEP logo
│   │   ├── Navbar.css
│   │   ├── Footer.jsx    # Multi-column footer with quick links, contacts, socials
│   │   └── Footer.css
│   ├── Pages/            # Main application views
│   │   ├── Home.jsx      # Hero collage, about, facilities, reviews
│   │   ├── Home.css
│   │   ├── Program.jsx   # Playgroup to Sr. KG curriculums & routines
│   │   ├── Program.css
│   │   ├── Gallery.jsx   # Activities & Masonry wall with Add Photo feature
│   │   ├── Gallery.css
│   │   ├── Team.jsx      # Educators, leadership & values
│   │   ├── Team.css
│   │   ├── ContactUs.jsx # Interactive admissions form & campus info
│   │   └── ContactUs.css
│   ├── App.jsx           # Root layout & route configuration
│   ├── main.jsx          # React DOM entry point
│   └── index.css         # Global design tokens, typography, utilities & resets
├── index.html            # HTML entry point with favicon and Google Fonts
├── package.json          # Dependencies and scripts
└── vite.config.js        # Vite build configuration
```
