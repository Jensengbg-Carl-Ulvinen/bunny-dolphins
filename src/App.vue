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

<style>
#app {
  font-family: PT Serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
