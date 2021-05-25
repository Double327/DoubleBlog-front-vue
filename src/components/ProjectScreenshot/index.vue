<template>
  <div class="layout-screenshot">
    <p v-if="images.length === 0">暂无项目截图</p>
    <ul v-else class="screenshot-container">
      <li class="screenshot-item" v-for="(img, index) in images" :key="index">
        <img class="screenshot-img" :src="img" alt="">
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "ProjectScreenshot",
  props: {
    images: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped lang="scss">
.layout-screenshot {
  .screenshot-container {
    width: 100%;

    .screenshot-item {
      width: 100%;
      margin-top: 20px;

      .screenshot-img {
        width: 100%;
      }
    }
  }
}
</style>
