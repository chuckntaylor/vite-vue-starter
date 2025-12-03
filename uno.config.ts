import { defineConfig, presetWebFonts, presetWind4, transformerDirectives } from 'unocss'
import { presetForms } from './presetForms'

export default defineConfig({
  presets: [
    presetWind4(),
    presetForms(),
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter:100,200,300,400,500,600,700,800,900',
        // Example of adding a custom font - defined in assets/css/index.css
        mont: [
          {
            name: 'Mont',
            weights: [700],
            provider: 'none',
          },
        ],
      },
    }),
  ],
  transformers: [transformerDirectives()],
  theme: {
    colors: {
      // Example color additions
      transparent: 'transparent',
      heroBlue: {
        DEFAULT: '#28396F',
        50: '#EAEBF1',
        100: '#D4D7E2',
        150: '#BFC4D4',
        200: '#A9B0C5',
        250: '#949CB7',
        300: '#7E88A9',
        350: '#69749A',
        400: '#53618C',
        450: '#3E4D7D',
        500: '#28396F',
        550: '#243364',
        600: '#202E59',
        650: '#1C284E',
        700: '#182243',
        750: '#141D38',
        800: '#10172C',
        850: '#0C1121',
        900: '#080B16',
        950: '#04060B',
      },
    },
    breakpoints: {
      '2xs': '428px',
      'xxs': '428px',
      'xs': '576px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    containers: {
      // Containers based on the *true* screen size breakpoint
      '3xs': '(min-width: 320px)' /* 320px */,
      '2xs': '(min-width: 428px)' /* 428px */,
      'xs': '(min-width: 576px)' /* 576px */,
      'sm': '(min-width: 640px)' /* 640px */,
      'md': '(min-width: 768px)' /* 768px */,
      'lg': '(min-width: 1024px)' /* 1024px */,
      'xl': '(min-width: 1280px)' /* 1280px */,
      '2xl': '(min-width: 1536px)' /* 1536px */,
      // Containers based on the container 'c' size
      'c2xs': '(min-width: 16rem)' /* 256px */,
      'cxs': '(min-width: 20rem)' /* 320px */,
      'csm': '(min-width: 24rem)' /* 384px */,
      'cmd': '(min-width: 28rem)' /* 448px */,
      'clg': '(min-width: 32rem)' /* 512px */,
      'cxl': '(min-width: 36rem)' /* 576px */,
      'c2xl': '(min-width: 42rem)' /* 672px */,
      'c3xl': '(min-width: 48rem)' /* 768px */,
      'c4xl': '(min-width: 56rem)' /* 896px */,
      'c5xl': '(min-width: 64rem)' /* 1024px */,
      'c6xl': '(min-width: 72rem)' /* 1152px */,
      'c7xl': '(min-width: 80rem)' /* 1280px */,
    },
  },
  rules: [
    /* Add support for text-cqw-[some number] */
    [/^text-cqw-(\d+)(\.\d+)?$/, ([, num, decimal]) => ({ 'font-size': `${num}${decimal ?? ''}cqw` })],
    /* Add support for animating grid-template-rows - useful for height animations */
    [
      'transition-grid-rows',
      {
        'display': 'grid',
        'transition-property': 'grid-template-rows',
        'transition-timing-function': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'transition-duration': '150ms',
      },
    ],
    /* Expanding and collapsing grid rows */
    ['grid-collapse', { 'grid-template-rows': '0fr' }],
    ['grid-expand', { 'grid-template-rows': '1fr' }],
    // inline icon
    ['icon', { 'vertical-align': '-0.125em', 'display': 'inline', 'height': '1em' }],
    // text-shadow
    ['text-shadow-sm', { 'text-shadow': '0 1px 2px var(--un-shadow-color)' }],
    ['text-shadow', { 'text-shadow': '0 2px 4px var(--un-shadow-color)' }],
    ['text-shadow-lg', { 'text-shadow': '0 8px 16px var(--un-shadow-color)' }],
    /* TODO: Remove when tailwind 3.4 is included */
    ['text-balance', { 'text-wrap': 'balance' }],
    ['text-pretty', { 'text-wrap': 'pretty' }],
  ],
  shortcuts: [
    { 'max-w-content': 'mx-auto max-w-screen-2xl' },
    { 'px-content': 'px-4 lg:px-12 md:px-8 sm:px-6' },
    { 'pl-content': 'pl-4 lg:pl-12 md:pl-8 sm:pl-6' },
    { 'pr-content': 'pr-4 lg:pr-12 md:pr-8 sm:pr-6' },
    { 'px-content-sm': 'px-6 lg:px-24 md:px-16 sm:px-12 xl:px-36 2xs:px-8' },
    { 'pl-content-sm': 'pl-6 lg:pl-24 md:pl-16 sm:pl-12 xl:pl-36 2xs:pl-8' },
    { 'pr-content-sm': 'pr-6 lg:pr-24 md:pr-16 sm:pr-12 xl:pr-36 2xs:pr-8' },
    { 'px-content-md': 'px-12 lg:px-48 md:px-32 sm: px-24 xl:px-72 2xs:px-16' },
    { 'pl-content-md': 'pl-12 lg:pl-48 md:pl-32 sm: pl-24 xl:pl-72 2xs:pl-16' },
    { 'pr-content-md': 'pr-12 lg:pr-48 md:pr-32 sm: pr-24 xl:pr-72 2xs:pr-16' },
    // Default resizing for body text sizes based on screen size
    { 'text-body-auto': 'text-sm md:text-lg 2xs:text-base' },
    // Default resizing for body text sizes based on @container queries
    { '@text-body-auto': 'text-sm @md:text-lg @2xs:text-base' },
    // Default resizing for heading text sizes based on screen size
    { 'text-h1-auto': 'text-2xl md:text-4xl sm:text-4xl 2xs:text-3xl' },
    // Default resizing for heading text sizes based on @container queries
    { '@text-h1-auto': 'text-2xl @md:text-4xl @sm:text-4xl @2xs:text-3xl' },
    // Default resizing for sub-heading text sizes based on @container queries
    { 'text-h2-auto': 'text-lg md:text-3xl sm:text-2xl 2xs:text-xl' },
    { '@text-h2-auto': 'text-lg @md:text-3xl @sm:text-2xl @2xs:text-xl' },
    // Default resizing for sub-heading h3 text sizes based on @container queries
    { 'text-h3-auto': 'text-base md:text-2xl sm:text-xl xs:text-lg' },
    { '@text-h3-auto': 'text-base @md:text-2xl @sm:text-xl @2xs:text-lg' },
  ],
})
