<template>
  <div class="py-24">
    <h2 class="text-6xl text-[#50b0ae] font-bold text-center mb-12">{{ blok.headline }}</h2>
    <!-- <StoryblokComponent v-for="category in categories" :blok="category.content" /> -->

    <div class="w-full max-w-md px-2 py-16 sm:px-0">
      <TabGroup>
        <TabList class="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <Category v-for="category in category" :key="category.uuid" :article="category.content" :slug="category.full_slug">
            <Tab v-for="category in Object.keys(categories)" as="template" :key="category" v-slot="{ selected }">
              <button :class="[
                'w-full rounded-lg py-2.5 text-sm font-medium leading-5 text-blue-700',
                'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
                selected
                  ? 'bg-white shadow'
                  : 'text-blue-100 hover:bg-white/[0.12] hover:text-white',
              ]">
                {{ category }}
              </button>
            </Tab>
          </Category>
        </TabList>

        <TabPanels class="mt-2">
          <TabPanel v-for="(posts, idx) in Object.values(categories)" :key="idx" :class="[
            'rounded-xl bg-white p-3',
            'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
          ]">
            <!-- <ul>
            <li
              v-for="post in posts"
              :key="post.id"
              class="relative rounded-md p-3 hover:bg-gray-100"
            >
              <h3 class="text-sm font-medium leading-5">
                {{ post.title }}
              </h3>

              <ul
                class="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500"
              >
                <li>{{ post.date }}</li>
                <li>&middot;</li>
                <li>{{ post.commentCount }} comments</li>
                <li>&middot;</li>
                <li>{{ post.shareCount }} shares</li>
              </ul>

              <a
                href="#"
                :class="[
                  'absolute inset-0 rounded-md',
                  'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2',
                ]"
              />
            </li>
          </ul> -->
            <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
              <ArticleCard v-for="article in articles" :key="article.uuid" :article="article.content" :slug="article.full_slug" />
            </div>
          </TabPanel>
        </TabPanels>
      </TabGroup>
    </div>

    <div class="container mx-auto grid md:grid-cols-3 gap-12 my-12 place-items-start">
      <ArticleCard v-for="article in articles" :key="article.uuid" :article="article.content" :slug="article.full_slug" />
    </div>
  </div>
</template>
   
<script setup>
import { ref } from 'vue'
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue'
const categories = ref({
  Recent: [
    {
      id: 1,
      title: 'Does drinking coffee make you smarter?',
      date: '5h ago',
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: '2h ago',
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: 'Is tech making coffee better or worse?',
      date: 'Jan 7',
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: 'The most innovative things happening in coffee',
      date: 'Mar 19',
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: 'Ask Me Anything: 10 answers to your questions about coffee',
      date: '2d ago',
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: '4d ago',
      commentCount: 1,
      shareCount: 2,
    },
  ],
})
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