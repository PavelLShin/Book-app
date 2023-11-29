import './App.css'
import BookList from './Components/BookList/BookList'
import BookForm from './Components/BookForm/BookForm'
import Filter from './Components/Filter/Filter'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
    </div>
  )
}

export default App
