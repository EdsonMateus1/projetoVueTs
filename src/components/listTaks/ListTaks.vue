<template>
  <v-row>
    <todo-card
      v-for="todo in todos"
      :onDelete="() => removeTodo(todo.id)"
      @emitCheckbox="updatedCheckTodo($event, todo.id)"
      :key="todo.id"
      v-bind="todo"
    ></todo-card>
  </v-row>
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
  private todos: Array<never> | Array<Todo> | undefined = [];
  private userRepository = new UserRepository();
  async getTodos() {
    const todos = await this.userRepository.getTodos();
    this.todos = todos;
  }
  removeTodo(id: string) {
    this.userRepository.removeTodo(id);
    this.getTodos();
  }
  updatedCheckTodo(event: boolean, id: string) {
    this.userRepository.updatedCheckTodo(event, id);
    this.getTodos();
  }

  mounted() {
    this.getTodos();
  }
}
</script>

<style scoped></style>
