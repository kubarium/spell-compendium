export default {
  state : {
    spells: [],
    orientation: "landscape"
  },
  getters : {
    isSpellInGrimoire: state => payload => state
      .spells
      .filter(spell => spell.name == payload.name)
      .filter(spell => spell.class == payload.class)
      .length > 0,
    grimoire: state => state.spells
  },
  mutations : {
    toggleOrientation(state) {
      state.orientation = state.orientation === "landscape"
        ? "portrait"
        : "landscape";
    },
    swapSpells(state, spells) {
      //console.log(oldSpell);
      const newSpells = state.spells;

      const oldSpell = newSpells.splice(spells.oldIndex, 1, state.spells[spells.newIndex])[0]

      newSpells.splice(spells.newIndex, 1, oldSpell);

      state.spells = newSpells
    },
    addSpell(state, payload) {
      const spells = state
        .spells
        .filter(spell => spell.name == payload.name)
        .filter(spell => spell.class == payload.class);

      if (spells.length == 0) {
        state
          .spells
          .push(payload);
      }
    },
    removeSpell(state, payload) {
      const spellIndex = state
        .spells
        .findIndex(spell => spell.name == payload.name && spell.class == payload.class);

      if (spellIndex > -1) {
        state
          .spells
          .splice(spellIndex, 1);
      }
    }
  },
  actions : {
    addSpell({
      commit,
      dispatch,
      rootState,
      rootGetters
    }, payload) {
      const vocation = payload
        .class
        .toLowerCase();
      if (rootState.tomeOfMagic.spells[vocation]) {
        commit("addSpell", rootGetters.spell(payload));
      } else {
        dispatch("fetchSpells", vocation).then(() => commit("addSpell", rootGetters.spell(payload)));
      }
    }
  }
};
