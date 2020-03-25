<template>
  <div id="cart">
    <div id="box">
      <h1>
        Din
        beställning
      </h1>
      <div id="itemandcoffee">
        <p id="title">Bryggkaffe</p>
        <p id="price1">98 kr</p>
      </div>
      <div id="coffeedopio">
        <p id="title2">Caffè Doppio</p>
        <p id="price2">49 kr</p>
      </div>
      <div id="border"></div>
      <div id="border2"></div>
      <div id="item1">
        <img id="arrowUp" src="../assets/graphics/arrow-up.svg" />
        <p id="number">2</p>
        <img id="arrowdown" src="../assets/graphics/arrow-down.svg" />
      </div>
      <div id="item2">
        <img id="arrowUp" src="../assets/graphics/arrow-up.svg" />
        <p id="number">1</p>
        <img id="arrowdown" src="../assets/graphics/arrow-down.svg" />
      </div>
      <div id="bottom">
        <button>TAKE MY MONEY!</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
#cart {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
}

#box {
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  grid-template-rows: 0.3fr 0.3fr 0.3fr 0.3fr;
  border: solid;
  grid-column: 2;
  height: 300%;
  background: #ffffff;
}

#border {
  grid-column: 2;
  grid-row: 2;
  display: flex;
  align-self: center;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
}

h1 {
  display: grid;
  grid-column: 2;
  justify-self: center;
}

#itemandcoffee {
  grid-column: 1;
  grid-row: 2;
  display: grid;
  grid-template-rows: 0.3fr 0.3fr 0.3fr;
}

#title {
  display: flex;
  justify-self: center;
  align-self: center;
  grid-row: 2;
}

#price1 {
  grid-row: 3;
  font-size: 12px;
  display: flex;
  justify-self: center;
  align-self: flex-start;
}

#item1 {
  display: grid;
  grid-row: 2;
  grid-column: 3;
  grid-template-rows: 0.5fr 0.5fr 0.5fr;
  grid-template-columns: repeat(4, 1fr);
}

#arrowUp {
  display: flex;
  justify-self: center;
  align-self: flex-end;
  grid-column: 3;
}

#number {
  display: flex;
  justify-self: center;
  align-self: center;
  grid-column: 3;
  grid-row: 2;
  font-size: 10px;
}

#arrowdown {
  grid-column: 3;
  grid-row: 3;
  display: flex;
  justify-self: center;
  align-self: flex-start;
}

#bottom {
  grid-column: 2;
  grid-row: 4;
  display: flex;
  justify-content: center;
  align-content: center;
}

button {
  background: #2f2926;
  border-radius: 50px;
  color: #ffffff;
  width: 10rem;
  height: 5rem;
}

#coffeedopio {
  grid-column: 1;
  grid-row: 3;
  display: grid;
  grid-template-rows: 0.3fr 0.3fr 0.3fr;
}

#title2 {
  display: flex;
  justify-self: center;
  align-self: center;
  grid-row: 2;
}

#price2 {
  grid-row: 3;
  font-size: 12px;
  display: flex;
  justify-self: center;
  align-self: flex-start;
}

#border2 {
  grid-column: 2;
  grid-row: 3;
  display: flex;
  align-self: center;
  border-bottom: 1px dashed rgba(0, 0, 0, 0.4);
}

#item2 {
  display: grid;
  grid-row: 3;
  grid-column: 3;
  grid-template-rows: 0.5fr 0.5fr 0.5fr;
  grid-template-columns: repeat(4, 1fr);
}
</style>
