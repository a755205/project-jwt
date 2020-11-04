import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import api from "./apis";
import helperRouter from "./helper/router";

helperRouter.auth.check();

Vue.config.productionTip = false;

Vue.prototype.$api = api; // api 掛載到vue原型上

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
