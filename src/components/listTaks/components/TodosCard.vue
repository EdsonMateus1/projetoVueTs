<template>
  <v-card
    elevation="5"
    class="ma-8"
    max-width="300"
    min-width="300"
    color="#385F73"
    dark
  >
    <v-card-title class="headline mb-3">{{ title }}</v-card-title>

    <v-card-subtitle>{{ description }}</v-card-subtitle>

    <v-card-actions>
      <v-checkbox
        @change="emitCheckbox"
        v-model="checkbox"
        label="Marca como completa"
      ></v-checkbox>
      <v-spacer></v-spacer>
      <v-btn
        @click="onDelete"
        width="30"
        height="30"
        class="mx-0"
        fab
        dark
        small
        color="#385F73"
      >
        <v-icon dark>mdi-delete </v-icon>
      </v-btn>
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
  @Prop({ required: true })
  completed!: boolean;
  @Prop({ required: false })
  onDelete!: Function;
  @Prop({ required: false })
  onCheck!: Function;
  private checkbox = this.completed;
  emitCheckbox() {
    this.$emit("emitCheckbox", this.checkbox);
  }
}
</script>

<style scoped></style>