export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'NrFmfS0ZdNiSSMbrJx6Qjwtt',
         cache: {
           clear: "auto",
           type: "memory",
         },
        // apiOptions: {
        //   region: "us" // When creating your space in US region (EU default)
        //  },
        //  bridge: true
      },
    ],
    '@nuxtjs/tailwindcss', '@nuxt/image-edge',
  ],
  image: {
    // provider:'storyblok',
    storyblok: {
      baseURL: 'https://a.storyblok.com'
    }
  },
  // ssr: false,
})
