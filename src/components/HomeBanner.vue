<template>
  <v-responsive class="bg-details2" style="background: linear-gradient()">
    <!-- <v-row class="align-center justify-center"> -->

      <v-container class="d-flex justify-center align-center">
        <v-col cols="6" md="4" lg="4" xl="3">
          <h1
            class="pl-2 text-primary font-weight-black font-italic text-md-h3 text-lg-h2"
            style="
              text-shadow: 1px 1px grey;
              line-height: 100%;
            "
          >Livro de receitas digital da Leh.</h1>
        </v-col>

        <v-col cols="6" md="4" lg="4" xl="3">
          <v-img :src="HomeImg" max-height="600px"></v-img>
        </v-col>
      </v-container>

    <!-- </v-row> -->
  </v-responsive>
</template>

<script setup>
import HomeImg from "../assets/home-banner.png"
</script>
