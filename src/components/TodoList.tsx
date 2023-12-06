import { useAppSelector } from '../store'

export function TodoList() {
  const todoList = useAppSelector(store => {
    return store.todo
  })

  console.log(todoList)

  return (
    <ul>
      {todoList.map((todo) => {
        return <li key={todo}>{todo}</li>
      })}
    </ul>
  )
}