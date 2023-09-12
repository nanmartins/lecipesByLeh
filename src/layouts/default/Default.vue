<template>
  <v-app class="main-background bg-primary">
    <Header />
    <View />
    <Footer />
  </v-app>
</template>

<script setup>
  import View from './View.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>
