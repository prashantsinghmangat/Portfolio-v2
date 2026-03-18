# Prashant Singh Portfolio

Modern personal portfolio built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Project Context

This website is a production-style developer portfolio designed to present:

- Professional profile and positioning
- Technical skills and experience timeline
- Featured projects and open-source work
- GitHub activity and social/contact channels

The implementation combines strong visual identity, animation-driven storytelling, and SEO-focused metadata.

## Tech Stack

- Framework: Next.js 14 (App Router)
- Language: TypeScript (strict mode)
- UI: React 18 + Tailwind CSS
- Motion/interaction: Framer Motion
- Icons: Lucide React
- State package available: Zustand

## How This Website Is Created

The site follows a component-driven architecture with content separated from presentation:

- App shell and SEO setup in `src/app/layout.tsx`
- Home page composition in `src/app/page.tsx`
- Section-level UI inside `src/components/sections/*`
- Shared layout and reusable UI in `src/components/layout/*` and `src/components/ui/*`
- Reusable animation primitives in `src/components/animations/*`
- Portfolio data and typed models in `src/data/portfolio.ts`
- Utility helpers in `src/lib/*`

This structure makes updates easy: edit data for content changes, or edit section components for visual/behavior changes.

## What Has Been Implemented

### 1. Full One-Page Portfolio Flow

Sections currently implemented on the home page:

- Hero
- Interactive terminal
- About (VS Code style tabbed code view)
- Skill Galaxy
- Experience timeline
- Projects grid
- Open-source spotlight
- GitHub activity
- Contact CTA
- Footer

### 2. Interactive Hero Experience

- Particle canvas background with animated linking particles
- Typing headline animation
- Count-up stats triggered by intersection observer
- Magnetic CTA buttons
- Floating tech labels with motion

### 3. Developer Terminal Section

- Real command simulation with command parsing
- Built-in commands: about, projects, skills, experience, contact, help, clear
- Keyboard history navigation (arrow up/down)
- Error message for unknown commands

### 4. About Section in IDE Style

- VS Code inspired layout with tabs and file explorer
- Animated tab switching using Framer Motion
- Syntax-highlighted pseudo-code blocks for profile, skills, philosophy

### 5. Skill Galaxy

- Category filters (all, frontend, backend, tools)
- Skill cards with animated progress bars
- Decorative starfield canvas background

### 6. Experience Timeline

- Scroll-driven animated vertical timeline
- Role cards with achievements and technology tags
- Motion reveal and hover micro-interactions

### 7. Projects Showcase

- Card-based project grid with tilt-style mouse interaction
- Gradient thumbnails and featured badges
- Source and live links per project

### 8. Open Source Spotlight

- Dedicated tracebug-sdk showcase panel
- Copy-to-clipboard install command
- Animated code snippet reveal
- npm outbound link

### 9. GitHub Activity Section

- Stats cards (contributions, repos, stars, PRs)
- Synthetic contribution heatmap generator (`src/lib/github.ts`)
- Featured repository cards with language, stars, forks

### 10. Contact and Conversion Area

- Multi-channel contact buttons (GitHub, LinkedIn, Email, npm)
- Availability badge for hiring signal
- Bold headline CTA for collaboration

### 11. Global UX and Motion System

- Page-level fade/slide transition wrapper
- Section reveal and stagger utilities
- Custom cursor for non-touch devices
- Magnetic button interactions
- Scroll progress bar in navbar
- Responsive mobile menu with animated entry

### 12. Design System and Styling

- Tailwind theme extensions for fonts, colors, animations
- Global CSS custom properties for color tokens
- Gradient text utilities and glassmorphism helper
- Custom syntax highlighting classes for code-like sections

### 13. SEO, Metadata, and Discoverability

- Rich Next metadata setup (Open Graph, Twitter, canonical, robots)
- Structured data JSON-LD for Person, WebSite, Breadcrumb
- Dynamic sitemap route (`src/app/sitemap.ts`)
- Robots route (`src/app/robots.ts`)
- Semantic page structure with schema item props on main content

### 14. Quality-Oriented Setup

- Strict TypeScript configuration
- Package import optimization for framer-motion and lucide-react
- npm scripts for dev/build/start/lint/type-check

## Current Data Model

Typed content is centralized in `src/data/portfolio.ts` and includes:

- Personal info and hero stats
- Skills with level/category metadata
- Experience timeline entries
- Projects list
- Terminal command output definitions
- GitHub stats and featured repos

## Run Locally

Install and start development server:

```bash
npm install
npm run dev
```

Build and run production mode:

```bash
npm run build
npm run start
```

Type-check and lint:

```bash
npm run type-check
npm run lint
```

## Summary

This project is a highly interactive, animation-rich, SEO-ready Next.js portfolio with reusable architecture, typed content modeling, and a strong frontend engineering showcase.