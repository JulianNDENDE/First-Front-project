import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: ["~/assets/css/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
});
