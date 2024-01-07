import { createBookWithId } from '../../utils/createBookWithId'

// Импортируем axios
import axios from 'axios'

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { setError } from './errorSlice'

const initialState = []

// асинхронный запрос для редьюсера
export const fetchBook = createAsyncThunk(
  // начало должно совпадать с name в bookSlice (название типа действия)
  'books/fetchBook',
  // асинхронная функция принимает url и thunkAPI - которая даёт доступ к dispatch
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url)
      return res.data
    } catch (error) {
      // Тут мы через dispatch отправляем ошибку в errorSlice
      thunkAPI.dispatch(setError(error.message))
      // генерируем её заново, чтобы она не попала в  fuilfiled, а попала в rejected
      throw error
    }
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
  // Редьюсер для асинхронных запросов 1
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

  // Редьюсер для асинхронных запросов 2
  // extraReducers: {
  //   [fetchBook.fulfilled]: (state, action) => {
  //     if (action.payload.title && action.payload.author) {
  //       state.push(createBookWithId(action.payload, 'API'))
  //     }
  //   },
  // },
})

export const addBook = bookSlice.actions.addBook
export const deleteBook = bookSlice.actions.deleteBook
export const toggleFavorite = bookSlice.actions.toggleFavorite

export const selectAddBook = (state) => {
  return state.books
}

export default bookSlice.reducer
