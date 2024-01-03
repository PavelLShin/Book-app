import { createSlice } from '@reduxjs/toolkit'

// вся логика редьюсера для фильтров (современный подход)

// начальное состояние
const initialState = {
  title: '',
  author: '',
  onlyFavorite: false,
}

// Описываем наш редьюсер
const filterSlice = createSlice({
  // Название редьюсера
  name: 'filter',
  //   Начальное состояние
  initialState,
  //   Редьюсеры для filter
  reducers: {
    setTitleFilter: (state, action) => {
      // return { ...state, title: action.payload }

      // в slices мы можем напрямую менять state без return (Immer библиотека)
      state.title = action.payload
    },
    setAuthorFilter: (state, action) => {
      state.author = action.payload
    },
    setOnlyFavoriteFilter: (state) => {
      state.onlyFavorite = !state.onlyFavorite
    },
    // Сброс фильтров
    resetFilters: () => {
      return initialState
    },
  },
})

// это actionCreators (в скобках payload)
export const setTitleFilter = filterSlice.actions.setTitleFilter
export const resetFilters = filterSlice.actions.resetFilters
export const setAuthorFilter = filterSlice.actions.setAuthorFilter
export const setOnlyFavoriteFilter = filterSlice.actions.setOnlyFavoriteFilter

// доступ к filters в useSelector
export const selectTitleFilter = (state) => {
  return state.filter.title
}

export const selectAuthorFilter = (state) => {
  return state.filter.author
}

export const selectOnlyFavoriteFilter = (state) => {
  return state.filter.onlyFavorite
}

// Импортируем редьюсер
export default filterSlice.reducer
