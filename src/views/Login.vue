<template>
  <v-container>
    <v-form v-model="valid">
      <v-container>
        <v-text-field
          v-model="firstName"
          :rules="nameRules"
          :counter="10"
          label="First name"
          required
        ></v-text-field>

        <v-text-field
          v-model="lastName"
          :rules="nameRules"
          :counter="10"
          label="Last name"
          required
        ></v-text-field>

        <v-text-field
          v-model="email"
          :rules="emailRules"
          label="E-mail"
          required
        ></v-text-field>
      </v-container>
    </v-form>
    <router-link to="/home/listTaks">home </router-link>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Login extends Vue {
  private valid = false;
  private firstName = "";
  private lastName = "";
  private nameRules = [
    (v: any) => !!v || "Name is required",
    (v: any) => v.length <= 10 || "Name must be less than 10 characters",
  ];
  private emailRules = [
    (v: any) => !!v || "E-mail is required",
    (v: any) => /.+@.+/.test(v) || "E-mail must be valid",
  ];
}
</script>

<style scoped></style>
