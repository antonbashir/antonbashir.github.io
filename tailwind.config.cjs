import withMT from '@material-tailwind/react/utils/withMT';

module.exports = withMT({
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  plugins: [
    require("daisyui"),
    require('tailwindcss-elevation'),
    require('tailwind-typewriter')(
      {
        wordsets: {
          no: {
            words: ['No', ' '],
            delay: 1
          }
        }
      }
    ),
    require('@tailwindcss/typography')
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

        'base-100': '#0F0F0F',
        'base-200': '#17181C',
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
      typography(theme) {
        return {
          dark: {
            css: {
              img : {
                borderRadius: "8px",
              },
              p: {
                fontFamily: 'Inter',
                lineHeight: '1.8em',
              },
              color: theme("colors.gray.200"),
              '[class~="lead"]': { color: theme("colors.gray.400") },
              a: { color: theme("colors.gray.200") },
              strong: { color: theme("colors.gray.200") },
              "ul > li::before": { backgroundColor: theme("colors.gray.700") },
              hr: { borderColor: theme("colors.gray.800") },
              blockquote: {
                color: theme("colors.gray.200"),
                borderLeftColor: theme("colors.gray.800"),
              },
              h1: {
                color: theme("colors.gray.200"),
                fontFamily: 'InterDisplay',
                fontWeight: 'normal',
                marginTop: '1px !important',
              },
              h2: {
                color: theme("colors.gray.200"),
                fontFamily: 'InterDisplay',
                fontWeight: 'normal',
                marginTop: '1px !important',
              },
              h3: {
                color: theme("colors.gray.200"),
                fontFamily: 'InterDisplay',
                fontWeight: 'normal',
                fontSize: '1.4em',
                marginTop: '1px !important',
              },
              h4: {
                color: theme("colors.gray.200"),
                fontFamily: 'InterDisplay',
                fontWeight: 'normal',
                marginTop: '1px !important',
              },
              h5: {
                color: theme("colors.gray.200"),
                fontFamily: 'InterDisplay',
                fontWeight: 'normal',
                marginTop: '1px !important',
              },
              code: {
                color: theme("colors.gray.200"),
                fontWeight: 'normal',
                padding: '4px',
                borderRadius: '8px',
              },
              "a code": { color: theme("colors.gray.200") },
              pre: {
                color: theme("colors.gray.200"),
                backgroundColor: theme("colors.white"),
              },
              thead: {
                color: theme("colors.gray.200"),
                borderBottomColor: theme("colors.gray.700"),
              },
              "tbody tr": { borderBottomColor: theme("colors.gray.800") },
            },
          },
        };
      },
      dropShadow: {
        "glow-light-blue": [
          "0 0 10px rgb(79 195 247)",
        ],
        "glow-orange": [
          "0 0 10px rgb(255 183 77)",
        ],
        "glow-purple": [
          "0 0 10px rgb(186 104 200)",
        ],
        "glow-yellow": [
          "0 0 10px rgb(255 241 118)",
        ]
      }
    }
  }
})
