/*
 * @Author: 唐云 
 * @Date: 2021-05-18 16:41:19 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-05-20 09:10:55
 发现音乐-推荐
 */
<template>
  <div>
    <banner />
    <div class="wrap-980 content">
      <div class="wrap-left">
        <hot-recommend />
        <new-album />
        <top-list />
      </div>
      <div class="wrap-right"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Banner from './components/Banner/index.vue'
import HotRecommend from './components/HotRecommend/index.vue'
import NewAlbum from './components/NewAlbum/index.vue'
import TopList from './components/TopList/index.vue'

export default defineComponent({
  name: 'Recommend',
  components: { Banner, HotRecommend, NewAlbum, TopList }
})
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>
