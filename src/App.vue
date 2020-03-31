<template>
  <div id="app">
    <router-view />
    <Landing />
  </div>
</template>

<script>
import Landing from "../src/views/landing";
import Nav from "../src/components/nav";
import Menu from "../src/views/menu";
import About from "../src/views/about";

export default {
  components: {
    Landing,
    Nav,
    Menu,
    About
  }
};
</script>

<style lang="scss">
// google fonts
@import url("https://fonts.googleapis.com/css?family=PT+Serif|Rufina|Work+Sans&display=swap");
@import "src/assets/scss/variables.scss";
</style>
