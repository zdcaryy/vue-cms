<template>
  <div class="app-container">
    <!-- 顶部header区域 -->
    <mt-header fixed title="vue项目"></mt-header>

    <!-- 中间路由router-view区域 -->
    <transition>
      <router-view></router-view>
    </transition>

    <!-- 底部tabbar区域 -->
    <nav class="mui-bar mui-bar-tab">
      <routerLink class="mui-tab-item-zdc" to="/home">
        <span class="mui-icon mui-icon-home"></span>
        <span class="mui-tab-label">首页</span>
      </routerLink>
      <routerLink class="mui-tab-item-zdc" to="/member">
        <span class="mui-icon mui-icon-contact"></span>
        <span class="mui-tab-label">会员</span>
      </routerLink>
      <routerLink class="mui-tab-item-zdc" to="/shopcar">
        <span class="mui-icon mui-icon-extra mui-icon-extra-cart">
          <span class="mui-badge" id="badge">12</span>
        </span>
        <span class="mui-tab-label">购物车</span>
      </routerLink>
      <routerLink class="mui-tab-item-zdc" to="/search">
        <span class="mui-icon mui-icon-search"></span>
        <span class="mui-tab-label">搜索</span>
      </routerLink>
    </nav>
  </div>
</template>
<style lang="scss" scoped>
.app-container {
  padding-top: 40px;
  padding-bottom: 50px;
  overflow-x: hidden;
}
.mint-header{
  z-index:99;
}

.v-enter {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}
.v-enter-to,
.v-leave {
  opacity: 1;
  transform: translateX(0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}

//为了解决图片分享页面中顶部滑动导航栏的js和tabbar类名的作用导致tabbar无法实现正常跳转
//自定义类名来取代 .mui-tab-item
//https://blog.csdn.net/sxs7970/article/details/88954037
.mui-bar-tab .mui-tab-item-zdc{
  display: table-cell;
  overflow: hidden;
  width: 1%;
  height: 50px;
  text-align: center;
  vertical-align: middle;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #929292;
}
.mui-bar-tab .mui-tab-item-zdc .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}
.mui-bar-tab .mui-tab-item-zdc .mui-icon~.mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
.mui-bar-tab .mui-tab-item-zdc.mui-active {
    color: #007aff;
}
</style>
