<template>
  <v-footer class="bg-primary mt-6 pa-0 mx-0" sticky-footer>
    <v-row
      no-gutters
      class="justify-center"
      style="border-top: 1px solid #FFB4A2"
    >
      <v-col cols="12" class="d-flex justify-center py-2">
        <v-img :src="LogoHeader" max-width="220px" width="100%"></v-img>
      </v-col>

      <v-col cols="12" class="d-flex justify-center bg-details2">
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 text-primary"
          :icon="icon"
          variant="plain"
          size="small"
        ></v-btn>
      </v-col>

      <v-col
        cols="12"
        class="text-center py-2 text-details2 bg-primary"
      >
        {{ new Date().getFullYear() }} — <strong>LecipesByLeh</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script setup>
  import LogoHeader from '../assets/logo-header.png'

  const icons = [
    'mdi-facebook',
    'mdi-twitter',
    'mdi-linkedin',
    'mdi-instagram',
  ]
</script>
