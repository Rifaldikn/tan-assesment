<template>
  <v-row no-gutters>
    <v-col cols="12">
      <section1 />
      <v-btn
        large
        rounded
        class="mr-10"
        color="success"
        style="right: 0; margin-top: -20px; position: absolute"
      >
        <v-icon left>mdi-chat</v-icon>
        Hubungi Kami
      </v-btn>
    </v-col>

    <benefit-section />

    <feature-section />

    <demo-video-section />

    <testimonials-section />

    <instagram-section />


    <subscribe-section />
  </v-row>
</template>

<script>
import Section1 from "./home/Section1.vue";
import BenefitSection from "./home/Benefit.vue";
import FeatureSection from "./home/Feature.vue";
import DemoVideoSection from "./home/DemoVideo.vue";
import TestimonialsSection from "./home/Testimonials.vue";
import InstagramSection from "./home/Instagram.vue";
import SubscribeSection from "./home/Subscribe.vue";

export default {
  name: "Home",
  components: {
    Section1,
    BenefitSection,
    FeatureSection,
    DemoVideoSection,
    TestimonialsSection,
    InstagramSection,
    SubscribeSection,
  },
};
</script>

<style>
.globe-mainpage {
  background-image: url("../assets/globe_homepage.png");
  background-size: cover;
}

.tanCard-1 {
  background-image: url("../assets/group_tan_studies.png");
  background-size: cover;
  background-position: center;
}
</style>
