import Vue from "vue";
import Vuex from "vuex";
import fetchMenu from "@/store/modules/fetchMenu.js";
import sendOrder from "@/store/modules/sendOrder.js";
import cart from "@/store/modules/cart.js";

Vue.use(Vuex);

export default new Vuex.Store({

actions: {},
getters: {},
modules: {
  menu: fetchMenu,
  order: sendOrder,
  cart: cart
}
});
