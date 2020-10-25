<template>
<div class="header">
	<span class="iconfont icon-fanhui" v-if="back" @click="toBack"></span>
	<span>{{title}}</span>
</div>
</template>
<script>
export default{
	props:{
		title:{
			type:String,
			default:"QianQian左右鞋包"
		},
		back:{
			type:String,
			default:""
		}
	},
	methods:{
		toBack(){
			this.$router.push(this.back)
		}
	}
}
</script>
<style lang="less">
@import url("~@/assets/global.less");
.header{
	width: 100%;
	height: 0.88rem;
	background-color: @color;
	text-align: center;
	font-size: 0.36rem;
	position: fixed;
	z-index: 9999;
	top: 0;
	left: 0;
	color: #fff;
	line-height: 0.88rem;
	.iconfont{
		position: absolute;
		// height: 100%;
		
		left: 0.2rem;
		top: 0;
		bottom: 0;
	}
}
</style>