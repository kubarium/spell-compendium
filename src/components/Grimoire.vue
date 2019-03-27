<template>
  <v-container grid-list-md fluid>
    <v-layout row wrap>
      <v-flex sm4 md4 lg3>
        <h1 class="title mb-3">Spell List</h1>

        <v-btn icon @click="print"><v-icon>print</v-icon></v-btn>

        <v-sheet class="pa-2">
          <span v-if="$store.getters.grimoire.length == 0"
            >No spell in your grimoire</span
          >
          <spell-list
            :spells="$store.getters.grimoire"
            mode="grimoire"
            v-else
          />
        </v-sheet>
        <v-divider />
        <v-sheet>
          <v-switch
            false-value="portrait"
            true-value="landscape"
            @change="$store.commit('toggleOrientation')"
            :label="$store.state.grimoire.orientation"
          ></v-switch>
        </v-sheet>
      </v-flex>
      <v-flex sm8>
        <h1 class="title mb-3">Spells To Print</h1>
        <v-sheet class="px-2">
          <cards />
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SpellList from "./SpellList.vue";
import Cards from "./Cards.vue";
export default {
  name: "grimoire",
  components: { Cards, SpellList },
  methods: {
    
  }
};
</script>
