<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import nav from './components/nav'
import menu from './components/menu'
import about from './views/about'

export default {
  name: 'App',
  components: {
    nav,
    menu,
    about
  }
}
</script>

<style lang="scss">
// google fonts
@import url("https://fonts.googleapis.com/css?family=PT+Serif|Rufina|Work+Sans&display=swap");
@import "src/assets/scss/variables.scss";
</style>
