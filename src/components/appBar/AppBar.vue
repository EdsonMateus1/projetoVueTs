<template>
  <v-app-bar color="deep-purple accent-4" dark>
    <v-toolbar-title>Bem-vindo {{ nameFormat }} </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon class="hidden-md-and-up" v-bind="attrs" v-on="on">
        </v-app-bar-nav-icon>
      </template>
      <v-list>
        <v-list-item
          v-for="(myComponente, index) in myComponentes"
          :key="index"
        >
          <router-link
            class="v-list-item v-list-item--link black--text"
            :to="myComponente.to"
          >
            <v-list-item-title>{{ myComponente.title }}</v-list-item-title>
          </router-link>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import myComponentes from "../../utils/myCompontesRoutes";
import { UserData } from "@/types/userTypes";
import UserRepository from "@/repositories/user/userRepository";

@Component
export default class AppBar extends Vue {
  private readonly myComponentes = myComponentes;
  private name = "";

  async getName() {
    const userRepository = new UserRepository();
    userRepository.getDataBase().then((name: UserData) => {
      this.name = name.firstName;
    });
  }
  get nameFormat() {
    const nome = this.name;
    const primeiroCaracter = nome.slice(0, 1).toUpperCase();
    const restCaracter = nome.slice(1, nome.length).toLowerCase();
    const nameFormat = `${primeiroCaracter}${restCaracter}`;
    return nameFormat;
  }
  mounted() {
    this.getName();
  }
}
</script>

<style scoped></style>
