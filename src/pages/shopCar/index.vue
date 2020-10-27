<template>
	<div>
		<common-header title="购物车" :back="backUrl"></common-header>
		<div class="cart-list">
			<div v-for="item of cart" :key="item.id" :class="{'cart-delete':item.delete}" :data-goods-id="item.id" class="cart-item border-bottom" @touchstart="touchStart" @touchend="touchEnd">
				<input type="checkbox" class="checkbox" :checked="item.selected" @click="toggleSelect(item.id)">
				<div class="goods-img border">
					<img :src="item.img">
				</div>
				<div class="goods-desc">
					<div class="goods-name">{{item.name}}</div>
					<div class="goods-price">
						<span class="item-price">¥{{item.price|getPrice}}</span>
						<div class="goods-number-wrapper">
							<span class="opra" :class="{disabled:item.buyNumber===1}" @click="reduceCart(item.id)">-</span>
							<span class="number">{{item.buyNumber}}</span>
							<span class="opra" @click="addCart(item.id)">+</span>
						</div>
					</div>
				</div>
				<div class="delete" @click="deleteCart(item.id)">删除</div>
			</div>
		</div>
		<div class="cart-count border-top">
			<div class="check">
				<input type="checkbox" class="checkbox" :checked="selectAll" @click="toggleSelectAll">全选
			</div>
			<div class="total">
				合计: <em>¥{{total}}</em>
			</div>
			<div class="submit" onclick="submitCart()">
				去结算({{cartNum}})
			</div>
		</div>
		<common-footer></common-footer>
	</div>
</template>
<script>
	import commonHeader from "../../components/Header.vue"
	import commonFooter from "../../components/Footer.vue"
	import {Storage} from '@/utils/Storage'
	import FromatPrice from '@/utils/function.js'
	let touchStartX=666,touchStartTime=666
	export default {
		components: {
			commonHeader,
			commonFooter
		},
		data() {
			return {
				backUrl: "",
				cart: [],
				selectAll:false,
				total:0,
				cartNum:0
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.backUrl = from.path;
			})
		},
		mounted(){
			const cart = Storage.getItem("cart") || []
			if(cart.length>0){
				this.cart=cart.map(item=>{
					if(!Reflect.has(item,'delete')){
						item.delete=false
					}
					return item
				})
			}
			this.countCart()
		},
		filters: {
			getPrice(price) {
				return FromatPrice.fromatPrice(price)
			}
		},
		methods: {
			deleteCart(goodsId){
				this.$modalShow({
					title:"",
					content:"确定要删除吗？",
					success:res=>{
						const index=this.cart.findIndex(item=>item.id===goodsId)
						if(res.confirm&&index>-1){
							this.cart.splice(index,1)
							this.countCart()
						}
						if(res.cancel){
							this.cart[index].delete=false
						}
					}
				})
			},
			addCart(goodsId){
				const index=this.cart.findIndex(item=>item.id===goodsId)
				this.cart[index].buyNumber++
				this.countCart()
			},
			reduceCart(goodsId){
				const index=this.cart.findIndex(item=>item.id===goodsId)
				if(this.cart[index].buyNumber>1){
					this.cart[index].buyNumber--
				}
				this.countCart()
			},
			countCart(){
				let selectAll=[]
				let  total=0
				let cartNum=0
				this.cart.forEach(item=>{
					if(item.selected){
						total+=item.price*item.buyNumber
						cartNum++
						selectAll.push(true)
					}
				})
				if(this.cart.length===0){
					selectAll=false
				}
				this.selectAll=selectAll.length>0?selectAll.length===this.cart.length:false
				this.cartNum=cartNum
				this.total=total
				Storage.setItem("cart",this.cart)
			},
			toggleSelectAll(){
				this.cart.forEach(item=>{
					item.selected=!this.selectAll
				})
				this.selectAll=!this.selectAll
				this.countCart()
			},
			toggleSelect(goodsId){
				const index=this.cart.findIndex(item=>item.id===goodsId)
				this.cart[index].selected=!this.cart[index].selected
				this.countCart()
			},
			touchStart(event) {
				touchStartX = event.changedTouches[0].clientX
				touchStartTime = event.timeStamp
			},
			touchEnd(event){
				const distance=event.changedTouches[0].clientX-touchStartX
				const time=event.timeStamp-touchStartTime
				const goodsId=parseInt(event.currentTarget.dataset.goodsId)
				const index=this.cart.findIndex(item=>item.id===goodsId)
				if(distance<-100&&time<500){
					this.cart.forEach((item,key)=>{
						if(key==index){
							item.delete=true
						}else{
							item.delete=false
						}
					})
				}
				if(distance>100&&time<500){
					this.cart[index].delete=false
				}
			}
		}
	}
</script>
<style>
	body{
		background-color: #fff;
	}
</style>
<style lang="less" scoped>
	@import url("~@/assets/global.less");
	.cart-delete{
		left: -1.6rem;
	}
	.cart-list {
		width: 100%;
		overflow: hidden;
		margin-top: .88rem;
		background-color: #fff;
		padding-bottom: 2.4rem;
		.cart-item {
			width: 100%;
			height: 2.4rem;
			padding: .2rem;
			display: flex;
			align-items: center;
			position: relative;

			.goods-img {
				width: 2rem;
				height: 100%;
				border-radius: .1rem;
				overflow: hidden;
				margin-left: .2rem;

				img {
					height: 100%;
				}
			}

			.goods-desc {
				padding: .2rem;
				flex-grow: 1;
				height: 100%;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.goods-name {
					width: 2.8rem;
					.texthide;
					color: @color-6;
					font-size: .28rem;
				}

				.goods-price {
					display: flex;
					justify-content: space-between;

					.item-price {
						font-size: .32rem;
						color: @color;
						font-weight: 600;
					}

					.goods-number-wrapper {
						display: flex;
						align-items: center;
						span {
							display: block;
							height: .4rem;
							text-align: center;
							line-height: .36rem;
							border: .02rem solid #eee;
							color: @color-3;
							font-size: .32rem;
						}
						
						.opra {
							width: .4rem;
						}
						.disabled{
							color: #eee;
						}
						.number {
							width: .8rem;
						}
					}
				}
			}

			.delete {
				width: 1.6rem;
				height: 100%;
				position: absolute;
				right: -1.6rem;
				top: 0;
				background-color: #f51f24;
				color: #fff;
				font-size: .36rem;
				text-align: center;
				line-height: 2.4rem;
			}
		}
	}
	.cart-count{
		width: 100%;
		height: .9rem;
		position: fixed;
		left: 0;
		bottom: 1.3rem;
		padding-left: .2rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: .32rem;
		line-height: .9rem;
		background-color: #fff;
		z-index: 999;
		.check{
			display: flex;
			align-items: center;
			.checkbox{
				margin-right: .1rem;
			}
		}
		.total{
			margin-right: 1.2rem;
			em{
				color:@color;
				font-style: normal;
				font-weight: 600;
			}
		}
		.submit{
			width: 2.2rem;
			height: .9rem;
			line-height: .9rem;
			text-align: center;
			background-color: @color;
			color:#fff;
			font-weight: 500;
		}
	}
	.checkbox {
		appearance: none;
		-webkit-appearance: none;
		-moz-appearance: none;
		width: .32rem;
		height: .32rem;
		background: url(/images/checkbox.png) no-repeat;
		outline: none;
		background-size: contain;
		flex-basis: .32rem;
	}

	.checkbox:checked {
		background: url(/images/checkbox@selected.png) no-repeat left bottom;
		background-size: contain;
	}
</style>
