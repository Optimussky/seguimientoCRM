<template>
  <div>
    <Navbar />
    <div class="columns">
      <!--<div class="columns" style="position: fixed">  -->
      <Menu />
    </div>

    <div class="columns is-centered">
      <Container />
    </div>

    <div class="columns is-centered">
      <!-- <Rightbar /> -->
    </div>
    <Footer />
    <!---->
    <router-view />
  </div>
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Menu from "@/components/layout/Menu";
import Container from "@/components/layout/Container";
import Rightbar from "@/components/layout/Rightbar";
import Footer from "@/components/layout/Footer";
export default {
  name: "App",
  components: {
    Navbar,
    Menu,
    Container,
    Rightbar,
    Footer,
  },
};
</script>

<style lang="scss">
@import "../node_modules/bulma/";
@import "./assets/dist/bulma-dashboard.sass";
@import "./assets/dist/bulma-dashboard.css";
@import "./assets/dist/bulma-dashboard.min";
@import "./assets/dist/bulma-dashboard.min.css";
</style>
