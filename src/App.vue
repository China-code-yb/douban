<template>
  <div id="app">

    <div class="mid-big">
      <mid-swipe></mid-swipe>
    </div>

    <zj-header></zj-header>

  </div>
</template>

<script>

import midSwipe from "./components/swipe";



import ZjHeader from './components/ZjHeader'

export default {
  name: "app",
  components: {

    midSwipe,

    ZjHeader

  }
};
</script>

<style>
.mid-big{
  width: 1040px;
  /* height: 500px; */
  /* background-color: red; */
  margin: 0 auto;
}
</style>
