# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
bun dev          # Start dev server
bun build        # Production build
bun start        # Start production server
bun lint         # Biome check (lint)
bun format       # Biome format --write
```

No test suite is configured.

## Architecture

**Next.js 16.2.1** with App Router, React 19, TypeScript (strict), Tailwind CSS v4, Biome for linting/formatting. Package manager is **Bun**.

- `app/` — App Router root. `layout.tsx` sets up Geist fonts and root HTML. `page.tsx` is the home page.
- `app/globals.css` — Tailwind v4 via `@import "tailwindcss"`, plus CSS custom properties for light/dark theme and font variables.
- `@/*` path alias maps to the project root.
- Biome config (`biome.json`) enforces 2-space indentation, recommended rules, and automatic import organization.
- No components directory yet — project is fresh boilerplate.
