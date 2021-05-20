<template>
  <div class="article-header" v-if="article !== undefined">
    <!--文章状态-->
    <div class="status">
      <div class="tags">
        <Tag
            color="primary"
            v-for="(item, index) in article.tagTitleList"
            class="dot-tag"
            :key="index"
        >
          {{ item }}
        </Tag>
      </div>
    </div>
    <!--文章标题-->
    <p class="title">{{ article.title }}</p>
    <!--文章内容-->
    <Row>
      <Col :xs="24" :sm="10" :md="10" :lg="10" style="padding-left: 0; padding-right: 0;">
        <p class="info">
          <span class="author">作者 / <a>{{article.author}}</a></span>
          <span class="publish-time">
            发布于 / <a>{{article.createTime | socialDate}}</a>
          </span>
        </p>
      </Col>
      <Col :xs="24" :sm="14" :md="14" :lg="14" style="padding-left: 0;padding-right: 0;">
        <p class="operate_info">
          <span class="readings">
            <a href="">
              <Icon type="ios-eye"/> {{ article.click }} 阅读
            </a>
          </span>
          <span class="comments">
            <a>
              <Icon type="ios-create"/> {{ article.commentList | getCommentListLength }} 评论
            </a>
          </span>
          <span class="likes">
            <a>
              <Icon type="ios-heart"/> {{ article.like }} 赞
            </a>
          </span>
        </p>
      </Col>
    </Row>
    <!--文章摘要-->
    <p class="abstract" v-if="article.summary">摘要: {{ article.summary }}</p>
  </div>
</template>

<script>
import {mixin} from "@/utils";

export default {
  name: "ArticleHeader",
  props: {
    article: {
      Type: Object,
      default: undefined
    },
    languages: {
      Type: []
    }
  },
  mixins: [mixin],
}
</script>

<style lang="scss">
@import "../../common/style/theme";

.article-header {
  padding-bottom: 10px;
  text-align: left;

  .status {
    display: flex;
    margin-bottom: 10px;
    line-height: 100%;

    .switches {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      cursor: pointer;

      .ivu-btn-ghost {

      }
    }
  }

  .title {
    font-weight: 500;
    color: $default-title-color;

    @media only screen and (max-width: $responsive-sm) {
      font-size: 24px;
      line-height: 27px;
    }

    @media screen and (min-width: $responsive-sm) {
      font-size: 25px;
      line-height: 35px;
    }

    @media screen and (min-width: $responsive-md) {
      font-size: 26px;
      line-height: 35px;
    }

    @media screen and (min-width: $responsive-lg) {
      font-size: 27px;
      line-height: 35px;
    }

  }

  .info, .operate_info {
    margin-top: 10px;
    font-size: 14px;
    font-weight: 200;
    line-height: 18px;
    color: $default-desc-color;
    @media only screen and (max-width: 768px) {
      margin-top: 7px;
      font-size: 12px;
      line-height: 15px;
    }

    a {
      color: $default-link-color;
      cursor: pointer;

      &:hover {
        color: $default-link-hover-color;
      }
    }

    .publish-time {
      margin-left: 20px;
    }
  }

  .operate_info {
    text-align: right;
    @media only screen and (max-width: 768px) {
      text-align: left;
    }

    span {
      + span {
        margin-left: 10px;
      }

      a {
        cursor: pointer;

        &:hover {
          color: $default-link-hover-color;
        }
      }
    }
  }

  .abstract {
    color: $default-desc-color;
    border: 1px dashed $default-border-color;
    background: $default-border-color;

    @media only screen and (max-width: $responsive-sm) {
      padding: 8px;
      margin-top: 8px;
      font-size: 13px;
      line-height: 18px;
    }

    @media screen and (min-width: $responsive-sm) {
      padding: 15px;
      margin-top: 8px;
      font-size: 14px;
      line-height: 24px;
    }

    @media screen and (min-width: $responsive-md) {
      padding: 20px;
      margin-top: 15px;
      line-height: 28px;
    }

    @media screen and (min-width: $responsive-lg) {
      padding: 20px;
      margin-top: 15px;
      line-height: 28px;
    }
  }
}

</style>
