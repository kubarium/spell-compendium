<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex sm4 md5>
        <h1 class="title mb-3">Spell List</h1>
        <v-sheet class="pa-2">
          <span v-if="$store.getters.grimoire.length==0">No spell in your grimoire</span>
          <spell-list :spells="$store.getters.grimoire" mode="basket" v-else/>
        </v-sheet>
        <v-divider/>
      </v-flex>
      <v-flex sm8 md7>
        <h1 class="title mb-3">Spells To Print</h1>
        <v-sheet class="px-2">
          <!-- <card :spell="$store.state.tomeOfMagic.spell" v-if="$store.state.tomeOfMagic.spell.name"/> -->
        </v-sheet>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import SpellList from "./SpellList.vue";
export default { name: "grimoire", components: { SpellList } };
</script>

<style>
</style>
