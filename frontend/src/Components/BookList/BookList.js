// С помощью этого хука мы подпишемся на изменение состояния, а с помощью второго передадим action в store
import { useSelector, useDispatch } from 'react-redux'

// Импортируем иконки для добавления в избранное
import { BsBookmarkStar, BsBookmarkStarFill } from 'react-icons/bs'

// Удаление книги из списка
import { deleteBook, toogleFavorite } from '../../redux/books/actionCreators'
import './BookList.css'
import { selectTitleFilter } from '../../redux/slices/filterSlice'

function BookList() {
  // При вызове функции вызывается кол-бэк с состоянием (или его частью) для подписки
  const books = useSelector((state) => {
    return state.books
  })

  const titleFilter = useSelector(selectTitleFilter)

  const dispatch = useDispatch()

  // Удаление книги
  const handleDeleteBook = (id) => {
    return dispatch(deleteBook(id))
  }

  // Оставляем книги по фильтру
  const filteredBook = books.filter((book) => {
    const matchesTitle = book.title
      .toLowerCase()
      .includes(titleFilter.toLowerCase())
    return matchesTitle
  })

  // Добавление книги в избранное
  const handleToggleFavorite = (id) => {
    return dispatch(toogleFavorite(id))
  }
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {/* Итерируемся по массиву данных */}
          {filteredBook.map((el, id) => {
            return (
              <li key={el.id}>
                <div className="book-info">
                  {++id}. {el.title} by <strong>{el.author}</strong>
                </div>
                <div className="book-actions">
                  <span onClick={() => handleToggleFavorite(el.id)}>
                    {el.isFavorite ? (
                      <BsBookmarkStarFill className="star-icon" />
                    ) : (
                      <BsBookmarkStar className="star-icon" />
                    )}
                  </span>
                  <button onClick={() => handleDeleteBook(el.id)}>
                    Delete
                  </button>
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default BookList
