import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
// Этот хук помогает отправлять action в магазин Redux
import { useDispatch } from 'react-redux'
// Наш action
import { addBook } from '../../redux/books/actionCreators'

// Добавляем json файл с книгами, который после такого добавления становится js объектом??
import booksData from '../../data/books.json'
import './BookForm.css'

function BookForm() {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')

  // Присваиваем вызов хука переменной
  const dispatch = useDispatch()

  // Рандомно добавляем книгу из json
  const handelAddRandomBook = () => {
    // Рандомный индекс элемента в массиве книг
    const randomIndex = Math.floor(Math.random() * booksData.length)
    const randomBook = booksData[randomIndex]

    // Добавляем к данным из json уникальный id
    const randomBookWidthId = {
      ...randomBook,
      isFavorite: false,
      id: uuidv4(),
    }
    // Отправляем даныне в redux store (в state)
    dispatch(addBook(randomBookWidthId))
  }

  const handelSumbit = (event) => {
    event.preventDefault()
    if (title && author) {
      const book = {
        isFavorite: false,
        title: title,
        author: author,
        id: uuidv4(),
      }
      // Отправляем действие в магазин Redux
      dispatch(addBook(book))

      setAuthor('')
      setTitle('')
    }
  }
  return (
    <div className="app-block book-form">
      <h2>Add a New Book</h2>
      <form onSubmit={handelSumbit}>
        <div>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(event) => setTitle(event.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(event) => setAuthor(event.target.value)}
          />
        </div>
        <button type="submit">Add Book</button>
        <button type="button" onClick={handelAddRandomBook}>
          Add Random
        </button>
      </form>
    </div>
  )
}

export default BookForm
