<template>
  <section>
    <h1>Streetfood</h1>
  </section>
</template>
<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/streetfood/", {})
      .then(res => {
        console.log(res);
      });
  }
};
</script>