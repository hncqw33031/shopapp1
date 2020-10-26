<template>
<div class="add-shopcar">
	<span class="iconfont icon-ic_jiarugouwuche" :style="style" @click="addToShopcar"></span>
</div>
</template>
<script>
export default{
	props:{
		fontSize:{
			type:String,
			default:'.4rem'
		},
		goods:{
			type:Object,
			default(){
				return {}
			}
		}
	},
	computed:{
		style(){
			return {
				fontSize:this.fontSize
			}
		}
	},
	methods:{
		addToShopcar(){
			if(Object.keys(this.goods).length===0){
				return
			}
		}
	}
}
</script>
<style lang="less">
@import url("~@/assets/global.less");
.add-shopcar{
	position: absolute;
	right: 0.1rem;
	bottom: 0rem;
	color: @color;
	font-weight: 500;
}
</style>