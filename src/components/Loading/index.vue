<template>
  <div class="loading-box">
    <Spin fix size="large"></Spin>
  </div>
</template>

<script>
export default {
  name: "Loading"
}
</script>

<style scoped>
.loading-box {
  display: inline-block;
  width: 100%;
  height: 100px;
  position: relative;
}
</style>
