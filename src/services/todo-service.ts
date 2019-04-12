import Todo from '@/models/todo'

export default class TodoService {
  getList(): Todo[] {
    const todos = [
      { id: 1, task: 'First task', done: true },
      { id: 2, task: 'Second task', done: false }
    ]
    return todos
  }
}
