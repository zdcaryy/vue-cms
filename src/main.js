import Vue from 'vue';

import router from './router.js';

//导入 vue-resource
import VueResource from 'vue-resource';
//安装 vue-resource
Vue.use(VueResource);

import app from './App.vue';

//按需导入 mintui
import { Header, Swipe, SwipeItem } from 'mint-ui';
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

//引入mui
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';//引入额外的字体图标

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router
})