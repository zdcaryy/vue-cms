<template>
  <div class="newsdetail-container">
    <!-- 大标题 -->
    <h3 class="title">{{newsDetail.title}}</h3>
    <!-- 子标题 -->
    <p class="sub-title">
      <span>发表时间：{{newsDetail.date|dateFormat}}</span>
      <span>点击：{{newsDetail.clickNum}}次</span>
    </p>
    <hr>
    <!-- 新闻内容 -->
    <div class="content" v-html="newsDetail.content"></div>
    <!-- 评论子组件 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

//导入评论子组件
import Comment from "../subcompenents/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      newsDetail: {}
    };
  },
  methods: {
    //根据新闻id获取新闻详情
    getDetail() {
      this.$http.get("newsdetail/" + this.id).then(res => {
        if (res.body.status == 0) {
          console.log(res.body);
          this.newsDetail = res.body.data;
        } else {
          Toast("获取新闻详情失败");
        }
      });
    }
  },
  created() {
    this.getDetail();
  },
  components:{
      commentBox:Comment
  }
};
</script>
<style lang="scss" scoped>
.newsdetail-container {
  padding: 0 4px;
  .title {
    font-size: 13px;
    color: brown;
    text-align: center;
    margin: 15px 0;
  }
  .sub-title {
    display: flex;
    justify-content: space-between;
    color: #65ade3;
    font-size: 12px;
  }
  //   .content {
  //     p {
  //       font-size: 14px !important;
  //       margin-top: 0 !important;
  //       margin-bottom: 10px !important;
  //     }
  //   }

  //scoped 不会作用于 子组件或者v-html渲染的内容，要么不使用scoped，要么使用 深度选择 /deep/
  .content /deep/ p {
    font-size: 14px !important;
    margin-top: 0 !important;
    margin-bottom: 10px !important;
  }
}
</style>