import * as actionTipes from './ationTipes'

// Эта функция принимает книгу
export const addBook = (newBook) => {
  return {
    type: actionTipes.ADD_BOOK,
    payload: newBook,
  }
}

export const deleteBook = (id) => {
  return {
    type: actionTipes.DELETE_BOOK,
    payload: id,
  }
}
