<template>
  <v-list dense class="spell-list">
    <template v-for="(spell, index) in spells">
      <v-divider :key="`divider-${index}`" v-if="index > 0"/>
      <v-list-tile :key="`spell-${index}`" avatar @click="previewSpell(spell)">
        <v-list-tile-avatar v-show="mode === 'basket'">
          <v-icon color="red">{{ spellLevel(spell.level) }}</v-icon>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-title>{{ spell.name }}</v-list-tile-title>
        </v-list-tile-content>
        <v-list-tile-action
          @click.stop="$store.commit('addSpell', spell)"
          v-if="!$store.getters.isSpellInGrimoire(spell)"
        >
          <v-icon>add_circle</v-icon>
        </v-list-tile-action>
        <v-list-tile-action @click.stop="$store.commit('removeSpell', spell)" v-else>
          <v-icon>remove_circle</v-icon>
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
    previewSpell(spell) {
      if (this.mode === "basket") return;

      this.$store.dispatch("previewSpell", spell);
    },
    spellLevel(level) {
      return level === 0 ? `filter_none` : `filter_${level}`;
    }
  }
};
</script>
<style lang="scss" scoped>
.spell-list {
  height: 30vh;
  overflow-y: scroll;
}
</style>
