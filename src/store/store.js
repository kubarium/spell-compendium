import Vue from "vue";
import Vuex from "vuex";

import tomeOfMagic from "./tome-of-magic.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    tomeOfMagic
  }
});
