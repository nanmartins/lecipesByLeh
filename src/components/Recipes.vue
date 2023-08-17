<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">

      <h1>Recipes</h1>

      <ul>
        <li v-for="(recipe) in recipes" :key="recipe.id">
          <!-- <h2 class="text-center">{{ recipe.title }}</h2> -->
          <v-card class="d-flex flex-column bg-grey pa-4 my-3">
            <v-img :src="recipe.img" class="rounded"></v-img>
            <h2 class="text-center">{{ recipe.title }}</h2>
            <span>{{ recipe.servings }} | {{ recipe.prepTime }}</span>

            <v-card>
              <h3>Ingredientes:</h3>
              <ul>
                <li v-for="(ingredient) in recipe.ingredients" :key="ingredient.id">
                  {{ ingredient }}
                </li>
              </ul>
            </v-card>

            <hr>

            <v-card>
              <h3>Modo de Preparo</h3>
              <ul>
                <li v-for="(step, index) in recipe.prep" :key="step.id">
                  {{ index + 1 }} - {{ step }}
                </li>
              </ul>
            </v-card>
          </v-card>
        </li>
      </ul>

    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import api from '../../api/data.json'

const recipes = ref(api.recipes)

</script>
