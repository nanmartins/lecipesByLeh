<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <div>
        <h2>{{ recipe.title }}</h2>
        <div>
          <v-card>
            <v-img :src="recipe.img"></v-img>
            <!-- <v-card-title>{{ recipe.title }}</v-card-title> -->
            <!-- Mais informações da receita aqui -->
          </v-card>
        </div>
      </div>
    </v-responsive>
  </v-container>
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
