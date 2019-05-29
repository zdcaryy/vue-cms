<template>
  <div>
    <!-- <h3>HomeContainer</h3> -->

    <!-- 轮播图区域   -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboData" :key="item.url">
        <a :href="item.link">
          <img :src="item.url">
        </a>
      </mt-swipe-item>
    </mt-swipe>

    <!-- 六宫格 -->
    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <routerLink to="/home/newslist">
            <!-- 路径中不能存在中文 -->
          <img src="../../images/icons/news.png">
          <div class="mui-media-body">新闻资讯</div>
        </routerLink>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/icons/picshare.png">
          <div class="mui-media-body">图片分享</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/icons/shop.png">
          <div class="mui-media-body">商品购买</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/icons/userback.png">
          <div class="mui-media-body">留言反馈</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/icons/video.png">
          <div class="mui-media-body">视频专区</div>
        </a>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <a href="#">
          <img src="../../images/icons/contactus.png">
          <div class="mui-media-body">联系我们</div>
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      lunboData: null
    };
  },
  methods: {
    getLunboData() {
      //已经在main.js中全局安装了vue-resource,所以这里可以使用
      //vue-resource这里不能加 /
      this.$http.get("lunboData").then(res => {
        console.log(res.body);
        if (res.body.status == 0) {
          this.lunboData = res.body.data;
        }
      });
    }
  },
  created() {
    this.getLunboData();
  }
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 250px;
  .mint-swipe-item {
    //& 符号交集选择器
    &:nth-child(1) {
      background: pink;
    }
    &:nth-child(2) {
      background: deepskyblue;
    }
    &:nth-child(3) {
      background: yellowgreen;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
}

.mui-grid-view.mui-grid-9 {
  background-color: #fff;
  .mui-table-view-cell .mui-media-body {
    font-size: 12px;
  }
}
.mui-grid-view.mui-grid-9 .mui-media {
  border: none;
}
</style>
