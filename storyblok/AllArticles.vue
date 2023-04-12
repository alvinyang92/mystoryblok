<template>
  <div class="py-24">
    <div class="w-full flex justify-center items-center">

    </div>
    <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.headline }}</h2>
    <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
      <ArticleCard v-for="article in articles" :key="article.uuid" :article="article.content" :slug="article.full_slug" />
    </div>
  </div>
</template>
   
<script setup>
defineProps({ blok: Object })

const articles = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  starts_with: 'products',
  is_startpage: false,
  resolve_relations: ["article.categories"],
  // resolve_relations: ["article.link"],
})
articles.value = data.stories
</script>