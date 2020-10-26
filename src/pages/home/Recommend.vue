<template>
<!-- <div class="recommend-container" v-if="show">
	<div class="title">
		<span class="left">精品推荐</span>
		<span class="right">更多<span class="iconfont icon-gengduo"></span></span>
	</div>
	<div class="goods-list-container" ref="wrapper">
		<div class="goods-list" ref="goodsList">
			<div class="goods-item" v-for="item of recommendList" :key="item.id">
				<img :src="item.img" alt="">
				<div class="goods-info">
					<div class="goods-name">{{item.name}}</div>
					<div class="goods-price">￥{{item.price|getPrice}}</div>
				</div>
			</div>
		</div>
	</div>
</div> -->
<container main="精品推荐" morePath="/goods-list">
	<template v-slot:content>
		<div class="goods-list-container" ref="wrapper">
			<div class="goods-list" ref="goodsList">
				<div class="goods-item" v-for="item of recommendList" :key="item.id">
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
		</div>
	</template>
</container>
</template>
<script>
import BScroll from 'better-scroll'
import FromatPrice from '@/utils/function.js'
import Container from './Container.vue'
import AddShopcar from '@/components/AddShopcar.vue'
export default{
	props:{
		recommendList:Array
	},
	components:{
		Container,
		AddShopcar
	},
	computed:{
		show(){
			return !!this.recommendList.length
		}
	},
	watch:{
		recommendList(newList){
			if(newList.length>0){
				this.$nextTick(()=>{
					this.initScroll()
				})
			}
		}
	},
	data(){
		return {
			scroll:null,
			scrollOptions:{
				starx:0,
				click:true,
				scrollX:true,
				scrollY:false,
				eventPassthrough:"vertical"
			}
		}
	},
	methods:{
		initScroll(){
			this.$refs.goodsList.style.width=this.recommendList.length*2.2+"rem"
			if(!this.scroll){
				this.scroll=new BScroll(this.$refs.wrapper,this.scrollOptions)
			}else{
				this.scroll.refresh()
			}
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
	overflow: hidden;
	.goods-list{
		 touch-action: none;
		.layout-flex(row,space-between);
		.goods-item{
			.pic-container;
		}
	}
}

</style>