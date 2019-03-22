import classes from "@/data/classes.json";
import colors from "@/data/colors.json";
import spells from "@/data/spells.json";

export default {
  state : {
    level: 4,
    class: "Wizard",
    classes,
    colors,
    keyword: "aaa",
    spell: {},
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
  getters : {
    spells: state => spells
      .filter(spell => spell.class == state.class)
      .filter(spell => spell.level == state.level)
      .filter(spell => RegExp(state.keyword).test(spell.name))
  },
  mutations : {
    changeKeyword: (state, keyword) => (state.keyword = keyword),
    changeLevel: (state, level) => (state.level = level),
    changeClass: (state, vocation) => (state.class = vocation),
    selectSpell: (state, spell) => (state.spell = spell)
  },
  actions : {
    rummageTome() {
      console.log("I'm rummaged!");
    },
    addToGrimoire({
      state
    }, spell) {
      console.log(spell);
    }
  }
};
