<template>
  <v-card class="ma-8" min-width="350" max-height="150" color="#385F73" dark>
    <v-card-title class="headline"> ir na academia </v-card-title>

    <v-card-subtitle>tenho que ir malhar o bumbu</v-card-subtitle>

    <v-card-actions>
      <v-checkbox v-model="checkbox" label="Marca como completa"></v-checkbox>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class TodosCard extends Vue {
  private checkbox = false;
}
</script>

<style scoped></style>