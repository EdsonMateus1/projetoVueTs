<template>
  <v-btn
    :disabled="!validProps"
    type="submit"
    color="deep-purple"
    class="mr-4 white--text"
  >
    {{ title }}
  </v-btn>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Button extends Vue {
  @Prop()
  title!: string;
  @Prop()
  validProps!: boolean;
}
</script>

<style scoped></style>
