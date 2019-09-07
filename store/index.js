import Vuex from "vuex";
const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$storyapi
          .get("cdn/stories", {
            version: "draft",
            starts_with: "blog/"
          })
          .then(res => {
            vuexContext.commit("setPosts", res.data.stories);
          });
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};
export default createStore;
