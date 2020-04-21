import Vue from "vue";
import Vuex from "vuex";
import fetchMenu from "@/store/modules/fetchMenu.js";
import fetchCart from "@/store/modules/fetchCart.js";
import postUser from "./modules/postUser";
import postOrder from "@/store/modules/postOrder.js";
import fetchOrderHistory from "./modules/fetchOrderHistory";
import fetchUuid from "./modules/fetchUuid";

//jag tror allting funkar som det ska här i storen nu efter mycket tinkrande
//med att dela upp det in modules och mycket hjälp på traven, hittar du några fel i modulerna Albin?

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
