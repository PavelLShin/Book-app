// С помощью этого хука мы подпишемся на изменение состояния
import { useSelector } from 'react-redux'
import './BookList.css'

function BookList() {
  // При вызове функции вызывается кол-бэк с состоянием (или его частью) для подписки
  const books = useSelector((state) => {
    return state.books
  })
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
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export default BookList
