<template>
  <div class="layout-content">
    <Row>
      <Col :xs="24" :sm="24" :md="24" :lg="ExpandLeftColumn ? 24 : 17">
        <div class="layout-left">
          <!--面包屑-->
          <BreadcrumbList :breadcrumbs="breadcrumbs"></BreadcrumbList>
          <Card :style="{margin: '20px 0'}" dis-hover>
            <Row>
              <Col :span="2">
                <span class="categories-title">一级分类:</span>
              </Col>
              <Col :span="22">
                <Button v-for="(cate, index) in categoriesOptions"
                        :class="{'active':categoryLevel1 === index}"
                        :key="cate.id"
                        :style="{marginLeft: '10px'}"
                        type="text"
                        @click="changeCategory(1, index)"
                >
                  {{ cate.title }}
                </Button>
              </Col>
            </Row>
            <Row class="category-row">
              <Col :span="2">
                <span class="categories-title">二级分类:</span>
              </Col>
              <Col :span="22">
                <div
                    class=""
                    v-if="categoriesOptions[categoryLevel1].children.length > 0"
                >
                  <Button v-for="(cate, index2) in categoriesOptions[categoryLevel1].children"
                          :key="cate.id"
                          :class="{'active':categoryLevel2 === index2}"
                          :style="{marginLeft: '10px'}"
                          type="text"
                          @click="changeCategory(2, index2)"
                  >
                    {{ cate.title }}
                  </Button>
                </div>
                <div
                    class="wrapper"
                    v-else
                >暂无分类
                </div>
              </Col>


            </Row>
            <!--<Row class="category-row">-->
            <!--  <span class="categories-title">三级分类:</span>-->
            <!--  <Button v-for="cate in categoriesLevel3" :key="cate.id" :style="{marginLeft: '10px'}" type="text">-->
            <!--    {{ cate.title }}-->
            <!--  </Button>-->
            <!--</Row>-->
          </Card>

          <div class="container">
            <ArticleListCell
                v-for="article in articles"
                :article="article"
                :key="article.id"
            ></ArticleListCell>
          </div>
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
import {getBlogByCategoryId, getCategories} from "@/api/blog";
import initData from "@/mixins/initData";

export default {
  name: "CategoryHome",
  mixins: [initData],
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
    this.loadCategories()
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
      categoriesOptions: [],
      categoryLevel1: 0,
      categoryLevel2: 0,
      breadcrumbs: [
        {
          to: '/',
          title: '首页'
        },
        {
          to: '/categories',
          title: '分类'
        },
        {
          to: '',
          title: 'Java'
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      getArticlesBaseInfo: 'home/GET_ARTICLES_BASE_INFO'
    }),
    // 加载目录
    loadCategories() {
      getCategories().then(res => {
        this.categoriesOptions = res.data;
      })
    },
    changeCategory(level, index) {
      if (level === 1) {
        this.categoryLevel1 = index
      } else if (level === 2) {
        this.categoryLevel2 = index
        getBlogByCategoryId({categoryId: index}).then(res => {
          this.articles = res.rows;
        });
        this.breadcrumbs[2].title = this.categoriesOptions[this.categoryLevel1].children[index].title
      }
    }
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

.active {
  color: #57a3f3;
  background-color: #fff;
  border-color: transparent;
}

.wrapper {
  text-align: center;
  line-height: 32px;
  box-sizing: border-box;
}
</style>
