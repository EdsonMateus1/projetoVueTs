<template>
  <v-container>
    <v-form v-model="valid">
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

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
      ></v-text-field>

      <v-text-field
        v-model="confirmePassword"
        :rules="confirmePasswordRules"
        label="Confirme password"
        required
      ></v-text-field>
      <Button title="Sig in"></Button>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/shared/button/Button.vue";
@Component({
  components: { Button },
})
export default class Sign extends Vue {
  private valid = false;
  private firstName = "";
  private lastName = "";
  private password = "";
  private email = "";
  private confirmePassword = "";
  private confirmePasswordRules = [
    (v: any) => !!v || "password comfirme is required",
    (v: any) => v.length <= 10 || "Name must be less than 10 characters",
  ];
  private passwordRules = [
    (v: any) => !!v || "password is required",
    (v: any) => v.length <= 10 || "Name must be less than 10 characters",
  ];
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

<style lang="scss" scoped>
</style>
