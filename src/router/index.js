import Vue from "vue";
import VueRouter from "vue-router";
import Landing from "../views/landing.vue"
import About from "../views/about.vue";
import Menu from "../components/menu.vue";
// from here we need to import order status


Vue.use(VueRouter);

const routes = [
  {
    path: "/landing",
    name: "landing",
    component: Landing
  },
  {
    path: "/about",
    name: "about",
    component: About
  },
  {
    path: "/menu",
    name: "menu",
    component: Menu
  }
  //add path to order status
  /*,
  {
    path: "",
    name: "",
    component:
  }*/
];

const router = new VueRouter({
  routes
});

export default router;

