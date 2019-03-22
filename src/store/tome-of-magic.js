import classes from "@/data/classes.json";
import colors from "@/data/colors.json";
import spells from "@/data/spells.json";

export default {
  state: {
    level: 4,
    class: "Wizard",
    classes,
    colors,
    keyword: "",
    spell: {},
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
    spells: state =>
      spells
        .filter(spell => spell.class == state.class)
        .filter(spell => spell.level == state.level)
        .filter(spell => RegExp(state.keyword).test(spell.name))
  },
  mutations: {
    changeKeyword: (state, keyword) => (state.keyword = keyword),
    changeLevel: (state, level) => (state.level = level),
    changeClass: (state, vocation) => (state.class = vocation),
    previewSpell: (state, spell) => (state.spell = spell),
    updateCardDimensions: state => {
      let length = state.spell.description.length;
      if (state.spell.higherLevel) {
        length += state.spell.higherLevel.length;
      }
      if (state.spell.material) {
        length += state.spell.material.length;
      }
      console.log(length);

      state.wide = length > 555;
      state.tall = length / 2 > 500;
    }
  },
  actions: {
    fetchSpells({ state }, vocation) {
      return fetch(state.urls[vocation])
        .then(response => response.json())
        .then(spells => {
          //cache the results
          state.spells[vocation] = spells;
          return spells;
        });
    },
    previewSpell({ state, commit, dispatch }, spell) {
      const vocation = spell.class.toLowerCase();
      const name = spell.name;

      if (state.spells[vocation]) {
        commit(
          "previewSpell",
          state.spells[vocation].filter(spell => spell.name == name)[0]
        );
        commit("updateCardDimensions");
      } else {
        dispatch("fetchSpells", vocation).then(spells => {
          commit("previewSpell", spells.filter(spell => spell.name == name)[0]);
          commit("updateCardDimensions");
        });
      }
    }
  }
};
