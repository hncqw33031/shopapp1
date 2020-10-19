<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
	document.documentElement.style.fontSize=window.innerWidth/7.5+"px";
	window.onResize=function(){
		document.documentElement.style.fontSize=window.innerWidth/7.5+"px"
	}
</script>
<style lang="less">
	@import  '~@/assets/normalize.css';
	@import  './assets/border.css';
	@import url("//at.alicdn.com/t/font_1486515_i5bbjn0oozp.css");

</style>
