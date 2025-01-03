# Vite | React | TS | TailwindCSS

## Features

- [x] **Vite** `v6`
- [x] **React** `v19`
- [x] **TypeScript** `v5`
- [x] **TailwindCSS** `v3`
- [x] **Lint-staged + Conventional Commits**

## Code Quality Tools

- [x] **ESLint** `v9`
- [x] **Prettier**

### ESLint plugins

- [x] **eslint-plugin-jsx-a11y** - Static AST checker for accessibility rules on JSX elements.
- [x] **eslint-plugin-react** - React specific linting rules for ESLint.
- [x] **eslint-config-prettier** - Turns off all rules that are unnecessary or might conflict with Prettier.

### Prettier plugins

- [x] **@trivago/prettier-plugin-sort-imports** - Sorts import declarations within module.
- [x] **prettier-plugin-tailwindcss** - Sorts TailwindCSS classes.

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
