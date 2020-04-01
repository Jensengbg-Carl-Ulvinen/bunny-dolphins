<template>
  <div class="status_page">
    <div class="order_number">
      <p>Ordernummer</p>
      <p class="number">#{{order.orderNr}}</p>
    </div>
    <img src="../assets/graphics/drone.svg" class="drone" />
    <template v-if="order.orderNr == ''">
      <h1>Här var det tomt!</h1>
      <button @click="redirect" class="redirect_button">Beställ här</button>
    </template>
    <template v-else>
      <h1 v-if="this.$store.state.order.activeOrder">Din beställning är på väg!</h1>
      <h1 v-else>Din beställning är framme!</h1>
      <button @click="redirect" class="redirect_button">Ok, cool!</button>
    </template>
  </div>
</template>
<script>
export default {
  computed: {
    order() {
      return this.$store.state.order.orderStatus;
    }
  },
  methods: {
    redirect() {
      this.$router.push("/menu");
    }
  }
};
</script>
<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.status_page {
  background: $red;
  color: $white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 92rem;
  padding: 5rem;
  h1 {
    color: $white;
    font-size: 3.5rem;
    font-weight: 600;
  }
  .order_number {
    display: flex;
    p {
      font-size: 1.5rem;
      font-family: $worksans;
      opacity: 0.8;
      margin-right: 0.5rem;
    }
    .number {
      font-weight: 600;
    }
  }
}
.redirect_button {
  background: $white;
  color: $black;
  font-size: 2.5rem;
  font-weight: 600;
  padding: 0.625rem 1.75rem;
  border: none;
  border-radius: 3rem;
  cursor: pointer;
}
</style>