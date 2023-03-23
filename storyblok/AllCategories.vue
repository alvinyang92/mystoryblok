<template>
  <div class="py-24">
    <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.headline }}</h2>
    <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
      <div v-if="categories" class="flex space-x-6 items-center w-full">
        <StoryblokComponent v-for="category in categories" :blok="category.content" />
      </div>

    </div>
  </div>
</template>
   
<script setup>
defineProps({ blok: Object })

const categories = ref(null)
const storyblokApi = useStoryblokApi()
const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  starts_with: 'categories',
  is_startpage: false,
})
categories.value = data.stories
</script>