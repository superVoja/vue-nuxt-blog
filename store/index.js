import Vuex from "vuex";

import appModule from "./modules/app-logic";

const createStore = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      appLogic: appModule
    }
  });
};
export default createStore;
