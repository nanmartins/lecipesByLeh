<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>Home view</h1>

      <ul>
        <li v-for="(recipe) in data" :key="recipe.id">
          <v-card class="d-flex flex-row bg-grey pa-4 my-3">
            <p class="px-4">{{ recipe.title }}</p> |
            <p class="px-4">{{ recipe.servings }}</p> |

            <p class="px-4">{{ recipe.ingredients }}</p>
          </v-card>
        </li>
      </ul>

    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import api from '../../api/data.json'

const data = ref(api.recipes)

</script>
