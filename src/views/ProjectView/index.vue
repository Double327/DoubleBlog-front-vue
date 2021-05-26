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
            <li v-if="project.github !== null && project.github.length > 0" class="item">
              <a :href="project.github" target="_blank"><i class="iconfont">&#xe684;</i>{{ project.github }}</a>
            </li>
            <li v-if="project.gitee !== null && project.gitee.length > 0" class="item">
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
          <ProjectStructure :structure-content="project.structure"/>
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
        {
          'title': '首页',
          'to': '/'
        },
        {
          'title': '项目展示',
          'to': '/projects'
        }
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
        structure: '',
        github: 'https://www.github.com',
        gitee: 'https://www.gitee.com',
        baseInfoHtml: '<div class="texe-main markdown-body"><h3>项目说明：</h3>\n' +
            '<p>本博客是学习过程中搭建的项目，为了融合更多知识点，让博客看起来更加高大上，使用了多个框架组合，有些也是企业级项目中常用的解决方式。不够说实话，还有挺多内容缺少的，比如xss攻击预防等安全方面的。</p>\n' +
            '<h4>技术选型：</h4>\n' +
            '<ul>\n' +
            '<li>核心框架：Springboot 2.1.2</li>\n' +
            '<li>安全框架：Apache Shiro 1.4</li>\n' +
            '<li>持久层框架：Mybatis + mybatis plus 3.2.0</li>\n' +
            '<li>页面模板：Freemarker</li>\n' +
            '<li>缓存框架：Redis</li>\n' +
            '<li>数据库：mysql</li>\n' +
            '<li>消息队列：RabbitMq</li>\n' +
            '<li>分布式搜索：Elasticsearch 6.4.3</li>\n' +
            '<li>双工通讯协议：websocket</li>\n' +
            '<li>网络通讯框架：t-io 3.2.5</li>\n' +
            '<li>工具集合：hutool 4.1.17</li>\n' +
            '</ul>\n' +
            '<h4>知识要点：</h4>\n' +
            '<ul>\n' +
            '<li>基于mybatis plus快速代码生成</li>\n' +
            '<li>封装与自定义Freemarker标签</li>\n' +
            '<li>使用shiro+redis完成了会话共享</li>\n' +
            '<li>redis的zset结构完成本周热议排行榜</li>\n' +
            '<li>t-io+websocket完成即时消息通知和群聊</li>\n' +
            '<li>基于rabbitmq+elasticsearch的内容同步与搜索引擎</li>\n' +
            '</ul>\n' +
            '<h3>详细开发文档</h3>\n' +
            '<ul>\n' +
            '<li><a href="https://www.markerhub.com/post/4">（eblog）1、项目架构搭建、本周热议</a></li>\n' +
            '<li><a href="https://www.markerhub.com/post/5">（eblog）2、集成redis、首页数据填充</a></li>\n' +
            '<li><a href="https://www.markerhub.com/post/6">（eblog）3、博客分类填充、登录注册逻辑</a></li>\n' +
            '<li><a href="https://www.markerhub.com/post/7">（eblog）4、博客发布收藏、用户中心的设置</a></li>\n' +
            '<li><a href="https://www.markerhub.com/post/8">（eblog）5、消息异步通知、细节调整</a></li>\n' +
            '<li><a href="https://www.markerhub.com/post/9">（eblog）6、博客搜索引擎开发、后台精选</a></li>\n' +
            '<li><a href="https://www.markerhub.com/post/10">（eblog）7、即时群聊开发，聊天记录等</a></li>\n' +
            '</ul>\n' +
            '</div>'
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
