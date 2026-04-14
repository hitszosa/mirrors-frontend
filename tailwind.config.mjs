/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'
import colors from 'tailwindcss/colors'

export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class',
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
    }),
    typography,
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            'h1': {
              fontSize: '26px',
            },
            'h2': {
              fontSize: '22px',
            },
            'h3': {
              fontSize: '18px',
            },
            'h1, h2, h3, h4': {
              fontWeight: 500,
              marginTop: '22px',
            },
            'h1 a, h2 a, h3 a, h4 a, h5 a, h6 a': {
              textDecoration: 'none',
            },
            'code': {
              fontWeight: 400,
            },
            'code::before': {
              content: 'none',
            },
            'code::after': {
              content: 'none',
            },
            'ol, ul': {
              marginTop: '0.25em',
              marginBottom: '0.25em',
              paddingInlineStart: '1.25em',
            },
            'li': {
              marginTop: '0.25em',
              marginBottom: '0.25em',
            },
            'p': {
              marginTop: '0.75em',
              marginBottom: '0.75em',
            },
            'a': {
              fontWeight: '400',
            },
            'strong': {
              fontWeight: '400',
            },
            'blockquote': {
              fontWeight: '300',
              fontStyle: 'normal',
            },
            'blockquote p:first-of-type::before': {
              content: 'none',
            },
            'blockquote p:last-of-type::after': {
              content: 'none',
            },
          },
        },
        slate: {
          css: {
            '--tw-prose-pre-bg': colors.slate[50],
            '--tw-prose-invert-pre-bg': colors.slate[800],
          },
        },
      },
    },
  },
}
