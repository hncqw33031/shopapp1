<template>
<transition name="fade">
	<div class="container" v-if="visible">
		<div class="modal">
			<div class="modal-title">
				{{title}}
			</div>
			<div class="modal-content">
				<span class="iconfont icon-chenggong"></span>{{content}}
			</div>
			<div class="modal-btn border-top">
				<div @click="cancelModal">{{btn.cancel}}</div>
				<div @click="confirmModal">{{btn.confirm}}</div>
			</div>
		</div>
	</div>
</transition>
</template>
<script>
export default{
	data(){
		return {
			title:"",
			content:"",
			btn:{
				confirm:"确定",
				cancel:"取消"
			},
			visible:false
		}
	},
	methods:{
		cancelModal(){
			this.visible=false
			const result={
				confirm:false,
				cancel:true
			}
			this.$emit("modal",result)
		},
		confirmModal(){
			this.visible=false
			const result={
				confirm:true,
				cancel:false
			}
			this.$emit("modal",result)
		}
	}
}
</script>
<style lang="less" scoped>
@import url("~@/assets/global.less");
.container{
	width: 100%;
	height: 100%;
	position: fixed;
	left: 0;
	right: 0;
	top: 0;
	bottom: 0;
	margin: auto;
	z-index: 9999;
	background-color: rgba(0,0,0,.2);
	.modal{
		width: 80%;
		height: 3rem;
		border: .06rem solid #aaa;
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
		z-index: 9999;
		display: flex;
		flex-direction: column;
		background-color: #fff;
		padding-bottom: .2rem;
		.modal-title{
			width: 100%;
			height: .6rem;
			background-color: #eee;
			text-align: center;
			line-height: .6rem;
			font-size: .26rem;
			color: @color-6;
		}
		.modal-content{
			flex-grow:1;
			display: flex;
			justify-content: center;
			align-items: center;
			font-size: .26rem;
			color: @color-3;
			.iconfont{
				margin-right: .2rem;
				color: #94be28;
				font-size: .8rem;
			}
		}
		.modal-btn{
			width: 100%;
			height: .6rem;
			display: flex;
			justify-content: center;
			align-items: center;
			div{
				width: 1.2rem;
				height: .44rem;
				border: .02rem solid @color-9;
				background-color: #eee;
				text-align: center;
				line-height: .44rem;
				margin: 0 .2rem;
			}
			div:active{
				background-color: @color;
				color: #fff;
			}
		}
	}
	
}
.fade-enter-active,.fade-leave-active{
	transition:opacity .5s;
}
.fade-enter,.fade-leave-to{
	opacity: 0;
}
</style>