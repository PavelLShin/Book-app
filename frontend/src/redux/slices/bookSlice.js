import { createBookWithId } from '../../utils/createBookWithId'

// Импортируем axios
import axios from 'axios'

import { createSlice } from '@reduxjs/toolkit'

const initialState = []

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload)
    },
    deleteBook: (state, action) => {
      return state.filter((el) => el.id !== action.payload)
    },
    toggleFavorite: (state, action) => {
      return state.map((el) =>
        el.id === action.payload ? { ...el, isFavorite: !el.isFavorite } : el
      )
    },
  },
})

export const addBook = bookSlice.actions.addBook
export const deleteBook = bookSlice.actions.deleteBook
export const toggleFavorite = bookSlice.actions.toggleFavorite

// Функция для отправки асинхронных запросов в ридакс стор
// dispatch - функция для отправки в ридак стор
// getState() - доступ у состоянию
export const thunkFunction = async (dispatch, getState) => {
  try {
    const res = await axios.get('http://localhost:4000/random-book')
    if (res.data && res.data.title && res.data.author) {
      dispatch(addBook(createBookWithId(res.data, 'API')))
    }
  } catch (error) {
    console.log('Error fetching random book', error)
  }
}
export const selectAddBook = (state) => {
  return state.books
}

export default bookSlice.reducer
