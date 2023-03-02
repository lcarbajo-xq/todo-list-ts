import { type FilterValueType } from '../types'
import { Filters } from './Filters'

interface Props {
  activeCount: number
  completedCount: number
  filterSelected: FilterValueType
  onClearCompleted: () => void
  handleFilterChange: (filter: FilterValueType) => void
}

export const Footer: React.FC<Props> = ({
  activeCount,
  completedCount,
  filterSelected,
  onClearCompleted,
  handleFilterChange
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount} pending tasks</strong>
      </span>

      <Filters
        filterSelected={filterSelected}
        onFilterChange={handleFilterChange}
      />
      {completedCount > 0 && (
        <button className='clear-completed' onClick={onClearCompleted}>
          Clear completed tasks
        </button>
      )}
    </footer>
  )
}
