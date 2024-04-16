/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin')

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    extend: {
      keyframes: {
        dripple: {
          '50%': {
            transform: 'scale(0.5)',
            opacity: '50%',
          },
        },
      },
      animation: {
        dripple: 'dripple 200ms ease-in-out',
      },
    },
  },
  darkMode: 'class',
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant('hocus', ['&:hover', '&:focus'])
    }),
    require('@tailwindcss/typography'),
  ],
}
