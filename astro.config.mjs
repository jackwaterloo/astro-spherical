import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://jackwaterloo.github.io/personal-site",
  integrations: [
    expressiveCode(),
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
  ],
});
