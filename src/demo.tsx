import { defineComponent } from 'vue'
import { http } from './http'

export default defineComponent({
  name: 'demo',
  async setup () {
    const res = await http.get({
      url: '/test',
      requiresToken: false
    })
    return () => (
      <div>
        { res } Hello Demo
      </div>
    )
  }
})