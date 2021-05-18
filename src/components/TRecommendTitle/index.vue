<template>
  <div class="rec-title sprite_02">
    <div class="title-left">
      <router-link :to="url" class="tit">{{ title }}</router-link>
      <div class="tab">
        <router-link class="tab-tit" to="#">华语</router-link>
        <span class="line">|</span>
        <router-link class="tab-tit" to="#">流行</router-link>
        <span class="line">|</span>
        <router-link class="tab-tit" to="#">摇滚</router-link>
        <span class="line">|</span>
        <router-link class="tab-tit" to="#">民谣</router-link>
        <span class="line">|</span>
        <router-link class="tab-tit" to="#">电子</router-link>
      </div>
    </div>
    <div class="more">
      <router-link class="more-tit" :to="url">更多</router-link>
      <i class="cor sprite_02">&nbsp;</i>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'TRecommendTitle',
  props: {
    title: String,
    url: String
  }
})
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>
