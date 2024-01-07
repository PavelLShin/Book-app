import { useState } from 'react'
// Этот хук помогает отправлять action в магазин Redux
import { useDispatch } from 'react-redux'

// // Наш action
import { addBook, fetchBook } from '../../redux/slices/bookSlice'

// Добавляем json файл с книгами, который после такого добавления становится js объектом??
import booksData from '../../data/books.json'

// Функция для добавления объекта в redux
import { createBookWithId } from '../../utils/createBookWithId'

import { setError } from '../../redux/slices/errorSlice'

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
    createBookWithId(randomBook)
    // Отправляем даныне в redux store (в state)
    dispatch(addBook(createBookWithId(randomBook, 'random')))
  }

  const handelSumbit = (event) => {
    event.preventDefault()
    if (title && author) {
      createBookWithId({ title: title, author: author })
      // Отправляем действие в магазин Redux
      dispatch(
        addBook(createBookWithId({ title: title, author: author }, 'manual'))
      )

      setAuthor('')
      setTitle('')
    } else {
      dispatch(setError('You must fill title and author'))
    }
  }

  // Получение книг из API асинхронно при помощи thuncFunction!
  const handleAddRandomBookViaAPI = async () => {
    dispatch(fetchBook('http://localhost:4000/random-book'))
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
        <button type="button" onClick={handleAddRandomBookViaAPI}>
          Add Random via API
        </button>
      </form>
    </div>
  )
}

export default BookForm
