import { getByUrl, postByUrl } from '@/services/index'

export const getTodo = getByUrl('todo/list')

export const postTodo = postByUrl('todo/edit')

export default {
  getTodo,
  postTodo
}
