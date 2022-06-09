<template>
  <v-container fluid style="margin-top: 100px">
    <v-row no-gutters justify="space-between">
      <v-col cols="12" md="5" class="justify-end d-flex">
        <v-card width="100%" max-width="446" flat>
          <v-card-text>
            <v-img
              contain
              :position="$vuetify.breakpoint.smAndDown ? 'center' : 'left'"
              widh="100%"
              height="200"
              :src="require(`@/assets/undraw_media.png`)"
            ></v-img>

            <div class="display-1 font-weight-bold black--text mt-5">
              Video Trial <br />
              TryOut Online
            </div>

            <div class="mt-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
              sed facilisis volutpat faucibus. Elit consectetur tempus, nunc sit
              purus diam. Facilisis platea molestie consectetur mattis molestie
              amet a volutpat. Et mollis at montes, adipiscing mi integer massa
              faucibus.
            </div>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" md="7">
        <v-card flat class="mt-10">
          <v-img
            contain
            height="400"
            :src="require(`@/assets/Group_74.png`)"
          ></v-img>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>