# Portfolio — Project Documentation

**Author:** Prashant Singh
**Stack:** Next.js 14 · React 18 · TypeScript · Tailwind CSS · Framer Motion · Zustand
**Live:** https://prashantsinghmangat.netlify.app

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Getting Started](#2-getting-started)
3. [Directory Structure](#3-directory-structure)
4. [Design System](#4-design-system)
5. [Data Layer](#5-data-layer)
6. [Components](#6-components)
7. [Animation Patterns](#7-animation-patterns)
8. [State Management](#8-state-management)
9. [SEO & Metadata](#9-seo--metadata)
10. [Performance](#10-performance)
11. [How to Update Content](#11-how-to-update-content)

---

## 1. Project Overview

A modern single-page portfolio built with Next.js 14 App Router. It showcases:

- Personal projects (open-source, GitHub-linked)
- Industry & client work (professional, live URLs only)
- Skills with proficiency levels
- Work experience timeline
- GitHub contribution heatmap
- Interactive terminal emulator
- npm package showcase (tracebug-sdk)

All content lives in a single data file — no CMS, no API calls required.

---

## 2. Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run type-check

# Lint
npm run lint
```

Visit `http://localhost:3000`

---

## 3. Directory Structure

```
portfolio/
├── src/
│   ├── app/                        # Next.js App Router
│   │   ├── layout.tsx              # Root layout — SEO, JSON-LD, global wrappers
│   │   ├── page.tsx                # Home page — assembles all sections
│   │   ├── globals.css             # Global styles, CSS tokens, scrollbar, syntax colors
│   │   ├── not-found.tsx           # 404 page
│   │   ├── robots.ts               # Auto-generated robots.txt
│   │   └── sitemap.ts              # Auto-generated sitemap.xml
│   │
│   ├── components/
│   │   ├── animations/
│   │   │   ├── SectionReveal.tsx   # Scroll-triggered reveal + StaggerContainer/StaggerItem
│   │   │   ├── PageTransition.tsx  # Page enter/exit animation
│   │   │   ├── ParticleCanvas.tsx  # Canvas particle system (Hero background)
│   │   │   └── StarFieldCanvas.tsx # Canvas twinkling stars (Skills background)
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.tsx          # Fixed nav, scroll progress bar, mobile menu
│   │   │   └── Footer.tsx          # Copyright and credits
│   │   │
│   │   ├── sections/               # One component per page section
│   │   │   ├── HeroSection.tsx
│   │   │   ├── TerminalSection.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── SkillGalaxySection.tsx
│   │   │   ├── ExperienceSection.tsx
│   │   │   ├── ProjectsSection.tsx
│   │   │   ├── OpenSourceSection.tsx
│   │   │   ├── GithubSection.tsx
│   │   │   └── ContactSection.tsx
│   │   │
│   │   └── ui/
│   │       ├── CustomCursor.tsx    # Dot + spring ring cursor
│   │       └── MagneticButton.tsx  # Mouse-attracted button wrapper
│   │
│   ├── hooks/
│   │   ├── useScrollProgress.ts    # Scroll % + active section ID
│   │   ├── useMousePosition.ts     # Real-time mouse x/y
│   │   └── useMagneticEffect.ts    # Magnetic button logic as hook
│   │
│   ├── store/
│   │   └── uiStore.ts              # Zustand store (cursor, nav, terminal state)
│   │
│   ├── lib/
│   │   └── github.ts               # Contribution heatmap generator + color mapper
│   │
│   └── data/
│       └── portfolio.ts            # ALL content — projects, skills, experience, stats
│
├── tailwind.config.ts              # Design system — colors, fonts, animations
├── next.config.mjs                 # Image optimization, package imports
├── tsconfig.json                   # TypeScript config, path alias @/*
└── postcss.config.js               # Tailwind + Autoprefixer pipeline
```

---

## 4. Design System

### Colors

Defined in `tailwind.config.ts` and used as CSS custom properties in `globals.css`.

| Token | Value | Usage |
|---|---|---|
| `accent` | `#7c6cfc` | Primary purple — buttons, cursor, highlights |
| `accent2` | `#a78bfa` | Lighter purple — hover states |
| `bg` | `#050509` | Primary dark background |
| `bg2` | `#0a0a12` | Secondary background |
| Cyan | `#22d3ee` | Secondary accent — skill tags, particle lines |
| Green | `#4ade80` | Success, availability indicator |
| Violet | Various | Industry project cards |

### Typography

| Font | Family | Usage |
|---|---|---|
| `font-display` | Syne | Section headings, hero name |
| `font-sans` | Space Grotesk | Body text, descriptions |
| `font-mono` | JetBrains Mono | Code, terminal, labels, tags |

### Custom Tailwind Animations

| Class | Duration | Effect |
|---|---|---|
| `animate-float` | 6s | Vertical bobbing — floating tech labels |
| `animate-glow` | 2s | Box shadow pulse |
| `animate-pulse-slow` | 3s | Opacity pulse — availability dot |
| `animate-spin-slow` | 20s | Slow rotation — OpenSource section BG |

### Utility Classes (globals.css)

```css
.glass          /* backdrop-blur + semi-transparent bg */
.text-gradient-accent   /* purple → cyan gradient text */
.code-kw        /* keyword highlight color */
.code-str       /* string highlight color */
.code-fn        /* function highlight color */
.code-comment   /* comment color */
```

---

## 5. Data Layer

### File: `src/data/portfolio.ts`

**Single source of truth.** Edit this file to update any portfolio content.

### Interfaces

```typescript
interface Skill {
  name: string;
  icon: string;       // emoji
  years: string;      // "5+"
  level: number;      // 0-100 for progress bar
  category: "frontend" | "backend" | "tools";
}

interface Experience {
  period: string;     // "2022 — Present"
  role: string;
  company: string;
  color: string;      // hex, used for timeline dot
  points: string[];   // achievement bullets
  tags: string[];     // tech tags
}

interface Project {
  title: string;
  description: string;
  emoji: string;
  gradient: string;   // tailwind gradient classes
  stack: string[];
  github: string;     // use "#" if no GitHub
  live: string;       // use "#" if not deployed
  featured: boolean;  // shows "Featured" badge
}

interface IndustryProject {
  title: string;
  description: string;
  emoji: string;
  gradient: string;
  stack: string[];
  live: string;       // URL only, no GitHub (private repos)
  category: string;   // "Enterprise SaaS", "Healthcare", etc.
}
```

### Exports

| Export | Type | Used by |
|---|---|---|
| `personalInfo` | object | HeroSection, ContactSection |
| `skills` | `Skill[]` | SkillGalaxySection, TerminalSection |
| `experiences` | `Experience[]` | ExperienceSection, TerminalSection |
| `projects` | `Project[]` | ProjectsSection, TerminalSection |
| `industryProjects` | `IndustryProject[]` | ProjectsSection |
| `terminalCommands` | Record | TerminalSection |
| `githubStats` | object | GithubSection |
| `featuredRepos` | array | GithubSection |

---

## 6. Components

### Layout

#### `Navbar.tsx`
- Fixed at top with `backdrop-blur` when scrolled
- Scroll progress bar (gradient: accent → cyan) using `useScrollProgress`
- Mobile hamburger menu with `AnimatePresence`
- Smooth scroll to section anchors on link click
- Shows "Available" status badge

#### `Footer.tsx`
- Static. Shows copyright year + tech stack credits.

---

### Sections (in page order)

#### `HeroSection.tsx`
- `ParticleCanvas` as background
- Typing animation — cycles through `personalInfo.typingStrings`
- Count-up stats using `IntersectionObserver` + `requestAnimationFrame`
- Floating tech labels with `animate-float`
- CTA buttons wrapped in `MagneticButton`

#### `TerminalSection.tsx`
- Interactive terminal UI
- Command input with keyboard history (↑ ↓ arrows)
- Commands: `about`, `projects`, `skills`, `experience`, `contact`, `help`, `clear`
- Output lines typed by `type`: `success | info | warn | error | header | normal`
- Quick-access suggestion buttons

#### `AboutSection.tsx`
- VSCode-style IDE with 3 tabs: `about.ts`, `skills.ts`, `philosophy.ts`
- File explorer sidebar, line numbers, status bar
- `AnimatePresence` for tab content transitions
- HTML-based syntax highlighting via span classes

#### `SkillGalaxySection.tsx`
- `StarFieldCanvas` as background
- Category filter: All / Frontend / Backend / Tools
- Cards with animated progress bars (`whileInView`)
- Hover: card lifts with glow

#### `ExperienceSection.tsx`
- Vertical timeline with scroll-driven animated line
- `useScroll` + `useTransform` → `scaleY` animation on the line
- Color-coded timeline dots per company
- Cards animate in from left with `SectionReveal direction="left"`

#### `ProjectsSection.tsx`
- **Section 1 — Personal Projects:** 8 cards from `projects[]`
  - Featured badge on top 3
  - Links: GitHub (Code) + Live Demo
- **Section 2 — Industry & Client Work:** 7 cards from `industryProjects[]`
  - "Industry" badge + category label
  - Violet color theme
  - Link: Visit Site (no GitHub — proprietary code)
- Both card types use 3D mouse-tracking rotation (±18°, spring physics)

#### `OpenSourceSection.tsx`
- Showcases `tracebug-sdk` npm package
- Copy-to-clipboard for install command
- Animated code snippet with staggered line reveal
- Link to npm registry

#### `GithubSection.tsx`
- Stats grid: contributions, repos, stars, PRs
- 52-week contribution heatmap (generated by `lib/github.ts`)
- Featured repos with language, stars, forks
- Color intensity: zinc-800 → violet-900 → violet-500 → violet-400

#### `ContactSection.tsx`
- GitHub, LinkedIn, Email, npm contact links
- Each wrapped in `MagneticButton`
- Pinging availability dot animation

---

### Animations

#### `SectionReveal.tsx`
Three exported components:

```tsx
// Reveals section when scrolled into view
<SectionReveal direction="up | left | right | none" delay={0}>
  ...
</SectionReveal>

// Parent that staggers children
<StaggerContainer stagger={0.1} className="...">
  ...
</StaggerContainer>

// Child item in a stagger group
<StaggerItem>
  ...
</StaggerItem>
```

Trigger: `IntersectionObserver` at `-80px` root margin.

#### `PageTransition.tsx`
Wraps page content. Entry: `opacity 0→1, y: 20→0`. Exit: `y: 0→-20`.

#### `ParticleCanvas.tsx`
Canvas-based. ~150 particles with bounce physics. Draws connection lines for particles within 110px. Colors: accent purple + cyan.

#### `StarFieldCanvas.tsx`
Canvas-based. ~200 stars with sine-wave twinkling. White color, variable alpha.

---

### UI

#### `CustomCursor.tsx`
Replaces native cursor (hidden via `cursor: none` in globals.css).
- Small dot: instant tracking
- Larger ring: spring physics (`damping: 35, stiffness: 200`)
- Disabled on touch devices (`pointer: coarse`)

#### `MagneticButton.tsx`
Wraps any element. On mouse enter, the element is attracted toward the cursor.
```tsx
<MagneticButton strength={0.4}>
  <button>Click me</button>
</MagneticButton>
```

---

## 7. Animation Patterns

### Scroll-triggered reveal
```
IntersectionObserver (margin: -80px)
  → when visible: opacity 0→1, y: 40→0
  → duration: 0.6s, easing: default
```

### 3D card tilt
```
onMouseMove → offset from card center
  → rotateX = (offsetY / halfHeight) × -18
  → rotateY = (offsetX / halfWidth) × 18
Spring: stiffness 200, damping 20
onMouseLeave → rotateX: 0, rotateY: 0
```

### Magnetic button
```
onMouseMove → delta from button center × strength (0.4)
  → x, y spring (damping 20, stiffness 300)
onMouseLeave → x: 0, y: 0
onClick → scale: 0.96
```

### Scroll-driven timeline line
```
useScroll({ target: sectionRef })
useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  → applied to scaleY of the timeline line element
```

### Canvas particle system
```
requestAnimationFrame loop:
  1. Clear canvas
  2. Move particles (add velocity, bounce at edges)
  3. Draw connection lines if distance < 110px
  4. Draw particles
```

---

## 8. State Management

### Zustand Store (`uiStore.ts`)

```typescript
{
  cursorVariant: "default" | "hover" | "click",
  activeSection: string,
  navOpen: boolean,
  terminalHistory: TerminalEntry[]
}
```

Actions: `setCursorVariant`, `setActiveSection`, `setNavOpen`, `addTerminalEntry`, `clearTerminal`

> Currently defined but not wired up — local `useState` is used in components directly. The store is ready for future integration.

### Local state (preferred pattern)

| Component | State |
|---|---|
| Navbar | `scrolled`, `mobileOpen` |
| AboutSection | `activeTab` |
| SkillGalaxySection | `activeCategory` |
| TerminalSection | `input`, `history`, `cmdHistory`, `historyIndex` |
| ProjectSection cards | `rotation { x, y }` |

---

## 9. SEO & Metadata

Configured in `src/app/layout.tsx`.

### JSON-LD Schemas
- `Person` — name, jobTitle, URL, social links, skills
- `WebSite` — site name, author, URL
- `BreadcrumbList` — home entry

### Open Graph
```
og:title, og:description, og:image (1200×630)
og:url, og:type: website
```

### Twitter Card
```
twitter:card: summary_large_image
twitter:title, twitter:description, twitter:image
```

### Robots & Sitemap
- `robots.ts` — allows all crawlers, points to sitemap
- `sitemap.ts` — home page, priority 1.0, monthly change frequency

---

## 10. Performance

| Optimization | Where |
|---|---|
| WebP image format | `next.config.mjs` |
| `optimizePackageImports` | lucide-react, framer-motion |
| Canvas rendering (not DOM) | Particles, stars |
| Passive scroll listeners | `useScrollProgress`, `useMousePosition` |
| IntersectionObserver | SectionReveal, skill progress bars |
| `useMotionValue` + `useSpring` | Cursor, magnetic buttons (no React re-render) |
| Responsive particle count | `ParticleCanvas`, `StarFieldCanvas` |

---

## 11. How to Update Content

### Add / edit a personal project
Edit `src/data/portfolio.ts` → `projects` array:

```typescript
{
  title: "My Project",
  description: "What it does.",
  emoji: "🚀",
  gradient: "from-purple-900 to-indigo-900",
  stack: ["React", "TypeScript"],
  github: "https://github.com/username/repo",
  live: "https://myproject.netlify.app/",
  featured: false,   // true = shows "Featured" badge
}
```

Available gradients (Tailwind): `from-{color}-900 to-{color}-900`

### Add / edit an industry project
Edit `src/data/portfolio.ts` → `industryProjects` array:

```typescript
{
  title: "Client Platform",
  description: "What it does.",
  emoji: "🏢",
  gradient: "from-blue-900 to-cyan-900",
  stack: ["Angular", "TypeScript"],
  live: "https://client-site.com/",
  category: "Enterprise SaaS",
}
```

### Add a skill
Edit `src/data/portfolio.ts` → `skills` array:

```typescript
{ name: "Redis", icon: "🔴", years: "2+", level: 75, category: "backend" }
```

### Add work experience
Edit `src/data/portfolio.ts` → `experiences` array:

```typescript
{
  period: "2024 — Present",
  role: "Lead Engineer",
  company: "Company Name",
  color: "#7c6cfc",   // timeline dot color
  points: ["Achievement one", "Achievement two"],
  tags: ["React", "TypeScript"],
}
```

### Update GitHub stats
Edit `src/data/portfolio.ts` → `githubStats`:

```typescript
export const githubStats = {
  contributions: 950,
  repositories: 38,
  stars: 180,
  prs: 45,
};
```

### Update featured repos
Edit `src/data/portfolio.ts` → `featuredRepos` array.

### Update terminal commands
Edit `src/data/portfolio.ts` → `terminalCommands` object. Each command has a `lines` array with `{ text, type }` objects. Types: `success | info | warn | error | header | normal`.

### Update personal info / links
Edit `src/data/portfolio.ts` → `personalInfo` object (name, title, email, GitHub, LinkedIn, npm, etc).

---

## Page Section Order

```
/ (home)
├── #hero          HeroSection
├── #terminal      TerminalSection
├── #about         AboutSection
├── #skills        SkillGalaxySection
├── #experience    ExperienceSection
├── #projects      ProjectsSection  (personal + industry)
├── #opensource    OpenSourceSection
├── #github        GithubSection
└── #contact       ContactSection
```
