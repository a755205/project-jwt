<template>
  <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
  >
    <v-app-bar-nav-icon
      @click.stop="$store.dispatch('layout/toggleDrawer')"
    ></v-app-bar-nav-icon>
    <v-toolbar-title>
      <span class="hidden-sm-and-down">[ APP NAME ]</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn dark icon @click.stop="$store.dispatch('layout/toggleDrawerTools')">
      <v-icon>mdi-cog-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.layout.drawer;
      },
      set() {}
    }
  }
};
</script>

<style></style>
