/**
 * 
 * @authors dong (you@example.org)
 * @date    2016-12-20 16:02:01
 * @version $Id$
 */

import * as types from '../types';
import api from '../../api/api';

const state = {
	dealDetailInfo:{},
	dealDetailComments:[],
	dealDetailRecommendData:[],
	dealDetailAdvertisementData:[]
};

const actions = {
	getDealDetailInfo({commit},params){
		api.getDealDetailInfo(params,function(result){
			commit([types.DEALDETAIL_GET_DEALDETAILINFO_SUCCESS],result);
		});
    },
    getDealDetailComments({commit},params){
    	api.getDealDetailComments(params,function(result){
			commit([types.DEALDETAIL_GET_DEALDETAILCOMMENTS_SUCCESS],result);
    	});
    },
    getRecommendData({commit},params){
    	api.getRecommendData(params,function(result){
    		commit([types.DEALDETAIL_GET_DEALDETAILRECOMMENDDATA_SUCCESS],result);
    	});
    },
    getAdvertisementData({commit},params){
    	api.getAdvertisementData(params,function(result){
    		commit([types.DEALDETAIL_GET_DEALDETAILADDATA_SUCCESS],result);
    	});
    }
};

const mutations = {
	[types.DEALDETAIL_GET_DEALDETAILINFO_SUCCESS](state,result){
		state.dealDetailInfo = result.data;
	},
	[types.DEALDETAIL_GET_DEALDETAILCOMMENTS_SUCCESS](state,result){
		state.dealDetailComments = result.data;
	},
	[types.DEALDETAIL_GET_DEALDETAILRECOMMENDDATA_SUCCESS](state,result){
		state.dealDetailRecommendData = result.data;
	},
	[types.DEALDETAIL_GET_DEALDETAILADDATA_SUCCESS](state,result){
		state.dealDetailAdvertisementData = result.data;
	}
};

const getters = {
	dealDetailInfo:state=>state.dealDetailInfo,
	dealDetailComments:state=>state.dealDetailComments,
	dealDetailRecommendData:state=>state.dealDetailRecommendData,
	dealDetailAdvertisementData:state=>state.dealDetailAdvertisementData
};

export default {
    state,
    getters,
    actions,
    mutations
};