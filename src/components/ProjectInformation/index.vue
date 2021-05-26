<template>
  <div class="">
    <article v-if="htmlContent.length > 0" class="typo container article-main-content" v-html="htmlContent"
             v-highlight></article>
    <NoneContent v-else></NoneContent>
  </div>
</template>

<script>

import NoneContent from "@/components/NoneContent";

export default {
  name: "ProjectInformation",
  components: {NoneContent},
  props: {
    htmlContent: {
      required: true,
      type: String
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang="scss">
@import "../../common/style/article";

h1 {
  font-size: 20px;
}

</style>
