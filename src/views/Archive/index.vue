<template>
  <div class="timeline-content layout-content">
    <Row>
      <!--时间线内容-->
      <Col :xs="24" :md="24" :lg="17">
        <div class="layout-left">
          <TitleSection
              main-title="时光轴"
              sub-title="Time Line"
              :to="'/archive'"
              :menus="timeLineTitleMenus"
              :with-refresh="true"
              :with-time-select="false"
          />
          <!--加载动画-->
          <loading v-if="loading"></loading>
        </div>
      </Col>
      <Col :xs="0" :md="0" :lg="7">
        <!--推荐文章-->
        <Recommend></Recommend>
        <!--文章标签-->
        <TagWall></TagWall>
      </Col>


    </Row>
  </div>
</template>

<script>
import TitleSection from "@/components/TitleSection";
import Loading from "@/components/Loading";
import TagWall from "@/components/TagWall";
import Recommend from "@/components/Recommend";

export default {
  name: "Archive",
  components: {Recommend, TagWall, Loading, TitleSection},
  data() {
    return {
      loading: true,
      timeLineTitleMenus: [
        {title: '倒序', selected: false, method: ''},
        {title: '最多评论', selected: false, method: ''},
        {title: '推荐', selected: false, method: ''}
      ]
    }
  }
}
</script>

<style scoped>

</style>
