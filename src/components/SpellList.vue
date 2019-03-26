<template>
  <v-list dense class="spell-list">
    <draggable
      v-model="spellList"
      draggable=".spell-item"
      @change="swapSpells"
      :disabled="mode !== 'grimoire'"
    >
      <template v-for="(spell, index) in spells">
        <v-list-tile
          :key="`spell-${index}`"
          avatar
          data-index="index"
          class="spell-item"
          @click="previewSpell(spell, index)"
          ripple
        >
          <v-list-tile-avatar v-if="mode === 'grimoire'">
            <v-icon :class="`${spell.class}Color`">{{ spellLevel(spell.level) }}</v-icon>
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title>
              <span :class="active(spell, index)"></span>
              {{ spell.name }}
            </v-list-tile-title>
          </v-list-tile-content>

          <v-list-tile-action
            @click.stop="$store.dispatch('addSpell', spell)"
            v-if="!$store.getters.isSpellInGrimoire(spell)"
          >
            <v-icon>add_circle</v-icon>
          </v-list-tile-action>

          <v-list-tile-action @click.stop="$store.commit('removeSpell', spell)" v-else>
            <v-icon>remove_circle</v-icon>
          </v-list-tile-action>
        </v-list-tile>

        <v-divider :key="`divider-${index}`" v-if="index < spells.length - 1"/>
      </template>
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "spell-list",
  props: { spells: Array, mode: String },
  components: { draggable },
  data() {
    return {
      spellIndex: -1
    };
  },
  watch: {
    spells: function(val) {
      this.spellIndex = -1;
    }
  },
  computed: {
    spellList: {
      get() {
        return this.mode === "grimoire" ? this.spells : null;
      },
      set(spells) {}
    }
  },
  methods: {
    swapSpells(spells) {
      this.$store.commit("swapSpells", {
        oldIndex: spells.moved.oldIndex / 2,
        newIndex: spells.moved.newIndex / 2
      });
    },
    active(spell, index) {
      const spellClass = spell.class.split(` `)[0];
      return {
        active: true,
        [`${spellClass}Background`]: this.spellIndex === index
      };
    },
    previewSpell(spell, index) {
      if (this.mode === "grimoire") return;

      this.spellIndex = index;
      this.$store.dispatch("previewSpell", spell);
    },
    spellLevel(level) {
      return level === 0 ? `filter_none` : `filter_${level}`;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "@/styles/colors.scss";

.spell-list {
  height: 70vh;
  overflow-y: scroll;
}
.active {
  display: inline-block;
  width: 10px;
  height: 10px;
}
</style>
