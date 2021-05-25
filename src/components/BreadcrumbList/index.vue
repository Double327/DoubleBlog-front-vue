<template>
  <Breadcrumb :style="{margin: '10px 0'}">
    <BreadcrumbItem v-for="breadcrumb in breadcrumbs" :key="breadcrumb">{{ breadcrumb }}</BreadcrumbItem>
  </Breadcrumb>
</template>

<script>
export default {
  name: "BreadcrumbList",
  props: {
    breadcrumbs: {
      required: true,
      type: Array
    }
  }
}
</script>

<style scoped>

</style>
