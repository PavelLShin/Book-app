// С помощью этого хука мы подпишемся на изменение состояния, а с помощью второго передадим action в store
import { useSelector, useDispatch } from 'react-redux'
// Удаление книги из списка
import { deleteBook } from '../../redux/books/actionCreators'
import './BookList.css'

function BookList() {
  // При вызове функции вызывается кол-бэк с состоянием (или его частью) для подписки
  const books = useSelector((state) => {
    return state.books
  })

  const dispatch = useDispatch()

  const handleDeleteBook = (id) => {
    dispatch(deleteBook(id))
  }
  return (
    <div className="app-block book-list">
      <h2>Book List</h2>
      {books.length === 0 ? (
        <p>No books available</p>
      ) : (
        <ul>
          {/* Итерируемся по массиву данных */}
          {books.map((el, id) => {
            return (
              <li key={el.id}>
                <div className="book-info">
                  {++id}. {el.title} by <strong>{el.author}</strong>
                </div>
                <div className="book-actions">
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
