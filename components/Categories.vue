<template>
  <div class="flex flex-col space-y-10 w-[30%]  ">

    <ul class="space-y-10">
      <div class="">
      <NuxtLink :to="`/catalogue`" class="hover:text-[#50b0ae]">All</NuxtLink>
    </div>
      <li v-for="group in groups" :key="group.title">
        <p class="font-bold text-[#50b0ae] ">{{ group.title }}</p>
        <ul>
          <li v-for="subcategory in group.subcategories" :key="subcategory">
            <NuxtLink :to="`/catalogue/${subcategory.href}`" class="hover:text-[#50b0ae]">{{ subcategory.name }}
            </NuxtLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>
 

<script setup>
defineProps(
  {
    blok: Object,
  }
)

const groups = [
  {
    title: 'Paper (Bake ware)',
    subcategories: [
      { name: 'Cake Box', href: 'cake-box' },
    ]
  },

  {
    title: 'Paper (Food and Beverage)',
    subcategories: [
      { name: 'Paper Lunch Box', href: 'paper-lunch-box' }
    ]
  },

  {
    title: 'Plastic',
    subcategories: [
      { name: 'Plastic Bag', href: 'plastic-bag' }
    ]
  },
  {
    title: 'Disposable',
    subcategories: [
      { name: 'Cutlery', href: 'cutlery' }
    ]
  }

]
</script>