<template>
  <v-row>
    <!-- Left Side -->
    <v-col cols="2" v-if="$vuetify.breakpoint.mdAndUp">
      <v-card outlined width="250">
        <v-list v-for="filter in groupOfFilters" :key="filter.label">
          <v-subheader class="title font-weight-medium">
            {{ filter.label }}</v-subheader
          >

          <v-list-item
            dense
            v-for="(item, key, index) in filter.items"
            :key="index"
          >
            <v-list-item-content class="pa-0">
              <v-checkbox
                multiple
                dense
                hide-details=""
                color="success"
                v-model="selectedFilters[`${key}`]"
                :value="item.label"
                class="ma-0 pa-0"
              >
                <template v-slot:label>
                  <span class="body-2"> {{ item.label }}</span>
                </template>
              </v-checkbox>
            </v-list-item-content>

            <v-list-item-action>
              <v-list-item-action-text class="body-2">
                {{ item.count }}
              </v-list-item-action-text>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </v-card>
    </v-col>

    <!-- Filter on Mobile -->

    <v-col cols="12" v-if="$vuetify.breakpoint.smAndDown">
      <v-col v-for="filter in groupOfFilters" :key="filter.label">
        <div>{{ filter.label }}</div>
        <v-select
          single-line
          outlined
          dense
          hide-details=""
          item-text="label"
          :placeholder="filter.label"
          :items="filter.items"
        ></v-select>
      </v-col>
    </v-col>

    <!-- Right Side -->
    <v-col cols="12" md="10" class="pa-6">
      <div class="font-weight-medium">
        {{ $vuetify.breakpoint.mdAndUp ? "Cari Produk" : "Cari Video Belajar" }}
      </div>
      <v-text-field
        single-line
        outlined
        dense
        append-icon="mdi-magnify"
        hide-details=""
        placeholder="Search .."
        class="grey--text mt-5"
      ></v-text-field>

      <v-col
        cols="12"
        class="d-flex align-center justify-end pa-1 mt-5"
        style="background-color: #fafafa"
      >
        <v-spacer></v-spacer>

        <div class="mx-2">Sort by :</div>
        <v-col cols="5" md="2" class="d-flex align-center pa-0">
          <v-select
            single-line
            outlined
            dense
            :value="'None'"
            hide-details=""
            class="shrink"
            :items="['None', 'Newest', 'Lowest', 'Highest']"
          ></v-select>
        </v-col>

        <v-btn icon plain :ripple="false" width="33" height="33" color="black"
          ><v-icon>mdi-view-list</v-icon></v-btn
        >
        <v-btn icon plain :ripple="false" width="33" height="33" color="black">
          <v-icon>mdi-apps</v-icon>
        </v-btn>
      </v-col>

      <!-- Product List -->
      <v-col cols="12">
        <v-row class="justify-center">
          <v-col
            cols="12"
            md="4"
            v-for="i in 9"
            :key="i"
            class="d-flex justify-center my-5"
          >
            <v-card
              outlined
              elevation="2"
              width="270"
              height="510"
              class="d-flex align-content-space-around flex-wrap"
            >
              <v-container fluid class="fill-height">
                <v-row no-gutters justify="center" class="fill-height px-5">
                  <v-col cols="auto" class="text-center">
                    <v-img
                      contain
                      width="146"
                      height="auto"
                      :src="require(`@/assets/store/book_banner.png`)"
                    ></v-img>
                  </v-col>
                  <v-col cols="12">
                    <div class="title font-weight-regular">
                      Best Of The Best Psikotes & TPA
                    </div>
                  </v-col>
                  <v-col cols="12">
                    <!-- <v-col cols="12" class="pb-2"> -->
                    <div class="title font-weight-medium success--text">
                      Rp. 150.000
                    </div>
                    <div class="grey--text body-2 text-decoration-line-through">
                      Rp. 200.000
                    </div>
                    <!-- </v-col> -->

                    <v-col cols="12" class="d-flex align-center pa-0 mb-5">
                      <v-rating
                        class="pa-0"
                        :value="5"
                        size="15"
                        readonly
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        empty-icon="$ratingFull"
                        half-increments
                        dense
                      ></v-rating>
                      <div class="caption grey--text mx-3">(321)</div>
                    </v-col>
                  </v-col>
                  <v-col cols="12">
                    <v-btn
                      block
                      elevation="0"
                      height="50"
                      color="success"
                      :to="{ name: 'ProductsDetail', params: { id: '1' } }"
                      >BELI</v-btn
                    >
                  </v-col>
                </v-row>
              </v-container>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "ProductList_Component",
  data() {
    return {
      selectedFilters: {
        schoolLevel: [],
      },

      groupOfFilters: [
        {
          label: "Jenjang",
          items: [
            {
              label: "SD",
              count: 321,
            },
            {
              label: "SMP",
              count: 321,
            },
            {
              label: "SMA",
              count: 321,
            },
            {
              label: "SBMPTN",
              count: 321,
            },
            {
              label: "SIMAK UI S1",
              count: 321,
            },
            {
              label: "SIMAK UI S2",
              count: 321,
            },
            {
              label: "UMUM",
              count: 321,
            },
          ],
        },
        {
          label: "Kelas",
          items: [
            {
              label: "Kelas 10",
              count: 321,
            },
            {
              label: "Kelas 11",
              count: 321,
            },
            {
              label: "Kelas 12",
              count: 321,
            },
            {
              label: "UN SMA",
              count: 321,
            },
          ],
        },
        {
          label: "Program",
          items: [
            {
              label: "IPA",
              count: 321,
            },
            {
              label: "IPS",
              count: 321,
            },
            {
              label: "SNMPTN",
              count: 321,
            },
            {
              label: "SBMPTN",
              count: 321,
            },
            {
              label: "TPA",
              count: 321,
            },
          ],
        },
        {
          label: "Mata Pelajaran",
          items: [
            {
              label: "Matematika",
              count: 321,
            },
            {
              label: "Bahasa Indonesia",
              count: 321,
            },
            {
              label: "Bahasa Inggris",
              count: 321,
            },
            {
              label: "Fisika",
              count: 321,
            },
            {
              label: "Biologi",
              count: 321,
            },
            {
              label: "Kimia",
              count: 321,
            },
          ],
        },
      ],
    };
  },
  mounted() {},
};
</script>