<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />
    <TheLogo />
    <main class="main-container">
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader";
import TheSidenav from "@/components/navigation/TheSidenav";
import TheLogo from "@/components/TheLogo/TheLogo";

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheLogo
  },
  data() {
    return {
      displaySidenav: false
    };
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html,
body {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
  background: url("~assets/images/smoke.png");
  background-position: center;
  background-size: cover;
  background-attachment: fixed;
}
.main-container {
  max-width: 59.6875rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
