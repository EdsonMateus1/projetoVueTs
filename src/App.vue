<template>
  <v-app><Home></Home> </v-app>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Home from "@/views/Home.vue";

@Component({
  components: { Home },
})
export default class App extends Vue {}
</script>
