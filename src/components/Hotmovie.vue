<template>
    <div>
        <div class="hotmovie-div">
            <a href="" class="hotmovie-a">
            <img :src="hotmovie" alt="" class="hotmovie-a-img">
        </a>
        </div>
        
        <div class="hotmovie-gaia-movie">
            <el-carousel :interval="5000" arrow="always">
              <el-carousel-item v-for="item in 4" :key="item">
                  <h3>{{ item }}</h3>
              </el-carousel-item>
             </el-carousel>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      hotmovie: require("../assets/movie-logo.jpg")
    };
  }
};
</script>
<style>
.hotmovie-div{
    width: 675px;
    height: 112px;
}
.hotmovie-a {
  cursor: pointer;
  text-decoration: underline;
  border: 0;
  background: transparent;
  display: block;
  margin: 0 auto;
}
.hotmovie-a-img {
  display: block;
  width: 675px;
  height: 112px;
  position: absolute;
  border: 0;
}
.hotmovie-gaia-movie {
  width: 675px;
  height: 513px;
  border: 1px solid red;
}
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
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
