<script setup lang="ts">
defineProps<{ text?: string }>()
</script>

<template>
  <div class="r-select p-4 border border-gray-300 rounded">
    {{ text || "RSelect" }}
  </div>
</template>

<style scoped>
/* 필요한 스타일 추가 */
</style>
