<template>
  <v-container>
    <v-row class="align-center justify-center mb-5">
      <!-- Timeline -->

      <v-col cols="12" v-if="$route.name == 'SignUp_Mentor'" class="mt-10">
        <v-row no-gutters>
          <v-col
            :cols="12 / timeLine.length"
            v-for="(item, index) in timeLine"
            :key="item + 1"
            class="d-flex justify-center"
          >
            <v-col cols="12" class="d-flex align-center pa-0">
              <v-divider></v-divider>
              <div>
                <v-btn
                  fab
                  elevation="0"
                  class="white--text"
                  height="40"
                  width="40"
                  :outlined="index != step"
                  :color="index == step ? 'success' : 'grey'"
                  @click="step = index"
                >
                  {{ index + 1 }}
                </v-btn>
              </div>
              <v-divider></v-divider>
            </v-col>
          </v-col>
          <v-col
            :cols="12 / timeLine.length"
            v-for="(item, index) in timeLine"
            :key="index"
            class="text-center mt-1"
            :class="$vuetify.breakpoint.smAndDown ? 'caption' : 'subtitle-1'"
          >
            {{ item }}
          </v-col>
        </v-row>
      </v-col>

      <v-col
        cols="12"
        class="d-flex headline font-weight-regular justify-center my-10"
      >
        Registrasi {{ $route.name == "SignUp_Student" ? "Siswa" : "Pengajar" }}
      </v-col>

      <v-col cols="12" class="d-flex justify-center">
        <v-card
          elevation="2"
          max-width="1000px"
          width="90%"
          :class="$vuetify.breakpoint.smAndDown ? 'pa-5' : 'pa-15'"
        >
          <v-row class="jutify-center">
            <v-col cols="12">
              <div class="title text-center font-weight-regular">
                Informasi Pribadi Anda
              </div>
            </v-col>
            <v-col cols="12" class="text-center grey--text caption">
              <v-btn
                fab
                elevation="3"
                color="#F2F2F2"
                height="100"
                width="100"
                @click="$refs.uploader.click()"
              >
                <v-icon>mdi-camera</v-icon>
              </v-btn>
              <div class="mt-5 body-2">
                Clik tombol di atas untuk upload foto anda
              </div>
              <!-- File Input Controller -->

              <input
                ref="uploader"
                class="d-none"
                type="file"
                accept="image/*"
              />
            </v-col>

            <!-- V-from -->

            <v-col cols="12" v-for="item in listFormsInput" :key="item.prop">
              <div>{{ item.label }}</div>
              <v-text-field
                v-if="item.type == 'textfield'"
                outlined
                single-line
                hide-details=""
                class="grey--text mt-2"
                :placeholder="item.label"
                v-model="forms[`${item.prop}`]"
              ></v-text-field>

              <v-select
                v-else-if="item.type == 'select'"
                outlined
                single-line
                hide-details=""
                class="grey--text mt-2"
                :placeholder="item.label"
                :items="item.items"
                v-model="forms[`${item.prop}`]"
              >
              </v-select>
              <v-textarea
                v-else-if="item.type == 'textarea'"
                auto-grow
                rows="3"
                outlined
                single-line
                hide-details=""
                class="grey--text mt-2"
                :placeholder="item.label"
                :items="item.items"
                v-model="forms[`${item.prop}`]"
              ></v-textarea>
            </v-col>

            <v-col cols="12" class="d-flex align-center">
              <v-checkbox
                input-value="true"
                v-model="agreement"
                color="success"
              >
              </v-checkbox>

              <div class="grey--text text--darken-1 caption">
                By clicking create account you are agree to our terms and
                privacy policy.
              </div>
            </v-col>
            <v-col
              cols="12"
              class="d-flex"
              :class="
                $vuetify.breakpoint.smAndDown ? 'justify-center' : 'justify-end'
              "
            >
              <v-btn
                :block="$vuetify.breakpoint.smAndDown"
                elevation="0"
                width="190"
                height="49"
                class="white--text"
                color="#4CAF50"
                @click="dialog = true"
                :disabled="!agreement"
              >
                {{ $route.name == "SignUp_Mentor" ? "Lanjutkan" : "submit" }}
              </v-btn>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog v-model="dialog" width="unset" max-width="500" scrollable>
      <confirm-dialog
        :title="'Simpan Registrasi'"
        :subtitle="`Apakah anda yakin untuk menyimpan data tersebut?`"
        @cancel="dialog = false"
        @confirm="saveUserData()"
      />
    </v-dialog>
  </v-container>
</template>

<script>
import ConfirmDialog from "@/components/ConfirmDialog";

export default {
  name: "SignUp_ViewsComponent",
  components: { ConfirmDialog },
  data() {
    return {
      dialog: false,
      step: 0,
      timeLine: [
        "Info Pribadi Anda",
        "Info Sosial Media",
        "Info Lanjutan",
        "Info Mengajar",
      ],
      agreement: false,
      listFormsInput: [
        {
          label: "Nama Lengkap",
          prop: "fullName",
          type: "textfield",
        },
        {
          label: "Nama Panggilan",
          prop: "nickName",
          type: "textfield",
        },
        {
          label: "Jenis Kelamin",
          prop: "gender",
          type: "select",
          items: ["Lelaki", "Wanita"],
        },
        {
          label: "Nomor Telepon",
          prop: "phoneNumber",
          type: "textfield",
        },
        {
          label: "Nomor Whatsapp",
          prop: "whatsappNumber",
          type: "textfield",
        },
        {
          label: "Pilih Provinsi",
          prop: "regional",
          type: "select",
          items: ["Jakarta", "Bali", "Jawa Barat", "Sumatera"],
        },
        {
          label: "Pilih Kota/Kabupaten",
          prop: "city",
          type: "select",
          items: ["Jakarta", "Bali", "Jawa Barat", "Sumatera"],
        },
        {
          label: "Pilih Kecamatan",
          prop: "distric",
          type: "select",
          items: ["Jakarta", "Bali", "Jawa Barat", "Sumatera"],
        },
        {
          label: "Alamat Anda",
          prop: "address",
          type: "textarea",
        },
      ],
      forms: {
        userType: "",
        fullName: "",
        nickName: "",
      },
    };
  },
  methods: {
    saveUserData() {
      this.dialog = false;
      console.log("Saving User Data");

      this.forms.userType =
        this.$route.name == "SignUp_Mentor" ? "mentor" : "student";

      const res = this.$store.dispatch("addNewUser", this.forms);
      console.log(res);

      // if (res.status) {
      this.$store.dispatch("toggleMessageDialog");
      // } else {
      // this.error = res.message;
      // }
    },
  },
};
</script>