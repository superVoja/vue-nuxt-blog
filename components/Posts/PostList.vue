<template>
  <section class="post-list">
    <PostPreview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :thumbnailUrl="post.thumbnailUrl"
      :title="post.title"
      :summary="post.previewText"
    />
  </section>
</template>
<script>
import PostPreview from "@/components/Posts/PostPreview";

export default {
  components: {
    PostPreview
  },
  props: {
    posts: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
.post-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  grid-gap: 1rem;
}
</style>