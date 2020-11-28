import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebaVue from "./firebase/index"
import vuetify from "./plugins/vuetify";

Vue.use(firebaVue)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
