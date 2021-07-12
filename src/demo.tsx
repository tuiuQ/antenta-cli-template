import { defineComponent } from 'vue'
import Button from './components/button/index'
import "./index.less"

import taylorSwift from './assets/images/taylor-swift-1.jpg'

export default defineComponent({
  name: 'demo',
  components: {
    [Button.name]: Button
  },
  setup() {
    const title = "demo"
    return () => {
      return (
        <div >
          <h1 class="title">Taylor Swift</h1>
          <img src={taylorSwift} alt="" />
          <an-button>按钮</an-button>
          <an-switch />
        </div>
      )
    }
  }
})