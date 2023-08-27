<template>
  <v-app class="bg-primary">
    <Header />
    <default-view class="fill-height" />
    <Footer />
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  import Header from '@/components/Header.vue'
  import Footer from '@/components/Footer.vue'
</script>
