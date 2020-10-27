<template>
<container main="新品优选" morePath="/goods-list">
	<template v-slot:content>
		<div class="new-container">
			<div class="new-item" v-for="item of list" :key="item.id">
				<div class="img-box">
					<img v-lazy="item.img" alt="">
				</div>
				<div class="goods-info">
					<div class="goods-name">{{item.name}}</div>
					<div class="goods-price">￥{{item.price|getPrice}}</div>
					<add-shopcar font-size=".28rem" :goods="item"></add-shopcar>
				</div>
			</div>
		</div>
	</template>
</container>
</template>
<script>
	import Container from './Container.vue'
	import FromatPrice from '@/utils/function.js'
	import AddShopcar from '@/components/AddShopcar.vue'
export default{
	props:{
		newList:Array
	},
	components:{
		Container,
		AddShopcar
	},
	data(){
		return {
			list:[]
		}
	},
	watch:{
		newList(arr){
			this.list=arr.slice(0,3)
		}
	},
	filters:{
		getPrice(price){
			return FromatPrice.fromatPrice(price)
		}
	}
}
</script>
<style lang="less" scoped>
@import url("~@/assets/global.less");
.new-container{
	width: 100%;
	margin-bottom: 0.4rem;
	.layout-flex(row,space-between);
	.new-item{
		.pic-container(2.24rem,2.4rem);
		margin-right: 0;
	}
}
</style>