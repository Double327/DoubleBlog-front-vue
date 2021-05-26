<template>
  <div class="">
    <div v-if="structureContent.length > 0" class="">
      <pre>
        <code :style="{lineHeight: '18px'}">
          {{ structureContent }}
        </code>
      </pre>
    </div>
    <NoneContent v-else></NoneContent>
  </div>
</template>

<script>
import NoneContent from "@/components/NoneContent";

export default {
  name: "ProjectStructure",
  components: {NoneContent},
  props: {
    structureContent: {
      required: true,
      type: String
    }
  }
}
</script>

<style scoped>

</style>
