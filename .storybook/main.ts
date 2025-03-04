import type { StorybookConfig } from "@storybook/vue3-vite"

const config: StorybookConfig = {
  framework: "@storybook/vue3-vite",
  stories: ["../src/stories/**/*.stories.@(js|jsx|ts|tsx)"], // ✅ 경로 변경
  addons: ["@storybook/addon-essentials"],
  docs: {
    autodocs: "tag"
  }
}

export default config
