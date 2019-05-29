<template>
  <div>
    <ul class="mui-table-view">
      <li class="mui-table-view-cell mui-media" v-for="(news, index) in newsList" :key="index">
        <routerLink :to="'/home/newsdetail/'+news.id">
          <img class="mui-media-object mui-pull-left" :src="news.imgUrl">
          <div class="mui-media-body">
            <h4>{{news.title}}</h4>
            <p class="mui-ellipsis">
              <span>发表时间：{{news.date|dateFormat}}</span>
              <span>点击次数：{{news.clickNum}}次</span>
            </p>
          </div>
        </routerLink>
      </li>
    </ul>
  </div>
</template>
<script>
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      newsList: null
    };
  },
  methods: {
    getNews() {
      this.$http.get("news").then(res => {
        console.log(res.body);
        if (res.body.status == 0) {
          this.newsList = res.body.data;
        } else {
          Toast('获取新闻列表失败');
        }
      });
    }
  },
  created() {
    this.getNews();
  }
};
</script>
<style lang="scss" scoped>
.mui-media-body {
  h4 {
    font-size: 12px;
  }
  .mui-ellipsis {
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    color: #26a2ff;
  }
}
</style>