<template>
<div class="box">
	<common-header></common-header>
	<common-search></common-search>
	<home-banner :swiperList="swiperList"></home-banner>
	<icon-nav :navList="navList"></icon-nav>
	<recommend :recommendList="recommendList"></recommend>
	<sales :salesList="salesList"></sales>
	<new-goods :newList="newList"></new-goods>
	<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="50">
	  <goods-list :goodsList="goodsList"></goods-list>
	</div>
	<common-footer></common-footer>
</div>
</template>
<script>
	import infiniteScroll from 'vue-infinite-scroll'
	import commonHeader from "../../components/Header.vue"
	import commonSearch from "../../components/Search.vue"
	import commonFooter from "../../components/Footer.vue"
	import homeBanner from "./Banner.vue"
	import iconNav from "./IconNav.vue"
	import recommend from "./Recommend.vue"
	import sales from "./Sales.vue"
	import newGoods from './newGoods.vue'
	import goodsList from './GoodList.vue'
	import { Storage } from "@/utils/Storage.js"
	
export default{
	directives: {infiniteScroll},
	components:{
		commonHeader,
		commonSearch,
		homeBanner,
		iconNav,
		recommend,
		sales,
		newGoods,
		goodsList,
		commonFooter
	},
	data(){
		return {
			swiperList: [],
			navList:[],
			recommendList:[],
			salesList:[],
			newList:[],
			goodsList:[],
			page:1, //为你推荐的页码
			count:8,//为你推荐每次获取的数量
			totalPage:0,
			busy:false
		}
	},
	async mounted() {
		this.$showLoading()
		await this.getSwiper()
		await this.getIconNav()
		await this.getRecommend()
		await this.getSales()
		await this.getNewGoods()
		// await this.getGoodList()
		this.$hideLoading()
	},
	methods:{
		async getSwiper(){
			const swiper=Storage.getItem("swiper")
			if(swiper){
				this.swiperList=swiper
			}else{
				const res=await this.axios.get('api/swiper?type=1')
				const swiperList=res.map(res=>res.img)
				this.swiperList=swiperList
				Storage.setItem("swiper",swiperList)
			}
			
		},
		async getIconNav(){
			const navList=Storage.getItem("navList")
			if(navList){
				this.navList=navList;
			}else{
				const navList=await this.axios.get('api/navigate?type=1')
				this.navList=navList
				Storage.setItem("navList",navList)
			}

		},
		async getRecommend(){
			const recommendList=Storage.getItem("recommendList")
			if(recommendList){
				this.recommendList=recommendList
			}else{
				const recommendList=await this.axios.get('api/goods/recommend?type=1')
				this.recommendList=recommendList
				Storage.setItem("recommendList",recommendList)
			}
		},
		async getSales(){
			const salesList=Storage.getItem("salesList")
			if(salesList){
				this.salesList=salesList
			}else{
				const salesList=await this.axios.get('api/goods/sales?type=1')
				this.salesList=salesList
				Storage.setItem("salesList",salesList)
			}
		},
		async getNewGoods(){
			const newList=Storage.getItem("newList")
			if(newList){
				this.newList=newList
			}else{
				const newList=await this.axios.get('api/goods/new?type=1')
				this.newList=newList
				Storage.setItem("newList",newList)
			}
		},
		async getGoodList(){
			const {goods,total}=await this.axios.get('api/goods_list?type=1',{
				params:{
					page:this.page,
					count:this.count
				} 
			})
			this.goodsList=this.goodsList.concat(goods)
			if(this.page===1){
				this.totalPage=Math.ceil(total/this.count)
			}
			this.page++
		},
		async loadMore(){
			this.busy=true;
			if(this.page<=this.totalPage||this.totalPage===0){
				await this.getGoodList()
				this.busy=false;
			}
		}
	}
	
}
</script>
<style lang="less">
@import url("~@/assets/global.less");
.box{
	padding-bottom: 0.9rem;
}
</style>