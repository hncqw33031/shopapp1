<template>
<container main="特惠清仓" morePath="/goods-list">
	<template v-slot:content  v-if="show">
		<swiper ref="mySwiper" :options="swiperOptions">
			<swiper-slide class="sales-container"  v-for="(item,index) of pages" :key="index">
				<div class="sales-goods" v-for="val of item" :key="val.id">
					<div class="img-box">
						<img v-lazy="val.img" alt="">
					</div>
					<div class="goods-info">
						<div class="goods-name">{{val.name}}</div>
						<div class="goods-price">￥{{val.price|getPrice}}</div>
						<add-shopcar font-size=".28rem" :goods="val"></add-shopcar>
					</div>
				</div>
			</swiper-slide>
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</template>
</container>	
</template>
<script>
	import AddShopcar from '@/components/AddShopcar.vue'
	import Container from './Container.vue'
	import {
		Swiper,
		SwiperSlide
	} from 'vue-awesome-swiper'
	import 'swiper/css/swiper.css'
	import FromatPrice from '@/utils/function.js'
export default{
	props:{
		salesList:Array
	},
	computed:{
		show(){
			return !!this.salesList.length
		}
	},
	components:{
		Container,
		Swiper,
		SwiperSlide,
		AddShopcar
	},
	watch:{
		salesList(newVal){
			const pages=[]
			
			newVal.forEach((item,index)=>{
				let num=Math.floor(index/2)
				if(!pages[num]){
					pages[num]=[]
				}
				pages[num].push(item)
			})
			this.pages=pages;
		}
	},
	data(){
		return {
			pages:[],
			swiperOptions: {
				pagination: {
					el: '.swiper-pagination'
				},
				// loop: true,
				// autoplay: {
				// 	delay: 2000
				// },
			
				// Some Swiper option/callback...
			},
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
.sales-container{
	width: 100%;
	margin-bottom: 0.4rem;
	.layout-flex(row,space-between);
	.sales-goods{
		.pic-container(3.45rem,2.66rem);
		
	}
}
/deep/ .swiper-pagination-bullet{
	background-color:@color;
}
/deep/ .swiper-pagination-bullet-active{
	background-color: @color;
}
/deep/ .swiper-pagination{
	bottom: 0;
}
// /deep/ .swiper-pagination-bullet{
// 	background-color:rgba(255,94,70,.5);
// }
</style>