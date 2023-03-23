<template>
  <!-- <pre></pre> -->
  <div v-if=blok.link target="_blank" class="flex">
    <NuxtLink :to="'/' +  blok.link.cached_url">
    <!-- <NuxtLink :to="'/' + blok.link"> -->
      <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.name }}</h2>
    </NuxtLink>
  </div>
  <template>
<!-- <pre>{{story}}</pre> 
  <StoryblokComponent v-if="story" :blok="story.content" :raw="story" />  -->
</template>
</template>
 

<script setup>
defineProps(
  { blok: Object, raw: Object
  }
  )
const articles = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  resolve_links: "link",
})
articles.value = data.stories
</script>