import { defineComponent, Ref, ref } from 'vue'
import { http } from './http'
import { Banner } from './types/data-types'

export default defineComponent({
  name: 'App',
  setup () {
    const data: Ref<Banner[]> = ref([])
    http.get<{ banners: Banner[] }>({
      url: '/banner',
      requiresToken: false
    }).then((res) => {
      data.value = res.banners
    })
    return () => (
      <div>
        Hello { data.value.map(banner => {
          return <img src={banner.imageUrl}></img>
        }) }
      </div>
    )
  }
})