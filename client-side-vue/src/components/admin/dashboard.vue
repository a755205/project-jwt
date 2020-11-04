<template>
  <div>
    <h1>dashboard</h1>
    <h1>{{ $store.state.layout }}</h1>
    <v-btn depressed @click="getUser">
      getAuthUSer
    </v-btn>
    <v-btn depressed @click="alertmsg">
      alert msg
    </v-btn>
  </div>
</template>

<script>
export default {
  methods: {
    getUser() {
      this.$api.v1.users
        .detail()
        .then(response => {
          let res = response.data;
          this.$store.dispatch("snackbar/openSnackbar", { msg: res.name });
        })
        .catch(err => {
          console.log("err", err);
        });
    },
    alertmsg() {
      this.$store.dispatch("snackbar/openSnackbar", { msg: "11" });
    }
  }
};
</script>

<style></style>
