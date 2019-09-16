<template>
  <div id="post" v-editable="blok">
    <div class="post-thumbnail" :style="{backgroundImage: 'url(' + image+ ')'}"></div>
    <section class="post-content">
      <h1>{{title}}</h1>
      <h4>about</h4>
      <p>{{desicription}}</p>
      <h4>how it's done</h4>
      <p>{{content}}</p>
      <h4>ingredients</h4>
      <p>{{ingredients}}</p>
      <img :src="photos" alt />
    </section>
  </div>
</template>
<script>
export default {
  asyncData(context) {
    return context.app.$storyapi
      .get("cdn/stories/recipes/" + context.params.postId, {
        version: process.env.NODE_ENV == "production" ? "published" : "draft"
      })
      .then(res => {
        return {
          blok: res.data.story.content,
          image: res.data.story.content.thumbnail,
          title: res.data.story.content.title,
          desicription: res.data.story.content.desicription,
          content: res.data.story.content.content,
          ingredients: res.data.story.content.ingredients,
          photos: res.data.story.content.photos
        };
      });
  }
};
</script>
<style scoped>
.post-thumbnail {
  width: 100%;
  height: 300px;
  background-position: center;
  background-size: cover;
}
.post-content {
  width: 80%;
  max-width: 500px;
  margin: 0 auto;
}

.post-content p {
  white-space: pre-line;
  color: #d3d3d3;
}
</style>