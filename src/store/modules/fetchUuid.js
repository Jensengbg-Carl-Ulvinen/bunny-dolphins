//Här genererar vi ett uuid
const getUuid = {
  state: {},
  mutations: {
    saveUuid(state, data) {
      localStorage.setItem("uuid", data.key);
    }
  },
  actions: {
    //Async funktion som spara uuid, skönt att det verkar fungera nu efter allt jidder
    async getUuid(ctx) {
      const url = "http://localhost:5000/api/beans/key";
      fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("saveUuid", data);
          }
        })
    }
  }
};

export default getUuid;
