import { AxiosInstance } from "axios";
import type { App } from 'vue'
import { http } from './http'

export { http } from './http'

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $axios?: AxiosInstance
  }
}


export const axiosPlugin = {
  install (app: App): void {
    app.config.globalProperties.$axios = http
  }
}

export default axiosPlugin