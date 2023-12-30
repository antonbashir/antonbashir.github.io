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
        "base-100": "#000000",
        "base-200": "#e6e6e6",
        "base-300": "000000",
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
