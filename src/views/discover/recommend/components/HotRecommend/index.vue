<template>
  <div class="hot-recommend">
    <t-recommend-title :title="'热门推荐'" :url="'/discover/play-list'" />
    <div class="list">
      <t-songs-cover
        v-for="item in hotRecommendList"
        :key="item.id"
        :data="item"
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, ref } from 'vue'
import { getHotRecommend } from '@/api/discover/recommend'
import TRecommendTitle from '@/components/TRecommendTitle/index.vue'
import TSongsCover from '@/components/TSongsCover/index.vue'

export default defineComponent({
  name: 'HotRecommend',
  components: { TRecommendTitle, TSongsCover },
  setup() {
    const hotRecommendList = ref()
    onMounted(() => {
      getHotRecommend(1).then((res) => {
        hotRecommendList.value = res.result.slice(0, 8)
      })
    })

    return {
      hotRecommendList
    }
  }
})
</script>

<style lang='scss' scoped>
@import './index.scss'
</style>
