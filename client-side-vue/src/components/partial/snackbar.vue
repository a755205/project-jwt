<template>
  <v-snackbar v-model="visible" botton right>
    {{ $store.state.snackbar.msg }}
    <template v-slot:action="{ attrs }">
      <v-btn icon color="red" v-bind="attrs" @click="close">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
export default {
  computed: {
    visible: {
      get() {
        return this.$store.state.snackbar.visible;
      },
      set() {}
    },
    showclose() {
      return this.$store.state.snackbar.showclose;
    }
  },
  methods: {
    close() {
      this.$store.commit("snackbar/CLOSE_SNACKBAR");
    }
  }
};
</script>

<style></style>
