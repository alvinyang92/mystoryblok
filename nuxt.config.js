export default defineNuxtConfig({
  css: ['@/assets/css/roboto.css'],
  modules: [
    [
      '@storyblok/nuxt',
      {
        accessToken: 'NrFmfS0ZdNiSSMbrJx6Qjwtt',
        // apiOptions: {
        //   region: "us" // When creating your space in US region (EU default)
        // }
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
})
