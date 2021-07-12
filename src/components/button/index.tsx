import { defineComponent } from 'vue'

export default defineComponent({
  name: 'an-button',
  setup (props, { slots }) {
    return () => {
      return (
        <div class="an-button">
          { slots.default!() }
        </div>
      )
    }
  }
})