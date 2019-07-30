<template>
  <div>
    <div class="shopcar-list-container">
      <div class="mui-card" v-for="(item, index) in shopcarList" :key="item.id">
        <div class="mui-card-content">
          <div class="mui-card-content-inner">
            <mt-switch
              v-model="$store.getters.goodsSeletStatusObj[item.id]"
              @change="changeGoodsStatus(item.id,$store.getters.goodsSeletStatusObj[item.id])"
            ></mt-switch>
            <div class="goods-img">
              <img :src="item.imgUrl" />
            </div>
            <div class="goods-info">
              <h4>{{item.title}}</h4>
              <div class="goods-sub-info">
                <span class="price">￥{{item.new}}</span>
                <numbox
                  style="height:28px"
                  :goodsNum="$store.getters.shopcarObj[item.id]"
                  :goodsId="item.id"
                ></numbox>
                <a href="#" class="delete" @click.prevent="deleteOne(item.id,index)">删除</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mui-card">
      <div class="mui-card-content">
        <div class="mui-card-content-inner">
          <div class="jiesuan">
            <div class="jiesuan-info">
              <p>总计(不含运费)</p>
              <p>
                已勾选商品
                <span
                  class="goods-selected-num"
                >{{$store.getters.seletedGoodsNumAndPrice.total}}</span>
                件,总计
                <span
                  class="total-price"
                >￥{{$store.getters.seletedGoodsNumAndPrice.price}}</span>
              </p>
            </div>
            <mt-button type="danger" size="small">去结算</mt-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
//引入数字输入框组件
import Numbox from "../subcomponents/shopcar_numbox.vue";
export default {
  data() {
    return {
      shopcarList: []
    };
  },
  methods: {
    getShopcarList() {
      let goodsIdArr = [];
      this.$store.state.shopCar.map(item => {
        goodsIdArr.push(item.id);
      });
      if (goodsIdArr.length != 0) {
        this.$http.get("shopcarlist/" + goodsIdArr.join(",")).then(res => {
          if (res.body.status == 0) {
            if (res.body.status == 0) {
              this.shopcarList = res.body.data;
            }
          }
        });
      }
    },
    //删除购物车中的一个商品
    deleteOne(id, index) {
      this.shopcarList.splice(index, 1);
      this.$store.commit("delFromCar", id);
    },
    //改变购物车中的商品的选中状态
    changeGoodsStatus(id, status) {
      console.log(id, status);
      this.$store.commit("changeGoodsStatus", { id: id, status: status });
    }
  },
  created() {
    this.getShopcarList();
  },
  components: {
    Numbox
  }
};
</script>

<style lang="scss" scoped>
.shopcar-list-container {
  background: #eee;
  overflow: hidden;
  .mui-card-content-inner {
    display: flex;
    align-items: center;
    .goods-img {
      width: 64px;
      height: 64px;
      img {
        width: 100%;
      }
    }

    .goods-info {
      width: 195px;
      h4 {
        font-size: 13px;
      }
      .goods-sub-info {
        .price {
          color: red;
          font-weight: bold;
        }
        .delete {
          color: #26a2ff;
        }
      }
    }
  }
}
.jiesuan {
  display: flex;
  justify-content: space-between;
  align-items: center;
  .goods-selected-num,
  .total-price {
    color: red;
    font-weight: bolder;
  }
}
</style>
