import Vue from 'vue';
// 1.3 导入全局样式
import './less/index.less';
// 导入 根组件
import App from './component/App.vue';

import VueRouter from "vue-router";

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'

// 1.1 导入第三方库默认样式
import Vue from 'Vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'normalize.css';





//启用vue插件
Vue.use(VueRouter);
Vue.use(ElementUI);
// 1.2 启动Vue插件
Vue.use(VueRouter);
Vue.use(Vuex);
Vue.use(ElementUI);
//导入路由配置
import routerConfig from './router/index.js';
//导入axios 因为它不是vue插件 使用使用不方便 所以受到加载到原型中
import axios from 'axios';
Vue.prototype.$http = axios;
axios.defaults.baseURL = 'http://157.122.54.189:9095'; //配置以后请求就会自动使用
Vue.prototype.$http = axios;
//导入api

new Vue({
    el: '#app',
    render: c => c(App),
    router: new VueRouter(routerConfig)
});