<template>
  <v-app>
    <Home></Home>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/views/Home.vue";

// O decorador @Component indica que a classe é um componente Vue
@Component({
  // Todas as opções de componentes são permitidas aqui
  components: { Home },
})
export default class App extends Vue {}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.borderZero {
  border-radius: 0px;
}
</style>
