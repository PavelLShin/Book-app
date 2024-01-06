import { createBookWithId } from '../../utils/createBookWithId'

// Импортируем axios
import axios from 'axios'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = []

// асинхронный запрос для редьюсера
export const fetchBook = createAsyncThunk(
  // начало должно совпадать с name в bookSlice (название типа действия)
  'books/fetchBook',
  // асинхронная функция
  async () => {
    const res = await axios.get('http://localhost:5000/random-book')
    return res.data
  }
)

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
  // Редьюсер для асинхронных запросов
  extraReducers: (builder) => {
    // первым аргументом идёт фулфилд запроса, вторым - редьюсер после успешного получения данных (изменение state)
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      if (action.payload.title && action.payload.author) {
        state.push(createBookWithId(action.payload, 'API'))
      }
    })
    // действия в случае ошибки
    // builder.addCase(fetchBook.rejected, (state, action) => {
    //   console.log(action)
    // })
  },
})

export const addBook = bookSlice.actions.addBook
export const deleteBook = bookSlice.actions.deleteBook
export const toggleFavorite = bookSlice.actions.toggleFavorite

export const selectAddBook = (state) => {
  return state.books
}

export default bookSlice.reducer
