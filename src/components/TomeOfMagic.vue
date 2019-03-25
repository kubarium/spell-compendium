<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex sm4 md5 lg4>
        <h1 class="title mb-3">Filters</h1>
        <v-sheet class="pa-2">
          <h2 class="subheading my-1 pink--text text--darken-2">Spell Name</h2>
          <v-text-field
            solo
            hide-details
            clearable
            class="my-2"
            :value="$store.state.tomeOfMagic.keyword"
            @input="$store.commit('changeKeyword', $event)"
          />
        </v-sheet>
        <v-divider />
        <v-sheet class="pa-2">
          <h2 class="subheading my-1 pink--text text--darken-2">Spell Level</h2>
          <level-selector class="my-2" />
        </v-sheet>
        <v-divider />
        <v-sheet class="pa-2">
          <h2 class="subheading my-1 pink--text text--darken-2">
            Class Selector
          </h2>
          <class-selector class="my-2" />
        </v-sheet>
        <v-divider />
        <v-sheet class="pa-2">
          <h2 class="subheading my-1 pink--text text--darken-2">
            List of Spells
          </h2>
          <span v-if="$store.getters.spells.length == 0"
            >Filter too restrictive</span
          >
          <spell-list :spells="$store.getters.spells" v-else />
        </v-sheet>
        <v-divider />
      </v-flex>
      <v-flex sm8 md7 lg8>
        <h1 class="title mb-3">Preview</h1>
        <v-sheet class="px-2">
          <card
            :spell="$store.state.tomeOfMagic.spell"
            v-if="
              !$store.state.tomeOfMagic.loading &&
                $store.state.tomeOfMagic.spell.name
            "
          />
        </v-sheet>
        <v-sheet v-if="$store.state.tomeOfMagic.loading">
          Acquiring spell details
          <v-progress-linear color="pink" indeterminate class="mb-0" />
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Card from "./Card.vue";
import LevelSelector from "./LevelSelector.vue";
import ClassSelector from "./ClassSelector.vue";
import SpellList from "./SpellList.vue";
export default {
  name: "tome-of-magic",
  components: { Card, ClassSelector, LevelSelector, SpellList }
};
</script>
