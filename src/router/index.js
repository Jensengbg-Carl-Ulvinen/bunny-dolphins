import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "@/views/landing.vue"
import About from "@/views/about.vue";
import Menu from "@/views/menu.vue";
import Cart from '@/components/cart.vue'
import OrderStatus from '@/components/status.vue'
import Profile from "@/views/profile.vue";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu
  },
  {
    path: "/status",
    name: "OrderStatus",
    component: OrderStatus
  },
  {
    path: "/cart",
    name: "Cart",
    component: Cart
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile
  }
];

const router = new VueRouter({
  routes
});

export default router;

