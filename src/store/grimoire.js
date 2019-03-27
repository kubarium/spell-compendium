export default {
  state: {
    spells: [],
    orientation: "landscape"
  },
  getters: {
    isSpellInGrimoire: state => payload =>
      state.spells
        .filter(spell => spell.name == payload.name)
        .filter(spell => spell.class == payload.class).length > 0,
    grimoire: state => state.spells
  },
  mutations: {
    toggleOrientation(state) {
      state.orientation =
        state.orientation === "landscape" ? "portrait" : "landscape";
    },
    swapSpells(state, spells) {
      //console.log(oldSpell);
      const newSpells = state.spells;

      const oldSpell = newSpells.splice(
        spells.oldIndex,
        1,
        state.spells[spells.newIndex]
      )[0];

      newSpells.splice(spells.newIndex, 1, oldSpell);

      state.spells = newSpells;
    },
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
  },
  actions: {
    addSpell({ commit, dispatch, rootState, rootGetters }, payload) {
      const vocation = payload.class.toLowerCase();
      if (rootState.tomeOfMagic.spells[vocation]) {
        commit("addSpell", rootGetters.spell(payload));
      } else {
        dispatch("fetchSpells", vocation).then(() =>
          commit("addSpell", rootGetters.spell(payload))
        );
      }
    },
    print({ state }) {
      var iframe = document.createElement("iframe");
      ["width", "height", "right", "bottom", "border"].forEach(
        prop => (iframe.style[prop] = 0)
      );
      iframe.style.position = "fixed";
      iframe.onload = () => {
        //clean up after
        iframe.contentWindow.onafterprint = iframe.contentWindow.onbeforeunload = () =>
          document.body.removeChild(iframe);

        iframe.contentWindow.print();
      };

      //ready, go!
      window.cards = document.querySelector(".cards");
      iframe.srcdoc = `
        <html>
          <head>
            <link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/meyer-reset/2.0/reset.min.css" />
            <link href="//fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons" rel="stylesheet"/>
            <link href="${
              process.env.BASE_URL
            }colors.css?v=${Math.random()}" rel="stylesheet"/>
             <link href="${
               process.env.BASE_URL
             }indicator.css?v=${Math.random()}" rel="stylesheet"/>
            <link href="${
              process.env.BASE_URL
            }cards.css?v=${Math.random()}" rel="stylesheet"/>
            <link href="${
              process.env.BASE_URL
            }card.css?v=${Math.random()}" rel="stylesheet"/>
          </head>
          <body class="cards ${state.orientation}">
            ${document.querySelector(".cards").innerHTML}
          </body>
        </html>
      `;
      //${document.querySelector(".cards").innerHTML}
      document.body.appendChild(iframe);
    }
  }
};
