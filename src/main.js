import Vue from 'vue';

import router from './router.js';

import app from './App.vue';

//按需导入 mintui
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);

//引入mui
import './lib/mui/css/mui.min.css';

var vm=new Vue({
    el:'#app',
    render:c=>c(app),
    router
})