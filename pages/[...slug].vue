<script setup>
let { slug } = useRoute().params

const resolveRelations = ['popular-articles.articles','article.categories',]

const story = await useAsyncStoryblok(
  slug && slug.length > 0 ? slug.join('/') : 'home',
  {
    version: 'published',
    resolve_relations: resolveRelations,
  },
  {
    resolveRelations,
  }
)
</script>

<template>
  <!-- <pre>{{ raw.content.categories }}</pre> -->
  <StoryblokComponent v-if="story" :blok="story.content" :raw="story" />
</template>
