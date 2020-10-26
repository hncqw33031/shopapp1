<template>
<div class="nav-container">
	<!-- <div v-for="item of navList" :key="item.id" class="nav-item">
		<img v-lazy="item.img" alt="">
		<span>{{item.name}}</span>
	</div> -->
	<router-link tag="div" :to="'/goodList?name='+item.name" v-for="item of navList" :key="item.id" class="nav-item">
		<img v-lazy="item.img" alt="">
		<span>{{item.name}}</span>
	</router-link>
</div>
</template>
<script>
export default{
	props:{
		navList:Array
	},
	watch:{
		navList(newList){
			this.list=newList.slice(0,8)
		}
	},
	data(){
		return {
			list:[]
		}
	}
}
</script>
<style lang="less">
@import url("~@/assets/global.less");
.nav-container{
	width: 100%;
	height: 3.9rem;
	background-color: #fff;
	display: flex;
	flex-wrap: wrap;
	padding: 0.2rem;
	.nav-item{
		width: 25%;
		height: 50%;
		.layout-flex(column);
		font-size: .26rem;
		color:@color-3;
		img{
			width: 0.9rem;
		}
	}
}
</style>