<template>
  <v-container fluid class="my-7">
    <v-row align="center" justify="center">
      <v-col cols="12" md="8">
        <v-breadcrumbs :items="breadCrumsItems">
          <template v-slot:item="{ item }">
            <v-breadcrumbs-item :href="item.href" :disabled="item.disabled">
              <span :class="item.disabled ? '' : 'success--text'">
                {{ item.text }}</span
              >
            </v-breadcrumbs-item>
          </template>
        </v-breadcrumbs>

        <v-card flat width="100%" height="auto">
          <v-container fluid>
            <v-row
              align="center"
              :justify="$vuetify.breakpoint.mdAndUp ? 'start' : 'center'"
            >
              <v-col cols="auto" md="auto" class="">
                <v-img
                  width="223"
                  contain
                  :src="require(`@/assets/store/book_banner.png`)"
                ></v-img>
              </v-col>
              <v-col cols="12" md="auto">
                <h2 class="headline font-weight-medium">
                  {{ productInfo.title }}
                </h2>
                <v-col cols="12" class="d-flex align-center px-0 py-3">
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
                  <span class="body-2 grey--text mx-3"
                    >({{ productInfo.reviewsCount }} Review)</span
                  >
                </v-col>
                <v-col cols="10" class="d-flex pa-0 mb-5">
                  <v-col cols="4" class="pl-0">
                    <div class="grey--text font-weight-regular caption">
                      Author
                    </div>
                    <div class="font-weight-medium body-2 black--text">
                      {{ productInfo.author }}
                    </div>
                  </v-col>
                  <v-col cols="4" class="pl-0">
                    <div class="grey--text font-weight-regular caption">
                      Program
                    </div>
                    <div class="font-weight-medium body-2 black--text">
                      {{ productInfo.program }}
                    </div>
                  </v-col>

                  <!-- Dynamic Quantity -->
                  <v-col cols="4" class="pl-0">
                    <div class="grey--text font-weight-regular caption">
                      Quantity
                    </div>
                    <div class="font-weight-medium body-2 black--text">
                      {{ productInfo.quantity }}
                    </div>
                  </v-col>
                </v-col>

                <!-- Price Section -->
                <v-col cols="auto" class="pa-0">
                  <div class="body-2 grey--text">Harga</div>
                  <div class="headline font-weight-bold success--text">
                    Rp.
                    {{
                      (productInfo.price - productInfo.discount)
                        | VMask(numberMask)
                    }}
                  </div>
                  <div class="grey--text text text-decoration-line-through">
                    Rp.{{ productInfo.price | VMask(numberMask) }}
                  </div>
                </v-col>

                <v-col cols="12" class="mt-5">
                  <v-row align="center">
                    <v-col cols="6" md="4" class="pa-0 d-flex">
                      <v-btn
                        height="40"
                        tile
                        outlined
                        icon
                        :color="quantityOrder == 1 ? 'grey' : 'success'"
                        @click="substractQuantityOrder"
                        ><v-icon>mdi-minus</v-icon></v-btn
                      >
                      <v-text-field
                        outlined
                        single-line
                        dense
                        hide-details
                        flat
                        :rounded="false"
                        v-model="quantityOrder"
                        class="shrink product-detail text-center"
                        type="number"
                      />
                      <v-btn
                        height="40"
                        tile
                        outlined
                        icon
                        :color="
                          quantityOrder == productInfo.quantity
                            ? 'grey'
                            : 'success'
                        "
                        @click="addQuantityOrder"
                        ><v-icon>mdi-plus</v-icon></v-btn
                      >
                    </v-col>

                    <v-col
                      cols="12"
                      md="7"
                      :class="
                        $vuetify.breakpoint.mdAndUp ? 'px-3' : 'px-0 mt-5'
                      "
                    >
                      <v-btn
                        block
                        height="40"
                        elevation="0"
                        color="success"
                        @click="dialog = true"
                        :to="{
                          name: 'ProductCheckout',
                          params: { id: '1' },
                          query: { quantity: quantityOrder },
                        }"
                        >beli</v-btn
                      >
                    </v-col>
                  </v-row>
                </v-col>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>

      <v-col cols="12" md="8" class="pa-5">
        <v-card elevation="3" width="100%">
          <v-tabs v-model="tab" color="success">
            <v-tab class="text-capitalize">Deskripsi</v-tab>
            <v-tab class="text-capitalize">Detail Buku</v-tab>
            <v-tab class="text-capitalize">Ulasan</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab">
            <v-tab-item v-for="i in 3" :key="i">
              <v-card flat>
                <v-card-text
                  >Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Pellentesque aliquam donec sagittis semper integer adipiscing.
                  Sagittis dui ultricies mattis fames ultricies. Purus turpis
                  aliquam purus morbi vel posuere consequat. Blandit pulvinar
                  dictum bibendum nulla risus. Amet, semper ipsum dolor
                  ultricies. Lacus nibh purus scelerisque in nulla penatibus
                  faucibus egestas nunc. Turpis nibh sed suspendisse feugiat
                  penatibus morbi. Lectus orci ac pharetra diam rutrum est at ac
                  eu. Justo, etiam ultrices lectus faucibus ac faucibus netus
                  lectus lectus.</v-card-text
                >
              </v-card>
            </v-tab-item>
          </v-tabs-items>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { mapGetters } from "vuex";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
// import ConfirmDialog from "@/components/ConfirmDialog";

// First, you need to create the `numberMask` with your desired configurations
const numberMask = createNumberMask({
  prefix: "",
  suffix: "",
  thousandsSeparatorSymbol: ".",
});

export default {
  name: "Detail_Product_View",
  //   components: { ConfirmDialog },
  data() {
    return {
      dialog: false,
      numberMask,
      tab: 0,
      quantityOrder: 1,
      quantity: 10,
      breadCrumsItems: [
        {
          text: "Home",
          disabled: false,
          href: "/",
        },
        {
          text: "SMA",
          disabled: false,
          href: "/products",
        },
        {
          text: "TPA",
          disabled: true,
          href: "/products",
        },
      ],
    };
  },
  computed: {
    productInfo() {
      return this.$store.getters.getItemById(this.$route.params.id);
    },
  },
  methods: {
    substractQuantityOrder() {
      if (this.quantityOrder > 1) {
        this.quantityOrder--;
      }
    },
    addQuantityOrder() {
      if (this.quantityOrder < this.productInfo.quantity) {
        this.quantityOrder++;
      }
    },
  },
};
</script>


<style>
/* Chrome, Safari, Edge, Opera */
.product-detail .v-text-field__slot input::-webkit-outer-spin-button,
.product-detail .v-text-field__slot input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.product-detail .v-text-field__slot input[type="number"] {
  -moz-appearance: textfield;
}
</style>