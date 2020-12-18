<template>
  <v-container>
    <v-form @submit.prevent="doLogin" v-model="valid">
      <v-text-field
        class="margin"
        v-model="email"
        :rules="emailRules"
        label="E-mail"
        required
        type="email"
      ></v-text-field>

      <v-text-field
        class="margin"
        v-model="password"
        :rules="passwordRules"
        label="Password"
        required
        type="password"
      ></v-text-field>
      <v-progress-linear
        v-if="progress"
        color="deep-purple accent-4"
        indeterminate
        rounded
        height="6"
      ></v-progress-linear>
      <Button v-else :validProps="valid" title="log in"></Button>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/shared/button/Button.vue";
import VueRouter, { Route } from "vue-router";
@Component({
  components: { Button }
})
export default class Login extends Vue {
  private valid = false;
  private email = "";
  private password = "";
  private progress = false;
  private passwordRules = [(v: any) => !!v || "password is required"];
  private emailRules = [
    (v: any) => !!v || "E-mail is required",
    (v: any) => /.+@.+/.test(v) || "E-mail must be valid"
  ];
  async doLogin() {
    try {
      this.progress = true;
      const res = await this.$firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      const id = res.user!.uid;
      localStorage.setItem("toke-login", id);
      this.$router.push({ name: "Home" });
    } catch (error) {
      console.log(error);
    }
  }
  redirectLoggedIn() {
    const id = localStorage.getItem("toke-login");
    if (id) {
      this.$router.push({ name: "Home" });
    } else {
      return;
    }
  }
  mounted() {
    this.redirectLoggedIn();
  }
}
</script>

<style lang="scss" scoped>
.margin {
  margin: 20px 0px;
}
</style>
