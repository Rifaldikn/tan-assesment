<template>
  <v-app app>
    <!-- <v-navigation-drawer app> </v-navigation-drawer> -->

    <appbar-layout />

    <v-main app>
      <v-container fluid class="pa-0">
        <!-- <v-fade-transition> -->
        <router-view></router-view>
        <!-- </v-fade-transition> -->
      </v-container>
    </v-main>

    <footer-layout />

    <v-dialog width="unset" :value="successDialog" persistent>
      <success-modal />
    </v-dialog>
  </v-app>
</template>

<script>
import AppbarLayout from "./header/AppBar_Layout.vue";
import FooterLayout from "./footer/Footer.vue";
import SuccessModal from "../components/SuccessModal.vue";

import { mapGetters } from "vuex";
export default {
  name: "MainLayout",
  components: { AppbarLayout, FooterLayout, SuccessModal },
  computed: {
    ...mapGetters(["successDialog"]),
  },
};
</script>,
    SuccessModal