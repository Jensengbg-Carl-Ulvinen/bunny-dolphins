import Vue from "vue";
import VueRouter from "vue-router";
// import landing from "../components/landing.vue"
import about from "../views/about.vue";
import menu from "../components/menu.vue";
// from here we need to import order status


Vue.use(VueRouter);

const routes = [
  // path to landing
  /*{
    path: "/",
    name: "landing",
    component: landing
  },
  */
  {
    path: "/about",
    name: "about",
    component: about
  },
  {
    path: "/menu",
    name: "menu",
    component: menu
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

