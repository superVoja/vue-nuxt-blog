<template>
  <section class="container">
    <PostList :posts="loadedPosts" class="post-list" />
    <Aside class="aside" />
  </section>
</template>

<script>
import Aside from "@/components/Aside/Aside";
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList,
    Aside
  },

  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts.slice(0, 4).map(bp => {
        return {
          id: bp.slug,
          title: bp.content.title,
          previewText: bp.content.summary,
          thumbnailUrl: bp.content.thumbnail
        };
      });
    }
  }
  // asyncData(context) {
  //   return context.app.$storyapi
  //     .get("cdn/stories", {
  //       version: context.isDev ? "draft" : "published",
  //       starts_with: "blog/"
  //     })
  //     .then(res => {
  //       return {
  //         posts: res.data.stories.map(bp => {
  //           return {
  //             id: bp.slug,
  //             title: bp.content.title,
  //             previewText: bp.content.summary,
  //             thumbnailUrl: bp.content.thumbnail
  //           };
  //         })
  //       };
  //     });
  // }
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  margin-top: 6rem;
}
.post-list {
  flex-basis: 77%;
  max-width: 77%;
}
.aside {
  flex-basis: 33%;
  max-width: 33%;
  padding: 2rem 4rem;
}
@media (max-width: 800px) {
  .container {
    display: flex;
    flex-direction: column;
  }
  .post-list {
    flex-basis: 100%;
    max-width: 100%;
  }
  .aside {
    flex-basis: 100%;
    max-width: 100%;
  }
}
</style>


