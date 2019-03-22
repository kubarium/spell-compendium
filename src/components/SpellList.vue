<template>
  <v-list dense class="spell-list">
    <template v-for="(spell, index) in spells">
      <v-divider :key="`divider-${index}`" v-if="index > 0"/>
      <v-list-tile :key="`spell-${index}`" avatar @click="selectSpell(spell)">
        <v-list-tile-avatar v-show="mode === 'basket'">
          <v-icon color="red">{{ spellLevel(spell.level) }}</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ spell.name }}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action @click="$store.dispatch('addToGrimoire', spell)">
          <v-icon>library_add</v-icon>
        </v-list-tile-action>
      </v-list-tile>
    </template>
  </v-list>
</template>

<script>
export default {
  name: "spell-list",
  props: { spells: Array, mode: String },
  methods: {
    selectSpell(spell) {
      if (this.mode === "basket") return;

      this.$store.commit("selectSpell", spell);
    },
    spellLevel(level) {
      return level === 0 ? `filter_none` : `filter_${level}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.spell-list {
  height: 20ch;
  overflow-y: scroll;
}
</style>
