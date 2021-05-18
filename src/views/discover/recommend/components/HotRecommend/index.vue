<template>
  <div>
    <t-recommend-title :title="'热门推荐'" :url="'/discover/play-list'" />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import TRecommendTitle from '@/components/TRecommendTitle/index.vue'

export default defineComponent({
  name: 'HotRecommend',
  components: { TRecommendTitle }
})
</script>

<style lang='scss' scoped>
</style>
