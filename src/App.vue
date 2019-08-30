<template>
  <div id="app">
    <zj-header></zj-header>
    <Search></Search>

    <!-- 中间div 用于定宽居中 -->
    <div class="mid-big">

      <mid-swipe></mid-swipe>


      <!-- 左侧div 以轮播图为头 -->
      <div class="big-left">
        <mid-swipe></mid-swipe>
<<<<<<< HEAD

        <ZjHotTv></ZjHotTv>
=======
        <hotmovie></hotmovie>

>>>>>>> 94a79ac23ed4eaa6b00e7ccfbb2bd31c87c6e81d
      </div>

      <!-- 右侧div 以豆瓣评分8问为头-->
      <zj-side></zj-side>
      

    </div>
  </div>
</template>

<script>
import midSwipe from "./components/swipe";

import ZjHeader from "./components/ZjHeader";

import Search from "./components/search";


import Hotmovie from "./components/Hotmovie";


import ZjSide from './components/ZjSide';
import ZjHotTv from './components/ZjHotTv'


export default {
  name: "app",
  components: {
    midSwipe,
    ZjHeader,
    Search,
<<<<<<< HEAD
    ZjSide,
    ZjHotTv
=======


    Hotmovie,

    ZjSide

>>>>>>> 94a79ac23ed4eaa6b00e7ccfbb2bd31c87c6e81d
  }
};
</script>

<style>
.big-left{
  width: 715px;
}
.mid-big {
  width: 1040px;
  margin: 0 auto;
  padding-top:40px ;
  display: flex;
  justify-content: space-between;
}
</style>
