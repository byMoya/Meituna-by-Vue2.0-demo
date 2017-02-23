/**
 * 
 * @authors dong (you@example.org)
 * @date    2016-12-20 15:55:09
 * @version $Id$
 */

/**
 * Created by linhaifeng on 2016/10/28.
 */
import Vue from 'vue';
import Vuex from 'vuex';
// import common from "./modules/common";
import home from "./modules/home";
import dealDetail from "./modules/dealDetail";

Vue.use(Vuex);


const store = new Vuex.Store({
    modules: {
    	// common:common,
    	home:home,
    	dealDetail:dealDetail
    }
});


export default store;
