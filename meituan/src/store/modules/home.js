/**
 * 
 * @authors dong (you@example.org)
 * @date    2016-12-20 16:02:01
 * @version $Id$
 */
import * as types from '../types';
import api from '../../api/api';

const state = {
	bannerData:[],
	categoryData:[],
	guidData:[],
	dealData:[]
};

const actions = {
	getCategoryData({commit},args){
		api.getCategoryData(args,function(result){
			commit(types.HOME_GET_CATEGORYDATA_SUCCESS,result)
		});
	},
	getBannerData({commit},args){
		api.getBannerData(args,function(result){
			commit(types.HOME_GET_BANNERDATA_SUCCESS,result);
		});
	},
	getGuidData({commit},args){
		api.getGuidData(args,function(result){
			commit(types.HOME_GET_GUIDDATA_SUCCESS,result);
		});
	},
	getDealData({commit},args){
		api.getDealData(args,function(result){
			commit(types.HOME_GET_DEALDATA_SUCCESS,result);
		});
	}
};

const mutations = {
	[types.HOME_GET_CATEGORYDATA_SUCCESS](state,result){
		state.categoryData = result.data;
	},
	[types.HOME_GET_BANNERDATA_SUCCESS](state,result){
		state.bannerData = result.data;
	},
	[types.HOME_GET_GUIDDATA_SUCCESS](state,result){
		state.guidData = result.data;
	},
	[types.HOME_GET_DEALDATA_SUCCESS](state,result){
		state.dealData = result.data;
	}
};

const getters = {
	categoryData:state=>state.categoryData,
	bannerData:state=>state.bannerData,
	guidData:state=>state.guidData,
	dealData:state=>state.dealData
};

export default {
    state,
    getters,
    actions,
    mutations
};