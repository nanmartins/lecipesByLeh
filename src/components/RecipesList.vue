<template>
  <v-responsive class="align-center text-center mx-auto" max-width="1200px">
    <h1
      class="text-details2 py-4 font-italic"
      style="text-shadow: 1px 1px grey;"
    >Receitas Recentes</h1>

    <v-row dense class="d-flex flex-wrap justify-center px-2 px-md-4">
      <div
        v-for="(recipe) in recentRecipes"
        :key="recipe.id"
      >
        <RecipesCards :recipe="recipe" />
      </div>
    </v-row>

  </v-responsive>

          <!-- <router-link :to="`/recipe/${recipe.id}`" class="text-decoration-none">
            <v-card
              class="d-flex flex-column mx-1 mb-4 bg-details2 px-1 pt-1"
              :style="{ width: breakpointsStore.screenSize >= 960 ? '350px' : '180px' }"
              style="background: linear-gradient(to bottom, rgba(255, 180, 162, 0.7) 1%, rgba(255, 255, 255, 0.5) 20% 85%,rgba(255, 255, 255, 0.05)"
            >
              <v-img
                :src="recipe.img"
                class="rounded"
                style="border: 1px solid #E3FFC3"
              ></v-img>
              <v-card-title
                class="pa-0 ma-0 py-1 px-1 text-h6 text-md-h5 text-white font-weight-bold"
                style="text-shadow: 1px 1px grey"
              >{{ recipe.title }}</v-card-title>
            </v-card>
          </router-link> -->

      <!-- <v-sheet class="d-flex justify-center bg-primary mx-auto" max-width="1165px">
        <v-slide-group
          show-arrows
          prev-icon="mdi-chevron-left text-primary bg-details rounded-xl"
          next-icon="mdi-chevron-right text-primary bg-details rounded-xl"
        >
          <v-slide-group-item
            v-for="(recipe) in recipes"
            :key="recipe.id"
          >
            <router-link :to="`/recipe/${recipe.id}`" class="text-decoration-none pa-0 ma-0">
              <v-card
                class="d-flex flex-column mx-xs-0 mx-1 mx-md-1 mb-4 bg-details px-1 py-1 ma-0"
                :style="{ width: screenSize >= 960 ? '346px' : '278px' }"
              >
                <v-img
                  :style="{ height: screenSize <= 960 ? '180px' : 'auto' }"
                  :src="recipe.img"
                  class="rounded"
                ></v-img>
                <v-card-title
                  class="text-primary font-weight-bold"
                  style="text-shadow: 1px 1px grey"
                >{{ recipe.title }}</v-card-title>
              </v-card>
            </router-link>

          </v-slide-group-item>
        </v-slide-group>
      </v-sheet> -->

  <!-- </v-container> -->
</template>

<script setup>
import { computed, ref } from 'vue'
import api from '../../api/data.json'
import RecipesCards from './RecipesCards.vue'

const recipes = ref(api.recipes)

// Ordering by latest first
const recentRecipes = computed(() => {
  const sortedRecipes = recipes.value.slice().sort((a, b) => new Date(b.dateFormatted) - new Date(a.dateFormatted))
  return sortedRecipes.slice(0, 6)
})

// Formating API date value
recipes.value.forEach(recipe => {
  recipe.dateFormatted = new Date(recipe.date.split('/').reverse().join('-'))
})

</script>
