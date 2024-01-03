import withMT from '@material-tailwind/react/utils/withMT';

module.exports = withMT({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [
    require("daisyui"),
    require('tailwindcss-elevation'),
    require('@tailwindcss/typography'),
  ],
  daisyui: {
    themes: [{
      'black': {
        'primary': '#ffffff',
        'primary-focus': '#ffffff',
        'primary-content': '#000000',

        'secondary': '#ffffff',
        'secondary-focus': '#ffffff',
        'secondary-content': '#000000',

        'accent': '#ffffff',
        'accent-focus': '#ffffff',
        'accent-content': '#000000',

        'neutral': '#333333',
        'neutral-focus': '#4d4d4d',
        'neutral-content': '#ffffff',

        'base-100': '#17181C',
        'base-200': '#0F0F0F',
        'base-300': '#ffffff',
        'base-content': '#ffffff',

        'info': '#0000ff',
        'success': '#008000',
        'warning': '#ffff00',
        'error': '#ff0000',

        '--animation-btn': '0',
        '--animation-input': '0',

        '--btn-text-case': 'lowercase',
        '--navbar-padding': '.5rem',
        '--border-btn': '1px',

        ".input:focus": {
          "border-color": "none",
          "outline-color": "none",
          "outline-style": "none",
          "outline-width": "none",
        },

        ".textarea:focus": {
          "border-color": "none",
          "outline-color": "none",
          "outline-style": "none",
          "outline-width": "none",
        },

        ".divider": {
          "margin-top": "2px",
          "margin-bottom": "2px",
        },
      },
    }],
    base: true,
    styled: true,
    utils: true,
    prefix: "",
    logs: true,
    themeRoot: ":root",
  },
  theme: {
    extend: {
      dropShadow: {
        glow: [
          "0 0 8px #eab308",
        ]
      }
    }
  }
})
