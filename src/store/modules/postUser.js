const postUser = {
  state: {
    user: ""
  },
  mutations: {
    //lokal användare om kund inte registrerar användare.
    saveUser(state, user) {
      localStorage.setItem("user", JSON.stringify(user));
      state.user = user;
    }
  },
  actions: {
    //registrera en användare
    async registerUser(ctx, user) {
      user.uuid = localStorage.getItem("uuid"); //tilldela uuid
      const url = "http://localhost:5000/api/users";
      fetch(url, {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json"
          }
        })
        .then(response => response.json())
        .then(data => {
          if (data) {
            ctx.commit("saveUser", data);
          }
        })
        .catch(error => {
          console.error("Error:", error);
        });
    }
  }
};

export default postUser;
