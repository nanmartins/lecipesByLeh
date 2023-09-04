<template>
  <v-card
    class="text-center pb-2 my-6 mx-2 mx-md-auto"
    color="primary"
    max-width="1200"
    flat
  >
    <v-card-text>
      <v-text-field
        v-model="busca"
        :loading="loading"
        density="compact"
        variant="outlined"
        label="Buscar receitas..."
        append-inner-icon="mdi-magnify"
        class="text-details mx-auto"
        style="max-width: 600px"
        single-line
        hide-details
        @click:append-inner="searchRecipes"
        @keydown.enter="searchRecipes"
      ></v-text-field>
    </v-card-text>

    <h1
      v-if="recipesFilter.length > 0"
      class="text-details2 py-2 font-italic"
      style="text-shadow: 1px 1px grey;"
    >Resultado da pesquisa:</h1>

    <v-row
      v-if="recipesFilter.length > 0"
      dense
      class="d-flex flex-wrap justify-center px-2 px-md-4 pt-4 pb-6">
      <div
        v-for="(recipe) in recipesFilter"
        :key="recipe.id"
      >
        <RecipesCards :recipe="recipe" />
      </div>
    </v-row>

  </v-card>
</template>

<script setup>
import { ref } from 'vue'
import api from '../../api/data.json'
import { useRouter } from 'vue-router'
import RecipesCards from './RecipesCards.vue'

const busca = ref("")
const recipesFilter = ref([])
const loading = ref(false)

const router = useRouter()

const searchRecipes = async () => {
  loading.value = true

  setTimeout(() => {
    recipesFilter.value = api.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(busca.value.toLowerCase())
    )
    loading.value = false
  }, 2000)
}
</script>
