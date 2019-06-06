<template>
  <div class="desc-container">
    <h4 class="title">{{goodsDesc.title}}</h4>
    <hr>
    <div class="content" v-html="goodsDesc.info"></div>
  </div>
</template>
<script>
export default {
    data(){
        return{
           id:this.$route.params.id,
           goodsDesc:{}
        }
    },
    methods:{
        getDescs(){
            this.$http.get('goodsdescs/'+this.id).then(res=>{
                if(res.body.status==0){
                    this.goodsDesc=res.body.data[0]?res.body.data[0]:{}
                }
            })
        }
    },
    created(){
        this.getDescs();
    }
};
</script>
<style lang="scss" scoped>
.desc-container {
  padding: 0 2px;
  .title {
    padding: 6px;
    text-align: center;
    color: #007aff;
    font-size: 14px;
  }
  .content{
      /deep/ img{
          width:100%;
      }
  }
}
</style>
