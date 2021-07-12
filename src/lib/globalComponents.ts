import type { App } from 'vue'
import AnSwitch from '../components/switch'

const components = [
  AnSwitch
]

const install = (app: App): void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

export default {
  install
}