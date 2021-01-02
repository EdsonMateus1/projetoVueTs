<template>
  <v-navigation-drawer
    class="#385F73 accent-4 hidden-sm-and-down"
    dark
    permanent
    width="225px"
  >
    <v-list class="px-3 py-0">
      <v-list-item-content>
        <v-dialog v-model="closeModal" width="700">
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-bind="attrs" v-on="on">
              <v-list-item-icon>
                <div>
                  <v-icon> {{ "mdi-plus" }} </v-icon>
                  Create Taks
                </div>
              </v-list-item-icon>
            </v-btn>
          </template>
          <create-taks @closeModal="closeModal = $event"></create-taks>
        </v-dialog>
      </v-list-item-content>
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
import CreateTaks from "@/components/createTaks/CreateTaks.vue";
// O decorador @Component indica que a classe é um componente Vue
@Component({ components: { CreateTaks } })
export default class NavBar extends Vue {
  private readonly myComponentes = myComponentes;
  private progress = false;
  private closeModal = false;

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
