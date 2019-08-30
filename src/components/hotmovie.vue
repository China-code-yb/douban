<template>
  <div class="hot-mv-div"> <div class="swipe-head">
          <h4>最近热门电影</h4>
          <span class="hot-mv-tag" v-for="(item, index) in tags" :key="index">
              <router-link :to="'/hotmv/'+item">{{item}}</router-link>
          </span>
        </div>
    <el-carousel :interval="5000" arrow="always" class="hot-mv-swipe">
      <el-carousel-item
        v-for="item in hot_mv?Math.ceil(hot_mv.length/10):0"
        :key="item"
      >
       
        <!-- <h3>{{ item.title }}</h3> -->
        <ul class="swipe-ul">
          <li
            v-for="(MV, index) in hot_mv?hot_mv.slice((item-1)*10,item*10):[]"
            :key="index"
          >
            <img class="swipe-img" :src="MV.cover" alt />
            
            <p class="m-title">{{MV.title}} <span style="color:orange">{{MV.rate}}</span> </p>

          </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      tags: [
        "热门",
        "最新",
        "豆瓣高分",
        "冷门佳片",
        "华语",
        "欧美",
        "韩国",
        "日本"
      ]
    };
  },
  computed: {
    ...mapGetters(["hot_mv"])
  },
  methods: {
    ...mapActions(["getHotMovie"])
  },
  mounted() {
    this.getHotMovie();
  }
};
</script>

<style scoped>
.swipe-ul{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.swipe-ul>li{
    margin: 0 5px 10px;
}
.hot-mv-tag{
    margin-left: 12px;
    font-size: 12px;
    color:#333;
    line-height:40px ;
}

  .el-carousel__container{
      height: 350px;
  }
  .hot-mv-div >>> .el-carousel__container{
      height: 450px;
  }
</style>