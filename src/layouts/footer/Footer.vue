<template>
  <v-container
    fluid
    :class="$vuetify.breakpoint.mdAndUp ? 'pa-15' : 'pa-10'"
    id="footer-bg"
  >
    <v-row no-gutters align="center">
      <v-col class="text-center white--text headline mt-10" cols="12"
        >Supported By</v-col
      >
    </v-row>
    <v-row no-gutters class="justify-space-between align-center mt-10">
      <v-col
        cols="12"
        md="auto"
        v-for="i in 5"
        :key="i"
        class="d-flex align-center justify-center"
      >
        <v-card
          outlined
          width="200"
          height="58"
          color="white"
          class="text-center mt-3"
        >
          <v-container fluid class="text-center ma-auto">
            <span class="font-weight-bold subtitle-1">Sponsor {{ i }}</span>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row no-gutters class="space-around mt-5">
      <v-col cols="12" md="4">
        <v-card
          width="200"
          height="58"
          outlined
          color="white"
          class="text-center my-5"
        >
          <v-container fluid>
            <span class="font-weight-bold subtitle-1">Company</span>
          </v-container>
        </v-card>
        <div class="grey--text subtitle-1" style="width: 323px">
          Jl. H. Yahya Nuih No. 20A RT 01 RW 05, Margonda Raya, Kemiri Muka,
          Kecamatan Beji, Kota Depok, Jawa Barat 16423
        </div>
        <v-img
          contain
          position="left"
          class="mt-5"
          height="190"
          width="307"
          :src="require(`../../assets/maps.png`)"
        ></v-img>
      </v-col>

      <v-col cols="12" md="2" class="d-flex white--text mt-5">
        <v-container fluid>
          <v-row align="start">
            <v-col cols="12">
              <div class="white--text title font-weight-regular">Menu</div>

              <!-- <v-list color="transparent"> -->
              <v-btn
                block
                text
                plain
                link
                :ripple="false"
                v-for="link in menuItems"
                :key="link.label"
                active-class="success--text"
                class="grey--text text-capitalize pa-0 ma-0"
                :to="link.to"
              >
                <v-col class="d-flex subtitle-1 pa-0 justify-start">
                  <span>{{ link.label }}</span>
                </v-col>
                <!-- <v-list-item-content>{{ link.label }} </v-list-item-content> -->
              </v-btn>
              <!-- </v-list> -->
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" md="3" class="mt-5">
        <v-container fluid>
          <v-card color="transparent" class="white--text" flat max-width="250">
            <v-row align="start" justify="start">
              <v-col cols="12" class="title font-weight-regular"
                >Download Aplikasi Kami</v-col
              >
              <v-col cols="12" class="align-center justify-space-between">
                <v-img
                  contain
                  max-width="140"
                  :src="require(`../../assets/play_store.png`)"
                ></v-img>
                <v-img
                  contain
                  class="mt-5"
                  max-width="140"
                  :src="require(`../../assets/app_store.png`)"
                ></v-img>
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>

      <v-col cols="12" md="3" class="white--text mt-5">
        <v-container fluid>
          <v-card max-width="300" flat color="transparent">
            <v-row align="start" justify="start">
              <v-col cols="12" class="title white--text font-weight-regular">
                Get in Touch
              </v-col>
              <v-col cols="12" class="grey--text subtitle-1">
                Contact us if you need help with anything
              </v-col>
              <v-col cols="12">
                <v-btn
                  elevation="0"
                  class="mt-1"
                  block
                  height="50"
                  color="success"
                >
                  <v-avatar color="mr-10" size="25">
                    <v-img contain :src="require(`../../assets/WhatsApp.png`)">
                    </v-img>
                  </v-avatar>

                  08123456789</v-btn
                >
                <v-btn
                  elevation="0"
                  lef
                  class="mt-5"
                  block
                  height="50"
                  color="success"
                >
                  <v-avatar color="mr-10" size="25">
                    <v-img contain :src="require(`../../assets/WhatsApp.png`)">
                    </v-img>
                  </v-avatar>

                  08123456789</v-btn
                >
                <v-btn
                  elevation="0"
                  class="mt-5"
                  block
                  height="50"
                  color="success"
                >
                  <v-avatar color="mr-10" size="25">
                    <v-img contain :src="require(`../../assets/WhatsApp.png`)">
                    </v-img>
                  </v-avatar>

                  08123456789</v-btn
                >
              </v-col>
            </v-row>
          </v-card>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Footer_Layout",
  data() {
    return {
      menuItems: [
        { label: "Produk", to: "/products" },
        { label: "Partner", to: "/partners" },
        { label: "Jadwal Bimbel", to: "/course" },
        { label: "Tentang Kami", to: "/about" },
      ],
    };
  },
};
</script>

<style>
#footer-bg {
  background: linear-gradient(
    180deg,
    rgba(66, 73, 91, 0.0001) -68.11%,
    #273341 74.28%
  );
}
</style>