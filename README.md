# Vite | React | TS | TailwindCSS

## Features

- [x] [**Vite**](https://vite.dev/) `v6`
- [x] [**React**](https://react.dev/) `v19`
- [x] [**TypeScript**](https://www.typescriptlang.org/) `v5`
- [x] [**TailwindCSS**](https://tailwindcss.com/) `v4`
- [x] [**Lint-staged**](https://www.npmjs.com/package/lint-staged)
- [x] [**Conventional Commits**](https://www.conventionalcommits.org/en/v1.0.0/)

### Code Quality Tools

- [x] [**ESLint**](https://eslint.org/) `v9`
  - [x] [**eslint-plugin-jsx-a11y**](https://www.npmjs.com/package/eslint-plugin-jsx-a11y) - Static AST checker for accessibility rules on JSX elements.
  - [x] [**eslint-plugin-react**](https://www.npmjs.com/package/eslint-plugin-react) - React specific linting rules for ESLint.
  - [x] [**eslint-config-prettier**](https://www.npmjs.com/package/eslint-config-prettier) - Turns off all rules that are unnecessary or might conflict with Prettier.
- [x] [**Prettier**](https://prettier.io/)
  - [x] [**@trivago/prettier-plugin-sort-imports**](https://www.npmjs.com/package/@trivago/prettier-plugin-sort-imports) - Sorts import declarations within module.
  - [x] [**prettier-plugin-tailwindcss**](https://www.npmjs.com/package/prettier-plugin-tailwindcss) - Sorts TailwindCSS classes.

### Packages

- [x] **class-variance-authority**
- [x] **clsx**
- [x] **tailwind-merge**
- [x] **tailwindcss-animate**
- [x] **vite-plugin-svgr**

## Installation

```bash
git clone https://github.com/ozariechniev/vite-react-static-template.git .
rm -rf .git

git init -b main

npm install

git add .
git commit -m "chore: initial commit"
```

## [Commit Message Guidelines](https://www.conventionalcommits.org/en/v1.0.0/)

### Commit Message Format

```bash
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```

### Commit Message Types

- `build`: Changes that affect the build system or external dependencies.
- `ci`: Changes to our CI configuration files and scripts.
- `chore`: Other changes that don't modify src or test files.
- `docs`: Documentation only changes.
- `feat`: A new feature.
- `fix`: A bug fix.
- `perf`: A code change that improves performance.
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `test`: Adding missing tests or correcting existing tests.
