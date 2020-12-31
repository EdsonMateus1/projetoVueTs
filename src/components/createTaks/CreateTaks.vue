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
}
</script>

<style scoped></style>
