<template>
  <div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { getTopBanners } from '@/api/discover/recommend'

export default defineComponent({
  name: 'Home',
  setup() {
    onMounted(() => {
      getTopBanners().then(res => {
        console.log(res)
      })
    })
  }
})
</script>
