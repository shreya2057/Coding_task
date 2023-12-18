import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRouter from './router/Router.jsx'
import { Provider } from 'react-redux'
import store from './redux/store.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <AppRouter />
    </Provider>
  </React.StrictMode>,
)
