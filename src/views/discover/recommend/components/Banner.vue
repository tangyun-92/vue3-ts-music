<template>
  <div :style="{ background: 'url(' + bgImage + ') center center/6000px' }">
    <div class="wrap-banner">
      <div class="banner">
        <a-carousel :after-change="onChange" ref="bannerRef" autoplay>
          <div v-for="item in bannerList" :key="item.imageUrl">
            <img :src="item.imageUrl" />
          </div>
        </a-carousel>
        <a class="btn btn-prev sprite_banner" @click="bannerRef.prev()"></a>
        <a class="btn btn-next sprite_banner" @click="bannerRef.next()"></a>
      </div>
      <div class="download">
        <a href="#" class="btn"></a>
        <p>PC 安卓 IPhone WP IPad Mac 六大客户端</p>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { computed, defineComponent, onMounted, ref } from 'vue'
import { getTopBanners } from '@/api/discover/recommend/index'

export default defineComponent({
  name: 'DiscoverBanner',
  setup() {
    const bannerRef = ref() // 轮播ref
    const bannerList = ref() // banner列表
    const currentIndex = ref(0) // 当前选中index
    /**
     * 轮播切换
     */
    const onChange = (current: number) => {
      currentIndex.value = current
    }
    // 监听banner中index的改变，同时改变背景图
    const bgImage = computed(
      () =>
        bannerList.value &&
        bannerList.value[currentIndex.value].imageUrl + '?imageView&blur=40x20'
    )
    onMounted(() => {
      /**
       * 获取banner列表数据
       */
      getTopBanners().then((res) => {
        bannerList.value = res.banners
      })
    })

    return {
      bannerRef,
      bannerList,
      onChange,
      currentIndex,
      bgImage
    }
  }
})
</script>

<style lang='scss' scoped>
.ant-carousel :deep(.slick-slide) {
  width: 730px;
  text-align: center;
  height: 285px;
  background: #364d79;
  overflow: hidden;

  img {
    width: 730px;
    height: 285px;
  }
}

.ant-carousel :deep(.slick-dots) li button {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  margin: 0 7px;
}

.wrap-banner {
  position: relative;
  width: 982px;
  height: 285px;
  margin: 0 auto;

  .banner {
    width: 730px;
    height: 285px;

    .btn {
      display: block;
      position: absolute;
      top: 50%;
      margin-top: -31px;
      width: 37px;
      height: 63px;
    }

    .btn-prev {
      background-position: 0 -360px;
      left: -68px;
    }

    .btn-next {
      background-position: 0 -508px;
      right: -68px;
    }
  }

  .download {
    position: absolute;
    top: 0;
    right: -1px;
    z-index: 20;
    width: 254px;
    height: 285px;
    background: url(../../../../assets/img/download.png);

    a {
      display: block;
      width: 215px;
      height: 56px;
      margin: 186px 0 0 19px;
      background-position: 0 9999px;
      text-indent: -9999px;
    }

    p {
      margin: 10px auto;
      text-align: center;
      color: #8d8d8d;
    }
  }
}
</style>
