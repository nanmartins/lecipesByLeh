<template>
  <v-responsive
    max-width="1200px"
    class="text-center mx-auto"
  >
    <!-- <h1>Categorias</h1> -->

    <div>
      <router-link
        v-for="(category) in uniqueCategories"
        :key="category"
        :to="`/categories/${category}`"
        class="text-decoration-none"
      >
        <v-btn
          flat
          class="mx-2 my-2 bg-primary text-details"
          style="
            border: 1px solid #FBA083;
          "
        >
          {{ category }}
        </v-btn>
      </router-link>

      <router-view></router-view>
    </div>
  </v-responsive>
</template>

<script setup>
import { ref, computed } from 'vue'
import api from '../../api/data.json'

const recipes = ref(api.recipes)
const uniqueCategoriesSet = new Set()

const categoriesData = computed(() => {
  const categories = []
  recipes.value.forEach(recipe => {
    if (recipe.category) {
      categories.push(...recipe.category)
    }
  })
  return categories
})

categoriesData.value.forEach(category => {
  uniqueCategoriesSet.add(category)
})

const uniqueCategories = Array.from(uniqueCategoriesSet)
</script>
