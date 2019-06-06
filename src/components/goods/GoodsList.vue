<template>
  <div class="goods-list">
    <div class="goods-item" v-for="item in goodsList" :key="item.id" @click="goDetail(item.id)">
      <img :src="item.imgUrl">
      <h4 class="title">{{item.title}}</h4>
      <div class="info">
        <div class="price">
          <span class="new">￥{{item.new}}</span>
          <span class="old">￥{{item.old}}</span>
        </div>
        <div class="sell-info">
          <span>热卖中</span>
          <span>剩{{item.num}}件</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    //this.$route和this.$router这两个对象
    //this.$route是路由参数对象，所有路由中的参数，params，query都属于它
    //this.$router是路由导航对象，使用它可以方便地使用JS代码，实现路由的前进，后退，跳转到新的URL地址,实现编程式导航

    data(){
      return{
        goodsList:[]
      }
    },
    methods:{
      getGoodsList(){
        this.$http.get('goodslist').then(res=>{
          if(res.body.status==0){
            this.goodsList=res.body.data
          }
        })
      },
      //跳转到商品详情
      goDetail(id){
        console.log(id);
        //使用编程式导航
        this.$router.push({name:'goodsdetail',params:{id}});
      }
    },
    created(){
      this.getGoodsList();
    }

};
</script>
<style lang="scss" scoped>
    .goods-list{
        padding:10px;
        display:flex;
        justify-content: space-between;
        flex-wrap:wrap;
        .goods-item{
            width:49%;
            box-shadow:0 0 8px #999;
            margin-bottom:8px;
            padding:2px;
            display:flex;
            flex-direction:column;
            justify-content:space-between;
            min-height:240px;
            img{
                width:100%
            }
            .title{
                font-size:13px;
            }
            .info{
                background:#eee;
                .price{
                    .new{
                        font-size:14px;
                        color:red;
                        font-weight:700;
                    }
                    .old{
                        color:#777;
                        font-size:12px;
                        text-decoration:line-through;
                        margin-left:10px;
                    }
                }
                .sell-info{
                    font-size:12px;
                    display:flex;
                    justify-content: space-between;
                    color:#777;
                }
            }
        }
    }
</style>