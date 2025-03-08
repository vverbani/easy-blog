import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import remarkSlug from 'remark-slug';
import remarkAutolinkHeadings from 'remark-autolink-headings';

export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [
      remarkSlug,
      [remarkAutolinkHeadings, { behavior: 'wrap' }]
    ]
  },
});
