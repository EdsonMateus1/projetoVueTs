import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "./firebase/firebase";
import vuetify from "./plugins/vuetify";

Vue.use(firebase);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: (h: (arg0: any) => any) => h(App)
}).$mount("#app");
