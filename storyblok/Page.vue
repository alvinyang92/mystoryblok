<template>
  <div v-editable="blok" class="px-4">
    <!-- <pre>{{ blok.body }}</pre> -->
    <!-- <StoryblokComponent v-if="story" :blok="story.content" :uuid="story.uuid" /> -->
    <StoryblokComponent v-for="blok in blok.body" :key="blok._uid" :blok="blok" />
  </div>
</template>

<script setup>
defineProps({ blok: Object })
</script>
