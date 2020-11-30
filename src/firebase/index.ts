import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/database";
import Vue from "vue";

interface Ifirebase {
  apiKey: string;
  authDomain: string;
  databaseURL: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
};

const firebaseConfig: Ifirebase = {
  apiKey: process.env.VUE_APPAPI_KEY,
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  databaseURL: process.env.VUE_APP_DATABASE_URL,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);

// 2. Especifique o arquivo com os tipos que quer ampliar
//    Vue tem um construtor de tipos em types/vue.d.ts
declare module "vue/types/vue" {
  // 3. Declare a ampliação para Vue
  interface Vue {
    $firebase: firebase.app.App;
  }
};

export default function install(Vue: any) {
  Object.defineProperty(Vue.prototype, "$firebase", {
    get() {
      return firebaseApp;
    },
  });
};
