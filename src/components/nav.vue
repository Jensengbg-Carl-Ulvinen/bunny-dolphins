<template>
  <div class="nav">
    <!-- <button class="btn exit-btn" @click="">Close</button> -->
    <div class="meny">
      <ul><h1>Meny</h1></ul>
      <ul><h1>Vårt Kaffe</h1></ul>
      <ul><h1>Orderstatus</h1></ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'nav',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

* {
position: relative;
width: 375px;
height: 667px;
background: #2F2926;
}

meny {
  /* Meny */

position: absolute;
width: 311px;
height: 45px;
left: 32px;
top: 235px;

font-family: PT Serif;
font-style: normal;
font-weight: bold;
font-size: 32px;
line-height: 120%;
/* or 38px */

display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
}

</style>
