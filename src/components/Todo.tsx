import { type MouseEventHandler } from 'react'
import { type Todo as TodoType } from '../types'

interface Props extends TodoType {
  onRemoveTodo: MouseEventHandler<HTMLButtonElement>
  onToggleComplete: ({
    id,
    completed
  }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({
  id,
  title,
  completed,
  onRemoveTodo,
  onToggleComplete
}) => {
  return (
    <div className='view'>
      <input
        className='toggle'
        checked={completed}
        type='checkbox'
        onChange={(event) => {
          onToggleComplete({ id, completed: event.target.checked })
        }}
      />
      <label>{title}</label>
      <button className='destroy' onClick={onRemoveTodo}></button>
    </div>
  )
}
