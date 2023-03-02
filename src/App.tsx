import { useState } from 'react'
import { Footer } from './components/Footer'
import { HeaderInput } from './components/HeaderInput'
import { Todos } from './components/Todos'
import { TODO_FILTERS } from './consts'
import {
  type TodoId,
  type Todo as TodoType,
  type FilterValueType,
  type TodoTitle
} from './types'

const MOCK_TODOS = [
  {
    id: '1',
    title: 'Create App with Vite',
    completed: false
  },
  {
    id: '2',
    title: 'Apply Eslint for React + Typescript',
    completed: true
  },
  {
    id: '3',
    title: 'Take styles from TODOMVC App in Github',
    completed: false
  }
]
const App = (): JSX.Element => {
  const [todos, setTodos] = useState(MOCK_TODOS)
  const [filterSelected, setFilterSelected] = useState<FilterValueType>(
    TODO_FILTERS.ALL
  )

  const handleRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleCompleted = ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>): void => {
    const newTodos = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }

      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: FilterValueType): void => {
    setFilterSelected(filter)
  }

  const handleRemoveCompletedTasks = (): void => {
    const newTodos = todos.filter((todo) => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodo = {
      id: crypto.randomUUID(),
      title,
      completed: false
    }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.length - activeCount

  const filteredTodos = todos.filter((todo) => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  return (
    <div className='todoapp'>
      <HeaderInput onAddTodo={handleAddTodo} />
      <Todos
        onToggleComplete={handleCompleted}
        onRemoveTodo={handleRemove}
        todos={filteredTodos}
      />
      <Footer
        activeCount={activeCount}
        completedCount={completedCount}
        filterSelected={filterSelected}
        onClearCompleted={handleRemoveCompletedTasks}
        handleFilterChange={handleFilterChange}
      />
    </div>
  )
}

export default App
