<template>
<div>
	<common-header></common-header>
	<common-search></common-search>
	<home-banner :swiperList="swiperList"></home-banner>
	<icon-nav :navList="navList"></icon-nav>
	<recommend :recommendList="recommendList"></recommend>
</div>
</template>
<script>
	import commonHeader from "../../components/Header.vue"
	import commonSearch from "../../components/Search.vue"
	import homeBanner from "./Banner.vue"
	import iconNav from "./IconNav.vue"
	import recommend from "./Recommend.vue"
export default{
	components:{
		commonHeader,
		commonSearch,
		homeBanner,
		iconNav,
		recommend
	},
	data(){
		return {
			swiperList: [],
			navList:[],
			recommendList:[]
		}
	},
	mounted() {
		this.getSwiper()
		this.getIconNav()
		this.getRecommend()
	},
	methods:{
		async getSwiper(){
			const res=await this.axios.get('api/swiper?type=1')
			this.swiperList=res.map(res=>res.img)
		},
		async getIconNav(){
			this.navList=await this.axios.get('api/navigate?type=1')
		},
		async getRecommend(){
			this.recommendList=await this.axios.get('api/goods/recommend?type=1')
			console.log(this.recommendList);
		}
	}
	
}
</script>
<style lang="less">
@import url("~@/assets/global.less");

</style>