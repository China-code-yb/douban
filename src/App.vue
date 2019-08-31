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

        <hot-mv></hot-mv>

        <hot-movie></hot-movie>

        <ZjHotTv></ZjHotTv>

        <hotmovie></hotmovie>
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

import ZjSide from "./components/ZjSide";

import HotMv from "./components/HotMv";

import ZjHotTv from "./components/ZjHotTv";

export default {
  name: "app",
  components: {
    midSwipe,
    ZjHeader,
    Search,

    ZjSide,
    HotMv,
    ZjHotTv,
    Hotmovie
  }
};
</script>

<style>
.big-left {
  width: 715px;
}
.mid-big {
  width: 1040px;
  margin: 0 auto;
  padding-top: 40px;
  display: flex;
  justify-content: space-between;
}
</style>
