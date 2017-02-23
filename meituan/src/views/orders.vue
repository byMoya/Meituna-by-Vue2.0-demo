<template>
	<div class="container">
		<!-- <H1 class="text-center">
			{{msg}}
			<br/>
			欢迎
		</H1> -->
		<com-header :headerParams="headerParams"></com-header>
		<mt-cell
			title="我的订单"
		  	to="//github.com"
		  	is-link
		  	value="全部订单">
		</mt-cell>
		<div class="list-tabbar">
		
			<mt-tab-item id="tab1">
				<router-link :to="{path:'/orders/ordersAccount'}">
					<i class="fa fa-credit-card"></i>
			    	<p>待付款</p>
		    	</router-link>
  			</mt-tab-item>
		
			
  			<mt-tab-item id="tab2">
  				<router-link :to="{path:'/orders/ordersAccount'}">
				    <i class="fa fa-ticket"></i>
				    <p>待使用</p>
			    </router-link>
  			</mt-tab-item>
  			<mt-tab-item id="tab3">
  				<router-link :to="{path:'/orders/ordersAccount'}">
				    <i class="fa fa-comments-o"></i>
				    <p>待评价</p>
			    </router-link>
  			</mt-tab-item>
  			<mt-tab-item id="tab4">
  				<router-link :to="{path:'/orders/ordersAccount'}">
				    <i class="fa fa-rmb"></i>
				    <p>退款/售后</p>
			    </router-link>
  			</mt-tab-item>
		</div>
	</div>
</template>

<script>
	import comHeader from "../components/headerPublic.vue";
	export default {
		data(){
			return {
				msg: '',
				headerParams:{
					title:"订单",
					hasBack:false,
					icons:[
						// {fa:'fa-cog',fn:function(){
						// 	alert("fa-cog");
						// }},
						// {fa:'fa-bell',fn:function(){
						// 	alert("fa-bell");
						// }},
					]
				},
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
