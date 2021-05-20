<template>
  <div class="">
    <button @click="test">Login</button>
  </div>
</template>

<script>
import {login} from "@/api/test";

export default {
  name: "index",
  methods: {
    test() {
      login("double", "123456"
      ).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
