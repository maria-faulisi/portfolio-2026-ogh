# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # Start Vite dev server (http://localhost:5173)
npm run build     # TypeScript check + Vite production build
npm run lint      # Run ESLint
npm run preview   # Preview the production build locally
```

There are no test commands in this project — tests live in the OrangeHueGlad design system library (`../OrangeHueGlad`).

## Architecture

This is a minimal React 19 + TypeScript + Vite SPA that serves as a showcase/consumer of the `@mariafaulisi/ohg` design system.

**Dependency relationship:** The design system (`../OrangeHueGlad`) is referenced as a local `file:` dependency. Changes to the design system require rebuilding it before they appear here.

**Styling:** `src/index.css` holds global CSS custom properties (colors, fonts, spacing) with light/dark mode via `prefers-color-scheme`. Component styles use CSS nesting in `src/App.css`. Design tokens from the OHG library use the `--ohg-*` prefix.

**Routing:** React Router v7 (`react-router-dom`) with `BrowserRouter` in `src/main.tsx`. `src/App.tsx` is the layout shell (header, back-link, footer) with `<Routes>` defined inline. Pages live in `src/pages/`, case study components in `src/case-studies/`.

**Entry point:** `src/main.tsx` → `src/App.tsx` (layout + routes) → page/case-study components.

**Route map:**
- `/` → `src/pages/Home.tsx`
- `/design-systems/allstate` → `src/case-studies/DesignSystemsAllstate.tsx`
- `/design-systems/harvest` → `src/case-studies/DesignSystemsHarvest.tsx`
- `/design-systems/panduit` → `src/case-studies/DesignSystemsPanduit.tsx`
- `/design/allstate` → `src/case-studies/DesignAllstate.tsx`
- `/design/harvest` → `src/case-studies/DesignHarvest.tsx`
- `/design/panduit` → `src/case-studies/DesignPanduit.tsx`

## Code style

- **React components use arrow functions:** `const Foo = () => { ... }`, not `function Foo() { ... }`
