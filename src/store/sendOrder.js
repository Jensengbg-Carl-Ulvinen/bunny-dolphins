const postOrder = {
  state: {
    orderStatus: {
      orderNr: "",
      eta: ""
    },
    cart: [],
    cart_counter: 0,
    activeOrder: false
  },
  mutations: {

    orderStatus(state, order) {
      state.cart = [];
      state.cart_counter = 0;
      state.orderStatus.orderNr = order.orderNr;
      state.activeOrder = true;
    },

    addToCart(state, product) {
      const productObj = Object.assign({}, product);
      const index = state.cart.findIndex(obj => obj.id === productObj.id);
      if (index != -1) {
        const price = state.cart[index].price;
        state.cart[index].quantity += 1;
        state.cart[index].totPrice += price;
      } else {
        productObj.quantity = 1;
        productObj.totPrice = productObj.price;
        state.cart.push(productObj);
      }
      state.cart_counter++;
    },

    removeOneProduct(state, product) {
      const index = state.cart.findIndex(obj => obj.id === product.id);
      if (state.cart[index].quantity === 1) {
        state.cart[index].splice(index, 1);
      } else {
        state.cart[index].quantity -= 1;
      }
      state.cart_counter--;
    },

    addOneProduct(state, product) {
      const index = state.cart.findIndex(obj => obj.id === product.id);
      state.cart[index].quantity += 1;
      state.cart_counter++;
    }
  },

      async sendOrder({ commit, state }, url) {
        let sum = 0;
        state.cart.forEach(obj => {
          sum += obj.totPrice;
        });

      let order = {
        created: date,
        cart: state.cart,
        totalValue: sum,
      };

      fetch("http://localhost:5000/api/orders", {
          method: "POST",
          body: JSON.stringify(order),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data) {
            commit("orderStatus", data);

            if (data.userUuid == null) {
              let localOrders = JSON.parse(localStorage.getItem("orders"));
              if (localOrders == null) {
                localOrders = [];
              }
              localOrders.push(data.uuid);
              localStorage.setItem("orders", JSON.stringify(localOrders));
              let test = JSON.parse(localStorage.getItem("orders"));
            }
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  };

export default postOrder;
