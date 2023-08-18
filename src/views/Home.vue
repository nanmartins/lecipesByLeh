<template>
  <v-container class="fill-height">
    <v-responsive class="align-center text-center">
      <h1>Home</h1>
      <router-link to="/recipes">Recipes</router-link>
      <router-view></router-view>
    </v-responsive>
  </v-container>
</template>

<script setup>
</script>
