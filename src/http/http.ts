import { IHttpClient, IHttpClientRequestParameters } from "./types";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { Interceptors } from "./interceptors";


export class HttpClient implements IHttpClient {

  private axios: AxiosInstance | undefined

  constructor () {
    this.axios = new Interceptors().getInterceptors()
  }

  get<T> (parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters

      const options: AxiosRequestConfig = {
        headers: {}
      }

      if (requiresToken) {
        // TODO 
        // 处理Token
      }

      ;(this.axios as AxiosInstance)
        .get(url, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T)
        })
        .catch((error: AxiosError) => {
          reject(error)
        })
    })
  }

  post<T> (parameters: IHttpClientRequestParameters<T>): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, payload, requiresToken } = parameters

      const options: AxiosRequestConfig = {
        headers: {}
      }

      if (requiresToken) {
        // TODO 
        // 处理Token
      }

      ;(this.axios as AxiosInstance)
        .post(url, payload, options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T)
        })
        .catch((error: AxiosError) => {
          reject(error)
        })
    })
  }
}

export const http = new HttpClient() 