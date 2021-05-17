/*
 * @Author: 唐云 
 * @Date: 2021-05-17 15:34:30 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-05-17 17:39:03
 头部组件
 */
<template>
  <div class="t-header">
    <div class="wrap-1100 header-box">
      <div class="logo sprite_01"></div>
      <div class="nav">
        <ul>
          <li v-for="(item, index) in headerLinks" :key="item.title" :class="{'active': isActive === index}" @click="handleClickNav(index)">
            <router-link :to="item.link">
              {{ item.title }}
              <i class="sprite_01 icon" v-if="index < 3"></i>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="search"></div>
      <div class="framer-center"></div>
      <div class="login"></div>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue'
import { headerLinks } from '@/common/local-data'

export default defineComponent({
  name: 'THeader',
  setup() {
    let isActive = ref(0)
    const handleClickNav = (index: number) => {
      isActive.value = index
    }

    return {
      headerLinks,
      isActive,
      handleClickNav
    }
  }
})
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>
