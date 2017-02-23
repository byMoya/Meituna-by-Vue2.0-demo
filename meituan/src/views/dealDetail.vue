<template>
	<div class="container">
		<!-- <H1 class="text-center">
			{{msg}}:{{orderId}}
			<br/>
			欢迎
		</H1> -->
		<!-- <mt-header fixed title="套餐详情" class="mint-header-gray">
	    	<mt-button icon="back" slot="left" @click="toBack"></mt-button>
		  	<mt-button slot="right"><i class="fa fa-cog"></i></mt-button>
		  	<mt-button slot="right"><i class="fa fa-bell"></i></mt-button>
		</mt-header> -->
		<com-header :headerParams="headerParams"></com-header>

		<div class="poster">
			<div>
				<img :src="dealInfo.src" alt="" class="poster-img">
			</div>
			<div class="poster-text">
				<h3>正新鸡排</h3>
				<small class="text-block">[全国]【官方】正新鸡排尊享版单人餐</small>
			</div>
			<div class="poster-text-bg"></div>
		</div>
		<mt-cell class="padding-v">
		  	<span slot="title">
		  		<small class="font-reseda font-S">￥</small>
		  		<strong class="font-reseda" style="font-size: .5rem;">9.5</strong>
		  		&ensp;
		  		<small class="font-S">门市价￥20</small>
		  	</span>
		  	<mt-button size="normal" type="danger">立即抢购</mt-button>
		</mt-cell>
		<mt-cell class="padding-v margin-bm">
		  	<span slot="title">
				<ul>
					<li class="font-green">
						<i class="fa fa-check-square-o font-S margin-none"></i>
						<small class="font-S">随时退</small>
					</li>
					<li class="font-green">
						<i class="fa fa-check-square-o font-S margin-none"></i>
						<small class="font-S">过期自动退</small>
					</li>
				</ul>
		  	</span>
		  	<span>已售12302</span>
		</mt-cell>

		<!-- 评分 -->
		<mt-cell class="padding-v">
			<div slot="title">
				<star-range :data-options="starOptions"></star-range>
			</div>
			<!-- <p>{{starOptions.val}}</p> -->
			<router-link :to="{path:'/'}">
				<span>1573835人评价&emsp;</span>
				<i class="fa fa-angle-right fr"></i>
			</router-link>
		</mt-cell>

		<!-- 标签 -->
		<mt-cell class="margin-bm">
			<div slot="title">
				<div class="deal-detail-tags">
					<span class="tag" :class="{'tag-orange':item.num>1000}" v-for="item in dealInfo.tags">
						{{item.name}}&ensp;{{item.num}}
					</span>
				</div>
			</div>
		</mt-cell>
		
		<!-- 最新通知 -->
		<mt-cell class="margin-bm">
			<div slot="title">
				<p class="border-b padding-v">最新通知</p>
				<div class="deal-detail-notice font-orange padding-v">
					{{dealInfo.notice}}
				</div>
			</div>
		</mt-cell>

		<!-- 商家信息 -->
		<div class="card margin-bm">
			<p class="border-b padding-m">商家信息</p>
			<mt-cell class="deal-detail-shop">
				<div slot="title" class="padding-v">
					<div class="border-r">
						<p class="shop-name">正新鸡排</p>
						<p class="single-line">棠下好又多店/棠下牌坊好又多超市首层</p>
						<p>
							<span><i class="fa fa-map-marker"></i>0m</span>
							<span class="font-orange">离我最近</span>
						</p>
					</div>
				</div>
				<span class="shop-phone padding-l">
					<a class="react" href="tel:13413825200">
						<i class="fa fa-phone font-reseda"></i>
					</a>
				</span>
			</mt-cell>
			<p class="border-b padding-m">
				<router-link :to="{path:'/'}">
					<span class="font-reseda">查看全部39家分店</span>
					<i class="fa fa-angle-right fr"></i>
				</router-link>
			</p>
		</div>

		<!-- 套餐详情 -->
		<div class="card margin-bm">
			<p class="border-b padding-m">套餐</p>
			<div  class="padding-h border-b">
				<table class="deal-detail-menu">
					<tbody>
						<tr>
							<td colspan="2">正新鸡排</td>
							<td>
								<span>1份</span>
								<span class="fr">￥15</span>
							</td>
						</tr>
						<tr>
							<td colspan="2">酸梅汁(赠送)</td>
							<td>
								<span>1份</span>
								<span class="fr">￥5</span>
							</td>
						</tr>
					</tbody>
				</table>
			</div>
			<ul class="padding-m ul-list border-b">
				<li>免费提供餐巾纸</li>
				<li>1.本套餐的饮品部分属于赠品，购买或者消费前请咨询店里工作人员是否赠送，部分店铺不送饮品望请见谅。</li>
				<li>2.因各地门店套餐价格略有差异，请以本券实际适用门店为准，敬请谅解。</li>
			</ul>
			<p class="border-b padding-m">
				<router-link :to="{path:'/'}">
					<span class="font-reseda">查看图文详情</span>
					<i class="fa fa-angle-right fr"></i>
				</router-link>
			</p>
		</div>

		<!-- 购买须知 -->
		<div class="card margin-bm padding-bm">
			<p class="border-b padding-m">购买须知</p>
			<div class="padding-h">
				<p class="font-orange padding-v">有效期</p>
				<ul class="padding-h ul-list">
					<li>2015.11.10 至 2017.1.28（周末、法定节假日通用）</li>
				</ul>
			</div>
			<div class="padding-h">
				<p class="font-orange padding-v">使用时间</p>
				<ul class="padding-h ul-list">
					<li>10:00-22:00,部分店铺看实际营业时间</li>
				</ul>
			</div>
			<div class="padding-h">
				<p class="font-orange padding-v">使用规则</p>
				<ul class="padding-h ul-list">
					<li>无需预约，消费高峰时可能需要等位</li>
				</ul>
			</div>
		</div>

		<!-- 用户评价 -->
		<mt-cell class="">
			<div slot="title">
				<star-range :data-options="starOptionsUser"></star-range>
			</div>
			<router-link :to="{path:'/'}">
				<span>1573835人评价&emsp;</span>
				<i class="fa fa-angle-right fr"></i>
			</router-link>
		</mt-cell>
		<div class="card margin-bm">
			<div class="comment-card border-b padding-bm" v-for="item in comments">
				<div class="user-info flex-row flex-nowrap padding-h">
					<div class="user-photo">
						<img class="user-photo-img" :src="item.img" alt="">
					</div>
					<dl class="user-text">
						<dt class="user-account">{{item.account}}</dt>
						<dd>
							<star-range :data-options="{val:item.star}"></star-range>
							<span>&ensp;{{item.time}}</span>
						</dd>
					</dl>
				</div>
				<div class="padding-h article">
                	{{item.text}}
				</div>
				<div class="pics-container padding-m margin-tm" v-if="item.pics && item.pics.length>0">
					<span class="pic" v-for="pic in item.pics">
						<img class="pic-img" :src="pic.src" alt="">
					</span>
				</div>
			</div>
			<p class="border-b padding-m">
				<router-link :to="{path:'/'}">
					<span class="font-reseda">查看全部评论</span>
					<i class="fa fa-angle-right fr"></i>
				</router-link>
			</p>
		</div>

		<!-- 相关推荐 -->
		<div class="card margin-bm" v-if="recommendData.length>0">
			<p class="border-b padding-m">相关推荐</p>
			<ul class="list">
				<li v-for="(item,idx) in recommendData" class="padding-h" @click="toDealDetail(item)">
					<!-- <router-link :to="{path:'/home/deal-detail/'+item.order,query:{orderId:item.order}}"> -->
						<dealcard :dealData="item"></dealcard>
					<!-- </router-link> -->
				</li>
			</ul>
			<!-- <p class="border-b padding-m text-center">
				<span>其他6个推荐</span>
				<i class="fa fa-angle-down"></i>
			</p> -->
		</div>

		<!-- 看了本套餐的用户还看了 -->
		<div class="card margin-bm" v-if="advertisementData.length>0">
			<p class="border-b padding-m">
				看了本套餐的用户还看了
				<span class="fr">广告</span>
			</p>
			<ul class="list">
				 <!-- @click="toDealDetail(item)" -->
				<li v-for="item in advertisementData" class="padding-h" @click="toDealDetail(item)">
					<!-- <router-link :to="{path:'/home/deal-detail/'+item.order,query:{orderId:item.order}}"> -->
						<dealcard :dealData="item"></dealcard>
					<!-- </router-link> -->
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	import comHeader from "../components/headerPublic.vue";
	import common from "../common/common.js";

	function initStoreDispatch(){
		this.$store.dispatch("getDealDetailInfo",this.$route.query);
		this.$store.dispatch("getDealDetailComments",this.$route.query);
		this.$store.dispatch("getRecommendData",this.$route.query);
		this.$store.dispatch("getAdvertisementData",this.$route.query);
	}

	export default {
		data(){
			return {
				msg: '团购详情',
				headerParams:{
					title:"套餐详情",
					hasBack:true,
					backFn:function(){
						this.$router.back();
						initStoreDispatch.apply(this);
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
				// dealInfo:{},
				starOptions:{},
				starOptionsUser:{},
				// comments:[],
				// recommendData:[],
				// advertisementData:[]
			}
		},
		/* 页面渲染时调用 */
		created(){
			console.log('created');
		},
		/* 激活keep-alive时调用 */
		activated(){
			console.log("activated");
			console.log(this.$route.query);
			initStoreDispatch.apply(this);
		},
		/* 停止keep-alive时调用 */
		deactivated(){
			console.log('deactivated');
		},
	    methods:{
	    	toDealDetail(item){
	    		console.log(item);

	    		this.$router.push("/home/deal-detail/"+item.order+"?orderId="+item.order);
	    		initStoreDispatch.apply(this);

	    		// this.$router.go("/home/deal-detail/"+item.order+"?orderId="+item.order);
	    		// this.$router.go(0);
	    		// window.location.href = "/home/deal-detail/"+item.order+"?orderId="+item.order;
	    	}
	    },
	    computed:{
	    	orderId(){
	    		return this.$route.query.orderId
	    	},
	    	dealInfo(){
	    		this.starOptions = {
					val:this.$store.getters.dealDetailInfo.scoreStar,
					max:5,
					edit:true
	    		};
	    		this.starOptionsUser = {
					val:this.$store.getters.dealDetailInfo.scoreStar,
					max:5,
					edit:true
	    		};
	    		return this.$store.getters.dealDetailInfo;
	    	},
	    	comments(){
	    		return this.$store.getters.dealDetailComments;
	    	},
	    	recommendData(){
	    		return this.$store.getters.dealDetailRecommendData;
	    	},
	    	advertisementData(){
	    		return this.$store.getters.dealDetailAdvertisementData;
	    	}
	    },
	    components:{
	    	comHeader:comHeader
	    }
	};
</script>
