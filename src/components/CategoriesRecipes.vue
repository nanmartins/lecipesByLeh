<template>
  <v-responsive class="align-center text-center mx-auto" max-width="1200px">
    <div>

      <CategoriesLinks />

      <h1
        class="text-details2 py-4"
        style="text-shadow: 1px 1px grey;"
      >{{ currentCategory }}</h1>

      <v-row dense class="d-flex flex-wrap justify-center px-2 px-md-4">
        <div v-for="recipe in recipesForCategory" :key="recipe.id">
          <RecipesCards :recipe="recipe" />
        </div>
      </v-row>
    </div>
  </v-responsive>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import api from '../../api/data.json'
import RecipesCards from '@/components/RecipesCards.vue'
import CategoriesLinks from '@/components/CategoriesLinks.vue'

const route = useRoute()

const recipes = api.recipes

// Filtra as receitas pela categoria atual da rota
const recipesForCategory = computed(() => {
  const category = route.params.category
  return recipes.filter(recipe => recipe.category.includes(category))
})

const currentCategory = computed(() => route.params.category)
</script>
