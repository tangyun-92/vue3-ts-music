<template>
  <div>
    <banner></banner>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import Banner from './components/Banner/index.vue'

export default defineComponent({
  name: 'Recommend',
  components: { Banner }
})
</script>

<style lang='scss' scoped>
</style>
