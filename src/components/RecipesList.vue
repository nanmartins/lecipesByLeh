<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center">
      <h1>Receitas</h1>

      <v-row dense class="d-flex flex-wrap justify-center">
        <div
          v-for="(recipe) in recipes"
          :key="recipe.id"

        >
          <router-link :to="`/recipe/${recipe.id}`">
            <v-card
              class="d-flex flex-column mx-2 mb-4"
              width="300px"
              flex-xs="100"
              flex-sm="50"
              flex-md="33.3"
            >
              <v-img :src="recipe.img"></v-img>
              <v-card-title>{{ recipe.title }}</v-card-title>
            </v-card>
          </router-link>

        </div>
      </v-row>
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import api from '../../api/data.json'

const recipes = ref(api.recipes)
</script>
