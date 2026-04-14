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

**Entry point:** `src/main.tsx` → `src/App.tsx`. The app is a single component with no routing or external data sources.
