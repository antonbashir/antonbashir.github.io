import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import robotsTxt from 'astro-robots-txt';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://antonbashir.github.io',
  integrations: [tailwind(), react(), robotsTxt(), sitemap(), mdx()]
});