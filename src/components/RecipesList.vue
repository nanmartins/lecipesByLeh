<template>
  <v-container class="fill-height px-0">
    <v-responsive class="align-center text-center">
      <h1 class="text-details py-4">Receitas</h1>

      <v-row dense class="d-flex flex-wrap justify-center px-0">
        <div
          v-for="(recipe) in recipes"
          :key="recipe.id"

        >
          <router-link :to="`/recipe/${recipe.id}`" class="text-decoration-none">
            <v-card
              class="d-flex flex-column mx-1 mb-4"
              :style="{ width: screenSize >= 960 ? '350px' : '170px' }"
            >
              <!-- flex-xs="100"
              flex-sm="50"
              flex-md="33.3" -->
              <v-img :src="recipe.img"></v-img>
              <v-card-title>{{ recipe.title }}</v-card-title>
            </v-card>
          </router-link>

        </div>
      </v-row>

      <v-carousel
        cycle
        height="300"
        hide-delimiter-background
        show-arrows="hover"
      >
        <v-carousel-item
          v-for="(recipe, i) in recipes"
          :key="i"
        >
          <router-link :to="`/recipe/${recipe.id}`" class="text-decoration-none">
            <v-card
              class="d-flex flex-column mx-1 mb-4"
              :style="{ width: screenSize >= 960 ? '350px' : '170px' }"
            >
              <!-- flex-xs="100"
              flex-sm="50"
              flex-md="33.3" -->
              <v-img :src="recipe.img"></v-img>
              <v-card-title>{{ recipe.title }}</v-card-title>
            </v-card>
          </router-link>

        </v-carousel-item>
      </v-carousel>


    </v-responsive>
  </v-container>
</template>

<script setup>
import { onBeforeMount, onMounted, ref, watch } from 'vue'
import api from '../../api/data.json'

const recipes = ref(api.recipes)
const screenSize = ref(window.innerWidth)

onMounted(() => {
  const handleSize = () => {
    screenSize.value = window.innerWidth
  }

  window.addEventListener('resize', handleSize)

  onBeforeMount(() => {
    window.removeEventListener('resize', handleSize)
  })
})

console.log(screenSize.value)
</script>
