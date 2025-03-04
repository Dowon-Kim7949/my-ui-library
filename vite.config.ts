import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vue(), 
    dts({ insertTypesEntry: true }) // TypeScript 타입 선언 자동 생성
  ],
  build: {
    lib: {
      entry: 'src/index.ts',
      name: 'MyUILibrary',
      fileName: format => `my-ui-library.${format}.js`,
      formats: ['es', 'cjs', 'umd']
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
