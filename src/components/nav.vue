<template>
  <div class="nav_wrapper">
    <section class="nav_content">
      <div class="nav_header">
        <button @click="closeNav" class="nav_button">
          <img src="../assets/graphics/close.svg" alt />
        </button>
      </div>
      <section class="nav">
        <p @click="menu">Meny</p>
        <span class="line"></span>
        <p @click="about">Vårt Kaffe</p>
        <span class="line"></span>
        <p @click="myProfile">Min Profil </p>
        <span class="line"></span>
        <p @click="orderStatus">Orderstatus </p>
      </section>
    </section>
  </div>
</template>

<script>
export default {
  methods: {
    closeNav() {
      this.$emit("closeNav");
    },
    menu() {
      if (this.$route.path !== "/menu") {
        this.$router.push("/menu");
      } else {
        this.closeNav();
      }
    },
    about() {
      if (this.$route.path !== "/about") {
        this.$router.push("/about");
      } else {
        this.closeNav();
      }
    },
    orderStatus() {
      this.$router.push("/status");
      // if (this.$store.state.order.activeOrder === true) {
      //   if (this.$route.path !== "/order-status") {
      //     this.$router.push("/order-status");
      //   } else {
      //     this.closeNav();
      //   }
      // }
    },
    myProfile() {
      if (localStorage.getItem("uuid")) {
        if (this.$route.path !== "/profile") {
          this.$router.push("/profile");
        } else {
          this.closeNav();
        }
      } else {
        if (this.$route.path !== "/profile") {
          this.$store.dispatch("getUuid");
          this.$router.push("/profile");
        } else {
          this.$store.dispatch("getUuid");
          this.closeNav();
        }
      }
    }
  }
};

//to do: need to add orderstatus route/store

</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

//todo: need to fix nav_wrapper height so it scales

.nav_wrapper {
  width: 100%;
}

.nav_content {
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: $black;

  .nav_header {
    display: flex;
    align-self: flex-start;

    .nav_button {
      height: 4.6rem;
      width: 4.6rem;
      border-radius: 100%;
      border: none;
      padding: 1rem;
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $white;
    height: 60rem;

    p {
      font-size: 3.2rem;
      font-family: $PT;
      cursor: pointer;
      margin: 2rem;
    }

    .line {
      width: 5rem;
      border-bottom: 0.1rem solid #ffffff33;
    }
  }
}
</style>
