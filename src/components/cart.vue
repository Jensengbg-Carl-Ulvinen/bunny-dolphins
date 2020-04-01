<template>
  <div class="wrapper">
    <div class="box">
      <h1>
        Din
        beställning
      </h1>
      <div class="noItems" v-if="vuexNumberOfCartItemsData === 0">
        <p>Your cart is empty!</p>
      </div>
      <li
        v-else
        class="items"
        v-for="numberOfCartItems in vuexNumberOfCartItemsData"
        :key="numberOfCartItems.id"
      >
        <div class="title">
          <h2>{{numberOfCartItems.title}}</h2>
        </div>
        <div class="price">
          <p>{{numberOfCartItems.price * numberOfCartItems.quanity}} kr</p>
        </div>
        <div class="quanity">
          <img @click="addItem" id="arrowUp" src="../assets/graphics/arrow-up.svg" />
          <p>{{product.quanity}}</p>
          <img @click="removeItem" id="arrowDown" src="../assets/graphics/arrow-down.svg" />
        </div>
      </li>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
name: 'Cart',
methods: {
  ...mapActions(['postOrder'])
},
computed: mapGetters(['orderStatus']),
vuexNumberOfCartItemsData() {
            return this.$store.state.numberOfCartItems;
        }
}
</script>

<style lang="scss" scooped>
@import "../assets/scss/variables.scss";
* {
  margin: 0;
  padding: 0;
}
.wrapper {
  display: grid;
  justify-content: center;
}
.box {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  background-color: $white;
  height: 100vh;
  width: 100%;
  color: $black;
}
h1 {
  grid-column: 2;
  display: flex;
  align-self: center;
  font-size: 3rem;
}
</style>
