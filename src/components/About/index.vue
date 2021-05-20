<template>
  <div class="about">
    <img src="../../assets/background.jpg" alt="" class="background">
    <img src="../../assets/avatar.jpg" alt="" class="avatar">
    <p class="name">布尔先生</p>
    <p class="desc">Double Blog</p>
  </div>
</template>

<script>
export default {
  name: "About"
}
</script>

<style lang="scss">
@import "../../common/style/theme";
.about {
  position: relative;
  text-align: center;
  padding-bottom: 20px;
  margin-top: 0;
  background-color: $default-background-color;
  border: 1px solid $default-border-color;

  img.background {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 125px;
    z-index: 1;
  }

  img.avatar {
    position: relative;
    margin: 75px auto 15px;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 5px solid $default-border-color;
    z-index: 9;
  }


}

</style>
