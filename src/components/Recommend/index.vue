<template>
  <div class="recommend" v-if="recommends.length > 0">
    <panel title="推荐阅读">
      <div slot="content" class="content">
        <div class="top">
          <p class="title">
            <router-link :to="'/article/' + first.id">
              {{ first.title }}
            </router-link>
          </p>
          <div class="tags">
            <Tag
                v-for="tag in first.tagList"
                :color="tag.color"
                type="border"
                :key="tag.id"
                class="border-tag"
            >
              {{ tag.title }}
            </Tag>
          </div>
          <div class="img" v-if="first.headerImg">
            <img :src="first.headerImg" :alt="first.title">
          </div>
          <p class="desc" v-if="first.summary">
            {{ first.summary | textLineBreak(60) }}
          </p>
          <p class="info">
            <span class="time">{{ first.createTime | socialDate }}</span>
            <span class="likes">
              <a href="">
                <Icon type="ios-heart">
                  {{ first.like }}
                </Icon>
              </a>
            </span>
            <span class="comments">
              <a href="">
                <Icon type="ios-create"></Icon>
                {{ first.commentCount }}
              </a>
            </span>
            <span class="readings">
              <a href="">
                <Icon type="ios-eye"></Icon>
                {{ first.click }}
              </a>
            </span>
          </p>
        </div>
        <ul class="others"></ul>
      </div>
    </panel>
  </div>
</template>

<script>
import Panel from '@/components/Panel';
import {mixin} from "@/utils";
import {mapActions, mapState} from "vuex";

export default {
  name: "Recommend",
  components: {
    'panel': Panel
  },
  computed: {
    ...mapState({
      recommends: state => state.common.recommends
    }),
    first() {
      return this.articleSlice(0, 1)[0];
    }
  },
  mixins: [mixin],
  mounted() {
    if (!this.$store.state.common.recommends || this.$store.state.common.recommends.length === 0) {
      this['common/GET_RECOMMENDS']();
    }
  },
  methods: {
    ...mapActions(['common/GET_RECOMMENDS']),
    articleSlice(start, end) {
      return this.recommends.slice(start, end);
    }
  }
}
</script>

<style lang="scss">
@import "../../common/style/theme";

.recommend {
  background: $default-background-color;

  .content {
    padding: 5px 20px 15px;
    border-left: 1px solid $default-border-color;

    .top, .others {
      display: block;
      overflow: hidden;

      .tags {
        margin-bottom: 10px;
      }

      .title {
        text-align: left;
        font-size: 16px;
        line-height: 23px;
        margin-bottom: 5px;

        > a {
          display: inline;
          color: $default-title-color;

          &:hover {
            text-decoration: underline;
            color: $default-title-hover-color;
          }
        }
      }

      .info {
        margin: 5px 0 0;

        span {
          font-size: 13px;
          line-height: 18px;
          font-weight: 100;
          color: $default-info-color;

          + span {
            float: right;
            margin-left: 10px;
          }
        }

        a {
          display: inline-block;
          color: #777777;
          cursor: pointer;

          &:hover {
            color: $default-link-hover-color;
          }
        }
      }

      .img {
        padding-bottom: 30%;
        width: 100%;
        height: 0;
        margin: 5px 0;
        overflow: hidden;

        img {
          width: 100%;
          transition: All 0.4s ease-in-out;
          transform: scale(1.0);
          zoom: 1.0;
        }
      }

      .desc {
        text-align: justify;
        color: $default-info-color;
        font-size: 13px;
        line-height: 20px;
        margin: 5px 0 0;
      }

      &:hover {
        img {
          transition: All 0.4s ease-in-out;
          transform: scale(1.05);
          zoom: 1.05;

        }
      }
    }

    .others {
      li {
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid $default-border-color;
      }
    }
  }
}

</style>
