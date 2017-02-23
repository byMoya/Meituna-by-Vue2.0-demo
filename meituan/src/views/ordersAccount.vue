<template>
	<div class="container">
		<!-- <H1 class="text-center">
			{{msg}}
			<br/>
			欢迎
		</H1> -->
		<com-header :headerParams="headerParams"></com-header>

		<mt-navbar v-model="navbarSelected">
		  	<mt-tab-item v-for="(item,idx) in navbarData" :id="item.val">{{item.text}}</mt-tab-item>
		</mt-navbar>

		<!-- /* 订单列表 */ -->
		<ul class="list margin-tm">
			<li v-for="item in ordersData">
				<div class="order-card border-b">
					<img class="order-card-img" v-lazy="item.src">
					<div class="order-card-content">
						<p class="font-blod">{{item.name}}</p>
						<p class="font-grey">订单号：{{item.numbers}}</p>
						<p class="font-grey">下单时间：￥{{item.time}}</p>
						<p class="font-grey">消费：￥{{item.allMoney}}</p>
						<p class="font-grey">
							实付：￥{{item.payMoney}}
							<span class="fr tag tag-orange">再来一单</span>
						</p>
					</div>
				</div>
			</li>
		</ul>

	</div>
</template>

<style lang="less" scoped>
	.list{
		background: #fff;
	}
	.order-card{
		display: flex;
		flex-direction:row;
		padding: .2rem;
		.tag{
			font-size: .24rem;
			line-height: .24rem;
		}
		.order-card-img{
			flex:0 0 auto;
			width: 1rem;
			height: 1rem;
			// border-radius: 100%;
		}
		.order-card-content{
			padding-left: .2rem;
			flex:1 1 auto;
			p{
				margin-bottom: .04rem;
			}
		}
	}
</style>

<script>
	import comHeader from "../components/headerPublic.vue";
	import common from "../common/common.js";

	export default {
		data(){
			return {
				msg: 'ordersAccount',
				headerParams:{
					title:"我的订单",
					hasBack:true,
					backFn:function(){
						this.$router.back();
					}.bind(this),
					icons:[
						{fa:'fa-cog',fn:function(){
							alert("fa-cog");
						}},
						{fa:'fa-bell',fn:function(){
							alert("fa-bell");
						}},
					]
				},
				navbarData:[
					{text:'全部',val:"1"},
					{text:'代付款',val:"2"},
					{text:'待使用',val:"3"},
					{text:'待评价',val:"4"},
					{text:'退款/售后',val:"5"}
				],
				methods:{
					getOrdersData:function(type){
						this.ordersData = [];
					}
				},
				navbarSelected:"1",
				ordersData:[
					{
						id:1,
						src:common.resourcePath("orders-1.jpg"),
						name:"海銀海記潮汕牛肉火鍋店（車陂分店）",
						numbers:"805665323",
						allMoney:"160.00",
						payMoney:"141.14",
						time:"2017-02-18 22:02:59"
					},{
						id:2,
						src:common.resourcePath("orders-1.jpg"),
						name:"海銀海記潮汕牛肉火鍋店（車陂分店）",
						numbers:"805665323",
						allMoney:"160.00",
						payMoney:"141.14",
						time:"2017-02-18 22:02:59"
					},{
						id:3,
						src:common.resourcePath("orders-1.jpg"),
						name:"海銀海記潮汕牛肉火鍋店（車陂分店）",
						numbers:"805665323",
						allMoney:"160.00",
						payMoney:"141.14",
						time:"2017-02-18 22:02:59"
					},{
						id:4,
						src:common.resourcePath("orders-1.jpg"),
						name:"海銀海記潮汕牛肉火鍋店（車陂分店）",
						numbers:"805665323",
						allMoney:"160.00",
						payMoney:"141.14",
						time:"2017-02-18 22:02:59"
					}
				]
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
