<template>
  <NuxtLink :to="'/' + slug" v-editable="article" class="w-full h-full bg-[#f7f6fd] rounded-[5px] text-center overflow-hidden">
    <nuxt-img  :src="article.image.filename + '/m/600x0'" :alt="article.image.alt" class="w-full h-48 xl:h-72 object-cover pointer-events-none" />
    <div class="p-4">
      <h3 class="text-xl text-[#1d243d] font-bold mb-3">
        {{ article.title }}
      </h3>
      <div class="line-clamp-4">
        {{ article.teaser }}
      </div>
      <div v-if="article.categories">
        <div
        v-for="category in article.categories"
        class="font-bold text-[#ff5f57]">
            {{ category.name}}
          </div>
      </div>
    </div>
  </NuxtLink>
</template>
   
<script setup>


defineProps(
  {
    article: Object,
    slug: String,
  }
)
</script>


<!-- <script setup>
const story = await useAsyncStoryblok("home", {
  version: "draft",
  resolve_relations: ["featured-projects.projects"],
})
useHead({
  title: story.value.name,
})
</script> -->