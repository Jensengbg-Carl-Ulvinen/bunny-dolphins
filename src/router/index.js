import Vue from "";
import VueRouter from "";
import Home from "";
import Landing from "../views/landing";

Vue.use(VueRouter);

const routes = [
  {
    path: "/landing",
    name: "landing",
    component: Landing
  }
];

const router = new VueRouter({
  routes
});

export default router;
