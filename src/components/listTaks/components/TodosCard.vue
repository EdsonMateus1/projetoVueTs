<template>
  <v-card class="ma-8" min-width="350" max-height="170" color="#385F73" dark>
    <v-card-title class="headline mb-3"> {{ title }}</v-card-title>

    <v-card-subtitle>{{ description }}</v-card-subtitle>

    <v-card-actions>
      <v-checkbox v-model="checkbox" label="Marca como completa"></v-checkbox>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component
export default class TodosCard extends Vue {
  @Prop({ required: true })
  title!: string;
  @Prop({ required: true })
  description!: string;
  private checkbox = false;
}
</script>

<style scoped></style>