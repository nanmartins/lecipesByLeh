<template>
  <v-app class="bg-primary">
    <Header />
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
  import Header from '@/components/Header.vue'
</script>
