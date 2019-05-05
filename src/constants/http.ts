export enum ApiStatusCode {
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
  UNAUTHORIZED = 'UNAUTHORIZED'
}

export interface ApiStatus {
  code?: ApiStatusCode
  msg?: string
}

export interface ResponseData {
  status?: ApiStatus
  [key: string]: any
}

export default {}
