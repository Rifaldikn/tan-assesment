<template>
  <v-app-bar
    dense
    hide-on-scroll
    class="pa-0"
    height="auto"
    elevation="3"
    color="white"
    max-height="180px"
  >
    <!-- <v-row no-gutters justify="start"> -->
    <v-container fluid>
      <v-row
        no-gutters
        v-if="
          $vuetify.breakpoint.smAndDown || $route.meta.layout == 'AdminLayout'
        "
        style="position: sticky; top: 0"
      >
        <v-col cols="12" class="d-flex align-center">
          <div
            class="headline font-weight-bold black--text"
            :class="
              $route.meta.layout == 'AdminLayout' && $vuetify.breakpoint.mdAndUp
                ? 'pl-15'
                : ''
            "
            @click="$router.push('/')"
          >
            TAN Studies
          </div>
          <v-spacer></v-spacer>

          <v-menu left :offset-y="true">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                icon
                tile
                plain
                v-bind="attrs"
                v-on="on"
                v-if="
                  $route.meta.layout != 'AdminLayout' ||
                  $vuetify.breakpoint.smAndDown
                "
              >
                <v-icon>mdi-menu</v-icon>
              </v-btn>
            </template>

            <v-list>
              <v-list-item
                v-for="(item, index) in navigation"
                :to="item.link"
                :key="index"
                active-class="success--text"
              >
                <v-list-item-title>{{ item.label }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
          <v-col
            v-if="$vuetify.breakpoint.mdAndUp"
            cols="auto"
            class="mr-15 d-flex align-center"
          >
            <v-avatar
              class="pa-2 mr-5"
              rounded="100"
              size="40"
              style="border: 1px solid grey"
            >
              <v-img contain src="../../assets/people.png"></v-img>
            </v-avatar>

            <span>John Doe</span>
          </v-col>
        </v-col>
      </v-row>
      <v-row no-gutters justify="space-between" class="align-center">
        <v-col
          v-if="$route.meta.layout != 'AdminLayout'"
          cols="12"
          md="4"
          class="d-flex justify-center"
        >
          <v-avatar tile size="75" class="hidden-sm-and-down">
            <v-img class="hidden-sm-and-down" :src="tanIcon" contain></v-img>
          </v-avatar>
        </v-col>
        <v-col
          cols="4"
          class="hidden-sm-and-down"
          v-if="$route.meta.layout != 'AdminLayout'"
        >
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

        <v-col
          cols="12"
          md="4"
          class="d-flex justify-end align-center pl-15"
          v-if="$route.meta.layout != 'AdminLayout'"
        >
          <v-btn
            plain
            text
            :ripple="false"
            :small="$vuetify.breakpoint.smAndDown"
            elevation="0"
            :color="loginDialog ? 'success' : 'black'"
            active-class="success"
            @click="loginDialog = true"
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
            @click="route.push({ name: 'SignUp' })"
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
            v-for="item in $route.meta.layout != 'AdminLayout'
              ? navigation
              : navigationAdmin"
            :key="item.to"
            :to="item.link"
            >{{ item.label }}</v-btn
          >
          <!-- </v-toolbar-items> -->
        </v-col>
      </v-row>
    </v-container>
    <!-- </v-row> -->
    <v-dialog v-model="loginDialog" max-width="770px">
      <LoginDialog @closeDialog="loginDialog = false" />
    </v-dialog>
  </v-app-bar>
</template>


<script>
import LoginDialog from "./Login_Dialog.vue";

export default {
  name: "Appbar_Layout",
  components: { LoginDialog },
  data() {
    return {
      tanIcon: require("@/assets/tan_icon.png"),
      loginDialog: false,
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
          link: "/store",
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
      navigationAdmin: [
        {
          label: "Dashboard",
          link: "/signup",
        },
        {
          label: "Categories",
          link: "/",
        },
        {
          label: "Voucher Saya",
          link: "/",
        },
        {
          label: "Cara Order",
          link: "/",
        },
      ],
    };
  },
};
</script>