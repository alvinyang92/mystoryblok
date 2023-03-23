<template>
  <div v-editable="blok" >
  <!-- <pre>{{story}}</pre>  -->
    <nuxt-img v-if="blok.image?.filename" :src="blok.image.filename + '/m/1600x0'" :alt="blok.image.alt" class="w-full h-[360px] lg:h-[450px] object-cover" />
    <div class="container mx-auto mb-12">
      <h1 class="text-6xl text-[#50b0ae] font-bold mt-12 mb-4">{{ blok.title }}</h1>
      <h1 :if="blok.data" class="text-6xl text-[#000000] font-bold mt-12 mb-4">{{ new Date(blok.data).toLocaleDateString('en-gb', { month: 'long', day: 'numeric', year: 'numeric' }).replace(/(\s+\d{4})$/, ',$1') }}</h1>
      <h2 class="text-2xl text-[#1d243d] font-bold mb-4">
        {{ blok.teaser }}
      </h2>
      <div class="flex space-x-2" v-if="blok.categories">
        <h2  v-for="category in blok.categories" 
        :key="category.uuid"
        :slug="category.full_slug"
        class="text-2xl text-[#ff6e07] font-bold mb-4 ">
          {{ category.name }}
        </h2>
      </div>

      <article 
      v-html="resolvedRichText" 
      class="prose prose-xl max-w-none prose-ol:text-black "></article>

      <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">Related Articles</h2>
      
      <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
        <ArticleCard 
        v-for="article in articles" 
        :key="article.uuid" 
        :article="article.content" 
        :slug="article.full_slug" 
        />
      </div>
    </div>
  </div>
</template>
   
<script setup>
const props = defineProps({ blok: Object,  })
const resolvedRichText = computed(() => renderRichText(props.blok.content))

const articles = ref(null)
const storyblokApi = useStoryblokApi()

const { data } = await storyblokApi.get('cdn/stories', {
  version: 'published',
  starts_with: 'blog',
  is_startpage: false,
// excluding_ids: ["id.id"],
  resolve_relations: ["article.categories"],
  filter_query: {
    title: {
      not_in: props.blok.title
    },
    // categories: {
    //   all_in_array: category.uuid,
    //     }
  }
})
articles.value = data.stories
</script>