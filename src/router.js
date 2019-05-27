import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopCarContainer from './components/tabbar/ShopcarContainer.vue';


var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopCarContainer},
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮的类 link-active
})

export default router;