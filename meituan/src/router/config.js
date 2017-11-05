/**
 * 
 * @authors dong (you@example.org)
 * @date    2016-12-16 15:54:36
 * @version $Id$
 */

import Vue from 'vue';
import VueRouter from 'vue-router';
import common from "../common/common.js";

Vue.use(VueRouter);

let router = new VueRouter({
	mode:'history',				  //这样url就没有/#/XXX,而是常见的url形式
    linkActiveClass:'active',     //router-link的选中状态的class，也有一个默认的值
    history:true,
	routes:[
        // {
        //     path:'*',
        //     component(resolve) {
        //         require(['../views/welcome'], resolve);
        //     }
        // },
	    {
        	path:'/',
            component(resolve) {
                require(['../views/welcome'], resolve);
            }
        },{
            path:'/welcome',
            name:'welcome',
            component: function(resolve) {
                require(['../views/welcome'], resolve);
            }
        },{
        	path:'/home',
            name:'home',
            component: function(resolve) {
                require(['../views/home'], resolve);
            }
        }
        ,{
            path:'/user',
            name:'user',
            component: function(resolve) {
                require(['../views/user'], resolve);
            }
        },{
            path:'/*/deal-detail/*',
            name:'dealDetailFromHome',
            component: function(resolve) {
                require(['../views/dealDetail'], resolve);
            }
        },{
            path:'/test',
            name:'test',
            component: function(resolve) {
                require(['../views/test'], resolve);
            }
        },{
            path:'/orders',
            name:'orders',
            component: function(resolve) {
                require(['../views/orders'], resolve);
            }
        },{
            path:'/orders/ordersAccount',
            name:'ordersAccount',
            component: function(resolve) {
                require(['../views/ordersAccount'], resolve);
            }
        }
	]
});

router.beforeEach(function(_to,_from,_next){
	console.log('开始切换之前: ',_to,_from,_next);
    // if (transition.to.path.indexOf('/user') > -1) {
    //     router.go('signup');
    // } else {
    //     transition.next();
    // }
    _next();
});

router.afterEach(function(_to,_from,_next){

    common.routerObserver.notice(_to);
	console.log('成功浏览到: ', _to,_from,_next);
});

export default router;

