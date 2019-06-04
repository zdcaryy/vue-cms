<template>
  <div class="detail-container">
    <h4 class="title">{{detail.title}}</h4>
    <div class="sub-title">
      <span>发表时间：{{detail.date}}</span>
      <span>点击：{{detail.clickNum}}次</span>
    </div>
    <hr>

    <!-- 缩略图列表 -->
    <!-- 图片内容 -->
    <div class="photo-content" v-html="detail.content"></div>
    <!-- 评论列表 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import Comment from "../subcompenents/Comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      detail: {}
    };
  },
  created() {
    this.getPhotoDetail();
  },
  methods: {
    getPhotoDetail() {
      this.$http.get("photodetail/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.detail = res.body.data[0]?res.body.data[0]:{};
        }
      });
    }
  },
  components: {
    commentBox: Comment
  }
};
</script>
<style lang="scss" scoped>
.detail-container {
  padding: 0 5px;
  .title {
    font-size: 14px;
    text-align: center;
    color: #2c9ff5;
    padding: 8px 0;
  }
  .sub-title {
    font-size: 12px;
    color: #777;
    display: flex;
    justify-content: space-between;
  }
  .photo-content {
    font-size: 12px;
    color:black;
    /deep/ p{
      font-size:12px;
      color:black;
    }
  }
}
</style>