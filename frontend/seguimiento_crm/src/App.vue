<template>
  <div>
    <Navbar />
    <div class="columns" style="position: fixed">
      <Menu />
    </div>

    <div class="columns is-centered">
      <Content />
    </div>

    <Footer />
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Menu from "@/components/layout/Menu";
import Content from "@/components/layout/Content";
import Footer from "@/components/layout/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Menu,
    Content,
    Footer,
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma/";
</style>
