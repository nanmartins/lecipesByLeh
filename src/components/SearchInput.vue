<template>
  <v-responsive
    max-width="1200px"
    class="text-center mx-auto"
  >
    <v-text-field placeholder="Procurar..." class="text-details">
      <template v-slot:append>
        <v-icon color="red" class="bg-details2 pa-7">
          mdi-magnify
        </v-icon>
      </template>
    </v-text-field>
  </v-responsive>
</template>

<script setup>

</script>
