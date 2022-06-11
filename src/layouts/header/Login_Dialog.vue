<template>
  <v-card class="pa-0">
    <v-card-title primary-title class="pa-0">
      <v-col cols="12" class="pa-0 d-flex align-center justify-space-between">
        <v-col cols="6" class="pa-0">
          <v-btn
            :color="tab == 0 ? 'success' : 'grey'"
            text
            block
            dark
            tile
            style="border: 1px grey solid; border-top: none"
            :ripple="false"
            elevation="0"
            height="50"
            @click="tab = 0"
            :class="[
              $vuetify.breakpoint.smAndDown ? 'caption' : 'title',
              tab == 0 ? 'login-outline-tab' : '',
            ]"
          >
            <span class="text-capitalize"> Login Sebagai Siswa </span>
          </v-btn>
        </v-col>
        <v-col cols="6" class="pa-0">
          <v-btn
            :color="tab == 1 ? 'success' : 'grey'"
            text
            block
            dark
            tile
            style="border: 1px grey solid; border-top: none"
            :ripple="false"
            elevation="0"
            height="50"
            :class="[
              $vuetify.breakpoint.smAndDown ? 'caption' : 'title',
              tab == 1 ? 'login-outline-tab' : '',
            ]"
            @click="tab = 1"
          >
            <span
              class="text-capitalize"
              :class="$vuetify.breakpoint.smAndDown ? 'caption' : 'title'"
            >
              Login Sebagai Pengajar
            </span>
          </v-btn>
        </v-col>
      </v-col>
    </v-card-title>

    <v-card-text class="pa-3">
      <v-container class="pa-0 ma-0">
        <v-col cols="12" class="d-flex justify-center">
          <v-card width="100%" flat>
            <v-col
              cols="12"
              primary-title
              class="d-flex black--text justify-center headline pa-5"
            >
              <div
                :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headeline'"
                v-if="tab == 0"
              >
                Login Siswa TAN Studies
              </div>
              <div
                :class="$vuetify.breakpoint.smAndDown ? 'title' : 'headeline'"
                v-else
              >
                Login Pengajar TAN Studies
              </div>
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
                type="password"
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
              <v-col cols="d-flex justify-center text-center align-center pa-0">
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

              <div
                class="
                  body-2
                  text-center text-capitalize
                  font-weight-regular
                  black--text
                  text--lighten-1
                  my-3
                "
              >
                Belum Punya Akun?
              </div>

              <v-btn
                block
                link
                height="50"
                elevation="0"
                class="white--text"
                color="#2D9CDB"
                :to="{ name: 'SignUp_Student' }"
                @click="$emit('closeDialog')"
              >
                <span>Daftar Siswa</span>
              </v-btn>
              <v-btn
                block
                link
                height="50"
                elevation="0"
                class="white--text mt-5"
                color="#2579A9"
                :to="{ name: 'SignUp_Mentor' }"
                @click="$emit('closeDialog')"
              >
                <span>Daftar Pengajar</span>
              </v-btn>
            </v-col>
          </v-card>
        </v-col>
      </v-container>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Login_Dialog",
  data() {
    return {
      tab: 0,
      forms: {
        username: "",
        password: "",
      },
    };
  },
};
</script>

<style scoped>
.login-outline-tab {
  border-top: 0 !important;
  border-bottom: 0 !important;
}
/* 
.v-slide-group .v-slide-group__prev {
  display: none !important;
} */

.v-btn::before {
  background-color: transparent;
}
</style>