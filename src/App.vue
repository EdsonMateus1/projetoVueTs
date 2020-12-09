<template>
  <v-app>
    <router-view></router-view>
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
export default class App extends Vue {
  mounted() {
    this.$router.push({ name: "Login" });
  }
}
</script>

<style lang="scss">
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
.height100 {
  height: 100vh;
}
</style>
