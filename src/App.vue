<template>
  <div id="app">
    <zj-header></zj-header>
    <Search></Search>
    <div class="mid-big">
      <mid-swipe></mid-swipe>
    <hotmovie></hotmovie>
    </div>
  </div>
</template>

<script>
import midSwipe from "./components/swipe";

import ZjHeader from "./components/ZjHeader";

import Search from "./components/search";

import Hotmovie from "./components/Hotmovie";


export default {
  name: "app",
  components: {
    midSwipe,

    ZjHeader,

    Search,

    Hotmovie,
  }
};
</script>

<style>
.mid-big {
  width: 1040px;
  /* height: 500px; */
  /* background-color: red; */
  margin: 0 auto;
}
</style>
