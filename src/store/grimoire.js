export default {
  state: {
    spells: []
  },
  getters: {
    isSpellInGrimoire: state => payload =>
      state.spells
        .filter(spell => spell.name == payload.name)
        .filter(spell => spell.class == payload.class).length > 0
  },
  mutations: {
    addSpell(state, payload) {
      const spells = state.spells
        .filter(spell => spell.name == payload.name)
        .filter(spell => spell.class == payload.class);

      if (spells.length == 0) {
        state.spells.push(payload);
      }
    },
    removeSpell(state, payload) {
      const spellIndex = state.spells.findIndex(
        spell => spell.name == payload.name && spell.class == payload.class
      );

      if (spellIndex > -1) {
        state.spells.splice(spellIndex, 1);
      }
    }
  }
};
