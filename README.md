# Svelte Pattern Library

A base svelte pattern library with minimal styling.

## Purpose

This repository is not intended for production use. It is intended to understand differen UI patterns.
That said, the components are bundled via Rollup and will be registered into npm for further

## Setting up

- Run `npm init` (or `yarn init`)
- Replace this README with your own

## TODOs

- [ ] Setup Testing with jest + storybook storyshots
- [ ] Include more components ++
- [ ] Add an a11y checker
- [ ] Look through React Reach, React Remix, and Material UI for inspiration and following W3C rules
- [ ] Export to webcomponents
- [ ] Deploy storybook online
- [ ] Consume components for another repo for the docs website

## Consuming components

Your package.json has a `"svelte"` field pointing to `src/index.js`, which allows Svelte apps to import the source code directly, if they are using a bundler plugin like [rollup-plugin-svelte](https://github.com/sveltejs/rollup-plugin-svelte) or [svelte-loader](https://github.com/sveltejs/svelte-loader) (where [`resolve.mainFields`](https://webpack.js.org/configuration/resolve/#resolve-mainfields) in your webpack config includes `"svelte"`). **This is recommended.**

For everyone else, `npm run build` will bundle your component's source code into a plain JavaScript module (`dist/index.mjs`) and a UMD script (`dist/index.js`). This will happen automatically when you publish your component to npm, courtesy of the `prepublishOnly` hook in package.json.
