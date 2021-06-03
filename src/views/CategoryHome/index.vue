<template>
  <div class="layout-content">
    <Row>
      <Col :xs="24" :sm="24" :md="24" :lg="ExpandLeftColumn ? 24 : 17">
        <div class="layout-left">
          <!--面包屑-->
          <BreadcrumbList :breadcrumbs="breadcrumbs"></BreadcrumbList>
          <Card :style="{margin: '20px 0'}" dis-hover v-if="categoriesOptions.length > 0">
            <Row class="category-row">
              <Col :span="2">
                <span class="categories-title">一级分类:</span>
              </Col>
              <Col :span="22">
                <Button
                    type="text"
                    :class="{'active': !queryParams.categoryId}"
                    @click="changeCategory(undefined, 1)"
                >
                  全部
                </Button>
                <Button v-for="cate in categoriesOptions"
                        :class="{'active':queryParams.categoryId === cate.id || hasChildren(cate, queryParams.categoryId)}"
                        :key="cate.id"
                        :style="{marginLeft: '10px'}"
                        type="text"
                        @click="changeCategory(cate.id, 1)"
                >
                  {{ cate.title }}
                </Button>
              </Col>
            </Row>
            <Row class="category-row" v-if="levelOneCategory">
              <Col :span="2">
                <span class="categories-title">二级分类:</span>
              </Col>
              <Col :span="22">
                <Button
                    type="text"
                    :class="{'active':queryParams.categoryId === levelOneCategory}"
                    @click="changeCategory(undefined, 2)"
                >
                  全部
                </Button>
                <Button v-for="subCate in subCategory"
                        :key="subCate.id"
                        :class="{'active':queryParams.categoryId === subCate.id}"
                        :style="{marginLeft: '10px'}"
                        type="text"
                        @click="changeCategory(subCate.id, 2)"
                >
                  {{ subCate.title }}
                </Button>
              </Col>
            </Row>
          </Card>

          <div class="container articles" v-if="articles.length > 0">
            <ArticleListCell
                v-for="article in articles"
                :article="article"
                :key="article.id"
            ></ArticleListCell>
          </div>
          <div class="container none-articles" v-else>
            暂无文章
          </div>
          <Page
              :total="articleTotal"
              :page-size="queryParams.pageSize"
              :current="queryParams.pageNum"
              @on-change="changePage"
          ></Page>
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
import {getCategories} from "@/api/blog";
import initData from "@/mixins/initData";

export default {
  name: "CategoryHome",
  mixins: [initData],
  beforeMount() {
    this.loadCategories();
  },
  components: {BreadcrumbList, Recommend, ArticleListCell},
  computed: {
    ...mapState({
      ExpandLeftColumn: state => state.base.ExpandLeftColumn,
      articles: state => state.articleHome.articles,
      articleTotal: state => state.articleHome.total
    }),
  },
  data() {
    return {
      categoriesOptions: [],
      // 一级分类
      levelOneCategory: undefined,
      subCategory: [],
      queryParams: {
        categoryId: undefined
      },
      breadcrumbs: [
        {
          to: '/',
          title: '首页'
        },
        {
          to: '/categories',
          title: '分类'
        }
      ]
    }
  },
  methods: {
    ...mapActions({
      getArticlesBaseInfo: 'articleHome/GET_ARTICLES_BASE_INFO'
    }),
    // 加载目录
    loadCategories() {
      getCategories().then(res => {
        this.categoriesOptions = res.data;
        this.loadArticles();
      });
    },
    // 切换分类
    changeCategory(categoryId, level) {
      if (level === 1) {
        this.levelOneCategory = categoryId;
        this.queryParams.categoryId = categoryId;
      } else {
        // category:undefined level:2
        if (!categoryId) {
          // category:undefined level:2
          this.queryParams.categoryId = this.levelOneCategory;
        } else {
          // category:有值 level:2
          this.queryParams.categoryId = categoryId;
        }
      }
      // 重载文章
      this.loadArticles();

      // 获取二级分类
      if (!this.queryParams.categoryId) {
        this.subCategory = [];
        return;
      }
      let subCategoryList = this.categoriesOptions.filter(cate => cate.id === this.queryParams.categoryId);
      if (subCategoryList.length > 0) {
        this.subCategory = subCategoryList[0].children;
      }
    },
    // 检查是否包含分类
    hasChildren(root, categoryId) {
      let list = root.children.filter(item => item.id === categoryId)
      return list.length > 0
    },
    // 加载文章
    loadArticles() {
      this.getArticlesBaseInfo({'params': this.queryParams, 'reset': true});
    },
    // 分页切换
    changePage(page) {
      this.queryParams.pageNum = page;
      this.loadArticles();
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

.container.none-articles {
  text-align: center;
}
</style>
