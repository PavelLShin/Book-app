import './Filter.css'
import {
  selectTitleFilter,
  setTitleFilter,
  selectOnlyFavoriteFilter,
  setOnlyFavoriteFilter,
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
  const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

  const handleTitleFilterChange = (event) => {
    dispatch(setTitleFilter(event.target.value))
  }

  const handleAuthorFilterChange = (event) => {
    dispatch(setAuthorFilter(event.target.value))
  }

  const handleOnlyFavoriteChange = () => {
    dispatch(setOnlyFavoriteFilter())
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
        <div className="filter-group">
          <label>
            <input
              type="checkbox"
              checked={onlyFavoriteFilter}
              // передаём значение checkbox (true/false)
              onChange={handleOnlyFavoriteChange}
            />
            Only favorite
          </label>
        </div>

        <button type="button" onClick={handleResetFilters}>
          Reset filters
        </button>
      </div>
    </div>
  )
}

export default Filter
