import axios, { AxiosError, type AxiosInstance } from 'axios'
import { HttpAdapter } from './http.adapter'
import { type BackendErrorResponse, HttpError } from './http.error'

interface Options {
  baseUrl: string
  params: Record<string, string>
}

export class AxiosAdapter implements HttpAdapter {
  private axiosInstance: AxiosInstance

  constructor(options: Options) {
    this.axiosInstance = axios.create({
      baseURL: options.baseUrl,
      params: options.params,
    })

    this.axiosInstance.interceptors.request.use(
      async (config) => {
        const token = await localStorage.getItem('token')

        if (token) {
          config.headers = {
            ...(config.headers as any),
            Authorization: `Bearer ${token}`,
          } as any
        }

        return config
      },
      (error) => {
        return Promise.reject(error)
      }
    )
  }
  async put<T>(url: string, body?: unknown, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.put<T>(url, body, options)
      return data
    } catch (error) {
      return this.handleError(error, 'PUT', url, body)
    }
  }

  async delete<T>(url: string, body?: unknown, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.delete<T>(url, {
        data: body,
        ...options,
      })
      return data
    } catch (error) {
      return this.handleError(error, 'DELETE', url, body)
    }
  }

  async get<T>(url: string, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.get<T>(url, options)
      return data
    } catch (error) {
      return this.handleError(error, 'GET', url)
    }
  }

  async post<T>(url: string, body?: unknown, options?: Record<string, unknown>): Promise<T> {
    try {
      const { data } = await this.axiosInstance.post<T>(url, body, options)
      return data
    } catch (error) {
      return this.handleError(error, 'POST', url, body)
    }
  }

  private handleError(error: any, method: string, url: string, body?: unknown): never {
    console.error(`AxiosAdapter ${method} Error:`, {
      url,
      body,
      error: error instanceof Error ? error.message : error,
      response: (error as any)?.response?.data,
      status: (error as any)?.response?.status,
      baseURL: this.axiosInstance.defaults.baseURL,
    })

    if (error instanceof AxiosError && error.response) {
      const backendResponse = error.response.data as BackendErrorResponse
      throw new HttpError(`${method} request failed`, error.response.status, backendResponse, error)
    }

    throw new HttpError(
      error instanceof Error ? error.message : 'Unknown error',
      0,
      undefined,
      error
    )
  }
}
