<template>
  <div class="side-bar" @touchmove.stop.prevent :class="{ open: show }">
    <div class="main-area">
      <div class="top-wrapper" @touchmove.stop>
        <div class="top-area">
          <img src="http://localhost/static/img/background.c7c666dc.jpg" alt="">
          <div class="site-info">
            <h1 class="site-name">{{ $store.state.settings.F_Title }}</h1>
            <h1 class="site-desc">{{ $store.state.settings.F_Title_Desc }}</h1>
          </div>
        </div>
        <div class="sidebar-menus">
          <div class="site-nav">
            <p>
              <Icon type="ios-map"/>
              网站导航
            </p>
            <i-switch v-model="showNav">
              <span slot="open">开</span>
              <span slot="close">关</span>
            </i-switch>
          </div>
          <ul class="nav-menu" :class="{'hide': !showNav}">
            <!-- 类别导航 -->

            <li class="nav-dropdown-container" v-for="(item, index) in menus" :key="index">
              <a v-if="item.target ===true" class="nav-link" :href="item.url" :target="item.target">
                {{ item.title }}
              </a>
              <router-link v-if="item.target === false" class="nav-link" :to="item.url">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
          <div class="sidebar-toc-list" ref="list" v-show="showToc">
            <div class="site-nav">
              <p>
                <Icon type="ios-list-box"/>
                文章目录
              </p>
            </div>
            <div id="sidebar-toc" class="list" @click.prevent></div>
          </div>
        </div>
      </div>
      <div class="sidebar-operate-area" @click.stop>
        <ButtonGroup size="small">
          <Button style="width:30px;" :icon="isDark ? 'ios-sunny' : 'ios-moon'" ghost
                  @click="toggleTheme">
          </Button>
          <Button style="width:40px;" icon="ios-log-in" @click="toIndex" ghost>
          </Button>
        </ButtonGroup>
      </div>
    </div>
    <div class="mask" @click.prevent="toggleSideBar"></div>
  </div>
</template>

<script>
import {mapMutations, mapState} from 'vuex';

export default {
  name: 'SideBar',
  props: {
    categories: {
      Type: Array,
      default: []
    },
    menus: {
      Type: Array,
      default: []
    }
  },
  data() {
    return {
      show: false,
      showNav: false
    };
  },
  beforeRouteUpdate(to, from, next) {
    next();
  },
  computed: {
    ...mapState({
      siteTheme: state => state.base.siteTheme
    }),
    isDark: function () {
      return this.siteTheme === 'dark';
    },
    showToc: function () {
      return (this.$route.name === 'article' ||
          this.$route.name === 'book' ||
          this.$route.name === 'book/note' ||
          this.$route.name === 'movie' ||
          this.$route.name === 'album'
      );
    }
  },
  methods: {
    ...mapMutations({
      updateSiteTheme: 'base/UPDATE_SITE_THEME'
    }),
    //跳转到后台首页
    toIndex() {
      window.open("http://www.baidu.com", '_blank')
    },
    rootRouterLink(category) {
      let router = {};
      router.name = category.category_type;
      return router;
    },
    routerLink(category) {
      let router = {};
      router.name = "articles/category";
      router.params = {};
      router.params['id'] = category.id;
      return router;
    },
    toggleSideBar() {
      this.show = !this.show;
      this.showNav = !(this.$route.name === 'article' ||
          this.$route.name === 'book' ||
          this.$route.name === 'book/note' ||
          this.$route.name === 'movie' ||
          this.$route.name === 'album'
      );
    },
    toggleTheme() {
      this.updateSiteTheme(this.siteTheme === 'dark' ? 'default' : 'dark');
    }
  }
};
</script>

<style lang="scss">
@import "style/sidebar";
</style>
