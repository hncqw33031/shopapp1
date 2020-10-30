<template>
<div class="container">
	<div v-if="headerShow" class="init-header">
		<span class="iconfont icon-fanhui cell"></span>
		<span class="iconfont icon-ziyuan cell" ></span>
	</div>
	<div v-else class="menu-header border-bottom" :style="`opacity:${opacity}`">
		<span class="iconfont icon-fanhui cell"></span>
		<ul>
			<li :class="{active:scrollTab==='goods'}" @click="change('goods')">商品</li>
			<li :class="{active:scrollTab==='comment'}" @click="change('comment')">评论</li>
			<li :class="{active:scrollTab==='detail'}" @click="change('detail')">详情</li>
		</ul>
		<span class="iconfont icon-ziyuan cell" ></span>
	</div>
</div>
</template>
<script>
export default{
	props:{
		headerShow:{
			type:Boolean,
			default:true
		},
		opacity:{
			type:Number,
			default:1
		},
		scrollTab:String
	},
	methods:{
		change(tabName){
			this.$emit('tab',tabName)
		}
	}
}
</script>
<style lang="less" scoped>
@import url("~@/assets/global.less");
.container{
	width: 100%;
	height: .88rem;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
	.init-header{
		padding: 0 .2rem;
		height: 100%;
		background-image: linear-gradient(to bottom,rgba(0,0,0,.2),transparent);
		.layout-flex(@justify:space-between);
		.cell{
			width: .6rem;
			height: .6rem;
			border-radius: 50%;
			background-color: @color-9;
			color:#fff;
			.layout-flex;
		}
	}
	.menu-header{
		padding: 0 .2rem;
		height: 100%;
		background-color: #fff;
		.layout-flex(@justify:space-between);
		.cell{
			width: .6rem;
			height: .6rem;
			border-radius: 50%;
			background-color: @color-9;
			color:#fff;
			.layout-flex;
		}
		ul{
			width: 4.5rem;
			height: 100%;
			.layout-flex;
			li{
				width: 1.5rem;
				height: 100%;
				font-size: .32rem;
				font-weight: 600;
				border-bottom: .04rem solid #fff;
				.layout-flex;
				&.active{
					color:@color;
					border-bottom: .04rem solid @color;
				}
			}
		}
	}
}
</style>