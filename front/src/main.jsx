import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './views/Home.jsx'
import './index.css'
import store from './redux/store.js'
import { Provider } from 'react-redux'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <React.StrictMode>
      <Home />
    </React.StrictMode>
  </Provider>
)
