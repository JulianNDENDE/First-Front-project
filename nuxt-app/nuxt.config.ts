import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  build: {
      postcss: {
          postcssOptions: {
              plugins: {
                  tailwindcss: {},
                  autoprefixer: {},
                },
            },
        },
    },
    css: ["~/assets/css/tailwind.css"],
});
