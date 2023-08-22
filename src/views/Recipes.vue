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
        <router-link :to="`/recipe/${recipe.id}`" class="text-decoration-none">
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
        </router-link>

      </div>
    </v-row>

  </v-responsive>
</template>

<script setup>
import { useBreakpointsStore } from '@/store/breakpoints.js'
import { computed, ref, onBeforeUnmount } from 'vue'
import api from '../../api/data.json'

const recipes = ref(api.recipes)

// Breakpoint Store
const breakpointsStore = useBreakpointsStore()
breakpointsStore.startResizeListener()

onBeforeUnmount(() => {
  breakpointsStore.stopResizeListener()
})

</script>
