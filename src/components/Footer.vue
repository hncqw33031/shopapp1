<template>
<div class="footer">
	<router-link to="./" tag="div" class="footer-nav">
		<span class="iconfont icon-shouye-copy"></span>
		<span>首页</span>
	</router-link>
	<router-link to="./classify" tag="div" class="footer-nav">
		<span class="iconfont icon-tubiaochicundaochuSVGshangchuandaoalibaba-"></span>
		<span>分类</span>
	</router-link>
	<router-link to="./shopCar" tag="div" class="footer-nav">
		<span class="iconfont icon-ziyuan"></span>
		<span>购物车</span>
	</router-link>
	<router-link to="./my" tag="div" class="footer-nav">
		<span class="iconfont icon-shouye"></span>
		<span>我的</span>
	</router-link>
</div>
</template>
<script>
export default{}
</script>
<style lang="less">
@import url("~@/assets/global.less");
.footer{
	width: 100%;
	height: 1.3rem;
	background-color: #fff;
	position: fixed;
	bottom: 0;
	left: 0;
	z-index: 999;
	border-top: 1px solid rgba(0,0,0,.2);
	.layout-flex;
	.footer-nav{
		.layout-flex(column);
		.iconfont{
			font-size: .4rem;
		}
		color: #7f8389;
		span{
			font-size: .2rem;
		}
		&.router-link-exact-active{
			color: @color;
		}
	}
}
</style>