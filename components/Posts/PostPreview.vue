<template>
  <nuxt-link :to="'/recipes/' + id">
    <figure class="post-preview">
      <img :src="thumbnailUrl" alt />
      <h2>{{ title}}</h2>
      <p>{{ summary }}</p>
    </figure>
  </nuxt-link>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    },
    summary: {
      type: String,
      required: true
    },
    thumbnailUrl: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: #000;
}

.post-preview {
  margin: 25px 0 25px 0;
  padding: 12px;
  background: #1e1e1e;
  transition: all 200ms;
  display: flex;
  flex-direction: column;
}
.post-preview:hover {
  transform: translateY(-6px);
  transition: all 200ms;
}
.post-preview-thumbnail {
  width: 100%;
  height: 100%;
  margin: 0 0 30px 0;
  object-fit: cover;
}
.post-preview h2 {
  text-align: center;
  color: #fff;
  font-size: 14px;
  text-transform: uppercase;
  margin-bottom: 0;
  padding-bottom: 0;
}
.post-preview p {
  color: #d3d3d3;
  text-align: center;
}

@media (min-width: 35rem) {
}
</style>