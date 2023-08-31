<template>
  <v-responsive>
    <div
      class="d-flex align-center justify-space-between px-2 px-md-4 py-4 mx-2 mx-md-4 rounded"
      style="border: 1px solid #FFB4A2"
    >
      <h1 class="px-4">Bem vindo ao meu livro de receitas digital</h1>
      <v-img :src="HomeImg" height="500px" width="300px"></v-img>
    </div>
  </v-responsive>
</template>

<script setup>
import HomeImg from "../assets/home-banner.png"
</script>
