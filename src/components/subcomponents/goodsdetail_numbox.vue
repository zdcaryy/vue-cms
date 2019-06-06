
<template>
    <!-- 这是数字输入框组件 -->
    <div class="mui-numbox" data-numbox-step="1" data-numbox-min="0" data-numbox-max="100">
      <button class="mui-btn mui-numbox-btn-minus" type="button">-</button>
      <input class="mui-numbox-input" type="number">
      <button class="mui-btn mui-numbox-btn-plus" type="button">+</button>
    </div>
</template>
<script>
import mui from "../../lib/mui/js/mui.js";
export default {
  mounted() {
    //初始化mui中的数字输入框
    mui(".mui-numbox").numbox();
  }
};
</script>
<style lang="scss" scoped>
   
</style>
