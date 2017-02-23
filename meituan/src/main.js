/**
 * 
 * @authors dong (you@example.org)
 * @date    2016-12-16 15:54:36
 * @version $Id$
 */

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

/* 引入vue-router */
import routerConfig from './router/config';

/* 引入VUEX */
import store from './store/store';

/* 引入elemo mint-ui框架 */
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';

/* 自定义VUE组件 */
import defineFilter from "./common/filter.js";
import defineComponent from "./common/component.js";

/* mock模拟数据 */
import mock from "./lib/mock/mock.js";


/* 加载Vue模块 */
Vue.use(Mint);

/* 启动VUE APP */
new Vue({
  router: routerConfig,
  store:store,
  render: h => h(App)
}).$mount('#app');




