<template>
  <v-responsive
    max-width="1200px"
    class="text-center mx-auto"
  >
    <h1
      class="text-details2"
      style="text-shadow: 1px 1px grey"
    >Receitas</h1>

    <v-row dense class="d-flex flex-wrap justify-center px-0 pt-4">
      <div
        v-for="(recipe) in recipes"
        :key="recipe.id"
      >
        <RecipesCards :recipe="recipe" />
      </div>
    </v-row>

  </v-responsive>
</template>

<script setup>
// import { useBreakpointsStore } from '@/store/breakpoints.js'
import { computed, ref } from 'vue'
import api from '../../api/data.json'
import RecipesCards from '@/components/RecipesCards.vue'

const recipes = ref(api.recipes)

// Breakpoint Store
// const breakpointsStore = useBreakpointsStore()

// onBeforeUnmount(() => {
//   breakpointsStore.stopResizeListener()
// })

</script>
