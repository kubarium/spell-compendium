<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex sm5>
        <h1 class="title mb-3">Filters</h1>
        <v-sheet class="px-2">
          <v-text-field
            label="Spell Name"
            :value="$store.state.tomeOfMagic.keyword"
            @keyup="$store.dispatch('rummageTome')"
            @input="$store.commit('changeKeyword', $event)"
          />
        </v-sheet>
        <v-divider/>
        <v-sheet class="pa-2">
          <h2 class="subheading my-1">Spell Level</h2>
          <level-selector class="my-2"/>
        </v-sheet>
        <v-divider/>
        <v-sheet class="pa-2">
          <h2 class="subheading my-1">Class Selector</h2>
          <class-selector class="my-2"/>
        </v-sheet>
        <v-divider/>
        <v-sheet class="pa-2">
          <h2 class="subheading my-1">List of Spells</h2>
          <spell-list :spells="$store.getters.spells"/>
        </v-sheet>
      </v-flex>
      <v-flex>
        <h1 class="title mb-3">Preview</h1>
        <v-sheet class="px-2">
          <!--  <card :data="$store.state.tomeOfMagic.spell"/> -->
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
