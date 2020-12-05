<template>
  <div class="home">
    <appBar class="header"> </appBar>
    <navBar class="nav"> </navBar>

    <v-main class="main">
      <router-view></router-view>
    </v-main>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import appBar from "@/components/appBar/AppBar.vue";
import navBar from "@/components/navBar/NavBar.vue";

@Component({
  components: { appBar, navBar }
})
export default class Home extends Vue {}
</script>

<style scope lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "NAV HE"
    "NAV CT";
}
.main {
  grid-area: CT;
}

.nav {
  grid-area: NAV;
}

.header {
  grid-area: HE;
}
</style>
