<template>
  <v-navigation-drawer
    app
    right
    temporary
    v-model="drawer"
    @input="drawerChange"
  >
    <v-toolbar>
      <v-toolbar-title>Settings</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="$store.dispatch('layout/setDrawerTools', false)">
        <v-icon>mdi-close</v-icon>
      </v-btn>
    </v-toolbar>
    <v-divider></v-divider>
    <template v-slot:append>
      <div class="pa-2">
        <v-btn block @click.stop="logout">
          Logout
        </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  computed: {
    drawer: {
      get() {
        return this.$store.state.layout.drawerTools;
      },
      set() {}
    }
  },
  methods: {
    drawerChange(isDrawerOpen) {
      this.$store.dispatch("layout/setDrawerTools", isDrawerOpen);
    },
    logout() {
      this.$api.auth.logout().then(() => {
        this.$store.dispatch("layout/setDrawerTools", false);

        this.$store.dispatch("auth/setAuth", {
          token: "",
          islogin: false
        });
        this.$router.push("/login").catch(() => {});
      });
    }
  }
};
</script>

<style></style>
