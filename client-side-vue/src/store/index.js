import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";
import auth from "./modules/auth";
import snackbar from "./modules/snackbar";
import layout from "./modules/layout";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { auth, snackbar, layout },
  plugins: [
    persistedstate({
      storage: window.localStorage,
      reducer(val) {
        return {
          // only save specific module
          auth: val.auth
        };
      }
    })
  ]
});
