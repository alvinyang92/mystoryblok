<template>
  <div class="container mx-auto max-w-[1440px] py-24 px-20 w-full">
    <div class="flex space-x-10">
      <Categories />
      <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.headline }}</h2>
      <div class="container mx-auto grid md:grid-cols-3 gap-12 ">
        <ArticleCard v-for="article in articles" :key="article.uuid" :article="article.content" :slug="article.full_slug" />
      </div>
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
  ['filter_query[categories][all_in_array]']: 'c96c37b2-361d-4860-af9d-501ed36b69ab',
  resolve_relations: ["article.categories"],
  // resolve_relations: ["article.link"],
})
articles.value = data.stories

</script>