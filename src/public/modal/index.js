import LoadingCmp from './Modal.vue'


const modal={
	install(Vue){
		const  LoadingConstructor=Vue.extend(LoadingCmp)
		const vm=new LoadingConstructor()
		vm.$mount(document.createElement('div'))
		document.body.appendChild(vm.$el)
		Vue.prototype.$modalShow=function({title="成功添加到购物车",content="是否跳转到购物车结算",btn={confirm:"确定",cancel:"取消"},success=null}){
			vm.visible=true
			vm.title=title
			vm.content=content
			vm.btn=btn
			vm.$off('modal')
			vm.$on("modal",function(result){
				console.log(success);
				success&&success(result)
			})
		}
		// Vue.prototype.$hideLoading=function(){
		// 	vm.show=false
		// 	vm.mask=false
		// }
	}
}

export default modal