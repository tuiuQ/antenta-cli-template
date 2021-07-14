import axios, { AxiosInstance, AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios'
import config from '../../config'

export class Interceptors {

  public instance: AxiosInstance | undefined

  constructor () {
    this.instance = axios.create({
      baseURL: `${(config.NODE_ENV === 'production'
        ? config.build.env.baseURL
        : config.dev.env.baseURL)}`,
      timeout: 10000,
      withCredentials: true
    })
  }

  init () {
    ;(this.instance as AxiosInstance).interceptors.request.use(
      (config: AxiosRequestConfig): AxiosRequestConfig => {
        return config
      },
      (err: AxiosError): Promise<AxiosError> => {
        return Promise.reject(err)
      }
    )

    ;(this.instance as AxiosInstance).interceptors.response.use(
      (response: AxiosResponse): any => {
        return Promise.resolve(response)
      },
      (err: AxiosError): Promise<AxiosError> => {
        return Promise.reject(err)
      }
    )
  }

  getInterceptors () {
    return this.instance
  }
}