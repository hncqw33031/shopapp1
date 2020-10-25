<template>
	<div>
		<common-header title="我的" :back="backUrl"></common-header>
		<common-footer></common-footer>
	</div>
</template>
<script>
	import commonHeader from "../../components/Header.vue"
	import commonFooter from "../../components/Footer.vue"
export default{
	components:{
		commonHeader,
		commonFooter
	},
	data(){
		return {
			backUrl:""
		}
	},
	beforeRouteEnter(to,from,next) {
		console.log(to)
		next(vm=>{
			vm.backUrl=from.path;
		})
	}
}
</script>
<style lang="less">
@import url("~@/assets/global.less");
</style>