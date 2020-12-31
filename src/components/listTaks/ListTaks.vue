<template>
  <v-container class="main">
    <v-row>
      <v-card
        class="ma-8"
        min-width="350"
        max-height="150"
        color="#385F73"
        dark
      >
        <v-card-title class="headline"> ir na academia </v-card-title>

        <v-card-subtitle>tenho que ir malhar o bumbu</v-card-subtitle>

        <v-card-actions>
          <v-checkbox
            v-model="checkbox"
            label="Marca como completa"
          ></v-checkbox>
        </v-card-actions>
      </v-card>

      <v-card
        class="ma-8"
        min-width="350"
        max-height="150"
        color="#385F73"
        dark
      >
        <v-card-title class="headline"> ir na academia </v-card-title>

        <v-card-subtitle>tenho que ir malhar o bumbu</v-card-subtitle>

        <v-card-actions>
          <v-checkbox
            v-model="checkbox"
            label="Marca como completa"
          ></v-checkbox>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import UserRepository from "@/repositories/user/userRepository";
@Component
export default class CreateTaks extends Vue {
  private todoName = "comprar pao";
  private checkbox = false;
  private completed = false;
  private userRepository = new UserRepository();

  async getTodos() {
    return await this.userRepository.getTodos();
  }
  async mounted() {
    const res = await this.getTodos();
    console.log(res);
  }
}
</script>

<style scoped></style>
