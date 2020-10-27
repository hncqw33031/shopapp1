<template>
	<transition name="fade">
	<div class="loading-container" v-if="show">
		<div class="mask" v-if="mask"></div>
		<img src="/images/loading-svg/loading-bars.svg" alt="" class="loading-img">
	</div>
	</transition>
</template>

<script>
	export default{
		data(){
			return {
				show:false,
				mask:false
			}
		}
	}
</script>

<style lang="less" scoped>
	.loading-container{
		position: fixed;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		z-index: 9999;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,.5);
		img{
			width: 100%;
			position: absolute;
			left: 0;
			right: 0;
			bottom: 0;
			top: 0;
			margin: auto;
		}
	}
	.fade-enter-active,.fade-leave-active{
		transition:opacity .5s;
	}
	.fade-enter,.fade-leave-to{
		opacity: 0;
	}
</style>
