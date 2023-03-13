import type { Todo } from './types'

class TodoService {
  async browse(): Promise<Todo[]> {
    // TODO
  }

  async read(id: string): Promise<Todo> {
    // TODO
  }

  async edit(id: string, payload: Todo): Promise<Todo> {
    // TODO
  }

  async add(payload: Todo): Promise<Todo> {
    // TODO
  }

  async delete(id: string): Promise<boolean> {
    // TODO
  }
}

const todoService = new TodoService()

export default todoService
