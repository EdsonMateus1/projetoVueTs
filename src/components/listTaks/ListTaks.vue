<template>
  <v-container class="main">
    <v-row>
      <todo-card v-for="todo in todos" :key="todo.id"></todo-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserRepository from "@/repositories/user/userRepository";
import TodoCard from "./components/TodosCard.vue";
import { Todo } from "@/settings/types/userTypes";

@Component({
  components: { TodoCard },
})
export default class CreateTaks extends Vue {
  private todoName = "comprar pao";
  private completed = false;
  private todos: Array<never> | Array<Todo> | undefined = [];
  private userRepository = new UserRepository();

  async getTodos() {
    const todos = await this.userRepository.getTodos();
    this.todos = todos;
  }
  async mounted() {
    await this.getTodos();
  }
}
</script>

<style scoped></style>
