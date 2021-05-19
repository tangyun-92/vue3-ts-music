/*
 * @Author: 唐云 
 * @Date: 2021-05-19 09:50:42 
 * @Last Modified by: 唐云
 * @Last Modified time: 2021-05-19 11:16:42
 歌曲封面组件
 */
<template>
  <div class="songs-cover">
    <div class="cover">
      <img :src="getSizeImage(list.picUrl || list.coverImgUrl, 140)" />
      <a class="msk sprite_cover" :title="list.name" href=""></a>
      <div class="bottom sprite_cover">
        <div class="info">
          <span class="icon sprite_icon"></span>
          <span class="num">{{ getCount(list.playCount) }}</span>
        </div>
        <a class="play sprite_icon"></a>
      </div>
    </div>
    <div class="des">
      <a calss="tit" href="">{{ list.name }}</a>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, PropType } from 'vue'
import { getCount, getSizeImage } from '@/utils/format-utils'

interface DataProps {
  picUrl: string
  coverImgUrl: string
  name: string
  playCount: number
}

export default defineComponent({
  name: 'SongsCover',
  props: {
    data: {
      type: Object as PropType<DataProps>,
      required: true
    }
  },
  setup(props) {
    const list = computed(() => props.data)

    return {
      list,
      getCount,
      getSizeImage
    }
  }
})
</script>

<style lang='scss' scoped>
@import './index.scss';
</style>
