<template>
  <view class="content">
    <view>测试：{{ testStore.testText }}</view>
    <!-- {{ testText }} -->
    <button @tap="testStore.setTestText('change test text')" size="mini" plain type="primary">保存用户信息</button>
    <button @tap="testStore.clearTestText()" v-for="i in 10" :key="i">清空测试数据</button>
  </view>
</template>

<script setup lang="ts">
import { useTestStore } from '@/store'
import { ref } from 'vue'

const testStore = useTestStore()
const testText = ref('1')
</script>

<style lang="scss">
view {
  color: red;
}
</style>
