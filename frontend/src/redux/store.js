import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/reducer'

const store = configureStore({
  // объект с редьюсерами
  reducer: {
    books: booksReducer,
  },
})

export default store
