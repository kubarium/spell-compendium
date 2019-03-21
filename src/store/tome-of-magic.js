import classes from "@/data/classes.json";
import colors from "@/data/colors.json";

export default {
  state: {
    level: 4,
    class: "Wizard",
    classes,
    colors,
    keyword: "aaa",
    spell: {},
    spells: [{ Name: "suk me dik", level: 0 }, { Name: "fuk you", level: 2 }]
  },
  mutations: {
    changeKeyword: (state, keyword) => (state.keyword = keyword),
    changeLevel: (state, level) => (state.level = level),
    changeClass: (state, vocation) => (state.class = vocation),
    selectSpell: (state, spell) => (state.spell = spell)
  },
  actions: {
    rummageTome() {
      console.log("I'm rummaged!");
    },
    addToGrimoire({ state }, spell) {
      console.log(spell);
    }
  }
};
