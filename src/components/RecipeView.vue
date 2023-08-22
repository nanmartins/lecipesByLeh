<template>
    <v-responsive class="d-flex justify-center align-center text-center fill-height">
      <v-col>
        <!-- <h2>{{ recipe.title }}</h2> -->
        <!-- <div class="mx-auto"> -->
          <v-card
            max-width="1200px"
            class="mx-auto px-1 px-md-2 py-1 bg-details2"
            style="background: linear-gradient(to bottom, rgba(255, 180, 162, 0.7) 1%, rgba(255, 255, 255, 0.5) 20% 85%,rgba(255, 255, 255, 0.05)"
          >
            <v-img
              :src="recipe.img"
              class="rounded"
              style="border: 1px solid #E3FFC3"
            ></v-img>
            <h2
              class="text-h4 text-md-h3 text-primary py-2 font-weight-bold"
              style="text-shadow: 1px 2px grey"
            >{{ recipe.title }}
            </h2>
            <div class="d-flex justify-center pb-4 pt-2">
              <div class="d-flex align-center px-2">
                <v-icon
                  icon="mdi:mdi-account"
                  color="primary"
                  style="text-shadow: 1px 1px grey"
                ></v-icon>
                <p class="text-textGray">{{ recipe.servings }}</p>
              </div>
              <div class="d-flex align-center px-2">
                <v-icon
                  icon="mdi:mdi-clock-time-four"
                  color="primary"
                  style="text-shadow: 1px 1px grey"
                ></v-icon>
                <p class="text-textGray pl-1">{{ recipe.prepTime }}</p>
              </div>
            </div>

            <!-- INGREDIENTES -->
            <div
              class="bg-backgrounds2 rounded px-0 px-md-4"
              style="border: 1px solid #E3FFC3"
            >
              <h3 class="py-4 text-h6 text-md-h5 text-grey text-decoration-underline font-weight-bold">Ingredientes:</h3>
              <ul class="pb-4">
                <v-list
                  v-for="(ingredient) in recipe.ingredients"
                  :key="ingredient.id"
                  class="list-decoration-none py-0 px-0 pr-2 px-md-4 text-left bg-backgrounds2"
                >
                  <v-checkbox
                    :label="ingredient"
                    color="details"
                    class="ma-0 pa-0 d-flex"
                    :style="{'text-decoration': ingredient.checked ? 'line-through' : 'none'}"
                  ></v-checkbox>
                </v-list>
              </ul>

              <hr class="mx-4 mx-md-6">

              <!-- INGREDIENTES EXTRA (caso houver) -->
              <div v-if="recipe.ingredientsExtra" class="py-4">
                <h3 class="text-h6 text-md-h5 text-grey text-decoration-underline font-weight-bold">{{ recipe.ingredientsExtra.title }}</h3>

                <ul>
                  <v-list
                    v-for="(ingredient) in recipe.ingredientsExtra.ingredients"
                    :key="ingredient.id"
                    class="list-decoration-none py-0 px-2 px-md-4 text-left bg-backgrounds2"
                    >
                    <v-checkbox :label="ingredient" color="details" class="ma-0 pa-0 d-flex"></v-checkbox>

                  </v-list>
                </ul>
              </div>

            </div>

            <!-- Prep guide -->
            <div>
              <h1
                class="text-primary"
                style="text-shadow: 1px 1px grey;"
              >Modo de preparo:</h1>

              <ul style="border: 1px solid #E3FFC3"  class="rounded">
                <v-list
                  v-for="(prep, index) in recipe.prep"
                  :key="prep.id"
                  class="bg-backgrounds2 pa-0 ma-0"
                >
                  <v-card class="d-flex pa-0 ma-0 rounded-0" :class="{ 'bg-backgrounds2' : index % 2 === 0}">
                    <span
                      class="text-details bg-primary font-weight-bold text-center"
                      style="
                        position: relative;
                        top: 15px;
                        left: 30px;
                        z-index: 1000;
                        height: 25px;
                        width: 25px;
                        border-radius: 50%;
                        box-shadow: 1px 1px #FBA083;
                      "
                    >{{ index + 1 }}</span>

                    <v-col cols="5" align-self="start" class="pa-0 my-2">
                      <v-img :src="prep.stepImg" class="rounded" max-width="400px"></v-img>
                    </v-col>

                    <v-col
                      cols="8"
                      align-self="center"
                      class="d-flex flex-shrink-1 justify-center pr-md-6"
                    >
                      <p class="text-textGray">{{ prep.step }}</p>
                    </v-col>

                  </v-card>
                </v-list>
              </ul>

            </div>

          </v-card>

      </v-col>
    </v-responsive>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useRoute } from 'vue-router'
import api from '../../api/data.json'

const route = useRoute()
const recipeId = ref(route.params.id)

const recipe = computed(() => {
  return api.recipes.find(recipe => recipe.id === recipeId.value)
})
</script>
