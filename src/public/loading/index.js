import LoadingCmp from './Loading.vue'


const loading={
	install(Vue){
		const  LoadingConstructor=Vue.extend(LoadingCmp)
		const vm=new LoadingConstructor()
		vm.$mount(document.createElement('div'))
		document.body.appendChild(vm.$el)
		Vue.prototype.$showLoading=function(mask=true){
			vm.show=true
			vm.mask=mask
		}
		Vue.prototype.$hideLoading=function(){
			vm.show=false
			vm.mask=false
		}
	}
}

export default loading