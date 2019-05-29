import Vue from 'vue';

import router from './router.js';

//导入 vue-resource
import VueResource from 'vue-resource';
//安装 vue-resource
Vue.use(VueResource);
//配置请求的根路径
Vue.http.options.root = 'http://192.168.31.39:8888';

import app from './App.vue';

//按需导入 mintui
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入mui
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';//引入额外的字体图标

//引入时间插件 moment
import moment from 'moment';
console.log(moment().toArray());
console.log(moment().month());
console.log(moment().format('YYYY-MM-DD'));
console.log(moment(1554048000000).day());

//定义全局的过滤器
Vue.filter('dateFormat',function(dataStr,pattern='YYYY-MM-DD HH:mm:ss'){
    return moment(dataStr).format(pattern);
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})