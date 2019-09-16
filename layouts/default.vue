<template>
  <div>
    <TheHeader @sidenavToggle="displaySidenav = !displaySidenav" />
    <TheSidenav :show="displaySidenav" @close="displaySidenav = false" />

    <main class="main-container">
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/navigation/TheHeader";
import TheSidenav from "@/components/navigation/TheSidenav";
import TheLogo from "@/components/TheLogo/TheLogo";
import TheFooter from "@/components/TheFooter/TheFooter";

export default {
  components: {
    TheHeader,
    TheSidenav,
    TheLogo,
    TheFooter
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
  background-color: #0f0f0f;
  color: #505050;
  height: 100%;
}
.main-container {
  max-width: 59.6875rem;
  margin-left: auto;
  margin-right: auto;
  min-height: 100%;
}
</style>
