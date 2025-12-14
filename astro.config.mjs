import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import expressiveCode from "astro-expressive-code";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";

// https://astro.build/config
export default defineConfig({
  site: "https://jackwaterloo.github.io/personal-site",
  integrations: [
    expressiveCode({
      themes: ["github-dark"],
      defaultProps: {
        wrap: false,
        showLineNumbers: false,
      },
      plugins: [pluginLineNumbers()],
      frames: {
        showCopyToClipboardButton: true,
        extractFileNameFromCode: true,
        removeCommentsWhenCopyingTerminalFrames: true,
      },
      styleOverrides: {
        borderRadius: "0.3rem",
      },
    }),
    mdx(),
    sitemap(),
    solidJs(),
    tailwind({ applyBaseStyles: false }),
  ],
});
