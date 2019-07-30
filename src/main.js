import Vue from 'vue';

import router from './router.js';

//导入 vue-resource
import VueResource from 'vue-resource';
//安装 vue-resource
Vue.use(VueResource);
//配置请求的根路径
Vue.http.options.root = 'http://192.168.31.39:8888';
//设置 post 请求使用表单格式提交数据
Vue.http.options.emulateJSON = true;

import app from './App.vue';

//按需导入 mintui
// import { Header, Swipe, SwipeItem,Button,Lazyload} from 'mint-ui';
// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
// Vue.use(Lazyload);//懒加载,这样按需导入这个lazyload没有效果

//为了使用lazyload，不使用按需导入的方式
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);

//引入mui
import './lib/mui/css/mui.min.css';
import './lib/mui/css/icons-extra.css';//引入额外的字体图标

//引入时间插件 moment
import moment from 'moment';
console.log(moment().toArray());
console.log(moment().month());
console.log(moment().format('YYYY-MM-DD'));
console.log(moment(1554048000000).day());

//引入vue中的图片预览插件，vue2+才能使用
import VuePreview from 'vue2-preview';
Vue.use(VuePreview);

//引入vuex
import Vuex from 'vuex';
Vue.use(Vuex);//安装vuex
var store = new Vuex.Store({
    state: {
        shopCar: localStorage.getItem('shopCar') ? JSON.parse(localStorage.getItem('shopCar')) : [],//购物车中加入的商品对象
    },
    mutations: {
        //加入购物车
        addToShopCar(state, goodsObj) {
            console.log(goodsObj);
            var flag = false;//判断购物车中是否已经存在此商品，如果存在只需要添加数量就行了，如果不存在，则需要将该商品对象放入 shopCar 数组中
            state.shopCar.some(item => {
                console.log(item);
                if (item.id === goodsObj.id) {
                    flag = true;
                    item.selectedCount += parseInt(goodsObj.selectedCount);
                    return true;//如果找到就返回 true 这样数组后面的元素就不需要继续遍历了，提前结束遍历
                }
            })
            if (!flag) {
                state.shopCar.push(goodsObj);
            }

            //存到本地存储中
            localStorage.setItem('shopCar', JSON.stringify(state.shopCar));
        },
        //操作购物车中的数据时，并更新vuex和本地存储的数据
        updateShopCar(state, goodsObj) {
            state.shopCar.some(item => {
                if (item.id === goodsObj.id) {
                    item.selectedCount = parseInt(goodsObj.selectedCount);
                    return true;
                }
            })
            localStorage.setItem('shopCar', JSON.stringify(state.shopCar));
        },
        //删除购物车中的一件商品
        delFromCar(state, id) {
            state.shopCar.some((item, index) => {
                if (item.id === id) {
                    state.shopCar.splice(index, 1);
                    return true;
                }
            })
            localStorage.setItem('shopCar', JSON.stringify(state.shopCar));
        },
        //改变购物车中商品的选中状态
        changeGoodsStatus(state, goodsObj) {
            state.shopCar.some(item => {
                if (item.id === goodsObj.id) {
                    console.log(goodsObj.status);
                    item.selectStatus = goodsObj.status;
                    return true;
                }   
            })
            localStorage.setItem('shopCar', JSON.stringify(state.shopCar));
        }
    },
    getters: {
        //相当于计算属性
        getAllGoodsCount(state) {
            var c = 0;
            state.shopCar.forEach(item => {
                c += item.selectedCount;
            });
            return c;
        },
        //创建一个商品id为key，该商品选择的数量为value的对象
        shopcarObj(state) {
            var o = {};
            state.shopCar.forEach(item => {
                o[item.id] = item.selectedCount;
            });
            return o;
        },
        //创建一个商品id为key，是否选中为value的对象
        goodsSeletStatusObj(state) {
            var o = {};
            state.shopCar.forEach(item => {
                o[item.id] = item.selectStatus;
            });
            return o;
        },
        //购物车中已经选择的商品
        seletedGoodsNumAndPrice(state){
            var o={total:0,price:0};
            state.shopCar.map(item=>{
                if(item.selectStatus){
                    o.total+=item.selectedCount;
                    o.price+=item.selectedCount*item.price;
                }
            })
            return o;
        }
    }
})

//定义全局的过滤器
Vue.filter('dateFormat', function (dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern);
})

var vm = new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})