<template>
  <div class="logo">
    <nuxt-link tag="a" to="/">
      <img src="~assets/images/logo.png" alt />
    </nuxt-link>
    <h2>Not your typical food blog</h2>
  </div>
</template>
<style scoped>
.logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
  padding: 2rem 4rem;
  text-align: center;
  outline: none;
}
.logo img {
  max-width: 16rem;
  outline: none;
}
h2 {
  font-weight: 300;
}
a {
  text-decoration: none;
  color: #000;
  outline: none;
}
</style>