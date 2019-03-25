import classes from "@/data/classes.json";
import colors from "@/data/colors.json";
import spells from "@/data/spells.json";

export default {
  state: {
    level: 0,
    class: "Bard",
    classes,
    colors,
    keyword: "",
    spell: {},
    loading: false,
    wide: false,
    tall: false,
    spells: {},
    urls: {
      bard: "https://api.myjson.com/bins/1gotb6",
      cleric: "https://api.myjson.com/bins/1615ky",
      druid: "https://api.myjson.com/bins/10o94y",
      paladin: "https://api.myjson.com/bins/qjvuq",
      ranger: "https://api.myjson.com/bins/l6zeq",
      sorcerer: "https://api.myjson.com/bins/13nf5u",
      warlock: "https://api.myjson.com/bins/1a76te",
      wizard: "https://api.myjson.com/bins/1gqygy"
    }
  },
  getters: {
    spell: state => spell => {
      const vocation = spell.class.toLowerCase();
      const name = spell.name;
      return state.spells[vocation].filter(spell => spell.name == name)[0];
    },
    spells: state =>
      spells
        .filter(spell => spell.class == state.class)
        .filter(spell => spell.level == state.level)
        .filter(spell => RegExp(state.keyword).test(spell.name))
  },
  mutations: {
    changeKeyword: (state, keyword) => (state.keyword = keyword || ""),
    changeLevel: (state, level) => (state.level = level),
    changeClass: (state, vocation) => (state.class = vocation),
    previewSpell: (state, spell) => (state.spell = spell)
  },
  actions: {
    fetchSpells({ state }, vocation) {
      state.loading = true;
      return fetch(state.urls[vocation])
        .then(response => response.json())
        .then(spells => {
          //cache the results
          state.spells[vocation] = spells;
          state.loading = false;
          return spells;
        });
    },
    previewSpell({ state, commit, getters, dispatch }, spell) {
      const vocation = spell.class.toLowerCase();

      if (state.spells[vocation]) {
        commit("previewSpell", getters.spell(spell));
        //commit("updateCardDimensions");
      } else {
        dispatch("fetchSpells", vocation).then(() => {
          commit("previewSpell", getters.spell(spell));
          //commit("updateCardDimensions");
        });
      }
    }
  }
};
