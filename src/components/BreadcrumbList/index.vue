<template>
  <Breadcrumb :style="{margin: '10px 0'}">
    <BreadcrumbItem v-for="breadcrumb in breadcrumbs" :to="breadcrumb.to" :key="breadcrumb.to">{{ breadcrumb.title }}</BreadcrumbItem>
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
