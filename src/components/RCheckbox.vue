<script setup lang="ts">
defineProps<{ text?: string }>()
</script>

<template>
  <div class="r-checkbox p-4 border border-gray-300 rounded">
    {{ text || "RCheckbox" }}
  </div>
</template>

<style scoped>
/* 필요한 스타일 추가 */
</style>
