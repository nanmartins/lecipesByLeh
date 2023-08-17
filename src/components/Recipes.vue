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

            <v-card class="px-4 py-6">
              <h3 class="pb-8">Ingredientes:</h3>
              <ul>
                <v-list
                  v-for="(ingredient) in recipe.ingredients"
                  :key="ingredient.id"
                  class="list-decoration-none"
                >
                  <v-checkbox :label="ingredient" class="ma-0 pa-0"></v-checkbox>
                </v-list>
              </ul>

              <hr>

              <div v-if="recipe.ingredientsExtra">
                <h3 class="py-6">{{ recipe.ingredientsExtra.title }}</h3>

                <ul>
                  <v-list v-for="(ingredient) in recipe.ingredientsExtra.ingredients" :key="ingredient.id">
                    <v-checkbox :label="ingredient"></v-checkbox>
                  </v-list>
                </ul>
              </div>
            </v-card>

            <hr>

            <v-card>
              <h3>Modo de preparo:</h3>
              <ul>
                <v-list v-for="(prep, index) in recipe.prep" :key="prep.id">
                  <v-card class="d-flex" :class="{ 'bg-grey' : index % 2 === 0}">
                    <span style="
                        position: relative;
                        top: 10px;
                        left: 20px;
                        z-index: 1000;
                        background: red;
                        height: 20px;
                        width: 20px;
                        border-radius: 50%;
                      "
                    >{{ index + 1 }}</span>

                    <v-col cols="4" align-self="start" class="pa-0 my-2">
                      <v-img :src="prep.stepImg" class="rounded" max-width="400px"></v-img>
                    </v-col>

                    <v-col
                      cols="8"
                      align-self="center"
                      class="d-flex flex-shrink-1 justify-center"
                    >
                      <p>{{ prep.step }}</p>
                    </v-col>

                  </v-card>
                </v-list>
              </ul>

              <div v-if="recipe.prepExtra">
                <h3>{{ recipe.prepExtra.title }}</h3>

                <ul>
                  <li v-for="(prep, index) in recipe.prepExtra.prep" :key="prep.id">
                    <v-card class="d-flex">
                    <span>{{ index + 1 }}</span>

                      <v-col cols="4" align-self="center" class="pa-0">
                        <v-img :src="prep.stepImg" class="rounded" max-width="400px"></v-img>
                      </v-col>

                      <v-col cols="8" align-self="center" class="d-flex flex-shrink-1 justify-center">
                        <p>{{ prep.step }}</p>
                      </v-col>
                    </v-card>
                  </li>
                </ul>
              </div>

            </v-card>

          </v-card>

          <v-card>
            <ul>
              <li v-for="(tip) in recipe.tips" :key="tip.id">
                {{ tip }}
              </li>
            </ul>
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
