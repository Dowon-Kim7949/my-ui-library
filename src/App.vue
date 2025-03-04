<script setup lang="ts">
import { ref } from 'vue'
import RButton from './components/RButton.vue'
import RInput from './components/RInput.vue'

const inputValue = ref('')
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
    <h1 class="text-3xl font-bold text-gray-800 mb-6">My UI Library Test</h1>

    <div class="flex flex-col gap-4 w-full max-w-sm">
      <RInput v-model="inputValue" placeholder="Enter text..." class="w-full" />
      <RButton text="Click Me" class="w-full bg-blue-500 text-white" />
    </div>

    <p class="mt-4 text-gray-600">Typed Text: {{ inputValue }}</p>
  </div>
</template>

<style scoped>
/* 추가적인 스타일링이 필요하면 여기에 */
</style>
