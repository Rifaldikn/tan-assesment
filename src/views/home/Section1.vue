<template>
  <v-card tile class="globe-mainpage" width="100%" height="653px" elevation="0">
    <!-- <v-container fluid> -->
    <v-card-text>
      <v-container fluid>
        <v-row
          no-gutters
          justify="center"
          align="center"
          class="d-flex align-center fill-height"
        >
          <v-col cols="12" class="d-flex align-center justify-center">
            <v-card
              width="100%"
              color="rgba(255, 255, 255, 0.8)"
              height="100%"
              min-height="366"
              max-width="1171"
              flat
            >
              <v-row no-gutters class="grow">
                <v-col
                  cols="12"
                  md="6"
                  class="d-flex justify-start align-center"
                >
                  <v-card
                    flat
                    tile
                    color="transparent"
                    max-width="100%"
                    height="auto"
                    class="mt-10 pa-10"
                  >
                    <v-card-title primary-title class="mb-5">
                      <div
                        class="font-weight-bold black--text"
                        :class="
                          $vuetify.breakpoint.smAndDown
                            ? 'text-center display-1'
                            : 'display-2'
                        "
                      >
                        TAN Studies
                      </div>
                    </v-card-title>
                    <v-card-text>
                      <div
                        class="font-weight-bold body-2"
                        :class="
                          $vuetify.breakpoint.smAndDown ? 'text-center' : ''
                        "
                      >
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Ut dui mattis nascetur vitae, cras ornare ut faucibus
                        dignissim. Neque, fermentum, amet, velit etiam commodo
                        suspendisse rutrum urna. Ac vestibulum ut nulla magna.
                      </div>
                    </v-card-text>
                    <v-card-actions>
                      <v-row class="justify-space-around">
                        <v-col cols="12" md="6">
                          <v-btn
                            tile
                            large
                            width="190"
                            elevation="0"
                            color="success"
                            height="50"
                            block
                          >
                            daftar sekarang
                          </v-btn>
                        </v-col>
                        <v-col cols="12" md="6">
                          <v-btn
                            large
                            outlined
                            tile
                            icon
                            width="190"
                            elevation="0"
                            color="black"
                            height="50"
                            block
                            >putar video <v-icon right>mdi-play</v-icon></v-btn
                          >
                        </v-col>
                      </v-row>
                    </v-card-actions>
                  </v-card>
                </v-col>

                <!-- Right -->

                <v-col cols="12" md="6">
                  <v-card
                    class="tanCard-1"
                    width="100%"
                    height="100%"
                    min-height="366"
                  >
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-card-text>
    <!-- </v-container> -->
  </v-card>
</template>

<script>
export default {
  name: "Section_1",
};
</script>

