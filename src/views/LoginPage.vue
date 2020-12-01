<template>
  <v-parallax
    height="100%"
    src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
  >
    <v-container class="height100">
      <v-row style="height: 80%" align="center" justify="center">
        <v-card width="100%" height="">
          <v-form v-model="valid">
            <router-view></router-view>
            <router-link to="/home/listTaks">home </router-link>
          </v-form>
        </v-card>
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
</style>
