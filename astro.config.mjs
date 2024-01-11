import mdx from '@astrojs/mdx';
import react from "@astrojs/react";
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';
import { h } from 'hastscript'
import autolinkHeadings from 'rehype-autolink-headings'
import rehypeSlug from 'rehype-slug'
import rehyptToc from 'rehype-toc'

const anchorLinkSizes = {
  'h1': 32,
  'h2': 32,
  'h3': 24,
  'h4': 24,
  'h5': 16,
  'h6': 16,
}

const anchorLinkIcon = (element) => {
  return h(
    'svg',
    {
      width: anchorLinkSizes[element],
      height: anchorLinkSizes[element],
      version: 1.1,
      viewBox: '0 0 448 512',
      xlmns: 'http://www.w3.org/2000/svg',
      style: "color: white",
    },
    h('path', {
      fill: 'white',
      d: 'M416 127.1h-58.23l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L292.9 127.1H197.8l9.789-58.74c2.906-17.44-8.875-33.92-26.3-36.83c-17.53-2.875-33.92 8.891-36.83 26.3L132.9 127.1H64c-17.67 0-32 14.33-32 32C32 177.7 46.33 191.1 64 191.1h58.23l-21.33 128H32c-17.67 0-32 14.33-32 32c0 17.67 14.33 31.1 32 31.1h58.23l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C108.5 479.9 110.3 480 112 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27h95.12l-9.789 58.74c-2.906 17.44 8.875 33.92 26.3 36.83C268.5 479.9 270.3 480 272 480c15.36 0 28.92-11.09 31.53-26.73l11.54-69.27H384c17.67 0 32-14.33 32-31.1c0-17.67-14.33-32-32-32h-58.23l21.33-128H416c17.67 0 32-14.32 32-31.1C448 142.3 433.7 127.1 416 127.1zM260.9 319.1H165.8L187.1 191.1h95.12L260.9 319.1z',
    })
  );
}

export default defineConfig({
  site: 'https://antonbashir.github.io',
  integrations: [tailwind(), react(), robotsTxt(), sitemap(), mdx({
    rehypePlugins: [
      rehypeSlug,
      [
        autolinkHeadings,
        {
          behavior: 'prepend',
          group: ({ tagName }) =>
            h(`div.heading-wrapper.level-${tagName}`, {
              tabIndex: -1,
            }),
          content: (heading) => [
            h(
              `span.anchor-icon`,
              {
                ariaHidden: 'true',
              },
              anchorLinkIcon(heading.tagName)
            ),
          ],
        }
      ],
      [rehyptToc, { headings: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ],
  })]
});