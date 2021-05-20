<template>
  <div id="article-content">
    <slot name="content"></slot>
  </div>
</template>

<script>
export default {
  name: "ArticleContent"
}
</script>

<style lang="scss">
@import "../../common/style/article";

a {
  color: #7e8c8d;
  text-decoration: none;
  -webkit-backface-visibility: hidden;
}
</style>
