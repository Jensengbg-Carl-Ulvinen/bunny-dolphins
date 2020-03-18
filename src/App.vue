<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import nav from './components/nav'
import menu from './components/menu'
import about from './components/about'

export default {
  name: 'App',
  components: {
    nav,
    menu,
    about
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
