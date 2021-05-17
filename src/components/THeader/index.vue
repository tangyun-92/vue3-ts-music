/*
 * @Author: 唐云 
 * @Date: 2021-05-17 15:34:30 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-05-17 16:06:24
 头部组件
 */
<template>
  <div class="t-header">
    <div class="wrap-1100 header-box">
      <div class="logo"></div>
      <div class="nav"></div>
      <div class="search"></div>
      <div class="framer-center"></div>
      <div class="login"></div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'THeader'
})
</script>

<style lang='scss' scoped>
@import './index.scss'
</style>
