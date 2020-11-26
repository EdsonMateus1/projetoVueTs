<template>
  <v-card class="" height="100%" width="256">
    <v-navigation-drawer class="deep-purple accent-4" dark permanent>
      <v-list>
        <router-link
          class="v-list-item v-list-item--link theme--dark"
          to="/listTaks"
          v-for="item in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </router-link>
      </v-list>

      <template v-slot:append>
        <div class="pa-2">
          <v-btn block>
            Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
interface Items {
  title: string;
  icon: string;
}

@Component
export default class NavBar extends Vue {
  items: Array<Items> = [
    { title: "Dashboard", icon: "mdi-view-dashboard" },
    { title: "Account", icon: "mdi-account-box" },
    { title: "Admin", icon: "mdi-gavel" },
  ];
}
</script>

<style scoped></style>
