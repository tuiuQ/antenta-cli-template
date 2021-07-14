import { IHttpClient, IHttpClientRequestParameters } from "./types";
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'


export class HttpClient implements IHttpClient {

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

      axios
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

      axios
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