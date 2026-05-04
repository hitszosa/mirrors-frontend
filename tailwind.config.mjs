/** @type {import('tailwindcss').Config} */

import typography from '@tailwindcss/typography'
import plugin from 'tailwindcss/plugin'

export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './components/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
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
      colors: {
        primary: '#4242DB',
        secondary: '#A57C00',
        'page-bg': 'var(--ui-page-bg)',
        'page-fg': 'var(--ui-page-fg)',
        'muted-fg': 'var(--ui-muted-fg)',
        'osa-fg': 'var(--ui-osa-fg)',
        'osa-hover': 'var(--ui-osa-hover)',
        surface: 'var(--ui-surface)',
        'surface-fg': 'var(--ui-surface-fg)',
        'surface-border': 'var(--ui-surface-border)',
        brand: 'var(--mirrors-brand)',
        'brand-soft': 'var(--mirrors-brand-soft)',
        'brand-strong': 'var(--mirrors-brand-strong)',
        fg: 'var(--mirrors-fg)',
        muted: 'var(--mirrors-muted)',
        border: 'var(--mirrors-border)',
        ring: 'var(--mirrors-ring)',
        'surface-muted': 'var(--mirrors-surface-muted)',
        osa: {
          50: '#F7F7FD',
          100: '#D5D5F4',
          200: '#B1B1ED',
          300: '#8D8DE6',
          400: '#6868E0',
          500: '#4242DB',
          600: '#2323CC',
          700: '#1919A7',
          800: '#111180',
          900: '#191948',
          950: '#0F0F24',
        },
      },
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
          css: {},
        },
      },
    },
  },
}
