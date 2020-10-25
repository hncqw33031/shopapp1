<template>
	<div>
		<common-header title="分类" :back="backUrl"></common-header>
		<common-search></common-search>
		<div class="content" ref="content">
			<cateory :content="category" class="content-left" @change="loadSubCategory"></cateory>
			<sub-cateory :content="subCategory" class="content-right"></sub-cateory>
		</div>
		<common-footer></common-footer>
	</div>
</template>
<script>
	import commonHeader from "../../components/Header.vue"
	import commonSearch from "../../components/Search.vue"
	import commonFooter from "../../components/Footer.vue"
	import Cateory   from './Category.vue'
	import SubCateory   from './SubCategory.vue'
export default{
	components:{
		commonHeader,
		commonSearch,
		commonFooter,
		Cateory,
		SubCateory
	},
	data(){
		return {
			backUrl:"",
			category:[],
			subCategory:[]
		}
	},
	beforeRouteEnter(to,from,next) {
		next(vm=>{
			vm.backUrl=from.path;
		})
	},
	mounted(){
		this.$refs.content.style.height=window.innerHeight-3.06*window.innerWidth/7.5+"px"
		this.getCategory()
	},
	methods:{
		//获取一级分类
		async getCategory(){
			const category=await this.axios.get('api/goods_category?type=1')
			this.category=category
			if(category.length>0){
				this.getSubCategory(category[0].cat_id)
			}
		},
		//获取二级分类
		async getSubCategory(catId){
			this.subCategory=await this.axios.get('api/goods_category?type=1&cat_id='+catId)
		},
		loadSubCategory(catId){
			this.getSubCategory(catId)
		}
	}
}
</script>
<style lang="less" scoped>
@import url("~@/assets/global.less");
.content{
	height: 100%;
	margin-top: 1.76rem;
	margin-bottom: 1.3rem;
	padding-right: .2em;
	.content-left{
		width: 2rem;
		height: 100%;
		float: left;
	}
	.content-right{
		overflow: hidden;
		height: 100%;
		background-color: #fff;
	}
}
</style>