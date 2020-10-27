<template>
	<div class="list-container">
		<div class="list-item" v-for="item of goodsList" :key="item.id">
			<div class="img">
				<img :src="item.img" alt="">
			</div>
			<div class="content">
				<div class="title">{{item.name}}</div>
				<div class="content-bottom">
					<div class="price">
						<span class="new-price">￥{{item.price|getPrice}}</span>
						<span class="market_price">￥{{item.market_price|getPrice}}</span>
					</div>
					<div class="sale_num">
						<span>{{item.sale_num}}浏览</span>
					</div>
					<add-shopcar font-size=".28rem" :goods="item"></add-shopcar>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import FromatPrice from '@/utils/function.js'
	import AddShopcar from '@/components/AddShopcar.vue'
	export default {
		props: {
			goodsList: Array
		},
		filters: {
			getPrice(price) {
				return FromatPrice.fromatPrice(price)
			}
		},
		components:{
			AddShopcar
		}
	}
</script>
<style lang="less">
	@import url("~@/assets/global.less");
	.list-container {
		margin-top: 1.66rem;
		padding: 0 .2rem;
		.list-item {
			width: 100%;
			height: 2.6rem;
			padding: .2rem;
			display: flex;
			.img {
				width: 2.2rem;
				height: 2.2rem;
				border-radius: .1rem;
				overflow: hidden;

				img {
					width: 100%;
				}
			}
			.content {
				display: flex;
				flex-direction: column;
				justify-content: space-between;
				width: 4.5rem;
				padding: .2rem;
				.title {
					font-size: .28rem;
					color: @color-6;
					overflow: hidden;
					white-space: nowrap;
					text-overflow: ellipsis;
				}
				.content-bottom {
					position: relative;

					.price {
						font-weight: 600;

						// margin-bottom: .18rem;
						.new-price {
							font-size: .36rem;
							color: @color;
							margin-right: .1rem;
						}

						.market_price {
							font-size: .26rem;
							color: @color-9;
							text-decoration: line-through;
						}
					}

					.sale_num {
						font-size: .22rem;
						color: @color-9;
					}
				}
			}
		}
	}
</style>
