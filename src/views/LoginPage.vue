<template>
  <v-parallax
    height="100%"
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
  >
    <v-container class="height100">
      <v-row style="height: 100%" align="center" justify="center">
        <v-col class="width-resposive" justify="center" align="center">
          <v-tabs class="width-resposive tabs-margin">
            <router-link class="v-tab" to="/">Log in</router-link>
            <router-link class="v-tab" to="/sign">Sign up</router-link>
          </v-tabs>
          <v-card class="width-resposive">
            <router-view></router-view>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-parallax>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class LoginPage extends Vue {}
</script>

<style lang="scss" scoped>
.width-resposive {
  width: 100%;
}
.tabs-margin {
  margin-bottom: 5px;
}
@media screen and (min-width: 800px) {
  .width-resposive {
    width: 70%;
  }
}
</style>
