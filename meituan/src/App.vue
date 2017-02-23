<template>
  <div class="pages">

    <!-- 旧的 -->
    <!-- <router-view keep-alive transition="left" transition-mode="right"></router-view> -->
    <!-- 新的 -->

    <transition>
		<keep-alive>
	    	<router-view></router-view>
		</keep-alive>
	</transition>

    <mt-tabbar :value="tabRouter">
	  	<mt-tab-item id="home">
	  		<a class="react" href="javascript:;" @click="navRouter($event,'/home')">
		  		<div class="item-fa">
		  			<i class="fa fa-home"></i>
		  		</div>
		    	首页
	    	</a>
	  	</mt-tab-item>
	  	<mt-tab-item id="map">
	  		<a class="react" href="javascript:;" @click="navRouter($event,'/welcome')">
		  		<div class="item-fa">
		    		<i class="fa fa-map"></i>
		    	</div>
		    	附近
		    </a>
	  	</mt-tab-item>
	  	<mt-tab-item id="shopping">
	  		<a class="react" href="javascript:;" @click="navRouter($event,'/welcome')">
		  		<div class="item-fa">
		    		<i class="fa fa-shopping-basket"></i>
		    	</div>
		    	诳一诳
	    	</a>
	  	</mt-tab-item>
	  	<mt-tab-item id="orders">
	  		<a class="react" href="javascript:;" @click="navRouter($event,'/orders')">
		  		<div class="item-fa">
		    		<i class="fa fa-tasks"></i>
		    	</div>
		    	订单
	    	</a>
	  	</mt-tab-item>
	  	<mt-tab-item id="user">
	  		<a class="react" href="javascript:;" @click="navRouter($event,'/user')">
		  		<div class="item-fa">
		    		<i class="fa fa-user-circle-o"></i>
		    	</div>
		    	我的
		    </a>
	  	</mt-tab-item>
	</mt-tabbar>
  </div>
</template>

<style lang="less">
	@import './css/app.less';
</style>

<script>
	// import comHeader from "./components/header.vue";

	export default{
		data(){
			return{

			}
		},
		methods:{
			navRouter(e,path){
				this.$router.replace(path);
				// window.location.href = path;
			}
		},
		computed:{
			tabRouter(){
				let _tabRouter = this.$route.name || "";
				let routPath = this.$route.path || "";
				// console.log(routPath);
				if(routPath.indexOf("home")>-1){
					_tabRouter = "home";
				}else if(routPath.indexOf("user")>-1){
					_tabRouter = "user";
				}else if(routPath.indexOf("orders")>-1){
					_tabRouter = "orders";
				}
				return _tabRouter;
			}
		}
	}
</script>


