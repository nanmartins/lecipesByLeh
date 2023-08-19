<template>
  <v-container class="fill-height px-0">
    <v-responsive class="align-center text-center">
      <h1 class="text-details py-4">Receitas</h1>

      <!-- <v-row dense class="d-flex flex-wrap justify-center px-0">
        <div
          v-for="(recipe) in recipes"
          :key="recipe.id"

        >
          <router-link :to="`/recipe/${recipe.id}`" class="text-decoration-none">
            <v-card
              class="d-flex flex-column mx-1 mb-4"
              :style="{ width: screenSize >= 960 ? '350px' : '170px' }"
            >
              <v-img :src="recipe.img"></v-img>
              <v-card-title>{{ recipe.title }}</v-card-title>
            </v-card>
          </router-link>

        </div>
      </v-row> -->

      <v-sheet class="d-flex justify-center bg-primary mx-auto" max-width="1165px">
        <v-slide-group
          show-arrows
          prev-icon="mdi-chevron-left text-primary bg-secondary rounded-xl"
          next-icon="mdi-chevron-right text-primary bg-secondary rounded-xl"
        >
          <v-slide-group-item
            v-for="(recipe) in recipes"
            :key="recipe.id"
          >
            <router-link :to="`/recipe/${recipe.id}`" class="text-decoration-none">
              <v-card
                class="d-flex flex-column mx-1 mb-4 bg-details pa-1"
                :style="{ width: screenSize >= 960 ? '346px' : '246px' }"
              >
                <v-img
                  :src="recipe.img"
                  :style="{ height: screenSize <= 960 ? '165px' : 'auto' }"
                  class="rounded"
                  height="165px"
                ></v-img>
                <v-card-title>{{ recipe.title }}</v-card-title>
              </v-card>
            </router-link>

          </v-slide-group-item>
        </v-slide-group>
      </v-sheet>

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
</script>
