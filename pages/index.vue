<template>
  <section class="container">
    <PostList :posts="loadedPosts" class="post-list" />
    <Aside class="aside" />
  </section>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import Aside from "@/components/Aside/Aside";
export default {
  components: {
    PostList,
    Aside
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts.map(bp => {
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
}
</style>


