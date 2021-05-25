<template>
  <div class="layout-content">
    <BreadcrumbList :breadcrumbs="breadcrumbs"></BreadcrumbList>
    <Card class="page-header" :padding="40" dis-hover>
      <Row>
        <!--文本信息-->
        <Col :lg="17">
          <!--标题-->
          <h1 class="title">{{ project.title }}</h1>
          <div class="tags">
            <!--<Tag></Tag>-->
            <router-link :to="'/' + tag.id" tag="Tag" v-for="tag in project.tags" :key="tag.id">{{ tag.title }}</router-link>
          </div>
          <p class="desc">{{ project.desc }}</p>
        </Col>
        <!--图片-->
        <Col :lg="7">
          <img class="page-header-image" :src="project.thumbnail" alt="">
        </Col>
      </Row>
      <Tabs value="screenshot">
        <TabPane label="基本信息" name="information" icon="ios-cog">
          <ProjectInformation/>
        </TabPane>
        <TabPane label="项目截图" name="screenshot" icon="ios-camera">
          <ProjectScreenshot :images="project.screenshot"/>
        </TabPane>
        <TabPane label="代码结构" name="structure" icon="logo-buffer">
          <ProjectStructure :structure="project.structure"/>
        </TabPane>
      </Tabs>
    </Card>
  </div>
</template>

<script>
import BreadcrumbList from "@/components/BreadcrumbList";
import ProjectInformation from "@/components/ProjectInformation";
import ProjectScreenshot from "@/components/ProjectScreenshot";
import ProjectStructure from "@/components/ProjectStructure";

export default {
  name: "ProjectView",
  components: {ProjectStructure, ProjectScreenshot, ProjectInformation, BreadcrumbList},
  data() {
    return {
      breadcrumbs: [
        '首页',
        '项目展示',
        '项目名称'
      ],
      project: {
        title: '这里是项目名称',
        tags: [
          {
            id: 1,
            title: 'Java'
          },
          {
            id: 2,
            title: 'Tomcat'
          },
          {
            id: 3,
            title: 'Spring'
          },
          {
            id: 4,
            title: 'Spring Boot'
          },
          {
            id: 5,
            title: 'Nginx'
          },
          {
            id: 6,
            title: 'Vue'
          },
        ],
        desc: '这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介这里是项目简介',
        thumbnail: 'https://image-1300566513.cos.ap-guangzhou.myqcloud.com/upload/images/09023c6b07166ef623b415808bc3726a.png',
        screenshot: [
          'https://oscimg.oschina.net/oscnet/up-5c6b2b3f4c7b415cfbafea06b6aaf365ab9.png',
          'https://oscimg.oschina.net/oscnet/up-22214fea0fc4bc67d29232d3c8004609e4f.png',
          'https://oscimg.oschina.net/oscnet/up-e1e6084e96a61dc22c95e820fa6e40a7940.png'
        ],
        structure: ''
      }
    }
  }
}
</script>

<style scoped lang="scss">
.page-header {

  margin-top: 20px;

  .title {
    font-size: 28px;
  }

  .tags {
    margin-top: 20px;
  }

  .desc {
    margin-top: 20px;
    padding: 0 80px 20px 0;
    line-height: 20px;
  }

  .page-header-image {
    width: 300px;
    height: 150px;
  }

}
</style>
