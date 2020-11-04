<template>
  <v-app>
    <v-main>
      <v-container
        fill-height
        class="d-flex justify-center align-center ma-0 pa-0"
      >
        <v-card elevation="6" min-width="350">
          <v-toolbar color="primary" dark flat>
            <v-toolbar-title>[System Name]</v-toolbar-title>
            <v-spacer></v-spacer>
          </v-toolbar>
          <v-card-text>
            <v-form @keyup.enter.native="login()">
              <v-text-field
                label="Email"
                name="email"
                prepend-icon="mdi-account"
                type="text"
                v-model="form.email"
              ></v-text-field>
              <!-- :error-messages="singInMsg | errorHandler('email')" -->
              <v-text-field
                id="password"
                label="Password"
                name="password"
                prepend-icon="mdi-lock"
                type="password"
                v-model="form.password"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn depressed color="primary" block @click="login">login</v-btn>
          </v-card-actions>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      form: {
        email: "",
        password: ""
      }
    };
  },
  methods: {
    login() {
      this.$api.auth
        .login({
          email: this.form.email,
          password: this.form.password
        })
        .then(response => {
          let res = response.data;
          let token = res.access_token;

          this.$store.dispatch("auth/setAuth", {
            token: token,
            islogin: true
          });

          this.form = {
            email: "",
            password: ""
          };

          this.$store.dispatch("snackbar/openSnackbar", { msg: "登入成功" });

          this.$router.push("/").catch(() => {});
        })
        .catch(err => {
          console.log("err", err);
          this.$store.dispatch("snackbar/openSnackbar", { msg: "登入失敗" });
        });
    }
  }
};
</script>

<style></style>
