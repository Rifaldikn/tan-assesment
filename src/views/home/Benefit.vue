<template>
  <v-container fluid style="margin-top: 50px" class="pa-15">
    <v-row no-gutters>
      <v-col cols="12" class="text-center">
        <h1>Keunggulan TAN Studies</h1>
      </v-col>
      <v-col cols="12" class="my-10">
        <v-row justify="center">
          <v-col
            v-for="item of items"
            :key="item.title"
            cols="12"
            md="4"
            class="text-center"
          >
            <v-img :src="item.src" height="200" width="100%" contain></v-img>
            <h2 class="font-weight-bold mt-5">{{ item.title }}</h2>
            <div class="mt-5" v-if="$vuetify.breakpoint.mdAndUp">
              {{ item.description }}
            </div>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Benefit_Home",
  data() {
    return {
      items: [
        {
          title: "Pengajar Ahli & Seru",
          src: require("../../assets/undraw_teaching.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea vulputate nisi, commodo ullamcorper purus. Aenean et quam amet cras. Amet cursus dictum donec orci. In platea amet, pellentesque enim sed.",
        },
        {
          title: "Soal - Soal Asli dan Terpercaya",
          src: require("../../assets/undraw_to_do_list.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea vulputate nisi, commodo ullamcorper purus. Aenean et quam amet cras. Amet cursus dictum donec orci. In platea amet, pellentesque enim sed.",
        },
        {
          title: "Belajar Intensif",
          src: require("../../assets/undraw_exams.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea vulputate nisi, commodo ullamcorper purus. Aenean et quam amet cras. Amet cursus dictum donec orci. In platea amet, pellentesque enim sed.",
        },
      ],
    };
  },
};
</script>