<template>
  <v-app-bar class="px-2 py-4 py-md-6 bg-primary">
    <v-container class="py-2 px-0">
      <v-responsive>

        <v-row no-gutters class="pt-1">
          <v-col cols="12" class="d-flex align-center justify-center">
            <router-link to="/">
              <v-img :src="LogoHeader" class="logo-img"></v-img>
            </router-link>
          </v-col>

          <v-col class="d-flex align-center justify-center">
            <div>
              <router-link
                to="/recipes"
                class="
                  px-2
                  text-details2
                  text-decoration-none
                  font-italic
                  font-weight-bold
                  text-caption
                "
              >
                <v-btn>Receitas</v-btn>
              </router-link>
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
    width: 150px;
  }
}
</style>
