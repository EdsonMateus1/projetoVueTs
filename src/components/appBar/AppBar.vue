<template>
  <v-app-bar color="deep-purple accent-4" dark>
    <v-toolbar-title>Todo organizando suas tarefas</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
        <v-app-bar-nav-icon class="hidden-md-and-up" v-bind="attrs" v-on="on">
        </v-app-bar-nav-icon>
      </template>
      <v-list>
        <router-link
          class="v-list-item v-list-item--link"
          v-for="(myComponente, index) in myComponentes"
          :key="index"
          :to="myComponente.to"
          style="color: #000"
        >
          <v-list-item-content color="deep-purple">{{
            myComponente.title
          }}</v-list-item-content>
        </router-link>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
interface ImyComponentes {
  title: string;
  icon: string;
  to: string;
}
@Component
export default class AppBar extends Vue {
  myComponentes: Array<ImyComponentes> = [
    { title: "Create taks", icon: "mdi-view-dashboard", to: "/" },
    { title: "List taks", icon: "mdi-account-box", to: "/listTaks" },
    { title: "Edit taks", icon: "mdi-gavel", to: "/editTaks" },
  ];
}
</script>

<style scoped></style>
