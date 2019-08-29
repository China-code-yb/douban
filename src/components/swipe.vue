<template>
  <div>

    <el-carousel :interval="100000" arrow="always">
      <el-carousel-item
        v-for="item in hot_movie_lists?Math.ceil(hot_movie_lists.length/5):0"
        :key="item"
      >    <div class="swipe-head">
      <h4>正在热映</h4>
       <span class="swipe-page">{{item}}/{{hot_movie_lists?Math.ceil(hot_movie_lists.length/5):0}}</span>
      <router-link class="swipe-route" to="/allHotPlay">全部正在热映</router-link>
      <router-link class="swipe-route" to="/laterPlay">即将上映</router-link>

    </div>
        <!-- <h3>{{ item.title }}</h3> -->
        <ul class="swipe-ul">
          <li
            v-for="(M_item, index) in hot_movie_lists?hot_movie_lists.slice((item-1)*5,item*5):[]"
            :key="index"
          >
            <img class="swipe-img" :src="M_item.images.small" alt />
            <p class="m-title">{{M_item.title}}</p>

            <!-- 评分 -->
            <el-rate
              :value="M_item.rating.average?Number((M_item.rating.average / 2).toFixed(1)):10"
              disabled
              show-score
              text-color="#ff9900"
              score-template="{value}"
            ></el-rate>
            
            <span class="swipe-buy">选座购票</span>
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
      value5:3.7
    };
  },
  computed: {
    ...mapGetters(["hot_movie_lists"])
  },
  methods: {
    ...mapActions(["getSwipe"])
  },
  mounted() {
    console.log("渲染");
    this.getSwipe();
  },
  watch: {
    hot_movie_lists() {
      console.log(this.hot_movie_lists);
    }
  }
};
</script>
<style>
.swipe-page{
  font-size: 12px;
  color: #333;
  position: absolute;
  right: 0;
  /* top: -14px; */
}
.swipe-buy{
  display: block;
  width: 90px;
  height: 24px;
  background-color: #268dcd;
  color: white;
  font-size: 12px;
  text-align: center;
  line-height: 24px;
  margin-top: 12px;
}
.el-rate__icon{
  margin: 0 !important;
  font-size: 14px !important;
}
.el-rate__text{
  font-size: 14px;
}
.el-rate{
  width: 115px;
  display: flex;
  justify-content: center;
  margin-top: 14px;
}
.m-title {
  margin-top: 14px;
  font-size: 14px;
  width: 100px;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.swipe-head {
  display: flex;
  height: 40px;
  margin-bottom: 20px;
  margin-top: 40px;
  border-bottom: 1px solid #eee;
}
.swipe-route {
  color: #777;
  text-decoration: none;
  font-size: 14px;
  line-height: 40px;
  margin-left: 14px;
}
.swipe-head > h4 {
  color: #444;
  line-height: 40px;
}
.swipe-ul {
  display: flex;
}
.swipe-ul > li {
  flex-grow: 1;
  width: 115px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.swipe-img {
  width: 115px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}


  .el-carousel__container{
    height: 410px;
  }
</style>