<template>
  <nuxt-link :to="'/blog/' + id">
    <article class="post-preview">
      <div :style="{backgroundImage: 'url('+  thumbnailUrl +')'}" class="post-preview-thumbnail"></div>
      <div class="post-preview-content">
        <h1>{{ title }}</h1>
        <p>{{ summary }}</p>
      </div>
    </article>
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
  border-radius: 3px;
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.5);
  width: 90%;
  margin: 1rem;
  height: 20rem;
}
.post-preview-thumbnail {
  background-position: center;
  background-size: cover;
  width: 100%;
  height: 10rem;
}
.post-preview-content {
  text-align: center;
  padding: 1rem;
}

@media (min-width: 35) {
  .post-preview {
    width: 25rem;
  }
}
</style>