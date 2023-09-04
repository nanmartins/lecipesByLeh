<template>
  <v-responsive>
<<<<<<< HEAD
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
=======
    <v-row class="align-center justify-center">

      <v-col cols="6" md="4">
        <h1
          class="pl-6 text-details2 font-weight-black font-italic text-md-h2"
          style="text-shadow: 1px 1px grey"
        >Bem vindos ao meu livro de receitas digital</h1>
      </v-col>

      <v-col cols="6" md="4">
        <v-img :src="HomeImg" max-height="550px"></v-img>
      </v-col>

    </v-row>
>>>>>>> b5a3587889fccb8d885c6465a29fec0139d69d38
  </v-responsive>
</template>

<script setup>
import HomeImg from "../assets/home-banner.png"
</script>
