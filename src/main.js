import Vue from "vue";

import axios from 'axios'
import VueAxios from 'vue-axios'

import App from "./App.vue";
import router from "./router";
import store from "./store";

// axios.defaults.baseURL='/api/'
// axios.defaults.timeout=8000
axios.defaults.headers.appkey = 'f68bSYqte0m6EibwhARrzTcYDPoV0FobCi06uDfM3eF4QGQQKSywmd71ytM'

axios.interceptors.response.use(function (response) {
	response=response.data
	if(parseInt(response.error_code)===0){
		return Promise.resolve(response.data)
	}else{
		console.log(66666);
		// return 5
	}
    return response;
  }, function (error) {
    return Promise.reject(error);
  });

Vue.use(VueAxios, axios)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
