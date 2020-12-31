<template>
  <v-container class="main">
    
  </v-container>
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

  async getUser() {
    const user = await this.userRepository.getDataBase();
    return user;
  }

  async saveTodo() {
    const user = await this.getUser();
    const key = this.userRepository.createKey();
    console.log(user);
    const data = {
      ...user,
      todos: {
        id: key,
        name: this.todoName,
        dateCreation: this.dateFormate,
        completed: this.completed,
      },
    };
    this.userRepository.setDataBase(data);
  }
  mounted() {
    this.saveTodo();
  }
}
</script>

<style scoped></style>
