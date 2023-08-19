<template>
  <v-app-bar class="px-2 px-md-10 px-lg-16 py-2 py-md-4 bg-primary">
    <v-container class="py-2 px-0">
      <v-responsive>

        <v-row no-gutters>
          <v-col cols="12" class="d-flex align-center justify-center">

            <router-link to="/">
              <v-img :src="LogoHeader" class="logo-img"></v-img>
            </router-link>

          </v-col>
          <hr w-100 color="secondary">
          <v-col class="d-flex align-center justify-center">
            <div>
              <router-link
                to="/recipes"
                class="px-2 py-2 text-secondary text-decoration-none text-caption text-md-overline"
              >RECEITAS
              </router-link>
              <!-- <router-link
                to="/categories"
                class="text-secondary text-decoration-none text-caption text-md-overline"
              >CATEGORIAS
              </router-link> -->
            </div>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>
  </v-app-bar>
</template>

<script setup>
import LogoHeader from '../assets/logo-header.png'
</script>

<style scoped>
.logo-img {
  width: 180px;
}
@media (max-width: 560px) {
  .logo-img {
    width: 140px;
  }
}
</style>
