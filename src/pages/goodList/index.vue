<template>
<div class="container">
	<common-header :title="cName" :back="backUrl"></common-header>
	<div class="sort border-bottom">
		<div class="sort-item">综合</div>
		<div class="sort-item">最热</div>
		<div class="sort-item">新品</div>
		<div class="sort-item">
			价格
			<span class="iconfont icon-shangxia"></span>
		</div>
	</div>
</div>
</template>
<script>
	import commonHeader from "../../components/Header.vue"
export default{
	props:{
		cid:Number,
		cName:String
	},
	components:{
		commonHeader
	},
	mounted() {
		
	},
	data(){
		return {
			backUrl:"",
		}
	},
	beforeRouteEnter(to,from,next) {
		next(vm=>{
			vm.backUrl=from.path;
		})
	},
}
</script>
<style lang="less">
@import url("~@/assets/global.less");
.container{
	.sort{
		width: 100%;
		height: .8rem;
		position: fixed;
		left: 0;
		top: .88rem;
		.layout-flex;
		// border-bottom: .06rem solid #eee;
		background-color: #fff;
		color:@color-6;
		.sort-item{
			font-size: .32rem;
			.iconfont{
				font-size:.28rem
			}
		}
	}
}
</style>