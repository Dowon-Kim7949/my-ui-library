<script setup lang="ts">
defineProps<{ text?: string }>()
</script>

<template>
  <div class="r-footer p-4 border border-gray-300 rounded">
    {{ text || "RFooter" }}
  </div>
</template>

<style scoped>
/* 필요한 스타일 추가 */
</style>
