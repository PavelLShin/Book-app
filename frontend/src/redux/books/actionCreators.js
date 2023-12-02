import * as actionTipes from './ationTipes'

// Эта функция принимает книгу
export const addBook = (newBook) => {
  return {
    type: actionTipes.ADD_BOOK,
    payload: newBook,
  }
}

// Эта функция удаляет книгу
export const deleteBook = (id) => {
  return {
    type: actionTipes.DELETE_BOOK,
    payload: id,
  }
}

// Эта функция добавляет книгу в избранное
export const toogleFavorite = (id) => {
  return {
    type: actionTipes.TOOGLE_FAVORITE,
    payload: id,
  }
}
