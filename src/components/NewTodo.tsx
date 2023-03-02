import { useState } from 'react'
import { type TodoTitle } from '../types'

interface Props {
  addTodo: ({ title }: TodoTitle) => void
}

export const NewTodo: React.FC<Props> = ({ addTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    addTodo({ title: inputValue })
    setInputValue('')
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(event.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        className='new-todo'
        value={inputValue}
        onChange={handleChange}
        autoFocus
      />
    </form>
  )
}
