<template>
  <div class="all-posts">
    <div class="search-wrapper">
      <input type="text" placeholder="Search title.." />
    </div>
    <section id="posts">
      <PostList :posts="loadedPosts" />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";

export default {
  components: {
    PostList
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
.all-posts {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
#posts {
  padding-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

@media (min-width: 35rem) {
  #posts {
    flex-direction: row;
  }
}
.search-wrapper {
  position: relative;
}

.search-wrapper input {
  padding: 4px 12px;
  color: rgba(0, 0, 0, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
}
.search-wrapper input:focus {
  outline: none;
  transform: scale(1.05);
}
</style>
