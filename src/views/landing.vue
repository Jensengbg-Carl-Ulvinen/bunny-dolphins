<template>
  <div id="landing">
    <div id="left-side">
      <img id="leaf-left" src="../assets/graphics/intro-graphic-left.svg" />
    </div>
    <div id="center">
      <img @click="navigate()" id="title" src="../assets/graphics/airbean-landing.svg" />
    </div>
    <div id="right-side">
      <img id="leaf-right" src="../assets/graphics/intro-graphic-right.svg" />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    navigate: function () {
      this.$router.push({ path: '/about' })
    }
  }
}
</script>


<style lang="scss">
@import "../assets/scss/variables.scss";

* {
  margin: 0;
  padding: 0;
}
body {
  background-color: $green;
  width: 100%;
}
#landing {
  display: grid;
  grid-template-columns: 0.5fr 0.4fr 0.5fr;
  grid-template-rows: auto;
  margin-top: 0px;
}
#left-side {
  display: grid;
  justify-content: start;
  align-content: start;
}
#right-side {
  display: grid;
  grid-column: 3;
  justify-content: end;
  align-content: start;
  margin-right: 9rem;
}
#leaf-left,
#leaf-right {
  width: 200%;
  height: 100%;
}

#center {
  display: grid;
  justify-content: center;
  align-content: center;
  margin-bottom: 35rem;
  color: $white;
}
#title {
  background-size: 12.5rem 1.875rem;
}
</style>
