<template>
  <div>
    <appBar>
      <!-- -->
    </appBar>

    <!-- Sizes your content based upon application components -->
    <v-main>
      <router-view></router-view>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import appBar from "@/components/appBar/AppBar.vue";

@Component({
  components: { appBar },
})
export default class Home extends Vue {}
</script>
