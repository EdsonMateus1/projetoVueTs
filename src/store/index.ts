import Vue from "vue";
import Vuex from "vuex";
import { TodoState } from "@/settings/types/userTypes";
import UserRepository from "@/repositories/user/userRepository";

Vue.use(Vuex);

export default new Vuex.Store<TodoState>({
  state: {
    todos: [],
  },

  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },
  },
  actions: {
    async getTodo(context) {
      const userRepository = new UserRepository();
      const todos = await userRepository.getTodos();
      context.commit("setTodos", todos);
    },
  },
  modules: {},
});
