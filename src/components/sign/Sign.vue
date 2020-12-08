<template>
  <v-container>
    <v-form @submit.prevent="createUser" v-model="valid">
      <v-text-field
        v-model="firstName"
        :rules="nameRules"
        :counter="10"
        label="First name"
        required
        type="text"
      ></v-text-field>

      <v-text-field
        v-model="lastName"
        :rules="nameRules"
        :counter="10"
        label="Last name"
        required
        type="text"
      ></v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        type="email"
      ></v-text-field>

      <v-text-field
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
        type="password"
      ></v-text-field>

      <v-text-field
        v-model="confirmePassword"
        :rules="confirmePasswordRules"
        label="Confirme password"
        required
        type="password"
      ></v-text-field>
      <Button :validProps="valid" title="Sign in"></Button>
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
    //(v: any) => !!v || "password comfirme is required",
  ];
  private passwordRules = [
    (v: any) => !!v || "password is required",
    //(v: any) => !!v || "password comfirme is required",
  ];
  private nameRules = [
    (v: any) => !!v || "Name is required",
    (v: any) => v.length <= 10 || "Name must be less than 10 characters",
  ];
  private emailRules = [
    (v: any) => !!v || "E-mail is required",
    (v: any) => /.+@.+/.test(v) || "E-mail must be valid",
  ];

  async createUser() {
    try {
      const res = await this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped></style>
