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
      <Button :validProps="valid" title="log in"></Button>
    </v-form>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Button from "@/components/shared/button/Button.vue";

@Component({
  components: { Button },
})
export default class Login extends Vue {
  private valid = false;
  private email = "";
  private password = "";

  private passwordRules = [
    (v: any) => !!v || "password is required",
    //(v: any) => !!v || "password is required",
  ];

  private emailRules = [
    (v: any) => !!v || "E-mail is required",
    (v: any) => /.+@.+/.test(v) || "E-mail must be valid",
  ];

  async doLogin() {
    try {
      const res = await this.$firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style lang="scss" scoped>
.margin {
  margin: 20px 0px;
}
</style>
