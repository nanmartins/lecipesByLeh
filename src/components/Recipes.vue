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

              <hr>

              <div v-if="recipe.ingredientsExtra">
                <h3>{{ recipe.ingredientsExtra.title }}</h3>

                <ul>
                  <li v-for="(ingredient) in recipe.ingredientsExtra.ingredients" :key="ingredient.id">
                    {{ ingredient }}
                  </li>
                </ul>
              </div>
            </v-card>

            <hr>

            <v-card>
              <h3>Modo de Preparo</h3>
              <ul>
                <li v-for="(prep, index) in recipe.prep" :key="prep.id">
                  <v-card class="d-flex">
                    <!-- <span>{{ index + 1 }}</span> -->

                    <v-col cols="4" align-self="center">
                      <v-img :src="prep.stepImg" class="rounded" max-width="400px"></v-img>
                    </v-col>

                    <v-col cols="8" align-self="center" class="d-flex flex-shrink-1 justify-center">
                      <p>{{ prep.step }}</p>
                    </v-col>

                  </v-card>
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
