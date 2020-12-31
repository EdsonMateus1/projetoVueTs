<template>
  <v-container class="main"> </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserRepository from "@/repositories/user/userRepository";
@Component
export default class CreateTaks extends Vue {
  private todoName = "comprar pao";
  private completed = false;
  private userRepository = new UserRepository();
  get dateFormate() {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return `${day}/${month + 1}/${year}`;
  }
  createTodo() {
    this.userRepository.createTodo({
      name: this.todoName,
      completed: this.completed,
      dateCreation: this.dateFormate,
    });
  }
  mounted() {
    this.createTodo();
  }
}
</script>

<style scoped></style>
