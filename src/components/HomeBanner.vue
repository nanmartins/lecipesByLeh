<template>
  <v-responsive>
    <div
      class="d-flex align-center justify-center px-2 px-md-4 py-4 mx-auto"
      max-width="1200px"
    >
      <v-col cols="4" class="text-end">
        <h1
          class="px-4 text-details2 text-h4 text-m font-weight-bold"
          style="text-shadow: 1px 1px grey; line-height: normal;"
        >
          Bem vindos ao meu livro de receitas digital
        </h1>
      </v-col>

      <v-col cols="4">
        <v-img :src="HomeImg" max-height="600px" width="300px"></v-img>
      </v-col>
    </div>
  </v-responsive>
</template>

<script setup>
import HomeImg from "../assets/home-banner.png"
</script>
