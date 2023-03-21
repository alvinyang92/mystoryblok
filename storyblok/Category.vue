<template>
  <div v-if=blok.link target="_blank" class="py-24">
    <NuxtLink :to="'/' +  blok.link.cached_url">
    <!-- <NuxtLink :to="'/' + blok.link"> -->
      <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.name }}</h2>
    </NuxtLink>
  </div>
  <!-- <div class="py-24">
        <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.name }}</h2>
    </div> -->
</template>
   
<script setup>
defineProps(
  { blok: Object, 
    slug: String,
  }
  )

const articles = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'draft',
  // starts_with: 'categories',
  // is_startpage: false,
  resolve_links: "link",
  //  resolve_relations: ["blok.link"],
  //  resolve_relations: ["article.link"],
})
articles.value = data.stories


</script>