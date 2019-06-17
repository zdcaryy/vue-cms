<template>
  <div class="goodsdetail-container">
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <my-swipe :lunboList="lunboList" :isfull="false"></my-swipe>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">页眉</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="price">
            市场价：
            <del>￥{{goodsDetail.marked_price}}</del>&nbsp;&nbsp;
            销售价：
            <span class="sell-price">￥{{goodsDetail.sell_price}}</span>
          </div>
          <div class="shop-num">
            购买数量：
            <numbox></numbox>
          </div>
          <mt-button type="primary" size="small">立即购买</mt-button>
          <mt-button type="danger" size="small" @click="flag=!flag;">加入购物车</mt-button>
          <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter">
            <div class="ball" v-show="flag" ref="ball"></div>
          </transition>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-header">商品参数</div>
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <p>商品货号：{{goodsDetail.product_code}}</p>
          <p>库存情况：{{goodsDetail.num}}</p>
          <p>上架时间：{{goodsDetail.sell_time|dateFormat}}</p>
        </div>
      </div>
      <div class="mui-card-footer">
        <mt-button type="primary" plain size="large" @click="goGoodsDesc">图文介绍</mt-button>
        <mt-button type="danger" plain size="large" @click="goGoodsComment">商品评论</mt-button>
      </div>
    </div>
  </div>
</template>
<script>
//引入轮播图组件
import Swipe from "../subcomponents/swipe.vue";
//引入数组输入框组件
import Numbox from "../subcomponents/goodsdetail_numbox.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      lunboList: [],
      goodsDetail: {},
      flag: false
    };
  },
  methods: {
    //获取商品对应的轮播图
    getLunBoTu() {
      this.$http.get("goodslubotu/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.lunboList = res.body.data.map(item => {
            return { url: item };
          });
        }
      });
    },
    //获取商品详情
    getGoodsDetail() {
      this.$http.get("goodsdetail/" + this.id).then(res => {
        if (res.body.status == 0) {
          console.log(res.body.data);
          this.goodsDetail = res.body.data[0] ? res.body.data[0] : {};
        }
      });
    },
    //跳转到商品评论
    goGoodsComment() {
      this.$router.push({ name: "goodscomment", params: { id: this.id } });
    },
    //跳转到商品图文详情
    goGoodsDesc() {
      this.$router.push({ name: "goodsdesc", params: { id: this.id } });
    },
    //小球动画
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetWidth; //必须要，不然没有动画效果
      console.log(el);
      console.log(el.getBoundingClientRect());
      console.log(this.$refs.ball.getBoundingClientRect());
      var ballPosition=el.getBoundingClientRect();
      var badgePosition=document.getElementById('badge').getBoundingClientRect();
      xDist=badgePosition.left-ballPosition.left;
      yDist=badgePosition.top-ballPosition.top;
      el.style.transform = `translate(${xDist}px,${yDist}px)`;
      el.style.transition = "all 1s cubic-bezier(.19,-0.26,.83,.67)";
      done();
    },
    afterEnter(el) {
      this.flag = !this.flag;
    }
  },
  created() {
    this.getLunBoTu();
    this.getGoodsDetail();
  },
  components: {
    mySwipe: Swipe,
    Numbox
  }
};
</script>
<style lang="scss" scoped>
.goodsdetail-container {
  background: #eee;
  overflow: hidden;
  .mui-card {
    position: relative;
    overflow: visible;
  }
  .mui-card-content-inner {
    font-size: 12px;
    /deep/ p {
      font-size: 12px;
    }
    .price {
      margin-bottom: 15px;
      .sell-price {
        font-size: 14px;
        color: red;
      }
    }
    .shop-num {
      margin-bottom: 15px;
    }
    //小球
    .ball {
      width: 15px;
      height: 15px;
      border-radius: 50%;
      background: red;
      position: absolute;
      top: 62px;
      left: 130px;
      z-index: 99;
    }
  }
  .mui-card-footer {
    display: block;
    button {
      margin: 15px 0;
    }
  }
}
</style>
