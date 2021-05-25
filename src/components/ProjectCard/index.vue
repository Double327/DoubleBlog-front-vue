<template>
  <Card to="">
    <div class="" style="text-align: center">
      <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png" alt="">
      <h3>{{ project.name }}</h3>
    </div>
  </Card>
</template>

<script>
export default {
  name: "ProjectCard",
  props: {
    project: {
      type: Object,
      require: true
    }
  }
}
</script>

<style scoped>

</style>
