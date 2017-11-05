<template>
	<div class="container">
		<!-- <H1 class="text-center" @click="test">{{msg}}</H1> -->
		
		<!-- 头部 -->
		<com-header></com-header>
		
		<!-- 类别选择 -->
		<section class="banner">
			<mt-swipe :auto="3000">
			  	<mt-swipe-item v-for="item in bannerData">
					<div class="carousel">
						<a style="display: block;text-align: center;" href="javascript:;">
							<img :src="item.src" :alt="item.alt">
						</a>
					</div>
			  	</mt-swipe-item>
			</mt-swipe>
		</section>
		<div class="card category-swiper margin-bm border-b">
			<mt-swipe :auto="8000">
			  	<mt-swipe-item v-for="category in categoryData">
			  		<ul class="icon-list">
					    <li class="icon-item" v-for="item in category.childrens">
			                <a class="icon" style="display:block" :href="item.href">
				                <span class="icon-fa" :style="{background:item.bg}">
				                	<i :class="item.icon"></i>
				                </span>
					        	<span class="icon-desc">{{item.desc}}</span>
				        	</a>
					    </li>
					</ul>
			  	</mt-swipe-item>
			</mt-swipe>
		</div>

		<div class="guid flex-row flex-nowrap card margin-bm border-b">
			<!-- 左侧 -->
		  	<div class="text-center border-r guid-left">
		  		<a class="react inline-block" v-for="item in guidSideBarData" :href="item.href">
	                <span class="info">
	                    <p class="margin-bl"><strong class="font-green">{{item.title}}</strong></p>
	                    <p><small>{{item.desc}}</small></p>
	                </span>
	                <span class="imgbox" >
	                	<img :src="item.src" >
                	</span>
	            </a>
		  	</div>
		  	<!-- 右侧 -->
		  	<div class="flex-column flex-nowrap guid-right">
				<div class="text-center border-b" v-for="item in guidTopBarData">
					<a class="react inline-block" :href="item.href">
	                	<span class="info">
		                    <dl class="inline-block">
		                    	<dt class="margin-bl"><strong class="font-orange">{{item.title}}</strong></dt>
		                    	<dd><small>{{item.desc}}</small></dd>
		                    </dl>
	                    </span>
                		<span class="imgbox" >
		                	<img :src="item.src">
	                	</span>
		            </a>
				</div>
				<div class="flex-row flex-nowrap guid-scense">
					<div class="el-column text-center border-r" v-for="item in guidScenseData">
						<a class="react inline-block scense" :href="item.href">
			                <span class="info">
			                    <p class="margin-bm"><strong class="font-pink">{{item.title}}</strong></p>
			                    <p><small>{{item.desc}}</small></p>
			                </span>
			                <span class="imgbox" >
			                	<img :src="item.src" >
		                	</span>
			            </a>
					</div>
					<div class="el-column text-center" v-for="item in guidActivityData">
						<a class="react inline-block scense" :href="item.href">
			                <span class="info">
			                    <p class="margin-bm"><strong class="font-orange">{{item.title}}</strong></p>
			                    <p><small>{{item.desc}}</small></p>
			                </span>
			                <div>
			                	<timepiece :timer="item.time"></timepiece>
			                </div>
			            </a>
					</div>
				</div>
		  	</div>
		</div>
		
		<!-- 猜你稀饭 -->
		<div  class="card border-b margin-bm">
			<h3 class="border-b padding-m">猜你喜欢</h3>
			<ul class="list" v-if="dealData.length>0">
				<li v-for="item in dealData" class="padding-h">
					<router-link :to="{path:'/home/deal-detail/'+item.order,query:{orderId:item.order}}">
						<dealcard :dealData="item"></dealcard>
					</router-link>
				</li>
			</ul>
			<div v-else class="text-center padding-l"><small>暂无数据...</small></div>
		</div>

		<!-- 回到顶部按钮 -->
		<top-btn isshow="0"></top-btn>
	</div>
</template>

<script>
	import {headerSearch,dealcard,topBtn,timepiece} from "../common/component.js";
	import common from "../common/common.js";

	export default {
		name:"home",
		data(){
			return {
				msg: 'home',
				// bannerData:[],
				// categoryData:[],
				// guidSideBarData:[],
				// guidTopBarData:[],
				// guidScenseData:[],
				// guidActivityData:[],
				// dealData:[]
			}
		},
		created(){
			this.$store.dispatch("getCategoryData",{});
			this.$store.dispatch("getBannerData",{});
			this.$store.dispatch("getGuidData",{});
			this.$store.dispatch("getDealData",{});
		},
		computed:{
			categoryData(){return this.$store.getters.categoryData},
			bannerData(){return this.$store.getters.bannerData},
			guidActivityData(){return this.$store.getters.guidData.guidActivityData},
			guidScenseData(){return this.$store.getters.guidData.guidScenseData},
			guidSideBarData(){return this.$store.getters.guidData.guidSideBarData},
			guidTopBarData(){return this.$store.getters.guidData.guidTopBarData},
			dealData(){return this.$store.getters.dealData}
		},
	    methods:{

	    },
	    components:{
	    	comHeader:headerSearch,
	    	timepiece:timepiece,
	    	dealcard:dealcard,
	    	topBtn:topBtn
	    }
	};
</script>
