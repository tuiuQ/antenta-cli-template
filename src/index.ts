import { createApp } from 'vue'
import App from './demo'
import GlobalComponents from './lib/globalComponents'

const app = createApp(App)

app.use(GlobalComponents)
app.mount("#app")