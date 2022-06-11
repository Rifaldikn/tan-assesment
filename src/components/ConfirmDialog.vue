<template>
  <v-card width="100vw" rounded="md" class="py-5">
    <div class="text-center success--text headline font-weight-bold">
      {{ title }}
    </div>
    <v-card-text>
      <div
        class="mt-5 text-center"
        :class="$vuetify.breakpoint.smAndDown ? 'subtitle-1' : 'title'"
      >
        {{ subtitle }}
      </div>
      <div class="px-5">
        <slot />
      </div>
    </v-card-text>
    <v-card-actions>
      <v-col class="d-flex justify-center">
        <v-btn
          class="mr-7 text-capitalize"
          elevation="0"
          width="100"
          color="error"
          @click="$emit('cancel')"
          >batal</v-btn
        >
        <v-btn
          class="ml-7 text-capitalize"
          elevation="0"
          width="100"
          color="success"
          @click="$emit('confirm')"
          >Ya</v-btn
        >
      </v-col>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "Confirm_Dialog",
  props: {
    title: {
      type: String,
    },
    subtitle: {
      type: String,
    },
  },
  data() {
    return {};
  },
};
</script>