# Starter Project

This single page application (SPA) is for the food pilot program with Trupanion and Royal Canin. The application is primarily built with the following technologies:

- [TypeScript](https://www.typescriptlang.org/) - Language
- [Vue 3](https://vuejs.org/) - Framework
- [Vue Router](https://router.vuejs.org/) - Routing
- [Pinia](https://pinia.vuejs.org/) - State Management
- [Vite](https://vitejs.dev/) - Build Tool
- [UnoCSS](https://unocss.dev/) - CSS Framework
- [Vitest](https://vitejs.dev/) - Testing
- [@vue/test-utils](https://test-utils.vuejs.org/) - Testing Utilities

Work on this project was initially conducted by Chuck Taylor ([chuck\@preventivevet.com](mailto:chuck@preventivevet.com?subject=Trupanion%20%2B%20Royal%20Canin%20%E2%80%94%20Food%20Pilot)) at [Preventive Vet](https://www.preventivevet.com).

## Styling

The CSS for this application is assembled using [UnoCSS](https://unocss.dev/), an instant on-demand atomic css engine. UnoCSS will generate css based on the configurations. As a convention these classes are similar compatible with [TailwindCSS](https://tailwindcss.com/). Tailwind is a good reference for the available classes and their usage.

UnoCSS goes a step further in that is has powerful configuration options which can be adjusted in `uno.config.ts`. The main changes made in the configuration have been the addition of brand colors, brand shadows, fonts, and added support for container queries.

The colors added in the configuration file will permeate to any class that references them in the same style as Tailwind utility classes. For example, in Tailwind you can use `bg-blue-500` to set the background color to the blue-500 color. With the configuration, you can use `bg-tru-blue-500` to set the background color to the tru-blue-500 color. The same would be true for text or borders, etc. `text-tru-blue-500` or `border-tru-blue-500`. Most of the brand colors have increments sarting at `50` for the lightest and going to `950` for the darkest. There are a few exceptions like `charcoal`. Check the configuration file for the full list of colors.

All stylesheets are imported in `main.ts`.

### Container Queries

The project makes use of some container queries. Since UnoCSS is being used, these can be accessed using the classes generated. These classes match those in the [TailwindCSS Container Queries Plugin](https://github.com/tailwindlabs/tailwindcss-container-queries). Check their documentation for more information.

While container queries are [very well supported](https://caniuse.com/?search=container%20queries%20size), there are some users who may not be using a supported browser. To account for this, the project uses the [container query polyfill](https://github.com/GoogleChromeLabs/container-query-polyfill) by Google Chrome Labs. This polyfill is **only loaded** if the browser does not support container queries. The polyfill is loaded in `index.html`.

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

# Vue 3 + TypeScript + Vite

## Install

To install all the dependencies run

```bash
npm install
```

## Development

To run the project locally run

```bash
npm run dev
```

## Build

To build the project run

```bash
npm run build
```

# Deployment

When deploying the application, the `dist` folder is the only folder that needs to be deployed. The `dist` folder contains all the files needed to run the application.
