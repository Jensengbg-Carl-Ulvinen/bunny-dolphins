<template>
  <div class="menu">
    <title>This is MENU page</title>
    <section class="upp">
      <nav class="nav"/>
      <button @click="openMenu" class="button_menu">
        <img src="../assets/graphics/navicon.svg" />
      </button>

      <!-- här behöver vi lägga till <cart /> -->

      <button @click="openCart" class="button_cart">
        <img src="../assets/graphics/bag.svg" />
      </button>
    </section>
    <h1>Meny</h1>
    <section class="products_display">
      <ul>
        <li v-for="product in menu" :key="product.id">
          <button @click="addProductToCart(product)" class="button_add">
            <img src="../assets/graphics/add.svg" />
          </button>

          <!-- behöver lägga till titel, pris och beskrivning -->

        </li>
      </ul>
    </section>
  </div>
</template>

<script>
import Nav from "../components/nav";

export default {
  name: "Menu",
  components: { Nav },
  created() {
    this.$store.dispatch("getMenu");
  },
  computed: {
    menu() {
      return this.$store.state.menu.menu;
    }
  },
  methods: {
    openMenu() {},
    openCart() {
      this.$router.push("/order-status");
    },
    addProductToCart(product) {
      this.$store.commit("addToCart", product);
    }
  }
};
</script>

<style lang="scss" scooped>
@import "../assets/scss/variables.scss";

//behöver rodda lite scss
</style>
