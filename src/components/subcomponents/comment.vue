<template>
  <div class="comment-container">
    <h3 class="title">用户评论</h3>
    <hr>
    <textarea placeholder="请输入评论,字数不超过40字" maxlength="40" v-model="message"></textarea>

    <mt-button type="primary" size="large" @click="postComment">发表评论</mt-button>

    <div class="comment-list">
      <div class="comment-item" v-for="(item, index) in comments" :key="index">
        <div class="comment-title">
          <span>第{{index+1}}楼&nbsp;&nbsp;用户：{{item.userName}}</span>
          <span>发表时间：{{item.addTime|dateFormat}}&nbsp;&nbsp;</span>
        </div>
        <div class="comment-body">{{item.content?item.content:'该用户很懒,没有BB。'}}</div>
      </div>
    </div>

    <mt-button type="danger" size="large" plain @click="getMore">加载更多</mt-button>
  </div>
</template>
<script>
import {Toast} from 'mint-ui';
export default {
  data(){
    return{
      comments:[],
      page:1,
      message:''
    }
  },
  methods:{
    //加载评论数据
    getComments(){
      this.$http.get('comments/'+this.id+'?page='+this.page).then(res=>{
        console.log(res.body);
        if(res.body.status==0){
          //concat不改变原数组
          this.comments=this.comments.concat(res.body.data);
          console.log(this.comments);
        }
      })
    },
    //加载更多
    getMore(){
      this.page++;
      this.getComments();
    },
    //发表评论
    postComment(){
      if(this.message.trim()==''){
        return Toast('评论内容不能为空');
      }
      this.$http.post('postmessage/'+this.$route.params.id,{message:this.message.trim()}).then(res=>{
        if(res.body.status==0){
          this.comments.unshift({
            userName:"zdc",
            addTime:res.body.data.addTime,
            content:this.message.trim()
          })
          this.message='';
        }
        else{
          Toast('添加评论失败,请稍后重试');
        }
      })
    }
  },
  created(){
    this.getComments();
  },
  props:['id'],
};
</script>
<style lang="scss" scoped>
.comment-container {
  .title {
    font-size: 14px;
  }
  textarea {
    font-size: 12px;
    padding: 5px;
    margin-bottom: 5px;
    height: 85px;
  }
  .comment-list {
    margin-top: 5px;
    font-size: 12px;
    .comment-title {
      background: #CBCCCB;
      display:flex;
      justify-content: space-between;
    }
    .comment-body {
      text-indent: 2em;
      line-height:25px;
      padding:5px 0;
    }
  }
  /deep/ .mint-button--danger{
    margin-bottom: 5px !important;
  }
}
</style>
