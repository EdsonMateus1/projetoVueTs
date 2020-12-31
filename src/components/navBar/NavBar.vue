<template>
  <v-navigation-drawer
    class="#385F73 accent-4 hidden-sm-and-down"
    dark
    permanent
    width="225px"
  >
    <v-list>
      <router-link
        class="v-list-item v-list-item--link theme--dark"
        v-for="myComponente in myComponentes"
        :to="myComponente.to"
        :key="myComponente.title"
        link
      >
        <v-list-item-icon>
          <v-icon>{{ myComponente.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title> {{ myComponente.title }}</v-list-item-title>
        </v-list-item-content>
      </router-link>
    </v-list>
    <v-divider></v-divider>

    <template v-slot:append>
      <div class="pa-2">
        <v-progress-linear
          class="progress"
          v-if="progress"
          color="black"
          indeterminate
          rounded
          height="36"
        ></v-progress-linear>
        <v-btn v-else @click="logout" block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import myComponentes from "../../utils/myCompontesRoutes";
// O decorador @Component indica que a classe é um componente Vue
@Component({})
export default class NavBar extends Vue {
  private readonly myComponentes = myComponentes;
  private progress = false;
  async logout() {
    try {
      this.progress = true;
      await this.$firebase.auth().signOut();
      localStorage.removeItem("toke-login");
      this.$router.push({ name: "Login" });
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
.borderZero {
  border-radius: 0px;
}
.progress {
  margin-bottom: 20px;
}
</style>
