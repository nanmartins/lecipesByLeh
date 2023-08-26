<template>
  <router-link :to="`/recipe/${props.recipe.id}`" class="text-decoration-none">
    <v-card
      class="d-flex flex-column mx-1 mb-4 bg-details2 px-1 pt-1"
      :style="{ width: breakpointsStore.screenSize >= 960 ? '350px' : '180px' }"
      style="background: linear-gradient(to bottom, rgba(255, 180, 162, 0.7) 1%, rgba(255, 255, 255, 0.3) 20% 85%,rgba(255, 255, 255, 0.05)"
    >
      <v-img
        :src="props.recipe.img"
        class="rounded"
        style="border: 1px solid #E3FFC3"
      ></v-img>
      <v-card-title
        class="pa-0 ma-0 py-1 px-1 text-h6 text-md-h5 text-white font-weight-bold"
        style="text-shadow: 1px 1px grey"
      >{{ props.recipe.title }}</v-card-title>
    </v-card>
  </router-link>

</template>

<script setup>
  import { useBreakpointsStore } from '@/store/breakpoints.js'
  import { onBeforeUnmount } from 'vue'

  const breakpointsStore = useBreakpointsStore()

  breakpointsStore.startResizeListener()

  onBeforeUnmount(() => {
    breakpointsStore.stopResizeListener()
  })
  const props = defineProps({
    recipe: Object,
  })

</script>
