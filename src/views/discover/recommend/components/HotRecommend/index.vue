/*
 * @Author: 唐云 
 * @Date: 2021-05-19 13:39:08 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-05-20 09:27:57
 热门推荐
 */
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
  name: 'RecommendHotRecommend',
  components: { TRecommendTitle, TSongsCover },
  setup() {
    const hotRecommendList = ref()
    onMounted(() => {
      getHotRecommend(8).then((res) => {
        hotRecommendList.value = res.result
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
