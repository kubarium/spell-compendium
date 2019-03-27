<template>
  <v-app class="white">
    <v-content>
      <v-container fluid pa-0>
        <v-tabs
          dark
          fixed-tabs
          color="pink accent-3"
          slider-color="indigo darken-4"
        >
          <v-tab>Tome of Magic</v-tab>
          <v-tab>Grimoire</v-tab>
          <v-tab-item><tome-of-magic /></v-tab-item>
          <v-tab-item :lazy="true">
            <grimoire />
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
  components: { Grimoire, TomeOfMagic },
  methods: {
    changeTab(tab) {
      //when we change to tab, we should rerender cards since their display were none, fucking up the height calculation
      /* if (tab == 1) {
        console.log("grimoire", this.$refs.grimoire.$refs.cards);
        window.sik = this.$refs.grimoire.$refs.cards;

        this.$refs.grimoire.$refs.cards.$children.forEach(child =>
          child.$forceUpdate()
        );
      } */
    }
  }
};
</script>
