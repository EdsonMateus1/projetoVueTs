import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "./firebase"
import vuetify from "./plugins/vuetify";
import Vuelidate from "vuelidate"

Vue.use(Vuelidate)
Vue.use(firebase)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
