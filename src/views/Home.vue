<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center fill-height">
      <h1>Home view</h1>

      {{ data }}
    </v-responsive>
  </v-container>
</template>

<script setup>
import { ref } from 'vue'
import api from '../../api/data.json'

const data = ref(api.recipes)

</script>
