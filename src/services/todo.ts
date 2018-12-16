import { getByUrl, postByUrl } from '@/services/index'

const getTodo = getByUrl('todo/list')

const postTodo = postByUrl('todo/edit')

export default {
  getTodo,
  postTodo
}
