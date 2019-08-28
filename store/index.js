import Vuex from "vuex";
import appModule from "./modules/app-logic";

const store = () => {
  return new Vuex.Store({
    namespaced: true,
    modules: {
      appLogic: appModule
    }
  });
};

export default store;
