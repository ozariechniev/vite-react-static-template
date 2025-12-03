# Vite ⋅ React ⋅ TypeScript ⋅ TailwindCSS template

> A simple and minimalistic setup to get started with a new project.

## Features

- [x] [**Vite**](https://vite.dev/) `v7`
- [x] [**React**](https://react.dev/) `v19.2.0`
- [x] [**TypeScript**](https://www.typescriptlang.org/) `v5`
- [x] [**TailwindCSS**](https://tailwindcss.com/) `v4`

### Code Quality Tools

- [x] [**ESLint**](https://eslint.org/) `v9`
  - [x] [**eslint-plugin-jsx-a11y**](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - Static AST checker for accessibility rules on JSX elements.
  - [x] [**eslint-plugin-react**](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint.
  - [x] [**eslint-config-prettier**](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [x] [**Prettier**](https://prettier.io/)
  - [x] [**@trivago/prettier-plugin-sort-imports**](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports) - Sorts import declarations within module.
  - [x] [**prettier-plugin-tailwindcss**](https://www.npmjs.com/package/prettier-plugin-tailwindcss) - Sorts TailwindCSS classes.
- [x] [**Lint-staged**](https://www.npmjs.com/package/lint-staged)
- [x] [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/)

### Additional packages

- [x] [**class-variance-authority**](https://www.npmjs.com/package/class-variance-authority) - A utility for creating class variance authority.
- [x] [**clsx**](https://www.npmjs.com/package/clsx) - A tiny utility for constructing className strings conditionally.
- [x] [**tailwind-merge**](https://www.npmjs.com/package/tailwind-merge) - Utility function to efficiently merge Tailwind CSS classes in JS without style conflicts.
- [x] [**tailwindcss-animate**](https://www.npmjs.com/package/tailwindcss-animate) - A Tailwind CSS plugin for creating animations.
- [x] [**vite-plugin-svgr**](https://www.npmjs.com/package/vite-plugin-svgr) - Vite plugin to transform SVGs into React components.

## Installation

```bash
git clone https://github.com/ozariechniev/vite-react-static-template.git .
rm -rf .git

git init -b main

pnpm install

git add .
git commit -m "chore: initial commit"

echo 'VITE_APP_TITLE="Vite | React | TS | Tailwind"' > .env
```

## Usage

```bash
pnpm run dev     # Start the development server
pnpm run build   # Build the project
pnpm run lint    # Run ESLint
pnpm run format  # Run Prettier
pnpm run preview # Preview the production build
```
