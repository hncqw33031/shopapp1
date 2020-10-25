<template>
<div class="container">
	<div class="sub-list" :class="{active:item.cat_id===catId}" v-for="item of content" :key="item.cat_id" @click="changeCatId(item.cat_id)">{{item.cat_name}}</div>
</div>
</template>
<script>
export default{
	props:{
		content:Array
	},
	watch:{
		content(newList){
			this.catId=newList.length>0?newList[0].cat_id:0
		}
	},
	data(){
		return {
			catId:0
		}
	},
	methods:{
		changeCatId(catId){
			this.catId=catId
			this.$emit("change",catId)
		}
	}
}
</script>
<style lang="less" scoped>
@import url("~@/assets/global.less");
.sub-list{
	width: 100%;
	padding: 0.3rem  0.2rem;
	text-align: center;
	font-size: .32rem;
	color: @color-6;
	position: relative;
	&.active{
		background-color: #fff;
	}
	&.active::before{
		content: "";
		position: absolute;
		left: .2rem;
		top: 0;
		bottom: 0;
		margin: auto;
		width: 2px;
		height: .3rem;
		background-color: @color;
	}
}
</style>