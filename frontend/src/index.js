import React from 'react'
import { Provider } from 'react-redux'
import store from './redux/store'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  // Предоставляем доступ всем нашим компонентам к магазину Redux
  <Provider store={store}>
    <App />
  </Provider>
)
