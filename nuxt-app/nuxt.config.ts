import { defineNuxtConfig } from 'nuxt/config'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
     components: true,
	 modules: [ '@nuxtjs/supabase', '@nuxtjs/tailwindcss' ],
	 buildModules: [],
	 css: ['@/assets/css/tailwind.css'],
})
