import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  setup () {
    return () => {
      return (
        <div class="home-wrapper">
          首页
        </div>
      )
    }
  }
})