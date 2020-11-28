<template>
  <v-navigation-drawer
    class="deep-purple accent-4 hidden-sm-and-down"
    dark
    permanent
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
          <v-list-item-title>{{ myComponente.title }}</v-list-item-title>
        </v-list-item-content>
      </router-link>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block> Logout </v-btn>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import myComponentes from "../../utils/myCompontesRoutes";
// O decorador @Component indica que a classe é um componente Vue
@Component({
  // Todas as opções de componentes são permitidas aqui
  //template: '<button @click="onClick">Click!</button>',
})
export default class NavBar extends Vue {
  // Dados iniciais podem ser declarados como propriedades da instância
  // message = "";
  myComponentes = myComponentes;
  // Métodos do componente podem ser declarados como métodos da instância
  /* onClick(): void {
    window.alert(this.message);
  } */
}
</script>

<style scoped>
.borderZero {
  border-radius: 0px;
}
</style>
