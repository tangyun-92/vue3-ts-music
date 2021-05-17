<template>
  <div>
    <t-header></t-header>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import THeader from '@/components/THeader/index.vue'

export default defineComponent({
  name: 'Home',
  components: {
    THeader
  }
})
</script>
