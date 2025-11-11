# Agent Guidelines for Astro Sphere

## Build/Lint/Test Commands

- **Dev**: `npm run dev` (or `npm run dev:network` for network access)
- **Build**: `npm run build` (runs `astro check` then `astro build`)
- **Lint**: `npm run lint` or `npm run lint:fix`
- **Preview**: `npm run preview`
- **No test suite configured**

## Code Style

### Imports

- Use `@` path aliases for src imports: `import { cn } from "@lib/utils"`
- Import types with `type` keyword: `import type { Site } from "@types"`
- Group imports: external deps, then Astro/framework, then local with `@` aliases

### TypeScript

- Strict mode enabled (`astro/tsconfigs/strict`) with `strictNullChecks`
- Use explicit types for function params and returns
- Define interfaces/types in `src/types.ts` or with schemas in `src/content/config.ts`
- Use Zod schemas for content collections
- JSX uses Solid.js (`jsxImportSource: "solid-js"`)

### Naming Conventions

- **Constants**: SCREAMING_SNAKE_CASE for exports (e.g., `SITE`, `LINKS`)
- **Functions**: camelCase (e.g., `formatDate`, `readingTime`)
- **Components**: PascalCase files and exports (e.g., `ArrowCard.tsx`, `Header.astro`)
- **Props types**: Named `Props` in component files

### Formatting (Prettier + ESLint)

- **Print width**: 100 characters
- **Quotes**: Double quotes (`singleQuote: false`)
- **Indentation**: 2 spaces (no tabs)
- **Semicolons**: Always use (`semi: true`)
- **Trailing commas**: Always in multiline (`trailingComma: "all"`)
- Prettier auto-formats on save; ESLint has `prettier/prettier` rule disabled
- Plugins: `prettier-plugin-astro`, `prettier-plugin-tailwindcss`

### ESLint Rules

- Base: JS recommended + TypeScript recommended
- Astro: recommended + jsx-a11y-recommended for accessibility
- `no-undef` disabled for Astro (global types like `ImageMetadata`)
- `@typescript-eslint/no-explicit-any` disabled
- Ignores: `dist/**`, `**/*.d.ts`, `.github/`

### Component Patterns

- Astro components for static/server-rendered content
- Solid.js components (`.tsx`) for interactive UI with state
- Use `cn()` utility from `@lib/utils` for conditional Tailwind classes
- Props destructuring in component signatures

### Content & Collections

- Content in `src/content/` organized by collection (blog, projects, work, legal)
- Define schemas in `src/content/config.ts` using Zod
- Use `CollectionEntry<"blog">` type for typed content entries

## Project Structure

- Astro + Solid.js + Tailwind + MDX stack
- Path alias `@*` maps to `src/*`
- Global constants in `src/consts.ts`
- Utility functions in `src/lib/utils.ts`
- Content collections for blog posts, projects, work history, and legal pages
