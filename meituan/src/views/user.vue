<template>
	<div class="container">
		<!-- <mt-header fixed title="" class="mint-header">
		  	<mt-button slot="right"><i class="fa fa-cog"></i></mt-button>
		  	<mt-button slot="right"><i class="fa fa-bell"></i></mt-button>
		</mt-header> -->
		<!-- <h1 class="text-center">{{msg}}</h1> -->
		<com-header :headerParams="headerParams"></com-header>

		<!-- 用户信息 -->
		<div class="user-info flex-row flex-nowrap padding-h margin-bm">
			<div class="user-photo">
				<img class="user-photo-img" :src="userInfo.img" alt="">
			</div>
			<dl class="user-text">
				<dt class="user-account">{{userInfo.account}}</dt>
				<dd class="user-name">{{userInfo.name}}</dd>
			</dl>
		</div>
		
		<!-- 用户功能项 -->
		<div class="page-cell margin-bm">
			<mt-cell title="我的钱包" to="//github.com" is-link>
				<i slot="icon" class="fa fa-suitcase" style="color: #ff9501;"></i>
			</mt-cell>
			<mt-cell title="余额" to="/test" is-link>
				<i slot="icon" class="fa fa-cny" style="color: #ff9501;"></i>
			</mt-cell>
			<mt-cell title="抵用券">
				<i slot="icon" class="fa fa-money" style="color: #8b92fd;"></i>
			</mt-cell>
			<mt-cell title="会员卡">
				<i slot="icon" class="fa fa-vcard" style="color: #8b92fd;"></i>
			</mt-cell>
		</div>

		<div class="page-cell margin-bm">
			<mt-cell title="好友去哪">
				<i slot="icon" class="fa fa-user-circle" style="color: #66b6ff;"></i>
			</mt-cell>
			<mt-cell title="我的评价">
				<i slot="icon" class="fa fa-commenting" style="color: #66b6ff;"></i>
			</mt-cell>
			<mt-cell title="我的收藏">
				<i slot="icon" class="fa fa-star" style="color: #ff4f73;"></i>
			</mt-cell>
			<mt-cell title="会员中心">
				<i slot="icon" class="fa fa-users" style="color: #ff4f73;"></i>
			</mt-cell>
			<mt-cell title="积分商城">
				<i slot="icon" class="fa fa-shopping-cart" style="color: #ff4f73;"></i>
			</mt-cell>
		</div>

		<div class="page-cell margin-bm">
			<mt-cell title="客服中心">
				<i slot="icon" class="fa fa-phone" style="color: #ffe400;"></i>
			</mt-cell>
			<mt-cell title="关于美团">
				<i slot="icon" class="fa fa-wordpress" style="color: #ffe400;"></i>
			</mt-cell>
		</div>

	</div>
</template>

<script>
	import comHeader from "../components/headerPublic.vue";
	import common from "../common/common.js";
	export default {
		data(){
			return {
				msg: '用户中心',
				headerParams:{
					title:"",
					hasBack:false,
					isGreen:true,
					icons:[
						{fa:'fa-cog',fn:function(){
							alert("fa-cog");
						}},
						{fa:'fa-bell',fn:function(){
							alert("fa-bell");
						}},
					]
				},
				userInfo:{
					img:common.resourcePath("user-1.png"),
					account:"lj_125212356565",
					name:"Moya的丑团",
					id:""
				}
			}
		},
		/* 页面渲染时调用 */
		created(){
		},
		/* 激活keep-alive时调用 */
		activated(){
		},
		/* 停止keep-alive时调用 */
		deactivated(){
			
		},
	    methods:{
	    },
	    components:{
	    	comHeader:comHeader
	    }
	};
</script>
