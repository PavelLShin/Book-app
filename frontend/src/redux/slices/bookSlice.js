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

export const selectAddBook = (state) => {
  return state.books
}

export default bookSlice.reducer
