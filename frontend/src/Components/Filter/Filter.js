import './Filter.css'
import {
  selectTitleFilter,
  setTitleFilter,
  resetFilters,
  setAuthorFilter,
  selectAuthorFilter,
} from '../../redux/slices/filterSlice'
import { useDispatch, useSelector } from 'react-redux'

function Filter() {
  const dispatch = useDispatch()
  // Подписываемся на состояние
  const titleFilter = useSelector(selectTitleFilter)
  const authorFilter = useSelector(selectAuthorFilter)

  const handleTitleFilterChange = (event) => {
    dispatch(setTitleFilter(event.target.value))
  }

  const handleAuthorFilterChange = (event) => {
    dispatch(setAuthorFilter(event.target.value))
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

        <div className="filter-group">
          <input
            type="text"
            placeholder="Filter by author..."
            value={authorFilter}
            onChange={handleAuthorFilterChange}
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
