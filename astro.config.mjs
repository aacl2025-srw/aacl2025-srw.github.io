// @ts-check
import { defineConfig } from 'astro/config';
import { rehypeHeadingIds } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://aacl2025-srw.github.io',
  markdown: {
    rehypePlugins: [
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, {
        behavior: 'append',
        properties: { className: ['anchor-link'] },
        content: { type: 'text', value: '#' },
      }],
    ],
  },
  integrations: [mdx()],
});
