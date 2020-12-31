import Vue from "vue";
import Vuex from "vuex";
import { UserData } from "@/settings/types/userTypes";

Vue.use(Vuex);

export default new Vuex.Store<UserData>({
  state: {
    firstName: "edson",
    lastName: "mateus",
    todos: {
      completed: false,
      id: "123",
      dateCreation: "12/12/12",
      name: "compra pao",
    },
  },
  mutations: {},
  actions: {},
  modules: {},
});
