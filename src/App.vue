<template>
  <div id="app">
    <zj-header></zj-header>
    <Search></Search>

    <!-- 中间div 用于定宽居中 -->
    <div class="mid-big">

      <!-- 左侧div 以轮播图为头 -->
      <div class="big-left">
        <mid-swipe></mid-swipe>
      </div>

      <!-- 右侧div 以豆瓣评分8问为头-->

      
    </div>
  </div>
</template>

<script>
import midSwipe from "./components/swipe";

import ZjHeader from "./components/ZjHeader";

import Search from "./components/search";

export default {
  name: "app",
  components: {
    midSwipe,

    ZjHeader,

    Search
  }
};
</script>

<style>
.big-left{
  width: 715px;
}
.mid-big {
  width: 1040px;
  /* height: 500px; */
  /* background-color: red; */
  margin: 0 auto;
}
</style>
