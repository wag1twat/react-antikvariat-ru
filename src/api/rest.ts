import { AxiosRequestConfig } from 'axios'
import { instance } from './axios'

export const get = async (path: string, config: AxiosRequestConfig) =>
  await instance.get(path, config)
export const post = async (path: string, config: AxiosRequestConfig) =>
  await instance.post(path, config)
