<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script>
	document.documentElement.style.fontSize=window.innerWidth/7.5+"px";
	window.onresize=function(){
		document.documentElement.style.fontSize=window.innerWidth/7.5+"px"
	}
</script>
<style lang="less">
	@import  '~@/assets/normalize.css';
	@import  './assets/border.css';
	@import url("//at.alicdn.com/t/font_1486515_hfrl30vasmv.css");
	body{
		font-size: 0.16rem;
		background-color: #eee;
	}
	body,p,ul,ol{margin: 0;}
	ul,ol{padding: 0;}
	*{box-sizing: border-box;}
</style>
