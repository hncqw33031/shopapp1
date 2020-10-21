<template>
<div class="recommend-container" v-if="show">
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
</div>
</template>
<script>
import BScroll from 'better-scroll'
import FromatPrice from '@/utils/function.js'
export default{
	props:{
		recommendList:Array
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
.recommend-container{
	.content(.2rem);
	height: 4.1rem;
	.title{
		height: .32rem;
		border-left: .04rem solid @color;
		text-indent: .2rem;
		.layout-flex(row,space-between);
		.left{
			font-size: .32rem;
			color: @color-3;
			font-weight: 600;
		}
		.right{
			font-size: .24rem;
			color: @color-6;
			span{
				font-size: .24rem;
			}
		}
	}
	.goods-list-container{
		width: 100%;
		overflow: hidden;
		margin-top: .2rem;
		.goods-list{
			 touch-action: none;
			.layout-flex(row,space-between);
			.goods-item{
				border-radius: .1rem;
				border: 1px solid #eee;
				flex-shrink: 0;
				width: 2rem;
				overflow: hidden;
				margin-right: .2rem;
				img{
					height: 2.1rem;
				}
				.goods-info{
					font-weight: 600;
					.goods-name{
						overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
						padding: 0 .1rem;
						margin-bottom: .4rem;
						color: @color-6;
					}
					.goods-price{
						line-height: .4rem;
						color: @color;
					}
				}
			}
		}
	}
}
</style>