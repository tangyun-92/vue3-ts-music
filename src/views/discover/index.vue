<template>
  <div>
    <div class="sub-nav">
      <div class="wrap-1100">
        <ul class="nav">
          <li v-for="item in discoverMenu" :key="item.title">
            <router-link
              :to="item.link"
              @click="handleClickNav(item.link)"
              :class="{ active: isActive === item.link }"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, Ref } from 'vue'
import { discoverMenu } from '@/common/local-data'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Discover',
  setup() {
    const route = useRoute() // 路由
    const isActive: Ref<string> = ref(route.path) // 选中状态
    /**
     * nav导航点击事件
     */
    const handleClickNav = (link: string) => {
      isActive.value = link
    }

    return {
      discoverMenu,
      isActive,
      handleClickNav
    }
  }
})
</script>

<style lang='scss' scoped>
.sub-nav {
  width: 100%;
  height: 35px;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;

  .nav {
    padding-left: 180px;
    display: flex;

    li {
      height: 34px;
      text-align: center;

      a {
        color: #fff;
        display: inline-block;
        height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        border-radius: 20px;
        line-height: 21px;

        &:hover {
          text-decoration: none;
          display: inline-block;
          background: #9b0909;
        }
      }

      .active {
        text-decoration: none;
        display: inline-block;
        background: #9b0909;
      }
    }
  }
}
</style>
