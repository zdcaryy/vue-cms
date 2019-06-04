<template>
  <div>
    <!-- 类别 -->
    <div
      class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted"
    >
      <div class="mui-scroll">
        <a
          :class="['mui-control-item',cate.id==0?'mui-active':'']"
          v-for="cate in cates"
          :key="cate.id"
          @click="getPhotos(cate.id)"
        >{{cate.cateName}}</a>
      </div>
    </div>
    <!-- 图片列表 -->
    <ul class="photo-list">
      <router-link v-for="photo in photos" :key="photo.id" :to="'/home/photodetail/'+photo.id" tag="li">
        <img v-lazy="photo.imgUrl">
        <div class="zhaiyao">
          <h4 class="zhaiyao-title">{{photo.title}}</h4>
          <p class="zhaiyao-content">{{photo.zhaiyao}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  data() {
    return {
      cates: [{ id: 0, cateName: "全部" }],
      photos: []
    };
  },
  created() {
    this.getCates();
    this.getPhotos(0);
  },
  mounted() {
    //只有mouted后，才能操作dom
    //初始化mui顶部滑动滚动条
    //这里还需要取消webpack的打包js的严格模式，否则会报错："transform-remove-strict-mode"
    mui(".mui-scroll-wrapper").scroll({
      deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  },
  methods: {
    getCates() {
      this.$http.get("photocates").then(res => {
        console.log("类别列表", res.body);
        if (res.body.status == 0) {
          this.cates = this.cates.concat(res.body.photoCates);
        }
      });
    },
    getPhotos(cateId) {
      this.$http.get("photos/" + cateId).then(res => {
        console.log("图片列表", res.body);
        if (res.body.status == 0) {
          this.photos = res.body.data;
        }
      });
    }
  }
};
</script>
<style lang="scss" scoped>
* {
  touch-action: pan-y;
}
.photo-list {
  list-style: none;
  margin: 0;
  padding: 10px 5px 0 5px;
  li {
    margin-bottom: 15px;
    box-shadow: 0 0 10px #999;
    text-align: center;
    background: #ccc;
    position:relative;
    img {
      width: 100%;
      vertical-align: top;
    }
    img[lazy="loading"] {
      width: 40px;
      height: 300px;
      margin: auto;
    }
    .zhaiyao {
      background:rgba(0,0,0,.5);
      text-align:left;
      position:absolute;
      bottom:0;
      width:100%;
      max-height:68px;
      padding:0 5px;
      overflow:hidden;
      h4 {
        font-size: 13px;
        color: #fff;
      }
      .zhaiyao-content {
        font-size: 12px;
        color: #fff;
        margin:0;
      }
    }
  }
}
</style>