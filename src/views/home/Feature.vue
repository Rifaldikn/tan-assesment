<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" class="text-center">
        <h1 class="heading-1">Fitur TAN Studies</h1>
        <div>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet urna,
          blandit convallis sed ridiculus integer gravida.
        </div>
      </v-col>
    </v-row>
    <v-row
      :class="$vuetify.breakpoint.smAndDown ? 'px-5' : 'px-15 feature-bg-home '"
      class="justify-center py-10"
    >
      <v-col
        v-for="item in items"
        :key="item.title"
        cols="6"
        md="3"
        class="d-flex justify-center"
      >
        <v-hover v-slot="{ hover }">
          <v-card
            outlined
            :height="$vuetify.breakpoint.mdAndUp ? 260 : 200"
            :elevation="hover ? 5 : 0"
            :class="{ 'on-hover': hover }"
            width="214"
            class="pa-5"
          >
            <v-card-text class="pa-0">
              <v-img
                :src="item.src"
                :height="$vuetify.breakpoint.mdAndUp ? 75 : 60"
                contain
              ></v-img>
              <div
                :class="$vuetify.breakpoint.mdAndUp ? 'subtitle-1' : 'body-2'"
                class="font-weight-bold black--text mt-5"
              >
                {{ item.title }}
                <br />
                {{ item.title2 }}
              </div>
              <div class="caption" v-if="$vuetify.breakpoint.mdAndUp">
                {{ item.description }}
              </div>
            </v-card-text>

            <v-card-actions class="px-0" style="bottom: 0; position: absolute">
              <v-btn
                plain
                text
                :ripple="false"
                color="#4CAF50"
                class="px-0 text-capitalize"
                >learn more<v-icon>mdi-chevron-right </v-icon></v-btn
              >
            </v-card-actions>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { mdiAccount } from '@mdi/js'

export default {
  name: "Feature_Home",
  data() {
    return {
      items: [
        {
          title: "Jelajah Voucher",
          src: require("../../assets/fitur_1.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah",
          title2: "Video Belajar",
          src: require("../../assets/fitur_2.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah Privat",
          title2: "Online",
          src: require("../../assets/fitur_3.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah ",
          title2: "Online Group",
          src: require("../../assets/fitur_4.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah Private",
          title2: "Tatap Muka",
          src: require("../../assets/fitur_5.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah Try ",
          title2: "Out Online",
          src: require("../../assets/fitur_6.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah Kelas ",
          title2: "Online",
          src: require("../../assets/fitur_7.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah Online",
          title2: "Store",
          src: require("../../assets/fitur_8.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    };
  },
};
</script>

<style>
.feature-bg-home {
  background-image: url("../../assets/feature_bg.png");
  background-size: cover;
}
</style>