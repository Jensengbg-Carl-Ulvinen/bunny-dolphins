<template>
  <div class="register">
    <img src="" alt />
    <h1 class="main_line">Välkommen till AirBean-familjen!</h1>
    <p>Genom att skapa ett konto nedan kan du spara och se din orderhistorik.</p>
    <label class="label_text" for="name">Namn</label>
    <input class="input_text" v-model="name" type="text" id="name" />
    <label class="label_text" for="email">Epost</label>
    <input class="input_text" v-model="email" type="text" id="email" />
      <div class="input_gdpr">
      <input v-model="gdpr" id="radio" class="radio-input" type="radio" name="radio" value="input_gdpr" />
      <label class="label_radio pop" for="radio"></label>
      <p class="text_gdpr">GDPR Ok!</p>
    </div>

    <button @click="registerUser" class="register_btn">Brew me a cup!</button>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      name: "",
      email: "",
      gdpr: false
    };
  },
  methods: {
    registerUser() {
      if (
        this.name.length > 0 &&
        this.email
      ) {
        const user = { name: this.name, email: this.email };
        this.$store.dispatch("registerUser", user);
        const checkOrders = JSON.parse(localStorage.getItem("orders")); //kolla om de finns några ordrar i local storage
        const userUuid = localStorage.getItem("uuid"); // Kolla userUuid

        if (checkOrders && checkOrders.length > 0) {
          for (const orderId of checkOrders) {
            const url = `http://localhost:5000/api/orders/${orderId}`;
            fetch(url, {
              method: "PUT",
              body: JSON.stringify({ userUuid: userUuid }),
              headers: { "Content-Type": "application/json" }
            })
              .then(response => response.json())
          }
        }
        this.$store.dispatch("fetchOrderHistory");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";

.register {
  color: $black;
  padding: 1rem;
  background: $beige;
  display: flex;
  flex-direction: column;
  align-self: center;
  height: 56rem;
  width: 90%;
  border-radius: 10px;
  .main_line {
    font-size: 3.2rem;
    text-align: center;
  }
  p {
    text-align: center;
    font-family: $worksans;
    font-size: 1.6rem;
    margin-bottom: 3rem;
  }
  .label_text {
    color: $black;
    font-family: $worksans;
    font-size: 1.2rem;
  }
  .input_text {
    font-family: $worksans;
    font-size: 1.6rem;
    border: 1px solid $black;
    border-radius: 6px;
    margin: 0.5rem 0 1.5rem 0;
    padding: 12px;
    background: none;
  }
  .input_gdpr {
    margin: 2rem 0;
    height: 1rem;
    display: flex;
    align-items: center;

    input[type="radio"] {
      visibility: hidden;
      width: 0;
      height: 0;
    }
    .label_radio {
      cursor: pointer;
      border: 1px solid $black;
      background-color: $beige;
      padding: 7px 7px;
      border-radius: 100%;
    }
    input[type="radio"]:checked + label {
      border: 1px solid $black;
      background-color: #0e927d;
    }
    .text_gdpr {
      margin: 0 0.5rem;
    }
  }
  .register_btn {
    background: $black;
    color: $white;
    display: flex;
    align-self: center;
    cursor: pointer;
    font-family: $PT;
    font-size: 2.4rem;
    font-weight: 600;
    margin-top: 2rem;
    border: none;
    border-radius: 50px;
    padding: 10px 45px;
  }
}
</style>
