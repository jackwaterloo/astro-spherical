import { defineConfig } from "eslint/config";
import globals from "globals";
import js from "@eslint/js";
import tseslint from "typescript-eslint";
import astro from "eslint-plugin-astro";
import prettier from "eslint-plugin-prettier";

// parsers
const tsParser = tseslint.parser;
const astroParser = astro.parser;

export default defineConfig([
  // Global configuration
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },

  // Base configs
  js.configs.recommended,
  tseslint.configs.recommended,

  // Prettier config
  {
    plugins: {
      prettier: prettier,
    },
    rules: {
      // disable warnings, since prettier should format on save
      "prettier/prettier": "off",
    },
  },

  // TypeScript and TSX files (Solid.js components)
  {
    files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: "latest",
        jsx: true,
        jsxImportSource: "solid-js",
      },
    },
  },

  // astro setup with a11y
  astro.configs.recommended,
  astro.configs["jsx-a11y-recommended"],
  {
    files: ["**/*.astro"],
    languageOptions: {
      parser: astroParser,
      parserOptions: {
        parser: tsParser,
        extraFileExtensions: [".astro"],
        sourceType: "module",
        ecmaVersion: "latest",
        project: "./tsconfig.json",
      },
    },
    rules: {
      "no-undef": "off", // Disable "not defined" errors for specific Astro types that are globally available (ImageMetadata)
      "@typescript-eslint/no-explicit-any": "off", // you may want this as it can get annoying
    },
  },

  // MJS config files (allow CommonJS requires and relax TypeScript rules)
  {
    files: ["*.config.mjs", "*.mjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off", // Allow require() in config files
    },
  },

  // Browser scripts in public/js (relax strict rules)
  {
    files: ["public/js/**/*.js"],
    rules: {
      "@typescript-eslint/no-unused-expressions": "off", // Allow expressions like getComputedStyle() for side effects
    },
  },

  // Ignore patterns
  {
    ignores: [
      "dist/**",
      "**/*.d.ts",
      ".github/",
      "**/*.css",
      "src/styles/**/*.css",
      "**/*.mdx", // MDX files have frontmatter that ESLint can't parse
    ],
  },
]);
