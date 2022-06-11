<template>
  <v-container fluid class="products-bg pa-0 ma-0 py-10">
    <v-row no-gutters class="my-10 justify-center">
      <v-col cols="12">
        <div class="headline black--text font-weight-bold text-center">
          Layanan dan Produk Kami
        </div>
      </v-col>
    </v-row>
    <v-row
      no-gutters
      v-for="index in items.length / 2"
      class="py-10"
      :key="index"
      :class="
        index % 2 == 0 && !$vuetify.breakpoint.smAndDown
          ? 'products-bg-odd'
          : ''
      "
    >
      <v-col
        v-for="i in 2"
        :key="i"
        cols="12"
        md="6"
        class="d-flex justify-center my-3"
      >
        <!-- <span> {{ index * 2 + i - 3 }}</span> -->
        <!-- <v-hover v-slot="{ hover }"> -->
        <v-card
          rounded="lg"
          :color="
            $vuetify.breakpoint.smAndDown || index % 2 == 1
              ? 'transparent'
              : 'white'
          "
          width="495"
          height="495"
          :elevation="$vuetify.breakpoint.smAndDown || index % 2 == 1 ? 0 : 5"
          class="pa-10"
        >
          <v-img
            contain
            :src="items[index * 2 + i - 3].src"
            height="239"
            width="300"
          ></v-img>
          <div class="mt-5 title">
            {{
              `${items[index * 2 + i - 3].title} ${
                items[index * 2 + i - 3].title2
                  ? items[index * 2 + i - 3].title2
                  : ""
              }`
            }}
          </div>

          <v-card-text class="pa-0 mt-5 text-justify">
            <div>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae ac
              orci, euismod eu amet ullamcorper eget faucibus. Aliquam tortor
              augue vitae, elementum erat vehicula senectus.
            </div>
          </v-card-text>
        </v-card>
        <!-- </v-hover> -->
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Products_View",
  data() {
    return {
      indexItem: 0,
      items: [
        {
          title: "Jelajah Voucher",
          src: require("../assets/products/produk_1.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah",
          title2: "Video Belajar",
          src: require("../assets/products/produk_2.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah Privat",
          title2: "Online",
          src: require("../assets/products/produk_3.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah ",
          title2: "Online Group",
          src: require("../assets/products/produk_4.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah Private",
          title2: "Tatap Muka",
          src: require("../assets/products/produk_5.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah Try ",
          title2: "Out Online",
          src: require("../assets/products/produk_6.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah Kelas ",
          title2: "Online",
          src: require("../assets/products/produk_7.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
          title: "Jelajah Online",
          title2: "Store",
          src: require("../assets/products/produk_8.png"),
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
      ],
    };
  },
  methods: {
    getIndex(index, i) {
      return index * 2 + i - 3;
    },
  },
};
</script>

<style>
.products-bg {
  background-image: url("../assets/products/BG.png");
  background-size: cover;
}

.products-bg-odd {
  background-image: url("../assets/products/odd_bg.png");
  background-size: cover;
}
</style>