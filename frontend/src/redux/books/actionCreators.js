import * as actionTipes from './ationTipes'

// Эта фугкция принимает книгу
export const addBook = (newBook) => {
  return {
    type: actionTipes.ADD_BOOK,
    payload: newBook,
  }
}
