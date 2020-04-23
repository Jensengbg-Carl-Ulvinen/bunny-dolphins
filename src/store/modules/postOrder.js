const postOrder = {
  state: {
    status: {
      orderNr: "",
      eta: ""
    },
    cart: [],
    counter: 0,
    intervalID: "",
    activeOrder: false
  },
  mutations: {
    //Cartens state, här passas ordrar in
    status(state, order) {
      state.cart = [];
      state.counter = 0;
      state.status.orderNr = order.orderNr;
      state.activeOrder = true;
      this.commit("countdown", order.eta);
    },
    countdown(state, eta) {
      const duration = eta * 60;
      let timer = duration,
        minutes,
        seconds;
      const interval = setInterval(() => {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        state.status.eta = minutes + ":" + seconds;

        if (--timer < 0) {
          timer = 0;
          state.status.eta = 0;
          state.activeOrder = false;
          clearInterval(interval);
        }
      }, 1000);
      state.intervalID = interval;
    },
    // lägg till produkter ifrån menyn
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
      state.counter++;
    },
    // ta bort en product - åkallas i cart
    delProd(state, product) {
      const index = state.cart.findIndex(obj => obj.id === product.id);
      const price = state.cart[index].price;
      if (state.cart[index].quantity === 1) {
        state.cart.splice(index, 1);
      } else {
        state.cart[index].quantity -= 1;
        state.cart[index].totPrice -= price
      }
      state.counter--;
    },
    // addera en produkt - åkallas i cart
    addProd(state, product) {
      const index = state.cart.findIndex(obj => obj.id === product.id);
      const price = state.cart[index].price;
      state.cart[index].quantity += 1;
      state.cart[index].totPrice += price
      state.counter++;
    }
  },
  actions: {
    //Async functions som åkallas när vi skickar ordern.
    async postOrder({
      commit,
      state
    }, url) {
      //Tilldela datum

      const dateObj = new Date();
      const month = dateObj.getUTCMonth() + 1;
      const day = dateObj.getUTCDate();
      const year = dateObj.getUTCFullYear();
      const date = year + "/" + month + "/" + day;

      let sum = 0;
      state.cart.forEach(obj => {
        sum += obj.totPrice;
      });

      const userUuid = localStorage.getItem("uuid");

      let order = {
        created: date,
        cart: state.cart, //cartens innehåll
        totalValue: sum, //summan av innehållet
        userUuid: userUuid //addera ett userUuid
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
            commit("status", data);

            // Om du inte har skapat konto sparas orderns i localstorage
            if (data.userUuid == null) {
              let localOrders = JSON.parse(localStorage.getItem("orders"));
              if (localOrders == null) {
                localOrders = [];
              }
              localOrders.push(data.uuid);
              localStorage.setItem("orders", JSON.stringify(localOrders));
            }
          }
        })
      }
   }
};

export default postOrder;
