<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col
        offset-md="7"
        cols="12"
        md="auto"
        class="text-center d-flex justify-center mr-auto"
      >
        <div class="display-1 mt-5 font-weight-bold">
          <span class="black--text text--lighten-1">Instagram Jelajah</span
          ><span class="success--text">Studies</span>
        </div>
      </v-col>
      <v-col cols="12" md="5">
        <v-img
          contain
          height="300"
          :src="require(`../../assets/undraw_book_lover.png`)"
        ></v-img>
      </v-col>

      <v-col cols="12" md="auto" class="text-center">
        <v-row no-gutters class="mt-3 align-center justify-space-around">
          <v-img
            contain
            v-for="item in items"
            class="ma-5"
            :key="item"
            height="220"
            :src="require(`../../assets/${item}`)"
          ></v-img>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Instagram_Home",
  data() {
    return {
      items: ["simak_ui.png", "tpa_book.png", "book_weird.png"],
    };
  },
};
</script>