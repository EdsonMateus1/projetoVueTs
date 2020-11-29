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

@Component
export default class AppBar extends Vue {
  private myComponentes = myComponentes;
}
</script>

<style scoped></style>
