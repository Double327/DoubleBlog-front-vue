<template>
  <div class="">
    <div v-if="structure.length > 0" class="">
      <pre>
        <code :style="{lineHeight: '18px'}">
          {{ structure }}
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
    structure: {
      required: true,
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped>

</style>
