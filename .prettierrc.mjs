/** @type {import("prettier").Config} */
export default {
  printWidth: 100,
  semi: true,
  singleQuote: false,
  tabWidth: 2,
  useTabs: false,
  trailingComma: "all",
  plugins: ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: ["**/*.astro"],
      options: {
        parser: "astro",
      },
    },
  ],
};
