<template>
  <div class="common-footer">
    <BackTop :height="300"></BackTop>
    <p class="copyright">
      <a target="_blank" href="http://www.miit.gov.cn">{{ $store.state.settings.F_ICP }}</a>
      <span>|</span>
      {{ $store.state.settings.F_Copyright }}
      <span>|</span>
      <span v-html="$store.state.settings.F_Copyright_Desc"></span>
    </p>
    <p class="copyright-english" v-html="$store.state.settings.F_Copyright_Desc_En"></p>
  </div>
</template>

<script type="text/ecmascript-6">
import {mapMutations, mapState} from 'vuex';

export default {
  name: 'Footer',
  data() {
    return {
      bottom: 120,
      right: 20,
      topBtnMouseOver: false,
      bottomBtnMouseOver: false,
      animationFrameId: undefined
    };
  },
  mounted() {
    if (document.body.clientWidth <= 1200) {
      this.bottom = 20;
    }
  },
  computed: {
    ...mapState({
      ExpandLeftColumn: state => state.base.ExpandLeftColumn
    }),
  },
  methods: {
    ...mapMutations({
      updateExpandLeftColumn: 'base/UPDATE_EXPAND_LEFT_COLUMN'
    })
  }
};
</script>
<style lang="scss">
@import "../../common/style/theme";

.common-footer {
  padding: 15px 5px;
  margin-top: 50px;
  text-align: center;
  background: $default-background-color;
  border-top: 1px solid $default-border-color;
  z-index: 99;

  .top {
    text-align: center;
    border-radius: 2px;

    i.icon {
      display: block;
      margin-bottom: 5px;
      padding: 6px 12px;
      color: $default-background-color;
      background: rgba($default-link-color, .7);
      cursor: pointer;

      &:hover {
        background: rgba($default-link-hover-color, .7);
      }

      &::before {
        display: inline-block;
        font-size: 20px;
        width: 15px;
      }
    }
  }

  .sidebar-menus {

  }

  p {
    margin: 0 auto;
    font-size: 15px;
    line-height: 22px;
    font-weight: 100;

    span {
      padding: 0 10px;
    }
  }

  .copyright, .copyright-english {
    margin: 0 10px;
    color: $default-title-color;

    a {
      color: $default-link-color;

      &:hover {
        color: $default-link-hover-color;;
      }
    }
  }
}
</style>

