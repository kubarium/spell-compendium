<template>
  <v-app>
    <v-toolbar app>aaa</v-toolbar>
    <v-content>
      <!-- <router-view /> -->
      <v-container>
        <v-tabs dark color="pink accent-3" slider-color="indigo darken-4">
          <v-tab>Tome of Magic</v-tab>
          <v-tab>Grimoire</v-tab>
          <v-tab-item>
            <v-card>
              <tome-of-magic/>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <h1>put your shit here</h1>your tome
            </v-card>
          </v-tab-item>
        </v-tabs>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TomeOfMagic from "@/components/TomeOfMagic.vue";
export default {
  components: {
    TomeOfMagic
  }
};
</script>
