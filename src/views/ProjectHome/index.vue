<template>
  <div class="project layout-content">
    <Row :gutter="16">
      <Col span="6"
           v-for="item in projects"
           :key="item.id"
           style="margin: 10px 0"
      >
        <ProjectCard
            :project="item"/>
      </Col>
    </Row>
    <Page :current="1" :total="100" show-total show-elevator></Page>
  </div>
</template>

<script>
import ProjectCard from "@/components/ProjectCard";

export default {
  name: "ProjectHome",
  components: {ProjectCard},
  data() {
    return {
      projects: [
        {
          id: 1,
          name: '项目1',
          thumbnail: 'background.jpg'
        },
        {
          id: 2,
          name: '项目1',
          thumbnail: 'background.jpg'
        },
        {
          id: 3,
          name: '项目1',
          thumbnail: 'background.jpg'
        },
        {
          id: 4,
          name: '项目1',
          thumbnail: 'background.jpg'
        },
        {
          id: 5,
          name: '项目1',
          thumbnail: 'background.jpg'
        },
        {
          id: 6,
          name: '项目1',
          thumbnail: 'background.jpg'
        },
      ]
    }
  }
}
</script>

<style scoped>

</style>
