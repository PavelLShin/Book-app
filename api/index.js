// Импортируем express
const express = require('express')
// Импортируем cors
const cors = require('cors')
// Импортируем booksData
const booksData = require('./data/books.json')

// Создаём приложение express
const app = express()

// Применяем cors
app.use(cors())

// Рандомно ищем и отдаём книгу
function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length)
  const randomBook = booksData[randomIndex]
  return randomBook
}

// Добавляем обработку пути 'localhost:4000/random-book'
app.get('/random-book', (req, res) => {
  res.json(getRandomBook())
})

// Добавляем обработку пути 'localhost:4000/random-book-delayer (ответ с задержкой)'
app.get('/random-book-delayer', (req, res) => {
  setTimeout(() => {
    res.json(getRandomBook())
  }, 2000)
})

// Запускаем сервер на определённом порту
const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
