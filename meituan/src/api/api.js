/**
 * 
 * @authors dong (you@example.org)
 * @date    2016-12-26 11:27:02
 * @version $Id$
 */

import common from "../common/common.js";

export default{
	/* 获取首页类别数据 */
	getCategoryData:function(params,cb){
		const url = "home/getCategoryData";
		common.axiosGet(url,params,cb);
	},
	getBannerData:function(params,cb){
		const url = "home/getBannerData";
		common.axiosGet(url,params,cb);
	},
	getGuidData:function(params,cb){
		const url = "home/getGuidData";
		common.axiosGet(url,params,cb);
	},
	getDealData:function(params,cb){
		const url = "home/getDealData";
		common.axiosGet(url,params,cb);
	},
	/* 获取套餐详情数据 */
	getDealDetailInfo:function(params,cb){
		const url = "dealDetail/getDealDetailInfo";
		common.axiosGet(url,params,cb);
	},
	getDealDetailComments:function(params,cb){
		const url = "dealDetail/getDealDetailComments";
		common.axiosGet(url,params,cb);
	},
	getRecommendData:function(params,cb){
		const url = "dealDetail/getRecommendData";
		common.axiosGet(url,params,cb);
	},
	getAdvertisementData:function(params,cb){
		const url = "dealDetail/getAdvertisementData";
		common.axiosGet(url,params,cb);
	}
}

