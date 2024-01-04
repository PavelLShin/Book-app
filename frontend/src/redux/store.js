import { configureStore } from '@reduxjs/toolkit'
import bookSlice from './slices/bookSlice'
import filterReducer from './slices/filterSlice'

const store = configureStore({
  // объект с редьюсерами
  reducer: {
    books: bookSlice,
    filter: filterReducer,
  },
})

export default store
