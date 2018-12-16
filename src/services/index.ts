import Axios from 'axios'
import { REQ_STATUS_CODE, BASE_PATH } from '@/constants/services'

export const instance = Axios.create({
  baseURL: BASE_PATH,
  withCredentials: true // 默认的
})

const headers = {
  'Content-Type': 'application/json'
}

const defaultGetOption = {
  // paramsSerializer: formatTransformRequest,
}

const defaultPostOption = {
  headers
}

export const get = (url, params, option = {}) =>
  instance
    .get(`${url}`, { params, ...defaultGetOption, ...option })
    .then(res => {
      const { status } = res.data
      return status.code !== REQ_STATUS_CODE.SUCCESS
        ? Promise.reject(status)
        : res.data
    })

export const post = (url, data, option = {}) =>
  instance
    .post(`${url}`, data, { ...defaultPostOption, ...option })
    .then(res => {
      const { status } = res.data
      return status.code !== REQ_STATUS_CODE.SUCCESS
        ? Promise.reject(status)
        : res.data
    })

export const getByUrl = url => (params, ...args) => get(url, params, ...args)
export const postByUrl = url => (data, ...args) => post(url, data, ...args)
