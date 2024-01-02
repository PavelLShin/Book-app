import { configureStore } from '@reduxjs/toolkit'
import booksReducer from './books/reducer'
import filterReducer from './slices/filterSlice'

const store = configureStore({
  // объект с редьюсерами
  reducer: {
    books: booksReducer,
    filter: filterReducer,
  },
})

export default store
