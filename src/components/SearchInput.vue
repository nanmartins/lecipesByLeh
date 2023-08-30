<template>
  <v-card
    class="mx-auto"
    color="primary"
    max-width="600"
    flat
  >
    <v-card-text>
      <v-text-field
        :loading="loading"
        density="compact"
        variant="outlined"
        label="Buscar receitas..."
        append-inner-icon="mdi-magnify"
        class="text-details"
        single-line
        hide-details
        @click:append-inner="onClick"
      ></v-text-field>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref } from 'vue'

const loaded = ref(false)
const loading = ref(false)

const onClick = () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
    loaded.value = true
  }, 2000);
}
</script>

<style scoped>

</style>
