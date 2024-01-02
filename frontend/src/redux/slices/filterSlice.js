import { createSlice } from '@reduxjs/toolkit'

// вся логика редьюсера для фильтров (современный подход)

// начальное состояние
const initialState = {
  title: '',
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
    // Сброс фильтров
    resetFilters: (state) => {
      return initialState
    },
  },
})

// это actionCreators (в скобках payload)
export const setTitleFilter = filterSlice.actions.setTitleFilter
export const resetFilters = filterSlice.actions.resetFilters

// доступ к filters в useSelector
export const selectTitleFilter = (state) => {
  return state.filter.title
}

// Импортируем редьюсер
export default filterSlice.reducer
