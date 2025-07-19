---
description: Repository Information Overview
alwaysApply: true
---

# Aviation Marketing Information

## Summary
This is a Next.js project for an aviation marketing website. The application is built using React and Next.js, with a component-based architecture. It features various sections including Hero, Services, About, Portfolio, and Contact sections.

## Structure
- **app/**: Main application code with page components and layout
  - **components/**: Reusable UI components
  - **globals.css**: Global CSS styles
- **public/**: Static assets
- **.next/**: Build output (generated)

## Language & Runtime
**Language**: JavaScript
**Framework**: Next.js 15.3.4
**React Version**: 19.0.0
**Build System**: Next.js build system with Turbopack
**Package Manager**: npm

## Dependencies
**Main Dependencies**:
- react: ^19.0.0
- react-dom: ^19.0.0
- next: 15.3.4

**Development Dependencies**:
- tailwindcss: ^4
- @tailwindcss/postcss: ^4
- eslint: ^9
- eslint-config-next: 15.3.4
- @eslint/eslintrc: ^3

## Build & Installation
```bash
# Install dependencies
npm install

# Development server with Turbopack
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

## Main Files & Resources
**Entry Point**: app/page.js
**Layout**: app/layout.js
**Component Structure**:
- Navbar
- HeroSection
- ServicesSection
- AboutSection
- PortfolioSection
- ContactSection
- Footer

## Configuration
**Next.js Config**: next.config.mjs (minimal configuration)
**PostCSS Config**: postcss.config.mjs (configured for Tailwind CSS)
**JS Config**: jsconfig.json
**ESLint Config**: eslint.config.mjs