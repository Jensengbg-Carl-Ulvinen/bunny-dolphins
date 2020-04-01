<template>
  <div class="main_cart">
    <div class="header">
      <Nav v-if="openNav" @closeNav="nav" class="nav-overlay" />
      <button class="button_nav">
        <img src="../assets/graphics/navicon.svg" />
      </button>
      <button @click="openCart" class="button_cart">
        <img src="../assets/graphics/bag.svg" />
      </button>
      <div class="circle">
        <h3 class="circle_quantity">{{ $store.state.order.cart_counter }}</h3>
      </div>
    </div>
    <div class="order_wrapper">
      <h1>Din beställning</h1>
      <li class="order_list" v-for="product in cart" :key="product.id">
        <div class="title_product">
          <h2>{{ product.title }}</h2>
          <span class="span_dot"></span>
        </div>
        <div class="product_price">
          <p>{{ product.price * product.quantity }}kr</p>
          <div class="arrow">
            <div class="vertical">
              <img @click="addProd" src="../assets/graphics/arrow-up.svg" />
              <h2>{{ product.quantity }}</h2>
              <img @click="delProd" src="../assets/graphics/arrow-down.svg" />
            </div>
          </div>
        </div>
      </li>
      <div class="total">
        <h2 class="total_text">Total</h2>
      </div>
      <span class="span_dot"></span>
      <h2 class="total_price">{{ /* we need to fetch total price here */ }} kr</h2>
      <p>inkl moms + drönarleverans</p>
      <div class="button">
        <button @click="sendOrder" class="button_checkout">Take my money!</button>
      </div>
    </div>
  </div>
</template>
<script>
import Nav from "@/components/nav.vue";
import { mapActions, mapState, mapMethods, mapMutations } from "vuex";
export default {
  name: "Cart",
  components: {
    Nav
  },
  data() {
    return {
      openNav: false
    };
  },
  computed: {
    cart() {
      return this.$store.state.order.cart;
    }
  },
  cartTotal() {
    return this.countTotal();
  },
  methods: {
    nav() {
      if (this.openNav === true) {
        this.openNav = false;
      } else {
        this.openNav = true;
      }
    },
    openCart() {
      this.$router.push("/menu");
    },
    addProd(product) {
      let products = this.cart.find(id => id.product_id === product.product_id);
      products.quantity++;
      this.updateShoppingCart(products);
    },
    delProd(product) {
      let products = this.cart.find(id => id.product_id === product.product_id);
      if (products.quantity == 1) {
        this.removeFromShoppingCart(products);
      } else {
        products.quantity--;
        this.updateShoppingCart(products);
      }
    },
    sendOrder(cart) {
      this.$store.dispatch("sendOrder");
      this.$router.push("/status");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.order_wrapper {
  display: flex;
  flex-direction: column;
  margin: 2em;
  padding: 2em;
  width: 500px;
  height: 100%;
  background: $white;
  .order_list {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 100%;
  }
  h1 {
    padding-bottom: 1em;
  }
  p {
    padding-top: 1em;
  }
}
.header {
  margin: 2em;
  width: 500px;
  height: 10rem;
  background-image: url("../assets/graphics/graphics-header.svg");
  background-size: fill;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  .button_nav {
    height: 6rem;
    width: 6rem;
    border-radius: 100%;
    border: none;
    cursor: pointer;
  }
  .button_cart {
    position: relative;
    width: 6rem;
    height: 6rem;
    background-color: $black;
    border-color: $black;
    left: 35%;
    border-radius: 100%;
    .button_cart img {
      width: 1.6rem;
      height: 2.1rem;
      border-radius: 0%;
    }
  }
  .circle {
    height: 2.6rem;
    width: 2.6rem;
    background: $red;
    border-radius: 100%;
    position: relative;
    left: -11%;
    top: -5%;
    .quantity-ellipse {
      position: absolute;
      left: 8%;
      right: 8%;
      bottom: 20%;
      font-size: 12px;
      line-height: 120%;
      border-radius: 50%;
      color: #ffffff;
    }
  }
}
.overlay_nav {
  position: relative;
}
.arrow {
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  .vertical {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
.vertical img {
  width: 1.5rem;
  height: 1.5rem;
}
.vertical h2 {
  font-size: 2rem;
  padding: 0.1rem;
}
.total {
  display: flex;
  text-align: start;
  padding-top: 1rem;
}
.total_text {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 1em;
}
.button {
  display: flex;
  justify-content: center;
  .button_checkout {
    color: white;
    background: $black;
    border: solid;
    border-radius: 2.5rem;
    font-size: 1.5rem;
    font-weight: 300;
    padding: 0.8rem;
    margin-top: 8rem;
    width: 150px;
    cursor: pointer;
  }
}
</style>