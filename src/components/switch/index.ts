import Switch from './src'
import type { App } from 'vue'

Switch.install = (app: App): void => {
  app.component(Switch.name, Switch)
}

export default Switch