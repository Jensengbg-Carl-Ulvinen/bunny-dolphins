<template>
  <div id="status">
    <div id="box">
      <h1>Ordernummer 1841094914</h1>
      <img id="drone" src="../assets/graphics/drone.svg" />
      <div id="statusmin">
        <p id="ontheway">DIN BESTÄLLNING ÄR PÅ VÄG!</p>
        <p id="min">X MIN</p>
      </div>
      <div id="buttonalign">
        <button id="btn2">OK, cool!</button>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions } from 'vuex';
export default {
  name: "Status",
  methods: {
    ...mapActions(["sendOrder"])
  },
  computed: mapGetters(['orderStatus'])
}
</script>

<style scoped>
body {
  color: #ffffff;
}
#status {
  display: grid;
  justify-content: center;
  align-content: center;
}
h1 {
  display: flex;
  align-self: flex-end;
  grid-row: 1;
  grid-column: 2;
}
#box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 0.5fr);
  background: #e5674e;
  max-width: 100%;
  width: 100%;
}
#drone {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  justify-self: center;
  align-self: center;
}
#statusmin {
  grid-row: 3;
  grid-column: 2;
  font-size: 1.5rem;
  display: grid;
  grid-template-rows: repeat(2, 0.3fr);
  justify-content: center;
}
#min {
  display: flex;
  justify-self: center;
}
#buttonalign {
  grid-row: 4;
  grid-column: 2;
  display: flex;
  justify-self: center;
  color: #2f2926;
}
#btn2 {
  background: #ffffff;
  color: #2f2926;
}
</style>
