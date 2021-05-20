<template>
  <div class="main-wrapper">
    <router-view name="header" keep-alive></router-view>
    <transition name="fade" :duration="100">
      <router-view name="content"></router-view>
    </transition>
    <router-view name="footer" keep-alive></router-view>
  </div>
</template>

<script>
export default {
  name: "Index"
}
</script>

<style lang="scss">
@import "../common/style/theme-config";
@import "../common/style/index";

.main-wrapper {
  width: 100%;
  min-height: 100vh;
  margin: 0 auto;
}
</style>
