<template>
  <v-footer class="bg-primary mt-2">
    <v-row justify="center" no-gutters>
      <v-col cols="12" class="d-flex justify-center py-2">
        <v-img :src="LogoHeader" max-width="300px" width="100%"></v-img>
      </v-col>

      <v-row class="d-flex justify-center py-4">
        <v-btn
          v-for="link in links"
          :key="link"
          color="details2"
          variant="text"
          class="mx-2 rounded"
        >
          {{ link }}
        </v-btn>
      </v-row>

      <v-col class="text-center my-2 text-details" cols="12" height="30px">
        {{ new Date().getFullYear() }} — <strong>LecipesByLeh</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
  import LogoHeader from '../assets/logo-header.png'

  const links = ["Inicio", "Sobre", "Contato"]
</script>
