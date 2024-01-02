import './Filter.css'
import {
  selectTitleFilter,
  setTitleFilter,
  resetFilters,
} from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Filter() {
  const dispatch = useDispatch()
  // Подписываемся на состояние
  const titleFilter = useSelector(selectTitleFilter)

  const handleTitleFilterChange = (event) => {
    dispatch(setTitleFilter(event.target.value))
  }

  const handleResetFilters = () => {
    return dispatch(resetFilters())
  }
  return (
    <div className="app-block filter">
      <div className="filter-row">
        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by tittle..."
            value={titleFilter}
            onChange={handleTitleFilterChange}
          />
        </div>
        <button type="button" onClick={handleResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  )
}

export default Filter
