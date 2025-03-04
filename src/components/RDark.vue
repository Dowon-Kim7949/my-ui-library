<script setup lang="ts">
defineProps<{ text?: string }>()
</script>

<template>
  <div class="r-dark p-4 border border-gray-300 rounded">
    {{ text || "RDark" }}
  </div>
</template>

<style scoped>
/* 필요한 스타일 추가 */
</style>
