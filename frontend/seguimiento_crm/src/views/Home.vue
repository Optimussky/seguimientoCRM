<template>
  <div class="home has-background-info">
    <HelloWorld msg="Bienvenido a FilemonSystems" />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";

export default {
  name: "Home",
  components: {
    Home,
  },
};
</script>
