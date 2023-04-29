import { defineConfig } from "astro/config";
import rehypeKatex from "rehype-katex";
import remarkMath from "remark-math";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://eurydia.github.io",
  base: "/cleanpedia",
  markdown: {
    rehypePlugins: [rehypeKatex],
    remarkPlugins: [remarkMath],
    shikiConfig: {
      theme: "css-variables",
      wrap: false,
    },
  },
  integrations: [tailwind({ config: { applyBaseStyles: false } })],
});
