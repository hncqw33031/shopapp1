<template>
	<swiper ref="mySwiper" :options="swiperOptions" class="banner">
		<swiper-slide v-for="item of gallery" :key="item" class="swiper-container">
			<img :src="item" alt="">
		</swiper-slide>
		<div class="swiper-pagination" slot="pagination"></div>
	</swiper>
</template>
<script>
	import {
		Swiper,
		SwiperSlide
	} from 'vue-awesome-swiper'
	import 'swiper/css/swiper.css'
	export default {
		props: {
			gallery: Array
		},
		components: {
			Swiper,
			SwiperSlide
		},
		data() {
			return {
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination',
						type:"fraction"
					},
					loop: true,
					autoplay: {
						delay: 4000
					},

					// Some Swiper option/callback...
				},
			}
		}
	}
</script>
<style>
	.swiper-pagination-bullet-active {
		background-color: #fff;
	}
</style>
<style lang="less" scoped>
	@import url("~@/assets/global.less");
	.banner{
		.swiper-container{
			width: 100%;
			height: 0;
			padding-bottom: 100%;
			overflow: hidden;
			img{
				width: 100%;
			}
		}
	}
	/deep/ .swiper-pagination-fraction{
		width: .8rem;
		height: .4rem;
		background-color: red;
		display: flex;
		justify-content: center;
		align-items: center;
		border-radius: 999px;
		background-color: rgba(0,0,0,.4);
		font-size: .24rem;
		color: #fff;
		left: calc(100% - 1rem);
	}
</style>
