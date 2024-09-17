import { defineComponent } from 'vue'
import "./index.less"

export default defineComponent({
  name: 'App',
  setup() {
    const title = "app"
    return () => {
      return (
        <div >
          <h1 class="title">{{name}}{title} components working!!!</h1>
        </div>
      )
    }
  }
})
