<template>
	<swiper ref="mySwiper" :options="swiperOptions" class="banner">
		<swiper-slide v-for="item of swiperList" :key="item">
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
		props:{
			swiperList:Array
		},
		components: {
			Swiper,
			SwiperSlide
		},
		data() {
			return {
				swiperOptions: {
					pagination: {
						el: '.swiper-pagination'
					},
					loop: true,
					autoplay: {
						delay: 2000
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
	.banner {
		margin-top: 1.76rem;

		img {
			width: 100%;
		}
	}
</style>
