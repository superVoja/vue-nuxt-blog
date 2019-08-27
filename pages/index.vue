<template>
  <section class="container">
    <h1>Homepage</h1>
  </section>
</template>

<script>
export default {
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
      console.log(loadedPosts)
    }
  }
};
</script>

<style>
</style>
