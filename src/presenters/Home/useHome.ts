import { useEffect } from 'react'
import { useLazyBrowseQuery } from '../../services/todos/todoApi'

const useHome = () => {
  const [fetchTodos, { data: todos, error, isLoading }] = useLazyBrowseQuery({
    pollingInterval: 5000,
  })

  useEffect(() => {
    fetchTodos(null)
  }, [])

  return {
    todos,
    error,
    isLoading,
    onRefresh: () => fetchTodos(null),
  }
}

export default useHome
