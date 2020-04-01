import Vue from "vue";
import Vuex from "vuex";
import fetchMenu from "@/store/modules/fetchMenu.js";
import postOrder from "@/store/modules/postOrder.js";
import cart from "@/store/modules/cart.js";

Vue.use(Vuex);

export default new Vuex.Store({

actions: {},
getters: {},
modules: {
  menu: fetchMenu,
  order: postOrder,
  cart: cart
}
});
