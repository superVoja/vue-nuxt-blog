import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const defaultState = {
  loadedPosts: [
    {
      id: "1",
      title: "First post",
      previewText: "This is our first post",
      thumbnail: ""
    },
    {
      id: "2",
      title: "Second post",
      previewText: "This is our first post",
      thumbnail: ""
    }
  ]
};

const inBrowser = typeof window !== "undefined";
// if in browser, use pre-fetched state injected by SSR
const state =
  inBrowser && window.__INITIAL_STATE__
    ? window.__INITIAL_STATE__.page
    : defaultState;

export default {
  state,
  actions,
  mutations,
  getters
};
