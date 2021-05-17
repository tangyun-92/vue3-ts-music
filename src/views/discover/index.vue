<template>
  <div>
    <t-header />
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import THeader from '@/components/THeader/index.vue'

export default defineComponent({
  name: 'Discover',
  components: {
    THeader
  }
})
</script>

<style lang='scss' scoped>
</style>
