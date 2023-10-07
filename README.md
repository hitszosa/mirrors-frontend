# mirrors-frontend

## Introduction

This project is a state-of-the-art website frontend for HITSZ OSA Mirrors.

![showcase](./docs/assets/showcase.png)

## Usage

### Prerequisites

Make sure you have these develop tools:

- [Yarn](https://yarnpkg.com/)（an Node.js package manager)
- Node.js
- Visual Studio Code (recommended)

Then execute `yarn install`

Now you are ready to go!

### Develop

Use `yarn dev` to serve the website under development on your local network. It supports hot module replacement.

Use `yarn format` to format the whole project before every commit, unless you are using other formatting tool which supports ESLint.

### Build and Deploy

Please follow these steps:

1. Make sure `main` branch is up to date
2. Switch to `prod` branch
3. Execute `git rebase main`. Occasionally you need to resolve conflicts
4. (Optional) Make production-only changes and commit
5. Execute `yarn generate`
6. Deploy the files and directories under `.output/public` to the server
7. Check if the deployed website works as expected
8. Don't forget to push changes to GitHub

## Where to start

Here are some resources that might help you learn how to develop this project:

- Vue 3 Guide: <https://vuejs.org/guide/introduction.html>
- Vue 3 Composition API Reference: <https://vuejs.org/api>
- Nuxt 3 Docs: <https://nuxt.com/docs>
- Nuxt Content Docs: <https://content.nuxt.com/get-started/installation>
- Tailwind CSS Docs: <https://tailwindcss.com/docs/installation>
- Nuxt UI Docs: <https://ui.nuxt.com/getting-started>
- Pinia Guide: <https://pinia.vuejs.org/core-concepts>

We use IconPark Outline as the primary icon library. You can find the icons at:

- Icônes: <https://icones.js.org/collection/icon-park-outline>

## Coding conventions

Please refer to [coding-conventions.md](./docs/coding-conventions.md>).