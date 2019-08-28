<template>
  <section class="container">
    <h1>Homepage</h1>
    <ul>
      <li v-for="post in posts" :key="post.id">{{post.title}}</li>
    </ul>
  </section>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters({
      posts: "getPosts"
    })
  },
  mounted() {
    console.log(this.posts);
  }
};
</script>

<style>
</style>
