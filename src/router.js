import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//导入对应的路由组件
import HomeContainer from './components/tabbar/HomeContainer.vue';
import MemberContainer from './components/tabbar/MemberContainer.vue';
import SearchContainer from './components/tabbar/SearchContainer.vue';
import ShopCarContainer from './components/tabbar/ShopcarContainer.vue';
import NewsList from './components/news/NewsList.vue';
import NewsDetail from './components/news/NewsDetail.vue';
import PhotoList from './components/photos/PhotoList.vue';
//导入图片详情组件
import PhotoDetail from './components/photos/PhotoDetail.vue';


var router=new VueRouter({
    routes:[
        {path:'/',redirect:'/home'},
        {path:'/home',component:HomeContainer},
        {path:'/member',component:MemberContainer},
        {path:'/search',component:SearchContainer},
        {path:'/shopcar',component:ShopCarContainer},
        {path:'/home/newslist',component:NewsList},
        {path:'/home/newsdetail/:id',component:NewsDetail},
        {path:'/home/photolist',component:PhotoList},
        {path:'/home/photodetail/:id',component:PhotoDetail}
    ],
    linkActiveClass:'mui-active'//覆盖默认的路由高亮的类 link-active
})

export default router;