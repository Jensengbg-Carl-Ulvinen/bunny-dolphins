//här hämtar vi order historian till profilen

const fetchOrderHistory = {
  state: {
    orders: []
  },
  mutations: {
    setOrderHistory(state, newOrderHistory) {
      state.orders = newOrderHistory;
    }
  },
  actions: {
    //Sparar order historian på profilen, ughh, det här tog sin lilla tid - haft ont om tid att stylea sidan, något för dig Albin? scss plz
    async fetchOrderHistory(ctx) {
      const uuid = localStorage.getItem("uuid");
      const url = `http://localhost:5000/api/users/${uuid}/orders`;
      fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("setOrderHistory", data);
          }
        })
    }
  }
};
export default fetchOrderHistory;
