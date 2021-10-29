<template>
  <div>
    <h1>HOME</h1>
    <div class="hello-home">
      hellohome
    </div>
  </div>
</template>

<script setup>
// import { defineProps, reactive } from 'vue'
import { defineProps } from 'vue'

defineProps({
  msg: String
})

// const state = reactive({ count: 0 })
</script>

<style scoped lang="scss">
.hello-home {
  // @include width-height-100;
  // color: map-get($color , 1);
}
</style>
