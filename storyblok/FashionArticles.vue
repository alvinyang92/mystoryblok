<template>
    <div class="py-24">
      <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.headline }}</h2>
      <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
        <ArticleCard
          v-for="article in articles"
          :key="article.uuid"
          :article="article.content"
          :slug="article.full_slug"
        />
      </div>
    </div>
  </template>
   
  <script setup>
  defineProps({ blok: Object })
   
  const articles = ref(null)
  const storyblokApi = useStoryblokApi()
  const { data } = await storyblokApi.get('cdn/stories', {
    version: 'published',
    starts_with: 'blog',
    // is_startpage: false,
    ['filter_query[categories][all_in_array]']:'e54a6ffe-ee0c-4fcb-9164-d7fb056ad555',
    resolve_relations: ["article.categories"],
    // resolve_relations: ["article.link"],
  })
  articles.value = data.stories
  </script>