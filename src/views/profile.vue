<template>
  <div class="profile">
      <Nav v-if="openNav" @closeNav="nav" class="overlay_nav" />

    <section class="main_content">
      <div class="header">

        <button @click="nav" class="btn_nav">
          <img src="../assets/graphics/navicon.svg" alt />
        </button>

      </div>

      <Register v-if="user === null" class="register_user" />

      <section class="content">
        <section class="profile_user">
          <h2 v-if="user != null" class="username">{{user.name}}</h2>
          <p v-if="user != null" class="user-email">{{user.email}}</p>
        </section>

        <section class="order_history">
          <h1>Orderhistorik</h1>

            <li v-for="(order, index) in orders" :key="index" class="order_list">
              <div class="left_side">
                <p class="order_number">#{{order.orderNr}}</p>
                <p class="total">total ordersumma</p>
              </div>
              <div class="right_side">
                <p class="order_date">{{order.created}}</p>
                <p class="total_sum">{{order.totalValue}} Kr</p>
              </div>
            </li>


          <div class="sum_order">
            <p class="total_spent">Totalt spenderat</p>
            <p class="sum">{{sum}} Kr</p>
          </div>

        </section>
      </section>
    </section>
  </div>
</template>

<script>
import Nav from "../components/nav";
import Register from "../components/register";
export default {
  components: {
    Nav,
    Register
  },
  data: () => {
    return {
      openNav: false
    };
  },
  computed: {
    orders() {
      return this.$store.state.orders.orders;
    },
    user() {
      return this.$store.state.register.user;
    },
    profile() {
      return this.$store.state.profile.uuid;
    },
    sum() {
      let sum = 0;
      this.orders.forEach(order => (sum += order.totalValue));
      return sum;
    },
    totalSum() {
      let totalSum = 0;
      this.orders.forEach(order => order.cart.totalPrice);
      return totalSum;
    }
  },
  methods: {
    nav() {
      if (this.openNav === true) {
        this.openNav = false;
      } else {
        this.openNav = true;
      }
    }
  },
  mounted() {
    if (localStorage.getItem("uuid")) {
      this.displayRegister = false;
    }
  },
  created() {
    this.$store.dispatch("fetchOrderHistory");
    this.$store.commit("saveUser", JSON.parse(localStorage.getItem("user")));
  }
};

</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
//@import "../assets/scss/transitions.scss";
.overlay_nav {
  position: absolute;
  z-index: 2;
  height: 100%;
  background-color: $black;
}

.profile {
  background: $beige;
  height: 100%;
  background-color: $black;
  background: url("../assets/graphics/graphics-header.svg") top no-repeat;

  .main_content {
    font-family: $worksans;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .header {
      display: flex;
      padding-left: 2rem;
      padding-top: 2rem;
      height: 10rem;
      margin-bottom: 3rem;

      .btn_nav {
        height: 4.8rem;
        width: 4.8rem;
        border-radius: 100%;
        border: none;
        cursor: pointer;
      }
    }

    .content {
      display: flex;
      flex-direction: column;
      margin-bottom: auto;
      padding: 3rem;
      padding-bottom: 2rem;

      .profile_user {
        display: flex;
        flex-direction: column;
        color: $white;
        align-items: center;
        margin-bottom: 3rem;

        .username {
          align-self: center;
          font-size: 2rem;
          margin: 1rem;
          color: $white;
        }

        .user-email {
          font-size: 1.2rem;
        }
      }

      .order_history {
        display: flex;
        flex-direction: column;
        height: 35rem;
        padding: 0 0.5rem 0 1rem;
        margin-bottom: 3rem;

        h1 {
          font-size: 2.2rem;
          font-weight: 600;
          color: $white;
          align-self: flex-start;
          margin: 1rem 0;
        }

        .order_list {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin: 1rem 0;

          .left_side,
          .right_side,
          p {
            display: flex;
            flex-direction: column;
            font-size: 1.2rem;
            color: $white;
          }

          .left_side {
            align-items: flex-start;
          }

          .right_side {
            align-items: flex-end;
          }
        }

        .sum_order {
          display: flex;
          justify-content: space-between;
          margin: 1.5rem 0;

          .total_spent,
          .sum {
            color: $white;
            font-size: 1.2rem;
            font-weight: 600;
            opacity: 0.8;
          }
        }
      }
    }
  }
}
</style>
