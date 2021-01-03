<template>
  <v-row>
    <todo-card
      v-for="todo in todosState"
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
  components: { TodoCard }
})
export default class CreateTaks extends Vue {
  private todos: Array<never> | Array<Todo> | undefined = [];
  private userRepository = new UserRepository();
  removeTodo(id: string) {
    this.userRepository.removeTodo(id);
    this.$store.dispatch("getTodo");
  }
  updatedCheckTodo(event: boolean, id: string) {
    this.userRepository.updatedCheckTodo(event, id);
    this.$store.dispatch("getTodo");
  }
  get todosState() {
    return this.$store.state.todos;
  }
  mounted() {
    this.$store.dispatch("getTodo");
  }
}
</script>

<style scoped></style>
