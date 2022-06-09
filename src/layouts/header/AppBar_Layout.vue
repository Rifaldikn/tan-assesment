<template>
  <v-app-bar
    dense
    elevate-on-scroll
    hide-on-scroll
    class="pa-0"
    height="auto"
    elevation="5"
    color="white"
    max-height="180px"
  >
    <!-- <v-row no-gutters justify="start"> -->
    <v-container fluid>
      <v-row no-gutters justify="space-between" class="align-center">
        <v-col cols="12" md="4" class="d-flex justify-center">
          <v-avatar tile size="75" class="hidden-sm-and-down">
            <v-img class="hidden-sm-and-down" :src="tanIcon" contain></v-img>
          </v-avatar>
        </v-col>
        <v-col cols="4" class="hidden-sm-and-down">
          <v-text-field
            outlined
            single-line
            hide-details
            dense
            append-icon="mdi-magnify"
            placeholder="Search..."
            class="font-italic"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="4" class="d-flex justify-end align-center pl-15">
          <v-btn
            plain
            text
            :ripple="false"
            :small="$vuetify.breakpoint.smAndDown"
            elevation="0"
            color="black"
            active-class="success"
            >sign in</v-btn
          >
          <v-divider vertical inset></v-divider>
          <v-btn
            :small="$vuetify.breakpoint.smAndDown"
            plain
            text
            :ripple="false"
            elevation="0"
            color="black"
          >
            sign up
          </v-btn>
        </v-col>
      </v-row>

      <v-row dense class="justify-center align-center hidden-sm-and-down">
        <v-col cols="12" class="pa-0 ma-0">
          <v-divider></v-divider>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center my-1">
          <!-- <v-toolbar-items class="hidden-sm-and-down"> -->
          <v-btn
            plain
            text
            class="mx-4"
            :active-class="'success--text font-weight-bold'"
            :ripple="false"
            v-for="item in navigation"
            :key="item.to"
            :to="item.link"
            >{{ item.label }}</v-btn
          >
          <!-- </v-toolbar-items> -->
        </v-col>
      </v-row>
      <v-row
        no-gutters
        v-if="$vuetify.breakpoint.smAndDown"
        style="position: sticky; top: 0"
      >
        <v-col cols="12" class="d-flex align-center">
          <div class="headline font-weight-bold black--text">TAN Studies</div>
          <v-spacer></v-spacer>
          <v-btn icon><v-icon>mdi-menu</v-icon></v-btn>
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-row> -->
  </v-app-bar>
</template>


<script>
export default {
  name: "Appbar_Layout",
  data() {
    return {
      tanIcon: require("@/assets/tan_icon.png"),
      navigation: [
        {
          label: "Home",
          link: "/",
        },
        {
          label: "Tentang Kami",
          link: "/about",
        },
        {
          label: "Produk Kami",
          link: "/products",
        },
        {
          label: "E-Store",
          link: "/e-store",
        },
        {
          label: "Jadwal Bimbel Offline",
          link: "/schedule",
        },
        {
          label: "Blog",
          link: "/blog",
        },
        {
          label: "Faq",
          link: "/faq",
        },
        {
          label: "Contact Us",
          link: "/contact",
        },
      ],
    };
  },
};
</script>