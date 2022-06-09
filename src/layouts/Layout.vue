<template>
  <v-app app>
    <!-- <v-navigation-drawer app> </v-navigation-drawer> -->

    <appbar-layout />

    <v-main app>
      <v-container fluid class="pa-0">
        <router-view></router-view>
      </v-container>
    </v-main>

    <!-- <v-footer app> </v-footer> -->
  </v-app>
</template>

<script>
import AppbarLayout from "./header/AppBar_Layout.vue";

export default {
  name: "MainLayout",
  components: { AppbarLayout },
};
</script>