import { defineComponent } from 'vue'
import "./index.less"

import taylorSwift from './assets/images/taylor-swift-1.jpg'

export default defineComponent({
  name: 'demo',
  setup() {
    const title = "demo"
    return () => {
      return (
        <div >
          <h1 class="title">{title} components working!!!</h1>
        </div>
      )
    }
  }
})