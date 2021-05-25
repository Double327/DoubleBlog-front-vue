<template>
  <div class="layout-content">
    <Row>
      <Col :xs="24" :sm="24" :md="24" :lg="ExpandLeftColumn ? 24 : 17">
        <div class="layout-left">
          <!--面包屑-->
          <BreadcrumbList :breadcrumbs="breadcrumbs"></BreadcrumbList>
          <Card :style="{margin: '20px 0'}" dis-hover>
            <Row>
              <span class="categories-title">一级分类:</span>
              <Button v-for="cate in categoriesLevel1" :key="cate.id" :style="{marginLeft: '10px'}" type="text">
                {{ cate.title }}
              </Button>
            </Row>
            <Row class="category-row">
              <span class="categories-title">二级分类:</span>
              <Button v-for="cate in categoriesLevel2" :key="cate.id" :style="{marginLeft: '10px'}" type="text">
                {{ cate.title }}
              </Button>
            </Row>
            <Row class="category-row">
              <span class="categories-title">三级分类:</span>
              <Button v-for="cate in categoriesLevel3" :key="cate.id" :style="{marginLeft: '10px'}" type="text">
                {{ cate.title }}
              </Button>
            </Row>
          </Card>

          <ArticleListCell
              v-for="article in articles"
              :article="article"
              :key="article.id"
          ></ArticleListCell>
        </div>
      </Col>
      <Col :xs="0" :sm="0" :md="0" :lg="ExpandLeftColumn ? 0 : 7">
        <div class="layout-right">
          <Recommend></Recommend>
        </div>
      </Col>
    </Row>
  </div>
</template>

<script>
import Recommend from "@/components/Recommend";
import ArticleListCell from '@/components/ArticleListCell'
import {mapActions, mapState} from "vuex";
import BreadcrumbList from "@/components/BreadcrumbList";

export default {
  name: "index",
  beforeMount() {
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
  components: {BreadcrumbList, Recommend, ArticleListCell},
  computed: {
    ...mapState({
      ExpandLeftColumn: state => state.base.ExpandLeftColumn,
      articles: state => state.home.articles
    })
  },
  data() {
    return {
      categoriesLevel1: [
        {
          id: 1,
          title: '分类1-1'
        },
        {
          id: 2,
          title: '分类1-2'
        },
        {
          id: 3,
          title: '分类1-3'
        },
        {
          id: 4,
          title: '分类1-4'
        },
        {
          id: 5,
          title: '分类1-5'
        }
      ],
      categoriesLevel2: [
        {
          id: 6,
          title: '分类2-1'
        },
        {
          id: 7,
          title: '分类2-2'
        },
        {
          id: 8,
          title: '分类2-3'
        },
        {
          id: 9,
          title: '分类2-4'
        },
        {
          id: 10,
          title: '分类2-5'
        }
      ],
      categoriesLevel3: [
        {
          id: 11,
          title: '分类3-1'
        },
        {
          id: 12,
          title: '分类3-2'
        },
        {
          id: 13,
          title: '分类3-3'
        },
        {
          id: 14,
          title: '分类3-4'
        },
        {
          id: 15,
          title: '分类3-5'
        }
      ],
      breadcrumbs: [
        '首页',
        '分类',
        'Java'
      ]
    }
  },
  methods: {
    ...mapActions({
      getArticlesBaseInfo: 'home/GET_ARTICLES_BASE_INFO'
    }),
  }
}
</script>

<style scoped>
.category-row {
  margin-top: 20px;
}

.categories-title {
  line-height: 32px;
  font-weight: 400;
  margin-right: 10px;
}
</style>
