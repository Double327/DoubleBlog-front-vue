<template>
  <div class="side-toc hide-scrollbar">
    <panel title="目录">
      <div id="side-toc" class="list" slot="content" ref="list"></div>
    </panel>
  </div>
</template>

<script>
import Panel from "@/components/Panel";

export default {
  name: "SideToc",
  components: {
    'panel': Panel
  }
}
</script>

<style lang="scss">
@import "../../common/style/theme";
@import "../../common/style/toc";

.side-toc {
  position: relative;
  background: #ffffff;
  max-height: 90vh;
  overflow: scroll;

  h4 {
    font-size: 18px;
    line-height: 18px;
    text-align: left;
  }

  .list {
    position: relative;
  }
}
</style>
