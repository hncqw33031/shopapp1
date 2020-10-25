<template>
<div class="container">
	<div class="title">
		<span class="left">{{main}}</span>
		<span class="right" v-if="show">更多<span class="iconfont icon-gengduo"></span></span>
	</div>
	<slot name="content"></slot>
</div>
</template>
<script>
export default{
	props:{
		main:String,
		morePath:{
			type:String,
			default:""
		}
	},
	computed:{
		show(){
			return this.morePath.trim()!==""
		}
	}
}
</script>
<style lang="less" scoped>
@import url("~@/assets/global.less");
.container{
	.content(.2rem);
	.title{
		height: .32rem;
		border-left: .04rem solid @color;
		text-indent: .2rem;
		margin-bottom: 0.2rem;
		.layout-flex(row,space-between);
		.left{
			font-size: .32rem;
			color: @color-3;
			font-weight: 600;
		}
		.right{
			font-size: .24rem;
			color: @color-6;
			span{
				font-size: .24rem;
				margin-left: .1rem;
			}
		}
	}
}
</style>