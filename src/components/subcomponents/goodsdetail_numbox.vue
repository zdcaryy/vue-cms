
<template>
  <!-- 这是数字输入框组件 -->
  <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0" data-numbox-max="100">
    <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
    <input class="mui-numbox-input" type="number" @change="countChange" ref="count" value="1">
    <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
  </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  mounted() {
    //初始化mui中的数字输入框
    mui(".mui-numbox").numbox();
  },
  methods: {
    countChange() {
      this.$emit("func", parseInt(this.$refs.count.value));
    }
  },
  props: ["maxCount"],
  watch: {
    maxCount(newValue) {
      //maxCount一开始是undefined，因为父组件获取这个值是一个异步操作，所以开始传递过来的是undefined
      console.log("maxCount的最终值为：" + this.maxCount);
      mui(".mui-numbox")
        .numbox()
        .setOption("max", newValue);
    }
  }
};
</script>
<style lang="scss" scoped>
</style>
 