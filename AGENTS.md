# Agent Guidelines

## Commands

- **Dev**: `npm run dev` | **Build**: `npm run build` (runs type check + build) | **Lint**: `npm run lint:fix` | **Format**: `npm run format:fix`
- **No test suite configured**

## Code Style

- **Stack**: Astro + Solid.js (`.tsx` for interactive components) + Tailwind + MDX
- **Imports**: Use `@` path alias (`import { cn } from "@lib/utils"`), import types with `type` keyword (`import type { Site } from "@types"`), group: external → framework → local
- **TypeScript**: Strict mode + `strictNullChecks`, explicit types for params/returns, define types in `src/types.ts` or Zod schemas in `src/content/config.ts`
- **Naming**: SCREAMING_SNAKE_CASE for constants (e.g., `SITE`, `LINKS`), camelCase for functions, PascalCase for components, `Props` suffix for component prop types
- **Formatting**: 2 spaces, double quotes, semicolons always, trailing commas in multiline, 100 char line width
- **Components**: Astro for static (`.astro`), Solid.js for interactive (`.tsx`), use `cn()` from `@lib/utils` for conditional Tailwind classes, destructure props in function signatures
- **Content**: Collections in `src/content/` (blog, projects, legal) with Zod schemas, use `CollectionEntry<"blog">` type for content entries

## Project Structure

- Path alias: `@*` → `src/*` | Constants: `src/consts.ts` | Utils: `src/lib/utils.ts`
- ESLint: `no-undef` and `@typescript-eslint/no-explicit-any` disabled for Astro files, `@typescript-eslint/no-unused-expressions` disabled for `public/js/**`
- Ignores: `dist/**`, `**/*.d.ts`, `.github/`, `**/*.mdx` (MDX frontmatter)
