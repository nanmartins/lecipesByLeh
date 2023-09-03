<template>
  <!-- <v-container class="fill-height"> -->
    <v-responsive>
      <HomeBanner class="pt-4 pb-8"/>
      <SearchInput />
      <RecipesList />
    </v-responsive>
  <!-- </v-container> -->
</template>

<script setup>
import RecipesList from '@/components/RecipesList.vue'
import HomeBanner from '@/components/HomeBanner.vue'
import SearchInput from '@/components/SearchInput.vue'
</script>
