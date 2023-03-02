import { type TodoTitle } from '../types'
import { NewTodo } from './NewTodo'

interface Props {
  onAddTodo: ({ title }: TodoTitle) => void
}

export const HeaderInput: React.FC<Props> = ({ onAddTodo }) => {
  return (
    <header>
      <h1>
        ToDo App
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png'
          alt='Typescript logo'
          style={{ width: '60px', height: 'auto' }}
        />
      </h1>
      <NewTodo addTodo={onAddTodo} />
    </header>
  )
}
