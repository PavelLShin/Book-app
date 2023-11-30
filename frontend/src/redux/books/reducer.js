import * as actionTipes from './ationTipes'

// Создаём начальное состояние
const initialState = []

const booksReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTipes.ADD_BOOK:
      return [...state, action.payload]
    case actionTipes.DELETE_BOOK:
      return state.filter((el) => el.id !== action.payload)
    default:
      return state
  }
}

export default booksReducer
