<template>
	<div>
		<detail-header :headerShow="headerShow" :opacity="headerOpacity" :scrollTab="scrollTab" @tab="changeTab"></detail-header>
		<div class="page" ref="page">
			<div>
				<div id="goods">
					<detail-gallery :gallery="gallery"></detail-gallery>
				</div>
				<div style="height: 200px;">商品信息</div>
				<div style="height: 500px;" id="comment">评论</div>
				<div style="height: 1800px;" id="detail">商品详情</div>
			</div>
		</div>
	</div>
</template>
<script>
	import DetailHeader from "./detailHeader.vue"
	import DetailGallery from "./detailGallery.vue"
	import BScroll from 'better-scroll'
export default{
	props:{
		id:Number
	},
	components:{
		DetailHeader,
		DetailGallery
	},
	mounted() {
		this.getGoods()
		this.initScroll()
	},
	data(){
		return {
			scrollTab:'goods',
			headerOpacity:0,
			headerShow:true,
			comment:{},
			gallery:[],
			scroll:null,
			scrollOptions:{
				startY:0,
				click:true,
				scrollX:false,
				scrollY:true,
				probeType:3,
				scrollBar:false
			}
		}
	},
	methods:{
		changeTab(tabName){
			this.scrollTab=tabName
			this.scroll.scrollToElement('#'+tabName,1000,0,-50)
		},
		initScroll(){
			this.$nextTick(()=>{
				if(!this.scroll){
					this.scroll=new BScroll(this.$refs.page,this.scrollOptions)
				}else{
					this.scroll.refresh()
				}
				this.scroll.on('scroll',position=>{
					const y=Math.abs(position.y)
					const headerOpacity=y/150
					this.headerOpacity=headerOpacity>1?1:headerOpacity
					if(y>50){
						this.headerShow=false
					}else{
						this.headerShow=true
					}
				})
				
			})
			
		},
		async getGoods(){
			const result=await this.axios.get(`/api/goods?goods_id=${this.id}`)
			if(Object.keys(result).indexOf('error_code')<0){
				this.comment={
					commentList:result.comment,
					commentTotal: 12
				}
				this.gallery=result.gallery
				this.goods=result.goods
			}else{
				this.$router.push('/goodsError')
			}
		}
	}
}
</script>
<style lang="less" scoped>
@import url("~@/assets/global.less");
.page{
	width: 100%;
	height:600px;
	overflow: hidden;
	background-color: #eee;
}
</style>
