<template>
  <v-container class="main">
    <todo-card></todo-card>
  </v-container>
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
  private todoName = "comprar pao";
  private completed = false;
  private todos: Array<Todo> | undefined;
  private userRepository = new UserRepository();

  async getTodos() {
    const todos = await this.userRepository.getTodos();
    this.todos = todos;
  }
  mounted() {
    console.log(this.todos);
  }
}
</script>

<style scoped></style>
