<template>
  <v-container>
    <banner />

    <product-list />
  </v-container>
</template>

<script>
import Banner from "./store/Banner.vue";
import ProductList from "./store/ProductList.vue";

export default {
  name: "Store_View",
  components: { Banner, ProductList },
};
</script>