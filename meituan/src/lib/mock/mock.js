/**
 * 
 * @authors dong (you@example.org)
 * @date    2016-12-26 11:05:00
 * @version $Id$
 */
import common from "../../common/common.js"

var Mock = require("mockjs");

/* 首页 */

/* 首页-获取banner */
Mock.mock(/\/home\/getBannerData/,{
	code:200,
	data:[
		{src:common.resourcePath("home-2.jpg"),alt:"app下载"},
		{src:common.resourcePath("home-3.jpg"),alt:"app下载"},
		{src:common.resourcePath("home-4.jpg"),alt:"app下载"}
	]
});

/* 首页-获取类别 */
Mock.mock(/\/home\/getCategoryData/,{
	code:200,	//200成功
	data:[
		{
			pageId:"1",
			childrens:[
				{desc:"美食",icon:"fa fa-cutlery",bg:"#fd9d21",href:"javascript:;"},
				{desc:"电影",icon:"fa-film fa",bg:"#ff6767",href:"javascript:;"},
				{desc:"酒店",icon:"fa fa-hotel",bg:"#8a90fa",href:"javascript:;"},
				{desc:"休闲娱乐",icon:"fa-meetup fa",bg:"#fed030",href:"javascript:;"},
				{desc:"外卖",icon:"fa-shopping-cart fa",bg:"#fd9d21",href:"javascript:;"},
				{desc:"KTV",icon:"fa-microchip fa",bg:"#fed030",href:"javascript:;"},
				{desc:"周边游",icon:"fa-plane fa",bg:"#4dc6ee",href:"javascript:;"},
				{desc:"丽人",icon:"fa-ravelry fa",bg:"#ff80c2",href:"javascript:;"},
				{desc:"小吃",icon:"fa-birthday-cake fa",bg:"#fd9d21",href:"javascript:;"},
				{desc:"机票/火车票",icon:"fa-train fa",bg:"#599eec",href:"javascript:;"}
			]	
		},{
			pageId:"2",
			childrens:[
				{desc:"美食",icon:"fa fa-cutlery",bg:"#fd9d21",href:"javascript:;"},
				{desc:"电影",icon:"fa-film fa",bg:"#ff6767",href:"javascript:;"},
				{desc:"酒店",icon:"fa fa-hotel",bg:"#8a90fa",href:"javascript:;"},
				{desc:"休闲娱乐",icon:"fa-meetup fa",bg:"#fed030",href:"javascript:;"},
				{desc:"外卖",icon:"fa-shopping-cart fa",bg:"#fd9d21",href:"javascript:;"},
				{desc:"KTV",icon:"fa-microchip fa",bg:"#fed030",href:"javascript:;"},
				{desc:"周边游",icon:"fa-plane fa",bg:"#4dc6ee",href:"javascript:;"},
				{desc:"丽人",icon:"fa-ravelry fa",bg:"#ff80c2",href:"javascript:;"},
				{desc:"小吃",icon:"fa-birthday-cake fa",bg:"#fd9d21",href:"javascript:;"},
				{desc:"机票/火车票",icon:"fa-train fa",bg:"#599eec",href:"javascript:;"}
			]	
		}
	]
});

/* 首页-获取guid导购信息 */
Mock.mock(/\/home\/getGuidData/,{
	code:200,
	data:{
		guidSideBarData:[
			{
				src:common.resourcePath("home-2.png"),
				title:"我们约吧",
				desc:"恋人家人好朋友",
				href:"javascript:;"
			}
		],
		guidTopBarData:[
			{
				src:common.resourcePath("home-3.png"),
				title:"低价超值",
				desc:"十元惠生活",
				href:"javascript:;"
			}
		],
		guidScenseData:[
			{
				src:common.resourcePath("home-4.png"),
				title:"工作简餐",
				desc:"实惠方便选择多",
				href:"javascript:;"
			}
		],
		guidActivityData:[
			{
				title:"名店抢购",
				desc:"距离结束",
				href:"javascript:;",
				time:"1482468912292"
			}
		]
	}
});

/* 首页-获取dealData信息 */
Mock.mock(/\/home\/getDealData/,{
	code:200,
	data:[
		{
			href:"/deal-detail",
			src:common.resourcePath("common-2.png"),
			name:"正新鸡排",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:12310879
		},{
			href:"/deal-detail",
			src:common.resourcePath("common-2.png"),
			name:"正新鸡排",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:12310879
		},{
			href:"/deal-detail",
			src:common.resourcePath("common-2.png"),
			name:"正新鸡排",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:12310879
		},{
			href:"/deal-detail",
			src:common.resourcePath("common-2.png"),
			name:"正新鸡排",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:12310879
		},{
			href:"/deal-detail",
			src:common.resourcePath("common-2.png"),
			name:"正新鸡排",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:12310879
		},{
			href:"/deal-detail",
			src:common.resourcePath("common-2.png"),
			name:"正新鸡排",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:12310879
		},{
			href:"/deal-detail",
			src:common.resourcePath("common-2.png"),
			name:"正新鸡排",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:12310879
		},{
			href:"/deal-detail",
			src:common.resourcePath("common-2.png"),
			name:"正新鸡排",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:12310879
		}
	]
});

/* 获取套餐详情 */
Mock.mock(/\/dealDetail\/getDealDetailInfo/,{
	code:200,
	data:{
		src:common.resourcePath("deal-1.jpg"),
		tags:[
			{name:"回头客",num:95844},
			{name:"干净卫生",num:15622},
			{name:"上菜快",num:9260},
			{name:"约会圣地",num:2866},
			{name:"朋友聚餐",num:2799},
			{name:"现做现卖",num:1769},
			{name:"闺蜜聚会",num:849},
			{name:"深夜食棠",num:826},
			{name:"下午茶",num:654},
			{name:"工作餐",num:156}
		],
		notice: "【12月29日更新】【分店暂停接待】正新鸡排（达丰店）店有效期内无法接待团购用户，您可前往其他分店消费。给您带来不便，深表歉意。\n"+
			    "【12月29日更新】【分店暂停接待】正新鸡排（沙井店）、正新鸡排（九方店）、正新鸡排（黄石南洋店）店有效期内无法接待团购用户，您可前往其他分店消费。给您带来不便，深表歉意。\n"+
			    "【12月29日更新】【分店暂停接待】正新鸡排（深圳福田曼哈店）店有效期内无法接待团购用户，您可前往其他分店消费。给您带来不便，深表歉意。\n"+
			    "【12月30日更新】【分店暂停接待】正新鸡排（钟灵小区店）、正新鸡排（坤乐店）、正新鸡排（东莞利丰店）店有效期内无法接待团购用户，您可前往其他分店消费。给您带来不便，深表歉意。",
		scoreStar:4,
	}
});

/* 获取套餐评论 */
Mock.mock(/\/dealDetail\/getDealDetailComments/,{
	code:200,
	'data|0-4':[
		{
			img:common.resourcePath("user-2.png"),
			account:"lj_125212356565",
			name:"Moya的丑团",
			id:"lj_125212356565",
			star:4,
			time:"2016-12-25",
			text:"今天是西方的圣诞节，我和女朋友，来到了位于台州市路桥区南官大道138号（夜市东门、富仕广场对面）的正新鸡排（南官店），购买了五份正新鸡排尊享版套餐。今天晚上，客人真多!!!!!!!!!!!!",
			pics:[
				{src:common.resourcePath("deal-2.jpg")},
				{src:common.resourcePath("deal-3.jpg")},
				{src:common.resourcePath("deal-4.jpg")},
				{src:common.resourcePath("deal-5.jpg")},
				{src:common.resourcePath("deal-6.jpg")},
				{src:common.resourcePath("deal-7.jpg")},
				{src:common.resourcePath("deal-7.jpg")}
			]
		},{
			img:common.resourcePath("user-2.png"),
			account:"lj_125212356565",
			name:"Moya的丑团",
			id:"lj_125212356565",
			star:2,
			time:"2016-12-25",
			text:"今天是西方的圣诞节，我和女朋友，来到了位于台州市路桥区南官大道138号（夜市东门、富仕广场对面）的正新鸡排（南官店），购买了五份正新鸡排尊享版套餐。今天晚上，客人真多!!!!!!!!!!!!",
			pics:[
				{src:common.resourcePath("deal-2.jpg")},
				{src:common.resourcePath("deal-3.jpg")},
				{src:common.resourcePath("deal-7.jpg")},
				{src:common.resourcePath("deal-7.jpg")}
			]
		},{
			img:common.resourcePath("user-2.png"),
			account:"lj_125212356565",
			name:"Moya的丑团",
			id:"lj_125212356565",
			star:1,
			time:"2016-12-25",
			text:"今天是西方的圣诞节，我和女朋友，来到了位于台州市路桥区南官大道138号（夜市东门、富仕广场对面）的正新鸡排（南官店），购买了五份正新鸡排尊享版套餐。今天晚上，客人真多!!!!!!!!!!!!"
		},{
			img:common.resourcePath("user-2.png"),
			account:"lj_125212356565",
			name:"Moya的丑团",
			id:"lj_125212356565",
			star:0,
			time:"2016-12-25",
			text:"今天是西方的圣诞节，我和女朋友，来到了位于台州市路桥区南官大道138号（夜市东门、富仕广场对面）的正新鸡排（南官店），购买了五份正新鸡排尊享版套餐。今天晚上，客人真多!!!!!!!!!!!!"
		},{
			img:common.resourcePath("user-2.png"),
			account:"lj_125212356565",
			name:"Moya的丑团",
			id:"lj_125212356565",
			star:5,
			time:"2016-12-25",
			text:"今天是西方的圣诞节，我和女朋友，来到了位于台州市路桥区南官大道138号（夜市东门、富仕广场对面）的正新鸡排（南官店），购买了五份正新鸡排尊享版套餐。今天晚上，客人真多!!!!!!!!!!!!"
		}
	]
});

/* 获取套餐相关推荐 */
Mock.mock(/\/dealDetail\/getRecommendData/,{
	code:200,
	data:[
		{
			href:"/deal-detail",
			src:common.resourcePath("deal-8.jpg"),
			name:"弹丸之地",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:1231311
		},{
			href:"/deal-detail",
			src:common.resourcePath("deal-8.jpg"),
			name:"弹丸之地",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:12312312
		},{
			href:"/deal-detail",
			src:common.resourcePath("deal-8.jpg"),
			name:"弹丸之地",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:12313313
		},{
			href:"/deal-detail",
			src:common.resourcePath("deal-8.jpg"),
			name:"弹丸之地",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:4123133
		},{
			href:"/deal-detail",
			src:common.resourcePath("deal-8.jpg"),
			name:"弹丸之地",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:1231333
		}
	]
});

/* 获取套餐广告 */
Mock.mock(/\/dealDetail\/getAdvertisementData/,{
	code:200,
	data:[
		{
			href:"/deal-detail",
			src:common.resourcePath("deal-10.jpg"),
			name:"弹丸之地",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:123124213
		},{
			href:"/deal-detail",
			src:common.resourcePath("deal-11.jpg"),
			name:"弹丸之地",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:1231231233
		},{
			href:"/deal-detail",
			src:common.resourcePath("deal-12.jpg"),
			name:"弹丸之地",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:123213212
		},{
			href:"/deal-detail",
			src:common.resourcePath("deal-9.jpg"),
			name:"弹丸之地",
			area:"全国",
			title:"【官方】正新鸡排尊享版单人餐",
			price:"20",
			disPrice:"9.5",
			order:435345342
		}
	]
});