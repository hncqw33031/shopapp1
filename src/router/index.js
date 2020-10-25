import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home/index.vue";
import Classify from "../pages/classify/index.vue";
import ShopCar from "../pages/shopCar/index.vue";
import My from "../pages/my/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
	  path: "/classify",
	  name: "Classify",
	  component: Classify
  },
  {
	  path: "/shopCar",
	  name: "ShopCar",
	  component: ShopCar
  },
  {
	  path: "/my",
	  name: "My",
	  component: My
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
