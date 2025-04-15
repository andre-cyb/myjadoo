// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "nuxt-icon",
    "@nuxt/image",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
  ],
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    config: {
      theme: {
        fontFamily: {
          'poppins': ['Poppins', 'sans-serif']
        }
      },
      plugins: [
        require('tailwind-scrollbar-hide')
      ]
    }
  },
  runtimeConfig: {
    public: {
      // NAMESPACE
      apiBase: process.env.NUXT_PUBLIC_API_BASE // sarà visibile nel client 
    }
  }
});
