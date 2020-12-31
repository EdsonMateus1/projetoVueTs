<template>
  <v-container class="flex">
    <v-card elevation="10" class="pa-10" color="" width="600">
      <v-form @submit.prevent="createTodo" v-model="valid">
        <v-text-field
          color="#385F73"
          label="Title"
          hint=""
          persistent-hint
          outlined
          required
          :rules="inputRules"
          v-model="title"
        ></v-text-field>
        <v-textarea
          color="#385F73"
          outlined
          name="input-7-4"
          label="Description"
          :rules="inputRules"
          required
          v-model="description"
        ></v-textarea>
        <v-btn
          :disabled="!valid"
          class="white--text"
          color="#385F73"
          type="submit"
        >
          Register
        </v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserRepository from "@/repositories/user/userRepository";
@Component
export default class CreateTaks extends Vue {
  private title = "";
  private description = "";
  private completed = false;
  private valid = false;
  private userRepository = new UserRepository();
  private inputRules = [(v: string) => !!v || "Required field"];
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
      dateCreation: this.dateCreation,
    });
    this.$router.push({ name: "Home" });
  }
}
</script>

<style scoped>
.flex {
  display: flex !important;
  align-items: center !important;
  justify-content: center !important;
  height: 80% !important;
}
</style>
