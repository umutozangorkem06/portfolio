// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://umutozangorkem.dev",
  integrations: [sitemap()],
  // Astro 7 defaults to "jsx", which strips newline whitespace before
  // inline links in prose ("building<a>"). Keep HTML whitespace semantics.
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
});
