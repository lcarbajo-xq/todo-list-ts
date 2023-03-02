import { FILTERS_BUTTONS } from '../consts'
import { type FilterValueType } from '../types'

interface Props {
  onFilterChange: (filter: FilterValueType) => void
  filterSelected: FilterValueType
}

export const Filters: React.FC<Props> = ({
  onFilterChange,
  filterSelected
}) => {
  return (
    <ul className='filters'>
      {Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
        const isSelected = key === filterSelected
        const className = isSelected ? 'selected' : ''
        return (
          <li key={key}>
            <a
              href={href}
              className={className}
              onClick={(event) => {
                event.preventDefault()
                onFilterChange(key as FilterValueType)
              }}>
              {literal}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
