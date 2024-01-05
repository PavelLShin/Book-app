import { v4 as uuidv4 } from 'uuid'

export const createBookWithId = (book, source) => {
  return {
    source,
    ...book,
    isFavorite: false,
    id: uuidv4(),
  }
}
