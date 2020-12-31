<template>
  <v-main class="main">
    <v-row style="height: 100%" align="center" justify="center">
      <v-col class="width-resposive" justify="center" align="center">
        <v-tabs class="width-resposive tabs-margin border-radius">
          <router-link class="v-tab" :to="{ name: 'Login' }"
            >Log in</router-link
          >
          <router-link class="v-tab" :to="{ name: 'Sign' }"
            >Sign up</router-link
          >
        </v-tabs>
        <v-card class="width-resposive">
          <router-view></router-view>
        </v-card>
      </v-col>
    </v-row>
  </v-main>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginPage extends Vue {
  mounted() {
    console.log(this.$store.state);
  }
}
</script>

<style lang="scss" scoped>
.main {
  background-color: #385f73;
  padding: 0 20px !important;
}
.width-resposive {
  width: 100%;
}
.tabs-margin {
  margin-bottom: 5px;
}
.border-radius {
  border-radius: 4px;
}
@media screen and (min-width: 800px) {
  .width-resposive {
    width: 70%;
  }
}
</style>
