<template>
	<div class="add-shopcar">
		<span class="iconfont icon-ic_jiarugouwuche" :style="style" @click="addToShopcar"></span>
	</div>
</template>
<script>
	import {Storage} from '@/utils/Storage.js'
	export default {
		props: {
			fontSize: {
				type: String,
				default: '.4rem'
			},
			goods: {
				type: Object,
				default () {
					return {}
				}
			},
			buyNumber: {
				type: Number,
				default: 1
			}
		},
		computed: {
			style() {
				return {
					fontSize: this.fontSize
				}
			}
		},
		methods: {
			addToShopcar() {
				if (Object.keys(this.goods).length === 0) {
					return
				}
				const goods = this.goods
				const cart = Storage.getItem('cart') || []
				const index = cart.findIndex(item => item.id === goods.id)
				if (index === -1) {
					const cartData = {
						...goods,
						selected: true,
						buyNumber: this.buyNumber
					}
					cart.push(cartData)

				} else {
					const buyNumber = cart[index].buyNumber
					const selected = cart[index].selected
					cart[index] = {
						...goods,
						selected,
						buyNumber
					}
				}
				Storage.setItem('cart', cart)
				this.$modalShow({
					title: '成功添加到购物车',
					content: "是否跳转到购物车结算",
					success: res => {
						if (res.confirm) {
							this.$router.push('/shopCar')
						}
					}
				})
			}
		}
	}
</script>
<style lang="less">
	@import url("~@/assets/global.less");

	.add-shopcar {
		position: absolute;
		right: 0.1rem;
		bottom: 0rem;
		color: @color;
		font-weight: 500;
	}
</style>
