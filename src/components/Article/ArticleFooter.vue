<template>
  <div class="article-footer">
    <LicenseTag :license="article.license"></LicenseTag>
  </div>
</template>

<script>
import LicenseTag from "@/components/LicenseTag";

export default {
  name: "ArticleFooter",
  components: {LicenseTag},
  props: {
    article: {
      type: Object,
      default: undefined
    }
  }
}
</script>

<style scoped>

</style>
