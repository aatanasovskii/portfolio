# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Personal portfolio site for Andrej Atanasovski: a Vue 3 + Vite single-page app, deployed to GitHub Pages from the `aatanasovskii/portfolio` repo. Plain JavaScript (no TypeScript), SCSS for styles. There is no test suite and no linter configured.

## Commands

```sh
npm install
npm run dev       # Vite dev server with HMR (served under /portfolio/)
npm run build     # production build into dist/
npm run preview   # serve the built dist/ locally
npm run deploy    # publish dist/ to the gh-pages branch (run build first)
```

## Architecture

- **Routing** (`src/router/index.js`): `/` redirects to `HomePage`; every page is a lazy-loaded child route of `layouts/MainLayout.vue`. Routes are referenced by `name` (e.g. `{ name: 'ProjectsPage' }`), not by path. Adding a page means adding a child route here *and* a `router-link` in the side menu in `MainLayout.vue`.
- **Layout** (`src/layouts/MainLayout.vue`): owns the header (avatar, name, email), the toggleable side menu, the `<router-view>` for pages, and the social links footer.
- **Content lives in components**: page text and data (project list, experience, skills, etc.) are hardcoded in each page's `data()`. Updating portfolio content means editing the relevant `src/pages/*.vue` file; there is no CMS or data file.
- **Store** (`src/store/index.js`): Vuex with `vuex-plugin-persistedstate`, currently with no modules; nothing uses it yet.

## Conventions

- Components use the Options API (`export default { name, data, methods }`); `App.vue` is the only `<script setup>` file.
- Each component/page has a sibling `.scss` file with the same name, pulled in via `<style lang="scss">@use "ComponentName";</style>` (unscoped). Styles are nested under a root class matching the component (e.g. `.projects-page`).
- Shared colors are in `src/css/variables.scss`; consume them with `@use "../css/variables";` and `variables.$primary` (Sass module syntax, not `@import`).
- `@` is aliased to `src/`.

## Assets and base path gotchas

- Vite `base` is `/portfolio/` (overridable via `VITE_BASE_PATH`) and the router uses `createWebHistory(import.meta.env.BASE_URL)`. Hardcoded absolute URLs such as `'/CV-Andrej.pdf'` ignore the base path; prefix files from `public/` with `import.meta.env.BASE_URL`.
- Project images are loaded dynamically by filename in `ProjectsPage.vue` via ``new URL(`../assets/images/${name}`, import.meta.url)``, so a new project needs its image in `src/assets/images/` and the filename in the project entry.
- `.gitignore` contains bare `icons` and `images` entries, so new files under `src/assets/icons/` or `src/assets/images/` are ignored by git and must be added with `git add -f`.
- The CV served by the site is `public/CV-Andrej.pdf`; replace that file to update it.
