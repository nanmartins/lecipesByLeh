<template>
  <v-app-bar class="px-2 py-3 py-md-6 bg-primary">
    <v-container class="py-2 px-0">
      <v-responsive>

        <v-row no-gutters>
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
                  font-weight-bold
                "
              >
                <v-btn
                  class="px-2 py-0 my-0 text-caption"
                  style="border: 1px solid #FFB4A2"
                  height="22px"
                >Receitas</v-btn>
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
