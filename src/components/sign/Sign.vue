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
import UserRepository from "@/repositories/user/userRepository";

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

  private passwordRules = [
    (v: string) => !!v || "password is required",
    (v: string) =>
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/.test(v) ||
      "the password must be at least eight characters long, with at least one uppercase letter, one lowercase letter and a number",
  ];
  private nameRules = [
    (v: string) => !!v || "Name is required",
    (v: string) => v.length <= 10 || "Name must be less than 10 characters",
  ];
  private emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+/.test(v) || "E-mail must be valid",
  ];

  get confirmePasswordRules() {
    const confirmePasswordRules = [
      (v: string) => !!v || "password comfirme is required",
      (v: string) => v === this.password || "passwords must be the same",
    ];
    return confirmePasswordRules;
  }
  saveName() {
    const id = localStorage.getItem("toke-login");
    if (!id) return;
    const userRepository = new UserRepository();
    userRepository.createUser({
      firstName: this.firstName,
      lastName: this.lastName
    });
  }

  async createUser() {
    try {
      const res = await this.$firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password);
      const id = res.user?.uid ?? "";
      localStorage.setItem("toke-login", id);
      this.saveName();
      this.$router.push({ name: "Home" });
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped></style>
