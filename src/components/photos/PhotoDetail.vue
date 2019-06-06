<template>
  <div class="detail-container">
    <h4 class="title">{{detail.title}}</h4>
    <div class="sub-title">
      <span>发表时间：{{detail.date}}</span>
      <span>点击：{{detail.clickNum}}次</span>
    </div>
    <hr>

    <!-- 缩略图列表 -->
    <div class="thumb-container">
      <vue-preview
        :list="thumbs"
        :thumbImageStyle="{width: '100px', height: '100px',margin:'8px'}"
        :previewBoxStyle="{border: '1px solid #eee',display:'flex',justifyContent:'space-between',flexWrap:'wrap'}"
        :tapToClose="true"
      />
    </div>

    <!-- 图片内容 -->
    <div class="photo-content" v-html="detail.content"></div>
    <!-- 评论列表 -->
    <comment-box :id="this.id"></comment-box>
  </div>
</template>
<script>
import Comment from "../subcomponents/comment.vue";
export default {
  data() {
    return {
      id: this.$route.params.id,
      detail: {},
      thumbs: []
    };
  },
  created() {
    this.getPhotoDetail();
    this.getThumbs();
  },
  methods: {
    //获取图片内容详情
    getPhotoDetail() {
      this.$http.get("photodetail/" + this.id).then(res => {
        if (res.body.status == 0) {
          this.detail = res.body.data[0] ? res.body.data[0] : {};
        }
      });
    },
    //获取图片对应的缩略图列表
    getThumbs() {
      this.$http.get("thumbs/" + this.id).then(res => {
        if (res.body.status == 0) {
          console.log(res.body.data);
          if (res.body.data) {
            res.body.data.thumbUrls.forEach(item => {
              let img = new Image();
              img.src = item;
              var that = this;
              img.onload = function() {
                that.thumbs.push({
                  src: item,
                  w: img.width,
                  h: img.height
                });
              };
            });
          }
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
  .thumb-container{
    /deep/ img{
      box-shadow:0 0 7px #999;
    }
  }
  .photo-content {
    font-size: 12px;
    color: black;
    /deep/ p {
      font-size: 12px;
      color: black;
    }
  }
}
</style>