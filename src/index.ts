import { App } from 'vue'

// `src/components` 디렉토리 내의 모든 `.vue` 파일을 자동으로 가져오기
const components = import.meta.glob('./components/*.vue', { eager: true })

export default {
  install(app: App) {
    Object.entries(components).forEach(([path, module]) => {
      // 파일명에서 컴포넌트 이름 추출 (예: `./components/RButton.vue` → `RButton`)
      const componentName = path.split('/').pop()?.replace('.vue', '') || ''
      if (componentName) {
        app.component(componentName, (module as any).default)
      }
    })
  }
}
