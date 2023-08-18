<template>
  <v-app-bar class="px-2 px-md-10 px-lg-16 bg-primary" height="10px">
    <v-container class="py-0 px-0">
      <v-responsive>
        <div class="d-flex align-center justify-center py-2">

          <router-link to="/">
            <v-img :src="LogoHeader" class="logo-img"></v-img>
          </router-link>

          <!-- <div>
            <router-link
              to="/recipes"
              class="mr-2 mr-md-4 text-details text-decoration-none text-caption text-md-overline"
            >RECEITAS
            </router-link>
            <router-link
              to="/recipes"
              class="text-details text-decoration-none text-caption text-md-overline"
            >CATEGORIAS</router-link>
          </div> -->

        </div>
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
    width: 130px;
  }
}
</style>
