// astro.config.mjs
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import rehypeSlug from 'rehype-slug';

export default defineConfig({
  output: "server",  // Enable runtime endpoints
  integrations: [tailwind()],
  markdown: {
    rehypePlugins: [rehypeSlug]
  }
});
