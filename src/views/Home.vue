<template>
  <v-responsive>
    <HomeBanner class="pb-8"/>
    <SearchInput />
    <RecipesList />
  </v-responsive>
</template>

<script setup>
import RecipesList from '@/components/RecipesList.vue'
import HomeBanner from '@/components/HomeBanner.vue'
import SearchInput from '@/components/SearchInput.vue'
</script>
