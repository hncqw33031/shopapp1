<template>
	<div class="container">
		<common-header :title="cName" :back="backUrl"></common-header>
		<div class="sort border-bottom">
			<div class="sort-item" :class="{active:sortField==='goods_id'}" @click="sortFn('goods_id')">综合</div>
			<div class="sort-item" :class="{active:sortField==='sale_num'}" @click="sortFn('sale_num')">最热</div>
			<div class="sort-item" :class="{active:sortField==='is_new'}" @click="sortFn('is_new')">新品</div>
			<div class="sort-item" :class="{active:sortField==='goods_price'}" @click="sortFn('goods_price')">
				价格
				<span class="iconfont icon-shangxia"></span>
			</div>
		</div> 
		<div v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="50">
		  <list :goodsList="goodsList"></list>
		</div>
	</div>
</template>
<script>
	import infiniteScroll from 'vue-infinite-scroll'
	import commonHeader from "../../components/Header.vue"
	import list from './list.vue'
	export default {
		directives: {infiniteScroll},
		props: {
			cid: Number,
			cName: String,
		},
		components: {
			commonHeader,
			list
		},
		data() {
			return {
				backUrl: "",
				sortField: "goods_id",
				goodsList: [],
				page: 1, //为你推荐的页码
				count: 8, //为你推荐每次获取的数量
				totalPage: 0,
				busy: false,
				scrollDistance: 50,
				pid:0,
				catId:0,
				sortType:""
			}
		},
		watch:{
			sortField(){
				
			}
		},
		beforeRouteEnter(to, from, next) {
			next(vm => {
				vm.backUrl = from.path;
			})
		},
		mounted(){
			this.catId=this.cid
			
		},
		methods: {
			sortFn(sortField){
				this.sortField=sortField
				this.reset()
				this.loadMore()
			},
			async getGoodList(){
				this.$showLoading()
				const {goods,total}=await this.axios.get('/api/goods_list?type=1',{
					params:{
						page:this.page,
						count:this.count,
						cat_id:this.cid,
						sortField:this.sortField,
						pid:this.pid,
						sortType:this.sortType
					} 
				})
				this.$hideLoading()
				this.goodsList=this.goodsList.concat(goods)
				if(this.page===1){
					this.totalPage=Math.ceil(total/this.count)
				}
				this.page++
			},
			reset(){
				this.goodsList=[]
				this.page=1
				this.totalPage=0
				if(this.sortField!=="goods_price"){
					this.sortType=""
				}else{
					if(this.sortType){
						this.sortType="desc"
					}else{
						this.sortType="asc"
					}
				}
			},
			async getCidByName(){
				if(this.cName!==""&&this.cid===0){
					if(this.pid>0||this.catId>0){
						return 
					}
					const res=await this.axios.get('api/category/cid',{params:{name:this.cName}})
					if(res.parent){
						this.pid=res.cat_id
					}else{
						this.catId=res.cat_id
					}
				}
			},
			async loadMore(){
				await this.getCidByName()
				this.busy=true;
				// console.log(this.page,this.totalPage);
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
	.container {
		.sort {
			width: 100%;
			height: .8rem;
			position: fixed;
			left: 0;
			top: .88rem;
			z-index: 9999;
			.layout-flex;
			// border-bottom: .06rem solid #eee;
			background-color: #fff;
			color: @color-6;
			.sort-item {
				font-size: .32rem;

				.iconfont {
					font-size: .28rem
				}

				&.active {
					color: @color;
				}
			}
		}
	}
</style>
