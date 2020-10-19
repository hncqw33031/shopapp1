<template>
<div class="container">
	<div class="search">
		<span class="iconfont icon-sousuo"></span>
		{{plachHolde}}
	</div>
</div>
</template>
<script>
export default{
	props:{
		plachHolde:{
			type:String,
			default:'搜索商品名称'
		}
	}
}
</script>
<style lang="less" scoped="scoped">
@import url("~@/assets/global.less");
.container{
	width: 100%;
	height: 0.88rem;
	position: fixed;
	top: 0.88rem;
	left: 0;
	background-color: @color;
	padding: 0.16rem 0.4rem;
	.search{
		width: 100%;
		height: 100%;
		background-color: #fff;
		border-radius: 5555px;
		text-align: center;
		line-height: 0.56rem;
		font-size: 0.26rem;
		color: #b2b2b2;
	}
}
</style>