import Vue from "vue";
import Vuex from "vuex";
import fetchMenu from "@/store/modules/fetchMenu.js";
import fetchCart from "@/store/modules/fetchCart.js";
import postUser from "./modules/postUser";
import postOrder from "@/store/modules/postOrder.js";
import fetchOrderHistory from "./modules/fetchOrderHistory";
import fetchUuid from "./modules/fetchUuid";



Vue.use(Vuex);

export default new Vuex.Store({

  actions: {},
  getters: {},
  modules: {
    menu: fetchMenu,
    cart: fetchCart,
    register: postUser,
    order: postOrder,
    uuid: fetchUuid,
    orders: fetchOrderHistory,
  }
});
