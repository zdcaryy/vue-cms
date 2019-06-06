<template>
    <div>
        <comment :id="id"></comment>
    </div>
</template>
<script>
//引入评论组件
import Comment from "../subcomponents/comment.vue";
export default {
    data(){
        return{
            id:this.$route.params.id
        }
    },
    components:{
        Comment
    }
}
</script>
<style lang="scss" scoped>
    
</style>