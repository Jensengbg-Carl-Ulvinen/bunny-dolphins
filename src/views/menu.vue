<template>

  <div class="menu">
    <section class="header">

      <Nav v-if="openNav" @closeNav="nav" class="overlay_nav" />
      <template v-else>

        <button @click="nav" class="button_nav">
          <img src="../assets/graphics/navicon.svg" />
        </button>

        <div class="circle">
          <h3 class="circle_quantity">{{ $store.state.order.cart_counter }}</h3>
        </div>

        <button @click="openCart" class="button_cart">
          <img src="../assets/graphics/bag.svg" />
        </button>

      </template>
    </section>

    <h1>Meny</h1>

    <section class="main_products">

      <div class="id_product" v-for="product in menu" :key="product.id">
        <button @click="addToCart(product)" class="button_add">
          <img src="../assets/graphics/add.svg" />
        </button>

        <div class="title_product">
          <h2>{{ product.title }}</h2>
          <span class="span_dot"></span>
        </div>

        <div class="desc_product">
          <p class="p_desc_product">{{ product.desc }}</p>
        </div>

        <div class="price_product">
          <h2>{{ product.price }}kr</h2>
        </div>
      </div>

    </section>

    <footer class="footer"></footer>

  </div>

</template>

<script>
import Nav from "@/components/nav.vue";

export default {
  name: "Menu",
  components: {
    Nav
  },
  data: () => {
    return {
      openNav: false
    };
  },
  created() {
    this.$store.dispatch("fetchMenu");
  },
  computed: {
    menu() {
      return this.$store.state.menu.menu;
    }
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
      clearInterval(this.$store.state.order.intervalID);
      this.$store.dispatch("postOrder");

      //will connect the dots when albin is ready with orderstatus

      this.$router.push("/cart");

    },
    addToCart(product) {
      this.$store.commit("addToCart", product);
    }
  }
};


</script>

<style lang="scss" scooped>
@import "../assets/scss/variables.scss";


.menu {
  display: flex;
  flex-direction: column;
  background: $beige;
  width: 100%;
  height: 100%;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background-image: url("../assets/graphics/graphics-header.svg");
  background-size: contain;
  width: 100%;
  height: 100%;
}

.overlay_nav {
  background-color: $black;
  position: absolute;
  height: 100%;
}

.button_nav,
.button_cart {
  border-radius: 50%;
  margin: 2rem;
}

.button_nav {
  border-color: $white;
  width: 5rem;
  height: 5rem;
  margin: 2rem;
  border: none;
  cursor: pointer;
}

.button_nav img {
  width: 2.6rem;
  height: 2rem;
}

.button_cart {
  background-color: $black;
  border-color: $black;
  width: 5rem;
  height: 5rem;
  cursor: pointer;
}

.button_cart img {
  width: 1.6rem;
  height: 2.1rem;
}

.circle {
  background: $red;
  height: 2.6rem;
  width: 2.6rem;
  border-radius: 50%;
  position: relative;
  left: 40%;
  top: 10%;
}

.circle_quantity {
  color: $white;
  position: absolute;
  left: 8%;
  right: 8%;
  bottom: 20%;
  font-size: 12px;
  line-height: 120%;
}

.main_products {
  flex: 1 0 auto;
  width: 100%;
  height: 47.4rem;
  margin: 2rem;
}

.button_add {
  background-color: $black;
  border-color: $black;
  grid-area: button_add;
  width: 3.2rem;
  height: 3.2rem;
  border-radius: 50%;
  cursor: pointer;
}

.button_add img {
  width: 1.2rem;
  height: 1.2rem;
}

.title_product {
  grid-area: title_product;
  display: flex;
  flex-direction: column;
  width: 20rem;

  .span_dot {
    align-self: flex-end;
    width: 12rem;
    margin-right: 1rem;
    border-bottom: 0.1rem dashed $black;
  }
}

.desc_product {
  grid-area: desc_product;
}

.price_product {
  grid-area: price_product;
}

.id_product {
  padding: 1.1rem;
  display: grid;
  justify-items: flex-start;
  grid-template-columns: 2fr 9fr 2fr;
  grid-template-areas:
    "button_add title_product price_product"
    "button_add desc_product price_product";
}

.footer {
  width: 100%;
  height: 10rem;
  background-image: url("../assets/graphics/graphics-footer.svg");
  background-size: contain;
}

.p_desc_product, h1, h2, h3 {
  color: $black;
  font-family: $PT;
  font-style: normal;
  font-weight: bold;
  text-align: center;
}

h1 {
  font-size: 3em;
  line-height: 120%;
  margin: 1.5rem;
}

h2 {
  align-self: flex-start;
  font-size: 1.3rem;
  line-height: 120%;
  margin-bottom: -0.5rem;
}

.p_desc_product {
  color: $black;
  font-family: $worksans;
  font-weight: normal;
  font-size: 12px;
  line-height: 130%;
  margin-top: 0.5rem;
}

</style>
