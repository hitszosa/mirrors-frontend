import tsParser from '@typescript-eslint/parser'
import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'

const styleRules = {
  indent: ['error', 2, { SwitchCase: 1 }],
  quotes: ['error', 'single', { avoidEscape: true }],
  semi: ['error', 'never'],
}

export default [
  {
    ignores: [
      '.astro/',
      'dist/',
      'node_modules/',
    ],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: tsParser,
      sourceType: 'module',
    },
    rules: styleRules,
  },
  {
    files: ['**/*.vue'],
    languageOptions: {
      ecmaVersion: 'latest',
      parser: vueParser,
      parserOptions: {
        ecmaVersion: 'latest',
        parser: tsParser,
        sourceType: 'module',
      },
    },
    plugins: {
      vue: vuePlugin,
    },
    rules: {
      ...styleRules,
      'vue/html-indent': ['error', 2],
      'vue/script-indent': ['error', 2, { baseIndent: 0, switchCase: 1 }],
    },
  },
]
