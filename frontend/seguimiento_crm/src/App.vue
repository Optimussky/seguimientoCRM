<template>
  <Navbar />
  <div class="dashboard is-full-height">
    <!-- left panel -->
    <div class="dashboard-panel is-one-quarter">
      <Menu />
    </div>

    <!-- main section -->
    <div class="dashboard-main is-scrollable">
      <nav class="navbar is-fixed-top">
        <div class="navbar-brand">
          <span class="navbar-item">
            <!--<Navbar />-->
          </span>
        </div>
      </nav>

      <section class="section">
        <p class="title">
          <Container />
        </p>
      </section>
    </div>

    <!-- right panel -->
    <!--  dashboard-panel is-small is-scrollable-->
    <div class="dashboard-panel is-small has-background-light is-scrollable">
      <Rightbar />
    </div>
  </div>
  <Footer />
</template>

<script>
import Navbar from "@/components/layout/Navbar";
import Menu from "@/components/layout/Menu";
import Container from "@/components/layout/Container";

import Footer from "@/components/layout/Footer";
import Rightbar from "@/components/layout/Rightbar";
export default {
  name: "App",
  components: {
    Navbar,
    Menu,
    Container,

    Footer,
    Rightbar,
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
