import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/home/index.vue";
import Classify from "../pages/classify/index.vue";
import ShopCar from "../pages/shopCar/index.vue";
import My from "../pages/my/index.vue";
import GoodList from '../pages/goodList/index.vue'
import GoodDetail from '../pages/goodsDetail/index.vue'
import GoodsError from '../pages/goodsError/index.vue'
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
  },
  {
  	  path: "/goodsError",
  	  name: "GoodsError",
  	  component: GoodsError
  },
  {
	  path: "/goodList",
	  name: "GoodList", 
	  props:route=>{
		  let cid=route.query.cid||0
		  let cName=route.query.name||""
		  if(isNaN(cid)){
			  cid=0
		  }
		  return {
			  cid:parseInt(cid),
			  cName
		  }
	  },
	  component: GoodList
  },
  {
	 path:'/goodsDetail',
	 redirect:"/" //重定向到首页
  },
  {
	  path: "/goodsDetail/:id",
	  beforeEnter(to,from,next){ 
		  const id=to.params.id
		  if(!/^\d+$/.test(id)){
			  next(from.path)
		  }else{
			  next()
		  }
	  },
	  props:route=>{
		return {
			id:parseInt(route.params.id)
		}
	  },
	  name:'GoodsDetail',
	  component: GoodDetail
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
