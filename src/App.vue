<template>
  <v-app class="white">
    <!-- <v-toolbar app>aaa</v-toolbar> -->
    <v-content>
      <!-- <router-view /> -->
      <v-container fluid pa-0>
        <v-tabs dark color="pink accent-3" slider-color="indigo darken-4">
          <v-tab>Tome of Magic</v-tab>
          <v-tab>Grimoire</v-tab>
          <v-tab-item>
            <tome-of-magic/>
            <!-- <v-card>
            </v-card>-->
          </v-tab-item>
          <v-tab-item>
            <grimoire/>
          </v-tab-item>
        </v-tabs>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TomeOfMagic from "@/components/TomeOfMagic.vue";
import Grimoire from "@/components/Grimoire.vue";
export default {
  components: { Grimoire, TomeOfMagic }
};
</script>
