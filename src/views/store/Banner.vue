<template>
  <v-row class="justify-center py-10" v-if="$vuetify.breakpoint.mdAndUp">
    <v-col md="auto" class="d-flex justify-end">
      <v-card
        elevation="10"
        width="700"
        min-height="520"
        height="auto"
        class="pa-5"
      >
        <v-container fluid class="fill-height">
          <v-row justify="center" class="fill-height">
            <v-col cols="12">
              <div class="text-uppercase font-weight-bold title text-center">
                Rekomendasi Buku Paling Laris
              </div>
            </v-col>
            <v-col cols="auto">
              <v-img
                width="230"
                height="339"
                :src="require(`@/assets/store/book_banner.png`)"
              ></v-img>
            </v-col>
            <v-col cols="auto">
              <v-card flat width="100%" max-width="212" height="auto">
                <!-- <v-container fluid class="pa-0 fill-height"> -->
                <v-row no-gutters class="fill-height" align="center">
                  <v-col cols="12">
                    <div class="headline font-weight-bold">
                      Best of The Best Psikotes & TPA
                    </div>
                  </v-col>
                  <v-col cols="12" class="grey--text caption d-flex pa-0">
                    <v-col cols="6" class="pl-0">
                      <div>Author</div>
                      <div class="font-weight-bold body-2 black--text">
                        Buku Bagus
                      </div>
                    </v-col>
                    <v-col cols="6" class="pl-0">
                      <div>Program</div>
                      <div class="font-weight-bold body-2 black--text">TPA</div>
                    </v-col>
                  </v-col>

                  <v-col cols="12" class="pt-5 pb-2">
                    <div class="headline font-weight-bold success--text">
                      Rp. 150.000
                    </div>
                    <div class="grey--text text text-decoration-line-through">
                      Rp. 200.000
                    </div>
                  </v-col>

                  <v-col cols="12" class="d-flex align-center pb-15">
                    <v-rating
                      class="pa-0"
                      :value="5"
                      size="20"
                      readonly
                      color="yellow darken-3"
                      background-color="grey darken-1"
                      empty-icon="$ratingFull"
                      half-increments
                      dense
                    ></v-rating>
                    <span class="body-2 grey--text">(321)</span>
                  </v-col>

                  <v-btn
                    elevation="0"
                    large
                    block
                    color="success"
                    class="py-5"
                    :to="{ name: 'ProductsDetail', params: { id: '1' } }"
                  >
                    BELI</v-btn
                  >
                </v-row>
                <!-- </v-container> -->
              </v-card>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
    <v-col md="auto">
      <v-card
        class="pa-0"
        :class="i == 2 ? ' mt-3' : ''"
        :color="i == 2 ? '#333849' : '#6CBB6F'"
        outlined
        width="580"
        height="auto"
        min-height="250"
        v-for="i in 2"
        :key="i"
      >
        <v-container fluid fill-height>
          <v-row class="white--text">
            <v-col cols="7">
              <div
                class="font-weight-bold headline"
                style="letter-spacing: 0.1em"
              >
                LOREM IPSUM BANNER
              </div>
              <div class="caption mt-3 text-justify">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius
                urna, viverra porttitor odio tellus gravida adipiscing massa
                sagittis. Nulla cras orci, consectetur fames nibh id lacus,
                felis massa. Ac amet massa ullamcorper sed augue mauris ut.
                Lorem nec dolor nulla tincidunt.
              </div>
              <v-btn
                block
                width="300"
                height="45"
                elevation="0"
                class="white--text mt-2"
                color="#F9A825"
              >
                READ MORE
              </v-btn>
            </v-col>
            <v-col cols="5" class="d-flex align-end pa-0">
              <v-img
                contain
                width="auto"
                height="160px"
                :src="require(`@/assets/store/banner_${i}.png`)"
              ></v-img>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-col>
  </v-row>
</template>