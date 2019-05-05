import { getByUrl } from '@/services/index'
import { ApiStatus } from '@/constants/http'

export interface User {
  uid: string
  name: string
  age: number
}

export interface UserRes {
  status?: ApiStatus
  result?: User
}

export const fetchUser = getByUrl<UserRes>('user')

export default {}
