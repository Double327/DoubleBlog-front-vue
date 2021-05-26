<template>
  <div class="layout-content">
    <BreadcrumbList :breadcrumbs="breadcrumbs"></BreadcrumbList>
    <Card class="page-header" :padding="40" dis-hover>
      <Row>
        <!--文本信息-->
        <Col :lg="16">
          <!--标题-->
          <h1 class="title">{{ project.title }}</h1>
          <div class="tags">
            <!--<Tag></Tag>-->
            <router-link :to="'/' + tag.id" tag="Tag" v-for="tag in project.tags" :key="tag.id">
              {{ tag.title }}
            </router-link>
          </div>
          <p class="desc">{{ project.desc }}</p>
          <ul class="open-source-list clearfix">
            <li v-if="project.github && project.github.length > 0" class="item">
              <a :href="project.github" target="_blank"><i class="iconfont">&#xe684;</i>{{ project.github }}</a>
            </li>
            <li v-if="project.gitee && project.gitee.length > 0" class="item">
              <a :href="project.gitee" target="_blank"><i class="iconfont">&#xe686;</i>{{ project.gitee }}</a>
            </li>
          </ul>
        </Col>
        <!--图片-->
        <Col :lg="8">
          <img class="page-header-image" :src="project.thumbnail" alt="">
        </Col>
      </Row>
      <Tabs value="information" :animated="false">
        <TabPane label="基本信息" name="information" icon="ios-cog">
          <ProjectInformation :html-content="project.baseInfoHtml"/>
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
import {getProjectInfo} from "@/api/project";


export default {
  name: "ProjectView",
  components: {ProjectStructure, ProjectScreenshot, ProjectInformation, BreadcrumbList},
  data() {
    return {
      breadcrumbs: [
        {
          'title': '首页',
          'to': '/'
        },
        {
          'title': '项目展示',
          'to': '/projects'
        }
      ],
      project: {}
    }
  },
  mounted() {
    // 获取项目信息
    getProjectInfo(this.$route.params.id).then(res => {
      this.project = res.data;
    });
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

  .open-source-list {
    width: 100%;

    .item {
      float: left;
      margin-right: 20px;

      a {
        display: block;
        font-size: 16px;
        line-height: 30px;
        vertical-align: middle;

        i.iconfont {
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
  }

  .page-header-image {
    width: 100%;
    height: 100%;
  }

}
</style>
