<template>
  <div>
    <!-- 将轮播图抽离成组件 -->
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="item in lunboList" :key="item.url">
        <a :href="item.link?item.link:'#'">
          <img :src="item.url" :class="{full:isfull}">
        </a>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
export default {
    props:['lunboList','isfull']
};
</script>
<style lang="scss" scoped>
.mint-swipe {
  height: 200px;
  .mint-swipe-item {
    //& 符号交集选择器
    // &:nth-child(1) {
    //   background: pink;
    // }
    // &:nth-child(2) {
    //   background: deepskyblue;
    // }
    // &:nth-child(3) {
    //   background: yellowgreen;
    // }
    text-align:center;
    img {
      // width: 100%;
      height: 100%;
    }
  }
}
.full{
  width:100%;
}
</style>