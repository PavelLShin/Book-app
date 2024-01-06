import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './slices/bookSlice'
import filterReducer from './slices/filterSlice'
import errorReducer from './slices/errorSlice'

const store = configureStore({
  // объект с редьюсерами
  reducer: {
    books: bookSlice,
    filter: filterReducer,
    error: errorReducer,
  },
})

export default store
