<template>
  <v-card class="pa-0">
    <v-card-title primary-title class="pa-0">
      <v-tabs
        v-model="tab"
        grow
        color="success"
        slider-color="transparent"
        background-color="transparent"
      >
        <v-tab
          active-class="login-outline-tab"
          style="border: 1px solid #868686"
          class="text-capitalize subtitle-1 font-weight-bold"
        >
          Login Sebagai Siswa
        </v-tab>
        <v-tab
          active-class="login-outline-tab"
          style="border-bottom: 1px solid #868686"
          class="text-capitalize subtitle-1 font-weight-bold"
        >
          Login Sebagai Pengajar
        </v-tab>

        <v-tabs-items v-model="tab" >
          <v-tab-item transition="scale-transition" v-for="item in 2" :key="item">
            <v-container fluid>
              <v-col cols="12" class="d-flex justify-center">
                <v-card width="100%" max-width="630" flat>
                  <v-col
                    cols="12"
                    primary-title
                    class="d-flex black--text justify-center headline pa-5"
                  >
                    <span v-if="tab == 0"> Login Siswa TAN Studies </span>
                    <span v-else> Login Pengajar TAN Studies </span>
                  </v-col>

                  <v-col cols="12" class="text-center">
                    <v-text-field
                      outlined
                      single-line
                      dense
                      hide-details=""
                      placeholder="Email"
                      class="grey--text font-italic"
                    ></v-text-field>
                    <v-text-field
                      outlined
                      single-line
                      dense
                      hide-details=""
                      placeholder="Password"
                      class="grey--text font-italic mt-5"
                    ></v-text-field>
                    <v-btn
                      block
                      elevation="0"
                      height="50"
                      color="success"
                      class="my-5"
                      >Login</v-btn
                    >
                    <v-col
                      cols="d-flex justify-center text-center align-center pa-0"
                    >
                      <v-btn text plain :ripple="false">
                        <span
                          class="
                            black--text
                            text--lighten-1 text-capitalize
                            font-weight-regular
                          "
                        >
                          Forgot Your Password?
                        </span>
                      </v-btn>
                    </v-col>

                    <v-divider class="my-3"></v-divider>
                    <v-btn plain text :ripple="false">
                      <span
                        class="
                          text-center text-capitalize
                          font-weight-regular
                          black--text
                          text--lighten-1
                        "
                      >
                        Belum Punya Akun?
                      </span>
                    </v-btn>

                    <v-btn
                      block
                      height="50"
                      elevation="0"
                      class="white--text"
                      color="#2D9CDB"
                    >
                      <span>Daftar Siswa</span>
                    </v-btn>
                    <v-btn
                      block
                      height="50"
                      elevation="0"
                      class="white--text mt-5"
                      color="#2579A9"
                    >
                      <span>Daftar Siswa</span>
                    </v-btn>
                  </v-col>
                </v-card>
              </v-col>
            </v-container>
          </v-tab-item>
        </v-tabs-items>
      </v-tabs>
    </v-card-title>
  </v-card>
</template>

<script>
export default {
  name: "Login_Dialog",
  data() {
    return {
      tab: null,
    };
  },
};
</script>

<style>
.login-outline-tab {
  border-top: 0 !important;
  border-bottom: 0 !important;
}
</style>