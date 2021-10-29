<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { onMounted } from 'vue'
// import { useRoute, useRouter } from 'vue-router'

export default {
  name: 'App',
  setup(props, context) {
    onMounted(() => {
      // console.log(route)
      // console.log(router)
    })
    // const route = useRoute()
    // const router = useRouter()
  }
}
</script>
<style scoped lang="scss">
html,body,#app {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height:100vh;
}
</style>
