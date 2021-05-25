<template>
  <div class="simple-header">
    <head-room :speed="600" style="position: fixed;">
      <header>
        <!--移动版LOGO-->
        <div id="mobile-bar">
          <router-link class="logo" to="/">
            <img src="../../assets/logo.png" alt="LOGO"/>
          </router-link>
          <a class="menu-button" @click="showMobileMenu"></a>
        </div>
        <!--普通版LOGO-->
        <div id="header" class="show">
          <router-link class="test" id="logo" to="/">
            <img src="../../assets/logo.png" alt="LOGO">
            <div class="info">
              <span class="name">{{ $store.state.settings.F_Title }}</span>
              <span class="desc">{{ $store.state.settings.F_Title_Desc }}</span>
            </div>
          </router-link>
          <!--顶部导航条-->
          <ul id="nav">
            <!--类别导航-->
            <li class="nav-dropdown-container" v-for="(item, index) in menus" :key="index">
              <a v-if="item.target === true" :href="item.url" :target="item.target" class="nav-link">
                {{ item.title }}
              </a>
              <router-link v-else class="nav-link" :to="item.url">
                {{ item.title }}
              </router-link>
            </li>
          </ul>
        </div>
      </header>
    </head-room>
    <side-bar :categories="categories" :menus="menus" ref="sidebar"></side-bar>
  </div>
</template>

<script>
import SideBar from "@/components/Header/SideBar";
import {headroom} from 'vue-headroom';
import {mapActions, mapMutations, mapState} from 'vuex';

export default {
  name: "double-header",
  components: {
    'head-room': headroom,
    'side-bar': SideBar
  },
  computed: {
    ...mapState({
      categories: state => state.base.categories,
      menus: state => state.base.menus,
      siteTheme: state => state.base.siteTheme
    })
  },
  mounted() {
    if (!this.$store.state.base.categories) {
      this.getCategories();
    }
    if (!this.$store.state.base.menus) {
      this.getMenus();
    }
  },
  data() {
    return {}
  },
  methods: {
    ...mapMutations({
      updateSiteTheme: 'base/UPDATE_SITE_THEME'
    }),
    ...mapActions({
      getCategories: 'base/GET_CATEGORIES',
      getMenus: 'base/GET_MENUS'
    }),
    routerLink(category) {
      let router = {};
      router.name = "articles/category";
      router.params = {};
      router.params['id'] = category.id;
      return router;
    },
    showMobileMenu() {
      // 显示手机端的菜单
      let sidebar = this.$refs.sidebar;
      sidebar.toggleSideBar();
    },
  }
}
</script>

<style lang="scss">
@import "style/header";
</style>
