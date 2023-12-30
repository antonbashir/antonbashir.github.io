/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [
    require("daisyui"),
    require('tailwindcss-elevation'),
    require('@tailwindcss/typography'),
  ],

  daisyui: {
    themes: [{
      dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        "base": "fffff",
        "base-100": "fffff",
        "base-200": "fffff",
        "base-300": "fffff",
      }
    }],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
}
