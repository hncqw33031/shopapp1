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

	// import style (<= Swiper 5.x)
	import 'swiper/css/swiper.css'

	// import style (>= Swiper 6.x)
	// import 'swiper/swiper-bundle.css'


	export default {
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
				swiperList: [
					'//picasso.alicdn.com/imgextra/i3/382208/O1CNA1iyU1IP100ff4af62860b14de730004_!!382208-0-picassobanner.jpg',
					'https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg',
					'https://gw.alicdn.com/imgextra/i4/130/O1CN01rl6AUW1Cpa7QeEvPv_!!130-0-ppp-picassogw.jpg'
				]
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
