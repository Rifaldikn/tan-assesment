<template>
  <v-container fluid :style="'background-color:#FAFAFA'" class="pa-10">
    <v-row no-gutters>
      <v-col
        cols="12"
        md="6"
        class="pa-10 d-flex justify-end"
        v-if="$vuetify.breakpoint.mdAndUp"
      >
        <v-img
          contain
          class="mt-10 ml-15"
          height="363.35px"
          :src="require(`../../assets/undraw_arrived.png`)"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" class="pr-auto">
        <v-card
          flat
          color="transparent"
          height="100%"
          class="black--text text--lighten-1"
        >
          <v-container class="fill-height">
            <v-row align="center">
              <div class="display-2 font-weight-regular">
                Subscribe Our <br />
                Newsletter
              </div>
              <div class="mt-5 title">
                For new awesome courses & special promotion campaign!
              </div>
              <v-text-field
                outlined
                single-line
                hide-details
                filled
                background-color="white"
                class="body-2 text-capitalize mt-10"
                placeholder="Your Email"
              >
              </v-text-field>

              <v-btn block dark large elevation="0" class="mt-5" color="#333849"
                >enroll now</v-btn
              >
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Subscribe",
};
</script>