<template>
    <div>
      <ul>
        <li v-for="group in groups" :key="group.title">
          <h2>{{ group.title }}</h2>
          <ul>
            <li v-for="subcategory in group.subcategories" :key="subcategory">{{ subcategory }}</li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  const groups = [
    {
      title: 'Paper',
      subcategories: ['Paper lunch box', 'Paper dinner box']
    },
    {
      title: 'Cutlery',
      subcategories: ['Cutlery lunch box', 'Cutlery dinner box']
    }
  ]
  </script>