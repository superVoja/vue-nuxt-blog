<template>
  <section class="hero">
    <div class="hero-content">
      <img src="~assets/images/logo.png" alt />
      <h1>Everything hoemade!</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus eum, corrupti veritatis maxime assumenda labore doloremque, qui quae blanditiis libero perspiciatis nobis, fugit saepe repellendus voluptatum sapiente fugiat rerum quo.</p>
      <h3>Where we find inspiration</h3>
      <a href="#">serious eats</a>
      <a href="#">Bon Appetit</a>
    </div>
  </section>
</template>

<style scoped>
.hero-content {
  display: flex;
  flex-direction: column;
}
.hero-content img {
  max-width: 100%;
}
.hero-content a {
  color: #d3d3d3;
  text-decoration: none;
  padding: 0.2rem 0;
}
</style>
