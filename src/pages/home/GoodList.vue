<template>
<container main="为你推荐">
	<template v-slot:content>
		<div class="goods-list-container">
			<div class="new-item" v-for="item of goodsList" :key="item.id">
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
		goodsList:Array
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
	filters:{
		getPrice(price){
			return FromatPrice.fromatPrice(price)
		}
	}
}
</script>
<style lang="less">
@import url("~@/assets/global.less");
.goods-list-container{
	width: 100%;
	margin-bottom: 0.4rem;
	.layout-flex(row,space-between);
	flex-wrap: wrap;
	.new-item{
		.pic-container(3.45rem,2.66rem);
		margin-right: 0;
		margin-bottom: .2rem;
	}
}
</style>