<template>
  <div class="home-content layout-content">
    <!--轮播图-->
    <div class="banner" style="margin-bottom: 20px;" v-if="carouselList.length>0">
      <div class="bracket"></div>
      <div class="target">
        <HomeBanner :carouselList="carouselList"></HomeBanner>
      </div>
    </div>
    <Row>
      <!--推荐文章-->
      <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="17">
        <TitleSection
            main-title="文章"
            sub-title="Article"
            :menus="articlesTitleMenus"
            :to="'/articles'"
            :with-refresh="true"
            :with-time-select="false"
            @refresh="refreshArticles"
            @menuControl="articlesMenusControl"
        />
        <loading v-if="articles.length === 0"></loading>
        <ArticleListCell
            v-for="article in articles"
            :article="article"
            :key="article.id"
        ></ArticleListCell>
      </Col>
      <Col :xs="24" :sm="24" :md="24" :lg="24" :xl="7">
        <div class="layout-right" v-if="showPage">
          <About/>
          <Recommend/>
          <TagWall/>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import HomeBanner from '@/components/HomeBanner';
import {listCarousel} from "@/api";
import {mapActions, mapState} from "vuex";
import TitleSection from "@/components/TitleSection";
import ArticleListCell from "@/components/ArticleListCell";
import About from "@/components/About";
import TagWall from "@/components/TagWall";
import Recommend from "@/components/Recommend";
import Loading from "@/components/Loading";

export default {
  name: "Home",
  components: {
    Loading,
    Recommend,
    TagWall,
    About,
    ArticleListCell,
    TitleSection,
    HomeBanner
  },
  computed: {
    ...mapState({
      articles: state => state.home.articles,
    }),
    showPage: function () {
      return this.$store.state.home.articles.length > 0;
    }
  },
  data() {
    return {
      carouselList: [],
      mostComment: undefined,
      hot: undefined,
      recommend: undefined,
      articlesTitleMenus: [
        {title: "最多评论", selected: false, method: 'mostComment'},
        {title: "最热", selected: false, method: 'hot'},
        {title: "推荐", selected: false, method: 'recommend'}
      ]
    }
  }
  ,
  beforeMount() {
    listCarousel().then(response => {
      this.carouselList = response.data;
    });
    if (this.$store.state.home.articles.length === 0) {
      this.getArticlesBaseInfo({
        is_recommend: this.recommend,
        is_hot: this.hot,
        ordering: this.mostComment,
        pageSize: 10,
        pageNum: 1
      });
    }
  },
  methods: {
    ...
        mapActions({
          getArticlesBaseInfo: 'home/GET_ARTICLES_BASE_INFO'
        }),
    refreshArticles() {
      this.mostComment = undefined;
      this.hot = undefined;
      this.recommend = undefined;
      this.getArticlesBaseInfo();
    }
    ,
    articlesMenusControl(params) {
      switch (params[0]) {
        case 'mostComment':
          this.mostComment = params[1] ? 'commentCount' : undefined;
          break;
        case 'hot':
          this.hot = params[1] ? 'click' : undefined;
          break;
        case 'recommend':
          this.recommend = params[1] ? true : undefined;
          break;
      }
      // 排序条件
      let orderings = [];
      if (this.mostComment !== undefined) {
        orderings.push(this.mostComment);
      }
      if (this.hot !== undefined) {
        orderings.push(this.hot);
      }
      this.getArticlesBaseInfo({
        support: this.recommend,
        orderByColumn: orderings.toString(),
        isAsc: this.timeSorted ? 'asc' : 'desc',
        pageNum: 1,
        pageSize: 10
      });
    }
  }
  ,
}
</script>

<style lang="scss">
@import "../../common/style/theme";

.home-content {

  .banner {
    position: relative;
    width: 100%;
    overflow: hidden;

    .bracket {
      margin-top: 25%;
      @media only screen and (max-width: $responsive-sm) {
        margin-top: 38%;
      }
    }

    .target {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }
  }

  .none-article {
    width: 100%;

    .load-article {
      height: 100px;
      max-width: 100%;
      position: relative;
      border: 1px solid #eee;

      .load-article-icon {
        animation: ani-demo-spin 1s linear infinite;

        @keyframes ani-demo-spin {
          from {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(180deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      }

    }
  }

  .thumb-cards {
    margin-top: 15px;
  }
}
</style>
