<template>
  <v-container fluid class="py-15">
    <v-row justify="center">
      <v-col cols="12" class="d-flex justify-center">
        <v-card flat width="100%" max-width="780">
          <div
            class="text-center font-weight-medium mb-5"
            :class="$vuetify.breakpoint.mdAndUp ? 'headline' : 'title'"
          >
            Item Checkout Detail
          </div>
          <v-col cols="12">
            <div class="font-weight-bold">Nama Item</div>
            <div class="font-weight-regular mt-1">{{ productInfo.title }}</div>
          </v-col>
          <v-col cols="12">
            <div class="font-weight-bold">Kode Buku</div>
            <div class="font-weight-regular mt-1">{{ productInfo.isbn }}</div>
          </v-col>
          <v-col cols="12">
            <div class="font-weight-bold">Jumlah Pembelian</div>
            <div class="font-weight-regular mt-1">
              {{ $route.query.quantity }}
            </div>
          </v-col>

          <v-col cols="12" class="mt-5">
            <div class="font-weight-bold">Harga Item</div>
            <div class="font-weight-bold success--text mt-1">
              Rp.
              {{
                ((productInfo.price - productInfo.discount) *
                  $route.query.quantity)
                  | VMask(numberMask)
              }}
            </div>
          </v-col>

          <v-col cols="12" class="mt-3 pa-0">
            <v-col cols="12" class="d-flex align-center py-0">
              <v-checkbox
                v-model="isJabodetabek"
                :true-value="2"
                :value="2"
                color="success"
              >
              </v-checkbox>

              <v-col class="pa-0">
                <div>Area Pengiriman Jabodetabek</div>
                <div class="caption grey--text">
                  Tambahan Biaya Rp. 20.000,-
                </div>
              </v-col>
            </v-col>
            <v-col cols="12" class="d-flex align-center py-0">
              <v-checkbox
                v-model="isJabodetabek"
                :true-value="1"
                :value="1"
                color="success"
              >
              </v-checkbox>

              <v-col class="pa-0">
                <div>Area Pengiriman Luar Jabodetabek</div>
                <div class="caption grey--text">
                  Tambahan Biaya Rp. 20.000,-
                </div>
              </v-col>
            </v-col>

            <v-col cols="12">
              <div class="font-weight-bold">Alamat Lengkap</div>
              <v-textarea
                auto-grow
                rows="3"
                outlined
                single-line
                hide-details
                filled
                background-color="#FEFEFE"
                placeholder="Masukan Alamat Lengkap"
                v-model="address"
              ></v-textarea>
            </v-col>

            <v-col cols="12" class="d-flex align-center py-0 mt-10">
              <v-checkbox
                color="success"
                true-value="true"
                false-value="false"
                v-model="agreement"
              >
              </v-checkbox>

              <v-col class="pa-0">
                <div>Saya Setuju untuk Membeli Item Ini</div>
              </v-col>
            </v-col>
          </v-col>

          <v-card-actions>
            <v-row justify="space-around">
              <v-col cols="12" md="6" class="d-flex justify-start">
                <v-btn
                  color="error"
                  :block="$vuetify.breakpoint.smAndDown ? true : false"
                  height="50"
                  elevation="0"
                  width="150"
                  @click="$router.go(-1)"
                  >Kembali</v-btn
                >
              </v-col>
              <v-col cols="12" md="6" class="d-flex justify-end">
                <v-btn
                  color="success"
                  :block="$vuetify.breakpoint.smAndDown ? true : false"
                  height="50"
                  elevation="0"
                  width="150"
                  :disabled="!agreement || !address || !isJabodetabek"
                  @click="dialog = true"
                  >Beli</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="100%" max-width="700" scrollable>
      <confirm-dialog
        :title="'Beli Produk'"
        :subtitle="`Apakah anda yakin untuk membeli produk tersebut?`"
        @cancel="dialog = false"
        @confirm="confirmOrder()"
      />
    </v-dialog>
  </v-container>
</template>

<script>
import createNumberMask from "text-mask-addons/dist/createNumberMask";
const numberMask = createNumberMask({
  prefix: "",
  suffix: "",
  thousandsSeparatorSymbol: ".",
});

import ConfirmDialog from "@/components/ConfirmDialog";

export default {
  name: "ProductCheckout",
  props: {
    quantity: {
      type: Number,
    },
  },
  components: { ConfirmDialog },
  data() {
    return {
      isJabodetabek: null,
      agreement: false,
      address: "",
      dialog: false,
      numberMask,
    };
  },
  computed: {
    productInfo() {
      return this.$store.getters.getItemById(this.$route.params.id);
    },
  },
  methods: {
    confirmOrder() {
      this.dialog = false;

      this.$store.commit("SET_Quantity_Product", {
        id: this.$route.params.id,
        count: this.$route.query.quantity,
      });

      this.$store.dispatch("toggleMessageDialog");

      this.$router.push("/store");
    },
  },
};
</script>