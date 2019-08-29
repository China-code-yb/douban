<template>
  <div>
    <el-carousel :interval="5000" arrow="always">
      <el-carousel-item v-for="item in hot_movie_lists?Math.ceil(hot_movie_lists.length/5):0" :key="item">
        <!-- <h3>{{ item.title }}</h3> -->
        <ul>
          <li></li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {};
  },
  computed:{
    ...mapGetters(['hot_movie_lists'])
  },
  methods: {
    ...mapActions(["getSwipe"])
  },
  mounted() {
    console.log("渲染");
    this.getSwipe();
  },
  watch:{
    hot_movie_lists(){
      console.log(this.hot_movie_lists)
    }
  }
};
</script>
<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>