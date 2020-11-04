<template>
  <v-app>
    <router-view></router-view>
    <snackbar />
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {
    snackbar: () =>
      import(
        /* webpackChunkName: "partial-snackbar" */ "./components/partial/snackbar"
      )
  }
};
</script>
