<template>
  <v-container class="main"> </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserRepository from "@/repositories/user/userRepository";
@Component
export default class CreateTaks extends Vue {
  private title = "comprar azeite";
  private description = "amanha azeite";
  private completed = false;
  private userRepository = new UserRepository();
  get dateCreation() {
    const day = new Date().getDate();
    const month = new Date().getMonth();
    const year = new Date().getFullYear();
    return `${day}/${month + 1}/${year}`;
  }
  createTodo() {
    this.userRepository.createTodo({
      title: this.title,
      description: this.description,
      completed: this.completed,
      dateCreation: this.dateCreation
    });
  }
}
</script>

<style scoped></style>
