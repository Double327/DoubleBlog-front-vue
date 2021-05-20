<template>
  <div class="license-tag" v-if="license !== undefined">
    <a :href="license.link" target="_blank">
      <span class="name" :style="{background: license.color, border: '1px solid ' + license.color}">License</span>
      <span class="type" :style="{color: license.color, border: '1px solid ' + license.color}">{{ license.name }}</span>
      <span class="desc" v-if="license.desc.length > 0" v-html="license.desc"></span>
    </a>
  </div>
</template>

<script>
export default {
  name: "LicenseTag",
  props: {
    license: {
      Type: Object,
      default() {
        return {
          color: 'rgb(235, 158,5)',
          name: 'CC BY-SA 4.0',
          desc: '转载如有更改，请联系博主。',
          link: ''
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "../../common/style/theme";

.license-tag {
  margin: 10px 0;
  font-size: 0;

  a {
    display: block;

    &:hover {
      cursor: pointer;
      text-decoration: none;
    }

    .name, .type, .desc {
      display: inline-block;
      padding: 5px 8px;
      margin: 3px 0;
      font-size: 13px;
      text-align: center;
    }

    .name {
      background-color: $default-link-hover-color;
      color: $white;
      border: 1px solid $default-link-hover-color;
      font-weight: 700;
    }

    .type {
      background-color: $white;
      color: $default-link-hover-color;
      margin-right: 8px;
      border: 1px solid $default-link-hover-color;
    }

    .desc {
      padding-left: 0;
      font-size: 14px;
      color: $default-desc-color;
    }
  }

  a {
    color: $default-link-color;

    &:hover {
      color: $default-link-hover-color;
    }
  }
}
</style>
