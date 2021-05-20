<template>
  <div class="article-content layout-content">
    <Row>
      <!--文章内容-->
      <Col :xs="24" :sm="24" :md="24" :lg="ExpandLeftColumn ? 24 : 17">
        <div class="layout-left">
          <!--文章头部-->
          <article-header :article="article"/>
          <article-content v-highlight>
            <div class="article-details" id="article-main-page" slot="content" ref="article">
              <div class="detail" v-if="article">
                <article class="typo container article-main-content" v-highlight v-html="article.htmlContent"></article>
                <div class="detail-footer" v-if="article.updateTime !== null">
                  以上内容添加于 {{ article.createTime | socialDate }}
                  更新于 {{ article.updateTime | socialDate }}
                </div>
              </div>
            </div>
          </article-content>
          <article-footer :article="article"/>
        </div>
      </Col>
      <!--推荐阅读、文章目录-->
      <Col :xs="0" :sm="0" :md="0" :lg="ExpandLeftColumn ? 0 : 7">
        <div class="layout-right">
          <!--推荐文章-->
          <!--<recommend></recommend>-->
          <Affix :offset-top="60">
            <side-toc style="margin-top: 15px" ref="sideToc"></side-toc>
          </Affix>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import {mixin} from "@/utils";
import {mapActions, mapMutations, mapState} from "vuex";
import ArticleHeader from "@/components/Article/ArticleHeader";
import ArticleFooter from "@/components/Article/ArticleFooter";
import SideToc from '@/components/SideToc';
import tocbot from 'tocbot';
import ArticleContent from "@/components/Article/ArticleContent";

export default {
  name: "ArticleView",
  components: {
    'article-footer': ArticleFooter,
    'article-content': ArticleContent,
    'article-header': ArticleHeader,
    'side-toc': SideToc
  },
  data() {
    return {
      id: undefined,
      tocbotControl: undefined
    }
  },
  mixins: [mixin],
  mounted() {
    this.refreshData();
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开时清空vuex中数据
    this.clearArticleInfo();
    next();
  },
  beforeRouteUpdate(to, from, next) {
    next();
    this.id = this.$route.params.id;
    this.refreshData();
  },
  beforeDestroy() {
    // 导航离开时清空vuex中数据
    this.clearArticleInfo();
    // 恢复通栏
    this.resetExpandColumn();
    if (this.tocbotControl !== undefined) {
      this.tocbotControl.destroy();
    }
  },
  computed: {
    ...mapState({
      article: state => state.article.article,
      ExpandLeftColumn: state => state.base.ExpandLeftColumn
    })
  },
  methods: {
    ...mapMutations({
      clearArticleInfo: 'article/CLEAR_ARTICLE_DETAIL_INFO',
      resetExpandColumn: 'base/RESET_EXPAND_COLUMN'
    }),
    ...mapActions({
      getArticleDetailInfo: 'article/GET_ARTICLE_DETAIL_INFO'
    }),
    /*更新文章内容*/
    refreshData() {
      this.id = this.$route.params.id;
      this.getArticleDetailInfo(this.id).then(() => {
        this.refreshContent();
      });
    },
    /*更新目录*/
    refreshContent() {
      /*更新标题*/
      document.title = this.article.title + ' | Double Blog';
      this.$nextTick(() => {
        this.addTocScrollSpy();
      });
    },
    addTocScrollSpy() {
      if (!this.$refs.article) return;
      let tocSelector = '#side-toc';
      if (document.body.clientWidth <= 1200) {
        tocSelector = '#sidebar-toc';
      }
      this.tocbotControl = tocbot.init({
        tocSelector,
        contentSelector: '#article-main-page',
        headingSelector: 'h1, h2, h3, h4, h5',
        linkClass: 'toc-link',
        activeLinkClass: 'is-active-link',
        listClass: 'toc-list',
        isCollapsedClass: 'is-collapsed',
        collapsibleClass: 'is-collapsible',
        listItemClass: 'toc-list-item',
        collapseDepth: 3,
        scrollSmooth: true,
        scrollSmoothDuration: 420,
        headingsOffset: 1,
        throttleTimeout: 50,
        positionFixedClass: 'is-position-fixed',
        fixedSidebarOffset: 'auto',
        includeHtml: true,
        onClick: false
      });
    }
  }

}
</script>
