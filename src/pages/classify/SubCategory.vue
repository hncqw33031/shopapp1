<template>
<div class="container" >
	<div class="sub-list" v-for="item of content" :key="item.cat_id">
		<img :src="item.img" alt="">
		<span>{{item.cat_name}}</span>
	</div>
</div>
</template>
<script>
export default{
	props:{
		content:Array
	}
}
</script>
<style lang="less" scoped>
@import url("~@/assets/global.less");
.container{
	padding: .1rem;
	.layout-flex(row,flex-start,flex-start);
	align-content: flex-start;
	flex-wrap: wrap;
	.sub-list{
		margin-top: .8rem;
		.layout-flex(column);
		width: 33.33%;
		img{
			width: 1rem;
		}
		span{
			margin-top: .22rem;
			font-size: 0.28rem;
			color:@color-6;
		}
	}
}
</style>
