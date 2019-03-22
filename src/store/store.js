import Vue from "vue";
import Vuex from "vuex";

import tomeOfMagic from "./tome-of-magic";
import grimoire from "./grimoire";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tomeOfMagic,
    grimoire
  }
});
