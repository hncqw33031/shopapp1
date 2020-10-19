<template>
<div>
	<common-header></common-header>
	<common-search></common-search>
	<home-banner></home-banner>
</div>
</template>
<script>
	import commonHeader from "../../components/Header.vue"
	import commonSearch from "../../components/Search.vue"
	import homeBanner from "./Banner.vue"
export default{
	components:{
		commonHeader,
		commonSearch,
		homeBanner
	}
}
</script>
<style lang="less">
@import url("~@/assets/global.less");

</style>