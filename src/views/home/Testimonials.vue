<template>
  <v-container fluid class="pa-0">
    <h1 class="text-center text--lighten-3 mt-10">Testimonials</h1>
    <v-card flat height="600" id="testimoni-bg">
      <v-row no-gutters class="pa-15">
        <hooper
          :itemsToShow="$vuetify.breakpoint.smAndDown ? 1 : items.length"
          style="height: 100%"
          :centerMode="true"
          :initialSlide="2"
        >
          <slide
            v-for="item in items"
            :key="item.name"
            style="height: 100%"
            class="py-5"
          >
            <v-hover v-slot="{ hover }">
              <v-card
                :class="{ 'on-hover': hover }"
                outlined
                hover
                width="230"
                height="353"
                class="selectedSlide"
              >
                <v-card-text class="text-center">
                  <v-icon size="30" class="ma-5">mdi-lightning-bolt</v-icon>
                  <div
                    class="
                      text-center
                      subtitle-1
                      font-weight-regular
                      black--text
                      text--lighten-2
                    "
                  >
                    In our get creative course you will learn the fundamentals
                    of design thinking and creative problem solving
                  </div>
                  <div class="mt-10 font-weight-bold">
                    {{ item.name }}
                  </div>
                  <div class="mt-5">Amzazon Professor</div>
                </v-card-text>
              </v-card>
            </v-hover>
          </slide>
          <!-- <hooper-pagination slot="hooper-addons">
            <v-row class="py-5">
              <v-col cols="12" class="d-flex justify-center"> dwa </v-col>
            </v-row>
          </hooper-pagination> -->
        </hooper>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";

export default {
  name: "Testimonialas_Home",
  components: {
    Hooper,
    Slide,
  },

  data() {
    return {
      currentSlide: null,
      items: [
        {
          name: "Lulu",
        },
        {
          name: "Lulu",
        },
        {
          name: "Lulu",
        },
        {
          name: "Lulu",
        },
        {
          name: "Lulu",
        },
      ],
    };
  },
};
</script>

<style>
#testimoni-bg {
  background-image: url("../../assets/bg-testimonials.png");
  background-size: cover;
}

.is-current .selectedSlide {
  border-bottom: solid 5px #68b76b !important;
}
</style>