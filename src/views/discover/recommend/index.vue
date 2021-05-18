/*
 * @Author: 唐云 
 * @Date: 2021-05-18 16:41:19 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-05-18 17:15:53
 发现音乐-推荐
 */
<template>
  <div>
    <banner />
    <div class="wrap-980 content">
      <div class="wrap-left">
        <hot-recommend></hot-recommend>
      </div>
      <div class="wrap-right"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Banner from './components/Banner/index.vue'
import HotRecommend from './components/HotRecommend/index.vue'

export default defineComponent({
  name: 'Recommend',
  components: { Banner, HotRecommend }
})
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>
