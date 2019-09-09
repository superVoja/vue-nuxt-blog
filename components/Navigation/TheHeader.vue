<template>
  <div class="header-container">
    <header class="the-header">
      <TheSideNavToggle @toggle="$emit('sidenavToggle')" />

      <div class="navigation-items">
        <ul class="nav-list">
          <li class="nav-item">
            <nuxt-link to="/">hoepage.</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/about">about.</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/blog">recipes.</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link to="/streetfood">streetfood.</nuxt-link>
          </li>
        </ul>
      </div>
    </header>
  </div>
</template>

<script>
import TheSideNavToggle from "@/components/Navigation/TheSideNavToggle";

export default {
  name: "TheHeader",
  components: {
    TheSideNavToggle
  }
};
</script>


<style scoped>
.header-container {
  height: 60px;
}

.the-header {
  width: 100%;
  position: fixed;
  height: 60px;
  display: flex;
  align-items: center;
  background: #000;
  z-index: 100;
  box-sizing: border-box;
  padding: 0 4rem;
}

.navigation-items {
  display: none;
}

@media (min-width: 768px) {
  .navigation-items {
    display: block;
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
}

.nav-item {
  margin: 0 10px;
}

.nav-item a {
  text-decoration: none;
  color: white;
}

.nav-item a:hover,
.nav-item a:active,
.nav-litem.nuxt-link-exact-active a {
  color: #ccc;
}
</style>
