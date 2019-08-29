<template>
  <div id="app">
    <div class="mid-big">
      <mid-swipe></mid-swipe>
    </div>
  </div>
</template>

<script>
import midSwipe from "./components/swipe";

export default {
  name: "app",
  components: {
    midSwipe
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
