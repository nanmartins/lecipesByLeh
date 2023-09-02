<template>
  <v-responsive>
    <v-row class="align-center justify-center">

      <v-col cols="6" md="4">
        <h1
          class="pl-6 text-details2 font-weight-bold text-md-h2"
          style="text-shadow: 1px 1px grey"
        >Bem vindos ao meu livro de receitas digital</h1>
      </v-col>

      <v-col cols="6" md="4">
        <v-img :src="HomeImg" max-height="550px"></v-img>
      </v-col>

    </v-row>
  </v-responsive>
</template>

<script setup>
import HomeImg from "../assets/home-banner.png"
</script>
