<template>
  <div id="app">
    <router-view />
    <Landing />
  </div>
</template>

<script>
import Landing from '../src/views/landing'

export default {
  components: {
    Landing
  }
}
</script>

<style lang="scss">
// google fonts
@import url("https://fonts.googleapis.com/css?family=PT+Serif|Rufina|Work+Sans&display=swap");
@import "src/assets/scss/variables.scss";
</style>
