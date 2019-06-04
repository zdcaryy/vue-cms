<template>
  <div class="goods-list">
    <div class="goods-item">
      <img src="http://192.168.31.39:8888/images/goods.jpg">
      <h4 class="title">小米(Mi)小米Note 16G 双网通版</h4>
      <div class="info">
        <div class="price">
          <span class="new">￥888</span>
          <span class="old">￥999</span>
        </div>
        <div class="sell-info">
          <span>热卖中</span>
          <span>剩390件</span>
        </div>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://192.168.31.39:8888/images/goods.jpg">
      <h4 class="title">小米(Mi)小米Note 16G 双网通版小米(Mi)小米Note 16G 双网通版小米(Mi)小米Note 16G 双网通版小米(Mi)小米Note 16G 双网通版</h4>
      <div class="info">
        <div class="price">
          <span class="new">￥888</span>
          <span class="old">￥999</span>
        </div>
        <div class="sell-info">
          <span>热卖中</span>
          <span>剩390件</span>
        </div>
      </div>
    </div>
    <div class="goods-item">
      <img src="http://192.168.31.39:8888/images/goods.jpg">
      <h4 class="title">小米(Mi)小米Note 16G 双网通版</h4>
      <div class="info">
        <div class="price">
          <span class="new">￥888</span>
          <span class="old">￥999</span>
        </div>
        <div class="sell-info">
          <span>热卖中</span>
          <span>剩390件</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    //this.$route和this.$router这两个对象
    //this.$route是路由参数对象，所有路由中的参数，params，query都属于它
    //this.$router是路由导航对象，使用它可以方便地使用JS代码，实现路由的前进，后退，跳转到新的URL地址

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