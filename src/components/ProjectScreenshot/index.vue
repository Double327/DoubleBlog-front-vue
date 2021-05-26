<template>
  <div class="layout-screenshot">
    <ul v-if="images.length > 0" class="screenshot-container">
      <li class="screenshot-item" v-for="(img, index) in images" :key="index">
        <img class="screenshot-img" :src="img" alt="">
      </li>
    </ul>
    <NoneContent v-else/>
  </div>
</template>

<script>
import NoneContent from "@/components/NoneContent";

export default {
  name: "ProjectScreenshot",
  components: {NoneContent},
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
