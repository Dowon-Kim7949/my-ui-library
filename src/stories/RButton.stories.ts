import RButton from "../../src/components/RButton.vue"

export default {
  title: "Components/Button",
  component: RButton
}

export const Default = () => ({
  components: { RButton },
  template: '<RButton text="Click me" />'
})
